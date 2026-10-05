# Buttons
*Last updated: 2026-06-11*

The `buttons` module provides mixins for creating consistent, interactive button elements.

## Mixins

### base-btn

The `base-btn` mixin applies a standard button style with hover and active animations, theme-aware colors, and automated contrast handling.

#### Usage

```sass
@use 'lumina-sass/mix' as mix

.custom-button
  @include mix.base-btn($bg-color: #0078d7, $size: 1.1em)

// Custom unstyled button with clean reset
button.reset-button
  @include mix.reset($button: true)
```

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$bg-color` | Color | `c.$light-blue` | The background color. |
| `$text-color` | Color \| null | `null` | The text color (auto-calculated via WCAG contrast). |
| `$border-color` | Color \| null | `null` | Optional border color (resets border when null). |
| `$size` | Length | `1em` | The font size for the button text. |
| `$weight` | String \| Number | `bold` | The font weight. |
| `$suppress` | Boolean | `false` | Suppresses accessibility notice for transparent/inherited backgrounds. |
