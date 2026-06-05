# utility classes
*Last updated: 2026-06-05*
this file explains the css utility‑class helpers that lumina sass provides.

## how to enable

import the library or the utils module in your main sass file:

```sass
@use 'lumina-sass'
// or
@use 'lumina-sass/utils'
```

## flexbox classes

these classes give consistent layout behavior.

### base flex classes

| class | description |
| :--- | :--- |
| `.flex` | sets `display: flex`. |
| `.inline-flex` | sets `display: inline-flex`. |
| `.flex-center` | centers content horizontally and vertically. |

### directional classes

| class | description |
| :--- | :--- |
| `.flex-row` | standard row layout. |
| `.flex-col` | standard column layout. |
| `.flex-wrap-row` | row layout with wrapping. |
| `.flex-wrap-col` | column layout with wrapping. |
| `.flex-wrap-reversed-row` | reversed row layout with wrapping. |
| `.flex-wrap-reversed-col` | reversed column layout with wrapping. |

### alignment & justification

#### row patterns
- `.flex-row-justify-center`
- `.flex-row-align-center`
- `.flex-row-justify-space-between`
- `.flex-row-align-flex-end-justify-center`
- `.flex-row-reversed-align-center-justify-center`
- `.flex-row-align-center-justify-space-between`
- `.flex-row-reversed-align-center-justify-space-around`
- `.flex-row-reversed-align-center-justify-space-between`
- `.flex-row-reversed-align-center-justify-space-evenly`

#### column patterns
- `.flex-col-justify-center`
- `.flex-col-align-end`
- `.flex-col-align-center`
- `.flex-col-justify-space-evenly`
- `.flex-col-align-center-justify-center`
- `.flex-col-justify-space-evenly-align-center`

#### wrap patterns
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

## example usage

```html
<!-- a centered row of items -->
<div class="flex-center flex-row">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
</div>

<!-- a wrapped row with alignment -->
<div class="flex-wrap-row-align-center-justify-space-evenly">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
```
