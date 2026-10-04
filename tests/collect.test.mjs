import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { buildPublishSet } from '../scripts/lib/collect.mjs'

const MAPPING = { '0-AI 全栈': '01-full-stack', '1-Harness': '02-agent' }

function fakeVault() {
  const root = mkdtempSync(join(tmpdir(), 'sync-vault-'))
  const publicDir = mkdtempSync(join(tmpdir(), 'sync-pub-'))
  mkdirSync(join(root, '0-AI 全栈'), { recursive: true })
  mkdirSync(join(root, '1-Harness'), { recursive: true })
  mkdirSync(join(root, '9-未映射'), { recursive: true })
  writeFileSync(
    join(root, '1-Harness', 'Agent 笔记.md'),
    '---\ntitle: Agent 笔记\npublish: true\ndate: 2026-01-15\ntags: [agent]\n---\n\n正文见 [[Pytorch 学习]]。\n\n![[img.png]]\n'
  )
  writeFileSync(
    join(root, '0-AI 全栈', 'Pytorch 学习.md'),
    '---\npublish: true\ncreated: 2025-12-01\n---\n\n# Pytorch\n\n指向 [[Agent 笔记]] 与 [[未发布笔记]]。\n'
  )
  writeFileSync(join(root, '9-未映射', 'Orphan.md'), '---\npublish: true\n---\n\n孤立内容\n')
  writeFileSync(join(root, '1-Harness', '私稿.md'), '---\ntitle: 私稿\n---\n\n不发布\n')
  writeFileSync(join(root, '1-Harness', 'img.png'), 'PNGDATA')
  return { root, publicDir }
}

test('collects only publish:true notes, skips unmapped with warning', () => {
  const f = fakeVault()
  try {
    const r = buildPublishSet({
      vaultRoot: f.root,
      mapping: MAPPING,
      publicRoot: f.publicDir,
      dateFallback: () => '2020-01-01',
    })
    const sources = r.entries.map((e) => e.source)
    assert.ok(sources.some((s) => s.endsWith('Agent 笔记.md')))
    assert.ok(sources.some((s) => s.endsWith('Pytorch 学习.md')))
    assert.ok(!sources.some((s) => s.endsWith('私稿.md')))
    assert.ok(r.skipped.some((s) => s.source.endsWith('Orphan.md') && /映射|mapping|category/i.test(s.reason)))
  } finally {
    rmSync(f.root, { recursive: true, force: true })
    rmSync(f.publicDir, { recursive: true, force: true })
  }
})

test('attachment outside vault root but inside repo root resolves (orchestrator wiring)', () => {
  const f = fakeVault()
  const outside = join(f.root, '..', 'attachments-outer-test')
  try {
    mkdirSync(outside, { recursive: true })
    writeFileSync(join(outside, 'outer.png'), 'PNG')
    writeFileSync(
      join(f.root, '1-Harness', '带外图笔记.md'),
      '---\npublish: true\ntitle: 带外图笔记\n---\n\n![[outer.png]]\n'
    )
    const r = buildPublishSet({
      vaultRoot: f.root,
      repoRoot: outside,
      mapping: MAPPING,
      publicRoot: f.publicDir,
      dateFallback: () => '2020-01-01',
    })
    const e = r.entries.find((x) => x.title === '带外图笔记')
    assert.match(e.md, /!\[outer\]\(\/img\/notes\/带外图笔记\/outer\.png\)/)
  } finally {
    rmSync(f.root, { recursive: true, force: true })
    rmSync(f.publicDir, { recursive: true, force: true })
    rmSync(outside, { recursive: true, force: true })
  }
})

test('same basename published in different categories is a collision, not silent last-wins', () => {
  const root = mkdtempSync(join(tmpdir(), 'sync-vault-'))
  const publicDir = mkdtempSync(join(tmpdir(), 'sync-pub-'))
  try {
    mkdirSync(join(root, '0-AI 全栈'), { recursive: true })
    mkdirSync(join(root, '1-Harness'), { recursive: true })
    writeFileSync(join(root, '0-AI 全栈', '同名.md'), '---\npublish: true\n---\n\nA\n')
    writeFileSync(join(root, '1-Harness', '同名.md'), '---\npublish: true\n---\n\nB\n')
    const r = buildPublishSet({ vaultRoot: root, mapping: MAPPING, publicRoot: publicDir, dateFallback: () => '2020-01-01' })
    assert.equal(r.collisionList.length, 1)
  } finally {
    rmSync(root, { recursive: true, force: true })
    rmSync(publicDir, { recursive: true, force: true })
  }
})

test('note never committed to git gets today as final date fallback', () => {
  const root = mkdtempSync(join(tmpdir(), 'sync-vault-'))
  const publicDir = mkdtempSync(join(tmpdir(), 'sync-pub-'))
  try {
    mkdirSync(join(root, '1-Harness'), { recursive: true })
    writeFileSync(join(root, '1-Harness', '新笔记.md'), '---\npublish: true\n---\n\n内容\n')
    const r = buildPublishSet({ vaultRoot: root, mapping: MAPPING, publicRoot: publicDir, dateFallback: () => '' })
    const e = r.entries.find((x) => x.title === '新笔记')
    assert.equal(e.date, new Date().toISOString().slice(0, 10))
  } finally {
    rmSync(root, { recursive: true, force: true })
    rmSync(publicDir, { recursive: true, force: true })
  }
})

test('wikilinks between published notes resolve to internal urls', () => {
  const f = fakeVault()
  try {
    const r = buildPublishSet({
      vaultRoot: f.root,
      mapping: MAPPING,
      publicRoot: f.publicDir,
      dateFallback: () => '2020-01-01',
    })
    const agent = r.entries.find((e) => e.title === 'Agent 笔记')
    const py = r.entries.find((e) => e.title === 'Pytorch 学习')
    assert.match(agent.md, /\[Pytorch 学习\]\(\/techblog\/01-full-stack\/Pytorch-学习\.html\)/)
    assert.match(py.md, /\[Agent 笔记\]\(\/techblog\/02-agent\/Agent-笔记\.html\)/)
    assert.match(py.md, /未发布笔记/, 'unpublished target degrades to text')
  } finally {
    rmSync(f.root, { recursive: true, force: true })
    rmSync(f.publicDir, { recursive: true, force: true })
  }
})

test('date falls back fm.date, then created, then dateFallback', () => {
  const f = fakeVault()
  try {
    const r = buildPublishSet({
      vaultRoot: f.root,
      mapping: MAPPING,
      publicRoot: f.publicDir,
      dateFallback: () => '2020-01-01',
    })
    const agent = r.entries.find((e) => e.title === 'Agent 笔记')
    const py = r.entries.find((e) => e.title === 'Pytorch 学习')
    assert.equal(String(agent.date).slice(0, 10), '2026-01-15')
    assert.equal(String(py.date).slice(0, 10), '2025-12-01')
  } finally {
    rmSync(f.root, { recursive: true, force: true })
    rmSync(f.publicDir, { recursive: true, force: true })
  }
})

test('output frontmatter is whitelisted and publish flag is dropped', () => {
  const f = fakeVault()
  try {
    const r = buildPublishSet({
      vaultRoot: f.root,
      mapping: MAPPING,
      publicRoot: f.publicDir,
      dateFallback: () => '2020-01-01',
    })
    const agent = r.entries.find((e) => e.title === 'Agent 笔记')
    assert.doesNotMatch(agent.md, /publish/)
    assert.match(agent.md, /^---\ntitle: Agent 笔记\n/)
  } finally {
    rmSync(f.root, { recursive: true, force: true })
    rmSync(f.publicDir, { recursive: true, force: true })
  }
})

test('embedded image is copied under public and referenced with base-ready url', () => {
  const f = fakeVault()
  try {
    const r = buildPublishSet({
      vaultRoot: f.root,
      mapping: MAPPING,
      publicRoot: f.publicDir,
      dateFallback: () => '2020-01-01',
    })
    const agent = r.entries.find((e) => e.title === 'Agent 笔记')
    assert.match(agent.md, /!\[img\]\(\/img\/notes\/Agent-笔记\/img\.png\)/)
    assert.equal(r.copiedAssets.some((p) => p.endsWith('img.png')), true)
  } finally {
    rmSync(f.root, { recursive: true, force: true })
    rmSync(f.publicDir, { recursive: true, force: true })
  }
})
