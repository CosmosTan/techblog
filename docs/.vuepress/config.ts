import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  title: 'Cosmos的个人博客',
  description: 'tqy的个人博客',
  base: '/techblog/',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: '人工智能' }]
  ],

  theme: defaultTheme({
    logo: '/img/logo.png',
    repo: 'CosmosTan/techblog',
    lastUpdatedText: 'Last Updated',

    navbar: [
      { text: '首页', link: '/' },
      { text: 'AI Agent', link: '/AI_Agent/' },
      { text: 'ML', link: '/ML/' },
      { text: 'DL', link: '/DL/' },
      { text: 'Python', link: '/Python/' },
      { text: 'Linux', link: '/Linux/' },
      {
        text: 'GitHub',
        link: 'https://github.com/CosmosTan/techblog'
      }
    ]
  })
})
