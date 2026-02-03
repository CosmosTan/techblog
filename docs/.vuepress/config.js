module.exports = {
    title: 'Cosmos的个人博客',  
    keywords: '人工智能',
    description: 'tqy的个人博客',
    repo: 'https://github.com/CosmosTan/techblog.git/', 
    base: '/techblog/',  
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    lastUpdated: 'Last Updated',
    themeConfig: {  
        logo: '/img/logo.png',
        nav: [ 
            { text: '首页', link: '/' },
            { text: 'AI Agent', link: '/AI_Agent/' },
            { text: 'ML', link: '/ML/' },
            { text: 'DL', link: '/DL/' },
            { text: 'Python', link: '/Python/' },
            { text: 'Linux', link: '/Linux/' },
            { text: 'github', link: 'https://github.com/CosmosTan/techblog.git/' }
        ],
    }
}
