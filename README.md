# Cosmos's TechBlog

> 技术 · 工程 · 思考
> 重为轻根，静为躁君

基于 [VitePress](https://vitepress.dev/) 构建的静态博客，部署于 GitHub Pages。

## 快速开始

```bash
# 安装依赖
pnpm install

# 开发预览
pnpm dev

# 生产构建
pnpm build

# 本地预览构建结果
pnpm preview
```

## 项目结构

```
techblog/
├── blog/
│   ├── index.md              # 首页
│   ├── .vitepress/
│   │   └── config.ts         # VitePress 配置
│   ├── public/               # 静态资源
│   │   └── img/              # 图片资源
│   ├── agent/                # AI Agent 学习笔记
│   │   ├── index.md
│   │   └── skills.md
│   ├── ml/                   # 机器学习
│   ├── dl/                   # 深度学习
│   ├── python/               # Python 相关
│   └── guide/                 # 工具指南
│       └── linux/            # Linux 相关
├── package.json
└── README.md
```

## 内容分类

| 分类 | 说明 |
|------|------|
| [Agent](./blog/agent/) | AI Agent 学习笔记 |
| [ML](./blog/ml/) | 机器学习 |
| [DL](./blog/dl/) | 深度学习 |
| [Python](./blog/python/) | Python 相关 |
| [Guide](./blog/guide/) | 工具使用指南 |

## 技术栈

- **框架**: [VitePress](https://vitepress.dev/) 1.x
- **包管理**: pnpm 8.x
- **Node.js**: >= 18
- **部署**: GitHub Pages

## 部署说明

博客通过 GitHub Actions 自动构建部署到 GitHub Pages，访问地址：

- 在线预览: https://CosmosTan.github.io/techblog/

## 相关链接

- GitHub: https://github.com/CosmosTan/techblog
- 知乎: https://www.zhihu.com/people/jue-di-san-chi-jian-shen-ming
