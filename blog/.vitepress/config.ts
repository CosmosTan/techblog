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
      { text: 'Agent', link: '/agent/' },
      { text: 'ML', link: '/ml/' },
      { text: 'DL', link: '/dl/' },
      { text: 'Python', link: '/python/' },
      { text: 'Guide', link: '/guide/' },
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
