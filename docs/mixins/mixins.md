# Lumina-Sass Documentation
*Last updated: 2026-06-11*

## Overview
This document provides a **comprehensive technical reference** for the entire `lumina-sass` codebase. Serving as the definitive source of truth for both developers and designers, it details the architecture and implementation of the library's mixins.

---

## Mixins

| Mixin | Source Module | Line | Signature |
|-------|--------------|------|-----------|
| `icon-generator` | `src/mix/_generators.sass` | 24 | `@mixin icon-generator($name: null, $color: rgb(64, 64, 64), $font-family: 'bootstrap-icons')` |
| `flexbox-generator` | `src/mix/_generators.sass` | 47 | `@mixin flexbox-generator($name)` |
| `input-generator` | `src/mix/_generators.sass` | 55 | `@mixin input-generator($name, $placeholder-color: null, $custom: ())` |
| `media-queries-base` | `src/mix/_media.sass` | 8 | `@mixin media-queries-base($breakpoint, $value: null)` |
| `media-queries` | `src/mix/_media.sass` | 22 | `@mixin media-queries($feature, $value: null)` |
| `prefers-color-scheme` | `src/mix/_media.sass` | 27 | `@mixin prefers-color-scheme($mode)` |
| `prefers-orientation` | `src/mix/_media.sass` | 31 | `@mixin prefers-orientation($orientation)` |
| `device-media` | `src/mix/_media.sass` | 36 | `@mixin device-media($device, $orientation: portrait)` |
| `background-image` | `src/mix/_media.sass` | 66 | `@mixin background-image($path, $size: cover, $repeat: no-repeat, $position: center, $attachment: null, $clip: null, $origin: null)` |
| `text-wrap-safe` | `src/mix/_typography.sass` | 8 | `@mixin text-wrap-safe($inline: 0)` |
| `font` | `src/mix/_typography.sass` | 16 | `@mixin font($font: null, $size: 1rem, $family: null, $style: null, $weight: null, $line-height: null, $variant: null, $quiet: false)` |
| `sans-serif` | `src/mix/_typography.sass` | 52 | `@mixin sans-serif($font: null, $size: 1rem, $weight: null, $style: null)` |
| `serif` | `src/mix/_typography.sass` | 57 | `@mixin serif($font: null, $size: 1rem, $weight: null, $style: null)` |
| `monospace` | `src/mix/_typography.sass` | 62 | `@mixin monospace($font: null, $size: 1rem, $weight: null, $style: null)` |
| `text-adjustments` | `src/mix/_typography.sass` | 73 | `@mixin text-adjustments($alignment: null, $decoration: null, $quiet: false)` |
| `assert-contrast` | `src/mix/_contrast.sass` | 8 | `@mixin assert-contrast($foreground, $background, $threshold: 4.5)` |
| `base-btn` | `src/mix/_buttons.sass` | 6 | `@mixin base-btn($bg-color: $groovy-70s-cream, $text-color: $groovy-70s-warm-white, $border-color: null, $size: 1em, $weight: bold)` |
| `link-color` | `src/mix/_elements.sass` | 4 | `@mixin link-color($color, $color-hover, $color-active, $color-visited)` |
| `background-color` | `src/mix/_misc-styling.sass` | 9 | `@mixin background-color($bg-color: base.$white, $text-color: null, $blend-bg: base.$white)` |

*Note: All mixins are implemented utilizing the indented Sass syntax (`.sass`). The referenced line numbers correspond to the initial line of the `@mixin` declaration within the source file.*
