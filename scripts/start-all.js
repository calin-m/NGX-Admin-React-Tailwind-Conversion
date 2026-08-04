import { spawn, exec } from 'child_process';
import fs from 'fs';
import path from 'path';

process.env.NODE_NO_WARNINGS = '1';

const LOG_FILE = path.join(process.cwd(), 'dev-all.log');
const logStream = fs.createWriteStream(LOG_FILE, { flags: 'w' });

function log(prefix, data) {
  const timestamp = new Date().toISOString();
  const text = data.toString();
  process.stdout.write(`${prefix} ${text}`);
  logStream.write(`[${timestamp}] ${prefix} ${text}`);
}

console.log('==================================================');
console.log('🚀 LAUNCHING NGX ADMIN ENTERPRISE SUITE');
console.log(`📄 LOG FILE: ${LOG_FILE}`);
console.log('==================================================\n');

// 0. Automatic Startup Sweeper (Auto-sync living documentation & legacy blueprint)
log('\x1b[33m[AUTOMATION]\x1b[0m', '🤖 Running Living Documentation & Legacy Blueprint Auto-Sync...\n');
try {
  exec('node scripts/generate-architecture-matrix.js');
  exec('node scripts/generate-legacy-docs.js');
} catch (e) {
  // Silent fallback
}

// 1. Spawn Vite React App
const viteProc = spawn('npx', ['vite'], { shell: true, stdio: 'pipe' });
viteProc.stdout.on('data', data => log('\x1b[36m[VITE]\x1b[0m', data));
viteProc.stderr.on('data', data => log('\x1b[36m[VITE]\x1b[0m', data));

// 2. Spawn Storybook Server
const sbProc = spawn('npx', ['storybook', 'dev', '-p', '6006', '--ci'], { shell: true, stdio: 'pipe' });
sbProc.stdout.on('data', data => log('\x1b[35m[STORYBOOK]\x1b[0m', data));
sbProc.stderr.on('data', data => log('\x1b[35m[STORYBOOK]\x1b[0m', data));

// Helper function to open URLs in Chrome on Windows/Mac
const openUrl = url => {
  const startCmd = process.platform === 'win32' ? `start ${url}` : `open ${url}`;
  exec(startCmd);
};

// Open Chrome browser tabs for Vite Web App and Storybook Catalog
setTimeout(() => {
  log('\x1b[36m[LAUNCHER]\x1b[0m', '🌐 Opening Vite Web App (http://localhost:5173)...\n');
  openUrl('http://localhost:5173');
}, 2000);

setTimeout(() => {
  log('\x1b[35m[LAUNCHER]\x1b[0m', '🎨 Opening Storybook Catalog (http://localhost:6006)...\n');
  openUrl('http://localhost:6006');
}, 4000);

// Handle process cleanup
process.on('SIGINT', () => {
  logStream.end();
  viteProc.kill();
  sbProc.kill();
  process.exit();
});
