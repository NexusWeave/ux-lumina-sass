# Tags and Elements Mixins
*Last updated: 2026-06-11*

This document provides a comprehensive overview of the mixins available for styling buttons, links, and fundamental HTML elements. For architectural clarity, these mixins are distributed across three distinct modules: `_buttons.sass`, `_elements.sass`, and `_misc-styling.sass`.

## Mixins

### `background-color($bg-color, $text-color)`
This mixin facilitates the simultaneous configuration of an element's background and foreground colors.

* **Parameters**:
  * `$bg-color`: The designated background color.
  * `$text-color`: The designated text color.

### `base-btn($bg-color, $text-color, $border-color, $size, $weight)`
This mixin applies comprehensive button styling, incorporating scale transitions and color modifications for hover and active interactions.

* **Parameters**:
  * `$bg-color` (Default: `$groovy-70s-cream`): The button's background color.
  * `$text-color` (Default: `$groovy-70s-warm-white`): The button's text color.
  * `$border-color` (Default: `null`): An optional border specification.
  * `$size` (Default: `1em`): The font size.
  * `$weight` (Default: `bold`): The font weight.

### `link-color($color, $color-hover, $color-active, $color-visited)`
Designed for styling hyperlinks and heading elements, this mixin orchestrates various states, including normal, hover, active, visited, and disabled.

* **Parameters**:
  * `$color`: The default link color.
  * `$color-hover`: The color assigned to the hover state.
  * `$color-active`: The color assigned to the active state.
  * `$color-visited`: The color assigned to the visited state.

## Implementation Example

```sass
@use 'src/mix/buttons' as btn;
@use 'src/mix/elements' as el;
@use 'src/mix/misc-styling' as style;

// Configure custom background and foreground colors
.card {
  @include style.background-color(#fff, #000);
}

// Apply button architecture to a specific class
.my-button {
  @include btn.base-btn();
}

// Define comprehensive link color states
body {
  @include el.link-color(#00f, #00a, #005, #808);
}
```
