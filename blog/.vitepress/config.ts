import { defineConfig } from 'vitepress'

// MiniSearch 默认按空白/标点分词，中文整句成一个 token 导致搜索失效。
// 这里对 CJK 连续段做二元（bigram）切分，拉丁词按词切分。
const tokenize = (text: string): string[] => {
  const tokens: string[] = []
  for (const w of text.split(/[^A-Za-z0-9一-鿿]+/)) {
    if (!w) continue
    if (/^[A-Za-z0-9]+$/.test(w)) {
      tokens.push(w.toLowerCase())
    } else if (w.length === 1) {
      tokens.push(w)
    } else {
      for (let i = 0; i < w.length - 1; i++) tokens.push(w.slice(i, i + 2))
    }
  }
  return tokens
}

export default defineConfig({
  title: 'Cosmos的个人博客',
  description: '全栈开发、智能体与机器学习的学习笔记',

  lang: 'zh-CN',

  // GitHub Pages 子路径
  base: '/techblog/',

  appearance: true,

  head: [
    // head 里的绝对路径不会自动加 base，需手写子路径
    ['link', { rel: 'icon', href: '/techblog/favicon.ico' }],
    ['meta', { name: 'keywords', content: 'Linux, Python, Agent, 机器学习' }]
  ],

  themeConfig: {
    logo: '/img/logo.png',

    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: { tokenize }
        }
      }
    },

    // 文章正文多用 ### 级标题，默认只收 h2 会导致「本页目录」为空
    outline: { level: [2, 3], label: '本页目录' },

    skipToContentLabel: '跳到正文',

    // SPA 内部路由跳到不存在页面时兜底（静态托管缺失路径由 404.md 承担）
    notFound: {
      title: '页面不存在',
      quote: '走错了也没关系，换个方向继续逛。',
      linkText: '回到首页',
      linkLabel: '回到首页'
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '全栈开发', link: '/01-full-stack/' },
      { text: '智能体', link: '/02-agent/' },
      { text: '大模型', link: '/03-llm/' },
      { text: '机器学习', link: '/04-ml-dl/' },
      { text: '总结', link: '/05-summary/' },
      { text: '归档', link: '/06-dashboard/' },
      {
        text: '知乎',
        link: 'https://www.zhihu.com/people/jue-di-san-chi-jian-shen-ming'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CosmosTan/techblog' }
    ]
  }
})
