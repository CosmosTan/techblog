import { test } from 'node:test'
import assert from 'node:assert/strict'
import { convertNote } from '../scripts/lib/convert.mjs'

const internal = (url) => ({ type: 'internal', url })
const asset = (url) => ({ type: 'asset', url })
const missing = () => ({ type: 'missing' })

function makeResolve(map) {
  return (target) => map[target] ?? missing()
}

test('fenced code blocks are never touched', () => {
  const md = '前文\n\n```python\nx = tensor([[ 1,  2,  3,  4]])\n```\n\n后文 [[0-Agent dev]]'
  const { md: out } = convertNote(md, makeResolve({ '0-Agent dev': internal('/techblog/02-agent/0-Agent-dev.html') }))
  assert.match(out, /tensor\(\[\[ 1,  2,  3,  4\]\]\)/)
  assert.match(out, /\[0-Agent dev\]\(\/techblog\/02-agent\/0-Agent-dev\.html\)/)
})

test('inline code spans are never touched', () => {
  const md = '导入 `from x import [[../types/StreamWriter]]` 保持原样'
  const { md: out } = convertNote(md, makeResolve({}))
  assert.equal(out, md)
})

test('table wikilink to nonexistent note degrades to basename text', () => {
  const md = '| **关联类型** | [[../types/StreamWriter]] |\n| **关联 API** | [[../../func/task]] |'
  const { md: out, warnings } = convertNote(md, makeResolve({}))
  assert.match(out, /\| \*\*关联类型\*\* \| StreamWriter \|/)
  assert.match(out, /\| \*\*关联 API\*\* \| task \|/)
  assert.equal(warnings.length, 0)
})

test('published target becomes internal link', () => {
  const { md: out } = convertNote(
    '见 [[0-Agent dev]]',
    makeResolve({ '0-Agent dev': internal('/techblog/02-agent/0-Agent-dev.html') })
  )
  assert.equal(out, '见 [0-Agent dev](/techblog/02-agent/0-Agent-dev.html)')
})

test('alias wins as link text', () => {
  const { md: out } = convertNote(
    '见 [[0-Agent dev|Agent 开发]]',
    makeResolve({ '0-Agent dev': internal('/techblog/02-agent/0-Agent-dev.html') })
  )
  assert.equal(out, '见 [Agent 开发](/techblog/02-agent/0-Agent-dev.html)')
})

test('block anchor is dropped, link points to note', () => {
  const { md: out } = convertNote(
    '参考 [[1-python基础#^ef0c36]]',
    makeResolve({ '1-python基础': internal('/techblog/01-full-stack/1-python基础.html') })
  )
  assert.equal(out, '参考 [1-python基础](/techblog/01-full-stack/1-python基础.html)')
})

test('unpublished target with anchor degrades to plain title', () => {
  const { md: out } = convertNote('参考 [[1-python基础#^ef0c36]]', makeResolve({}))
  assert.equal(out, '参考 1-python基础')
})

test('image embed becomes markdown image with resolver url, size param dropped', () => {
  const { md: out, warnings } = convertNote(
    '![[Pasted image 20260627101133.png|600]]',
    makeResolve({ 'Pasted image 20260627101133.png': asset('/img/notes/x/Pasted-image-20260627101133.png') })
  )
  assert.equal(out, '![Pasted image 20260627101133](/img/notes/x/Pasted-image-20260627101133.png)')
  assert.equal(warnings.length, 0)
})

test('image embed with space before size param still parses', () => {
  const { md: out } = convertNote(
    '![[Pasted image 20260627093918.png |600]]',
    makeResolve({ 'Pasted image 20260627093918.png': asset('/img/notes/x/p.png') })
  )
  assert.equal(out, '![Pasted image 20260627093918](/img/notes/x/p.png)')
})

test('missing image embed is removed with warning', () => {
  const { md: out, warnings } = convertNote('前\n\n![[ghost.png]]\n\n后', makeResolve({}))
  assert.equal(out, '前\n\n\n\n后')
  assert.equal(warnings.length, 1)
  assert.match(warnings[0], /ghost\.png/)
})

test('excalidraw embed is removed with warning, never resolved', () => {
  let resolved = false
  const { md: out, warnings } = convertNote('![[python_framework.excalidraw|800]]', () => {
    resolved = true
    return asset('/img/notes/x/a.png')
  })
  assert.equal(resolved, false)
  assert.equal(out, '')
  assert.equal(warnings.length, 1)
  assert.match(warnings[0], /excalidraw/)
})

test('note transclusion degrades to title text with warning', () => {
  const { md: out, warnings } = convertNote(
    '![[0-Agent dev]]',
    makeResolve({ '0-Agent dev': internal('/techblog/02-agent/0-Agent-dev.html') })
  )
  assert.equal(out, '0-Agent dev')
  assert.equal(warnings.length, 1)
})

test('callout header degrades to plain blockquote with title kept', () => {
  const md = '> [!note] 标题在这里\n> 正文第一行\n> 正文第二行'
  const { md: out } = convertNote(md, makeResolve({}))
  assert.equal(out, '> 标题在这里\n> 正文第一行\n> 正文第二行')
})

test('callout with fold marker and no title keeps nothing on header line', () => {
  const { md: out } = convertNote('> [!tip]- \n> 内容', makeResolve({}))
  assert.equal(out, '>\n> 内容')
})

test('non-callout blockquote is untouched', () => {
  const { md: out } = convertNote('> 普通引用 [^1]', makeResolve({}))
  assert.equal(out, '> 普通引用 [^1]')
})

test('non-embed link to a known asset links to the asset url', () => {
  const { md: out } = convertNote(
    '![01-http-request-response.png]] 的链接见 [[01-http-request-response.png]]',
    makeResolve({ '01-http-request-response.png': asset('/img/notes/x/01.png') })
  )
  assert.match(out, /\[01-http-request-response\.png\]\(\/img\/notes\/x\/01\.png\)/)
})
