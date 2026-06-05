# Lumina SASS

Lumina Sass design tokens and mixins for modern web development.

## Overview

Lumina SASS provides a comprehensive set of standardized color variables and utility mixins. The library focuses on descriptive naming conventions and easy integration into any SASS-based project.

## Installation

```bash
npm install lumina-sass
```

## Usage

### Importing the Library

You can import the entire library or specific modules depending on your needs.

#### 1. Import Everything
```sass
@use 'lumina-sass' as *

.container
  +flex-center
```

#### 2. Import Specific Modules

| Module | Description |
| :--- | :--- |
| `lumina-sass/color` | Standardized color variables (Brands, Tech, UI States). |
| `lumina-sass/flexbox` | Comprehensive flexbox layout mixins. |
| `lumina-sass/mixins` | General utility mixins (Typography, Media Queries, Buttons). |
| `lumina-sass/map` | Configuration maps (Device breakpoints, icons, flexbox settings). |
| `lumina-sass/utils` | Internal helper functions and utilities. |

```sass
@use 'lumina-sass/color' as *
@use 'lumina-sass/mixins' as mix
@use 'lumina-sass/flexbox' as flex

.social-button
  background-color: $discord-blue

.row
  +flex.flex-row
```

## Features

### Standardized Colors
Uses a consistent `$[brand]-[color]` pattern for easy discovery and maintenance.
- **Brand Colors:** Social media platforms, operating systems, and tech brands.
- **UI States:** Hover and active states for major brand colors.

### Flexbox Utilities
A comprehensive set of flexbox mixins and mapping for quick layout development.

### Utility Mixins
- **Responsive Design:** Media query breakpoints.
- **Typography:** Font handling and text styling.
- **Elements:** Button generation, figure/image styling, and more.

---

## Contributing & Internal Docs

If you want to contribute to the project or learn about the release process, please see:

- [**Development Guide**](docs/DEVELOPMENT.md) - Project structure, local setup, and contribution rules.
- [**Releasing & Publishing**](docs/RELEASING.md) - Details on the automated release pipeline.

## License

MIT
