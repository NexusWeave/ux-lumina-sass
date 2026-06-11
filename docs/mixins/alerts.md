# Alert Mixin

The `alert` mixin provides a reusable, accessible alert box style that automatically determines text contrast based on the background color.

## Usage

```sass
// Option 1: Specific module import
@use 'lumina-sass/src/mix/alerts' as *;
@use 'lumina-sass/src/color/alerts' as alerts;

// Option 2: General library import
@use 'lumina-sass/src/mix' as *;
@use 'lumina-sass/src/color/alerts' as alerts;

.my-alert {
    @include alert($bg-color: alerts.$warning);
}
```

## Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `$bg-color` | Color | The background color of the alert. Defaults to library warning token. |
