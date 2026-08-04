import { spawn } from 'child_process';

console.log('🚀 Starting Enterprise Development Environment...');

const devServer = spawn('npx', ['vite'], {
  stdio: 'inherit',
  shell: true
});

devServer.on('error', (err) => {
  console.error('❌ Failed to start dev server:', err);
  process.exit(1);
});
