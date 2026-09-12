# Task 2 Report: Dark Mode + Custom Palette

## What was created/changed

### 1. Created `docs/.vitepress/styles/palette.css`
New file with CSS variable overrides for VitePress theming:
- Light mode: deep indigo primary (#1a1a2e), cyan-green accent (#00d4aa), warm white bg (#fafaf8)
- Dark mode: deep dark bg (#0f0f1a), light text (#e8e8e8)

### 2. Edited `docs/.vitepress/config.ts`
Added `darkMode: true` at the top level of defineConfig to enable dark mode support.

## Git Diff

```diff
diff --git a/docs/.vitepress/config.ts b/docs/.vitepress/config.ts
index 70745ec..0747d0a 100644
--- a/docs/.vitepress/config.ts
+++ b/docs/.vitepress/config.ts
@@ -7,6 +7,8 @@ export default defineConfig({
   // GitHub Pages 子路径
   base: '/techblog/',

+  darkMode: true,
+
   head: [
     ['link', { rel: 'icon', href: '/favicon.ico' }],
     ['meta', { name: 'keywords', content: '人工智能' }]
diff --git a/docs/.vitepress/styles/palette.css b/docs/.vitepress/styles/palette.css
new file mode 100644
index 0000000..e2836e3
--- /dev/null
+++ b/docs/.vitepress/styles/palette.css
@@ -0,0 +1,24 @@
+:root {
+  --vp-c-brand-1: #1a1a2e;      /* Deep indigo - primary */
+  --vp-c-brand-2: #252545;       /* Lighter indigo */
+  --vp-c-brand-3: #00d4aa;       /* Cyan-green accent */
+  --vp-c-brand-soft: rgba(0, 212, 170, 0.14);
+
+  --vp-c-bg: #fafaf8;            /* Warm white background */
+  --vp-c-bg-soft: #f4f1ea;
+  --vp-c-bg-mute: #e8e8e4;
+
+  --vp-c-text-1: #1a1a2e;        /* Dark text */
+  --vp-c-text-2: #4a4a5a;
+  --vp-c-text-3: #6a6a7a;
+}
+
+.dark {
+  --vp-c-bg: #0f0f1a;            /* Deep dark background */
+  --vp-c-bg-soft: #1a1a2e;
+  --vp-c-bg-mute: #252545;
+
+  --vp-c-text-1: #e8e8e8;        /* Light text */
+  --vp-c-text-2: #b0b0b8;
+  --vp-c-text-3: #808088;
+}
```

## Commit

```
commit fec7025
feat: add dark mode and custom palette

Co-Authored-By: Claude Code <noreply@anthropic.com>
```
