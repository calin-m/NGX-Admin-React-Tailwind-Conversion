import fs from 'fs';
import path from 'path';

/**
 * Parses Angular component metadata from TypeScript file (.component.ts)
 */
export function parseAngularComponent(filePath) {
  let selector = 'n/a';
  let injectedServices = [];
  let inputs = [];
  let outputs = [];

  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Selector
    const selMatch = content.match(/selector\s*:\s*['"]([^'"]+)['"]/);
    if (selMatch) selector = `<${selMatch[1]}>`;

    // Injected Services in Constructor
    const ctorMatch = content.match(/constructor\s*\(([^)]*)\)/s);
    if (ctorMatch && ctorMatch[1]) {
      const params = ctorMatch[1].split(',');
      params.forEach(p => {
        const parts = p.trim().split(':');
        if (parts.length > 1) {
          const typeName = parts[1].trim().replace(/[^a-zA-Z0-9_]/g, '');
          if (typeName && typeName !== 'void' && typeName !== 'any') {
            injectedServices.push(typeName);
          }
        }
      });
    }

    // @Input()
    const inputMatches = [...content.matchAll(/@Input\(\)\s*([a-zA-Z0-9_]+)/g)];
    inputs = inputMatches.map(m => m[1]);

    // @Output()
    const outputMatches = [...content.matchAll(/@Output\(\)\s*([a-zA-Z0-9_]+)/g)];
    outputs = outputMatches.map(m => m[1]);

  } catch (e) {
    // Ignore parse errors
  }

  return { selector, injectedServices, inputs, outputs };
}

/**
 * Parses React component AST for interactivity depth, state, and event handlers
 */
export function parseReactComponent(filePath) {
  if (!fs.existsSync(filePath)) return { exists: false, isInteractive: false, statusStr: '🔴 Pending' };

  try {
    const code = fs.readFileSync(filePath, 'utf8');
    const hasState = /useState|useReducer|useEffect|useMemo|useCallback|useContext|use[A-Z]\w+/.test(code);
    const hasHandlers = /onClick|onChange|onSubmit|onKeyDown|onKeyUp|handle[A-Z]\w+/.test(code);
    const isInteractive = hasState || hasHandlers;

    return {
      exists: true,
      isInteractive,
      hasState,
      hasHandlers,
      statusStr: isInteractive ? '🟢 Interactive Demo' : '🟡 Static Showcase'
    };
  } catch (e) {
    return { exists: true, isInteractive: false, statusStr: '🟢 Completed' };
  }
}

/**
 * Recursively scans directory for files
 */
export function scanDirectory(dir, fileList = [], rootDir = process.cwd()) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file === 'node_modules' || file === '.git' || file === 'dist' || file === '.vitest') return;
      scanDirectory(filePath, fileList, rootDir);
    } else {
      const relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');
      fileList.push({ relPath, fullPath: filePath, ext: path.extname(file), fileName: file });
    }
  });
  return fileList;
}
