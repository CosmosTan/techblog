import { readdirSync, mkdirSync, copyFileSync } from 'node:fs'
import { join, basename } from 'node:path'

function findByName(root, name) {
  try {
    return readdirSync(root, { recursive: true, withFileTypes: false })
      .filter((p) => basename(p) === name)
      .map((p) => join(root, p))
  } catch {
    return []
  }
}

export function makeAssetResolver({ searchRoots, destDir, urlPrefix }) {
  const warnings = []
  return {
    warnings,
    resolve(target) {
      const name = basename(target)
      const hits = searchRoots.flatMap((root) => findByName(root, name))
      if (hits.length === 0) return { type: 'missing' }
      if (hits.length > 1) warnings.push(`附件重名,取第一个: ${name}`)
      mkdirSync(destDir, { recursive: true })
      copyFileSync(hits[0], join(destDir, name))
      return { type: 'asset', url: `${urlPrefix}/${encodeURI(name)}` }
    },
  }
}
