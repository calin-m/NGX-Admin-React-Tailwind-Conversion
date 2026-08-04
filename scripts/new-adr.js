import fs from 'fs';
import path from 'path';

const root = process.cwd();
const decisionsPath = path.join(root, 'docs', 'DECISIONS.md');

const titleArg = process.argv.slice(2).join(' ').trim() || 'New Architectural Decision';

if (!fs.existsSync(decisionsPath)) {
  console.error('❌ docs/DECISIONS.md file not found.');
  process.exit(1);
}

let content = fs.readFileSync(decisionsPath, 'utf8');

const adrMatches = content.match(/ADR-(\d+)/g) || [];
let highestNum = 0;

adrMatches.forEach(match => {
  const num = parseInt(match.replace('ADR-', ''), 10);
  if (!isNaN(num) && num > highestNum) {
    highestNum = num;
  }
});

const nextNum = highestNum + 1;
const adrId = `ADR-${String(nextNum).padStart(3, '0')}`;

const newAdrEntry = `
---

### ${adrId}: ${titleArg}
- **Status**: Proposed
- **Context**: Describe the context and motivation for this decision.
- **Decision**: State the architectural decision made.
- **Consequences**: Outline the positive and negative consequences of this decision.
`;

fs.appendFileSync(decisionsPath, newAdrEntry);
console.log(`✅ Successfully appended ${adrId}: "${titleArg}" to docs/DECISIONS.md`);
