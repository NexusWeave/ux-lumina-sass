# Icons
*Last updated: 2026-06-10*

This document outlines the functionality of the `icon-generator` mixin within Lumina Sass.

## Icon Generator Mixin

The `icon-generator($name: null, $color: null, $font-family: 'bootstrap-icons')` mixin provides a robust mechanism for generating icon utility classes.

- **Automated Generation:** When the `$name` parameter is omitted, the mixin systematically creates utility classes for all icons defined within the icon map located at `src/map/icons`.
- **Targeted Generation:** Providing a specific `$name` ensures that only the requested icon class is generated.
- **Customization:**
  - The `$color` parameter allows for the overriding of the default icon color.
  - The `$font-family` parameter defaults to `bootstrap-icons` but can be adjusted to support alternative icon sets.

## Implementation Examples

```scss
// Generate utility classes for the entire icon set
@include icon-generator();

// Generate a specific "search" icon with a custom color configuration
@include icon-generator('search', #ff6600);
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
