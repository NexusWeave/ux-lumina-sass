# Lumina SASS

A descriptive SASS color and utility library.

## Overview

Lumina SASS provides a comprehensive set of standardized color variables and utility mixins designed for modern web development. The library focuses on descriptive naming conventions and easy integration.

## Features

- **Standardized Color Naming:** Uses a consistent `[brand]-[color]` or `[category]-[color]` pattern.
- **Brand Colors:** Pre-defined colors for social media platforms and operating systems.
- **Tech Colors:** Specifically curated colors for programming languages and development categories.
- **Flexbox Utilities:** Comprehensive set of flexbox maps and utility classes.
- **Utility Mixins:** Includes media query breakpoints, font handling, typography, figure/image styling, and button generation.

## Installation

```bash
npm install lumina-sass
```

## Usage

### Colors

All color variables follow a descriptive naming convention:

```sass
@use 'lumina-sass/color' as *

.social-button
  background-color: $discord-blue
  &:hover
    background-color: $discord-blue-hover

.tech-tag
  color: $typescript-blue
  border: 1px solid $accent-slate-blue
```

### Flexbox & Mixins

You can import the entire library or specific modules:

```sass
// Import everything
@use 'lumina-sass' as *

// Or import specific modules
@use 'lumina-sass/flexbox' as flex
@use 'lumina-sass/mixins' as mix

.container
  +mix.flex-center
  
.row
  +flex.flex-row
```

## Demo

A live demo is available in the `demo/` directory.

### Viewing the Demo
You can build and serve the demo using the included npm scripts:

```bash
# Install dependencies
npm install

# Build and serve the demo locally
npm start
```
This will compile the SASS and start a local web server at `http://localhost:8080`.

Alternatively, you can run the tasks separately:
```bash
# Just build the styles
npm run build:demo

# Watch for changes and rebuild
npm run build:demo:watch

# Serve the demo folder
npm run serve
```

## Directory Structure

- `src/color/`: Contains all color definitions.
- `src/flexbox/`: Comprehensive flexbox utilities and mappings.
- `src/mixins/`: Utility mixins (layout, media queries, typography, buttons).
- `src/map/`: SASS maps for configuration (icons, devices, flexbox).
- `src/_index.sass`: Main entry point for the entire library.
- `src/_variables.sass`: Global configuration variables.

## Naming Conventions

Colors are named using the following patterns:
- **Brand/Tag:** `$[brand]-[color]` (e.g., `$linux-orange`)
- **Category:** `$[category]-[color]` (e.g., `$compiled-orange`)
- **States:** `$[brand]-[color]-[state]` (e.g., `$facebook-blue-hover`)

## Releases & Publishing

This project uses GitHub Actions to automate releases and publishing to NPM via **Trusted Publishing (OIDC)**.

### Dependency Updates
Dependabot is configured to check for npm and GitHub Action updates **monthly**.

### How to Release
1. Update the version in `package.json`.
2. Push a new tag following the `v*` pattern (e.g., `v1.0.1`):
   ```bash
   git tag v1.0.1
   git push origin v1.0.1
   ```
3. The GitHub Action will automatically:
   - Create a GitHub Release with generated release notes.
   - Publish the package to NPM with **SLSA Provenance**.

### Trusted Publishing Setup
To enable secretless publishing, you must configure **Trusted Publishers** on npmjs.com:
1. Go to your package settings on npm.
2. Under **Publishing access**, add **GitHub Actions** as a Trusted Publisher.
3. Link your repository (`Krigjo25/lumina-sass`) and the workflow file (`.github/workflows/release.yml`).

> **Benefits:** This setup eliminates the need for manual `NPM_TOKEN` management and provides a "Provenance" badge on npm, allowing users to verify that the package was built directly from this repository.

## License

MIT
