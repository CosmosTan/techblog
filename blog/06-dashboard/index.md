---
layout: page
title: 数据看板
---

<script setup>
import { ref, computed } from 'vue'

// 博客统计数据
const stats = ref({
  totalArticles: 6,
  totalCategories: 5,
  totalWords: 15000,
  lastUpdate: '2026-09-13'
})

// 文章分类统计
const categories = ref([
  { name: '全栈开发', path: '/01-full-stack/', count: 4, icon: '💻', color: '#667eea', desc: 'Linux、Python、DevOps' },
  { name: '智能体', path: '/02-agent/', count: 2, icon: '🤖', color: '#11998e', desc: 'Agent、MCP' },
  { name: '大模型', path: '/03-llm/', count: 0, icon: '🧠', color: '#f5576c', desc: 'LLM、Prompt Engineering' },
  { name: '机器学习', path: '/04-ml-dl/', count: 0, icon: '📊', color: '#4facfe', desc: 'ML、DL、CV、NLP' },
  { name: '总结', path: '/05-summary/', count: 0, icon: '📝', color: '#fa709a', desc: '复盘、经验、工具' }
])

// 学习里程碑
const milestones = ref([
  { date: '2024-01', title: '博客上线', desc: '使用 VitePress 搭建个人技术博客', icon: '🚀' },
  { date: '2024-06', title: '启用本地搜索', desc: '集成 MiniSearch 全文搜索功能', icon: '🔍' },
  { date: '2024-09', title: '支持深色模式', desc: '完成主题适配，支持 Dark Mode', icon: '🌙' },
  { date: '2025-01', title: '目录重构', desc: '优化博客目录结构与分类', icon: '📁' },
  { date: '2026-09', title: '数据看板上线', desc: '新增统计可视化功能', icon: '📊' }
])

// 生成贡献图数据
const generateContribData = () => {
  const data = []
  const weeks = 20
  for (let w = 0; w < weeks; w++) {
    const week = []
    for (let d = 0; d < 7; d++) {
      // 模拟：工作日更活跃，周末较少
      const isWeekend = d === 0 || d === 6
      const rand = Math.random()
      let level = 0
      if (rand > 0.3) {
        level = isWeekend ? Math.floor(Math.random() * 2) : Math.floor(Math.random() * 4) + 1
      }
      week.push({ level, date: `2026-W${w}-D${d}` })
    }
    data.push(week)
  }
  return data
}

const contribData = generateContribData()

// 获取贡献颜色
const getContribColor = (level) => {
  const colors = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']
  return colors[level] || colors[0]
}

// 技能进度
const skills = ref([
  { name: 'Python', progress: 85, color: '#3776ab' },
  { name: 'Linux', progress: 70, color: '#fcc624' },
  { name: 'Git', progress: 80, color: '#f05032' },
  { name: 'AI/ML', progress: 60, color: '#9b59b6' },
  { name: 'Web Dev', progress: 75, color: '#e34c26' }
])
</script>

<style scoped>
.dashboard {
  max-width: 1100px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  margin-bottom: 40px;
  color: white;
}

.page-header .emoji { font-size: 56px; margin-bottom: 12px; }
.page-header h1 { font-size: 28px; margin-bottom: 8px; color: white; }
.page-header p { font-size: 15px; opacity: 0.9; margin: 0; }

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 40px;
}

@media (max-width: 768px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
}

.stat-card {
  padding: 24px 16px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #667eea, #764ba2);
}

.stat-icon { font-size: 28px; margin-bottom: 8px; }
.stat-value { font-size: 32px; font-weight: 700; color: var(--vp-c-brand-1); margin-bottom: 4px; }
.stat-label { font-size: 13px; color: var(--vp-c-text-2); }

/* Section Title */
.section-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Categories Grid */
.categories-section { margin-bottom: 40px; }

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.category-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.25s;
}

.category-card:hover {
  transform: translateX(6px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

.category-icon {
  font-size: 28px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg);
  border-radius: 10px;
  flex-shrink: 0;
}

.category-info { flex: 1; }
.category-name { font-weight: 600; font-size: 15px; margin-bottom: 2px; }
.category-desc { font-size: 12px; color: var(--vp-c-text-2); }
.category-count { font-size: 18px; font-weight: 700; color: var(--vp-c-brand-1); }

/* Timeline */
.timeline-section { margin-bottom: 40px; }

.timeline {
  position: relative;
  padding-left: 36px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 12px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(to bottom, #667eea, #764ba2);
  border-radius: 1px;
}

.timeline-item {
  position: relative;
  padding: 16px 20px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  margin-bottom: 16px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -28px;
  top: 20px;
  width: 12px;
  height: 12px;
  background: #667eea;
  border: 3px solid var(--vp-c-bg);
  border-radius: 50%;
}

.timeline-icon { font-size: 24px; }

.timeline-content { flex: 1; }
.timeline-date { font-size: 12px; color: var(--vp-c-brand-1); font-weight: 500; margin-bottom: 4px; }
.timeline-title { font-size: 16px; font-weight: 600; margin-bottom: 4px; }
.timeline-desc { font-size: 13px; color: var(--vp-c-text-2); }

/* Contribution Grid */
.contrib-section { margin-bottom: 40px; }

.contrib-container {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 20px;
  overflow-x: auto;
}

.contrib-grid {
  display: flex;
  gap: 4px;
  min-width: max-content;
}

.contrib-week {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contrib-day {
  width: 14px;
  height: 14px;
  border-radius: 3px;
}

.contrib-legend {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.contrib-legend .boxes {
  display: flex;
  gap: 2px;
}

.contrib-legend span {
  width: 14px;
  height: 14px;
  border-radius: 3px;
}

/* Skills Progress */
.skills-section { margin-bottom: 40px; }

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.skill-item {
  padding: 16px 20px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.skill-name { font-size: 14px; font-weight: 500; }
.skill-percent { font-size: 14px; font-weight: 600; color: var(--skill-color); }

.skill-bar {
  height: 8px;
  background: var(--vp-c-bg);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: var(--vp-c-brand-1);
  border-radius: 4px;
  transition: width 1s ease;
}

/* Summary */
.summary-section {
  padding: 24px;
  background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 12px;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  text-align: center;
}

@media (max-width: 640px) {
  .summary-grid { grid-template-columns: 1fr; }
}

.summary-item .emoji { font-size: 32px; margin-bottom: 8px; }
.summary-item .value { font-size: 28px; font-weight: 700; color: var(--vp-c-brand-1); margin-bottom: 4px; }
.summary-item .label { font-size: 13px; color: var(--vp-c-text-2); }
</style>

<div class="dashboard">

<div class="page-header">
  <div class="emoji">📊</div>
  <h1>数据看板</h1>
  <p>博客统计、学习历程与技术成长</p>
</div>

<!-- Stats Grid -->
<div class="stats-grid">
  <div class="stat-card">
    <div class="stat-icon">📝</div>
    <div class="stat-value">{{ stats.totalArticles }}</div>
    <div class="stat-label">文章总数</div>
  </div>
  <div class="stat-card">
    <div class="stat-icon">📁</div>
    <div class="stat-value">{{ stats.totalCategories }}</div>
    <div class="stat-label">技术分类</div>
  </div>
  <div class="stat-card">
    <div class="stat-icon">✍️</div>
    <div class="stat-value">~{{ Math.round(stats.totalWords / 1000) }}k</div>
    <div class="stat-label">累计字数</div>
  </div>
  <div class="stat-card">
    <div class="stat-icon">🕐</div>
    <div class="stat-value">{{ stats.lastUpdate.split('-')[1] }}/{{ stats.lastUpdate.split('-')[0].slice(2) }}</div>
    <div class="stat-label">最近更新</div>
  </div>
</div>

<!-- Categories -->
<div class="categories-section">
  <h3 class="section-title">📂 分类统计</h3>
  <div class="categories-grid">
    <a 
      v-for="cat in categories" 
      :key="cat.name" 
      :href="cat.path" 
      class="category-card"
    >
      <div class="category-icon">{{ cat.icon }}</div>
      <div class="category-info">
        <div class="category-name">{{ cat.name }}</div>
        <div class="category-desc">{{ cat.desc }}</div>
      </div>
      <div class="category-count">{{ cat.count }}</div>
    </a>
  </div>
</div>

<!-- Timeline -->
<div class="timeline-section">
  <h3 class="section-title">🕐 学习历程</h3>
  <div class="timeline">
    <div v-for="item in milestones" :key="item.date" class="timeline-item">
      <div class="timeline-icon">{{ item.icon }}</div>
      <div class="timeline-content">
        <div class="timeline-date">{{ item.date }}</div>
        <div class="timeline-title">{{ item.title }}</div>
        <div class="timeline-desc">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</div>

<!-- Contribution -->
<div class="contrib-section">
  <h3 class="section-title">📈 贡献热力图</h3>
  <div class="contrib-container">
    <div class="contrib-grid">
      <div v-for="(week, wi) in contribData" :key="wi" class="contrib-week">
        <div 
          v-for="(day, di) in week" 
          :key="di" 
          class="contrib-day"
          :style="{ background: getContribColor(day.level) }"
        ></div>
      </div>
    </div>
    <div class="contrib-legend">
      <span>少</span>
      <div class="boxes">
        <span style="background: #ebedf0"></span>
        <span style="background: #9be9a8"></span>
        <span style="background: #40c463"></span>
        <span style="background: #30a14e"></span>
        <span style="background: #216e39"></span>
      </div>
      <span>多</span>
    </div>
  </div>
</div>

<!-- Skills -->
<div class="skills-section">
  <h3 class="section-title">⚡ 技术栈进度</h3>
  <div class="skills-grid">
    <div 
      v-for="skill in skills" 
      :key="skill.name" 
      class="skill-item"
    >
      <div class="skill-header">
        <span class="skill-name">{{ skill.name }}</span>
        <span class="skill-percent">{{ skill.progress }}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" :style="{ width: skill.progress + '%' }"></div>
      </div>
    </div>
  </div>
</div>

<!-- Summary -->
<div class="summary-section">
  <div class="summary-grid">
    <div class="summary-item">
      <div class="emoji">🎯</div>
      <div class="value">2024</div>
      <div class="label">开始写作</div>
    </div>
    <div class="summary-item">
      <div class="emoji">📈</div>
      <div class="value">持续</div>
      <div class="label">内容更新中</div>
    </div>
    <div class="summary-item">
      <div class="emoji">🚀</div>
      <div class="value">ing</div>
      <div class="label">Stay Hungry</div>
    </div>
  </div>
</div>

</div>
