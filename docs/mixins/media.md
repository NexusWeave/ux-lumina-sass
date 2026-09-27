# Media Mixins
*Last updated: 2026-06-11*

This document provides a technical specification for the mixins defined within `src/mix/_media.sass`. These utilities are engineered to facilitate responsive design, device-specific queries, and sophisticated handling of figure and image elements.

## Mixins

| Mixin | Source Module | Line | Signature | Description |
|-------|--------------|------|-----------|-------------|
| `media-queries-base` | `src/mix/_breakpoints.sass` | 8 | `@mixin media-queries-base($breakpoint, $value: null)` | Core low-level implementation constructing mobile-first `min-inline-size` query by default when given a breakpoint identifier.
| `media-queries` | `src/mix/_breakpoints.sass` | 21 | `@mixin media-queries($feature, $value: null)` | Public dispatcher forwarding execution to `media-queries-base`.
| `media-up` | `src/mix/_breakpoints.sass` | 24 | `@mixin media-up($breakpoint)` | Explicit Mobile-First helper building `(min-inline-size: $breakpoint)`.
| `media-down` | `src/mix/_breakpoints.sass` | 29 | `@mixin media-down($breakpoint)` | Explicit Desktop-First override helper building `(max-inline-size: $breakpoint)`.
| `prefers-color-scheme` | `src/mix/_breakpoints.sass` | 34 | `@mixin prefers-color-scheme($mode)` | Generates `@media (prefers-color-scheme: $mode)` directive, supporting `light` or `dark` modes.
| `prefers-orientation` | `src/mix/_breakpoints.sass` | 38 | `@mixin prefers-orientation($orientation)` | Generates `@media (orientation: $orientation)` directive.
| `device-media` | `src/mix/_breakpoints.sass` | 42 | `@mixin device-media($device, $orientation: portrait)` | Generates high-precision media queries for specific hardware defined in `devices-breakpoints` map.
| `background-image` | `src/mix/_media.sass` | 8 | `@mixin background-image(...)` | Advanced utility for setting multiple background image properties in a single call.



These mixins are exported through `src/mix/_index.sass` and can be integrated into your Sass codebase as follows:

```sass
@use "lumina-sass/mix" as media;

// Mobile-first implementation (min-inline-size: 64rem)
@include media.media-queries('tablet-landscape') {
  .example { color: red; }
}

// Explicit mobile-up helper
@include media.media-up('8k') {
  .example { font-size: 3rem; }
}
```

## Reference Table (Breakpoints)

| Breakpoints | Technical Specification |
|---------------------|-------------|
| **mobile-s** | 30rem – Extra-small mobile breakpoint (480px) |
| **mobile** | 48rem – Standard mobile / small tablet breakpoint (768px) |
| **tablet-landscape** | 64rem – Tablet landscape breakpoint (1024px) |
| **hd** | 80rem – High Definition display breakpoint (1280px) |
| **desktop-s** | 80rem – Small desktop breakpoint (1280px) |
| **desktop** | 90rem – Standard desktop breakpoint (1440px) |
| **fhd** | 120rem – Full HD desktop breakpoint (1920px) |
| **4k** | 160rem – 4K / Ultra-high resolution breakpoint (2560px) |
| **8k** | 320rem – 8K / Ultra-high resolution display breakpoint (5120px) |
| **htc** | Device support: Desire, Sensation, One |
| **sharp** | Device support: IS03, 941SH, SX862 |
| **apple** | Device support: iPad, iPad Air, iPad Pro, TV-CD, iPhone (various models) |
| **google** | Device support: Pixel, Nest Hub, Nest Hub Max |
| **display** | Standard resolutions: HD-720p, HD-1080i, HD-1080p |
| **samsung** | Device support: GCZ5, GS8, GFZ5, GA5171, Tab, GS20U |
| **motorola** | Device support: Mobility Milestone |
| **misc** | Miscellaneous devices: Tablet, Widescreen |
| **black-berry** | Device support: BT, Curve, Original |
| **sony-ericson** | Device support: U |
| **iphone** (standalone) | Dedicated standalone hardware identifier |
