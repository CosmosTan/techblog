---
layout: page
title: 全栈开发
---

<script setup>
import { ref } from 'vue'

const subcategories = ref([
  {
    id: 'linux',
    name: 'Linux',
    icon: '🐧',
    color: '#f39c12',
    description: 'Linux 系统配置、开发环境、Shell 脚本',
    articles: [
      { title: 'Git & GitHub 使用指南', path: './linux/git-github', date: '2024-01', tags: ['Git', '版本控制'] },
      { title: 'WSL 开发环境配置', path: './linux/wsl-setup', date: '2024-01', tags: ['WSL', '环境配置'] }
    ]
  },
  {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    color: '#3498db',
    description: 'Python 编程实践、Web 开发、脚本工具',
    articles: [
      { title: 'Python 编程笔记', path: './python/', date: '2024-01', tags: ['Python'] },
      { title: 'Web 测试实战', path: './python/web-testing', date: '2024-02', tags: ['测试', '自动化'] }
    ]
  }
])
</script>

<style scoped>
.page-header {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 32px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  margin-bottom: 32px;
  color: white;
}

.page-header .emoji {
  font-size: 48px;
  flex-shrink: 0;
}

.page-header-content {
  flex: 1;
}

.page-header h1 {
  font-size: 28px;
  margin: 0 0 8px 0;
  color: white;
}

.page-header p {
  font-size: 15px;
  opacity: 0.9;
  margin: 0;
  color: rgba(255,255,255,0.9);
}

.content-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

.subcategory {
  margin-bottom: 40px;
}

.subcategory-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--vp-c-divider);
}

.subcategory-icon {
  font-size: 36px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
}

.subcategory-info h3 {
  font-size: 20px;
  margin: 0 0 4px 0;
}

.subcategory-info p {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 0;
}

.article-count {
  margin-left: auto;
  background: var(--vp-c-brand-1);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}

.article-card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.article-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--sub-color, #3498db);
  opacity: 0;
  transition: opacity 0.3s;
}

.article-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  border-color: var(--vp-c-brand-1);
}

.article-card:hover::before {
  opacity: 1;
}

.article-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
  gap: 8px;
}

.article-title::before {
  content: '📄';
  font-size: 14px;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: var(--vp-c-text-2);
  margin-top: auto;
}

.article-date {
  display: flex;
  align-items: center;
  gap: 4px;
}

.article-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.tag {
  padding: 2px 8px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-radius: 4px;
  font-size: 12px;
}

.overview-section {
  margin-top: 48px;
  padding: 24px;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
}

.overview-section h3 {
  font-size: 18px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.overview-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.overview-list li {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--vp-c-bg);
  border-radius: 8px;
  font-size: 14px;
}

.overview-list li::before {
  content: '✓';
  color: var(--vp-c-brand-1);
  font-weight: bold;
}
</style>

<div class="content-wrapper">

<div class="page-header">
  <div class="emoji">💻</div>
  <div class="page-header-content">
    <h1>全栈开发</h1>
    <p>涵盖前后端开发、DevOps、数据库与工具链</p>
  </div>
</div>

<div v-for="sub in subcategories" :key="sub.id" class="subcategory">
  <div class="subcategory-header">
    <div class="subcategory-icon">{{ sub.icon }}</div>
    <div class="subcategory-info">
      <h3>{{ sub.name }}</h3>
      <p>{{ sub.description }}</p>
    </div>
    <div class="article-count">{{ sub.articles.length }} 篇</div>
  </div>
  
  <div class="articles-grid">
    <a 
      v-for="article in sub.articles" 
      :key="article.path"
      :href="article.path"
      class="article-card"
      :style="{ '--sub-color': sub.color }"
    >
      <div class="article-title">{{ article.title }}</div>
      <div class="article-meta">
        <span class="article-date">📅 {{ article.date }}</span>
        <div class="article-tags">
          <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
    </a>
  </div>
</div>

<div class="overview-section">
  <h3>📖 内容概览</h3>
  <ul class="overview-list">
    <li>Linux 服务器与环境配置</li>
    <li>Python 编程与测试</li>
    <li>数据库与缓存</li>
    <li>CI/CD 自动化部署</li>
    <li>Docker 容器化</li>
    <li>API 设计与开发</li>
  </ul>
</div>

</div>
