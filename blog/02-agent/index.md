---
layout: page
title: 智能体
---

<script setup>
import { ref } from 'vue'

const articles = ref([
  { 
    title: 'Agent Skill 使用指南', 
    path: './skills', 
    date: '2024-01',
    tags: ['Agent', 'MCP'],
    desc: '深入理解 Agent 核心概念与 MCP 协议的使用方法'
  }
])

const features = ref([
  { icon: '🎯', title: '核心概念', desc: '理解 Agent 的基本原理与架构' },
  { icon: '🔧', title: '基本使用', desc: '快速上手 Agent 开发' },
  { icon: '⚡', title: '高级特性', desc: '掌握 Agent 的进阶技巧' },
  { icon: '🔗', title: 'MCP 集成', desc: 'Model Context Protocol 实战' }
])
</script>

<style scoped>
.page-header {
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  border-radius: 16px;
  margin-bottom: 32px;
  color: white;
}

.page-header .emoji {
  font-size: 64px;
  margin-bottom: 16px;
}

.page-header h1 {
  font-size: 32px;
  margin-bottom: 8px;
  color: white;
}

.page-header p {
  font-size: 16px;
  opacity: 0.9;
  margin: 0;
}

.content-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 40px;
}

.feature-card {
  padding: 20px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  border-color: var(--vp-c-brand-1);
}

.feature-icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.feature-card h4 {
  font-size: 16px;
  margin-bottom: 8px;
}

.feature-card p {
  font-size: 13px;
  color: var(--vp-c-text-2);
  margin: 0;
}

.articles-section h3,
.concept-section h3 {
  font-size: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.articles-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.article-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s;
}

.article-card:hover {
  transform: translateX(8px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

.article-icon {
  font-size: 28px;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  border-radius: 12px;
  flex-shrink: 0;
}

.article-content {
  flex: 1;
}

.article-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--vp-c-text-1);
}

.article-desc {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin-bottom: 12px;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.tag {
  padding: 4px 10px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-radius: 4px;
  font-size: 12px;
}

.article-date {
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.arrow {
  font-size: 20px;
  color: var(--vp-c-text-3);
  display: flex;
  align-items: center;
}

.concept-section {
  margin-top: 40px;
  padding: 24px;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
}

.concept-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.concept-item h4 {
  font-size: 16px;
  margin-bottom: 8px;
  color: var(--vp-c-brand-1);
}

.concept-item p {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 0;
}

@media (max-width: 640px) {
  .concept-content {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="content-wrapper">

<div class="page-header">
  <div class="emoji">🤖</div>
  <h1>智能体</h1>
  <p>AI Agent 开发实践与 MCP 协议探索</p>
</div>

<div class="features-grid">
  <div v-for="f in features" :key="f.title" class="feature-card">
    <div class="feature-icon">{{ f.icon }}</div>
    <h4>{{ f.title }}</h4>
    <p>{{ f.desc }}</p>
  </div>
</div>

<div class="articles-section">
  <h3>📚 文章列表</h3>
  <div class="articles-list">
    <a v-for="article in articles" :key="article.path" :href="article.path" class="article-card">
      <div class="article-icon">📖</div>
      <div class="article-content">
        <div class="article-title">{{ article.title }}</div>
        <div class="article-desc">{{ article.desc }}</div>
        <div class="article-meta">
          <span class="tag">{{ article.tags[0] }}</span>
          <span class="tag">{{ article.tags[1] }}</span>
          <span class="article-date">📅 {{ article.date }}</span>
        </div>
      </div>
      <div class="arrow">→</div>
    </a>
  </div>
</div>

<div class="concept-section">
  <h3>💡 核心概念</h3>
  <div class="concept-content">
    <div class="concept-item">
      <h4>🤖 Agent</h4>
      <p>能够自主决策、执行任务的智能程序，结合大模型实现复杂任务自动化</p>
    </div>
    <div class="concept-item">
      <h4>🔗 MCP</h4>
      <p>Model Context Protocol，为大模型提供标准化的上下文扩展与工具调用能力</p>
    </div>
  </div>
</div>

</div>
