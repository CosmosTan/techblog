---
layout: page
title: 机器学习与深度学习
---

<script setup>
const topics = [
  { icon: '📈', title: '机器学习算法', items: ['监督学习', '无监督学习', '集成学习', '特征工程'] },
  { icon: '🧠', title: '深度学习', items: ['神经网络基础', 'CNN', 'RNN/LSTM', '优化算法'] },
  { icon: '👁️', title: '计算机视觉', items: ['图像分类', '目标检测', '语义分割', 'GAN'] },
  { icon: '💬', title: '自然语言处理', items: ['文本分类', '序列标注', '机器翻译', '问答系统'] }
]
</script>

<style scoped>
.page-header {
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 16px;
  margin-bottom: 32px;
  color: white;
}
.page-header .emoji { font-size: 64px; margin-bottom: 16px; }
.page-header h1 { font-size: 32px; margin-bottom: 8px; color: white; }
.page-header p { font-size: 16px; opacity: 0.9; margin: 0; }

.content-wrapper { max-width: 1000px; margin: 0 auto; }

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.topic-card {
  padding: 24px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  transition: all 0.3s;
}
.topic-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); border-color: var(--vp-c-brand-1); }
.topic-icon { font-size: 32px; margin-bottom: 12px; }
.topic-card h3 { font-size: 16px; margin-bottom: 12px; }
.topic-list { list-style: none; padding: 0; margin: 0; }
.topic-list li { padding: 6px 0; font-size: 14px; color: var(--vp-c-text-2); border-bottom: 1px dashed var(--vp-c-divider); }
.topic-list li:last-child { border-bottom: none; }
.topic-list li::before { content: '→ '; color: var(--vp-c-brand-1); }

.roadmap-section {
  padding: 24px;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
}
.roadmap-section h3 { font-size: 18px; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; }
.roadmap { display: flex; flex-wrap: wrap; gap: 12px; }
.roadmap-item { padding: 12px 20px; background: var(--vp-c-bg); border-radius: 8px; font-size: 14px; display: flex; align-items: center; gap: 8px; border-left: 3px solid var(--vp-c-brand-1); }
</style>

<div class="content-wrapper">

<div class="page-header">
  <div class="emoji">📊</div>
  <h1>机器学习与深度学习</h1>
  <p>算法原理、模型构建与实践应用</p>
</div>

<div class="topics-grid">
  <div v-for="topic in topics" :key="topic.title" class="topic-card">
    <div class="topic-icon">{{ topic.icon }}</div>
    <h3>{{ topic.title }}</h3>
    <ul class="topic-list">
      <li v-for="item in topic.items" :key="item">{{ item }}</li>
    </ul>
  </div>
</div>

<div class="roadmap-section">
  <h3>🗺️ 学习路线</h3>
  <div class="roadmap">
    <div class="roadmap-item">📚 数学基础</div>
    <div class="roadmap-item">📈 机器学习</div>
    <div class="roadmap-item">🧠 深度学习</div>
    <div class="roadmap-item">👁️ 计算机视觉</div>
    <div class="roadmap-item">💬 NLP</div>
    <div class="roadmap-item">🚀 项目实战</div>
  </div>
</div>

</div>
