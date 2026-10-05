# Utility Classes
*Last updated: 2026-06-15*

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

### Atomic Flexbox Utilities (New)

For maximum flexibility, use these atomic classes to build custom layouts.

| Property Group | Class Pattern | Example |
| :--- | :--- | :--- |
| **Justify Content** | `.justify-{value}` | `.justify-between` |
| **Align Items** | `.items-{value}` | `.items-center` |
| **Flex Direction** | `.dir-{value}` | `.dir-col-reverse` |
| **Align Self** | `.self-{value}` | `.self-end` |
| **Align Content** | `.content-{value}` | `.content-around` |
| **Flex Wrap** | `.wrap-{value}` | `.wrap-nowrap` |

### Base Flexbox Utilities

| Class | Description |
| :--- | :--- |
| `.flex` | Configures `display: flex`. |
| `.inline-flex` | Configures `display: inline-flex`. |
| `.flex-center` | Aligns content horizontally and vertically within the container. |
| `.flex-items-center` | Aligns flex container items to the center. |

### Directional Utilities (Composite Shortcuts)

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

| Utility Class | Layout Behavior |
| :--- | :--- |
| `.flex-row-justify-center` | Horizontal row centered along main axis |
| `.flex-row-align-center` | Horizontal row centered along cross axis |
| `.flex-row-justify-space-between` | Horizontal row with space-between justification |
| `.flex-row-align-flex-end-justify-center` | Horizontal row aligned to flex-end and centered |
| `.flex-row-reversed-align-center-justify-center` | Reversed horizontal row centered horizontally and vertically |
| `.flex-row-align-center-justify-space-between` | Horizontal row centered vertically with space-between |
| `.flex-row-reversed-align-center-justify-space-around` | Reversed horizontal row with space-around justification |
| `.flex-row-reversed-align-center-justify-space-between` | Reversed horizontal row with space-between justification |
| `.flex-row-reversed-align-center-justify-space-evenly` | Reversed horizontal row with space-evenly justification |

#### Vertical Patterns

| Utility Class | Layout Behavior |
| :--- | :--- |
| `.flex-col-justify-center` | Vertical column centered along main axis |
| `.flex-col-align-end` | Vertical column aligned to flex-end cross axis |
| `.flex-col-align-center` | Vertical column centered along cross axis |
| `.flex-col-justify-space-evenly` | Vertical column spaced evenly along main axis |
| `.flex-col-align-center-justify-center` | Vertical column centered both horizontally and vertically |
| `.flex-col-justify-space-evenly-align-center` | Vertical column spaced evenly with centered alignment |

#### Wrapped Patterns

| Utility Class | Layout Behavior |
| :--- | :--- |
| `.flex-wrap-row-justify-center` | Wrapping horizontal row centered along main axis |
| `.flex-wrap-row-justify-flex-end` | Wrapping horizontal row justified to flex-end |
| `.flex-wrap-row-align-end` | Wrapping horizontal row aligned to flex-end |
| `.flex-wrap-row-justify-flex-start` | Wrapping horizontal row justified to flex-start |
| `.flex-wrap-row-align-center` | Wrapping horizontal row centered vertically |
| `.flex-wrap-row-justify-space-evenly` | Wrapping horizontal row spaced evenly |
| `.flex-wrap-row-justify-space-around` | Wrapping horizontal row with space-around |
| `.flex-wrap-row-justify-space-between` | Wrapping horizontal row with space-between |
| `.flex-wrap-col-align-content-center` | Wrapping vertical column with centered content |
| `.flex-wrap-row-align-center-justify-center` | Wrapping horizontal row centered horizontally and vertically |
| `.flex-wrap-col-align-center-justify-space-evenly` | Wrapping vertical column spaced evenly with centered items |
| `.flex-wrap-row-align-end-justify-space-evenly` | Wrapping horizontal row aligned to end and spaced evenly |
| `.flex-wrap-row-align-end-justify-space-between` | Wrapping horizontal row aligned to end with space-between |
| `.flex-wrap-row-align-center-justify-space-around` | Wrapping horizontal row centered with space-around |
| `.flex-wrap-row-align-center-justify-space-evenly` | Wrapping horizontal row centered with space-evenly |
| `.flex-wrap-row-align-center-justify-space-between` | Wrapping horizontal row centered with space-between |
| `.flex-wrap-row-align-content-start-justify-space-evenly` | Wrapping horizontal row aligned to content-start and spaced evenly |

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
