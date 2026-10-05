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

- `$bg-color`: Color - The background color. Defaults to `c.$light-blue`.
- `$text-color`: Color|null - The text color. Defaults to `null` (auto-calculated via WCAG contrast).
- `$border-color`: Color|null - Optional border color. Defaults to `null` (resets border).
- `$size`: Length - The font size for the button text. Defaults to `1em`.
- `$weight`: String|Number - The font weight. Defaults to `bold`.
- `$suppress-notice`: Boolean - Suppresses accessibility notice for transparent/inherited backgrounds. Defaults to `false`.
