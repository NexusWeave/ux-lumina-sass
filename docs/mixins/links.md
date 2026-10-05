# Links
*Last updated: 2026-06-11*

The `elements` module provides mixins for styling fundamental HTML elements like links.

## Mixins

### link-color

The `link-color` mixin applies theme-aware colors to anchor tags, handling hover, active, visited, and disabled states.

#### Usage

```sass
@use 'lumina-sass/mix' as *;

.my-nav {
  @include link-color($color: #0078d7, $color-hover: #005a9e);
}
```

#### Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `$color` | Color | Base link color. Defaults to `light-blue-contrast`. |
| `$color-hover` | Color | Hover state color. Defaults to 13% darker than base. |
| `$color-active` | Color | Active state color. Defaults to 20% darker than base. |
| `$color-visited` | Color | Visited state color. Defaults to base color. |
| `$bg-color` | Color/String | Background color links sit on (used for contrast check). Defaults to `transparent`. |
| `$suppress-notice` | Boolean | Suppresses accessibility notice for transparent/inherited backgrounds. Defaults to `false`. |
