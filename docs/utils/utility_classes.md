# Utility Classes
*Last updated: 2026-06-10*

This document provides a comprehensive overview of the CSS utility class helpers facilitated by Lumina Sass.

## Enabling Utility Classes

To utilize these helpers, import the main library or the specific utility module into your primary Sass file:

```sass
@use 'lumina-sass'
// Alternatively
@use 'lumina-sass/utils'
```

## Flexbox Classes

These utility classes provide consistent layout behavior across the application.

### Base Flexbox Utilities

| Class | Description |
| :--- | :--- |
| `.flex` | Configures `display: flex`. |
| `.inline-flex` | Configures `display: inline-flex`. |
| `.flex-center` | Aligns content horizontally and vertically within the container. |
| `.flex-items-center` | Aligns flex container items to the center. |

### Directional Utilities

| Class | Description |
| :--- | :--- |
| `.flex-row` | Standard horizontal layout. |
| `.flex-col` | Standard vertical layout. |
| `.flex-wrap-row` | Horizontal layout with wrapping enabled. |
| `.flex-wrap-col` | Vertical layout with wrapping enabled. |
| `.flex-wrap-reversed-row` | Reversed horizontal layout with wrapping enabled. |
| `.flex-wrap-reversed-col` | Reversed vertical layout with wrapping enabled. |

### Alignment and Justification

#### Horizontal Patterns
- `.flex-row-justify-center`
- `.flex-row-align-center`
- `.flex-row-justify-space-between`
- `.flex-row-align-flex-end-justify-center`
- `.flex-row-reversed-align-center-justify-center`
- `.flex-row-align-center-justify-space-between`
- `.flex-row-reversed-align-center-justify-space-around`
- `.flex-row-reversed-align-center-justify-space-between`
- `.flex-row-reversed-align-center-justify-space-evenly`

#### Vertical Patterns
- `.flex-col-justify-center`
- `.flex-col-align-end`
- `.flex-col-align-center`
- `.flex-col-justify-space-evenly`
- `.flex-col-align-center-justify-center`
- `.flex-col-justify-space-evenly-align-center`

#### Wrapped Patterns
- `.flex-wrap-row-justify-center`
- `.flex-wrap-row-justify-flex-end`
- `.flex-wrap-row-align-end`
- `.flex-wrap-row-justify-flex-start`
- `.flex-wrap-row-align-center`
- `.flex-wrap-row-justify-space-evenly`
- `.flex-wrap-row-justify-space-around`
- `.flex-wrap-row-justify-space-between`
- `.flex-wrap-col-align-content-center`
- `.flex-wrap-row-align-center-justify-center`
- `.flex-wrap-col-align-center-justify-space-evenly`
- `.flex-wrap-row-align-end-justify-space-evenly`
- `.flex-wrap-row-align-end-justify-space-between`
- `.flex-wrap-row-align-center-justify-space-around`
- `.flex-wrap-row-align-center-justify-space-evenly`
- `.flex-wrap-row-align-center-justify-space-between`
- `.flex-wrap-row-align-content-start-justify-space-evenly`

## Implementation Example

```html
<!-- A centered horizontal arrangement of elements -->
<div class="flex-center flex-row">
  <div class="item">Element 1</div>
  <div class="item">Element 2</div>
</div>

<!-- A wrapped horizontal layout featuring alignment and justification -->
<div class="flex-wrap-row-align-center-justify-space-evenly">
  <div class="card">Component 1</div>
  <div class="card">Component 2</div>
  <div class="card">Component 3</div>
</div>
```
