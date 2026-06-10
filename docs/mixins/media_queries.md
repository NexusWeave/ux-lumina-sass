# Media Queries
*Last updated: 2026-06-05*

This document outlines the media-query mixins provided by **Lumina Sass**.

## Mixins

| Mixin | Description |
|-------|-------------|
| `media-queries($feature, $value: null)` | Primary dispatcher that delegates execution to `media-queries-base`. Designed for implementing generic media queries. |
| `prefers-color-scheme($mode)` | Encapsulates the `@media (prefers-color-scheme: $mode)` directive, where `$mode` accepts `light` or `dark`. |
| `prefers-orientation($orientation)` | Encapsulates the `@media (orientation: $orientation)` directive. |
| `device-media($device, $orientation: portrait)` | Generates precise media queries tailored for specific hardware identifiers (e.g., `iphone`). |


## Reference Table

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

*Breakpoints are defined by their respective width values, while device rows specify the supported hardware sub-categories.*
