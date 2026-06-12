# Lumina-Sass Documentation
*Last updated: 2026-06-11*

## Overview
This document provides a **comprehensive technical reference** for the entire `lumina-sass` codebase. Serving as the definitive source of truth for both developers and designers, it details the architecture and implementation of the library's mixins.

---

## Mixins

| Mixin | Source Module | Line | Signature |
|-------|--------------|------|-----------|
| `gen-icons` | `src/mix/_generators.sass` | 24 | `@mixin gen-icons($name: null, $color: rgb(64, 64, 64), $font-family: 'bootstrap-icons')` |
| `gen-flexbox` | `src/mix/_generators.sass` | 47 | `@mixin gen-flexbox($name)` |
| `gen-inputs` | `src/mix/_generators.sass` | 55 | `@mixin gen-inputs($name: null, $placeholder-color: null, $custom: (), $debug: false, $silent: false)` |
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
| `line-clamp` | `src/mix/_typography.sass` | 67 | `@mixin line-clamp($lines: 3)` |
| `assert-contrast` | `src/mix/_contrast.sass` | 8 | `@mixin assert-contrast($foreground, $background, $threshold: 4.5)` |
| `base-btn` | `src/mix/_buttons.sass` | 8 | `@mixin base-btn($bg-color: $light-blue, $text-color: null, $border-color: null, $size: 1em, $weight: bold)` |
| `link-color` | `src/mix/_elements.sass` | 7 | `@mixin link-color($color: $light-blue, $color-hover: ..., $color-active: ..., $color-visited: $light-blue)` |
| `background-color` | `src/mix/_utilities.sass` | 9 | `@mixin background-color($bg-color: $soft-white, $text-color: null, $blend-bg: $soft-white)` |
| `icon-style` | `src/mix/_utilities.sass` | 21 | `@mixin icon-style($icon-content, $font-family: 'icons')` |
| `core` | `src/mix/_global-theme-colors.sass` | 13 | `@mixin apply-global-theme($body-bg: $soft-white, $text-color: null, $accent-color: null, $custom-colors: ())` |

---

## Detailed Documentation

- [Alerts](./alerts.md)
- [Buttons](./buttons.md)
- [Cards](./cards.md)
- [Links](./links.md)
- [Media Queries](./media.md)
- [Utilities](./utilities.md)
- [Core Scaffolding](./global-theme-colors.md)
- [Typography](./typography.md)

*Note: All mixins are implemented utilizing the indented Sass syntax (`.sass`). The referenced line numbers correspond to the initial line of the `@mixin` declaration within the source file.*
