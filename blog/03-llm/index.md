---
layout: page
title: 大模型
---

<script setup>
const categories = [
  { icon: '🏗️', title: '模型原理', desc: 'Transformer、Attention、MoE 等架构原理' },
  { icon: '✨', title: 'Prompt 工程', desc: '提示词设计、Few-shot、CoT 等技巧' },
  { icon: '🚀', title: '模型部署', desc: '推理优化、量化压缩、私有化部署' },
  { icon: '🛠️', title: '开源模型', desc: 'LLaMA、Qwen、Mistral 等模型使用' }
]
</script>

<style scoped>
.page-header {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 32px 24px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 16px;
  margin-bottom: 32px;
  color: white;
}

.page-header .emoji { font-size: 48px; flex-shrink: 0; }
.page-header-content { flex: 1; }
.page-header h1 { font-size: 28px; margin: 0 0 8px 0; color: white; }
.page-header p { font-size: 15px; opacity: 0.9; margin: 0; color: rgba(255,255,255,0.9); }

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

.todo-section {
  padding: 24px;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
}
.todo-section h3 { font-size: 18px; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; }
.todo-list { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 12px; }
.todo-list li { padding: 12px 16px; background: var(--vp-c-bg); border-radius: 8px; font-size: 14px; display: flex; align-items: center; gap: 10px; }
.todo-list li::before { content: '📝'; }
</style>

<div class="content-wrapper">

<div class="page-header">
  <div class="emoji">🧠</div>
  <div class="page-header-content">
    <h1>大模型</h1>
    <p>大语言模型原理、Prompt 工程与部署实践</p>
  </div>
</div>

<div class="grid-2">
  <div v-for="cat in categories" :key="cat.title" class="card">
    <div class="card-icon">{{ cat.icon }}</div>
    <h3>{{ cat.title }}</h3>
    <p>{{ cat.desc }}</p>
  </div>
</div>

<div class="todo-section">
  <h3>📋 待更新内容</h3>
  <ul class="todo-list">
    <li>LLM 基础概念与发展历程</li>
    <li>Transformer 架构详解</li>
    <li>GPT 系列模型原理</li>
    <li>Prompt Engineering 实战</li>
    <li>RAG 检索增强生成</li>
    <li>模型微调方法 (LoRA, Ptuning)</li>
  </ul>
</div>

</div>
