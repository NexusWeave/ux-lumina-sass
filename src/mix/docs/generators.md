# Generators
*Last updated: 2026-06-12*

This document provides a technical overview of the generator mixins offered by **Lumina Sass**.

## Generator Mixins

The following mixins facilitate the automated generation of utility classes and component styles:

| Generator Mixin | Parameters | Description |
| :--- | :--- | :--- |
| `gen-icons` | `$name: null`<br>`$color: null`<br>`$font-family: 'icons'`<br>`$debug: false`<br>`$silent: false` | Generates utility classes for icons. If `$name` is omitted, generates classes for all icons in the configuration map. `$color` overrides default coloration. |
| `gen-flexbox` | `$name`<br>`$silent: false` | Generates flexbox utility classes corresponding to the specified `$name` entry in the flexbox configuration map. |
| `gen-inputs` | `$name: null`<br>`$placeholder-color: null`<br>`$custom: ()`<br>`$debug: false`<br>`$silent: false` | Generates utility classes (`.{type}-input`) for input elements. If `$name` is `null`, generates styles for all inputs in the input configuration map. |

These mixins are architected within `src/mix/_generators.sass` and are exported through the `lumina-sass/mix` sub-path.
