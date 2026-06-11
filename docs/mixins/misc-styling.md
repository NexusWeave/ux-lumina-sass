# Miscellaneous Styling
*Last updated: 2026-06-11*

The `misc-styling` module provides utility mixins for common styling tasks like background colors and icon properties.

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
  @include icon-style($icon-content: "\f123");
}
```

#### Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `$icon-content` | String | The unicode character for the icon. |
| `$font-family` | String | The font family to use. Defaults to `'icons'`. |
