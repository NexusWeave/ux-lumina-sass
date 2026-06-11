# Buttons
*Last updated: 2026-06-11*

The `buttons` module provides mixins for creating consistent, interactive button elements.

## Mixins

### base-btn

The `base-btn` mixin applies a standard button style with hover and active animations, theme-aware colors, and automated contrast handling.

#### Usage

```sass
@use 'lumina-sass/mix' as *;

.my-button {
  @include base-btn($bg-color: #0078d7, $size: 1.1em);
}
```

#### Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `$bg-color` | Color | The background color. Defaults to `light-blue` token. |
| `$text-color` | Color\|null | The text color. Defaults to `null` (auto-calculated). |
| `$border-color` | Color\|null | Optional border color. Defaults to `null` (no border). |
| `$size` | Length | The font size for the button text. Defaults to `1em`. |
| `$weight` | String\|Number | The font weight. Defaults to `bold`. |
