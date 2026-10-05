# Position Utilities
*Last updated: 2026-09-24*

The `position` module provides mixins for CSS positioning and directional offsets using physical properties (`top`, `right`, `bottom`, `left`), `inset` shorthand, logical offsets (`inset-block`, `inset-inline`), and layering (`z-index`).

## Mixins

### position

The generic `position` mixin sets the position mode alongside any optional coordinate and layering properties.

#### Usage

```sass
@use 'lumina-sass/mix' as *;

.modal-overlay {
  @include position(fixed, $inset: 0, $z-index: 1000);
}

.dropdown-menu {
  @include position(absolute, $top: 100%, $left: 0, $z-index: 200);
}
```

#### Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `$position` | String\|null | The CSS position mode (`relative`, `absolute`, `fixed`, `sticky`). |
| `$top` | Length\|String\|null | Top offset. |
| `$right` | Length\|String\|null | Right offset. |
| `$bottom` | Length\|String\|null | Bottom offset. |
| `$left` | Length\|String\|null | Left offset. |
| `$inset` | Length\|String\|null | Inset shorthand for all 4 sides. |
| `$inset-block` | Length\|String\|null | Logical block inset offset. |
| `$inset-inline` | Length\|String\|null | Logical inline inset offset. |
| `$z-index` | Number\|String\|null | Layering index. |

---

### Shorthand Mixins

For clean and readable stylesheets, dedicated convenience mixins are available:

#### absolute

```sass
.badge {
  @include absolute($top: 0.5rem, $right: 0.5rem, $z-index: 10);
}
```

#### fixed

```sass
.navbar-fixed {
  @include fixed($top: 0, $left: 0, $right: 0, $z-index: 500);
}
```

#### relative

```sass
.card-wrapper {
  @include relative($top: 4px);
}
```

#### sticky

```sass
.table-header {
  @include sticky($top: 0, $z-index: 20);
}
```
