#!/usr/bin/env node
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildPublishSet } from './lib/collect.mjs'
import { planSync } from './lib/plan.mjs'
import { renderIndexPages } from './lib/pages.mjs'

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url))
const BLOG_ROOT = join(SCRIPT_DIR, '..')
const VAULT = 'D:/A_myfile/myObsidian/obsidian/C_Skills'
const VAULT_REPO = 'D:/A_myfile/myObsidian/obsidian'
const PUBLIC = join(BLOG_ROOT, 'blog', 'public')
const MANIFEST_PATH = join(SCRIPT_DIR, 'sync-manifest.json')

const MAPPING = {
  '0-AI 全栈': '01-full-stack',
  '1-Harness': '02-agent',
  '2 Linux about': '01-full-stack',
  '3 C and C++': '01-full-stack',
  设计模式: '01-full-stack',
  '0-AGI_Explore': '05-summary',
  '4 other_tool': '05-summary',
}

const CURATED = [
  { title: '软件测试：Mock', date: '2026-02-12', url: '/techblog/01-full-stack/python/web-testing.html', category: '01-full-stack' },
  { title: 'Agent Skill 笔记', date: '2026-02-04', url: '/techblog/02-agent/skills.html', category: '02-agent' },
  { title: 'Git & GitHub 笔记', date: '2023-09-16', url: '/techblog/01-full-stack/linux/git-github.html', category: '01-full-stack' },
  { title: 'Linux 环境与工具笔记', date: '2023-09-16', url: '/techblog/01-full-stack/linux/wsl-setup.html', category: '01-full-stack' },
]

const NO_PUSH = process.argv.includes('--no-push')
const NO_BUILD = process.argv.includes('--no-build')

if (!existsSync(VAULT)) {
  console.error(`vault 不存在: ${VAULT}`)
  process.exit(1)
}

function gitFirstDate(absPath) {
  const rel = absPath.slice(VAULT_REPO.length + 1).split('\\').join('/')
  try {
    const out = execFileSync('git', ['-C', VAULT_REPO, 'log', '--diff-filter=A', '--format=%as', '-1', '--', rel], {
      encoding: 'utf8',
    }).trim()
    return out || ''
  } catch {
    return ''
  }
}

const { entries, skipped, copiedAssets, collisionList } = buildPublishSet({
  vaultRoot: VAULT,
  mapping: MAPPING,
  publicRoot: PUBLIC,
  dateFallback: gitFirstDate,
})

if (collisionList.length > 0) {
  for (const [key, list] of collisionList) {
    console.error(`slug 冲突: ${key}`)
    for (const c of list) console.error(`  - ${c.rel}`)
  }
  console.error('请为冲突笔记补 frontmatter category 或改名后重试。')
  process.exit(1)
}

for (const s of skipped) console.warn(`跳过: ${s.source} — ${s.reason}`)

const manifest = existsSync(MANIFEST_PATH) ? JSON.parse(readFileSync(MANIFEST_PATH, 'utf8')) : { notes: {} }
const plan = planSync(entries, manifest)

for (const e of plan.upserts) {
  const dest = join(BLOG_ROOT, 'blog', e.target)
  mkdirSync(dirname(dest), { recursive: true })
  writeFileSync(dest, e.md)
  console.log(`写入: ${e.target}`)
}
for (const d of plan.deletions) {
  rmSync(join(BLOG_ROOT, 'blog', d.target), { force: true })
  rmSync(join(BLOG_ROOT, d.assetsDir), { recursive: true, force: true })
  console.log(`删除: ${d.target}`)
}
for (const e of entries) for (const w of e.warnings) console.warn(`警告: ${w}`)

const pages = renderIndexPages({
  curated: CURATED,
  synced: entries.map(({ title, date, url, category }) => ({ title, date, url, category })),
})
for (const [rel, content] of Object.entries(pages)) {
  writeFileSync(join(BLOG_ROOT, rel), content)
}

const notes = {}
for (const e of entries) {
  notes[e.source] = {
    target: e.target,
    assetsDir: e.assetsDir,
    hash: e.hash,
    title: e.title,
    date: e.date,
    category: e.category,
    url: e.url,
  }
}
writeFileSync(MANIFEST_PATH, JSON.stringify({ notes }, null, 2) + '\n')

if (NO_BUILD) {
  console.log('--no-build: 跳过构建校验')
} else {
  console.log('构建校验中(vitepress build)…')
  execFileSync('pnpm', ['build'], { cwd: BLOG_ROOT, stdio: 'inherit', shell: true })
}

const addPaths = [
  ...plan.upserts.map((e) => `blog/${e.target}`),
  ...plan.upserts.map((e) => join('blog', e.assetsDir)),
  ...plan.deletions.flatMap((d) => [`blog/${d.target}`, join('blog', d.assetsDir)]),
  ...Object.keys(pages),
  join(SCRIPT_DIR, 'sync-manifest.json'),
].filter((p) => existsSync(join(BLOG_ROOT, p)) || plan.deletions.some((d) => p === `blog/${d.target}` || p === join('blog', d.assetsDir)))

if (addPaths.length > 0) execFileSync('git', ['add', '--', ...addPaths], { cwd: BLOG_ROOT })

const staged = execFileSync('git', ['status', '--porcelain'], { cwd: BLOG_ROOT, encoding: 'utf8' })
if (staged.trim() === '') {
  console.log('没有需要同步的变更。')
  process.exit(0)
}

execFileSync('git', ['commit', '-m', `sync: obsidian publish ${new Date().toISOString().slice(0, 10)} (${plan.upserts.length} upsert, ${plan.deletions.length} delete)`], { cwd: BLOG_ROOT, stdio: 'inherit' })

if (NO_PUSH) {
  console.log('--no-push: 已提交,未推送。')
} else {
  execFileSync('git', ['push', 'origin', 'main'], { cwd: BLOG_ROOT, stdio: 'inherit' })
  console.log('已推送,等待 GitHub Pages 部署。')
}

if (copiedAssets.length > 0) console.log(`附件复制 ${copiedAssets.length} 个。`)
console.log(`完成:${plan.upserts.length} 写入 / ${plan.deletions.length} 删除 / ${skipped.length} 跳过。`)
