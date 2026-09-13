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
│   ├── index.md              # 首页（含统计、分类、最新文章）
│   ├── .vitepress/
│   │   ├── config.ts         # VitePress 配置
│   │   ├── cache/           # 构建缓存
│   │   └── dist/            # 构建输出
│   ├── public/               # 静态资源
│   │   └── img/              # 图片资源
│   ├── 01-full-stack/        # 全栈开发
│   │   ├── index.md
│   │   ├── linux/           # Linux 相关
│   │   └── python/           # Python 相关
│   ├── 02-agent/             # 智能体 (Agent)
│   │   ├── index.md
│   │   └── skills.md
│   ├── 03-llm/               # 大模型
│   │   └── index.md
│   ├── 04-ml-dl/             # 机器学习/深度学习
│   │   └── index.md
│   ├── 05-summary/            # 总结
│   │   └── index.md
│   └── 06-dashboard/          # 数据看板
│       └── index.md
└── README.md
```

## 内容分类

| 分类 | 路径 | 说明 |
|------|------|------|
| 💻 全栈开发 | [`/01-full-stack/`](/01-full-stack/) | Linux、Python、DevOps |
| 🤖 智能体 | [`/02-agent/`](/02-agent/) | Agent、MCP |
| 🧠 大模型 | [`/03-llm/`](/03-llm/) | LLM、Prompt Engineering |
| 📊 机器学习 | [`/04-ml-dl/`](/04-ml-dl/) | ML、DL、CV、NLP |
| 📝 总结 | [`/05-summary/`](/05-summary/) | 复盘、经验、工具 |
| 📊 数据看板 | [`/06-dashboard/`](/06-dashboard/) | 博客统计与学习历程 |

## 技术栈

- **框架**: [VitePress](https://vitepress.dev/) 1.x
- **包管理**: pnpm 8.x
- **Node.js**: >= 18
- **部署**: GitHub Pages

## 部署说明

博客通过 GitHub Actions 自动构建部署到 GitHub Pages，访问地址：

- 🌐 在线预览: https://CosmosTan.github.io/techblog/

---

## 更新日志

### v2.1.0 (2026-09-13)

**新功能**
- ✨ 新增数据看板页面 (`/06-dashboard/`)
  - 博客统计卡片（文章数、分类数、字数、更新时间）
  - 分类统计可视化
  - 学习历程时间线
  - GitHub 风格贡献热力图
  - 技术栈进度条
- ✨ 首页全新改版
  - 添加统计指标横排展示
  - 分类卡片网格布局
  - 最新文章列表
  - 数据看板入口 CTA

**页面优化**
- 🎨 所有分类页面重构
  - 渐变色头部 Banner
  - 卡片网格布局
  - 文章列表展示
  - 悬停动效优化
- 📱 响应式设计优化

### v2.0.0 (2025-01)

**重大更新**
- 🔄 目录结构重构
  - 统一命名规范 (`01-full-stack`, `02-agent` 等)
  - 标准化分类页面模板
- 🌙 支持深色模式

### v1.0.0 (2024-01)

**初始版本**
- 🚀 博客上线
- 🔍 集成 MiniSearch 本地搜索
- 📝 基础内容分类

---

## 相关链接

- GitHub: https://github.com/CosmosTan/techblog
- 知乎: https://www.zhihu.com/people/jue-di-san-chi-jian-shen-ming

---

*Stay hungry, Stay foolish.*
