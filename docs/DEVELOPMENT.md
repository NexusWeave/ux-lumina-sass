# Developer Guide

This guide is for developers who want to contribute to Lumina SASS or understand the project's internal structure.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/)

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/NexusWeave/ux-lumina-sass.git
cd ux-lumina-sass
npm install
```

## Available Scripts

The following scripts are available for development:

- `npm dev`: Compiles the demo styles and starts a local development server at `http://localhost:8080`.
- `npm run build:demo`: Compiles the `demo/style.sass` to `demo/style.css`.
- `npm run build:demo:watch`: Watches for changes in the demo SASS files and recompiles automatically.
- `npm run serve`: Starts the `http-server` to serve the `demo/` directory.

## Project Structure

- `src/`: Core SASS library source files.
  - `color/`: Standardized color variables.
  - `flexbox/`: Flexbox utility mixins and maps, including subdirectories for alignment and justification mixins.
  - `mixins/`: General utility mixins (layout, typography, buttons).
  - `map/`: SASS configuration maps.
  - `_index.sass`: Main entry point.
  - `_variables.sass`: Global variables.
- `demo/`: A small showcase application to test and demonstrate the library features.
- `.github/workflows/`: CI/CD automation for releases and publishing.

## Naming Conventions

To keep the library consistent, please follow these patterns:

- **Colors:** `$[brand]-[color]` (e.g., `$linux-orange`) or `$[category]-[color]` (e.g., `$compiled-orange`).
- **Mixins:** Use descriptive kebab-case (e.g., `+flex-center`, `+respond-to`).

## Contributing

1. Create a new branch for your feature or bugfix.
2. Ensure your changes are reflected in the `demo/` if applicable.
3. Submit a Pull Request to the `master` branch.
