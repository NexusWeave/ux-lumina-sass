import { execSync } from 'child_process';
import { existsSync } from 'fs';

function checkDependencyWarnings(): void {
  console.log('Checking for SASS dependency warnings...');

  try {
    const targetFile = existsSync('demo/style.sass') ? 'demo/style.sass' : 'src/_index.sass';
    const output: string = execSync(`npx sass ${targetFile} 2>&1`, { encoding: 'utf-8' });
    
    if (output.toLowerCase().includes('warning:')) {
      console.error('❌ FAIL: SASS Dependency warnings detected.');
      console.error(output);
      process.exit(1);
    }
    
    console.log('✅ PASS: No dependency warnings detected.');
  } catch (error: any) {
    const output: string = error.stdout || error.stderr || error.message;
    if (output.toLowerCase().includes('warning:')) {
      console.error('❌ FAIL: SASS Dependency warnings detected during build failure.');
    } else {
      console.error('❌ FAIL: Build failed for another reason.');
    }
    console.error(output);
    process.exit(1);
  }
}

checkDependencyWarnings();
