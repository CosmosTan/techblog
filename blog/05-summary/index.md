---
layout: page
title: 总结
---

<script setup>
const items = [
  { icon: '🔄', title: '技术复盘', desc: '项目经验总结与技术踩坑记录' },
  { icon: '💡', title: '经验沉淀', desc: '最佳实践与通用解决方案' },
  { icon: '🛠️', title: '工具推荐', desc: '提升效率的开发工具与软件' },
  { icon: '📚', title: '资源分享', desc: '优质学习资料与技术文章推荐' }
]
</script>

<style scoped>
.page-header {
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  border-radius: 16px;
  margin-bottom: 32px;
  color: white;
}
.page-header .emoji { font-size: 64px; margin-bottom: 16px; }
.page-header h1 { font-size: 32px; margin-bottom: 8px; color: white; }
.page-header p { font-size: 16px; opacity: 0.9; margin: 0; }

.content-wrapper { max-width: 1000px; margin: 0 auto; }

.grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.card {
  padding: 24px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  transition: all 0.3s;
}
.card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); border-color: var(--vp-c-brand-1); }
.card-icon { font-size: 36px; margin-bottom: 16px; }
.card h3 { font-size: 18px; margin-bottom: 8px; }
.card p { font-size: 14px; color: var(--vp-c-text-2); margin: 0; }

.quote-section {
  padding: 32px;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  text-align: center;
}
.quote { font-size: 24px; font-style: italic; color: var(--vp-c-text-1); margin-bottom: 12px; }
.author { font-size: 14px; color: var(--vp-c-text-2); }
</style>

<div class="content-wrapper">

<div class="page-header">
  <div class="emoji">📝</div>
  <h1>总结</h1>
  <p>技术复盘、经验沉淀与工具推荐</p>
</div>

<div class="grid-2">
  <div v-for="item in items" :key="item.title" class="card">
    <div class="card-icon">{{ item.icon }}</div>
    <h3>{{ item.title }}</h3>
    <p>{{ item.desc }}</p>
  </div>
</div>

<div class="quote-section">
  <p class="quote">"Stay hungry, Stay foolish."</p>
  <p class="author">— Steve Jobs</p>
</div>

</div>
