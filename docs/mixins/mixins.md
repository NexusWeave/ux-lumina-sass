# Lumina-Sass Documentation
*Last updated: 2026-06-05*

## Overview
This document provides a **comprehensive technical reference** for the entire `lumina-sass` codebase. Serving as the definitive source of truth for both developers and designers, it details the architecture and implementation of the library's mixins.

---

## Mixins

| Mixin | Source Module | Line | Signature |
|-------|--------------|------|-----------|
| `icon-generator` | `src/mix/_generators.sass` | 29 | `@mixin icon-generator($name: null, $color: rgb(64, 64, 64), $font-family: 'bootstrap-icons')` |
| `flexbox-generator` | `src/mix/_generators.sass` | 52 | `@mixin flexbox-generator($name)` |
| `input-generator` | `src/mix/_generators.sass` | 60 | `@mixin input-generator($name, $placeholder-color: null, $custom: ())` |
| `media-queries-base` | `src/mix/_media.sass` | 8 | `@mixin media-queries-base($breakpoint, $value: null)` |
| `media-queries` | `src/mix/_media.sass` | 22 | `@mixin media-queries($feature, $value: null)` |
| `prefers-color-scheme` | `src/mix/_media.sass` | 27 | `@mixin prefers-color-scheme($mode)` |
| `prefers-orientation` | `src/mix/_media.sass` | 31 | `@mixin prefers-orientation($orientation)` |
| `device-media` | `src/mix/_media.sass` | 36 | `@mixin device-media($device, $orientation: portrait)` |
| `text-wrap-safe` | `src/mix/_typography.sass` | 8 | `@mixin text-wrap-safe($inline: 0)` |
| `font-style` | `src/mix/_typography.sass` | 16 | `@mixin font-style($font, $family: null, $line-height: null, $variant: null)` |
| `font` | `src/mix/_typography.sass` | 43 | `@mixin font( $font:null, $size: 1rem, $family: null, $style: null, $weight: null, $line-height: null, $variant: null)` |
| `sans-serif` | `src/mix/_typography.sass` | 68 | `@mixin sans-serif($font: null, $size: 1rem, $weight: null, $style: null)` |
| `serif` | `src/mix/_typography.sass` | 73 | `@mixin serif($font: null, $size: 1rem, $weight: null, $style: null)` |
| `monospace` | `src/mix/_typography.sass` | 78 | `@mixin monospace($font: null, $size: 1rem, $weight: null, $style: null)` |
| `text-adjustments` | `src/mix/_typography.sass` | 110 | `@mixin text-adjustments($alignment: null, $decoration: null)` |
| `assert-contrast` | `src/mix/_contrast.sass` | 8 | `@mixin assert-contrast($foreground, $background, $threshold: 4.5)` |
| `base-btn` | `src/mix/_buttons.sass` | 6 | `@mixin base-btn($bg-color: $groovy-70s-cream, $text-color: $groovy-70s-warm-white, $border-color: null, $size: 1em, $weight: bold)` |
| `link-color` | `src/mix/_elements.sass` | 4 | `@mixin link-color($color, $color-hover, $color-active, $color-visited)` |
| `background-color` | `src/mix/_misc-styling.sass` | 1 | `@mixin background-color($bg-color, $text-color)` |

*Note: All mixins are implemented utilizing the indented Sass syntax (`.sass`). The referenced line numbers correspond to the initial line of the `@mixin` declaration within the source file.*
