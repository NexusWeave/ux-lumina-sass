# Typography Functions

The `typography` submodule provides functions for inspecting registered fonts, determining font categories, and generating system fallback font stacks.

Import path: `@use 'lumina-sass/func' as func` or `@use 'lumina-sass/func/typography' as func-typo`

---

## Functions

### `font-family-of($font-name)`

Resolves the generic CSS font category (`sans-serif`, `serif`, `monospace`, or `'bootstrap-icons'`) for a specified font name or alias based on the configuration maps in `src/map/_fonts.sass`.

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$font-name` | String | *Required* | The name or alias of the font (e.g. `'Nunito'`, `'Fira Code'`, `'sans-serif'`). |

#### Usage

```sass
@use 'lumina-sass/func' as func

$family: func.font-family-of('Nunito')    // sans-serif
$family-mono: func.font-family-of('mono')  // monospace
```

---

### `is-known-font($font-name)`

Checks whether a font name or alias is registered in the typography configuration maps.

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$font-name` | String | *Required* | The font identifier to check. |

#### Usage

```sass
@use 'lumina-sass/func' as func

@if func.is-known-font('Nunito')
  // Font is registered in the design system
```

---

### `is-large-font($size, $weight: null)`

Determines whether a given font size and optional font weight qualify as "large scale text" under WCAG standards (≥ 18pt / 24px / 1.5rem, or ≥ 14pt / 18.5px / 1.2rem when bold).

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$size` | Number/Length | *Required* | Font size (e.g. `1.5rem`, `24px`, `18pt`). |
| `$weight` | String/Number | `null` | Font weight (e.g. `'bold'`, `700`). |

#### Usage

```sass
@use 'lumina-sass/func' as func

$large: func.is-large-font(2rem)            // true
$large-bold: func.is-large-font(1.25rem, 700) // true
$normal: func.is-large-font(1rem)           // false
```

---

### `meets-contrast-aaa($foreground, $background, $size: null, $weight: null)`

Checks whether a foreground font color against a background surface satisfies **WCAG Level AAA** (7.0:1 for standard text, 4.5:1 for large text).

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$foreground` | Color | *Required* | Text / foreground color. |
| `$background` | Color | *Required* | Background surface color. |
| `$size` | Number/Length | `null` | Optional font size used to check for large text exemption. |
| `$weight` | String/Number | `null` | Optional font weight. |

#### Usage

```sass
@use 'lumina-sass/func' as func

// Passes AAA (exceeds 7.0:1)
$is-aaa: func.meets-contrast-aaa(#000000, #ffffff) // true

// 5.0:1 fails AAA for normal text (< 7.0:1), but passes AAA for large text (>= 4.5:1)
$fails-normal: func.meets-contrast-aaa(#595959, #ffffff)              // false
$passes-large: func.meets-contrast-aaa(#595959, #ffffff, $size: 2rem) // true
```

Retrieves the curated system fallback font stack list for a specified generic category (`'sans-serif'`, `'serif'`, or `'mono'`).

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$category` | String | `'sans-serif'` | Category name (`'sans-serif'`, `'serif'`, or `'mono'`). |

#### Usage

```sass
@use 'lumina-sass/func' as func

$mono-stack: func.get-default-stack('mono')
```
