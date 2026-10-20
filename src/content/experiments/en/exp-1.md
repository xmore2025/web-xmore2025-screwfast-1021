---
title: 'Generative Grid System'
description: 'A small experiment in procedural layout generation using CSS Grid and a seeded random function.'
cardImage: '@/images/blueprints-image.avif'
cardImageAlt: 'Generated grid layout visualization'
tags: ['css', 'generative', 'layout']
experimentDate: 2026-10-05
status: 'done'
---

I wanted to see if I could generate interesting layouts without any JavaScript layout engine — just CSS Grid and a seeded PRNG (mulberry32). The result is a system where you give it a seed string and it produces a unique masonry-like grid. Each seed produces the same layout every time, so it's deterministic.

The interesting part was discovering that most seeds produce boring layouts. I had to add a "density" heuristic to reject sparse grids and re-roll. About 30% of seeds get rejected.
