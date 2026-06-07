# Testing Guide

Lumina Sass uses [sass-true](https://github.com/oddbird/true) for unit testing Sass mixins and functions. This ensures that our generators produce the expected CSS output.

## Test Structure

Tests are located in `src/test/` and use the `.spec.sass` extension.
- `src/test/mixins.spec.sass`: Unit tests for core mixins like `icon-generator` and `input-generator`.

## Writing Tests

We use a BDD-style syntax provided by `sass-true`.

### Example: Testing a Mixin

```sass
@use '../../node_modules/sass-true' as true
@use '../mix/generators' as generators

@include true.test-module('My Mixin')
  @include true.test('Should output specific CSS')
    @include true.assert
      @include true.output
        @include generators.my-mixin()
      
      @include true.expect
        .my-class
          color: red
```

### Key Mixins
- `test-module($name)`: Groups related tests.
- `test($description)`: Defines an individual test case.
- `assert`: Starts an assertion block.
- `output`: Wraps the actual mixin call.
- `expect`: Wraps the expected CSS block.

## Running Tests

### Command Line
To run all Sass tests, use the following npm script:

```bash
npm test
```

This command runs `sass src/test/mixins.spec.sass src/test/mixins.spec.css`.

### Verifying Results
Since `sass-true` compiles tests into CSS, you can verify the results in two ways:
1. **Console Output**: During compilation, Sass will output `Debug` messages indicating how many tests passed or failed.
2. **CSS Inspection**: Open the generated `.spec.css` file. `sass-true` inserts comments indicating `ASSERT`, `OUTPUT`, and `EXPECTED` blocks to help you debug mismatches.

## Best Practices
- **Isolation**: Import only the necessary modules for each test file to keep compilation fast.
- **Precision**: Ensure your `expect` block exactly matches the generated output, including whitespace and property order (Sass usually alphabetizes or preserves source order depending on the version).
- **Automation**: Always run `npm test` before pushing changes to ensure no regressions were introduced in the generators.
