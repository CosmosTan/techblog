import { stringify } from 'yaml'

const WHITELIST = ['title', 'date', 'category', 'tags', 'aliases']

export function renderFrontmatter(fields) {
  const kept = {}
  for (const key of WHITELIST) {
    let value = fields[key]
    if (value === undefined) continue
    if (value instanceof Date) value = value.toISOString().slice(0, 10)
    kept[key] = value
  }
  const yaml = stringify(kept, { lineWidth: 0 }).trimEnd()
  return `---\n${yaml}\n---\n`
}
