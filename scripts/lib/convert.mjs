const IMAGE_EXT = /\.(png|jpe?g|gif|svg|webp|bmp)$/i
const WIKILINK = /(!?)\[\[([^\[\]]+?)\]\]/g

function basename(path) {
  const i = path.lastIndexOf('/')
  return i === -1 ? path : path.slice(i + 1)
}

function splitInlineCode(line) {
  const parts = line.split(/(`+)/)
  const segments = []
  let inCode = false
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 1) {
      inCode = !inCode
      segments.push({ text: parts[i], protected: true })
    } else {
      segments.push({ text: parts[i], protected: inCode })
    }
  }
  return segments
}

function replaceWikilinks(text, resolve, warnings) {
  return text.replace(WIKILINK, (whole, bang, inner) => {
    const isEmbed = bang === '!'
    const pipe = inner.indexOf('|')
    const targetPart = pipe === -1 ? inner : inner.slice(0, pipe)
    const note = targetPart.split('#')[0].trim()
    const alias = pipe === -1 ? '' : inner.slice(pipe + 1).trim()
    const display = alias || basename(note)

    if (isEmbed) {
      if (/\.excalidraw$/i.test(note)) {
        warnings.push(`无法转换的嵌入(excalidraw): ${note}`)
        return ''
      }
      if (IMAGE_EXT.test(note)) {
        const r = resolve(note)
        if (r.type === 'asset') {
          return `![${note.replace(/\.[^.]+$/, '')}](${r.url})`
        }
        warnings.push(`嵌入图片未找到: ${note}`)
        return ''
      }
      warnings.push(`笔记互嵌降级为文本: ${note}`)
      return display
    }

    const r = resolve(note)
    if (r.type === 'internal' || r.type === 'asset') {
      return `[${display}](${r.url})`
    }
    return display
  })
}

export function convertNote(md, resolve) {
  const warnings = []
  const fence = /^(\s{0,3})(```+|~~~+)/
  let inFence = false
  const out = md
    .split('\n')
    .map((line) => {
      if (fence.test(line)) {
        inFence = !inFence
        return line
      }
      if (inFence) return line
      return splitInlineCode(line)
        .map((seg) => (seg.protected ? seg.text : replaceWikilinks(seg.text, resolve, warnings)))
        .join('')
    })
    .join('\n')
  return { md: out, warnings }
}
