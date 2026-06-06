# Flexbox
*Last updated: 2026-06-05*
This document describes the **flexbox-generator** mixin and the flexbox utility map.

## Mixins

- `flexbox-generator($name)`
  - Looks up `$name` in the `$flexbox` map defined in `src/map/flexbox`.
  - Generates a set of CSS properties (e.g. `display: flex; flex-direction: column;`) for the requested layout.
  - Throws an error if the key is not present.

## Flexbox map definitions

The flexbox map defines utility maps used by the `flexbox-generator` mixin. Each entry maps a key to a set of CSS properties and corresponds to a generated utility class.

| Map variable | CSS properties | Primary class | Additional classes |
|--------------|----------------|---------------|--------------------|
| `$flex` | `display: flex;` | `.flex` | |
| `$inline-flex` | `display: inline-flex;` | `.inline-flex` | |
| `$flex-row` | `display: flex; flex-wrap: nowrap; flex-direction: row;` | `.flex-row` | `.flex-row-items-center, .flex-row-justify-between, .flex-row-items-flex-end-justify-center, .flex-row-items-center-justify-content-space-between, .flex-row-justify-center, .flex-row-items-center` |
| `$flex-row-wrap` | `display: flex; flex-wrap: wrap; flex-direction: row;` | `.flex-row-wrap` | |
| `$flex-col` | `display: flex; flex-wrap: nowrap; flex-direction: column;` | `.flex-col` | `.flex-col-items-center, .flex-col-justify-center, .flex-col-justify-space-evenly, .flex-col-items-end, .flex-col-align-items-center, .flex-col-justify-evenly-items-center, .flex-col-items-center-justify-center` |
| `$flex-col-wrap` | `display: flex; flex-wrap: wrap; flex-direction: column;` | `.flex-col-wrap` | Column layout with wrapping. | `.flex-wrap-col-content-center, .flex-wrap-col-content-center-justify-evenly, .flex-wrap-col-content-center` |
| `$flex-center` | `display: flex; justify-content: center; align-items: center;` | `.flex-center` | |
| `$inline-flex-row` | `display: inline-flex; flex-wrap: nowrap; flex-direction: row;` | `.inline-flex-row` | `.flex-inline-flex-row` |
| `$inline-flex-col` | `display: inline-flex; flex-wrap: nowrap; flex-direction: column;` | `.inline-flex-col` | |
| `$flex-wrap-reversed-row` | `display: flex; flex-wrap: wrap; flex-direction: row-reverse;` | `.flex-wrap-reversed-row` | `.flex-row-reversed-justify-center-content-center, .flex-row-reversed-justify-around-content-center, .flex-row-reversed-justify-between-content-center, .flex-row-reversed-justify-evenly-content-center` |
| `$flex-wrap-reversed-col` | `display: flex; flex-wrap: wrap; flex-direction: column-reverse;` | `.flex-wrap-reversed-col` | |
| `$flex-col-align-center-justify-center` | `display: flex; flex-direction: column; justify-content: center; align-items: center;` | `.flex-col-align-center-justify-center` | |
| `$flex-row-align-center-justify-center` | `display: flex; flex-direction: row; justify-content: center; align-items: center;` | `.flex-row-align-center-justify-center` | |


# Flexbox Utility Classes

> **Last updated:** 2026-06-06

This document lists **all** Flexbox utility classes provided by the Lumina‑Sass library. The list is generated directly from the Sass source files in `src/flexbox/` and the helper file `src/utils/_flexbox.sass`, ensuring the documentation stays in sync with the implementation.

---

## Base utilities

| Class | Description |
| :--- | :--- |
| `.flex` | Sets `display: flex`. |
| `.inline-flex` | Sets `display: inline-flex`. |
| `.flex-center` | Centers content both horizontally and vertically (uses `align-items: center; justify-content: center`). |

---

## Row utilities

| Class | Description |
| :--- | :--- |
| `.flex-row` | Standard row layout (`flex-direction: row`). |
| `.flex-row-wrap` | Row layout with wrapping (`flex-wrap: wrap`). |
| `.flex-row-items-center` | Row layout with `align-items: center`. |
| `.flex-row-justify-center` | Row layout with `justify-content: center`. |
| `.flex-row-justify-between` | Row layout with `justify-content: space-between`. |
| `.flex-row-items-flex-end-justify-center` | Row layout with `align-items: flex-end; justify-content: center`. |
| .flex-row-items-center-justify-content-between | Row layout with `align-items` and `justify-content` set to `space-between`. |
| .flex-row-items-center-justify-center | Row layout with both `align-items` and `justify-content` set to `center`. |
| .flex-inline-flex-row | Inline flex row layout (`display: inline-flex; flex-direction: row`). |
| .flex-inline-items-justify-center | Inline flex with centered items and justified content. |

---

## Column utilities

| Class | Description |
| :--- | :--- |
| `.flex-col` | Standard column layout (`flex-direction: column`). |
| `.flex-col-wrap` | Column layout with wrapping. |
| `.flex-col-items-center` | Column layout with `align-items: center`. |
| `.flex-col-justify-center` | Column layout with `justify-content: center`. |
| `.flex-col-justify-space-evenly` | Column layout with `justify-content: space-evenly`. |
| `.flex-col-items-end` | Column layout with `align-items: flex-end`. |
| `.flex-col-align-items-center` | Column layout with `align-items: center` (from mix). |
| `.flex-col-justify-evenly-items-center` | Column layout with `justify-content: space-evenly` and `align-items: center`. |
| `.flex-col-items-center-justify-center` | Column layout with both `align-items` and `justify-content` set to `center`. |
| `.flex-wrap-col-content-center` | Wrapped column layout with `align-content: center`. |
| `.flex-wrap-col-content-center-justify-evenly` | Wrapped column layout with `align-content: center` and `justify-content: space-evenly`. |
| `.flex-col-wrap` | Column layout with wrapping. |
| `.flex-col-items-center` | Column layout with `align-items: center`. |
| `.flex-col-justify-center` | Column layout with `justify-content: center`. |
| `.flex-col-justify-space-evenly` | Column layout with `justify-content: space-evenly`. |
| `.flex-col-items-end` | Column layout with `align-items: flex-end`. |
| `.flex-col-align-items-center` | Column layout with `align-items: center` (from mix). |
| `.flex-col-justify-evenly-items-center` | Column layout with `justify-content: space-evenly` and `align-items: center`. |
| `.flex-col-items-center-justify-center` | Column layout with both `align-items` and `justify-content` set to `center`. |

---

## Wrap‑row utilities

| Class | Description |
| :--- | :--- |
| `.flex-wrap-row-justify-center` | Wrapped row with `justify-content: center`. |
| `.flex-wrap-row-justify-end` | Wrapped row with `justify-content: flex-end`. |
| `.flex-wrap-row-justify-start` | Wrapped row with `justify-content: flex-start`. |
| `.flex-wrap-row-justify-evenly` | Wrapped row with `justify-content: space-evenly`. |
| `.flex-wrap-row-justify-between` | Wrapped row with `justify-content: space-between`. |
| `.flex-wrap-row-justify-around` | Wrapped row with `justify-content: space-around`. |
| `.flex-wrap-row-items-end` | Wrapped row with `align-items: flex-end`. |
| `.flex-wrap-row-items-center` | Wrapped row with `align-items: center`. |

---

## Reversed‑row utilities

| Class | Description |
| :--- | :--- |
| `.flex-row-reversed-content-center-justify-center` | Reversed row with `align-content: center; justify-content: center`. |
| `.flex-row-reversed-content-center-justify-around` | Reversed row with `align-content: center; justify-content: space-around`. |
| `.flex-row-reversed-content-center-justify-between` | Reversed row with `align-content: center; justify-content: space-between`. |
| `.flex-row-reversed-content-center-justify-evenly` | Reversed row with `align-content: center; justify-content: space-evenly`. |

---

## Row‑align/justify mix utilities (wrapped rows with alignment & justification)

| Class | Description |
| :--- | :--- |
| `.flex-wrap-row-items-start` | Wrapped row with `align-items: flex-start`. |
| `.flex-wrap-row-items-center-justify-center` | Wrapped row with `align-items: center; justify-content: center`. |
| `.flex-wrap-row-items-center-justify-evenly` | Wrapped row with `align-items: center; justify-content: space-evenly`. |
| `.flex-wrap-row-items-center-justify-around` | Wrapped row with `align-items: center; justify-content: space-around`. |
| `.flex-wrap-row-items-center-justify-between` | Wrapped row with `align-items: center; justify-content: space-between`. |
| `.flex-wrap-row-items-end-justify-between` | Wrapped row with `align-items: flex-end; justify-content: space-between`. |
| `.flex-wrap-row-items-end-justify-evenly` | Wrapped row with `align-items: flex-end; justify-content: space-evenly`. |
| `.flex-wrap-row-content-start-justify-evenly` | Wrapped row with `align-content: flex-start; justify-content: space-evenly`. |
| `.flex-wrap-row-content-center-justify-evenly` | Wrapped row with `align-content: center; justify-content: space-evenly`. |

---

## Example usage

```html
<!-- a centered row of items -->
<div class="flex-center flex-row">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
</div>

<!-- a wrapped row with alignment and justification -->
<div class="flex-wrap-row-items-center-justify-evenly">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
```

---

*This file is autogenerated from the Sass source. Keep it in sync by updating the Sass files; the documentation will be regenerated accordingly.*
