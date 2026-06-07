# Icons
*Last updated: 2026-06-05*
This file explains the icon‑generator mixin provided by Lumina Sass.

## Mixins

- `icon-generator($name: null, $color: null, $font-family: 'bootstrap-icons')`
  - When `$name` is omitted, the mixin creates utility classes for **all** icons defined in the icon map (`src/map/icons`).
  - If a specific `$name` is given, only that icon class is generated.
  - `$color` can override the default colour.
  - `$font-family` defaults to `bootstrap-icons` but can be changed.

## Usage Example

```scss
// Generate all icons (default)
@include icon-generator();

// Generate only the "search" icon with a custom colour
@include icon-generator('search', #ff6600);
```

The mixin creates CSS classes you can apply directly in HTML, e.g. `<i class="search"></i>`.

## Supported Icon Frameworks

Lumina Sass currently supports the following icon frameworks:

- **Bootstrap Icons**: The default framework (font-family: `'bootstrap-icons'`). The library is pre-configured with unicode mappings compatible with Bootstrap Icons.

## Icons Reference

| Category | Icon name |
|----------|-----------|
| academic | school |
| academic | diploma |
| document | pdf |
| document | dir |
| document | default |
| misc-icons | dir |
| misc-icons | map-pin |
| misc-icons | collaborator |
| misc-icons | alarm |
| misc-icons | cloud |
| misc-icons | dot |
| misc-icons | code |
| misc-icons | default |
| communication | email |
| communication | mail |
| communication | github |
| communication | ytube |
| communication | facebook |
| communication | linkedin |
| communication | instagram |
| communication | twitter |
| utility-inputs | color |
| utility-inputs | hidden |
| input-controls | tel |
| input-controls | url |
| input-controls | text |
| input-controls | search |
| input-controls | number |
| input-controls | password |
| video-controls | play-video |
| video-controls | pause-video |
| boolean-controls | radio |
| boolean-controls | checkbox |
| datetime-pickers | time |
| datetime-pickers | week |
| datetime-pickers | month |
| datetime-pickers | calendar |

---
