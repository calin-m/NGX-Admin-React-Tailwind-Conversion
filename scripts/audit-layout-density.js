import fs from 'fs';
import path from 'path';
import { scanDirectory } from './lib/ast-parser.js';

const rootDir = process.cwd();
const srcDir = path.join(rootDir, 'src', 'components');

const files = scanDirectory(srcDir, [], rootDir).filter(f => f.ext === '.jsx' && !f.fileName.endsWith('.test.jsx') && !f.fileName.endsWith('.stories.jsx'));

console.log('===================================================');
console.log('📐 AUTOMATED AST LAYOUT DENSITY & ERGONOMICS AUDIT');
console.log('===================================================\n');

let issues = [];

files.forEach(f => {
  const code = fs.readFileSync(f.fullPath, 'utf8');

  // Check 1: Non-responsive header flex container (flex justify-between without flex-col sm:flex-row or flex-wrap)
  const nonResponsiveHeaderMatches = code.match(/className="[^"]*flex\s+items-center\s+justify-between[^"]*"/g);
  if (nonResponsiveHeaderMatches) {
    nonResponsiveHeaderMatches.forEach(m => {
      if (!m.includes('flex-col') && !m.includes('sm:flex-row') && !m.includes('flex-wrap')) {
        issues.push({
          file: f.relPath,
          component: f.fileName,
          type: 'HEADER_WRAP_RISK',
          desc: 'Header flex container uses non-responsive `flex justify-between` without `flex-col sm:flex-row` or `flex-wrap`, causing elements to collide on narrow widths.'
        });
      }
    });
  }

  // Check 2: 2-column grid in small cards (grid-cols-2 without responsive sm:grid-cols-2)
  const rigidSubGridMatches = code.match(/className="[^"]*grid\s+grid-cols-2[^"]*"/g);
  if (rigidSubGridMatches) {
    rigidSubGridMatches.forEach(m => {
      if (!m.includes('sm:grid-cols') && !m.includes('md:grid-cols')) {
        issues.push({
          file: f.relPath,
          component: f.fileName,
          type: 'SUB_GRID_SQUEEZE',
          desc: 'Internal 2-column grid (`grid-cols-2`) is hardcoded without responsive breakpoint adjustments.'
        });
      }
    });
  }
});

console.log(`Scanned ${files.length} presentation components.`);
console.log(`Found ${issues.length} potential layout density / cramming risks:\n`);

const grouped = {};
issues.forEach(i => {
  if (!grouped[i.component]) grouped[i.component] = [];
  grouped[i.component].push(i);
});

Object.keys(grouped).forEach(comp => {
  console.log(`📦 Component: ${comp}`);
  grouped[comp].forEach(i => {
    console.log(`   ⚠️ [${i.type}]: ${i.desc}`);
  });
  console.log('');
});
