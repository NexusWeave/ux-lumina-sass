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

### `get-default-stack($category: 'sans-serif')`

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
