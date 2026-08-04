import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const rootDir = process.cwd();
const changelogFile = path.join(rootDir, 'CHANGELOG.md');

try {
  // Parse full git log history with NULL delimiter between commits (%x00)
  const rawLog = execSync('git log --pretty=format:"%h|%an|%ad|%B%x00" --date=short', { encoding: 'utf8' });
  const rawCommits = rawLog.split('\0').filter(Boolean);

  const categories = {
    features: [],
    fixes: [],
    devops: [],
    docs: [],
    others: []
  };

  rawCommits.forEach(raw => {
    const lines = raw.trim().split('\n');
    if (lines.length === 0) return;

    const firstLine = lines[0];
    const firstLineMatch = firstLine.match(/^([a-f0-9]+)\|([^|]+)\|([^|]+)\|(.*)$/);
    if (!firstLineMatch) return;

    const [, hash, author, date, header] = firstLineMatch;
    if (!header) return;

    // Extract [WHAT] bullet points from commit body if present
    const bodyLines = lines.slice(1);
    const subBullets = [];
    let captureWhat = false;

    bodyLines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('[WHAT]')) {
        captureWhat = true;
      } else if (trimmed.startsWith('[') && (trimmed.endsWith(']') || trimmed.endsWith(':'))) {
        captureWhat = false;
      } else if (captureWhat && (trimmed.startsWith('-') || trimmed.startsWith('*'))) {
        subBullets.push(`  ${trimmed}`);
      }
    });

    let entry = `- **${header}** (\`${hash}\`) *by ${author} on ${date}*`;
    if (subBullets.length > 0) {
      entry += `\n${subBullets.join('\n')}`;
    }

    if (header.startsWith('feat')) categories.features.push(entry);
    else if (header.startsWith('fix')) categories.fixes.push(entry);
    else if (header.startsWith('ci') || header.startsWith('build')) categories.devops.push(entry);
    else if (header.startsWith('docs')) categories.docs.push(entry);
    else categories.others.push(entry);
  });

  let markdown = `# 📜 AUTOMATED RELEASE CHANGELOG\n\n> **Status**: 100% Auto-Generated from Conventional Git Commits | **Format**: Keep a Changelog v1.1.0\n\n---\n\n## [1.0.0] — ${new Date().toISOString().split('T')[0]}\n\n`;

  if (categories.features.length > 0) {
    markdown += `### 🚀 New Features\n${categories.features.join('\n')}\n\n`;
  }
  if (categories.fixes.length > 0) {
    markdown += `### 🐛 Bug Fixes\n${categories.fixes.join('\n')}\n\n`;
  }
  if (categories.devops.length > 0) {
    markdown += `### 🛠️ DevOps, Infrastructure & CI/CD\n${categories.devops.join('\n')}\n\n`;
  }
  if (categories.docs.length > 0) {
    markdown += `### 📖 Documentation Updates\n${categories.docs.join('\n')}\n\n`;
  }
  if (categories.others.length > 0) {
    markdown += `### 🧹 Maintenance & Refactors\n${categories.others.join('\n')}\n\n`;
  }

  markdown += `---\n\n*Last Auto-Generated: ${new Date().toISOString()}*\n`;

  fs.writeFileSync(changelogFile, markdown);
  console.log('✔ Successfully auto-generated CHANGELOG.md with full history and [WHAT] body details.');
} catch (err) {
  console.warn('⚠️ Automated changelog generation warning:', err.message);
}
