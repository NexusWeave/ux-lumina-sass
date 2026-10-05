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

- `$all`: Boolean - Resets all supported CSS properties simultaneously. Defaults to `false`.
- `$box-sizing`: Boolean - Sets `box-sizing: border-box`. Defaults to `false`.
- `$margin`: Boolean - Resets `margin`, `margin-block`, and `margin-inline` to `0`. Defaults to `false`.
- `$padding`: Boolean - Resets `padding`, `padding-block`, and `padding-inline` to `0`. Defaults to `false`.
- `$border`: Boolean - Resets `border` to `none`. Defaults to `false`.
- `$outline`: Boolean - Resets `outline` to `0` and `outline-color: transparent`. Defaults to `false`.
- `$font`: Boolean - Resets `font: inherit`, `font-size: 100%`, `font-weight: normal`, `line-height: inherit`. Defaults to `false`.
- `$color`: Boolean - Resets `color: inherit`. Defaults to `false`.
- `$background`: Boolean - Resets background to `transparent` with `background-image: none`. Defaults to `false`.
- `$button`: Boolean - Resets native button styles (`border: none`, `outline: 0`, `color: inherit`, `background: transparent`, `font: inherit`, `cursor: pointer`, `appearance: none`). Defaults to `false`.
- `$list-style`: Boolean - Resets `list-style: none`. Defaults to `false`.
- `$text-decoration`: Boolean - Resets `text-decoration: none`. Defaults to `false`.
- `$size`: Boolean - Resets logical dimensions (`inline-size: auto`, `block-size: auto`, `max-inline-size: 100%`, `max-block-size: 100%`). Defaults to `false`.
- `$appearance`: Boolean - Sets `appearance: none`. Defaults to `false`.
- `$vertical-align`: Boolean - Sets `vertical-align: baseline`. Defaults to `false`.
- `$user-select`: Boolean - Sets `user-select: auto`. Defaults to `false`.
- `$cursor`: Boolean - Sets `cursor: auto`. Defaults to `false`.
- `$position`: Boolean - Resets `position: static`, `top: auto`, `right: auto`, `bottom: auto`, `left: auto`, `inset: auto`, `z-index: auto`. Defaults to `false`.
- `$html-elements`: Boolean - Applies default base styling resets for `abbr` and `code`. Defaults to `false`.
- `$text`: Color - Base text color for `abbr` resets. Defaults to `$dark-grey`.
- `$colors`: Map - Optional color map for `abbr-underline` and `code-bg`. Defaults to `()`.

### margin

Sets element margins using physical or logical properties.

#### Usage

```sass
@use 'lumina-sass/mixins' as l-mix

.card
	@include l-mix.margin($block: 1rem, $inline: auto)
	@include l-mix.margin($b-start: 2rem)
```

### margin-center

Convenience helper to center an element horizontally using logical `margin-inline`.

#### Usage

```sass
@use 'lumina-sass/mixins' as l-mix

.container
	@include l-mix.margin-center($block: 2rem)
```

### background-color

Applies a background color and automatically calculates contrasting text color. When explicit text color is provided, verifies WCAG AA contrast compliance (emitting a warning if below 4.5:1, or a notice if the background/text is transparent or inherit).

#### Usage

```sass
@use 'lumina-sass/mixins' as l-mix

.card
	@include l-mix.background-color($bg-color: #333333)

.transparent-box
	@include l-mix.background-color(transparent, #ffffff, $suppress-notice: true)
```

#### Parameters

- `$bg-color`: Color|String - The background color. Defaults to `c.$soft-white`.
- `$text-color`: Color|String|null - Optional text color. Automatically calculated using best contrast if null.
- `$threshold`: Number - Minimum contrast ratio. Defaults to `4.5` (WCAG AA).
- `$suppress-notice`: Boolean - Suppresses compile-time notice for `transparent` or `inherit` surfaces. Defaults to `false`.

### size

Sets CSS logical dimensions (`inline-size` and `block-size`), with optional `min-*` and `max-*` constraints.

#### Usage

```sass
@use 'lumina-sass/mixins' as l-mix

.card-container
	@include l-mix.size($inline: 100%, $block: 20rem, $min-inline: 320px, $max-inline: 1200px)
```

### min-size

Sets logical minimum dimensions (`min-inline-size` and `min-block-size`).

#### Usage

```sass
@use 'lumina-sass/mixins' as l-mix

.card-box
	@include l-mix.min-size($inline: 15rem, $block: 8rem)
```

### max-size

Sets logical maximum dimensions (`max-inline-size` and `max-block-size`).

#### Usage

```sass
@use 'lumina-sass/mixins' as l-mix

.modal-content
	@include l-mix.max-size($inline: 40rem, $block: 90vh)
```

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

- `$transition`: String|List|null - Full transition shorthand, or null when using sub-properties. Required parameter without default.
- `$property`: String|List - Target CSS property to transition. Defaults to `null`.
- `$duration`: Length|String - Duration value. Defaults to `null`.
- `$timing-function`: String - Timing function curve. Defaults to `null`.
- `$delay`: Length|String - Delay time before start. Defaults to `null`.
- `$behavior`: String - Transition behavior mode (e.g. `allow-discrete`). Defaults to `null`.

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
	@include l-mix.aspect-ratio($width: 4, $length: 3, $object-fit: contain, $border-radius: 0.5rem)
```

#### Parameters

- `$width`: Number - Aspect ratio width component. Defaults to `16`.
- `$length`: Number - Aspect ratio height/length component. Defaults to `9`.
- `$object-fit`: String - CSS `object-fit` value (`cover`, `contain`, `fill`, etc.). Defaults to `cover`.
- `$border-radius`: Length|String|null - Optional border radius to apply. Defaults to `null`.



### appearance

Cross-browser appearance mixin managing standard and vendor-prefixed properties (`appearance`, `-moz-appearance`, `-webkit-appearance`).

#### Usage

```sass
@use "lumina-sass/mixins" as l-mix

.custom-select
	@include l-mix.appearance(none)
```

#### Parameters

- `$appearance`: String - CSS appearance property value (`none`, `auto`, etc.). Defaults to `none`.

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

- `$border`: String|List|null - CSS border shorthand. Defaults to `null`.
- `$border-color`: Color|String|null - CSS border color. Defaults to `null`.
- `$border-width`: Length|String|null - CSS border width. Defaults to `null`.
- `$border-style`: String|null - CSS border style. Defaults to `null`.
- `$border-radius`: Length|List|null - CSS border radius. Defaults to `null`.
- `$border-top`: String|List|null - CSS top border. Defaults to `null`.
- `$border-right`: String|List|null - CSS right border. Defaults to `null`.
- `$border-bottom`: String|List|null - CSS bottom border. Defaults to `null`.
- `$border-left`: String|List|null - CSS left border. Defaults to `null`.
- `$border-block`: String|List|null - CSS logical block border. Defaults to `null`.
- `$border-inline`: String|List|null - CSS logical inline border. Defaults to `null`.
- `$outline`: String|List|null - CSS outline shorthand. Defaults to `null`.
- `$outline-color`: Color|String|null - CSS outline-color rule. Defaults to `null`.
- `$outline-style`: String|null - CSS outline style. Defaults to `null`.
- `$outline-width`: Length|String|null - CSS outline width. Defaults to `null`.
- `$outline-offset`: Length|null - CSS outline-offset distance. Defaults to `null`.
- `$box-shadow`: String|List|null - CSS box-shadow property. Defaults to `null`.

### border-radius

Utility mixin for setting border-radius using standard rem units or custom curves.

#### Usage

```sass
@use "lumina-sass/mixins" as l-mix

.avatar
	@include l-mix.border-radius(50%)

.card-box
	@include l-mix.border-radius(0.5rem)
```

#### Parameters

- `$radius`: Length|List - CSS border radius value or list of corner radii.

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

- `$temp-area`: String|null - Grid template areas (`grid-template-areas`). Defaults to `null`.
- `$temp-col`: String|List|null - Grid template columns (`grid-template-columns`). Defaults to `null`.
- `$temp-rows`: String|Length|null - Grid template rows (`grid-template-rows`). Defaults to `100%`.
- `$gap`: Length|null - Track gap (`gap`). Defaults to `null`.
- `$grid-area`: String|null - Grid item placement area (`grid-area`). Defaults to `null`.
