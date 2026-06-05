# Media Queries
*Last updated: 2026-06-05*
This document describes the media‑query mixins provided by **Lumina Sass**.

## Mixins

- `media-queries($feature, $value: null)` – Core dispatcher that delegates to `media-queries-base`. Use it for generic media queries.
- `prefers-color-scheme($mode)` – Wraps `@media (prefers-color-scheme: $mode)` where `$mode` is `light` or `dark`.
- `prefers-orientation($orientation)` – Wraps `@media (orientation: $orientation)`.
- `device‑media($device, $orientation: portrait)` – Generates a precise media query for a single device (e.g. `iphone`).
- `figure-and-image($object-fit: cover, $size: null, $style: null)` – Helper for responsive images and figures.

## Reference Table

| Breakpoints | Description |
|---------------------|-------------|
| **xs** | 30rem – extra‑small breakpoint |
| **sm** | 48rem – small breakpoint |
| **md** | 64rem – medium breakpoint |
| **lg** | 80rem – large breakpoint |
| **xl** | 90rem – extra‑large breakpoint |
| **S**  | 12.5rem – custom small size |
| **M**  | 31.25rem – custom medium size |
| **L**  | 50rem – custom large size |
| **XL** | 64rem – custom extra‑large size |
| **2XL**| 80rem – custom double‑extra‑large size |
| **3XL**| 81.25rem – custom triple‑extra‑large size |
| **htc** | Devices: desire, sensation, one |
| **sharp** | Devices: is03, 941sh, sx862 |
| **apple** | Devices: ipad, ipad‑air, ipad‑pro, tv‑cd, iphone, iphone‑7, iphone‑xr, iphone‑pro, iphone‑pro‑height, iphone‑plus, iphone‑pro‑max |
| **google** | Devices: pixel, nest‑hub, nest‑hub‑max |
| **display** | Devices: hd‑720p, hd‑1080i, hd‑1080p |
| **samsung** | Devices: gcz5, gs8, gfz5, ga5171, tab, gs20u |
| **motorola** | Device: mobility‑milestone |
| **misc** | Devices: tablet, wideScreen |
| **black‑berry** | Devices: bt, curve, original |
| **sony‑ericson** | Device: u |
| **iphone** (standalone) | Device: standalone entry |

*Breakpoints list their width values; device rows list the available sub‑devices.*