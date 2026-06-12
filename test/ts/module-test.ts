import path from 'path';
import { execSync } from 'child_process';
import { writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';

const MODULES: string[] = ['func', 'flexbox', 'color', 'mix', 'map'];
const ROOT_DIR: string = process.cwd();
const TEMP_DIR: string = path.join(ROOT_DIR, 'test/temp-module-test');

function runModuleTests(): void {
  console.log('Running: module test');

  if (existsSync(TEMP_DIR)) {
    rmSync(TEMP_DIR, { recursive: true, force: true });
  }

  mkdirSync(TEMP_DIR, { recursive: true });

  // Create a minimal package.json that points to the local project
  writeFileSync(path.join(TEMP_DIR, 'package.json'), JSON.stringify({
    name: 'temp-test',
    type: 'module',
    dependencies: {
      'lumina-sass': `file:${ROOT_DIR}`
    }
  }, null, 2));

  let hasFailures = false;

  try {
    console.log('Preparing environment (npm install)...');
    execSync('npm install', { cwd: TEMP_DIR, stdio: 'pipe' });

    for (const mod of MODULES) {
      process.stdout.write(`Testing @use 'pkg:lumina-sass/${mod}'... `);
      const testFile: string = path.join(TEMP_DIR, `test-${mod}.sass`);
      writeFileSync(testFile, `@use 'pkg:lumina-sass/${mod}'\n.test\n  content: 'ok'`);
      
      try {
        // Using the node package importer which understands pkg: prefix and package.json exports
        execSync(`npx sass --pkg-importer=node ${testFile} ${testFile}.css`, { cwd: TEMP_DIR, stdio: 'pipe' });
        console.log('✅ PASS');
      } catch (error: any) {
        console.log('❌ FAIL');
        console.error(error.stderr?.toString() || error.message);
        hasFailures = true;
      }
    }
  } catch (error: any) {
    console.error('Environment preparation failed:', error.message);
    hasFailures = true;
  } finally {
    rmSync(TEMP_DIR, { recursive: true, force: true });
    console.log('\nModule test complete.');
    process.exit(hasFailures ? 1 : 0);
  }
}

runModuleTests();
