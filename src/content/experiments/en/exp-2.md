---
title: 'Color Palette from a Photo'
description: 'Extracting a 5-color palette from any image using a modified median-cut algorithm in the browser.'
cardImage: '@/images/features-image.avif'
cardImageAlt: 'Color palette extraction demo'
tags: ['canvas', 'color', 'algorithm']
experimentDate: 2026-09-20
status: 'in-progress'
---

The standard median-cut algorithm gives you colors that are mathematically correct but visually wrong — it clusters by population, so a photo that's 90% blue sky gives you three shades of blue and misses the interesting accent colors.

My modification: weight each cluster by its variance, not just its population. High-variance regions get split even if they're small. This gives palettes that feel more like what a designer would pick.
