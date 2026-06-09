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


These mixins are exported via `src/mix/_index.sass` and can be imported in your Sass code with:

```scss
@use "src/mix/_media" as media;

// Example usage
@include media.media-queries('md') {
  .example { color: red; }
}
```
