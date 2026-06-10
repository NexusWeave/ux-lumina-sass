# Media Mixins
*Last updated: 2026-06-06*

This document provides a technical specification for the mixins defined within `src/mix/_media.sass`. These utilities are engineered to facilitate responsive design, device-specific queries, and sophisticated handling of figure and image elements.

## Mixins

| Mixin | Source Module | Line | Signature | Description |
|-------|--------------|------|-----------|-------------|
| `media-queries-base` | `src/mix/_media.sass` | 8 | `@mixin media-queries-base($breakpoint, $value: null)` | Core low-level implementation that constructs a media query from a breakpoint identifier (or raw query) and an optional value.
| `media-queries` | `src/mix/_media.sass` | 22 | `@mixin media-queries($feature, $value: null)` | Public dispatcher that forwards execution to `media-queries-base` while maintaining the original API interface.
| `prefers-color-scheme` | `src/mix/_media.sass` | 27 | `@mixin prefers-color-scheme($mode)` | Generates the `@media (prefers-color-scheme: $mode)` directive, supporting `light` or `dark` modes.
| `prefers-orientation` | `src/mix/_media.sass` | 30 | `@mixin prefers-orientation($orientation)` | Generates the `@media (orientation: $orientation)` directive.
| `device-media` | `src/mix/_media.sass` | 34 | `@mixin device-media($device, $orientation: portrait)` | Generates high-precision media queries for specific hardware defined in the `devices-breakpoints` map, supporting both portrait and landscape orientations.


These mixins are exported through `src/mix/_index.sass` and can be integrated into your Sass codebase as follows:

```scss
@use "src/mix/_media" as media;

// Implementation example
@include media.media-queries('md') {
  .example { color: red; }
}
```
