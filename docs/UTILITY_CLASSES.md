# Utility Classes

Lumina SASS includes CSS utility classes that are automatically included when you import the library. These classes allow you to style elements directly in your HTML.

## How to Enable

Import the library or the utils module in your main SASS file:

```sass
@use 'lumina-sass'
// OR
@use 'lumina-sass/utils'
```

## Flexbox Classes

These classes provide consistent layout behavior.

### Base Flex Classes
| Class | Description |
| :--- | :--- |
| `.flex` | Sets `display: flex`. |
| `.inline-flex` | Sets `display: inline-flex`. |
| `.flex-center` | Centers content horizontally and vertically. |

### Directional Classes
| Class | Description |
| :--- | :--- |
| `.flex-row` | Standard row layout. |
| `.flex-col` | Standard column layout. |
| `.flex-wrap-row` | Row layout with wrapping. |
| `.flex-wrap-col` | Column layout with wrapping. |
| `.flex-wrap-reversed-row` | Reversed row layout with wrapping. |
| `.flex-wrap-reversed-col` | Reversed column layout with wrapping. |

### Alignment & Justification
These classes combine direction, alignment, and justification for common patterns.

#### Row Patterns
- `.flex-row-justify-center`
- `.flex-row-align-center`
- `.flex-row-justify-space-between`
- `.flex-row-align-flex-end-justify-center`
- `.flex-row-reversed-align-center-justify-center`
- `.flex-row-align-center-justify-space-between`
- `.flex-row-reversed-align-center-justify-space-around`
- `.flex-row-reversed-align-center-justify-space-between`
- `.flex-row-reversed-align-center-justify-space-evenly`

#### Column Patterns
- `.flex-col-justify-center`
- `.flex-col-align-end`
- `.flex-col-align-center`
- `.flex-col-justify-space-evenly`
- `.flex-col-align-center-justify-center`
- `.flex-col-justify-space-evenly-align-center`

#### Wrap Patterns
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

## Example Usage

```html
<!-- A centered row of items -->
<div class="flex-center flex-row">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
</div>

<!-- A pre-configured wrapped row with alignment -->
<div class="flex-wrap-row-align-center-justify-space-evenly">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
```
