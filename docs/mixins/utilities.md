# Utilities

The `utilities` module provides utility mixins for common styling tasks including universal CSS resets, margins, sizing, background colors, and icon properties.

## Mixins

### reset

The universal `reset` mixin resets all or specific CSS properties and HTML base elements. All parameters default to `false` for safety and require explicit activation.

#### Usage

```sass
@use 'lumina-sass/mixins' as l-mix

// Selective reset
*, *::before, *::after
	@include l-mix.reset($box-sizing: true, $margin: true, $padding: true)

// Universal reset across all CSS properties and HTML elements
.app-wrapper
	@include l-mix.reset($all: true, $html-elements: true)
```

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$all` | Boolean | `false` | Resets all supported CSS properties simultaneously. |
| `$box-sizing` | Boolean | `false` | Sets `box-sizing: border-box`. |
| `$margin` | Boolean | `false` | Resets `margin`, `margin-block`, and `margin-inline` to `0`. |
| `$padding` | Boolean | `false` | Resets `padding`, `padding-block`, and `padding-inline` to `0`. |
| `$border` | Boolean | `false` | Resets `border` to `none`. |
| `$outline` | Boolean | `false` | Resets `outline` to `0` and `outline-color: transparent`. |
| `$font` | Boolean | `false` | Resets `font: inherit`, `font-size: 100%`, `font-weight: normal`, `line-height: inherit`. |
| `$color` | Boolean | `false` | Resets `color: inherit`. |
| `$background` | Boolean | `false` | Resets background to `transparent` with `background-image: none`. |
| `$button` | Boolean | `false` | Resets native button styles (`border`, `outline`, `color`, `background`, `font`, `cursor`, `appearance`). |
| `$list-style` | Boolean | `false` | Resets `list-style: none`. |
| `$text-decoration` | Boolean | `false` | Resets `text-decoration: none`. |
| `$size` | Boolean | `false` | Resets logical dimensions (`inline-size: auto`, `block-size: auto`, `max-inline-size: 100%`, `max-block-size: 100%`). |
| `$appearance` | Boolean | `false` | Sets `appearance: none`. |
| `$vertical-align` | Boolean | `false` | Sets `vertical-align: baseline`. |
| `$user-select` | Boolean | `false` | Sets `user-select: auto`. |
| `$cursor` | Boolean | `false` | Sets `cursor: auto`. |
| `$position` | Boolean | `false` | Resets `position: static`, `top: auto`, `right: auto`, `bottom: auto`, `left: auto`, `inset: auto`, `z-index: auto`. |
| `$html-elements` | Boolean | `false` | Applies default base styling resets for `abbr` and `code`. |
| `$text` | Color | `c.$dark-grey` | Base text color for `abbr` resets. |
| `$colors` | Map | `()` | Optional color map for `abbr-underline` and `code-bg`. |

> [!NOTE]
> Sizing and Spacing mixins have been decoupled into dedicated submodules:
> - See [Size Documentation](./size.md) for `size`, `min-size`, and `max-size`.
> - See [Spacing Documentation](./spacing.md) for `margin`, `margin-center`, and `padding`.

### transition

Sets CSS transition shorthand or granular transition properties (`property`, `duration`, `timing-function`, `delay`, `behavior`).

#### Usage

```sass
@use 'lumina-sass/mixins' as l-mix

// Shorthand usage
.interactive-card
	@include l-mix.transition(all 0.3s ease)

// Granular sub-properties usage
.fade-element
	@include l-mix.transition($transition: null, $property: opacity, $duration: 250ms, $timing-function: ease-in-out)
```

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$transition` | String \| List \| null | *Required* | Full transition shorthand, or null when using sub-properties. |
| `$property` | String \| List \| null | `null` | Target CSS property to transition. |
| `$duration` | Length \| String \| null | `null` | Duration value. |
| `$timing-function` | String \| null | `null` | Timing function curve. |
| `$delay` | Length \| String \| null | `null` | Delay time before start. |
| `$behavior` | String \| null | `null` | Transition behavior mode (e.g. `allow-discrete`). |

### aspect-ratio

Sets object-fit, logical full inline size, optional border-radius, and calculates CSS `aspect-ratio`.

#### Usage

```sass
@use 'lumina-sass/mixins' as l-mix

// Default 16:9 widescreen ratio
.media-container
	@include l-mix.aspect-ratio()

// Custom 4:3 ratio with rounded borders
.thumbnail-box
	@include l-mix.aspect-ratio($width: 4, $length: 3, $object-fit: contain)
```

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$width` | Number | `16` | Aspect ratio width component. |
| `$length` | Number | `9` | Aspect ratio height/length component. |
| `$object-fit` | String | `cover` | CSS `object-fit` value (`cover`, `contain`, `fill`, etc.). |

### appearance

Cross-browser appearance mixin managing standard and vendor-prefixed properties (`appearance`, `-moz-appearance`, `-webkit-appearance`).

#### Usage

```sass
@use "lumina-sass/mixins" as l-mix

.custom-select
	@include l-mix.appearance(none)
```

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$appearance` | String | `none` | CSS appearance property value (`none`, `auto`, etc.). |

### frame

Comprehensive utility mixin for structural border, individual border properties, accessibility outline, outline-color, and box-shadow elevation.

#### Usage

```sass
@use "lumina-sass/mixins" as l-mix

// Custom focus frame
.input-focus
	@include l-mix.frame($border-color: #0078d7, $box-shadow: 0 0 0 0.2rem rgba(0, 120, 215, 0.25))

// Complete boundary frame
.card-frame
	@include l-mix.frame($border: 0.0625rem solid #ccc, $border-radius: 0.5rem, $box-shadow: 0 4px 6px rgba(0,0,0,0.1))
```

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$border` | String \| List \| null | `null` | CSS border shorthand. |
| `$border-color` | Color \| String \| null | `null` | CSS border color. |
| `$border-width` | Length \| String \| null | `null` | CSS border width. |
| `$border-style` | String \| null | `null` | CSS border style. |
| `$border-radius` | Length \| List \| null | `null` | CSS border radius. |
| `$border-top` | String \| List \| null | `null` | CSS top border. |
| `$border-right` | String \| List \| null | `null` | CSS right border. |
| `$border-bottom` | String \| List \| null | `null` | CSS bottom border. |
| `$border-left` | String \| List \| null | `null` | CSS left border. |
| `$border-block` | String \| List \| null | `null` | CSS logical block border. |
| `$border-inline` | String \| List \| null | `null` | CSS logical inline border. |
| `$outline` | String \| List \| null | `null` | CSS outline shorthand. |
| `$outline-color` | Color \| String \| null | `null` | CSS outline-color rule. |
| `$outline-style` | String \| null | `null` | CSS outline style. |
| `$outline-width` | Length \| String \| null | `null` | CSS outline width. |
| `$outline-offset` | Length \| null | `null` | CSS outline-offset distance. |
| `$box-shadow` | String \| List \| null | `null` | CSS box-shadow property. |

### bo-ra

Utility mixin for setting border-radius using standard rem units or custom curves.

#### Usage

```sass
@use "lumina-sass/mixins" as l-mix

.avatar
	@include l-mix.bo-ra(50%)

.card-box
	@include l-mix.bo-ra(0.5rem)
```

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$radius` | Length \| List | *Required* | CSS border radius value or list of corner radii. |

### bo-sh

Utility mixin for setting box-shadow.

#### Usage

```sass
@use "lumina-sass/mixins" as l-mix

.card-shadow
	@include l-mix.bo-sh(0 4px 6px rgba(0, 0, 0, 0.1))
```

### bo-props

Utility mixin for granular border configuration.

#### Usage

```sass
@use "lumina-sass/mixins" as l-mix

.custom-border
	@include l-mix.bo-props($border: 1px solid #ccc, $border-radius: 0.5rem)
```

### outline

Utility mixin for setting outline and outline offsets.

#### Usage

```sass
@use "lumina-sass/mixins" as l-mix

.focus-outline
	@include l-mix.outline($outline: 2px solid #005fcc, $outline-offset: 2px)
```

### grid-layout

Utility mixin for configuring CSS Grid containers and items with template columns, rows, template areas, gaps, and padding.

#### Usage

```sass
@use "lumina-sass/mixins" as l-mix

.dashboard
	@include l-mix.grid-layout($temp-col: 250px 1fr, $gap: 1.5rem, $temp-rows: auto 1fr auto)

.sidebar
	@include l-mix.grid-layout($grid-area: 'sidebar', $temp-rows: null)
```

#### Parameters

| Parameter | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `$temp-area` | String \| null | `null` | Grid template areas (`grid-template-areas`). |
| `$temp-col` | String \| List \| null | `null` | Grid template columns (`grid-template-columns`). |
| `$temp-rows` | String \| Length \| null | `100%` | Grid template rows (`grid-template-rows`). |
| `$gap` | Length \| null | `null` | Track gap (`gap`). |
| `$grid-area` | String \| null | `null` | Grid item placement area (`grid-area`). |
