# Functions Reference and Recipes

The `func` module provides pure utility functions for color mathematics, WCAG 2.1 accessibility calculations, typography stack resolutions, and icon glyph lookups.

## Modules

- [Color Functions](#color-functions)
- [Typography Functions](#typography-functions)
- [Icon Functions](#icon-functions)

## Color Functions

Import path: `@use 'lumina-sass/func' as func` or `@use 'lumina-sass/func/color' as func-color`

### best-contrast-color

Calculates the WCAG 2.1 contrast ratio of a background against two options (typically white and dark grey) and returns the one providing superior readability.

#### Usage

```sass
@use 'lumina-sass/func' as func

$bg: #0078d7
$text: func.best-contrast-color($bg) // Returns #ffffff
```

### luminance

Calculates the relative luminance (0 to 1) of a color according to the WCAG 2.1 formula. Semi-transparent colors are automatically alpha-blended against a white background by default.

#### Usage

```sass
@use 'lumina-sass/func' as func

$lum: func.luminance(#ffffff) // 1
$lum-dark: func.luminance(#000000) // 0
```

### contrast-ratio

Calculates the contrast ratio (1:1 to 21:1) between two colors, rounded to two decimal places.

#### Usage

```sass
@use 'lumina-sass/func' as func

$ratio: func.contrast-ratio(#000000, #ffffff) // 21
```

### setup-theme-colors

Builds a complete, accessible theme palette based on a body background, deriving high-contrast anchor colors, card backgrounds, code backgrounds, and abbreviations.

#### Usage

```sass
@use 'lumina-sass/func' as func

$theme: func.setup-theme-colors($body-bg: #f5f5f5, $accent-color: #3b82f6)
```

## Typography Functions

Import path: `@use 'lumina-sass/func' as func`

### font-family-of

Returns the generic family category (`sans-serif`, `serif`, `monospace`, or `'bootstrap-icons'`) for a given font name or alias based on the configuration maps in `src/map/_fonts.sass`.

#### Usage

```sass
@use 'lumina-sass/func' as func

$family: func.font-family-of('Open Sans') // sans-serif
$family-mono: func.font-family-of('Fira Code') // monospace
```

### is-known-font

Checks whether a font name or alias exists in the registered font map.

#### Usage

```sass
@use 'lumina-sass/func' as func

@if func.is-known-font('Roboto')
  // Font is recognized
```

### get-default-stack

Retrieves the default fallback font stack for a specified generic category (`sans-serif`, `serif`, or `mono`).

#### Usage

```sass
@use 'lumina-sass/func' as func

$mono-stack: func.get-default-stack('mono')
```

## Icon Functions

Import path: `@use 'lumina-sass/func' as func`

### find

Searches registered icon category maps and aliases for a glyph by name, returning its unicode character or `null` if not found.

#### Usage

```sass
@use 'lumina-sass/func' as func

$check-icon: func.find('check') // Returns "\F272"
```
