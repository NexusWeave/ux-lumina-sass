# Lumina SASS

Lumina Sass design tokens and mixins.

## Overview

Lumina SASS provides a comprehensive set of standardized color variables and utility mixins designed for modern web development. The library focuses on descriptive naming conventions and easy integration.

## Features

- **Standardized Color Naming:** Uses a consistent `[brand]-[color]` pattern.
- **Flexbox Utilities:** Comprehensive set of flexbox maps and utility classes.
- **Utility Mixins:** Includes media query breakpoints, typography, and button generation.

## Installation

```bash
npm install lumina-sass
```

## Usage

### Colors

```sass
@use 'lumina-sass/color' as *

.social-button
  background-color: $discord-blue
```

### Flexbox & Mixins

```sass
@use 'lumina-sass' as *

.container
  +flex-center
```

## Documentation

For more detailed information, please refer to the following guides:

- **[Developer Guide](docs/DEVELOPMENT.md):** Information on setting up the development environment, project structure, and how to contribute.
- **[Releasing & Publishing](docs/RELEASING.md):** Details on the automated release process and how to configure NPM Trusted Publishing.

## Demo

A live demo is available in the `demo/` directory. You can run it locally with:

```bash
npm install
npm start
```

## License

MIT
