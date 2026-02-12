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
      {
        text: 'Python', // 下拉列表的名字
        items: [
          { text: '1-数据分析', link: '/Python/数据分析/' },
          { text: '2-应用开发', link: '/Python/Web应用开发/' },
          { text: '3-Cpython解析', link: '/Python/Cpython解析' }
        ]
      },
      {
        text: 'Python', // 下拉列表的名字
        items: [
          { text: '1-数据分析', link: '/Python/数据分析/' },
          { text: '2-应用开发', link: '/Python/Web应用开发/' },
          { text: '3-Cpython解析', link: '/Python/Cpython解析' }
        ]
      },
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
