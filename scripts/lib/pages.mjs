const CATEGORIES = [
  { id: '01-full-stack', name: '全栈开发', title: '全栈开发', desc: 'Linux、Python 与日常开发环境的笔记' },
  { id: '02-agent', name: '智能体', title: '智能体', desc: '关于 Agent、Skill 与 MCP 的学习笔记' },
  { id: '03-llm', name: '大模型', title: '大模型', desc: 'LLM 相关的原理与实践' },
  { id: '04-ml-dl', name: '机器学习', title: '机器学习与深度学习', desc: '算法基础与工程实践' },
  { id: '05-summary', name: '总结', title: '总结', desc: '阶段性的复盘与沉淀' },
]

const HOME_HEAD = `---
layout: page
---

<div class="notes">

<header class="site-head">
  <h1 class="site-title">Cosmos's TechBlog</h1>
  <p class="intro">记录全栈开发、智能体与机器学习过程中的笔记与思考。</p>
  <p class="quote">重为轻根，静为躁君。——《道德经》</p>
</header>

<div class="frontispiece">

![星夜雪山](/img/banner.png)

</div>
`

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function row(url, title, meta) {
  return `  <a class="toc-row" href="${url}">
    <span class="toc-title">${esc(title)}</span>
    <span class="toc-dots"></span>
    <span class="toc-meta">${meta}</span>
  </a>`
}

function byDateDesc(a, b) {
  if (a.date !== b.date) return a.date < b.date ? 1 : -1
  return 0
}

const month = (date) => date.slice(0, 7)

export function renderIndexPages({ curated, synced, recentLimit = 10 }) {
  const all = [...curated, ...synced].sort(byDateDesc)
  const pages = {}

  const recent = all.slice(0, recentLimit)
  pages['blog/index.md'] = `${HOME_HEAD}
<section class="section">
  <h2 class="sec-title">最近更新</h2>
  <nav class="toc">
${recent.map((a) => row(a.url, a.title, month(a.date))).join('\n')}
  </nav>
</section>

<section class="section">
  <h2 class="sec-title">分类</h2>
  <nav class="toc">
${CATEGORIES.map((c) => {
  const n = all.filter((a) => a.category === c.id).length
  return row(`/techblog/${c.id}/`, c.name, `${n} 篇`)
}).join('\n')}
  </nav>
</section>

</div>
`

  for (const c of CATEGORIES) {
    const items = all.filter((a) => a.category === c.id)
    const body = items.map((a) => row(a.url, a.title, month(a.date))).join('\n')
    pages[`blog/${c.id}/index.md`] = `---
layout: page
title: ${c.title}
---

<div class="notes">

<header class="page-head">
  <h1 class="page-title">${c.title}</h1>
  <p class="meta">${c.desc}，共 ${items.length} 篇。</p>
</header>

<nav class="toc">
${body}
</nav>

</div>
`
  }

  const years = [...new Set(all.map((a) => a.date.slice(0, 4)))].sort().reverse()
  const yearBlocks = years
    .map((y) => {
      const rows = all
        .filter((a) => a.date.startsWith(y))
        .map((a) => {
          const c = CATEGORIES.find((x) => x.id === a.category)
          return row(a.url, a.title, `${a.date} · ${c ? c.name : a.category}`)
        })
        .join('\n')
      return `  <p class="toc-year">${y}</p>\n${rows}`
    })
    .join('\n\n')

  pages['blog/06-dashboard/index.md'] = `---
layout: page
title: 归档
---

<div class="notes">

<header class="page-head">
  <h1 class="page-title">归档</h1>
  <p class="meta">全部 ${all.length} 篇笔记，按时间倒序。</p>
</header>

<nav class="toc">
${yearBlocks}
</nav>

</div>
`

  return pages
}
