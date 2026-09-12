# Task 1: Fix duplicate Python navigation

## Spec
In `docs/.vitepress/config.ts`, remove the second duplicate Python nav item (the one at lines 31-37 that repeats "Python" with the same sub-items). Keep only the first Python nav item.

## Before
```ts
{
  text: 'Python', // 下拉列表的名字
  items: [
    { text: '1-数据分析', link: '/Python/数据分析/' },
    { text: '2-应用开发', link: '/Python/Web应用开发/' },
    { text: '3-Cpython解析', link: '/Python/Cpython解析' }
  ]
},
{
  text: 'Python', // 下拉列表的名字 (DUPLICATE - remove this)
  items: [
    { text: '1-数据分析', link: '/Python/数据分析/' },
    { text: '2-应用开发', link: '/Python/Web应用开发/' },
    { text: '3-Cpython解析', link: '/Python/Cpython解析' }
  ]
},
```

## After
```ts
{
  text: 'Python',
  items: [
    { text: '1-数据分析', link: '/Python/数据分析/' },
    { text: '2-应用开发', link: '/Python/Web应用开发/' },
    { text: '3-Cpython解析', link: '/Python/Cpython解析' }
  ]
},
```

## Action
Edit `docs/.vitepress/config.ts` to remove lines 31-37 (the duplicate Python nav block).
