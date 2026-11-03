# Size Mixins

The `size` module provides utility mixins for setting logical dimensions (`inline-size` and `block-size`) with minimum and maximum boundary constraints.

Import path:
```sass
@use 'lumina-sass/mixins' as l-mix
// Or use directly from size submodule:
@use 'lumina-sass/src/mix/size' as size
```

## Mixins Overview

| Mixin | Parameters | Description |
| :--- | :--- | :--- |
| `size` | `$inline: null`<br>`$block: null`<br>`$min-inline: null`<br>`$min-block: null`<br>`$max-inline: null`<br>`$max-block: null` | Sets `inline-size` and `block-size` along with optional minimum and maximum logical constraints. |
| `min-size` | `$inline: null`<br>`$block: null` | Sets `min-inline-size` and `min-block-size`. |
| `max-size` | `$inline: null`<br>`$block: null` | Sets `max-inline-size` and `max-block-size`. |

---

## Detailed Mixin Specifications

### size

Sets CSS logical dimensions (`inline-size` and `block-size`), with optional `min-*` and `max-*` constraints.

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$inline` | Length \| String \| null | `null` | Logical width (`inline-size`). |
| `$block` | Length \| String \| null | `null` | Logical height (`block-size`). |
| `$min-inline` | Length \| String \| null | `null` | Minimum logical width (`min-inline-size`). |
| `$min-block` | Length \| String \| null | `null` | Minimum logical height (`min-block-size`). |
| `$max-inline` | Length \| String \| null | `null` | Maximum logical width (`max-inline-size`). |
| `$max-block` | Length \| String \| null | `null` | Maximum logical height (`max-block-size`). |

#### Usage

```sass
@use 'lumina-sass/src/mix/size' as l-size

.card-container
	@include l-size.size($inline: 100%, $block: 20rem, $min-inline: 20rem, $max-inline: 75rem)
```

---

### min-size

Sets logical minimum dimensions (`min-inline-size` and `min-block-size`).

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$inline` | Length \| String \| null | `null` | Minimum logical width (`min-inline-size`). |
| `$block` | Length \| String \| null | `null` | Minimum logical height (`min-block-size`). |

#### Usage

```sass
@use 'lumina-sass/src/mix/size' as l-size

.card-box
	@include l-size.min-size($inline: 15rem, $block: 8rem)
```

---

### max-size

Sets logical maximum dimensions (`max-inline-size` and `max-block-size`).

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$inline` | Length \| String \| null | `null` | Maximum logical width (`max-inline-size`). |
| `$block` | Length \| String \| null | `null` | Maximum logical height (`max-block-size`). |

#### Usage

```sass
@use 'lumina-sass/src/mix/size' as l-size

.modal-content
	@include l-size.max-size($inline: 40rem, $block: 90vh)
```
