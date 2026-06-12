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
  @include flex.gen-flexbox('flex-row')
  @include flex.flex-items-center
```

#### Automated Generation (Icons & Inputs)
```sass
// Systematically generate all icon classes
@include gen.gen-icons()

// Apply base styling to all text inputs
@include gen.gen-inputs('text')
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
  inline-size: 100%
  @include mix.media-queries(md)
    inline-size: 50%
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
- **Responsive Utilities:** Intuitive media query helpers (e.g., `media-queries`, `prefers-color-scheme`).
- **Flexbox Engine:** A robust suite of mixins for rows, columns, and sophisticated alignment.

## AI Migration Prompt

Lumina SASS recently updated its API to use highly descriptive, everyday language for its mixins and modules (e.g., `scaffold()` is now `apply-global-theme()`). 

If you are upgrading an older project, you can copy and paste the following prompt to your favorite AI coding assistant to automate the migration:

> **"Please scan my project's Sass/CSS files and update all Lumina-Sass references to match their new descriptive names. Specifically: change `core` imports to `global-theme` and `theme` imports to `theme-colors`. Update mixin calls from `start()` to `apply-global-theme()`, `apply()` to `apply-theme-colors()`, and `forms.setup()` to `forms.style-forms()`. Finally, update `input-generator`, `icon-generator`, and `flexbox-generator` to their new `gen-*` prefixes (e.g., `gen-inputs`)."**

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
