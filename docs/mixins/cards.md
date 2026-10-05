# Cards Mixin

The `card` mixin renders cards with customizable shapes, padding, borders, shadows, transitions, background, and text colors.

## Usage

```sass
@use 'lumina-sass/mix' as *;

// Basic card with background and text color
.my-card
    @include card($bg-color: #fff, $color: #333)

// Circle card with shape and padding
.circle-card
    @include card($bg-color: #f7f7f7, $color: #111, $shape: 'circle', $padding: 1.5rem)

// Card with custom border and shadow
.shadow-card
    @include card($bg-color: #fff, $color: #222, $border: 1px solid #ddd, $box-shadow: 0 4px 6px rgba(0,0,0,0.1))
```

## Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `$border` | String\|null | (Optional) Card border definition. Defaults to `null`. |
| `$margin` | Length\|String\|null | (Optional) Card margin using logical margin utilities. Defaults to `null`. |
| `$padding` | Length\|String\|null | (Optional) Card padding. Defaults to `null`. |
| `$shape` | String | (Optional) Shape of the card: `'square'`, `'circle'`, `'rectangle'`, or `'triangle'`. Defaults to `'square'`. |
| `$box-shadow` | String\|null | (Optional) Card box shadow style. Defaults to `null`. |
| `$transition` | String\|List\|null | (Optional) Card transition style. Defaults to `null`. |
| `$color` | Color\|null | (Optional) Card text color. Defaults to `null`. |
| `$bg-color` | Color\|null | (Optional) Card background color. Defaults to `null`. |
| `$suppress` | Boolean | (Optional) Suppresses accessibility notice for transparent/inherited backgrounds. Defaults to `false`. |
