# Maps & Dictionaries Overview

The `map` module contains the central data structures, lookup tables, and configuration mappings used across Lumina Sass.

Import path: `@use 'lumina-sass/map' as map`

---

## Mappings Included

- **`_devices-breakpoints.sass`**: Screen widths, device profiles (e.g. Motorola, iPhone, iPad, wide screens), and responsive breakpoint dimensions.
- **`_flexbox.sass`**: Alignments, justification keywords, directions, and wrapping configurations for the flexbox engine.
- **`_fonts.sass`**: Font family stacks, typography fallbacks, system font definitions, and font pairings.
- **`_icons.sass`**: Unicode character glyph mappings categorized by purpose (`academic`, `documents`, `misc-icons`).
- **`_inputs.sass`**: Default input styling properties, utility types, and form control classifications (`buttons`, `booleanControls`, `inputControls`, `datetimePickers`).
- **`_tag-theme.sass`**: Centralized semantic tag color tokens (`primary`, `secondary`, `danger`, `warning`, `info`, `light`, `dark`).

---

## Quick Example

```sass
@use 'lumina-sass/map' as map

// Accessing breakpoints
$tablet: map.get(map.$misc-breakpoints, 'tablet')

// Accessing default input properties
$input-defaults: map.$default-input-props

// Accessing tag theme colors
$tag-colors: map.$tag-theme-colors
```
