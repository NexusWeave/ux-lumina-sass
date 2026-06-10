# Development Guide
*Last updated: 2026-06-10*

This guide is intended for developers seeking to contribute to Lumina Sass or gain a deeper understanding of its architectural foundation.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (Stable LTS version recommended)
- [npm](https://www.npmjs.com/)

### Installation
Clone the repository and initialize the development environment:
```bash
git clone https://github.com/NexusWeave/ux-lumina-sass.git
cd ux-lumina-sass
npm install
```

## Available Scripts

Utilize the following scripts to facilitate development:

- `npm run build`: Compiles the library source into the `dist/` directory.
- `npm dev`: Builds the demonstration styles and initializes a local server at `http://localhost:8080`.
- `npm run build:demo`: Compiles `demo/style.sass` into `demo/style.css`.
- `npm run build:demo:watch`: Monitors demonstration Sass files and automates recompilation upon detection of changes.
- `npm run serve`: Initiates an `http-server` instance for the `demo/` directory.
- `npm test`: Executes the Sass unit testing suite within the `test/` directory utilizing `sass-true`.

## Project Structure

- **src/**: The primary architectural core of the library.
  - **color/**: Definitions for color variables, palettes, and thematic elements.
  - **flexbox/**: Comprehensive logic and mixins for sophisticated Flexbox layouts.
  - **mix/**: General-purpose utilities for layout, typography, and accessibility.
  - **map/**: Internal configurations, design tokens, and breakpoint definitions.
  - **func/**: Pure Sass functions for mathematical operations and logic.
  - **_index.sass**: The primary internal entry point.
- **test/**: A comprehensive suite of unit tests implemented with `sass-true`.
- **dist/**: Compiled CSS assets generated via the automated build process.
- **demo/**: A dedicated environment for manual verification and browser-based testing.

## Modular Consumption

Lumina Sass is architected for modularity, allowing developers to import specific modules directly. The `package.json` exports are configured to point directly to the `src/` directory, enabling seamless imports:

```sass
// Import specific modules
@use 'lumina-sass/flexbox'
@use 'lumina-sass/color'
@use 'lumina-sass/mix'
```

## Naming Conventions

To maintain architectural consistency, please adhere to the following naming patterns:

- **Colors:** Employ the `$[brand]-[color]` (e.g., `$linux-orange`) or `$[category]-[color]` (e.g., `$compiled-orange`) format.
- **Mixins:** Use descriptive kebab-case identifiers (e.g., `@mixin flex-center`, `@mixin on-breakpoint`).

## Contribution Workflow

1. Create a dedicated branch for your feature implementation or bug resolution.
2. Verify the integrity of your changes by executing `npm test`. Refer to the [Testing Guide](testing.md) for comprehensive testing documentation.
3. Update the `demo/` assets if your modifications influence visual representation.
4. Submit a Pull Request targeting the `master` branch.
