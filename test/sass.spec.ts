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

describe('WCAG Contrast Error Assertions', () => {
  it('throws an accessibility error when background-color contrast fails WCAG AA', () => {
    const invalidSass = `
      @use 'src/mix/utilities' as utilities;
      .failing-element {
        @include utilities.background-color(#ffffff, #ffff00);
      }
    `;

    expect(() => {
      sass.compileString(invalidSass, {
        syntax: 'scss',
        loadPaths: [
          path.resolve(__dirname, '..'),
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, '../node_modules')
        ]
      });
    }).toThrowError(/Accessibility Failure.*WCAG/i);
  });
});
