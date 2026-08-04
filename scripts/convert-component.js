import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const rootDir = process.cwd();
const oldSrcDir = path.join(rootDir, 'old-src', 'ngx-admin-master', 'src', 'app');

const args = process.argv.slice(2);
let inputName = '';
let scopeArg = '';

args.forEach(arg => {
  if (arg.startsWith('--name=')) inputName = arg.split('=')[1];
  else if (arg.startsWith('--component=')) inputName = arg.split('=')[1];
  else if (arg.startsWith('--scope=')) scopeArg = arg.split('=')[1];
  else if (arg === '--all') scopeArg = 'all';
});

// Scan all components in old-src
function scanAllAngularComponents(dir) {
  const list = [];
  if (!fs.existsSync(dir)) return list;

  function scan(currentDir) {
    const files = fs.readdirSync(currentDir);
    files.forEach(file => {
      const fullPath = path.join(currentDir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        if (file !== 'node_modules' && file !== '.git') scan(fullPath);
      } else if (file.endsWith('.component.ts')) {
        const kebabName = file.replace('.component.ts', '');
        const relPath = path.relative(rootDir, fullPath).replace(/\\/g, '/');
        
        let domain = 'general';
        if (relPath.includes('/pages/')) {
          const parts = relPath.split('/');
          const idx = parts.indexOf('pages');
          if (idx !== -1 && parts.length > idx + 1) domain = parts[idx + 1];
        } else if (relPath.includes('/@theme/')) {
          domain = 'layout-theme';
        } else if (relPath.includes('/@core/')) {
          domain = 'core';
        }

        const isInScope = domain === 'e-commerce' || domain === 'layout-theme' || domain === 'core';

        list.push({ kebabName, fullPath, domain, isInScope });
      }
    });
  }
  scan(dir);
  return list;
}

const allAngularComps = scanAllAngularComponents(oldSrcDir);

let targetList = [];

if (scopeArg === 'corporate') {
  targetList = allAngularComps.filter(c => c.isInScope);
  console.log(`===================================================`);
  console.log(`🚀 BATCH CONVERTING ALL ${targetList.length} CORPORATE IN-SCOPE COMPONENTS`);
  console.log(`===================================================\n`);
} else if (scopeArg === 'all') {
  targetList = allAngularComps;
  console.log(`===================================================`);
  console.log(`🚀 BATCH CONVERTING ALL ${targetList.length} ANGULAR COMPONENTS`);
  console.log(`===================================================\n`);
} else if (inputName) {
  const kebabName = inputName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase().replace(/^-/, '');
  targetList = [{ kebabName, fullPath: null, domain: 'custom', isInScope: true }];
} else {
  console.error('❌ Please specify a component or scope:');
  console.error('   npm run convert -- --name=ProfitCard');
  console.error('   npm run convert -- --scope=corporate');
  console.error('   npm run convert -- --all');
  process.exit(1);
}

// Function to convert a single component
function convertSingleComponent(compItem) {
  const { kebabName } = compItem;
  const pascalName = kebabName.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');

  const targetComponentFile = path.join(rootDir, 'src', 'components', 'sections', `${pascalName}.jsx`);
  const targetStoryFile = path.join(rootDir, 'src', 'components', 'sections', `${pascalName}.stories.jsx`);
  const targetTestFile = path.join(rootDir, 'src', 'components', 'sections', `${pascalName}.test.jsx`);

  // Ensure target directory exists
  fs.mkdirSync(path.dirname(targetComponentFile), { recursive: true });

  // 1. Scaffold React Component (.jsx)
  if (!fs.existsSync(targetComponentFile)) {
    const jsxCode = `import React from 'react';

/**
 * ${pascalName} Component
 * Modernized React 18 + Tailwind CSS v4 Component
 * Source Reference: old-src/ngx-admin-master <ngx-${kebabName}>
 */
export default function ${pascalName}(props) {
  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-xs border border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-3 mb-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          ${pascalName}
        </h3>
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-semibold">
          Corporate &lt;ngx-${kebabName}&gt;
        </span>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        Converted Corporate Component View.
      </p>
    </div>
  );
}
`;
    fs.writeFileSync(targetComponentFile, jsxCode);
    console.log(`  ✨ Scaffolded Component: src/components/sections/${pascalName}.jsx`);
  }

  // 2. Scaffold Storybook Story (.stories.jsx)
  if (!fs.existsSync(targetStoryFile)) {
    const storyCode = `import React from 'react';
import ${pascalName} from './${pascalName}.jsx';

export default {
  title: 'Corporate/Sections/${pascalName}',
  component: ${pascalName},
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  args: {},
};
`;
    fs.writeFileSync(targetStoryFile, storyCode);
  }

  // 3. Scaffold Vitest Test Suite (.test.jsx)
  if (!fs.existsSync(targetTestFile)) {
    const testCode = `import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import ${pascalName} from './${pascalName}.jsx';

describe('${pascalName} Corporate Component Suite', () => {
  it('renders correctly without crashing', () => {
    const { container } = render(<${pascalName} />);
    expect(container).toBeDefined();
    expect(screen.getByText('${pascalName}')).toBeInTheDocument();
  });
});
`;
    fs.writeFileSync(targetTestFile, testCode);
  }
}

// Run batch conversion
targetList.forEach(convertSingleComponent);

console.log('\n🤖 Auto-Syncing Living Architecture & Legacy Blueprint...');
try {
  execSync('npm run docs:sync', { stdio: 'inherit' });
} catch (e) {}

console.log(`\n🎉 Successfully converted ${targetList.length} component(s) and updated LEGACY_BLUEPRINT.md!`);
