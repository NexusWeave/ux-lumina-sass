# Alert Mixin

The `alert` mixin provides a reusable, accessible alert box style that automatically determines text contrast based on the background color.

## Usage

```sass
// Primary library import
@use 'lumina-sass/mix' as *;
@use 'lumina-sass/color' as alerts;

.my-alert {
    @include alert($bg-color: alerts.$warning);
}
```

## Alert Tokens

The following color tokens are available for alerts in `src/color/alerts.sass`:

| Token | Value | Description |
| :--- | :--- | :--- |
| `$warning` | `rgb(255, 193, 7)` | Yellow warning color. |
| `$error` | `rgb(220, 53, 69)` | Red error color. |
| `$info` | `rgb(13, 202, 240)` | Blue informational color. |
| `$success` | `rgb(25, 135, 84)` | Green success color. |
| `$disabled` | `rgb(160, 160, 160)` | Grey disabled color. |

## Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `$bg-color` | Color | The background color of the alert. Defaults to library warning token. |
| `$text-color` | Color \| null | Optional text color override. Defaults to `null` (auto-calculated). |
| `$icon` | String \| null | Optional icon name (e.g., 'warning', 'success', 'info', 'error'). Defaults to `null`. |
| `$inline-size` | String | The inline size of the alert. Defaults to `35rem`. |
| `$icon-size` | Number | The font size of the icon. Defaults to `2rem`. |
