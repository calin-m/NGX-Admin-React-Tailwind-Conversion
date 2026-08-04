import fs from 'fs';
import path from 'path';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const distDir = path.join(root, 'dist');

console.log('📦 Synchronizing public assets...');

if (fs.existsSync(publicDir)) {
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  fs.cpSync(publicDir, distDir, { recursive: true });
  console.log('✅ Public assets synchronized successfully to dist/.');
} else {
  console.log('ℹ️ No public/ asset directory found. Skipping asset copy.');
}
