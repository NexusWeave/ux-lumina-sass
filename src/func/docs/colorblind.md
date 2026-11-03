# Color Blindness Simulation Functions

The `colorblind` functions simulate how colors appear under various forms of Color Vision Deficiency (CVD) using standard linear matrix transformations (Brettel/Machado approximations).

Import path: `@use 'lumina-sass/func' as func`

---

## Functions

### `simulate-colorblind($color, $type)`
The primary simulation function that applies a matrix transformation to an RGB/RGBA color.

#### Parameters

| Parameter | Type | Default | Options / Description |
| :--- | :--- | :--- | :--- |
| `$color` | Color | *Required* | The color to evaluate. |
| `$type` | String | `'deuteranopia'` | Deficiency type: `'protanopia'` (red-blind), `'deuteranopia'` (green-blind), `'tritanopia'` (blue-blind), `'achromatopsia'` (total color blindness). |

**Returns:** The transformed `Color`.

---

## Helper Functions

For clean, readable stylesheets, dedicated helper functions wrap `simulate-colorblind`:

| Helper Function | Signature | Description |
| :--- | :--- | :--- |
| `protanopia` | `protanopia($color)` | Simulates L-cone deficiency (red-blindness). |
| `deuteranopia` | `deuteranopia($color)` | Simulates M-cone deficiency (green-blindness). |
| `tritanopia` | `tritanopia($color)` | Simulates S-cone deficiency (blue-blindness). |
| `achromatopsia` | `achromatopsia($color)` | Simulates monochromacy (total color blindness). |

---

## Usage Example

```sass
@use 'lumina-sass/func' as func

$success: rgb(25, 135, 84)
$error: rgb(220, 53, 69)

// Calling helpers directly:
$error-protan: func.protanopia($error)
$success-deuter: func.deuteranopia($success)
$blue-tritan: func.tritanopia(rgb(0, 100, 220))
$mono: func.achromatopsia($error)

// Calling the generic simulation function:
$simulated: func.simulate-colorblind($error, 'deuteranopia')
```
