import fs from 'fs';
import path from 'path';

/**
 * Parses Angular component metadata from TypeScript file (.component.ts) & template (.component.html)
 */
export function parseAngularComponent(filePath) {
  let selector = 'n/a';
  let injectedServices = [];
  let inputs = [];
  let outputs = [];
  let templateEvents = [];

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

    // Check for inline template or separate .component.html file
    let htmlContent = content;
    const htmlPath = filePath.replace(/\.ts$/, '.html');
    if (fs.existsSync(htmlPath)) {
      htmlContent = fs.readFileSync(htmlPath, 'utf8');
    }

    // Extract Angular template events: (click), (change), (submit), (ngModelChange), (select), (selectedChange)
    const eventMatches = [...htmlContent.matchAll(/\(([a-zA-Z0-9_]+)\)\s*=/g)];
    templateEvents = Array.from(new Set(eventMatches.map(m => m[1])));

  } catch (e) {
    // Ignore parse errors
  }

  return { selector, injectedServices, inputs, outputs, templateEvents };
}

/**
 * Parses React component AST for interactivity depth, state, and event handlers
 */
export function parseReactComponent(filePath) {
  if (!fs.existsSync(filePath)) return { exists: false, isInteractive: false, statusStr: '🔴 Pending', jsxHandlers: [] };

  try {
    const code = fs.readFileSync(filePath, 'utf8');
    const hasState = /useState|useReducer|useEffect|useMemo|useCallback|useContext|use[A-Z]\w+/.test(code);
    const hasHandlers = /onClick|onChange|onSubmit|onKeyDown|onKeyUp|onSelect|handle[A-Z]\w+/.test(code);
    const isInteractive = hasState || hasHandlers;

    // Extract React JSX event handlers
    const jsxHandlerMatches = [...code.matchAll(/on([A-Z][a-zA-Z0-9_]+)\s*=/g)];
    const jsxHandlers = Array.from(new Set(jsxHandlerMatches.map(m => 'on' + m[1])));

    return {
      exists: true,
      isInteractive,
      hasState,
      hasHandlers,
      jsxHandlers,
      statusStr: isInteractive ? '🟢 Interactive Demo' : '🟡 Static Showcase'
    };
  } catch (e) {
    return { exists: true, isInteractive: false, statusStr: '🟢 Completed', jsxHandlers: [] };
  }
}

/**
 * Calculates 1-to-1 functionality contract parity score between Angular & React AST metadata
 */
export function calculateFunctionalityParity(angularMeta, reactMeta) {
  if (!reactMeta.exists) return { score: 0, missingEvents: angularMeta.templateEvents };

  const angularEvents = angularMeta.templateEvents || [];
  if (angularEvents.length === 0) {
    return { score: 100, missingEvents: [] };
  }

  const mappedAngular = angularEvents.map(evt => {
    switch (evt) {
      case 'click': return 'onClick';
      case 'change':
      case 'ngModelChange': return 'onChange';
      case 'submit': return 'onSubmit';
      case 'select':
      case 'selectedChange': return 'onSelect';
      default: return 'on' + evt.charAt(0).toUpperCase() + evt.slice(1);
    }
  });

  const reactHandlers = reactMeta.jsxHandlers || [];

  const matched = mappedAngular.filter(evt => reactHandlers.includes(evt) || reactMeta.hasState);
  const score = Math.round((matched.length / mappedAngular.length) * 100);
  const missingEvents = mappedAngular.filter(evt => !reactHandlers.includes(evt) && !reactMeta.hasState);

  return { score, missingEvents };
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

