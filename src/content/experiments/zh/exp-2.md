---
title: '从照片提取配色'
description: '在浏览器中使用改进的中位切分算法从任意图像提取五色配色。'
cardImage: '@/images/features-image.avif'
cardImageAlt: '配色提取演示'
tags: ['canvas', 'color', 'algorithm']
experimentDate: 2026-09-20
status: 'in-progress'
---

标准的中位切分算法给你的颜色在数学上是正确的，但在视觉上是错误的——它按数量聚类，所以一张 90% 是蓝色天空的照片会给你三种蓝色，而错过有趣的强调色。

我的修改：按方差而非数量加权每个聚类。高方差区域即使很小也会被拆分。这样产生的配色更像设计师会选择的。
