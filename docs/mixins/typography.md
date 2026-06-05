# typography
*Last updated: 2026-06-05*
this file explains the typography mixins provided by lumina sass.

## mixins

- `text-wrap-safe()` – enables hyphenation and safe line‑wrapping for block‑level text.
- `font-style($font, $family: null)` – sets the `font‑family` using a preferred font and optional fallback.
- `font($size: null, $weight: null, $font: null, $family: null, $style: null)` – shortcut for setting `font‑size`, `font‑weight`, `font‑family`, and `font‑style`.

## usage example

```scss
// enable safe wrapping for text elements
@include text-wrap-safe();

// apply custom font size and weight
@include font(1.2rem, 600, 'Roboto');
```
