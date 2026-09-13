---
layout: home

hero:
  name: Cosmos's TechBlog
  text: 技术 · 工程 · 思考
  tagline: 重为轻根，静为躁君
  image:
    src: /img/banner.png
    alt: Cosmos Tech Blog

features:
  - title: 技术博客
    details: 持续更新 ing · Stay hungry · Stay foolish
---

<script setup>
import { ref, computed } from 'vue'

// 统计数据
const stats = [
  { value: '6', label: '篇文章', icon: '📝' },
  { value: '5', label: '个分类', icon: '📁' },
  { value: '2024', label: '起始年', icon: '🚀' },
  { value: '∞', label: '持续更新', icon: '💫' }
]

// 分类数据
const categories = [
  { 
    name: '全栈开发', 
    path: '/01-full-stack/', 
    count: 4,
    icon: '💻',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    desc: 'Linux · Python · DevOps'
  },
  { 
    name: '智能体', 
    path: '/02-agent/', 
    count: 2,
    icon: '🤖',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    desc: 'Agent · MCP'
  },
  { 
    name: '大模型', 
    path: '/03-llm/', 
    count: 0,
    icon: '🧠',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    desc: 'LLM · Prompt'
  },
  { 
    name: '机器学习', 
    path: '/04-ml-dl/', 
    count: 0,
    icon: '📊',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    desc: 'ML · DL · CV'
  },
  { 
    name: '总结', 
    path: '/05-summary/', 
    count: 0,
    icon: '📝',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    desc: '复盘 · 经验'
  }
]

// 最新文章
const recentPosts = [
  { 
    title: 'Web 测试实战', 
    category: '全栈开发',
    date: '2024-02',
    path: '/01-full-stack/python/web-testing',
    tag: '测试'
  },
  { 
    title: 'WSL 开发环境配置', 
    category: '全栈开发',
    date: '2024-01',
    path: '/01-full-stack/linux/wsl-setup',
    tag: '环境'
  },
  { 
    title: 'Agent Skill 使用指南', 
    category: '智能体',
    date: '2024-01',
    path: '/02-agent/skills',
    tag: 'Agent'
  }
]
</script>

<style>
/* Stats Bar */
.stats-bar {
  display: flex;
  justify-content: center;
  gap: 48px;
  padding: 32px 20px;
  margin: -20px -24px 40px;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.stat-item .icon {
  font-size: 24px;
  opacity: 0.9;
}

.stat-item .content {
  display: flex;
  flex-direction: column;
}

.stat-item .value {
  font-size: 24px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  line-height: 1.2;
}

.stat-item .label {
  font-size: 13px;
  color: var(--vp-c-text-2);
}

/* Categories Grid */
.categories-section {
  margin: 40px 0;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-link {
  font-size: 14px;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: gap 0.2s;
}

.section-link:hover {
  gap: 8px;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

@media (max-width: 1024px) {
  .categories-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .stats-bar {
    flex-wrap: wrap;
    gap: 24px;
  }
}

.category-card {
  position: relative;
  padding: 20px 16px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-bg-mute);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.08);
  border-color: var(--vp-c-brand-2);
}

.category-icon {
  font-size: 32px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
}

.category-name {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
  color: var(--vp-c-text-1);
  line-height: 1.5;
}

.category-desc {
  font-size: 12px;
  color: var(--vp-c-text-3);
  margin-bottom: 12px;
  line-height: 1.4;
}

.category-count {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: var(--vp-c-bg);
  border-radius: 12px;
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.category-count .num {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

/* Recent Posts */
.recent-section {
  margin: 40px 0;
}

.posts-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.post-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s;
}

.post-card:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  transform: translateX(4px);
}

.post-icon {
  font-size: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg);
  border-radius: 8px;
  flex-shrink: 0;
}

.post-content {
  flex: 1;
  min-width: 0;
}

.post-title {
  font-size: 15px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.post-tag {
  padding: 2px 8px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-radius: 4px;
  font-size: 11px;
}

.post-arrow {
  font-size: 18px;
  color: var(--vp-c-text-3);
  transition: transform 0.2s;
}

.post-card:hover .post-arrow {
  transform: translateX(4px);
}

/* Footer CTA */
.dashboard-cta {
  margin-top: 48px;
  padding: 32px;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 16px;
  text-align: center;
}

.cta-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.cta-desc {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin-bottom: 20px;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
}
</style>

<div class="home">

<!-- Stats Bar -->
<div class="stats-bar">
  <div v-for="stat in stats" :key="stat.label" class="stat-item">
    <span class="icon">{{ stat.icon }}</span>
    <div class="content">
      <span class="value">{{ stat.value }}</span>
      <span class="label">{{ stat.label }}</span>
    </div>
  </div>
</div>

<!-- Categories Section -->
<div class="categories-section">
  <div class="section-header">
    <h2 class="section-title">📂 技术分类</h2>
    <a href="/techblog/06-dashboard/" class="section-link">
      查看全部 → 
    </a>
  </div>
  
  <div class="categories-grid">
    <a 
      v-for="cat in categories" 
      :key="cat.name" 
      :href="cat.path" 
      class="category-card"
    >
      <span class="category-icon">{{ cat.icon }}</span>
      <div class="category-name">{{ cat.name }}</div>
      <div class="category-desc">{{ cat.desc }}</div>
      <div class="category-count">
        <span class="num">{{ cat.count }}</span> 篇
      </div>
    </a>
  </div>
</div>

<!-- Recent Posts -->
<div class="recent-section">
  <div class="section-header">
    <h2 class="section-title">✍️ 最新文章</h2>
  </div>
  
  <div class="posts-list">
    <a 
      v-for="post in recentPosts" 
      :key="post.path" 
      :href="post.path" 
      class="post-card"
    >
      <div class="post-icon">📄</div>
      <div class="post-content">
        <div class="post-title">{{ post.title }}</div>
        <div class="post-meta">
          <span class="post-tag">{{ post.tag }}</span>
          <span>{{ post.category }}</span>
          <span>{{ post.date }}</span>
        </div>
      </div>
      <span class="post-arrow">→</span>
    </a>
  </div>
</div>

<!-- Dashboard CTA -->
<div class="dashboard-cta">
  <h3 class="cta-title">📊 数据看板</h3>
  <p class="cta-desc">查看博客统计、学习历程与贡献热力图</p>
  <a href="/techblog/06-dashboard/" class="cta-button">
    打开看板 →
  </a>
</div>

</div>
