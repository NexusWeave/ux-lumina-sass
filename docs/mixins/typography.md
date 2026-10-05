# Typography
*Last updated: 2026-09-29*

This document details the typography mixins provided by Lumina SASS and outlines styling conventions for text, code, and figure captions.

## Mixins

| Mixin | Parameters | Description |
| :--- | :--- | :--- |
| `text-wrap-safe` | `$inline: null` | Enables hyphenation and secure line-wrapping for block-level text content, utilizing `size.min-size($inline)` when `$inline` is provided. |
| `font` | `$font: null`<br>`$size: null`<br>`$family: null`<br>`$style: null`<br>`$weight: null`<br>`$line-height: null`<br>`$variant: null`<br>`$render: null`<br>`$moz-smoothing: null`<br>`$webkit-smoothing: null`<br>`$quiet: false` | Comprehensive shorthand defining font styling, rendering quality, and font-smoothing options. Falls back to default system stack if `$font` is omitted. |
| `sans-serif` | `$font: null`<br>`$size: null`<br>`$weight: null`<br>`$style: null` | Applies a sans-serif typeface stack with configurable size, weight, and style. |
| `serif` | `$font: null`<br>`$size: null`<br>`$weight: null`<br>`$style: null` | Applies a serif typeface stack. |
| `monospace` | `$font: null`<br>`$size: null`<br>`$weight: null`<br>`$style: null` | Applies a monospace typeface stack. |
| `webkit-line-clamp` | `$lines: 3`<br>`$box-orient: vertical` | Restricts text to a specified line count via `-webkit-line-clamp` and appends an ellipsis. |
| `line-clamp` | `$lines: 3`<br>`$box-orient: vertical` | Shorthand alias to `webkit-line-clamp`. |
| `text-adjustments` | `$alignment: null`<br>`$decoration: null`<br>`$quiet: false` | Quick adjustments for text alignment and text decoration. |

## Font Fallback and Warning Protocols

If a specified `$font` identifier is not found within the configuration maps (located in `src/map/_fonts.sass`), or if the `$font` argument is omitted, the system automatically executes the following procedures:

1. **Emission of a Compiler Warning:** For unrecognized fonts, a Sass `@warn` is triggered, indicating the discrepancy and specifying the fallback stack applied. (Omission of the argument bypasses this warning).
2. **Application of the System Font Stack:** The default system font stack is assigned as the generic family fallback:
   `'Nunito', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`

*Note: You may override the fallback family for unrecognized fonts by explicitly providing the `$family` parameter (e.g., `@include font('MyCustomFont', $family: serif)`).*

### Figure Caption Styling
The `figcaption` element can be styled directly utilizing the `font` mixin:

```sass
@use 'lumina-sass/mix' as typo

figcaption
  @include typo.font($size: 1rem, $style: italic)
```

This implementation ensures that captions maintain consistent typography throughout the application.

## Implementation Examples

### Font Smoothing and Quality Rendering

```sass
@use 'lumina-sass/mix' as typo

h1.hero-title
  @include typo.font($font: 'Inter', $size: 2.5rem, $weight: 700, $render: optimizeLegibility, $webkit-smoothing: antialiased, $moz-smoothing: grayscale)
```

### Multi-Line Text Truncation

```sass
@use 'lumina-sass/mix' as typo

.card-summary
  @include typo.webkit-line-clamp($lines: 2)
  max-inline-size: 24rem
```

### Text Wrapping and Typeface Stacks

```sass
@use 'lumina-sass/mix' as typo

// Enable secure wrapping for all common text tags
@include typo.text-wrap-safe($inline: 15rem)

// Monospace code block
pre, code
  @include typo.monospace($weight: 500)
```
