# Navigation

The `navigation` module provides mixins for responsive mobile/desktop navigation components including hamburger toggle buttons.

## Mixins

### nav-hamburg / nav-hamburger

Generates a responsive hamburger navigation toggle button with configurable breakpoint hiding, position, colors, and offsets.

#### Usage

```sass
@use 'lumina-sass/mix' as nav

.hamburger-toggle
	@include nav.nav-hamburg($breakpoint: 'tablet', $bg-color: transparent, $color: #ffffff, $top: 1rem, $right: 1rem)
```

#### Parameters

- `$breakpoint`: String|Length - Breakpoint name or length value above which the button is hidden (`min-width` query). Defaults to `'tablet'`.
- `$bg-color`: Color - Background color of the button. Defaults to `transparent`.
- `$z-index`: Number - Z-index stack depth. Defaults to `2`.
- `$color`: Color - Icon and text color for child elements. Defaults to `#ffffff`.
- `$pos`: String - CSS position mode. Defaults to `relative`.
- `$top`: Length - Top offset position. Defaults to `1rem`.
- `$right`: Length - Right offset position. Defaults to `1rem`.

### hamburg-is-open / hamburger-is-open

Styles the mobile menu overlay when active. Fully customizable with target class names and theme properties.

#### Usage

```sass
@use 'lumina-sass/mix' as nav

.header-nav
	@include nav.hamburg-is-open($open-cls: 'is-open', $bg-color: #1a1a1a, $font-size: 1.5rem)
```

#### Parameters

- `$open-cls`: String - Class name denoting the open state. Defaults to `'is-open'`.
- `$nav-bar-cls`: String - Container class name. Defaults to `'nav-bar'`.
- `$nav-list-cls`: String - List wrapper class name. Defaults to `'nav-list'`.
- `$nav-item-cls`: String - Item element class name. Defaults to `'nav-item'`.
- `$nav-link-cls`: String - Link element class name. Defaults to `'nav-link'`.
- `$bg-color`: Color - Background overlay color. Defaults to `$groovy-70s-earth-brown`.
- `$z-index`: Number - Overlay stack depth. Defaults to `10`.
- `$font-size`: Length|Number - Link font size. Defaults to `2rem`.
