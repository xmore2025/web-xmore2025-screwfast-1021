---
title: 'Quiet Scroll'
description: 'A minimal scroll-driven animation library — 1.2KB, no dependencies, just IntersectionObserver and CSS.'
cardImage: '@/images/using-tools.avif'
cardImageAlt: 'Scroll animation demo'
tags: ['javascript', 'animation', 'minimal']
experimentDate: 2026-08-15
status: 'done'
---

Lenis is great but it's 15KB and sometimes you just want elements to fade in as you scroll. This experiment is a 1.2KB script that uses IntersectionObserver to add a class when elements enter the viewport. That's it. The animation itself is a CSS transition.

The whole thing is 40 lines of code. It doesn't handle scroll-driven progress or parallax — it's just "visible or not". But for 90% of pages, that's enough.
