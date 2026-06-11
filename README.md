# Lumina SASS

[![CI](https://github.com/NexusWeave/ux-lumina-sass/actions/workflows/ci.yml/badge.svg)](https://github.com/NexusWeave/ux-lumina-sass/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/lumina-sass.svg)](https://www.npmjs.com/package/lumina-sass)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Lumina SASS** is a comprehensive design token and mixin framework engineered for modern web development. It provides a robust, standardized foundation for color systems, responsive layouts, and reusable components utilizing the **Sass Indented Syntax**.

---

## Technical Specifications

Lumina SASS is architected with modularity and efficiency as core principles. Key features include:
- **Type Safety:** Leveraging Sass maps and sophisticated validation logic.
- **Architectural Consistency:** Standardized nomenclature for design tokens.
- **Enhanced Developer Experience:** An intuitive API featuring streamlined mixins.
- **Modern Standards Compliance:** Full compatibility with Dart Sass and the `@use` module system.

> **Note:** This library utilizes the **Sass Indented Syntax** (.sass). It remains compatible with Sass projects via the `@use` directive. Demonstration examples employ the indented syntax to maintain consistency with the source codebase.

## Installation

```bash
npm install lumina-sass
```

## Usage

Lumina SASS employs a modular architecture, permitting the importation of the entire framework or specific modules as required.

### Importing Modules

```sass
// Import flexbox utilities (recommended)
@use 'lumina-sass/flexbox' as flex

// Import generator mixins
@use 'lumina-sass/generators' as gen

// Import descriptive color variables
@use 'lumina-sass/colors' as color

// Import general mixins (typography, layout, accessibility)
@use 'lumina-sass/mixins' as mix

// Import design tokens and maps
@use 'lumina-sass/map' as map

// Import general utility functions
@use 'lumina-sass/func' as func
```

### Implementation Examples

#### Flexbox Layout
```sass
.container
  @include flex.flexbox-generator('flex-row')
  @include flex.flex-items-center
```

#### Automated Generation (Icons & Inputs)
```sass
// Systematically generate all icon classes
@include gen.icon-generator()

// Apply base styling to all text inputs
@include gen.input-generator('text')
```

#### Accessibility (WCAG Contrast Verification)
```sass
.alert
  background: color.$brand-lumina-blue
  color: color.$neutral-white
  // Triggers a build failure if the contrast ratio falls below 4.5:1
  @include mix.assert-contrast(color.$neutral-white, color.$brand-lumina-blue)
```
> For comprehensive details, please refer to our [**Color Contrast & Accessibility Guide**](docs/colors/contrast.md).

#### Pure Functions (Mathematical & Logical Utilities)
```sass
.custom-bg
  // Determine the relative luminance of a brand color
  $luminance: func.luminance(color.$brand-lumina-blue)
  opacity: if($luminance > 0.5, 0.8, 1)
```

#### Semantic Breakpoints
```sass
.card
  width: 100%
  @include mix.on-breakpoint(md)
    width: 50%
```

## Public API Reference (Sub-paths)

| Path | Description |
| :--- | :--- |
| `lumina-sass` | Primary entry point (includes common utilities). |
| `lumina-sass/flexbox` | Comprehensive flexbox mixins and utility classes. |
| `lumina-sass/color` | Standardized brand and UI color palettes. |
| `lumina-sass/mix` | Primary mixins for typography, media queries, and structural elements. |
| `lumina-sass/map` | Internal configurations and design tokens. |
| `lumina-sass/contrast` | Automated WCAG contrast ratio verification. |
| `lumina-sass/func` | Specialized Sass functions for mathematics, logic, and searching. |

## Key Features

- **Standardized Palettes:** Consistent `$brand-color` patterns utilizing `rgb()` for maximum compatibility.
- **Automated Accessibility:** Integrated WCAG contrast ratio verification.
- **Specialized Functions:** Dedicated modules for mathematical operations and font stack resolution.
- **Responsive Utilities:** Intuitive media query helpers (e.g., `on-breakpoint`, `on-dark-mode`).
- **Flexbox Engine:** A robust suite of mixins for rows, columns, and sophisticated alignment.

## Developer Resources

- [**Documentation Index**](docs/README.md)
- [**Development Guide**](docs/developer/development.md) – Technical overview and contribution workflows.
- [**Testing Suite**](docs/developer/testing.md) – Detailed specifications for unit testing and code analysis.
- [**Sass Testing Quick-Start**](docs/developer/testing.md#unit-testing-with-sass-true) – Direct access to testing methodologies.
- [**Utility Classes**](docs/utils/utility_classes.md) – A comprehensive inventory of pre-configured CSS classes.
- [**AI Operations Guide**](docs/ai_guide.md) – Guidance for automated assistant integration.

## Contributing

We welcome contributions to the project. Please consult our [Development Guide](docs/developer/development.md) and ensure that all tests pass successfully prior to submitting a pull request.

```bash
# Execute unit testing suite
npm test

# Execute stylistic analysis
npm run lint:sass
```

## License

This project is licensed under the terms of the [MIT License](LICENSE).
