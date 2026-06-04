# Lumina SASS

A descriptive SASS color and utility library.

## Overview

Lumina SASS provides a comprehensive set of standardized color variables and utility mixins designed for modern web development. The library focuses on descriptive naming conventions and easy integration.

## Features

- **Standardized Color Naming:** Uses a consistent `[brand]-[color]` or `[category]-[color]` pattern.
- **Brand Colors:** Pre-defined colors for social media platforms and operating systems.
- **Tech Colors:** Specifically curated colors for programming languages and development categories.
- **Utility Mixins:** Includes flexbox centering, responsive breakpoints, and more.

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/lumina-sass.git

# Navigate to the project
cd lumina-sass
```

## Usage

### Colors

All color variables follow a descriptive naming convention:

```sass
@use 'src/color' as *

.social-button
  background-color: $discord-blue
  &:hover
    background-color: $discord-blue-hover

.tech-tag
  color: $typescript-blue
  border: 1px solid $accent-slate-blue
```

### Mixins

```sass
@use 'src/mixins' as *

.container
  +flex-center
  
.content
  width: 100%
  +respond-to('small')
    padding: 1rem
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
  - `_index.sass`: Entry point for all color modules.
  - `_base.sass`: Basic palette colors (white, grey, etc.).
  - `_accents.sass`: Supplemental accent colors.
  - `_brands.sass`: Brand colors for social media and platforms.
  - `_tags.sass`: Operating system and specialized tag colors.
  - `_stacks.sass`: Colors for various technology stacks and categories.
  - `_icons.sass`: Colors associated with specific file types and UI icons.
- `src/mixins/`: Utility mixins for layout and responsiveness.
- `src/map/`: SASS maps for configuration.
- `src/_variables.sass`: Global configuration variables.

## Naming Conventions

Colors are named using the following patterns:
- **Brand/Tag:** `$[brand]-[color]` (e.g., `$linux-orange`)
- **Category:** `$[category]-[color]` (e.g., `$compiled-orange`)
- **States:** `$[brand]-[color]-[state]` (e.g., `$facebook-blue-hover`)

## Releases & Publishing

This project uses GitHub Actions to automate releases and publishing to NPM.

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
   - Publish the package to NPM.

> **Note:** Ensure you have added `NPM_TOKEN` to your GitHub Repository Secrets for the publishing to succeed.

## License

MIT
