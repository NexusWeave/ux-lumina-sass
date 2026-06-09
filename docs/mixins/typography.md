# Typography
*Last updated: 2026-06-09*

This file explains the typography mixins provided by Lumina SASS, and documents how figure captions are styled.

## Mixins

- `text-wrap-safe()` – enables hyphenation and safe line‑wrapping for block‑level text.
- `font-style($font, $family: null, $line-height: null, $variant: null)` – sets the `font-family` using a preferred font and optional fallback.
- `font($font: null, $size: 1rem, $family: null, $style: null, $weight: null, $line-height: null, $variant: null)` – shortcut for setting typography properties.
- `sans-serif($font: null, $size: 1rem, $weight: null, $style: null)` – applies a sans-serif font. If no font is provided, defaults to the configuration's full sans-serif font stack.
- `serif($font: null, $size: 1rem, $weight: null, $style: null)` – applies a serif font. If no font is provided, defaults to the configuration's full serif font stack.
- `monospace($font: null, $size: 1rem, $weight: null, $style: null)` – applies a monospace font. If no font is provided, defaults to the configuration's full monospace font stack.

## Font Fallback and Warning Behavior

If a specified `$font` name is not found within the configuration maps (under `src/map/_fonts.sass`), the system automatically does the following:

1. **Emits a Warning:** Prints a Sass compiler warning (`@warn`) indicating that the font was not found and which fallback stack was applied.
2. **Pairs with System Font Stack:** Assigns the default system font stack fallback as the generic family fallback:
   `'Nunito', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`

*Note: You can override this fallback family for unknown fonts by explicitly passing the `$family` parameter (e.g., `@include font('MyCustomFont', $family: serif)`).*

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

// apply custom font size and weight with automatic system fallback
@include font('Roboto', 1.2rem, $weight: 600);

// style a figcaption directly
figcaption {
  @include font($size: 1rem, $style: italic);
}
```

