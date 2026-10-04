import { test } from 'node:test'
import assert from 'node:assert/strict'
import matter from 'gray-matter'
import { renderFrontmatter } from '../scripts/lib/frontmatter.mjs'

const PRIVATE = {
  title: 'Agent 技术体系',
  publish: true,
  source: 'https://example.com',
  videoUrl: 'https://youtu.be/x',
  channel: 'SomeChannel',
  videoId: 'abc',
  uid: 'u-1',
  created: '2026-05-01',
  generated: 'by-plugin',
  aliases: ['体系', 'AgentSystem'],
  tags: ['agent'],
  date: '2026-01-15',
  category: '02-agent',
}

test('keeps only whitelist fields, injects derived category/date', () => {
  const md = renderFrontmatter(PRIVATE)
  const { data } = matter(md)
  assert.deepEqual(Object.keys(data).sort(), ['aliases', 'category', 'date', 'tags', 'title'])
  assert.equal(data.title, 'Agent 技术体系')
  assert.match(md, /date: ['"]?2026-01-15/)
  assert.equal(data.category, '02-agent')
  assert.deepEqual(data.aliases, ['体系', 'AgentSystem'])
})

test('deterministic field order across runs', () => {
  assert.equal(renderFrontmatter(PRIVATE), renderFrontmatter({ ...PRIVATE }))
})

test('minimal fields still produce valid frontmatter', () => {
  const md = renderFrontmatter({ title: 'X', date: '2023-09-16', category: '01-full-stack' })
  const { data } = matter(md)
  assert.equal(data.title, 'X')
  assert.equal(data.category, '01-full-stack')
  assert.match(md, /date: ['"]?2023-09-16/)
})

test('date as Date object renders as YYYY-MM-DD, not ISO timestamp', () => {
  const md = renderFrontmatter({ title: 'X', date: new Date('2023-09-16T00:00:00Z') })
  assert.match(md, /date: ['"]?2023-09-16/)
  assert.doesNotMatch(md, /T00:00:00/)
})

test('chinese and special yaml values serialize safely', () => {
  const md = renderFrontmatter({ title: 'Git & GitHub 笔记', date: '2023-09-16', category: '01-full-stack' })
  const { data } = matter(md)
  assert.equal(data.title, 'Git & GitHub 笔记')
})
