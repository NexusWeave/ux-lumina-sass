# Lumina SASS
[![CI](https://github.com/NexusWeave/ux-lumina-sass/actions/workflows/ci.yml/badge.svg)](https://github.com/NexusWeave/ux-lumina-sass/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/lumina-sass.svg)](https://www.npmjs.com/package/lumina-sass)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Lumina SASS is a design system framework built with Sass Indented Syntax (`.sass`). It provides design tokens, responsive breakpoints, universal CSS resets, navigation controls, and WCAG accessibility utilities.

### Why Sass (Indented Syntax) over Plain CSS & SCSS
Sass Indented Syntax (`.sass`) was specifically chosen over SCSS and plain CSS because it simplifies and accelerates the development process. By removing curly braces (`{}`) and semicolons (`;`), stylesheets remain concise, clean, and fast to author.

- **Simplified Development:** Clean whitespace-driven syntax speeds up styling and reduces boilerplate code noise.
- **Zero Runtime Overhead:** Compiles layout math, WCAG contrast checks, and breakpoints directly to plain CSS at build time.
- **Parametric Resets:** `@mixin reset()` applies targeted CSS resets with safe `false` defaults.
- **Automated Accessibility:** Builds fail automatically if text and background contrast falls below WCAG AA thresholds.
- **Centralized Tokens:** Single-point map definitions for breakpoints, colors, and typography stacks.
- **Navigation Controls:** Responsive mobile navigation buttons with `@mixin l-hamburg()`.

### Important Links

- **[Documentation Overview](docs/README.md):** Complete index of modules, guides, and specifications.
- **[System Architecture](docs/architecture.md):** Modular framework structure and core principles.
- **[Utilities Documentation](docs/mixins/utilities.md):** Parametric CSS resets and position helpers.
- **[Contrast & Accessibility Guide](docs/colors/contrast.md):** Automated WCAG AA contrast validation.
- **[Mixins Reference](docs/mixins/mixins.md):** Design tokens, breakpoints, and layout tools.
- **[Navigation Guide](docs/mixins/navigation.md):** Responsive hamburger menu controls.
- **[Contributing Guide](docs/contributing.md):** How to fork, develop, and submit Pull Requests.
- **[Contributors List](CONTRIBUTIONS.md):** Recognition and thanks to community contributors.
- **[License](./LICENSE):** Open-source MIT License details.

### Quick Start
```bash
npm install lumina-sass
```

```sass
@use 'lumina-sass/map' as l-map
@use 'lumina-sass/mixins' as l-mix
@use 'lumina-sass/flexbox' as l-flex
@use 'lumina-sass/colors' as l-colors

*, *::before, *::after
	@include l-mix.reset($box-sizing: true, $margin: true, $padding: true)

.hamburger-toggle
	@include l-mix.l-hamburg($bg-color: transparent, $color: #ffffff)

.card
	inline-size: 50%
	@include l-mix.media-queries('tablet-landscape')
		inline-size: 100%
```

### Module Overview
- `lumina-sass/mixins` (`l-mix`): Reset, navigation (`l-hamburg`), margins, breakpoints, and typography.
- `lumina-sass/flexbox` (`l-flex`): Flexbox mixins and atomic utility classes.
- `lumina-sass/colors` (`l-colors`): Standardized brand and UI color maps.
- `lumina-sass/map` (`l-map`): Breakpoints, font maps, and design tokens.
- `lumina-sass/contrast` (`l-contrast`): WCAG AA contrast verification.
- `lumina-sass/func` (`l-func`): Pure Sass math and color functions.

### Testing
```bash
npx vitest run test/sass.spec.ts
```

### Contributing
Contributions are welcome via GitHub forks and Pull Requests. See the [Contributing Guide](docs/contributing.md) for step-by-step instructions.

### Contributors & Community Thanks
We express our deepest gratitude to the open-source community for contributing ideas, bug reports, and code improvements. See our [Contributors List](CONTRIBUTIONS.md) for the full list of acknowledged contributors.

### Contact & Support
For questions, issues, or feedback, contact Kristoffer at **krigjo25@outlook.com**.

### License
This project is licensed under the [MIT License](./LICENSE).
