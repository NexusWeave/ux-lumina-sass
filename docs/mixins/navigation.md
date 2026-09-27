# Navigation

The `navigation` module provides mixins for responsive mobile/desktop navigation components including hamburger toggle buttons.

## Mixins

### l-hamburg / nav-hamburg

Generates responsive hamburger navigation toggle button for screens `<= 64rem` (1024px, `tablet-landscape` and down). Hidden on larger desktop screens.

#### Usage

```sass
@use 'lumina-sass/mixins' as l-mix

.hamburger-toggle
	@include l-mix.l-hamburg($bg-color: transparent, $color: #ffffff, $top: 1rem, $right: 1rem)
```

#### Parameters

- `$bg-color`: Color - Background color of the hamburger button. Defaults to `transparent`.
- `$color`: Color - Icon and text color for child `b` and `span` tags. Defaults to `#ffffff`.
- `$top`: Length - Fixed top offset position. Defaults to `1rem`.
- `$right`: Length - Fixed right offset position. Defaults to `1rem`.
