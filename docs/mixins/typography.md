# Typography
*Last updated: 2026-06-09*

This document details the typography mixins provided by Lumina SASS and outlines the styling conventions for figure captions.

## Mixins

- `text-wrap-safe($inline: 0)` – Enables hyphenation and secure line-wrapping for block-level textual content.
- `font-style($font, $family: null, $line-height: null, $variant: null)` – Configures the `font-family` utilizing a preferred typeface and an optional fallback specification.
- `font($font: null, $size: 1rem, $family: null, $style: null, $weight: null, $line-height: null, $variant: null)` – A comprehensive shorthand for defining various typography properties.
- `sans-serif($font: null, $size: 1rem, $weight: null, $style: null)` – Applies a sans-serif typeface. In the absence of a specific font argument, it defaults to the pre-configured sans-serif font stack.
- `serif($font: null, $size: 1rem, $weight: null, $style: null)` – Applies a serif typeface. If no font is specified, it defaults to the pre-configured serif font stack.
- `monospace($font: null, $size: 1rem, $weight: null, $style: null)` – Applies a monospace typeface. In the absence of a specific font argument, it defaults to the pre-configured monospace font stack.

## Font Fallback and Warning Protocols

If a specified `$font` identifier is not found within the configuration maps (located in `src/map/_fonts.sass`), or if the `$font` argument is omitted, the system automatically executes the following procedures:

1. **Emission of a Compiler Warning:** For unrecognized fonts, a Sass `@warn` is triggered, indicating the discrepancy and specifying the fallback stack applied. (Omission of the argument bypasses this warning).
2. **Application of the System Font Stack:** The default system font stack is assigned as the generic family fallback:
   `'Nunito', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`

*Note: You may override the fallback family for unrecognized fonts by explicitly providing the `$family` parameter (e.g., `@include font('MyCustomFont', $family: serif)`).*

### Figure Caption Styling
The `figcaption` element can be styled directly utilizing the `font` mixin:

```scss
figcaption {
  @include typo.font($size: 1rem, $style: italic);
}
```

This implementation ensures that captions maintain consistent typography throughout the application.

## Implementation Example

```scss
// Enable secure wrapping for textual elements
@include text-wrap-safe();

// Apply a specific font size and weight with automatic system fallback
@include font('Roboto', 1.2rem, $weight: 600);

// Style a figcaption element directly
figcaption {
  @include font($size: 1rem, $style: italic);
}
```
