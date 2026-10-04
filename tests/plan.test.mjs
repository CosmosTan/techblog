import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { planSync, filterDeletions } from '../scripts/lib/plan.mjs'

const hash = (s) => createHash('sha256').update(s).digest('hex').slice(0, 16)

const desired = (source, target, body) => ({
  source,
  target,
  assetsDir: `public/img/notes/${target.replace(/^.*\//, '').replace(/\.md$/, '')}`,
  hash: hash(body ?? target),
  title: 'T',
  date: '2026-01-01',
  category: '02-agent',
})

test('new note becomes upsert', () => {
  const plan = planSync([desired('a.md', '02-agent/a.md')], { notes: {} })
  assert.equal(plan.upserts.length, 1)
  assert.equal(plan.deletions.length, 0)
})

test('unchanged hash and target is a no-op', () => {
  const entry = desired('a.md', '02-agent/a.md', 'same')
  const plan = planSync([entry], { notes: { 'a.md': entry } })
  assert.equal(plan.upserts.length, 0)
  assert.equal(plan.deletions.length, 0)
})

test('changed content becomes upsert', () => {
  const old = desired('a.md', '02-agent/a.md', 'old')
  const now = desired('a.md', '02-agent/a.md', 'new')
  const plan = planSync([now], { notes: { 'a.md': old } })
  assert.equal(plan.upserts.length, 1)
  assert.equal(plan.deletions.length, 0)
})

test('removed or unpublished source becomes deletion of md and assets dir', () => {
  const old = desired('a.md', '02-agent/a.md', 'x')
  const plan = planSync([], { notes: { 'a.md': old } })
  assert.equal(plan.upserts.length, 0)
  assert.deepEqual(plan.deletions, [{ source: 'a.md', target: '02-agent/a.md', assetsDir: 'public/img/notes/a' }])
})

test('filterDeletions keeps asset dirs still owned by a desired entry (category move)', () => {
  const old = desired('a.md', '02-agent/a.md', 'x')
  const now = desired('a.md', '05-summary/a.md', 'x')
  const plan = planSync([now], { notes: { 'a.md': old } })
  const kept = filterDeletions(plan.deletions, [now])
  assert.equal(kept.length, 0, 'old assetsDir equals new assetsDir (same slug), must not be deleted')
})

test('filterDeletions still deletes dirs no desired entry owns', () => {
  const old = desired('a.md', '02-agent/a.md', 'x')
  const kept = filterDeletions(
    [{ source: 'a.md', target: '02-agent/a.md', assetsDir: 'public/img/notes/a' }],
    []
  )
  assert.equal(kept.length, 1)
  assert.equal(old.source, 'a.md')
})

test('category move deletes old target and upserts new', () => {
  const old = desired('a.md', '02-agent/a.md', 'x')
  const now = desired('a.md', '05-summary/a.md', 'x')
  const plan = planSync([now], { notes: { 'a.md': old } })
  assert.equal(plan.upserts.length, 1)
  assert.deepEqual(plan.deletions, [{ source: 'a.md', target: '02-agent/a.md', assetsDir: 'public/img/notes/a' }])
})
