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

These classes use the internal flexbox generators to provide consistent layout behavior.

| Class | Description |
| :--- | :--- |
| `.flex` | Sets `display: flex`. |
| `.flex-inline` | Sets `display: inline-flex`. |
| `.flex-center` | Centers content both horizontally and vertically. |
| `.flex-row` | Sets `flex-direction: row`. |
| `.flex-column` | Sets `flex-direction: column`. |
| `.flex-wrap-row` | Sets `flex-direction: row` and `flex-wrap: wrap`. |
| `.flex-wrap-column` | Sets `flex-direction: column` and `flex-wrap: wrap`. |
| `.flex-wrap-reversed-row` | Sets `flex-direction: row-reverse` and `flex-wrap: wrap`. |
| `.flex-wrap-reversed-column` | Sets `flex-direction: column-reverse` and `flex-wrap: wrap`. |
| `.inline-flex-row` | Sets `display: inline-flex` and `flex-direction: row`. |
| `.inline-flex-column` | Sets `display: inline-flex` and `flex-direction: column`. |

## Example Usage

```html
<!-- A centered row of items -->
<div class="flex-center flex-row">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
</div>

<!-- A wrapped column layout -->
<div class="flex-wrap-column">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
</div>
```
