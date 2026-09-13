import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Cosmos的个人博客',
  description: 'tqy的个人博客',

  // GitHub Pages 子路径
  base: '/techblog/',

  darkMode: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: '人工智能' }]
  ],

  themeConfig: {
    logo: '/img/logo.png',

    search: {
      provider: 'local'
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '全栈开发', link: '/01-full-stack/' },
      { text: '智能体', link: '/02-agent/' },
      { text: '大模型', link: '/03-llm/' },
      { text: '机器学习', link: '/04-ml-dl/' },
      { text: '总结', link: '/05-summary/' },
      { text: '📊 数据看板', link: '/06-dashboard/' },
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
