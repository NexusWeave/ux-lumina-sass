# Utility Classes

Lumina SASS provides a set of pre-made CSS utility classes that are automatically injected into your CSS when you import the library. These classes allow you to apply styles directly in your HTML without writing additional SASS.

## How to Enable

To use these classes, simply import the library or the utils module in your main SASS file:

```sass
@use 'lumina-sass'
// OR
@use 'lumina-sass/utils'
```

## Flexbox Classes

These classes provide consistent layout behavior by leveraging internal flexbox generators.

### Base Flex Classes
| Class | Description |
| :--- | :--- |
| `.flex` | Sets `display: flex`. |
| `.flex-inline` | Sets `display: inline-flex`. |
| `.inline-flex` | Sets `display: inline-flex`. |
| `.inline-flex-center` | Inline flexbox with centered content. |
| `.flex-center` | Centers content both horizontally and vertically. |

### Directional Classes
| Class | Description |
| :--- | :--- |
| `.flex-row` | Standard row layout. |
| `.inline-flex-row` | Inline row layout. |
| `.flex-col` | Standard column layout. |
| `.inline-flex-col` | Inline column layout. |
| `.flex-wrap-row` | Row layout with wrapping enabled. |
| `.flex-wrap-col` | Column layout with wrapping enabled. |
| `.flex-wrap-reversed-row` | Reversed row layout with wrapping. |
| `.flex-wrap-reversed-col` | Reversed column layout with wrapping. |

### Alignment & Justification (Pre-configured)
These classes combine direction, alignment, and justification for common layout patterns.

#### Row Patterns
- `.flex-row-justify-center`
- `.flex-row-align-items-center`
- `.flex-row-justify-space-between`
- `.flex-row-align-items-flex-end-justify-center`
- `.flex-row-reversed-justify-center-align-content-center`
- `.flex-row-align-items-center-justify-content-space-between`
- `.flex-row-reversed-justify-space-around-align-content-center`
- `.flex-row-reversed-justify-space-between-align-content-center`
- `.flex-row-reversed-justify-space-evenly-align-content-center`

#### Column Patterns
- `.flex-col-justify-center`
- `.flex-col-align-items-end`
- `.flex-col-align-center`
- `.flex-col-justify-space-evenly`
- `.flex-col-align-center-justify-center`
- `.flex-col-justify-space-evenly-items-center`

#### Wrap Patterns
- `.flex-wrap-row-justify-center`
- `.flex-wrap-row-justify-flex-end`
- `.flex-wrap-row-align-items-end`
- `.flex-wrap-row-justify-flex-start`
- `.flex-wrap-row-align-items-center`
- `.flex-wrap-row-justify-space-evenly`
- `.flex-wrap-row-justify-space-around`
- `.flex-wrap-row-justify-space-between`
- `.flex-wrap-col-align-content-center`
- `.flex-wrap-row-align-items-center-justify-center`
- `.flex-wrap-col-align-center-justify-space-evenly`
- `.flex-wrap-row-align-items-end-justify-space-evenly`
- `.flex-wrap-row-align-items-end-justify-space-between`
- `.flex-wrap-row-align-items-center-justify-space-around`
- `.flex-wrap-row-align-items-center-justify-space-evenly`
- `.flex-wrap-row-align-items-center-justify-space-between`
- `.flex-wrap-row-align-content-start-justify-space-evenly`

## Example Usage

```html
<!-- A centered row of items -->
<div class="flex-center flex-row">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
</div>

<!-- A pre-configured wrapped row with specific alignment -->
<div class="flex-wrap-row-align-items-center-justify-space-evenly">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
```
