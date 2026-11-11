import path from 'path';
import * as sass from 'sass';
import { runSass } from 'sass-true';
import { fileURLToPath } from 'url';
import { describe, it, expect } from 'vitest';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sassTestFile = path.resolve(__dirname, 'index.spec.sass');

runSass(
  { describe, it, sass }, sassTestFile,
  {
    loadPaths: [ path.resolve(__dirname, '..'), path.resolve(__dirname, '../src'), path.resolve(__dirname, '../node_modules')],
    importers: [new sass.NodePackageImporter(path.resolve(__dirname, '..'))]
  }
);

describe('WCAG Contrast Warning Assertions', () => {
  it('emits an accessibility warning when background-color contrast fails WCAG AA', () => {
    const invalidSass = `
      @use 'src/mix/utilities' as utilities;
      .failing-element {
        @include utilities.background-color(#ffffff, #ffff00);
      }
    `;

    const warnings: string[] = [];
    sass.compileString(invalidSass, {
      syntax: 'scss',
      logger: { warn(message) { warnings.push(message); } },
      loadPaths: [
        path.resolve(__dirname, '..'),
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../node_modules')
      ]
    });

    expect(warnings.some(w => /Accessibility Failure.*WCAG/i.test(w))).toBe(true);
  });

  it('emits an accessibility warning indicating WCAG AAA when threshold >= 7 is evaluated', () => {
    const aaaFailingSass = `
      @use 'src/mix/contrast' as contrast;
      .failing-element {
        // #60a5fa against #ffffff has ratio ~2.4:1, which fails AAA threshold of 7.0
        @include contrast.assert-contrast(#60a5fa, #ffffff, $threshold: 7.0);
      }
    `;

    const warnings: string[] = [];
    sass.compileString(aaaFailingSass, {
      syntax: 'scss',
      logger: { warn(message) { warnings.push(message); } },
      loadPaths: [
        path.resolve(__dirname, '..'),
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../node_modules')
      ]
    });

    expect(warnings.some(w => /Accessibility Failure.*WCAG AAA/i.test(w))).toBe(true);
  });

  it('emits a WCAG AAA warning when assert-contrast-aaa fails on normal font size', () => {
    const aaaMixinSass = `
      @use 'src/mix/contrast' as contrast;
      .failing-class {
        // #687280 on white is ~4.8:1, fails AAA (requires 7.0:1 for normal text)
        @include contrast.assert-contrast-aaa(#687280, #ffffff);
      }
    `;

    const warnings: string[] = [];
    sass.compileString(aaaMixinSass, {
      syntax: 'scss',
      logger: { warn(message) { warnings.push(message); } },
      loadPaths: [
        path.resolve(__dirname, '..'),
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../node_modules')
      ]
    });

    expect(warnings.some(w => /Accessibility Failure.*WCAG AAA/i.test(w))).toBe(true);
  });

  it('passes assert-contrast-aaa without warnings when font is large (4.8:1 >= 4.5:1 large threshold)', () => {
    const aaaLargeSass = `
      @use 'src/mix/contrast' as contrast;
      .passing-large-class {
        // #687280 on white is ~4.8:1, passes AAA for large font (>= 1.5rem threshold is 4.5:1)
        @include contrast.assert-contrast-aaa(#687280, #ffffff, $size: 2rem);
      }
    `;

    const warnings: string[] = [];
    sass.compileString(aaaLargeSass, {
      syntax: 'scss',
      logger: { warn(message) { warnings.push(message); } },
      loadPaths: [
        path.resolve(__dirname, '..'),
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../node_modules')
      ]
    });

    expect(warnings.some(w => /Accessibility Failure/i.test(w))).toBe(false);
  });

  it('validates WCAG AAA directly inside typography font mixin', () => {
    const fontMixinSass = `
      @use 'src/mix/typography' as typo;
      .typography-class {
        @include typo.font($size: 1rem, $color: #687280, $background: #ffffff, $contrast: 'AAA');
      }
    `;

    const warnings: string[] = [];
    sass.compileString(fontMixinSass, {
      syntax: 'scss',
      logger: { warn(message) { warnings.push(message); } },
      loadPaths: [
        path.resolve(__dirname, '..'),
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../node_modules')
      ]
    });

    expect(warnings.some(w => /Accessibility Failure.*WCAG AAA/i.test(w))).toBe(true);
  });

  it('emits an accessibility notice when background is transparent', () => {
    const transparentSass = `
      @use 'src/mix/contrast' as contrast;
      .transparent-element {
        @include contrast.assert-contrast(#ffffff, transparent);
      }
    `;

    const warnings: string[] = [];
    sass.compileString(transparentSass, {
      syntax: 'scss',
      logger: { warn(message) { warnings.push(message); }},
      loadPaths: [
        path.resolve(__dirname, '..'),
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../node_modules')
      ]
    });

    expect(warnings.some(w => /WCAG Accessibility Notice: The background was specified as/i.test(w))).toBe(true);
  });

  it('suppresses accessibility notice for transparent background when suppress is true', () => {
    const suppressedSass = `
      @use 'src/mix/contrast' as contrast;
      .suppressed-element {
        @include contrast.assert-contrast(#ffffff, transparent, $suppress: true);
      }
    `;

    const warnings: string[] = [];
    sass.compileString(suppressedSass, {
      syntax: 'scss',
      logger: { warn(message) { warnings.push(message); }},
      loadPaths: [
        path.resolve(__dirname, '..'),
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../node_modules')
      ]
    });

    expect(warnings.some(w => /WCAG Accessibility Notice/i.test(w))).toBe(false);
  });
});
