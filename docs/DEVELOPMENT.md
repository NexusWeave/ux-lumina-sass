# Development Guide

This guide is for developers who want to contribute to Lumina SASS or understand how the project is organized.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/)

### Installation
Clone the repository and install the required tools:
```bash
git clone https://github.com/NexusWeave/ux-lumina-sass.git
cd ux-lumina-sass
npm install
```

## Available Scripts

Use these scripts for development work:

- `npm dev`: Compiles demo styles and starts a local development server at `http://localhost:8080`.
- `npm run build:demo`: Compiles `demo/style.sass` into `demo/style.css`.
- `npm run build:demo:watch`: Monitors demo SASS files for changes and recompiles them automatically.
- `npm run serve`: Starts the `http-server` to serve the `demo/` directory.

## Project Structure

- `src/`: Main SASS library files.
  - `color/`: Color variables.
  - `flexbox/`: Flexbox mixins and maps, with folders for alignment and justification mixins.
  - `mixins/`: General utilities like layout and typography.
  - `map/`: SASS configuration maps.
  - `_index.sass`: Main entry point.
- `demo/`: A small showcase to test library features.
- `.github/workflows/`: Automated release and publishing tools.

## Naming Conventions

To keep the library consistent, follow these patterns:

- **Colors:** Use `$[brand]-[color]` (e.g., `$linux-orange`) or `$[category]-[color]` (e.g., `$compiled-orange`).
- **Mixins:** Use clear kebab-case (e.g., `+flex-center`, `+respond-to`).

## Contributing

1. Create a new branch for your feature or bug fix.
2. Update the `demo/` files if your changes affect them.
3. Submit a Pull Request to the `master` branch.
