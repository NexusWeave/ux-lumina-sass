# Tags and Elements Mixins
*Last updated: 2026-06-09*

This document describes the mixins for buttons, links, and basic styling. These mixins help you style common HTML tags.

## Mixins

### `background-color($bg-color, $text-color)`
This mixin sets the background color and text color of an element.

* **Parameters**:
  * `$bg-color`: The background color.
  * `$text-color`: The text color.

### `base-btn($bg-color, $text-color, $border-color, $size, $weight)`
This mixin applies button styling. It includes scale animations and color changes for hover and active states.

* **Parameters**:
  * `$bg-color` (Default: `$groovy-70s-cream`): The button background color.
  * `$text-color` (Default: `$groovy-70s-warm-white`): The button text color.
  * `$border-color` (Default: `null`): An optional border color.
  * `$size` (Default: `1em`): The font size.
  * `$weight` (Default: `bold`): The font weight.

### `link-color($color, $color-hover, $color-active, $color-visited)`
This mixin styles links and heading tags. It manages normal, hover, active, visited, and disabled states.

* **Parameters**:
  * `$color`: The default link color.
  * `$color-hover`: The hover state color.
  * `$color-active`: The active state color.
  * `$color-visited`: The visited state color.

## Usage Example

```scss
@use 'src/mix/buttons' as btn;
@use 'src/mix/elements' as el;
@use 'src/mix/misc-styling' as style;

// Set custom background and text color
.card {
  @include style.background-color(#fff, #000);
}

// Apply button styles to a custom class
.my-button {
  @include btn.base-btn();
}

// Configure link colors
body {
  @include el.link-color(#00f, #00a, #005, #808);
}
```
