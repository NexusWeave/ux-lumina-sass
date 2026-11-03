# Functions Overview

The `func` module provides pure utility functions for color mathematics, WCAG 2.1 accessibility calculations, color blindness simulations, typography stack resolutions, and icon glyph lookups.

Import path: `@use 'lumina-sass/func' as func`

---

## Submodules

- **[Color Functions](color.md):** Luminance calculation, automated WCAG contrast ratios, and theme palette derivations.
- **[Color Blindness Simulation](colorblind.md):** Simulations of color vision deficiencies (`protanopia`, `deuteranopia`, `tritanopia`, and `achromatopsia`).
- **[Typography Functions](typography.md):** Font inspection, category resolutions, and system fallback font stacks.
- **[Icon Functions](icons.md):** Unicode glyph lookups and category map resolvers.

---

## Quick Example

```sass
@use 'lumina-sass/func' as func

// Color & Contrast
$bg: #0078d7
$text: func.best-contrast-color($bg)
$ratio: func.contrast-ratio(#000000, #ffffff)

// Color Blindness Simulation
$sim-deuter: func.deuteranopia(rgb(25, 135, 84))
$sim-protan: func.protanopia(rgb(220, 53, 69))

// Typography
$family: func.font-family-of('Nunito')
$mono-stack: func.get-default-stack('mono')

// Icons
$check: func.find('check')
```
