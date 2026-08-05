import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const srcDir = path.join(rootDir, 'src');
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

const components = scanComponents(srcDir);

let markdown = `# 📐 MASTER ARCHITECTURE & LIVING COMPONENT BLUEPRINT

> **Status**: Auto-Synchronized | **Architecture**: Modular React SPA

---

## 🏗️ C4 Level 1: System Context Diagram

\`\`\`mermaid
graph TD
    User["Athlete / Customer"] --> |Browses Showcase| WebApp["Enterprise Web Application"]
    WebApp --> |Executes| ClientState["React State Engine"]
    WebApp --> |Renders| UIPrimitives["Design System Primitives"]
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

  let statusStr = '🟢 Active';
  try {
    const code = fs.readFileSync(fullPath, 'utf8');
    const hasState = /useState|useReducer|useEffect|useMemo|useCallback|useContext|use[A-Z]\w+/.test(code);
    const hasHandlers = /onClick|onChange|onSubmit|onKeyDown|onKeyUp|handle[A-Z]\w+/.test(code);
    if (hasState || hasHandlers) {
      statusStr = '🟢 Interactive Demo';
    } else {
      statusStr = '🟡 Static Showcase';
    }
  } catch (e) {
    statusStr = '🟢 Active';
  }

  markdown += `| \`src/${comp}\` | **${domain.toUpperCase()}** | ${statusStr} |\n`;
});

fs.writeFileSync(archFile, markdown);
console.log('✔ Successfully auto-synchronized ARCHITECTURE.md component inventory matrix.');

