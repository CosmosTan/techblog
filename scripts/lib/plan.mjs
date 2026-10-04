export function planSync(desiredEntries, manifest) {
  const notes = manifest.notes ?? {}
  const upserts = []
  const deletions = []
  const desiredBySource = new Map(desiredEntries.map((e) => [e.source, e]))

  for (const entry of desiredEntries) {
    const prev = notes[entry.source]
    if (!prev || prev.hash !== entry.hash || prev.target !== entry.target) {
      upserts.push(entry)
    }
    if (prev && prev.target !== entry.target) {
      deletions.push({ source: entry.source, target: prev.target, assetsDir: prev.assetsDir })
    }
  }

  for (const [source, prev] of Object.entries(notes)) {
    if (!desiredBySource.has(source)) {
      deletions.push({ source, target: prev.target, assetsDir: prev.assetsDir })
    }
  }

  return { upserts, deletions }
}
