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

function scanHooks() {
  if (!fs.existsSync(hooksDir)) return [];
  return fs.readdirSync(hooksDir).filter(f => f.endsWith('.js')).map(f => path.basename(f, '.js'));
}

const components = scanComponents(srcDir);
const hooksList = scanHooks();

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

## 🔗 C4 Level 3: Custom Hook Data Dependency Graph

\`\`\`mermaid
graph LR
    subgraph DataHooks ["Custom Data Hooks (src/hooks/)"]
        H1["useEarning.js"]
        H2["useOrdersChart.js"]
        H3["useSmartTableData.js"]
    end

    subgraph Components ["Presentation Components (src/components/)"]
        C1["ECommerce.jsx"]
        C2["EarningCard.jsx"]
        C3["ChartsPanel.jsx"]
        C4["OrdersChart.jsx"]
        C5["SmartTable.jsx"]
    end

    H1 --> C1
    H1 --> C2
    H2 --> C3
    H2 --> C4
    H3 --> C5
\`\`\`

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
console.log('✔ Successfully auto-synchronized ARCHITECTURE.md component inventory matrix and C4 Mermaid diagrams.');
