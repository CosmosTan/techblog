import { test } from 'node:test'
import assert from 'node:assert/strict'
import { execFileSync, spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const SCRIPT = join(dirname(fileURLToPath(import.meta.url)), '..', 'scripts', 'sync-obsidian.mjs')

function e2e() {
  const base = mkdtempSync(join(tmpdir(), 'sync-e2e-'))
  const vault = join(base, 'vault', 'C_Skills')
  const repo = join(base, 'vault')
  const blog = join(base, 'blog')
  mkdirSync(join(vault, '1-Harness'), { recursive: true })
  mkdirSync(join(repo, 'Template', 'photo', 'x-picture'), { recursive: true })
  mkdirSync(join(blog, 'blog', 'public'), { recursive: true })
  mkdirSync(join(blog, 'scripts'), { recursive: true })
  writeFileSync(join(repo, 'Template', 'photo', 'x-picture', 'pic.png'), 'PNGDATA')
  writeFileSync(join(vault, '1-Harness', '端到端.md'), '---\npublish: true\n---\n\n![[pic.png]]\n')
  writeFileSync(join(blog, 'package.json'), JSON.stringify({ name: 'e2e', version: '0.0.0', scripts: { build: 'node failbuild.js' } }))
  writeFileSync(join(blog, 'failbuild.js'), 'process.exit(3)\n')
  execFileSync('git', ['init'], { cwd: blog })
  return { base, vault, repo, blog }
}

const gitEnv = {
  ...process.env,
  GIT_AUTHOR_NAME: 't',
  GIT_AUTHOR_EMAIL: 't@t',
  GIT_COMMITTER_NAME: 't',
  GIT_COMMITTER_EMAIL: 't@t',
}

test('build gate failure leaves manifest unwritten so retry still stages the article', () => {
  const f = e2e()
  try {
    const r = spawnSync(
      process.execPath,
      [SCRIPT, '--no-push'],
      {
        cwd: f.blog,
        env: { ...gitEnv, SYNC_VAULT: f.vault, SYNC_VAULT_REPO: f.repo, SYNC_BLOG_ROOT: f.blog },
        encoding: 'utf8',
      }
    )
    assert.notEqual(r.status, 0, 'pnpm build must fail in a bare temp blog root')
    assert.equal(existsSync(join(f.blog, 'scripts', 'sync-manifest.json')), false, 'manifest must not be written before the build gate passes')
  } finally {
    rmSync(f.base, { recursive: true, force: true })
  }
})

test('happy path with --no-build: article written, attachment resolved from repo root, committed', () => {
  const f = e2e()
  try {
    const r = spawnSync(
      process.execPath,
      [SCRIPT, '--no-push', '--no-build'],
      {
        cwd: f.blog,
        env: { ...gitEnv, SYNC_VAULT: f.vault, SYNC_VAULT_REPO: f.repo, SYNC_BLOG_ROOT: f.blog },
        encoding: 'utf8',
      }
    )
    assert.equal(r.status, 0, r.stdout + r.stderr)
    assert.equal(existsSync(join(f.blog, 'blog', '02-agent', '端到端.md')), true)
    assert.equal(existsSync(join(f.blog, 'blog', 'public', 'img', 'notes', '端到端', 'pic.png')), true, 'attachment from repo root must be copied')
    assert.equal(existsSync(join(f.blog, 'scripts', 'sync-manifest.json')), true)
    const msg = execFileSync('git', ['log', '-1', '--format=%s'], { cwd: f.blog, encoding: 'utf8' }).trim()
    assert.match(msg, /^chore\(sync\): obsidian publish/)
  } finally {
    rmSync(f.base, { recursive: true, force: true })
  }
})
