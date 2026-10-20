---
title: '生成式网格系统'
description: '使用 CSS Grid 和种子随机函数进行程序化布局生成的小实验。'
cardImage: '@/images/blueprints-image.avif'
cardImageAlt: '生成的网格布局可视化'
tags: ['css', 'generative', 'layout']
experimentDate: 2026-10-05
status: 'done'
---

我想看看能不能在没有任何 JavaScript 布局引擎的情况下生成有趣的布局——只用 CSS Grid 和一个种子伪随机数生成器（mulberry32）。结果是：你给它一个种子字符串，它就产生一个独特的类似瀑布流的网格。每个种子每次都产生相同的布局，所以它是确定性的。

有趣的发现是：大多数种子会产生无聊的布局。我不得不添加一个"密度"启发式来拒绝稀疏网格并重新滚动。大约 30% 的种子会被拒绝。
