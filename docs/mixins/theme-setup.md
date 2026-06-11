# Theme Setup Mixin

The `theme-setup` mixin configures the global page background and text color, applying automated contrast, and sets base styles for common elements (`a`, `abbr`, `code`, `input`, etc.) using library tokens.

## Usage

```sass
// Option 1: Specific module import
@use 'lumina-sass/src/mix/theme-setup' as *;

// Option 2: General library import
@use 'lumina-sass/src/mix' as *;

body {
    // Automatically applies theme defaults
    @include theme-setup();
}
```

## Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `$body-bg` | Color | The background color for the page. Defaults to library soft-white token. |
| `$text-color` | Color\|null | The text color. Defaults to null (auto-calculated). |
