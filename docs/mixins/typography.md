# Typography
*Last updated: 2026-06-11*

This document details the typography mixins provided by Lumina SASS and outlines the styling conventions for figure captions.

## Mixins

- `text-wrap-safe($inline: 0)` – Enables hyphenation and secure line-wrapping for block-level textual content.
- `font($font: null, $size: 1rem, $family: null, $style: null, $weight: null, $line-height: null, $variant: null, $quiet: false)` – A comprehensive shorthand for defining various typography properties. If `$font` is not found, it defaults to a system stack.
- `sans-serif($font: null, $size: 1rem, $weight: null, $style: null)` – Applies a sans-serif typeface.
- `serif($font: null, $size: 1rem, $weight: null, $style: null)` – Applies a serif typeface.
- `monospace($font: null, $size: 1rem, $weight: null, $style: null)` – Applies a monospace typeface.
- `line-clamp($lines: 3)` – Restricts text to a specified number of lines, appending an ellipsis if necessary.
- `text-adjustments($alignment: null, $decoration: null, $quiet: false)` – Provides quick adjustments for text alignment and decoration.

## Font Fallback and Warning Protocols

If a specified `$font` identifier is not found within the configuration maps (located in `src/map/_fonts.sass`), or if the `$font` argument is omitted, the system automatically executes the following procedures:

1. **Emission of a Compiler Warning:** For unrecognized fonts, a Sass `@warn` is triggered, indicating the discrepancy and specifying the fallback stack applied. (Omission of the argument bypasses this warning).
2. **Application of the System Font Stack:** The default system font stack is assigned as the generic family fallback:
   `'Nunito', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`

*Note: You may override the fallback family for unrecognized fonts by explicitly providing the `$family` parameter (e.g., `@include font('MyCustomFont', $family: serif)`).*

### Figure Caption Styling
The `figcaption` element can be styled directly utilizing the `font` mixin:

```sass
@use 'lumina-sass/mix' as typo;

figcaption {
  @include typo.font($size: 1rem, $style: italic);
}
```

This implementation ensures that captions maintain consistent typography throughout the application.

## Implementation Example

```sass
@use 'lumina-sass/mix' as *;

// Enable secure wrapping for textual elements
@include text-wrap-safe();

// Apply a specific font size and weight with automatic system fallback
@include font('Roboto', 1.2rem, $weight: 600);

// Style a figcaption element directly
figcaption {
  @include font($size: 1rem, $style: italic);
}

// Restrict text to 2 lines
.excerpt {
  @include line-clamp(2);
}

// Apply text adjustments
.centered-link {
  @include text-adjustments($alignment: center, $decoration: underline);
}
```
