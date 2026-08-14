import fs from 'fs';
import path from 'path';
import { parseReactComponent } from './lib/ast-parser.js';

const rootDir = process.cwd();
const srcDir = path.join(rootDir, 'src');
const hooksDir = path.join(srcDir, 'hooks');
const archFile = path.join(rootDir, 'ARCHITECTURE.md');

function scanComponents(dir, baseDir = srcDir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(scanComponents(filePath, baseDir));
    } else if (file.endsWith('.jsx') && !file.endsWith('.test.jsx') && !file.endsWith('.stories.jsx')) {
      const relPath = path.relative(baseDir, filePath).replace(/\\/g, '/');
      results.push(relPath);
    }
  });
  
  return results;
}

function scanHookDependencies(componentFiles) {
  const hookToComponents = new Map();
  const contextToComponents = new Map();

  componentFiles.forEach(comp => {
    const fullPath = path.join(srcDir, comp);
    if (!fs.existsSync(fullPath)) return;
    const code = fs.readFileSync(fullPath, 'utf8');
    const compName = path.basename(comp, '.jsx');

    // Extract hook imports: e.g. import ... from '../../hooks/useXxx.js' or import { useXxx }
    const hookImportMatches = [...code.matchAll(/import\s+(?:\{([^}]+)\}|(\w+))\s+from\s+['"][^'"]*hooks\/([^'"]+)['"]/g)];
    hookImportMatches.forEach(match => {
      const hookFile = match[3].replace(/\.(js|jsx)$/, '');
      const hookName = hookFile.startsWith('use') ? hookFile : `use${hookFile}`;
      if (!hookToComponents.has(hookName)) {
        hookToComponents.set(hookName, new Set());
      }
      hookToComponents.get(hookName).add(compName);
    });

    // Extract context imports: ThemeContext, AuthContext
    if (/useTheme/.test(code) && /ThemeContext/.test(code)) {
      if (!contextToComponents.has('useTheme (ThemeContext)')) {
        contextToComponents.set('useTheme (ThemeContext)', new Set());
      }
      contextToComponents.get('useTheme (ThemeContext)').add(compName);
    }
    if (/useAuth/.test(code) && /AuthContext/.test(code)) {
      if (!contextToComponents.has('useAuth (AuthContext)')) {
        contextToComponents.set('useAuth (AuthContext)', new Set());
      }
      contextToComponents.get('useAuth (AuthContext)').add(compName);
    }
  });

  return { hookToComponents, contextToComponents };
}

const components = scanComponents(srcDir);
const { hookToComponents, contextToComponents } = scanHookDependencies(components);

// Categorize hooks into architectural domains
const corporateHooksList = ['useEarning', 'useOrdersChart', 'useOrdersProfitChart', 'useProfitChart', 'useProfitBarAnimationChart', 'useCountryOrder', 'useCountryOrdersMap', 'useTrafficChart', 'useTrafficBar', 'useTrafficList', 'useVisitorsAnalytics', 'useUserActivity', 'usePeriods', 'useStatsBar', 'useStatsProgressBar'];
const iotHooksList = ['useSecurityCameras', 'useSolar', 'useTemperatureHumidity', 'useElectricity', 'usePlayer', 'useNews'];
const tableAuthHooksList = ['useSmartTable', 'useSmartTableData', 'useUsers', 'useChat', 'useLayout', 'useAnalytics', 'useSeo', 'useState'];

let mermaidGraph = `\`\`\`mermaid
graph LR
    subgraph ContextProviders ["Context State Providers (src/context/)"]
`;

let contextIdx = 1;
const contextNodeMap = new Map();
contextToComponents.forEach((_, ctxName) => {
  const nodeId = `CTX_${contextIdx++}`;
  contextNodeMap.set(ctxName, nodeId);
  mermaidGraph += `        ${nodeId}["${ctxName}"]\n`;
});
mermaidGraph += `    end\n\n`;

mermaidGraph += `    subgraph CorporateHooks ["Corporate Analytics Hooks (src/hooks/)"]\n`;
let hookIdx = 1;
const hookNodeMap = new Map();
hookToComponents.forEach((_, hookName) => {
  if (corporateHooksList.includes(hookName)) {
    const nodeId = `H_${hookIdx++}`;
    hookNodeMap.set(hookName, nodeId);
    mermaidGraph += `        ${nodeId}["${hookName}.js"]\n`;
  }
});
mermaidGraph += `    end\n\n`;

mermaidGraph += `    subgraph IoTHooks ["IoT & Telemetry Hooks (src/hooks/)"]\n`;
hookToComponents.forEach((_, hookName) => {
  if (iotHooksList.includes(hookName)) {
    const nodeId = `H_${hookIdx++}`;
    hookNodeMap.set(hookName, nodeId);
    mermaidGraph += `        ${nodeId}["${hookName}.js"]\n`;
  }
});
mermaidGraph += `    end\n\n`;

mermaidGraph += `    subgraph TableAuthHooks ["Tables, Auth & App Hooks (src/hooks/)"]\n`;
hookToComponents.forEach((_, hookName) => {
  if (tableAuthHooksList.includes(hookName) || (!corporateHooksList.includes(hookName) && !iotHooksList.includes(hookName))) {
    const nodeId = `H_${hookIdx++}`;
    hookNodeMap.set(hookName, nodeId);
    mermaidGraph += `        ${nodeId}["${hookName}.js"]\n`;
  }
});
mermaidGraph += `    end\n\n`;

mermaidGraph += `    subgraph Components ["Presentation & Layout Components (src/components/)"]\n`;
const compNodeMap = new Map();
let compIdx = 1;
const allConsumerComps = new Set();
hookToComponents.forEach(comps => comps.forEach(c => allConsumerComps.add(c)));
contextToComponents.forEach(comps => comps.forEach(c => allConsumerComps.add(c)));

allConsumerComps.forEach(compName => {
  const nodeId = `C_${compIdx++}`;
  compNodeMap.set(compName, nodeId);
  mermaidGraph += `        ${nodeId}["${compName}.jsx"]\n`;
});
mermaidGraph += `    end\n\n`;

// Draw edges
contextToComponents.forEach((comps, ctxName) => {
  const ctxNode = contextNodeMap.get(ctxName);
  comps.forEach(compName => {
    const compNode = compNodeMap.get(compName);
    if (ctxNode && compNode) {
      mermaidGraph += `    ${ctxNode} -.-> ${compNode}\n`;
    }
  });
});

hookToComponents.forEach((comps, hookName) => {
  const hookNode = hookNodeMap.get(hookName);
  comps.forEach(compName => {
    const compNode = compNodeMap.get(compName);
    if (hookNode && compNode) {
      mermaidGraph += `    ${hookNode} --> ${compNode}\n`;
    }
  });
});

mermaidGraph += `\`\`\``;

let markdown = `# 📐 MASTER ARCHITECTURE & LIVING COMPONENT BLUEPRINT

> **Status**: Auto-Synchronized | **Architecture**: Modular React 18 SPA + Custom Hook Data Layer

---

## 🏗️ C4 Level 1: System Context Diagram

\`\`\`mermaid
graph TD
    User["Dashboard User / Manager"] --> |Interacts With| WebApp["NGX Admin React Application"]
    WebApp --> |Executes State & Data Hooks| CustomHooks["Custom Data Hooks Layer"]
    WebApp --> |Renders Dynamic Accents| DesignSystem["Tailwind v4 Theme Engine"]
\`\`\`

---

## 🔗 C4 Level 3: Dynamic Custom Hook & Context Dependency Graph

${mermaidGraph}

---

## 🧩 Living Component Inventory Matrix

| Component Path | Domain Area | Status |
| :--- | :--- | :---: |
`;

components.forEach(comp => {
  const parts = comp.split('/');
  const domain = parts.length > 1 ? parts[0] : 'root';
  const fullPath = path.join(srcDir, comp);
  const ast = parseReactComponent(fullPath);

  markdown += `| \`src/${comp}\` | **${domain.toUpperCase()}** | ${ast.statusStr} |\n`;
});

fs.writeFileSync(archFile, markdown, 'utf-8');
console.log('✔ Successfully auto-synchronized ARCHITECTURE.md dynamic C4 Level 3 Hook dependency graph and component inventory.');
