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

Applies a background color and automatically calculates contrasting text color.

#### Usage

```sass
@use 'lumina-sass/mixins' as l-mix

.card
	@include l-mix.background-color($bg-color: #333333)
```

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


