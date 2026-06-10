# Testing Guide
*Last updated: 2026-06-10*

This document outlines the comprehensive testing strategy for Lumina Sass, ensuring adherence to rigorous quality standards. It provides practical examples and serves as a definitive guide for selecting appropriate testing methodologies across various scenarios.

## Executing the Test Suite

Lumina Sass utilizes a consolidated testing workflow that validates Sass logic, syntax integrity, and package exports in a single pass. To execute the entire suite, run:

```bash
npm test
```

This command sequentially executes:
1.  **Sass Unit Tests** (Sass-True)
2.  **Sass Syntax & Namespace Validation** (Custom TypeScript checker)
3.  **Module Integration Testing** (Sub-module export verification)

---

## Unit Testing with Sass-True

We utilize [Sass-True](https://github.com/oddbird/true) to perform unit tests on our mixins and functions. This ensures that our Sass codebase compiles into the expected CSS output.

### Organization
To maintain a clean production package, tests are isolated within the `test/` directory.

**Example Structure:**
```text
test/
├── index.spec.sass    # Main test file
└── mix/
    └── _buttons.spec.sass
```

The primary test file (`test/index.spec.sass`) aggregates all individual test specifications.

### Writing Sass-True Tests
The following example demonstrates a test for a button mixin (located in `test/mix/_buttons.spec.sass`):

```sass
@use 'sass:meta'
@use '../../src/mix/_buttons' as buttons
@use '../../node_modules/sass-true' as true

@include true.test-module('Buttons')
  @include true.test('Applies base button styling')
    @include true.assert
      // The output from our mixin
      @include true.output
        button
          @include buttons.base-btn()
      
      // The expected CSS output
      @include true.expect
        button
          border: none
          margin: 0.5em
          // ... other expected CSS rules
```

---

## Sass Syntax & Namespace Validation

Because modern Sass Module namespaces (e.g., `@use 'foo' as bar; @include bar.mixin()`) are not supported by legacy Stylelint parsers for indented syntax, we utilize a custom validation script (`test/ts/syntax-check.ts`).

This script is written in TypeScript and utilizes the official Dart Sass compiler to programmatically verify that every `.sass` file in the `src/` directory is syntactically valid and that all namespace imports resolve correctly.

---

## Module Integration Testing

To ensure that the published package structure and sub-module exports (defined in `package.json`) function correctly for end-users, we perform automated integration tests.

The module test script (`test/ts/module-test.ts`) scaffolds a temporary project, installs the local `lumina-sass` package, and verifies that each public sub-module can be imported using the `pkg:` prefix.

---

## Accessibility (WCAG) Contrast Checks

Lumina Sass incorporates automated utilities to verify that color combinations satisfy WCAG AA standards.

### Contrast Utilities
The architectural logic for determining luminance and contrast ratios is implemented within the `src/func/color.sass` module, while the `assert-contrast` mixin is available through the `src/mix/contrast.sass` module.

### Integration in Tests
The `assert-contrast` mixin can be utilized to prevent successful builds or test completions if color contrast falls below acceptable thresholds:

```sass
@use '../src/mix/contrast'

.my-component
  background: $bg-color
  color: $fg-color
  @include contrast.assert-contrast($fg-color, $bg-color)
```

---

## Visual Regression Testing

While Sass-True validates the generated CSS code, it does not account for visual representation within a browser. To ensure visual fidelity, we implement visual regression testing.

Instruments such as **Cypress Component Testing**, **Percy**, or **BackstopJS** capture interface snapshots and perform comparisons against established baselines.

### Example: Cypress Component Testing
When utilizing Cypress to validate component rendering in HTML, a test may be structured as follows:

```javascript
describe('Button Component', () => {
  it('should render the default button correctly', () => {
    cy.visit('/demo/index.html');
    
    // Validate the component and capture a snapshot
    cy.get('button.default-btn').matchImageSnapshot('base-btn-default');
  });
});
```

---

## Manual Verification (Demo Application)

Lumina Sass includes a dedicated `demo` environment, allowing developers to manually inspect changes within a browser prior to publication.

### Launching the Demo
To compile the CSS and initiate the local development server, execute:
```bash
npm run dev
```
This process builds the Sass files and serves the application at `http://localhost:8080`.

---

## Testing Strategy Overview

To achieve an optimal balance between development velocity and software quality, select the appropriate testing methodology based on the nature of the change:

| Nature of Change | Recommended Methodology | Tools |
|-------------------|-------------------------|---------|
| Logic in `@function` | **Unit Testing** | Sass-True |
| CSS output from `@mixin` | **Unit Testing** | Sass-True |
| Aesthetic modifications | **Visual Regression Testing** | Cypress / Percy / BackstopJS |
| New component | **Manual Verification** | Demo (`npm run dev`) |
| Interactive elements | **Visual / Manual** | Cypress / Demo |
| Accessibility compliance | **Contrast Checks** | `assert-contrast` mixin |
| Code quality standards | **Syntax Validation** | `test/ts/syntax-check.ts` |
| Package exports | **Integration Testing** | `test/ts/module-test.ts` |

By integrating these methodologies, we establish a robust codebase free of logical discrepancies while maintaining a consistent user interface.
