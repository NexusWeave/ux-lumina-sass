# Developer Guide: Fixing `lumina-sass` Integration

This guide provides the step-by-step instructions to resolve the issues with the `lumina-sass` package integration and restore the flexbox utility classes.

## 1. Summary of the Problem

The application's flexbox styles are currently broken for two reasons:
1.  The build system is failing to import the `lumina-sass` package correctly, so none of its CSS is being included.
2.  Several Vue components are using misspelled or non-existent flexbox utility classes that are not part of the official `lumina-sass` library.

## 2. Step-by-Step Fix

### Step 1: Correct the Sass Import

To ensure Vite can correctly find and compile the `lumina-sass` package, you need to update the import statement in the main Sass file.

1.  **Open the file**: `frontend/sass/index.sass`
2.  **Replace the line** `@forward 'lumina-sass'` or `@use 'lumina-sass' as *` with the following direct relative path:

    ```scss
    @forward '../node_modules/lumina-sass/src/_index.sass';
    ```

### Step 2: Rename Mismatched Classes in Vue Components

The following files contain flexbox classes that need to be renamed to match the official `lumina-sass` naming conventions.

1.  **File**: `frontend/pages/dev.vue`
    -   **Line 6**: Change `flex-col-justify-center-align-center` to `flex-col-align-items-center-justify-center`
    -   **Line 20**: Change `flex-col-justify-center-align-center` to `flex-col-align-items-center-justify-center`

2.  **File**: `frontend/pages/personal.vue`
    -   **Line 3**: Change `flex-col-justify-center-align-center` to `flex-col-align-items-center-justify-center`

3.  **File**: `frontend/components/repository/BusinessCard.vue`
    -   **Line 10**: Change `flex-col-items-center` to `flex-col-align-items-center`

### Step 3: Add Missing Utility Classes (Optional but Recommended)

The `lumina-sass` package is missing some utility classes that were previously used. To restore full functionality, it is recommended to re-introduce your local flexbox utilities.

1.  **Open the file**: `frontend/sass/index.sass`
2.  **Add the following line** to re-enable your local flexbox classes. It's best to place this *after* the `lumina-sass` import.

    ```scss
    @forward './utils/flexbox';
    ```

After completing these steps, restart the Nuxt development server to see the changes.
