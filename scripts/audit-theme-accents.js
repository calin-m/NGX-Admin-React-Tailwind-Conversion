import fs from 'fs';
import path from 'path';
import { scanDirectory } from './lib/ast-parser.js';

const rootDir = process.cwd();
const srcDir = path.join(rootDir, 'src', 'components');

const files = scanDirectory(srcDir, [], rootDir).filter(f => f.ext === '.jsx' && !f.fileName.endsWith('.test.jsx') && !f.fileName.endsWith('.stories.jsx'));

console.log('===================================================');
console.log('🎨 AUTOMATED BRAND ACCENT COVERAGE AUDIT');
console.log('===================================================\n');

let occurrences = [];

files.forEach(f => {
  const code = fs.readFileSync(f.fullPath, 'utf8');

  // Find hardcoded indigo primary classes
  const indigoMatches = [...code.matchAll(/className="[^"]*(bg-indigo-600|text-indigo-600|border-indigo-500|focus:ring-indigo-500|bg-indigo-500\/10)[^"]*"/g)];
  if (indigoMatches.length > 0) {
    indigoMatches.forEach(m => {
      occurrences.push({
        file: f.relPath,
        component: f.fileName,
        snippet: m[0]
      });
    });
  }
});

console.log(`Scanned ${files.length} presentation components.`);
console.log(`Found ${occurrences.length} remaining hardcoded primary indigo color instances:\n`);

const grouped = {};
occurrences.forEach(o => {
  if (!grouped[o.component]) grouped[o.component] = [];
  grouped[o.component].push(o.snippet);
});

Object.keys(grouped).forEach(comp => {
  console.log(`📦 Component: ${comp} (${grouped[comp].length} instances)`);
});
