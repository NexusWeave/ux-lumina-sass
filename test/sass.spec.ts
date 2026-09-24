import { describe, it } from 'vitest';
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
