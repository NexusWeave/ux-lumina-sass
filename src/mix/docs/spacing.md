# Spacing Mixins

The `spacing` module provides utility mixins for setting logical and physical margins and paddings, and centering elements horizontally.

Import path:
```sass
@use 'lumina-sass/mixins' as l-mix
// Or use directly from spacing submodule:
@use 'lumina-sass/src/mix/spacing' as l-space
```

## Mixins Overview

| Mixin | Parameters | Description |
| :--- | :--- | :--- |
| `margin` | `$margin: null`<br>`$block: null`<br>`$inline: null`<br>`$block-start: null`<br>`$block-end: null`<br>`$inline-start: null`<br>`$inline-end: null`<br>`$top: null`<br>`$right: null`<br>`$bottom: null`<br>`$left: null` | Sets physical or logical margin properties. Logical parameters (`$block`, `$inline`) are recommended for responsive bidirectional layouts. |
| `margin-center` | `$block: null` | Convenience helper centering horizontally using `margin-inline: auto` with optional vertical `$block`. |
| `padding` | `$padding: null`<br>`$block: null`<br>`$inline: null`<br>`$block-start: null`<br>`$block-end: null`<br>`$inline-start: null`<br>`$inline-end: null`<br>`$top: null`<br>`$right: null`<br>`$bottom: null`<br>`$left: null` | Sets physical or logical padding properties. |

---

## Detailed Mixin Specifications

### margin

Sets element margins using physical or logical properties.

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$margin` | Length \| String \| null | `null` | Shorthand margin value. |
| `$block` | Length \| String \| null | `null` | Logical vertical margin (`margin-block`). |
| `$inline` | Length \| String \| null | `null` | Logical horizontal margin (`margin-inline`). |
| `$block-start` | Length \| String \| null | `null` | Logical top margin (`margin-block-start`). |
| `$block-end` | Length \| String \| null | `null` | Logical bottom margin (`margin-block-end`). |
| `$inline-start` | Length \| String \| null | `null` | Logical leading margin (`margin-inline-start`). |
| `$inline-end` | Length \| String \| null | `null` | Logical trailing margin (`margin-inline-end`). |
| `$top` | Length \| String \| null | `null` | Physical top margin (`margin-top`). |
| `$right` | Length \| String \| null | `null` | Physical right margin (`margin-right`). |
| `$bottom` | Length \| String \| null | `null` | Physical bottom margin (`margin-bottom`). |
| `$left` | Length \| String \| null | `null` | Physical left margin (`margin-left`). |

#### Usage

```sass
@use 'lumina-sass/src/mix/spacing' as l-space

// Logical margins
.card
	@include l-space.margin($block: 1rem, $inline: auto)

// Directional logical margin
.section-header
	@include l-space.margin($block-end: 2rem)
```

---

### margin-center

Convenience helper to center an element horizontally using logical `margin-inline: auto`.

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$block` | Length \| String \| null | `null` | Optional vertical margin (`margin-block`). |

#### Usage

```sass
@use 'lumina-sass/src/mix/spacing' as l-space

.container
	@include l-space.margin-center($block: 2rem)
```

---

### padding

Sets element padding using physical or logical properties.

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$padding` | Length \| String \| null | `null` | Shorthand padding value. |
| `$block` | Length \| String \| null | `null` | Logical vertical padding (`padding-block`). |
| `$inline` | Length \| String \| null | `null` | Logical horizontal padding (`padding-inline`). |
| `$block-start` | Length \| String \| null | `null` | Logical top padding (`padding-block-start`). |
| `$block-end` | Length \| String \| null | `null` | Logical bottom padding (`padding-block-end`). |
| `$inline-start` | Length \| String \| null | `null` | Logical leading padding (`padding-inline-start`). |
| `$inline-end` | Length \| String \| null | `null` | Logical trailing padding (`padding-inline-end`). |
| `$top` | Length \| String \| null | `null` | Physical top padding (`padding-top`). |
| `$right` | Length \| String \| null | `null` | Physical right padding (`padding-right`). |
| `$bottom` | Length \| String \| null | `null` | Physical bottom padding (`padding-bottom`). |
| `$left` | Length \| String \| null | `null` | Physical left padding (`padding-left`). |

#### Usage

```sass
@use 'lumina-sass/src/mix/spacing' as l-space

.card-body
	@include l-space.padding($inline: 1.5rem, $block: 1rem)
```
