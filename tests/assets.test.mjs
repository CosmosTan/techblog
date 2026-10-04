import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, writeFileSync, existsSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { makeAssetResolver } from '../scripts/lib/assets.mjs'

function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'sync-assets-'))
  const primary = join(root, 'vault')
  const repoRoot = join(root, 'repo')
  const dest = join(root, 'public', 'img', 'notes', 'note-a')
  mkdirSync(join(primary, 'sub'), { recursive: true })
  mkdirSync(join(repoRoot, 'Template', 'photo', 'x-picture'), { recursive: true })
  mkdirSync(dest, { recursive: true })
  return { root, primary, repoRoot, dest }
}

test('finds attachment in secondary root and copies it', () => {
  const f = fixture()
  try {
    writeFileSync(join(f.repoRoot, 'Template', 'photo', 'x-picture', 'pasted.png'), 'PNG')
    const r = makeAssetResolver({
      searchRoots: [f.primary, f.repoRoot],
      destDir: f.dest,
      urlPrefix: '/img/notes/note-a',
    })
    const res = r.resolve('pasted.png')
    assert.equal(res.type, 'asset')
    assert.equal(res.url, '/img/notes/note-a/pasted.png')
    assert.equal(existsSync(join(f.dest, 'pasted.png')), true)
  } finally {
    rmSync(f.root, { recursive: true, force: true })
  }
})

test('missing attachment returns missing', () => {
  const f = fixture()
  try {
    const r = makeAssetResolver({ searchRoots: [f.primary, f.repoRoot], destDir: f.dest, urlPrefix: '/img/notes/note-a' })
    assert.deepEqual(r.resolve('ghost.png'), { type: 'missing' })
  } finally {
    rmSync(f.root, { recursive: true, force: true })
  }
})

test('filename with spaces gets percent-encoded url, disk name keeps spaces', () => {
  const f = fixture()
  try {
    writeFileSync(join(f.repoRoot, 'Template', 'photo', 'x-picture', 'Pasted image 1.png'), 'PNG')
    const r = makeAssetResolver({ searchRoots: [f.repoRoot], destDir: f.dest, urlPrefix: '/img/notes/note-a' })
    const res = r.resolve('Pasted image 1.png')
    assert.equal(res.url, '/img/notes/note-a/Pasted%20image%201.png')
    assert.equal(existsSync(join(f.dest, 'Pasted image 1.png')), true)
  } finally {
    rmSync(f.root, { recursive: true, force: true })
  }
})

test('path-style target falls back to basename match', () => {
  const f = fixture()
  try {
    writeFileSync(join(f.repoRoot, 'Template', 'photo', 'x-picture', 'b.png'), 'PNG')
    const r = makeAssetResolver({ searchRoots: [f.repoRoot], destDir: f.dest, urlPrefix: '/img/notes/note-a' })
    const res = r.resolve('a/b.png')
    assert.equal(res.type, 'asset')
  } finally {
    rmSync(f.root, { recursive: true, force: true })
  }
})

test('duplicate names warn and pick the first', () => {
  const f = fixture()
  try {
    writeFileSync(join(f.primary, 'sub', 'dup.png'), 'A')
    writeFileSync(join(f.repoRoot, 'Template', 'photo', 'x-picture', 'dup.png'), 'B')
    const r = makeAssetResolver({ searchRoots: [f.primary, f.repoRoot], destDir: f.dest, urlPrefix: '/img/notes/note-a' })
    const res = r.resolve('dup.png')
    assert.equal(res.type, 'asset')
    assert.equal(r.warnings.length, 1)
    assert.match(r.warnings[0], /dup\.png/)
    assert.equal(existsSync(join(f.dest, 'dup.png')), true)
  } finally {
    rmSync(f.root, { recursive: true, force: true })
  }
})
