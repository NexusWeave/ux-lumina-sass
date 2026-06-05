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

## Icons Reference

| Category | Icon name | Emoji |
|----------|-----------|-------|
| academic | school | 🎓 |
| academic | diploma | 📜 |
| boolean-controls | radio | 📻 |
| boolean-controls | checkbox | ✅ |
| utility-inputs | range | 🎚️ |
| utility-inputs | color | 🎨 |
| utility-inputs | hidden | 🙈 |
| documents | pdf | 📄 |
| documents | default | 📁 |
| buttons | file | 📁 |
| buttons | submit | 📤 |
| buttons | reset | 🔄 |
| buttons | button | 🔘 |
| datetime-pickers | date | 📅 |
| datetime-pickers | time | ⏰ |
| datetime-pickers | week | 📅 |
| datetime-pickers | month | 📅 |
| datetime-pickers | datetime-local | 🗓️ |
| input-controls | tel | 📞 |
| input-controls | url | 🔗 |
| input-controls | text | 📝 |
| input-controls | search | 🔍 |
| input-controls | number | 🔢 |
| input-controls | password | 🔑 |
| misc-icons | dir | 📁 |
| misc-icons | globe | 🌐 |
| misc-icons | map-pin | 📍 |
| misc-icons | calendar | 📆 |
| misc-icons | collaborator | 👥 |
| misc-icons | alarm | ⏰ |
| misc-icons | cloud | ☁️ |
| misc | pdf | 📄 |
| misc | dot | ⚫ |
| misc | email | 📧 |
| misc | default | ❓ |
| misc | calendar | 📆 |
| misc | telephone | 📞 |
| misc | code | 💻 |
| communication | mail | ✉️ |
| communication | github | 🐙 |
| communication | ytube | 📺 |
| communication | facebook | 📘 |
| communication | linkedin | 🔗 |
| communication | instagram | 📸 |
| communication | twitter | 🐦 |

---
