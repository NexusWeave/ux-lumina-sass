# Icon Functions

The `icons` submodule provides lookup functions to resolve icons, unicode glyph values, and category mappings registered across the design system.

Import path: `@use 'lumina-sass/func' as func` or `@use 'lumina-sass/func/icons' as func-icons`

---

## Functions

### `find($icon-name)`

Searches all registered icon categories and aliases for an icon matching the specified name, returning its unicode glyph character or `null` if not found.

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$icon-name` | String | *Required* | The name or alias of the icon (e.g. `'check'`, `'school'`, `'code'`). |

#### Usage

```sass
@use 'lumina-sass/func' as func

$check-icon: func.find('check') // Returns "\F272"
$school-icon: func.find('school') // Returns "\F671"
```

---

### `get-icon-map($category: null)`

Returns registered icon maps. When a specific category name is provided (such as `'general'`, `'dev'`, or `'ui'`), returns the corresponding map subset; otherwise returns all categories.

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$category` | String \| null | `null` | Optional category key (e.g., `'academic'`, `'document'`, `'general'`). If null, returns all registered categories. |

#### Usage

```sass
@use 'lumina-sass/func' as func

$all-icons: func.get-icon-map()
$academic-icons: func.get-icon-map('academic')
```
