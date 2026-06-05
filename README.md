# Lumina SASS
*Last updated: 2026-06-05*
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
// $youtube-red-hover now uses rgb(120, 6, 6)
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

If you prefer to use CSS classes directly in your HTML (like `.flex-center`), please check our [**Utility Classes Guide**](docs/utils/utility_classes.md).

### Semantic Media Queries
For common media queries, you can use these simple helper mixins to make your code more readable.

```scss
.my-component {
  // Base styles
  background: white;

  // Applies styles for medium screens and smaller
  @include on-breakpoint(md) {
    font-size: 0.9rem;
  }

  // Applies styles when the user prefers dark mode
  @include on-dark-mode {
    background: black;
  }
}
```

Available helpers:
- `@include on-breakpoint($name)`
- `@include on-dark-mode`
- `@include on-light-mode`
- `@include on-landscape`
- `@include on-portrait`

## Features
### Recent Changes

- **RGB conversion:** All colour variables that previously used `rgba(..., 1)` are now simplified to `rgb(...)`; any hexadecimal literals have been converted to `rgb()`.
### Standardized Colors
Uses a consistent `$[brand]-[color]` pattern for easy use and maintenance.
- **Brand Colors:** Social media platforms, operating systems, and tech brands.
- **UI States:** Hover and active states.

### Flexbox Utilities
A complete set of flexbox mixins and maps to help you build layouts quickly.

### Utility Mixins
- **Responsive Design:** Media query breakpoints.
- **Responsive Media Queries:** Added `media-queries` mixin usage in demo and `device-media` support for iPhone.
- **Typography:** Font handling and text styling.
- **Elements:** Button generation and image styling.

---

## Contributing & Internal Docs

To learn how to contribute or understand the release process, please see:

- [**Development Guide**](docs/developer/development.md) - Project structure and setup rules.
- [**Releasing & Publishing**](docs/developer/releasing.md) - Details on the release process.

## License

MIT
