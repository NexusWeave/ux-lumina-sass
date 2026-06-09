# Typography
*Last updated: 2026-06-06*

This file explains the typography mixins provided by Lumina SASS, and documents how figure captions are styled.

## Mixins

- `text-wrap-safe()` – enables hyphenation and safe line‑wrapping for block‑level text.
- `font-style($font, $family: null)` – sets the `font-family` using a preferred font and optional fallback.
- `font($size: null, $weight: null, $font: null, $family: null, $style: null)` – shortcut for setting `font-size`, `font-weight`, `font-family`, and `font-style`.

### Figure caption styling
The `figcaption` element can be styled directly using the `font` mixin:

```scss
figcaption {
  @include typo.font($size: 1rem, $style: italic);
}
```

This ensures captions inherit consistent typography.

## Usage example

```scss
// enable safe wrapping for text elements
@include text-wrap-safe();

// apply custom font size and weight
@include font(1.2rem, 600, 'Roboto');

// style a figcaption directly
figcaption {
  @include font($size: 1rem, $style: italic);
}
```
```

