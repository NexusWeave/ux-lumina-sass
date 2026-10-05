# Color Functions

The `color` submodule provides functions for relative luminance calculations, automated WCAG 2.1 contrast ratios, optimal readability selection, and dynamic theme palette generation.

Import path: `@use 'lumina-sass/func' as func` or `@use 'lumina-sass/func/color' as func-color`

---

## Functions

### `best-contrast-color($bg-color, $light: base.$white, $dark: base.$dark-grey, $background: base.$white, $debug: false)`

Calculates the WCAG 2.1 contrast ratio of a background against two options (typically white and dark grey) and returns the one providing superior readability.

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$bg-color` | Color | *Required* | The background color to evaluate. |
| `$light` | Color | `c.$white` | The text color returned if the background is dark. |
| `$dark` | Color | `c.$dark-grey` | The text color returned if the background is light. |
| `$background` | Color | `c.$white` | Background blended against if `$bg-color` is semi-transparent. |
| `$debug` | Boolean | `false` | When true, logs calculated ratios to the console. |

#### Usage

```sass
@use 'lumina-sass/func' as func

$bg: #0078d7
$text: func.best-contrast-color($bg) // Returns #ffffff
```

---

### `luminance($color, $background: base.$white)`

Calculates the relative luminance (ranging from `0` for absolute black to `1` for absolute white) of a color according to the WCAG 2.1 formula. Semi-transparent colors are automatically alpha-blended against a white background by default.

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$color` | Color | *Required* | The color to calculate luminance for. |
| `$background` | Color | `c.$white` | Blend background for semi-transparent colors. |

#### Usage

```sass
@use 'lumina-sass/func' as func

$lum-white: func.luminance(#ffffff) // 1
$lum-black: func.luminance(#000000) // 0
```

---

### `contrast-ratio($color1, $color2)`

Calculates the WCAG 2.1 contrast ratio (from `1` to `21`) between two colors, rounded to two decimal places. Automatically blends semi-transparent colors against white.

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$color1` | Color | *Required* | First color. |
| `$color2` | Color | *Required* | Second color. |

#### Usage

```sass
@use 'lumina-sass/func' as func

$ratio: func.contrast-ratio(#000000, #ffffff) // 21
```

---

### `theme-colors($body-bg: c.$soft-white, $text-color: null, $accent-color: null, $custom-colors: ())`

Generates an accessible, complete map of theme colors based on a base background color. Derives high-contrast anchor colors, card backgrounds, code backgrounds, alert colors, and abbreviations.

#### Usage

```sass
@use 'lumina-sass/func' as func

$theme: func.theme-colors($body-bg: #f5f5f5, $accent-color: #3b82f6)
```

---

### `contrast-color-fallback($bg, $accent: null)`

Returns the preferred accent color if provided; otherwise resolves the highest-contrast safe color for the given background.

---

### `derive-card-colors($accent-color: null, $context-bg: c.$soft-white)`

Calculates a harmonious card background and contrasting text color from an accent or context background.

---

### `inspect-color($val)`

Inspects a color, CSS keyword, or value and returns a dictionary with its type and accessibility metadata:

| Key | Type | Description |
| :--- | :--- | :--- |
| `type` | String | Sass data type (`color`, `string`, `null`, etc.) |
| `value` | Any | The raw value inspected |
| `is-transparent` | Boolean | `true` if keyword `transparent` or has alpha `0` |
| `is-inherit` | Boolean | `true` if keyword `inherit` |
| `is-special` | Boolean | `true` if transparent or inherit |

#### Usage

```sass
@use 'lumina-sass/func' as func

$info: func.inspect-color(transparent)
// Returns ('type': 'color', 'value': transparent, 'is-transparent': true, 'is-inherit': false, 'is-special': true)
```
