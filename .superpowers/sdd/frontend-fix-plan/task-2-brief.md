# Task 2: Add dark mode + custom palette

## Spec

### 2.1 Enable dark mode in config.ts
Add `darkMode: true` to the VitePress config.

### 2.2 Create palette.css with custom tech blog colors
Create `docs/.vitepress/styles/palette.css` with VitePress CSS variable overrides:

```css
:root {
  --vp-c-brand-1: #1a1a2e;      /* Deep indigo - primary */
  --vp-c-brand-2: #252545;       /* Lighter indigo */
  --vp-c-brand-3: #00d4aa;       /* Cyan-green accent */
  --vp-c-brand-soft: rgba(0, 212, 170, 0.14);
  
  --vp-c-bg: #fafaf8;            /* Warm white background */
  --vp-c-bg-soft: #f4f1ea;
  --vp-c-bg-mute: #e8e8e4;
  
  --vp-c-text-1: #1a1a2e;        /* Dark text */
  --vp-c-text-2: #4a4a5a;
  --vp-c-text-3: #6a6a7a;
}

.dark {
  --vp-c-bg: #0f0f1a;            /* Deep dark background */
  --vp-c-bg-soft: #1a1a2e;
  --vp-c-bg-mute: #252545;
  
  --vp-c-text-1: #e8e8e8;        /* Light text */
  --vp-c-text-2: #b0b0b8;
  --vp-c-text-3: #808088;
}
```

## Files to create/modify
- Create: `docs/.vitepress/styles/palette.css`
- Edit: `docs/.vitepress/config.ts`

## Action
1. Create the styles directory and palette.css file
2. Update config.ts to add darkMode: true
