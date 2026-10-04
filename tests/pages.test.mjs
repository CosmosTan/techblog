import { test } from 'node:test'
import assert from 'node:assert/strict'
import { renderIndexPages } from '../scripts/lib/pages.mjs'

const CURATED = [
  { title: '软件测试：Mock', date: '2026-02-12', url: '/techblog/01-full-stack/python/web-testing.html', category: '01-full-stack' },
  { title: 'Agent Skill 笔记', date: '2026-02-04', url: '/techblog/02-agent/skills.html', category: '02-agent' },
  { title: 'Git & GitHub 笔记', date: '2023-09-16', url: '/techblog/01-full-stack/linux/git-github.html', category: '01-full-stack' },
  { title: 'Linux 环境与工具笔记', date: '2023-09-16', url: '/techblog/01-full-stack/linux/wsl-setup.html', category: '01-full-stack' },
]

const SYNCED = [
  { title: 'Agent 技术体系', date: '2026-01-15', url: '/techblog/02-agent/Agent-技术体系.html', category: '02-agent' },
]

test('renders all seven pages', () => {
  const pages = renderIndexPages({ curated: CURATED, synced: SYNCED })
  for (const p of [
    'blog/index.md',
    'blog/01-full-stack/index.md',
    'blog/02-agent/index.md',
    'blog/03-llm/index.md',
    'blog/04-ml-dl/index.md',
    'blog/05-summary/index.md',
    'blog/06-dashboard/index.md',
  ]) {
    assert.ok(pages[p], `missing ${p}`)
  }
})

test('category page merges curated and synced, date desc, count correct', () => {
  const { 'blog/02-agent/index.md': md } = renderIndexPages({ curated: CURATED, synced: SYNCED })
  const idxSynced = md.indexOf('/techblog/02-agent/Agent-技术体系.html')
  const idxCurated = md.indexOf('/techblog/02-agent/skills.html')
  assert.ok(idxSynced !== -1 && idxCurated !== -1)
  assert.ok(idxSynced > idxCurated, 'synced 2026-01 should come after curated 2026-02 in desc order')
  assert.match(md, /共 2 篇/)
})

test('archive groups by year with full date and category label', () => {
  const { 'blog/06-dashboard/index.md': md } = renderIndexPages({ curated: CURATED, synced: SYNCED })
  assert.match(md, /全部 5 篇笔记/)
  assert.match(md, /toc-year">2026</)
  assert.match(md, /toc-year">2023</)
  assert.match(md, /2026-02-12 · 全栈开发/)
  assert.match(md, /2026-01-15 · 智能体/)
})

test('home lists recent updates and category counts', () => {
  const { 'blog/index.md': md } = renderIndexPages({ curated: CURATED, synced: SYNCED })
  assert.match(md, /最近更新/)
  const iMock = md.indexOf('/techblog/01-full-stack/python/web-testing.html')
  const iAgent = md.indexOf('/techblog/02-agent/Agent-技术体系.html')
  const iGit = md.indexOf('/techblog/01-full-stack/linux/git-github.html')
  assert.ok(iMock < iAgent && iAgent < iGit, 'recent list sorted desc')
  assert.match(md, /全栈开发[\s\S]*?3 篇/)
  assert.match(md, /智能体[\s\S]*?2 篇/)
  assert.match(md, /大模型[\s\S]*?0 篇/)
})

test('empty category page renders zero-count without entries', () => {
  const { 'blog/03-llm/index.md': md } = renderIndexPages({ curated: [], synced: [] })
  assert.match(md, /共 0 篇/)
  assert.doesNotMatch(md, /toc-row/)
})
