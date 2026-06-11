# Generators
*Last updated: 2026-06-10*

This document provides a technical overview of the generator mixins offered by **Lumina Sass**.

## Generator Mixins

The following mixins facilitate the automated generation of utility classes and component styles.

### Icon Generator

- `icon-generator($name: null, $color: null, $font-family: 'bootstrap-icons')`
  - This mixin generates utility classes for icons. If the `$name` parameter is omitted, it systematically generates classes for every icon defined within the configuration map.
  - The optional `$color` parameter allows for the overriding of the default icon coloration.

### Flexbox Generator

- `flexbox-generator($name)`
  - This mixin generates a predefined set of flexbox utility classes corresponding to the specified `$name` entry within the flexbox configuration map.

### Input Generator

- `input-generator($name, $placeholder-color: null, $custom: ())`
  - This mixin generates styling for input elements. If the `$name` parameter is set to `null`, it generates styles for all inputs defined in the input configuration map.
  - The `$placeholder-color` parameter configures the color of the placeholder text.
  - The `$custom` parameter enables the overriding of default properties, such as focus outlines and borders.

These mixins are architected within `src/mix/_generators.sass` and are exported through the `lumina-sass/mix` sub-path.
