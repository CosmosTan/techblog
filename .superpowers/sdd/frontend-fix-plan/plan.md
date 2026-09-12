# Frontend Fix Plan

## Global Constraints
- VitePress project at `docs/` directory
- Base path `/techblog/` for GitHub Pages
- Target: tech blog with distinctive visual identity
- Node.js >= 18, pnpm

## Tasks

### Task 1: Fix duplicate Python navigation
**File**: `docs/.vitepress/config.ts`
**Spec**: Remove the second duplicate Python nav item (lines 31-37). Keep only the first one.

### Task 2: Add dark mode and custom palette
**Files**:
- `docs/.vitepress/styles/palette.css` — VitePress CSS variables override
- `docs/.vitepress/config.ts` — enable darkMode

**Spec**:
- Dark mode: enable `darkMode: true` in config
- Palette: tech blog aesthetic
  - Primary: deep indigo `#1a1a2e`
  - Accent: cyan-green `#00d4aa`
  - Dark bg: `#0f0f1a`
  - Light bg: `#fafaf8`
  - Text dark: `#e8e8e8`
  - Text light: `#1a1a2e`

### Task 3: Enable local search
**File**: `docs/.vitepress/config.ts`
**Spec**: Add `search: { provider: 'local' }` config for in-site search.
