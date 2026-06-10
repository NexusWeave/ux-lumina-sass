import * as sass from 'sass';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

const rootDir: string = path.resolve(__dirname, '../..');
const srcDir: string = path.join(rootDir, 'src');

function getAllSassFiles(dir: string, fileList: string[] = []): string[] {
  const files: string[] = fs.readdirSync(dir);
  files.forEach((file: string) => {
    const filePath: string = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllSassFiles(filePath, fileList);
    } else if (file.endsWith('.sass')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const sassFiles: string[] = getAllSassFiles(srcDir);
let errors: number = 0;

console.log(`Checking ${sassFiles.length} Sass files for syntax and namespace validity...\n`);

sassFiles.forEach((file: string) => {
  const relativePath: string = path.relative(rootDir, file);
  try {
    sass.compile(file, {
      syntax: 'indented',
      loadPaths: [srcDir, path.join(rootDir, 'node_modules')],
      quietDeps: true,
      logger: {
        warn: () => {
          // Ignore warnings during syntax check
        }
      }
    });
    
    console.log(`✅ ${relativePath}`);
  } catch (err: any) {
    console.error(`❌ ${relativePath}`);
    console.error(err.message);
    errors++;
  }
});

if (errors > 0) {
  console.error(`\nFound ${errors} syntax/import errors in Sass files.`);
  process.exit(1);
} else {
  console.log('\nAll Sass files passed syntax and namespace validation.');
  process.exit(0);
}
