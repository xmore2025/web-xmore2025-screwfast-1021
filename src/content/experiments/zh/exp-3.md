---
title: '安静滚动'
description: '一个极简的滚动驱动动画库——1.2KB，零依赖，只有 IntersectionObserver 和 CSS。'
cardImage: '@/images/using-tools.avif'
cardImageAlt: '滚动动画演示'
tags: ['javascript', 'animation', 'minimal']
experimentDate: 2026-08-15
status: 'done'
---

Lenis 很棒，但它有 15KB，有时候你只是想让元素在滚动时淡入。这个实验是一个 1.2KB 的脚本，使用 IntersectionObserver 在元素进入视口时添加一个类。就这样。动画本身是 CSS 过渡。

整个东西只有 40 行代码。它不处理滚动驱动的进度或视差——只是"可见或不可见"。但对于 90% 的页面来说，这足够了。
