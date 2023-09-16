module.exports = {
    title: 'Cosmos的个人博客',  
    keywords: '人工智能',
    description: 'tqy的个人博客',
    repo: 'https://github.com/CosmosTan/Myblog.git/', 
    base: '/Myblog/',  
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    lastUpdated: 'Last Updated',
    themeConfig: {  
        logo: '/img/logo.png',
        nav: [ 
            { text: '首页', link: '/' },
            { text: 'ML', link: '/MachineLearing/' },
            { text: 'DL', link: '/DeepLearning/' },
            { text: 'python', link: '/python/' },
            { text: 'Linux', link: '/Linux/' },
            {
                text: '2023',
                ariLabel: '2023',
                items: [ 
                    { text: 'May', link: '/2023/5/' },
                    { text: 'June', link: '/2023/6/' }
                ]
            },
            { text: 'github', link: 'https://github.com/CosmosTan/Myblog.git/' }
        ],
        sidebar: { 
            '/2023/': [
                ['/2023/8/', '8月份'],
                ['/2023/9/', '9月份']
            ]
        }
    }
}