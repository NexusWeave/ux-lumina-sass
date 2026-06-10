# Color Contrast & Accessibility
*Last updated: 2026-06-10*

Lumina Sass incorporates specialized utilities to ensure that color combinations adhere to [WCAG 2.1 accessibility standards](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html). These instruments facilitate the automated verification of accessibility directly within the Sass compilation process.

---

## Automated Verification (Mixin)

The `assert-contrast` mixin serves as the primary mechanism for ensuring color accessibility. It evaluates the contrast ratio between two specified colors and triggers a Sass `@error` if the ratio fails to meet the defined threshold. This mixin is architected within the `mix` module.

### Implementation
```sass
@use 'lumina-sass/mix'

.my-component
  background: $bg-color
  color: $fg-color
  // Compilation fails if contrast ratio is below WCAG AA (4.5:1)
  @include mix.assert-contrast($fg-color, $bg-color)
```

### Parameters
| Parameter | Type | Requirement | Description |
| :--- | :--- | :--- | :--- |
| `$foreground` | Color | *Required* | The color assigned to text or iconography. |
| `$background` | Color | *Required* | The underlying background color. |
| `$threshold` | Number | `4.5` (Default) | The minimum permissible ratio (e.g., 3 for large text, 7 for AAA compliance). |

---

## Mathematical Utilities (Functions)

For scenarios requiring custom logic or the development of proprietary accessibility tools, mathematical functions are available within the `lumina-sass/func` module.

### `contrast-ratio($color1, $color2)`
Determines the contrast ratio between two colors based on the WCAG formula.
- **Returns:** A numeric value ranging from 1 to 21.
- **Example:** `func.contrast-ratio(#000, #fff)` yields `21`.

### `luminance($color)`
Calculates the relative luminance of a specific color.
- **Returns:** A numeric value between 0 (absolute black) and 1 (absolute white).
- **Example:** `func.luminance(#fff)` yields `1`.

---

## Standards & Best Practices

- **WCAG AA (4.5:1):** The standard requirement for conventional text.
- **WCAG Large Text (3:1):** Permissible for text exceeding 18pt, or bold text exceeding 14pt.
- **WCAG AAA (7.1:1):** The rigorous standard for designs prioritizing maximum accessibility.

By incorporating `@include mix.assert-contrast` within your mixins, you ensure that every design component maintains accessibility compliance by default.

---
*Accessibility is a fundamental requirement rather than an optional feature. Lumina Sass facilitates this through automated enforcement.*
