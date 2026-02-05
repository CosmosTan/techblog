import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Cosmos的个人博客',
  description: 'tqy的个人博客',

  // GitHub Pages 子路径
  base: '/techblog/',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: '人工智能' }]
  ],

  themeConfig: {
    logo: '/img/logo.png',

    nav: [
      { text: '首页', link: '/' },
      { text: 'AI Agent', link: '/AI_Agent/' },
      { text: 'ML', link: '/ML/' },
      { text: 'DL', link: '/DL/' },
      { text: 'Python', link: '/Python/' },
      { text: 'Linux', link: '/Linux/' },
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
