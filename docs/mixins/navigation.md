# Navigation

The `navigation` module provides mixins for responsive mobile/desktop navigation components including hamburger toggle buttons.

## Mixins

### nav-hamburger

Generates responsive hamburger navigation toggle button for screens `<= 64rem` (1024px, `tablet-landscape` and down). Hidden on larger desktop screens.

#### Usage

```sass
@use 'lumina-sass/mixins' as l-mix

.hamburger-toggle
	@include l-mix.nav-hamburger($bg-color: transparent, $color: #ffffff, $top: 1rem, $right: 1rem)
```

#### Parameters

- `$bg-color`: Color - Background color of the hamburger button. Defaults to `transparent`.
- `$color`: Color - Icon and text color for child `b` and `span` tags. Defaults to `#ffffff`.
- `$top`: Length - Fixed top offset position. Defaults to `1rem`.
- `$right`: Length - Fixed right offset position. Defaults to `1rem`.

### hamburger-is-open

Styles the mobile menu overlay when active. Fully customizable with custom class names and theme properties.

#### Parameters

- `$open-class`: String - Class name for open state. Defaults to `'is-open'`.
- `$nav-bar-class`: String - Container class name. Defaults to `'nav-bar'`.
- `$nav-list-class`: String - List wrapper class name. Defaults to `'nav-list'`.
- `$nav-item-class`: String - Item element class name. Defaults to `'nav-item'`.
- `$nav-link-class`: String - Link element class name. Defaults to `'nav-link'`.
- `$bg-color`: Color - Background overlay color. Defaults to `$groovy-70s-earth-brown`.
- `$z-index`: Number - Overlay stack depth. Defaults to `10`.
- `$font-size`: Number - Link font size. Defaults to `2rem`.
