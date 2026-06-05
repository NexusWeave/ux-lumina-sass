# Lumina SASS

Lumina Sass provides design tokens and mixins to help you build modern web applications.

## Overview

Lumina SASS offers a collection of standardized color variables and utility mixins. The library uses clear naming conventions, making it simple to add to any SASS-based project.

## Installation

Install the package as a project-level dependency in your project:

```bash
npm install lumina-sass
```

This will add `lumina-sass` to your `package.json` file. Do not install the library globally.

## Usage

### Importing the Library

You can use the library directly in your Sass files using standard `@use` syntax.

#### 1. Import Everything
To use all mixins and utility classes, import the main library file:

```sass
// In your style.sass or style.scss file:
@use 'lumina-sass' as *

// Now all mixins and classes are available:
.container
  +flex-center
```

#### 2. Import Specific Modules
If you only need certain parts, you can import them individually:

```sass
@use 'lumina-sass/color' as *
@use 'lumina-sass/mixins' as mix
@use 'lumina-sass/utils' as utils

// Example usage:
.social-button
  background-color: $discord-blue

.container
  @include mix.flex-center // Using mixins
```

### Module Breakdown

| Module | Description |
| :--- | :--- |
| `lumina-sass/color` | Color variables (Brands, Tech, UI States). |
| `lumina-sass/mixins` | General utility mixins (Typography, Media Queries, Buttons). |
| `lumina-sass/utils` | Flexbox utilities and CSS classes. |
| `lumina-sass/map` | Configuration maps (Breakpoints, icons, flexbox). |

### Utility Classes

If you prefer to use CSS classes directly in your HTML (like `.flex-center` or `.flex-row`), please check our [**Utility Classes Guide**](docs/UTILITY_CLASSES.md).

## Features

### Standardized Colors
Uses a consistent `$[brand]-[color]` pattern for easy use and maintenance.
- **Brand Colors:** Social media platforms, operating systems, and tech brands.
- **UI States:** Hover and active states.

### Flexbox Utilities
A complete set of flexbox mixins and maps to help you build layouts quickly.

### Utility Mixins
- **Responsive Design:** Media query breakpoints.
- **Typography:** Font handling and text styling.
- **Elements:** Button generation and image styling.

---

## Contributing & Internal Docs

To learn how to contribute or understand the release process, please see:

- [**Development Guide**](docs/DEVELOPMENT.md) - Project structure and setup rules.
- [**Releasing & Publishing**](docs/RELEASING.md) - Details on the release process.

## License

MIT
