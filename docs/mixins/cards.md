# Cards Mixin

The `card` mixin renders cards that automatically adapt to the global page background context or a specified accent color, ensuring accessible contrast using the library's design tokens.

## Usage

```sass
// Option 1: Specific module import
@use 'lumina-sass/src/mix/cards' as *;

// Option 2: General library import
@use 'lumina-sass/src/mix' as *;

// Automatically adapts to global theme background
.my-card {
    @include card();
}

// Uses a specific accent color
.accent-card {
    @include card($accent-color: blue);
}

// Custom overrides
.custom-card {
    @include card($overrides: ('background': white, 'text': black));
}
```

## Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `$accent-color` | Color\|null | (Optional) Accent color to derive card colors. Defaults to `null`. |
| `$context-bg` | Color | (Optional) Page background context if no accent color is provided. Defaults to library soft-white token. |
| `$overrides` | Map | (Optional) Map for overriding 'background' or 'text' colors. |
