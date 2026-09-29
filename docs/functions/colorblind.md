# Color Blindness Simulation Functions

The `colorblind` functions simulate how colors appear under various forms of Color Vision Deficiency (CVD) using standard linear matrix transformations (Brettel/Machado approximations).

Import path: `@use 'lumina-sass/func' as func`

---

## Functions

### `simulate-colorblind($color, $type)`
The primary simulation function that applies a matrix transformation to an RGB/RGBA color.

- **Parameters:**
  - `$color`: The color to evaluate (`Color`).
  - `$type`: The deficiency type (`String`). Options:
    - `'protanopia'` (L-cone deficiency / red-blind)
    - `'deuteranopia'` (M-cone deficiency / green-blind)
    - `'tritanopia'` (S-cone deficiency / blue-blind)
    - `'achromatopsia'` (Monochromacy / total color blindness)
  - *Default:* `'deuteranopia'`
- **Returns:** The transformed `Color`.

---

## Helper Functions

For clean, readable stylesheets, dedicated helper functions wrap `simulate-colorblind`:

- `protanopia($color)` – Simulates red-blindness.
- `deuteranopia($color)` – Simulates green-blindness.
- `tritanopia($color)` – Simulates blue-blindness.
- `achromatopsia($color)` – Simulates monochromacy.

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
