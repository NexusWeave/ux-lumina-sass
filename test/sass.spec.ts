import { describe, it, expect } from 'vitest';
import * as sass from 'sass';
import { runSass } from 'sass-true';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sassTestFile = path.resolve(__dirname, 'index.spec.sass');

runSass(
  { describe, it, sass },
  sassTestFile,
  {
    loadPaths: [
      path.resolve(__dirname, '..'),
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../node_modules')
    ],
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
      logger: {
        warn(message) {
          warnings.push(message);
        }
      },
      loadPaths: [
        path.resolve(__dirname, '..'),
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../node_modules')
      ]
    });

    expect(warnings.some(w => /Accessibility Failure.*WCAG/i.test(w))).toBe(true);
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
      logger: {
        warn(message) {
          warnings.push(message);
        }
      },
      loadPaths: [
        path.resolve(__dirname, '..'),
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../node_modules')
      ]
    });

    expect(warnings.some(w => /WCAG Accessibility Notice: The background was specified as/i.test(w))).toBe(true);
  });

  it('suppresses accessibility notice for transparent background when suppress-notice is true', () => {
    const suppressedSass = `
      @use 'src/mix/contrast' as contrast;
      .suppressed-element {
        @include contrast.assert-contrast(#ffffff, transparent, $suppress-notice: true);
      }
    `;

    const warnings: string[] = [];
    sass.compileString(suppressedSass, {
      syntax: 'scss',
      logger: {
        warn(message) {
          warnings.push(message);
        }
      },
      loadPaths: [
        path.resolve(__dirname, '..'),
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../node_modules')
      ]
    });

    expect(warnings.some(w => /WCAG Accessibility Notice/i.test(w))).toBe(false);
  });
});
