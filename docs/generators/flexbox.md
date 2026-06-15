# Flexbox Configuration
*Last updated: 2026-06-15*

This document provides a technical overview of the `gen-flexbox` mixin, the new atomic generator, and the corresponding flexbox utility maps.

## Flexbox Generator Mixins

### `gen-flexbox($name)`
Facilitates the generation of composite flexbox layout properties based on predefined configurations.

- **Parameter:** `$name`
  - This parameter corresponds to a key within the `$flexbox` map located in `src/map/flexbox`.
  - Retrieving associated CSS properties (e.g., `display: flex; flex-direction: column;`).

### `gen-flexbox-atomic($prefix, $property, $map)`
A high-efficiency generator for atomic utility classes. It iterates over a property map and outputs single-purpose classes.

- **Example Output:** `.justify-center { justify-content: center; }`

## Atomic Flexbox Utilities (New)

Lumina Sass now supports **Atomic Utilities**, allowing you to combine small, single-purpose classes to build any layout.

### Justify Content (`.justify-{value}`)
| Class | CSS Property |
| :--- | :--- |
| `.justify-start` | `justify-content: flex-start` |
| `.justify-end` | `justify-content: flex-end` |
| `.justify-center` | `justify-content: center` |
| `.justify-between` | `justify-content: space-between` |
| `.justify-around` | `justify-content: space-around` |
| `.justify-evenly` | `justify-content: space-evenly` |

### Align Items (`.items-{value}`)
| Class | CSS Property |
| :--- | :--- |
| `.items-start` | `align-items: flex-start` |
| `.items-end` | `align-items: flex-end` |
| `.items-center` | `align-items: center` |
| `.items-baseline` | `align-items: baseline` |
| `.items-stretch` | `align-items: stretch` |

### Flex Direction (`.dir-{value}`)
| Class | CSS Property |
| :--- | :--- |
| `.dir-row` | `flex-direction: row` |
| `.dir-row-reverse` | `flex-direction: row-reverse` |
| `.dir-col` | `flex-direction: column` |
| `.dir-col-reverse` | `flex-direction: column-reverse` |

*(Other atomic groups include `.content-{value}`, `.self-{value}`, and `.wrap-{value}`)*

## Flexbox Map Definitions (Composite Shortcuts)

The flexbox map contains the architectural definitions for the "shortcut" classes.

| Map variable | CSS properties | Primary class | Additional classes |
|--------------|----------------|---------------|--------------------|
| `$flex` | `display: flex;` | `.flex` | |
| `$inline-flex` | `display: inline-flex;` | `.inline-flex` | |
| `$flex-row` | `display: flex; flex-wrap: nowrap; flex-direction: row;` | `.flex-row` | `.flex-row-items-center, ...` |
| `$flex-col` | `display: flex; flex-wrap: nowrap; flex-direction: column;` | `.flex-col` | `.flex-col-items-center, ...` |

## Implementation Examples

### Using Atomic Utilities (Recommended for Flexibility)
```html
<!-- A complex layout built with atomic building blocks -->
<div class="flex dir-row items-center justify-between wrap-wrap">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Using Composite Shortcuts (Best for Common Layouts)
```html
<!-- A simple centered horizontal arrangement -->
<div class="flex-row-items-center-justify-center">
  <div>Centered Content</div>
</div>
```

---

*This document is automatically generated from the Sass source. To maintain synchronization, update the primary Sass files; the documentation will be updated as a consequence of those changes.*

## Flexbox Utility Classes

This section enumerates the comprehensive suite of flexbox utility classes provided by Lumina Sass. These classes are synchronized with the Sass source files in `src/flexbox/` and `src/utils/_flexbox.sass` to ensure architectural consistency.

## Base Utilities

| Class | Description |
| :--- | :--- |
| `.flex` | Configures `display: flex`. |
| `.inline-flex` | Configures `display: inline-flex`. |
| `.flex-center` | Aligns content both horizontally and vertically using `center` alignment and justification. |

## Row Utilities

| Class | Description |
| :--- | :--- |
| `.flex-row` | Standard horizontal layout using `flex-direction: row`. |
| `.flex-row-wrap` | Horizontal layout with wrapping enabled. |
| `.flex-row-items-center` | Horizontal layout with centered item alignment. |
| `.flex-row-justify-center` | Horizontal layout with centered content justification. |
| `.flex-row-justify-between` | Horizontal layout with `space-between` content justification. |
| `.flex-row-items-flex-end-justify-center` | Horizontal layout with items aligned to the end and centered justification. |
| `.flex-row-items-center-justify-content-between` | Horizontal layout featuring centered item alignment and `space-between` justification. |
| `.flex-row-items-center-justify-center` | Horizontal layout featuring both centered item alignment and justification. |
| `.flex-inline-flex-row` | Inline horizontal flex layout. |
| `.flex-inline-items-justify-center` | Inline flex layout with centered items and justification. |

## Column Utilities

| Class | Description |
| :--- | :--- |
| `.flex-col` | Standard vertical layout using `flex-direction: column`. |
| `.flex-col-wrap` | Vertical layout with wrapping enabled. |
| `.flex-col-items-center` | Vertical layout with centered item alignment. |
| `.flex-col-justify-center` | Vertical layout with centered content justification. |
| `.flex-col-justify-space-evenly` | Vertical layout with `space-evenly` content justification. |
| `.flex-col-items-end` | Vertical layout with items aligned to the end. |
| `.flex-col-align-items-center` | Vertical layout featuring centered item alignment. |
| `.flex-col-justify-evenly-items-center` | Vertical layout with `space-evenly` justification and centered item alignment. |
| `.flex-col-items-center-justify-center` | Vertical layout featuring both centered item alignment and justification. |
| `.flex-wrap-col-content-center` | Wrapped vertical layout with centered content alignment. |
| `.flex-wrap-col-content-center-justify-evenly` | Wrapped vertical layout with centered content alignment and `space-evenly` justification. |

## Wrap-Row Utilities

| Class | Description |
| :--- | :--- |
| `.flex-wrap-row-justify-center` | Wrapped horizontal layout with centered content justification. |
| `.flex-wrap-row-justify-end` | Wrapped horizontal layout with `flex-end` content justification. |
| `.flex-wrap-row-justify-start` | Wrapped horizontal layout with `flex-start` content justification. |
| `.flex-wrap-row-justify-evenly` | Wrapped horizontal layout with `space-evenly` content justification. |
| `.flex-wrap-row-justify-between` | Wrapped horizontal layout with `space-between` content justification. |
| `.flex-wrap-row-justify-around` | Wrapped horizontal layout with `space-around` content justification. |
| `.flex-wrap-row-items-end` | Wrapped horizontal layout with items aligned to the end. |
| `.flex-wrap-row-items-center` | Wrapped horizontal layout with centered item alignment. |

## Reversed-Row Utilities

| Class | Description |
| :--- | :--- |
| `.flex-row-reversed-content-center-justify-center` | Reversed horizontal layout with centered content alignment and justification. |
| `.flex-row-reversed-content-center-justify-around` | Reversed horizontal layout with centered content alignment and `space-around` justification. |
| `.flex-row-reversed-content-center-justify-between` | Reversed horizontal layout with centered content alignment and `space-between` justification. |
| `.flex-row-reversed-content-center-justify-evenly` | Reversed horizontal layout with centered content alignment and `space-evenly` justification. |

## Row-Align/Justify Mix Utilities

| Class | Description |
| :--- | :--- |
| `.flex-wrap-row-items-start` | Wrapped horizontal layout with items aligned to the start. |
| `.flex-wrap-row-items-center-justify-center` | Wrapped horizontal layout with centered item alignment and justification. |
| `.flex-wrap-row-items-center-justify-evenly` | Wrapped horizontal layout with centered item alignment and `space-evenly` justification. |
| `.flex-wrap-row-items-center-justify-around` | Wrapped horizontal layout with centered item alignment and `space-around` justification. |
| `.flex-wrap-row-items-center-justify-between` | Wrapped horizontal layout with centered item alignment and `space-between` justification. |
| `.flex-wrap-row-items-end-justify-between` | Wrapped horizontal layout with items aligned to the end and `space-between` justification. |
| `.flex-wrap-row-items-end-justify-evenly` | Wrapped horizontal layout with items aligned to the end and `space-evenly` justification. |
| `.flex-wrap-row-content-start-justify-evenly` | Wrapped horizontal layout with content aligned to the start and `space-evenly` justification. |
| `.flex-wrap-row-content-center-justify-evenly` | Wrapped horizontal layout with centered content alignment and `space-evenly` justification. |

## Implementation Examples

```sass
@use 'lumina-sass/mix' as mix;

// A centered horizontal arrangement of elements
.container {
  @include mix.gen-flexbox('flex-center');
  @include mix.gen-flexbox('flex-row');
}
```

```html
<!-- A centered horizontal arrangement of elements using utility classes -->
<div class="flex-center flex-row">
  <div class="item">Element 1</div>
  <div class="item">Element 2</div>
</div>

<!-- A wrapped horizontal layout with precise alignment and justification -->
<div class="flex-wrap-row-items-center-justify-evenly">
  <div class="card">Component 1</div>
  <div class="card">Component 2</div>
  <div class="card">Component 3</div>
</div>
```

---

*This document is automatically generated from the Sass source. To maintain synchronization, update the primary Sass files; the documentation will be updated as a consequence of those changes.*
