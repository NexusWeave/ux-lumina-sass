# Lumina‑Sass Documentation
*Last updated: 2026-06-05*
##  Overview
This documentation provides a **comprehensive reference** for the entire `lumina‑sass` code base. It lives under the `docs/` folder and is intended to be the single source of truth for developers and designers working with the library.

---

##  Mixins

| Mixin | File | Line | Signature |
|-------|------|------|-----------|
| `icon-generator` | `src/mix/_generators.sass` | 7 | `@mixin icon-generator($name: null, $color: null, $font-family: 'bootstrap-icons')` |
| `flexbox-generator` | `src/mix/_generators.sass` | 36 | `@mixin flexbox-generator($name)` |
| `media-queries-base` | `src/mix/_media.sass` | 8 | `@mixin media-queries-base($breakpoint, $value: null)` |
| `media-queries` | `src/mix/_media.sass` | 22 | `@mixin media-queries($feature, $value: null)` |
| `prefers-color-scheme` | `src/mix/_media.sass` | 27 | `@mixin prefers-color-scheme($mode)` |
| `prefers-orientation` | `src/mix/_media.sass` | 30 | `@mixin prefers-orientation($orientation)` |
| `device-media` | `src/mix/_media.sass` | 34 | `@mixin device-media($device, $orientation: portrait)` |

| `text-wrap-safe` | `src/mix/_typography.sass` | 4 | `@mixin text-wrap-safe()` |
| `font-style` | `src/mix/_typography.sass` | 12 | `@mixin font-style($font, $family: null)` |
| `font` | `src/mix/_typography.sass` | 20 | `@mixin font($size: null, $weight: null, $font: null, $family: null, $style: null)` |

*All mixins are written using the indented Sass syntax (`.sass`). The line numbers correspond to the first line of the `@mixin` declaration in the source file.*