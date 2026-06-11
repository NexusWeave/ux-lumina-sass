# Media Mixins
*Last updated: 2026-06-11*

This document provides a technical specification for the mixins defined within `src/mix/_media.sass`. These utilities are engineered to facilitate responsive design, device-specific queries, and sophisticated handling of figure and image elements.

## Mixins

| Mixin | Source Module | Line | Signature | Description |
|-------|--------------|------|-----------|-------------|
| `media-queries-base` | `src/mix/_media.sass` | 8 | `@mixin media-queries-base($breakpoint, $value: null)` | Core low-level implementation that constructs a media query from a breakpoint identifier (or raw query) and an optional value.
| `media-queries` | `src/mix/_media.sass` | 22 | `@mixin media-queries($feature, $value: null)` | Public dispatcher that forwards execution to `media-queries-base` while maintaining the original API interface.
| `prefers-color-scheme` | `src/mix/_media.sass` | 27 | `@mixin prefers-color-scheme($mode)` | Generates the `@media (prefers-color-scheme: $mode)` directive, supporting `light` or `dark` modes.
| `prefers-orientation` | `src/mix/_media.sass` | 31 | `@mixin prefers-orientation($orientation)` | Generates the `@media (orientation: $orientation)` directive.
| `device-media` | `src/mix/_media.sass` | 36 | `@mixin device-media($device, $orientation: portrait)` | Generates high-precision media queries for specific hardware defined in the `devices-breakpoints` map, supporting both portrait and landscape orientations.
| `background-image` | `src/mix/_media.sass` | 66 | `@mixin background-image($path, $size: cover, $repeat: no-repeat, $position: center, $attachment: null, $clip: null, $origin: null)` | Advanced utility for setting multiple background image properties (size, repeat, position, etc.) in a single call.



These mixins are exported through `src/mix/_index.sass` and can be integrated into your Sass codebase as follows:

```sass
@use "lumina-sass/mix" as media;

// Implementation example
@include media.media-queries('md') {
  .example { color: red; }
}
```

## Reference Table (Breakpoints)

| Breakpoints | Technical Specification |
|---------------------|-------------|
| **xs** | 30rem – Extra-small breakpoint |
| **sm** | 48rem – Small breakpoint |
| **md** | 64rem – Medium breakpoint |
| **lg** | 80rem – Large breakpoint |
| **xl** | 90rem – Extra-large breakpoint |
| **S**  | 12.5rem – Custom small dimension |
| **M**  | 31.25rem – Custom medium dimension |
| **L**  | 50rem – Custom large dimension |
| **XL** | 64rem – Custom extra-large dimension |
| **2XL**| 80rem – Custom double-extra-large dimension |
| **3XL**| 81.25rem – Custom triple-extra-large dimension |
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
