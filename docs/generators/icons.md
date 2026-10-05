# Icons
*Last updated: 2026-06-11*

This document outlines the functionality of the `gen-icons` mixin within Lumina Sass.

## Icon Generator Mixin

The `gen-icons` mixin provides a robust mechanism for generating icon utility classes.

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$name` | String \| null | `null` | Target icon name. When omitted, systematically generates classes for all icons in `src/map/icons`. |
| `$color` | Color \| null | `null` | Optional color override for the icon glyphs. |
| `$font-family` | String | `'bootstrap-icons'` | Icon font family applied to generated classes. |
| `$debug` | Boolean | `false` | When true, outputs diagnostic compile info. |
| `$silent` | Boolean | `false` | When true, suppresses warnings. |

## Icon Style Mixin

The `icon-style` mixin applies icon font properties to an element, typically used within a pseudo-element.

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$icon-content` | String | *Required* | Unicode character code or glyph for the icon (e.g. `"\f123"`). |
| `$font-family` | String | `'icons'` | Font family to use for the icon. |
| `$size` | Length | `1rem` | Font size of the icon. |

```sass
@use 'lumina-sass/mix' as mix;

.custom-icon {
  @include mix.icon-style("\f123");
}
```

## Implementation Examples

```sass
// Generate utility classes for the entire icon set
@include gen-icons();

// Generate a specific "search" icon with a custom color configuration
@include gen-icons('search', #ff6600);
```

The mixin generates CSS classes that can be utilized directly within HTML structures:
`<i class="search"></i>`

## Supported Icon Frameworks

Lumina Sass provides built-in support for the following icon frameworks:

- **Bootstrap Icons:** This is the default framework (`font-family: 'bootstrap-icons'`). The library is pre-configured with unicode mappings that are fully compatible with Bootstrap Icons.

## Icons Reference

| Category | Icon Name |
|----------|-----------|
| Academic | School |
| Academic | Diploma |
| Document | PDF |
| Document | Directory |
| Document | Default |
| Miscellaneous | Directory |
| Miscellaneous | Map-pin |
| Miscellaneous | Collaborator |
| Miscellaneous | Alarm |
| Miscellaneous | Cloud |
| Miscellaneous | Dot |
| Miscellaneous | Code |
| Miscellaneous | Default |
| Alerts | Warning |
| Alerts | Success |
| Alerts | Error |
| Alerts | Info |
| Communication | Email |
| Communication | Mail |
| Communication | GitHub |
| Communication | YouTube |
| Communication | Facebook |
| Communication | LinkedIn |
| Communication | Instagram |
| Communication | Twitter |
| Utility Inputs | Color |
| Utility Inputs | Hidden |
| Input Controls | Tel |
| Input Controls | URL |
| Input Controls | Text |
| Input Controls | Search |
| Input Controls | Number |
| Input Controls | Password |
| Video Controls | Play-video |
| Video Controls | Pause-video |
| Boolean Controls | Radio |
| Boolean Controls | Checkbox |
| DateTime Pickers | Time |
| DateTime Pickers | Week |
| DateTime Pickers | Month |
| DateTime Pickers | Calendar |

---
