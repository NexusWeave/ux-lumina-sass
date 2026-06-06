# Typography
*Last updated: 2026-06-06*

This file explains the typography mixins provided by Lumina SASS, and documents how figure captions are styled.

## Mixins

- `text-wrap-safe()` – enables hyphenation and safe line‑wrapping for block‑level text.
- `font-style($font, $family: null)` – sets the `font-family` using a preferred font and optional fallback.
- `font($size: null, $weight: null, $font: null, $family: null, $style: null)` – shortcut for setting `font-size`, `font-weight`, `font-family`, and `font-style`.

### Figure caption styling
The `figcaption` element is now styled via the `font` mixin in `src/mix/_media.sass`. When a size is provided to the `figure-and-image` mixin, it automatically applies:

```scss
figcaption {
  @include typo.font($size, $style);
}
```

This ensures captions inherit consistent typography based on the mixin parameters.

## Usage example

```scss
// enable safe wrapping for text elements
@include text-wrap-safe();

// apply custom font size and weight
@include font(1.2rem, 600, 'Roboto');

// figure caption styling via figure-and-image mixin
@include figure-and-image($size: 1rem, $style: italic);
```

