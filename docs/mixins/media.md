# Media Mixins
*Last updated: 2026-06-06*

This document describes the mixins defined in `src/mix/_media.sass`. These mixins provide utilities for responsive design, device‑specific queries, and figure/image handling.

## Mixins

| Mixin | File | Line | Signature | Description |
|-------|------|------|-----------|-------------|
| `media-queries-base` | `src/mix/_media.sass` | 8 | `@mixin media-queries-base($breakpoint, $value: null)` | Core low‑level implementation that builds a media query from a breakpoint name (or raw query) and optional value.
| `media-queries` | `src/mix/_media.sass` | 22 | `@mixin media-queries($feature, $value: null)` | Public dispatcher that forwards to `media-queries-base` while preserving the original API.
| `prefers-color-scheme` | `src/mix/_media.sass` | 27 | `@mixin prefers-color-scheme($mode)` | Generates `@media (prefers-color-scheme: $mode)` where `$mode` is `light` or `dark`.
| `prefers-orientation` | `src/mix/_media.sass` | 30 | `@mixin prefers-orientation($orientation)` | Generates `@media (orientation: $orientation)`.
| `device-media` | `src/mix/_media.sass` | 34 | `@mixin device-media($device, $orientation: portrait)` | Generates a precise media query for a single device defined in `devices-breakpoints` map, handling both portrait and landscape orientations.
| `figure-and-image` | `src/mix/_media.sass` | 56 | `@mixin figure-and-image($object-fit: cover, $size: null, $style: italic, $width: 16, $length: 9, $position: null, $percentage: null)` | Helper for responsive `<figure>` elements and their child `<img>/<picture>`. Applies object‑fit, aspect‑ratio, and when `$size` or `$style` is provided, `<figcaption>` is styled via the `font` mixin from `typography.sass`, plus positioning.
| `aspect-ratio` | `src/mix/_media.sass` | 90 | `@mixin aspect-ratio($width: 16, $length: 9)` | Sets the CSS `aspect-ratio` property based on supplied width and length.
| `aspect-ratio-4-3` | `src/mix/_media.sass` | 94 | `@mixin aspect-ratio-4-3()` | Shortcut for a 4:3 aspect ratio.
| `aspect-ratio-1-1` | `src/mix/_media.sass` | 97 | `@mixin aspect-ratio-1-1()` | Shortcut for a 1:1 (square) aspect ratio.
| `aspect-ratio-3-2` | `src/mix/_media.sass` | 100 | `@mixin aspect-ratio-3-2()` | Shortcut for a 3:2 aspect ratio.
| `aspect-ratio-21-9` | `src/mix/_media.sass` | 103 | `@mixin aspect-ratio-21-9()` | Shortcut for a 21:9 widescreen aspect ratio.
| `aspect-ratio-9-16` | `src/mix/_media.sass` | 106 | `@mixin aspect-ratio-9-16()` | Shortcut for a 9:16 portrait video aspect ratio.

These mixins are exported via `src/mix/_index.sass` and can be imported in your Sass code with:

```scss
@use "src/mix/_media" as media;

// Example usage
@include media.media-queries('md') {
  .example { color: red; }
}
```
