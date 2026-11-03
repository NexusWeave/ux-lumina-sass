# Core Scaffolding Mixin

The `core` mixin configures the global page background and text color, applying automated contrast, and sets base styles for common elements (`a`, `abbr`, `code`, `input`, etc.) using library tokens. It also supports accent colors and custom color maps for advanced theme configuration.

## Usage

```sass
// Option 1: Primary library import
@use 'lumina-sass/mix' as *;

// Option 2: Full library import
@use 'lumina-sass' as *;

body {
    // Automatically applies theme defaults
    @include core();
    
    // Custom theme configuration
    @include core($body-bg: #1a1a1a, $accent-color: #ff6600);
}
```

## Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `$body-bg` | Color | The background color for the page. Defaults to library `soft-white` token. |
| `$text-color` | Color\|null | The text color. Defaults to `null` (auto-calculated for best contrast). |
| `$accent-color` | Color\|null | The accent color for interactive elements (links, focus states). Defaults to `null`. |
| `$custom-colors` | Map | A map of custom color tokens to merge into the theme-colors. Defaults to `()`. |
