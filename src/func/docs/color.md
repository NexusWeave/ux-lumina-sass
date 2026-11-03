# Color Functions

The `color` submodule provides functions for relative luminance calculations, automated WCAG 2.1 contrast ratios, optimal readability selection, and dynamic theme palette generation.

Import path: `@use 'lumina-sass/func' as func` or `@use 'lumina-sass/func/color' as func-color`

---

## Functions

### `best-contrast-color($bg-color, $light: base.$pure-white, $dark: base.$gray-700, $background: base.$pure-white, $debug: false)`

Calculates the WCAG 2.1 contrast ratio of a background against two options (typically white and dark grey) and returns the one providing superior readability.

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$bg-color` | Color | *Required* | The background color to evaluate. |
| `$light` | Color | `c.$pure-white` | The text color returned if the background is dark. |
| `$dark` | Color | `c.$gray-700` | The text color returned if the background is light. |
| `$background` | Color | `c.$pure-white` | Background blended against if `$bg-color` is semi-transparent. |
| `$debug` | Boolean | `false` | When true, logs calculated ratios to the console. |

#### Usage

```sass
@use 'lumina-sass/func' as func

$bg: #0078d7
$text: func.best-contrast-color($bg) // Returns #ffffff
```

---

### `luminance($color, $background: base.$pure-white)`

Calculates the relative luminance (ranging from `0` for absolute black to `1` for absolute white) of a color according to the WCAG 2.1 formula. Semi-transparent colors are automatically alpha-blended against a white background by default.

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$color` | Color | *Required* | The color to calculate luminance for. |
| `$background` | Color | `c.$pure-white` | Blend background for semi-transparent colors. |

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

### `theme-colors($body-bg: c.$slate-100, $text-color: null, $accent-color: null, $custom-colors: ())`

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

### `derive-card-colors($accent-color: null, $context-bg: c.$slate-100)`

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

---

### `tint($color, $percentage)`

Lightens a color by mixing it with pure white (`base.$pure-white`) according to the given percentage.

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$color` | Color | *Required* | The base color to tint. |
| `$percentage` | Number (%) | *Required* | Percentage of white to mix in (0% to 100%). |

#### Usage

```sass
@use 'lumina-sass/func' as func

$tinted: func.tint(#0078d7, 20%) // Mixes 20% white into #0078d7
```

---

### `shade($color, $percentage)`

Darkens a color by mixing it with pure black (`base.$black`) according to the given percentage.

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$color` | Color | *Required* | The base color to shade. |
| `$percentage` | Number (%) | *Required* | Percentage of black to mix in (0% to 100%). |

#### Usage

```sass
@use 'lumina-sass/func' as func

$shaded: func.shade(#0078d7, 20%) // Mixes 20% black into #0078d7
```

---

### `alpha($color, $alpha)`

Returns a new color with the specified alpha channel opacity (using modern `sass:color` channel manipulation).

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$color` | Color | *Required* | The base color. |
| `$alpha` | Number | *Required* | Alpha value between 0 (transparent) and 1 (opaque). |

#### Usage

```sass
@use 'lumina-sass/func' as func

$semi-trans: func.alpha(#0078d7, 0.5) // rgba(0, 120, 215, 0.5)
```

---

### `composite-over($foreground, $background: base.$pure-white)`

Composites a semi-transparent foreground color over an opaque background color using standard alpha blending:
$$\text{Color} = \alpha \cdot \text{fg} + (1 - \alpha) \cdot \text{bg}$$

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$foreground` | Color | *Required* | The potentially semi-transparent color. |
| `$background` | Color | `c.$pure-white` | The background color underneath. |

#### Usage

```sass
@use 'lumina-sass/func' as func

$solid: func.composite-over(rgba(0, 0, 0, 0.5), #ffffff) // #808080
```

---

### `ensure-contrast($fg-color, $bg-color, $min-ratio: 4.5, $composite-bg: base.$pure-white)`

Adjusts a foreground color (handling tints, shades, and semi-transparent alpha channels) to ensure it satisfies a target WCAG contrast ratio against a background color. If the current contrast is insufficient, it iteratively shades or tints the color until `$min-ratio` is reached.

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$fg-color` | Color | *Required* | The foreground color to check and adjust. |
| `$bg-color` | Color | *Required* | The background color to test against. |
| `$min-ratio` | Number | `4.5` | Target contrast ratio (default 4.5 for WCAG AA normal text). |
| `$composite-bg` | Color | `c.$pure-white` | Base background used when compositing semi-transparent backgrounds. |

#### Usage

```sass
@use 'lumina-sass/func' as func

// Darkens the light blue until it achieves at least 4.5:1 ratio over white
$readable-blue: func.ensure-contrast(#60a5fa, #ffffff, 4.5)
```
