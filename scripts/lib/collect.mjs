import { createHash } from 'node:crypto'
import { readdirSync, readFileSync } from 'node:fs'
import { join, basename, relative } from 'node:path'
import matter from 'gray-matter'
import { slugify } from './slug.mjs'
import { renderFrontmatter } from './frontmatter.mjs'
import { convertNote } from './convert.mjs'
import { makeAssetResolver } from './assets.mjs'

const toYMD = (v) => (v instanceof Date ? v.toISOString().slice(0, 10) : String(v).slice(0, 10))

function walkMd(root) {
  const out = []
  for (const p of readdirSync(root, { recursive: true, withFileTypes: true })) {
    if (!p.isFile() || !p.name.endsWith('.md')) continue
    const abs = join(p.parentPath ?? p.path ?? root, p.name)
    const rel = relative(root, abs).split('\\').join('/')
    if (rel.split('/').some((seg) => seg.startsWith('.'))) continue
    out.push({ abs, rel })
  }
  return out
}

export function buildPublishSet({ vaultRoot, mapping, publicRoot, dateFallback }) {
  const files = walkMd(vaultRoot)
  const candidates = []
  const skipped = []

  for (const { abs, rel } of files) {
    const parsed = matter(readFileSync(abs, 'utf8'))
    if (parsed.data.publish !== true) continue
    const topDir = rel.includes('/') ? rel.split('/')[0] : ''
    const category = parsed.data.category ?? mapping[topDir]
    if (!category) {
      skipped.push({ source: rel, reason: `无法映射分类(顶级目录「${topDir || '(根)'}」不在映射表且未写 category)`, abs, rel })
      continue
    }
    const name = basename(rel).replace(/\.md$/, '')
    candidates.push({ abs, rel, data: parsed.data, content: parsed.content, category, name, slug: slugify(name) })
  }

  const slugKey = (c) => `${c.category}/${c.slug}`
  const collisions = new Map()
  for (const c of candidates) {
    const k = slugKey(c)
    if (!collisions.has(k)) collisions.set(k, [])
    collisions.get(k).push(c)
  }
  const collisionList = [...collisions.entries()].filter(([, v]) => v.length > 1)

  const linkMap = new Map(
    candidates.map((c) => [c.name, { type: 'internal', url: `/techblog/${c.category}/${c.slug}.html` }])
  )

  const entries = []
  const copiedAssets = []
  for (const c of candidates) {
    const resolver = makeAssetResolver({
      searchRoots: [vaultRoot],
      destDir: join(publicRoot, 'img', 'notes', c.slug),
      urlPrefix: `/img/notes/${c.slug}`,
    })
    const wrapped = (target) => {
      const link = linkMap.get(target)
      if (link) return link
      const r = resolver.resolve(target)
      if (r.type === 'asset') copiedAssets.push(join(publicRoot, 'img', 'notes', c.slug, basename(target)))
      return r
    }
    const { md: body, warnings } = convertNote(c.content, wrapped)
    const title = c.data.title ?? c.name
    const date = toYMD(c.data.date ?? c.data.created ?? dateFallback(c.abs))
    const md = renderFrontmatter({
      title,
      date,
      category: c.category,
      tags: c.data.tags,
      aliases: c.data.aliases,
    }) + '\n' + body.replace(/^\n+/, '')
    entries.push({
      source: c.rel,
      target: `${c.category}/${c.slug}.md`,
      assetsDir: `public/img/notes/${c.slug}`,
      url: `/techblog/${c.category}/${c.slug}.html`,
      title,
      date,
      category: c.category,
      md,
      hash: createHash('sha256').update(md).digest('hex').slice(0, 16),
      warnings: [...warnings, ...resolver.warnings.map((w) => `${c.rel}: ${w}`)],
    })
  }

  return { entries, skipped, copiedAssets, collisionList }
}
