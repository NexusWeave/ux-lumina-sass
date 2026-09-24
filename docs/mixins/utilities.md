# Utilities
*Last updated: 2026-06-11*

The `utilities` module provides utility mixins for common styling tasks like background colors and icon properties.

## Mixins

### background-color

The `background-color` mixin applies a background color and automatically calculates the best contrasting text color.

#### Usage

```sass
@use 'lumina-sass/mix' as *;

.card {
  @include background-color($bg-color: #333);
}
```

#### Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `$bg-color` | Color | The background color. Defaults to `soft-white`. |
| `$text-color` | Color\|null | Optional text color override. Defaults to `null` (auto-calculated). |
| `$blend-bg` | Color | Background to blend against if `$bg-color` is semi-transparent. Defaults to `soft-white`. |

### icon-style

The `icon-style` mixin applies icon font properties, typically used within a pseudo-element.

#### Usage

```sass
.my-icon {
  @include icon-style($icon-content: "\f123", $size: 1.2rem);
}
```

#### Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `$icon-content` | String | The unicode character for the icon. |
| `$font-family` | String | The font family to use. Defaults to `'icons'`. |
| `$size` | Number | The font size of the icon. Defaults to `1rem`. |

### size

The `size` mixin applies CSS logical dimensions (`inline-size` and `block-size`), with optional `min-*` and `max-*` dimension constraints.

#### Usage

```sass
@use 'lumina-sass/mix' as *;

.card-container {
  // Sets width: 100%, height: 20rem with constraints
  @include size($inline: 100%, $block: 20rem, $min-inline: 320px, $max-inline: 1200px);
}
```

#### Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `$inline` / `$inline-size` | Length\|String\|null | The `inline-size` (width) to set. Defaults to `null`. |
| `$block` / `$block-size` | Length\|String\|null | The `block-size` (height) to set. Defaults to `auto`. |
| `$min-inline` / `$min-inline-size` | Length\|String\|null | Optional `min-inline-size`. Defaults to `null`. |
| `$min-block` / `$min-block-size` | Length\|String\|null | Optional `min-block-size`. Defaults to `null`. |
| `$max-inline` / `$max-inline-size` | Length\|String\|null | Optional `max-inline-size`. Defaults to `null`. |
| `$max-block` / `$max-block-size` | Length\|String\|null | Optional `max-block-size`. Defaults to `null`. |

### min-size

The `min-size` mixin sets minimum logical dimensions (`min-inline-size` and `min-block-size`).

#### Usage

```sass
.box {
  @include min-size($inline: 300px, $block: 150px);
}
```

### max-size

The `max-size` mixin sets maximum logical dimensions (`max-inline-size` and `max-block-size`).

#### Usage

```sass
.modal {
  @include max-size($inline: 800px, $block: 90vh);
}
```
