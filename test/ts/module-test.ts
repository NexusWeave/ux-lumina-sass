import path from 'path';
import { execSync } from 'child_process';
import { writeFileSync, mkdirSync, rmSync, existsSync } from 'fs';


const modules: string[] = ['func', 'flexbox', 'color', 'mix', 'map'];
const rootDir: string = process.cwd();
const tempDir: string = path.join(rootDir, 'test/temp-module-test');

console.log('Running: module test');

if (existsSync(tempDir)) { rmSync(tempDir, { recursive: true, force: true }); }

mkdirSync(tempDir, { recursive: true });

// Create a minimal package.json that points to the local project
writeFileSync(path.join(tempDir, 'package.json'), JSON.stringify({
    name: 'temp-test',
    type: 'module',
    dependencies: {
        'lumina-sass': `file:${rootDir}`
    }
}));

try {
    console.log('Preparing environment (npm install)...');
    execSync('npm install', { cwd: tempDir, stdio: 'pipe' });

    for (const mod of modules) {
        process.stdout.write(`Testing @use 'pkg:lumina-sass/${mod}'... `);
        const testFile: string = path.join(tempDir, `test-${mod}.sass`);
        writeFileSync(testFile, `@use 'pkg:lumina-sass/${mod}'\n.test\n  content: 'ok'`);
        
        try {
            // Using the node package importer which understands pkg: prefix and package.json exports
            execSync(`npx sass --pkg-importer=node ${testFile} ${testFile}.css`, { cwd: tempDir, stdio: 'pipe' });
            console.log('✅ PASS');
        } catch (error: any) {
            console.log('❌ FAIL');
            console.error(error.stderr?.toString() || error.message);
        }
    }

} catch (error: any) { console.error('Environment preparation failed:', error.message);
} finally {
    rmSync(tempDir, { recursive: true, force: true });
    console.log('\nmodule test complete.');
}
