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

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$breakpoint` | String \| Length | `'tablet'` | Breakpoint name or length above which button is hidden (`min-width` query). |
| `$bg-color` | Color | `transparent` | Background color of the button. |
| `$z-index` | Number | `2` | Z-index stack depth. |
| `$color` | Color | `c.$dark-grey` | Icon and text color for child elements. |
| `$pos` | String | `relative` | CSS position mode. |
| `$top` | Length | `1rem` | Top offset position. |
| `$right` | Length | `1rem` | Right offset position. |
| `$font-family` | String | `'Bootstrap'` | Font family key applied to icon element (`b`). |
| `$size` | Length | `2rem` | Font size applied to icon element (`b`). |

### hamburg-is-open / hamburger-is-open

Styles the mobile menu overlay when active. Fully customizable with target class names and theme properties.

#### Usage

```sass
@use 'lumina-sass/mix' as nav

.header-nav
	@include nav.hamburg-is-open($open-cls: 'is-open', $bg-color: #1a1a1a, $font-size: 1.5rem)
```

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$open-cls` | String | `'is-open'` | Class name denoting the open state. |
| `$nav-bar-cls` | String | `'nav-bar'` | Container class name. |
| `$nav-list-cls` | String | `'nav-list'` | List wrapper class name. |
| `$nav-item-cls` | String | `'nav-item'` | Item element class name. |
| `$nav-link-cls` | String | `'nav-link'` | Link element class name. |
| `$bg-color` | Color | `c.$groovy-70s-earth-brown` | Background overlay color. |
| `$z-index` | Number | `10` | Overlay stack depth. |
| `$font-size` | Length \| Number | `2rem` | Link font size. |
