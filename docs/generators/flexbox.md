# Flexbox
*Last updated: 2026-06-05*
This document describes the **flexbox-generator** mixin and the flexbox utility map.

## Mixins

- `flexbox-generator($name)`
  - Looks up `$name` in the `$flexbox` map defined in `src/map/flexbox`.
  - Generates a set of CSS properties (e.g. `display: flex; flex-direction: column;`) for the requested layout.
  - Throws an error if the key is not present.

## Flexbox map definitions

## Flexbox map definitions

The flexbox map defines utility maps used by the `flexbox-generator` mixin. Each entry maps a key to a set of CSS properties and corresponds to a generated utility class.

| Map variable | CSS properties | Primary class | Additional classes |
|--------------|----------------|---------------|--------------------|
| `$flex` | `display: flex;` | `.flex` | |
| `$inline-flex` | `display: inline-flex;` | `.inline-flex` | |
| `$flex-row` | `display: flex; flex-wrap: nowrap; flex-direction: row;` | `.flex-row` | `.flex-row-items-center, .flex-row-justify-between, .flex-row-items-flex-end-justify-center, .flex-row-items-center-justify-content-space-between, .flex-row-justify-center, .flex-row-items-center` |
| `$flex-row-wrap` | `display: flex; flex-wrap: wrap; flex-direction: row;` | `.flex-row-wrap` | |
| `$flex-col` | `display: flex; flex-wrap: nowrap; flex-direction: column;` | `.flex-col` | `.flex-col-items-center, .flex-col-justify-center, .flex-col-justify-space-evenly, .flex-col-items-end, .flex-col-align-items-center, .flex-col-justify-evenly-items-center, .flex-col-items-center-justify-center` |
| `$flex-col-wrap` | `display: flex; flex-wrap: wrap; flex-direction: column;` | `.flex-col-wrap` | `.flex-wrap-col-content-center, .flex-wrap-col-content-center-justify-evenly, .flex-wrap-col-ontent-center` |
| `$flex-center` | `display: flex; justify-content: center; align-items: center;` | `.flex-center` | |
| `$inline-flex-row` | `display: inline-flex; flex-wrap: nowrap; flex-direction: row;` | `.inline-flex-row` | `.flex-inline-flex-row` |
| `$inline-flex-col` | `display: inline-flex; flex-wrap: nowrap; flex-direction: column;` | `.inline-flex-col` | |
| `$flex-wrap-reversed-row` | `display: flex; flex-wrap: wrap; flex-direction: row-reverse;` | `.flex-wrap-reversed-row` | `.flex-row-reversed-justify-center-content-center, .flex-row-reversed-justify-around-content-center, .flex-row-reversed-justify-between-content-center, .flex-row-reversed-justify-evenly-content-center` |
| `$flex-wrap-reversed-col` | `display: flex; flex-wrap: wrap; flex-direction: column-reverse;` | `.flex-wrap-reversed-col` | |
| `$flex-col-align-center-justify-center` | `display: flex; flex-direction: column; justify-content: center; align-items: center;` | `.flex-col-align-center-justify-center` | |
| `$flex-row-align-center-justify-center` | `display: flex; flex-direction: row; justify-content: center; align-items: center;` | `.flex-row-align-center-justify-center` | |

