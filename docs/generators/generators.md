# Generators
*Last updated: 2026-06-06*
This document describes the generator mixins provided by **Lumina Sass**.

## Mixins

- `icon-generator($name: null, $color: null, $font-family: 'bootstrap-icons')`
  - Generates utility classes for icons. If `$name` is omitted, it creates classes for **all** icons defined in the map.
  - Optional `$color` overrides the icon colour.

- `flexbox-generator($name)`
  - Generates a set of flexbox utility classes based on the `$name` entry in the flexbox map.

- `input-generator($name, $placeholder-color: null, $custom: ())`
  - Generates styling for input elements. If `$name` is `null`, it creates styles for **all** inputs defined in the inputs map.
  - `$placeholder-color` sets the placeholder text colour.
  - `$custom` allows overriding default properties, such as focus outline.

Both mixins are defined in `src/mix/_generators.sass` and are exported via `src/mix/_index.sass`.
