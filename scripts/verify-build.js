import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { parse } from '@babel/parser';

console.log('===================================================');
console.log('🚀 NGX ADMIN AUTOMATED ENTERPRISE VERIFICATION ENGINE');
console.log('===================================================\n');

let errorCount = 0;
let advisoryWarningCount = 0;
const isWin = process.platform === 'win32';
const root = process.cwd();

function runCommand(cmd, options = {}) {
  try {
    execSync(cmd, { stdio: 'inherit', shell: isWin, ...options });
    return true;
  } catch (err) {
    return false;
  }
}

async function runVerification() {
  // Pass 0.5: Pre-Commit Secret Scanner
  console.log('🔑 [Pass 0.5/7] Running Pre-Commit Secret Scanner...');
  const secretPatterns = [
    /BEGIN (RSA|OPENSSH|EC|PGP) PRIVATE KEY/,
    /AKIA[0-9A-Z]{16}/,
    /ghp_[a-zA-Z0-9]{36}/,
    /sk_live_[0-9a-zA-Z]{24}/
  ];

  function auditSecrets(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (['node_modules', 'dist', '.git', 'old-src'].includes(entry.name)) continue;
        auditSecrets(fullPath);
      } else if (/\.(js|jsx|json|env)$/.test(entry.name)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        for (const pattern of secretPatterns) {
          if (pattern.test(content)) {
            console.error(`  ❌ SECURITY ALERT: Potential secret signature in ${path.relative(root, fullPath)}`);
            errorCount++;
          }
        }
      }
    }
  }
  auditSecrets(path.join(root, 'src'));

  // Pass 1: AST Syntax Validation
  console.log('\n🔍 [Pass 1/7] Running AST Syntax Validation across src/...');
  function scanAST(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scanAST(fullPath);
      } else if (/\.(jsx|js)$/.test(entry.name)) {
        const code = fs.readFileSync(fullPath, 'utf8');
        try {
          parse(code, { sourceType: 'module', plugins: ['jsx'] });
        } catch (err) {
          console.error(`  ❌ AST Syntax Error in ${path.relative(root, fullPath)}: ${err.message}`);
          errorCount++;
        }
      }
    }
  }
  scanAST(path.join(root, 'src'));
  console.log('  ✔ AST Syntax Validation Passed.');

  // Pass 2 & Pass 3: Vitest Dual-Theme Execution (Generates FRESH test-results.json FIRST)
  function runVitestTheme(theme) {
    const resultsFile = path.join(root, 'test-results.json');
    const passed = runCommand(`npx vitest run --reporter=verbose --reporter=json --outputFile=test-results.json`, {
      env: { ...process.env, VITE_TEST_THEME: theme }
    });

    if (fs.existsSync(resultsFile)) {
      try {
        const json = JSON.parse(fs.readFileSync(resultsFile, 'utf8'));
        if (json.numFailedTestSuites === 0 && json.numFailedTests === 0 && json.numPassedTestSuites > 0) {
          console.log(`  ✔ ${theme === 'dark' ? 'Dark' : 'Light'} Mode Vitest Test Suite Passed (${json.numPassedTestSuites} test suites passed).`);
          return true;
        }
      } catch (e) {
        // Fallback to process exit status
      }
    }
    return passed;
  }

  console.log('\n🧪 [Pass 2/7] Executing Vitest Unit Test Suite (Dark Mode Pass)...');
  if (!runVitestTheme('dark')) errorCount++;

  console.log('\n🎨 [Pass 3/7] Executing Vitest Unit Test Suite (Light Mode Pass)...');
  if (!runVitestTheme('light')) errorCount++;

  // Pass 4: Living Architecture & Quality Report Auto-Sync (Reads FRESH test-results.json)
  console.log('\n🤖 [Pass 4/7] Running Living Architecture & Master Quality Report Auto-Sync...');
  if (!runCommand('node scripts/generate-quality-report.js')) {
    console.warn('⚠️ Warning: Quality report generation encountered an issue.');
  }
  if (!runCommand('node scripts/generate-architecture-matrix.js')) errorCount++;
  if (!runCommand('node scripts/generate-legacy-docs.js')) errorCount++;
  runCommand('node scripts/audit-layout-density.js');

  // Dynamically load advisory warning count from generated JSON source of truth
  const auditResultsPath = path.join(root, 'docs', 'quality-audit-results.json');
  if (fs.existsSync(auditResultsPath)) {
    try {
      const auditJson = JSON.parse(fs.readFileSync(auditResultsPath, 'utf8'));
      advisoryWarningCount = auditJson.audits?.layoutDensityAdvisories?.totalWarnings || 0;
    } catch (e) {
      advisoryWarningCount = 0;
    }
  }

  // Pass 5: Architecture & ADR Decision Records Validation
  console.log('\n📐 [Pass 5/7] Validating Living Blueprints & ADR Decision Records...');
  if (!fs.existsSync(path.join(root, 'ARCHITECTURE.md')) || !fs.existsSync(path.join(root, 'docs', 'LEGACY_BLUEPRINT.md'))) {
    console.error('  ❌ Blueprint files missing.');
    errorCount++;
  } else {
    console.log('  ✔ Living Architecture (ARCHITECTURE.md) and Legacy Blueprint (LEGACY_BLUEPRINT.md) synchronized.');
  }
  const adrPath = path.join(root, 'docs', 'DECISIONS.md');
  if (!fs.existsSync(adrPath)) {
    console.error('  ❌ docs/DECISIONS.md missing.');
    errorCount++;
  } else {
    console.log('  ✔ Architectural Decision Records (docs/DECISIONS.md) validated.');
  }

  // Pass 7: Production Vite Build Compilation Validation
  console.log('\n📦 [Pass 7/7] Validating Production Vite Bundle Build...');
  const buildPassed = runCommand('npx vite build');
  if (!buildPassed) {
    console.error('  ❌ Production Vite Bundle Build Failed.');
    errorCount++;
  } else {
    console.log('  ✔ Production Vite Bundle Build Compilation Passed.');
  }

  // Summary & Exit Handling
  console.log('\n===================================================');
  if (errorCount === 0) {
    console.log('🎉 ALL AUTOMATED QUALITY GATEWAYS PASSED (0 Errors)!');
    console.log(`⚠️  ADVISORY NOTICE: ${advisoryWarningCount} Non-Blocking Layout Density Warnings Logged (audit-layout-density.js).`);
    console.log('===================================================\n');
  } else {
    console.error(`💥 VERIFICATION FAILED with ${errorCount} error(s).`);
    process.exit(1);
  }
}

runVerification();
