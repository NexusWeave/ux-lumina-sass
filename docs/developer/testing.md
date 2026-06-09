# Testing Guide
*Last updated: 2026-06-09*

This document explains how we test the code in Lumina Sass to ensure high quality. It also provides examples and a guide on what methods to use for different types of tests.

## 1. Unit Testing with Sass-True

We use [Sass-True](https://github.com/oddbird/true) to unit test our mixins and functions. This ensures that our Sass code compiles into the correct CSS.

### File Structure (Co-location)
To keep tests organized and easy to find, we place our test files in the same folder as the source files they test. All test files use the `.spec.sass` extension.

**Example structure:**
```text
src/
└── mix/
    ├── _buttons.sass
    └── _buttons.spec.sass
```

All of these individual test files are then imported into a central test runner file (`src/test/index.spec.sass`). This allows us to run all tests at the same time.

### How to Write a Sass-True Test
Here is an example of how to write a test for a mixin (e.g., in `src/mix/_buttons.spec.sass`):

```sass
@use 'sass:meta'
@use './_buttons' as buttons
@use '../../node_modules/sass-true' as true

@include true.test-module('Buttons')
  @include true.test('Applies base button styling')
    @include true.assert
      // What we output from our mixin
      @include true.output
        button
          @include buttons.base-btn()
      
      // The exact CSS we expect to see
      @include true.expect
        button
          border: none
          margin: 0.5em
          // ... the rest of the expected CSS
```

### Running the Tests
To run the unit tests, use this npm command in your terminal:
```bash
npm run test
```

---

## 2. Visual Regression Testing

Sass-True checks if the CSS code is correct, but it does not check how the website *looks* in a browser. To make sure our components look right and do not break visually, we can use visual regression testing.

Tools like **Cypress Component Testing**, **Percy**, or **BackstopJS** take screenshots of your interface. They compare new screenshots pixel-by-pixel with older, approved screenshots.

### Example: Cypress Component Testing
If you use Cypress to test how CSS components look in HTML, a test might look like this:

```javascript
describe('Button Component', () => {
  it('should render the default button correctly', () => {
    cy.visit('/demo/index.html');
    
    // Select the button and take a visual snapshot
    cy.get('button.default-btn').matchImageSnapshot('base-btn-default');
  });
});
```
This ensures that no accidental design changes are pushed to the users.

---

## 3. Manual Testing (Demo App)

Lumina Sass includes a local `demo` folder. We use this to manually check how our changes look in a browser before we publish them.

### Running the Demo
To build the CSS and start a local server for the demo app, run:
```bash
npm run dev
```
This will compile the Sass files and start a local `http-server` at `http://localhost:8080`.

---

## Overview: What to Test and How

To maintain a good balance between speed and quality, choose your testing strategy based on what you are changing:

| Type of Change | Recommended Test Method | Tool |
|----------------|-------------------------|------|
| Logic in `@function` (e.g., math) | **Unit Testing** | Sass-True |
| CSS output from `@mixin` | **Unit Testing** | Sass-True |
| Design changes (colors, spacing) | **Visual Regression Testing** | Cypress / Percy / BackstopJS |
| Exploring new components | **Manual Testing** | Demo (`npm run dev`) |
| User interaction (e.g., hover states) | **Visual Regression / Manual** | Cypress / Demo |

By combining these methods, we build a reliable code base free of logic errors, while also delivering a beautiful and consistent user interface.
