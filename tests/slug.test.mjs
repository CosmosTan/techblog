import { test } from 'node:test'
import assert from 'node:assert/strict'
import { slugify } from '../scripts/lib/slug.mjs'

test('spaces become dashes, case preserved', () => {
  assert.equal(slugify('0-Agent dev'), '0-Agent-dev')
})

test('chinese kept as-is', () => {
  assert.equal(slugify('设计模式'), '设计模式')
  assert.equal(slugify('PlantUML 配色策略'), 'PlantUML-配色策略')
})

test('url-unsafe chars removed', () => {
  assert.equal(slugify('a/b:c?d'), 'abcd')
})

test('surrounding whitespace trimmed, inner runs collapsed', () => {
  assert.equal(slugify('  spaced   name  '), 'spaced-name')
})

test('leading/trailing dashes stripped', () => {
  assert.equal(slugify('1- Harness 概念'), '1-Harness-概念')
})
