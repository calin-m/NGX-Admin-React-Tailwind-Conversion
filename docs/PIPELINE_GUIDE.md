# ⚡ AUTOMATION & PIPELINE ENGINEERING SPECIFICATION

> **Status**: Production Operational | **CI/CD Engine**: 7-Gateway + GitHub Actions + Docker

Welcome to the **Automation & Pipeline Guide**. This document details our 7-Gateway Quality Engine, Secret Scanner, Husky pre-commit hooks, and GitHub Actions CI/CD.

---

## 🔬 1. 7-Gateway Quality Verification Engine (`scripts/verify-build.js`)

Executing `npm run verify` triggers a non-destructive 7-pass quality gate audit:
1. **Pass 0.5: Pre-Commit Secret Scanner**: Audits codebase for hardcoded private keys, tokens, or `.env` credentials.
2. **Pass 1: AST Syntax Validation**: Validates JSX/JS syntax across `src/`.
3. **Pass 2 & 3: Vitest Dual-Theme Execution**: Executes full test suites across Dark and Light modes to generate fresh `test-results.json`.
4. **Pass 4: Master Quality Report Auto-Sync**: Reads fresh `test-results.json` to auto-sync `docs/QUALITY_AUDIT_REPORT.md`, `docs/quality-audit-results.json`, `ARCHITECTURE.md`, `docs/LEGACY_BLUEPRINT.md` + `CHANGELOG.md`.
5. **Pass 5: Living Blueprints & ADR Decision Records**: Validates presence of `ARCHITECTURE.md`, `docs/LEGACY_BLUEPRINT.md`, and `docs/DECISIONS.md`.
6. **Pass 6: ESLint Linter & Knip Dead-Code Audit**: Validates code quality rules, accessibility, and zero unused exports.
7. **Pass 7: Production Vite Bundle Compilation**: Verifies clean production `dist/` compilation.

> **Reporting Transparency Standard**: Verification output explicitly details both 0 blocking errors AND any non-blocking advisory warnings (e.g. 20 layout density wrap warnings). All blocking and non-blocking audits are serialized directly into machine-readable JSON ([`docs/quality-audit-results.json`](docs/quality-audit-results.json)) containing explicit references to all generated markdown and test reports.

---

## 🛠️ 2. Dual-Stack Automation Driver Scripts Registry

| Driver Script (`scripts/`) | Target Stack | Output Destination | Trigger Command |
| :--- | :--- | :--- | :--- |
| `generate-quality-report.js` | 🛡️ **In-Depth AST Quality Audit** | [**`docs/QUALITY_AUDIT_REPORT.md`**](docs/QUALITY_AUDIT_REPORT.md) | `npm run report` / `npm run verify` |
| `audit-all-menu-pages.js` | 🎨 **17-Menu-Tab Parity Check** | Terminal Audit Output | `npm run audit:pages` |
| `audit-theme-accents.js` | 🎨 **AST Accent Color Scanner** | Terminal Audit Output | `npm run audit:theme` |
| `audit-layout-density.js` | 📐 **Layout Density Scanner** | Terminal Audit Output | `npm run audit:density` |
| `generate-architecture-matrix.js` | 🚀 **Active React (`src/`)** | [**`ARCHITECTURE.md`**](ARCHITECTURE.md) | `npm run docs:sync` / `npm run verify` |
| `generate-legacy-docs.js` | 📜 **Legacy Angular (`old-src/`)** | [**`docs/LEGACY_BLUEPRINT.md`**](docs/LEGACY_BLUEPRINT.md) | `npm run docs:legacy` / `npm run docs:sync` / `npm run verify` |
| `generate-changelog.js` | 📜 **Release History** | [**`CHANGELOG.md`**](CHANGELOG.md) | `npm run docs:sync` / `npm run verify` |
| `verify-build.js` | 🛡️ **7-Gateway Engine** | Terminal & Report Output | `npm run verify` |
| `new-adr.js` | 📜 **ADR Generator** | [**`docs/DECISIONS.md`**](docs/DECISIONS.md) | `npm run adr:new` |


---

## 🤖 2. Enterprise Commit Standard (`.gitmessage`)

Using standard `git commit`:
1. Uses the [.gitmessage](.gitmessage) template to structure commit logs.
2. Specifies high-context business and technical motivations in `[WHY]`.
3. Lists specific file, API, and component changes in `[WHAT]`.
4. Enforces the Context Integrity Standard across the project history.

---

## ⚙️ 3. GitHub Actions CI/CD Workflow (`.github/workflows/ci.yml`)

On every `git push` or Pull Request:
1. Provisions `ubuntu-latest` container with Node.js 24.
2. Installs dependencies (`npm ci`).
3. Executes `npm run verify`.
4. Compiles production bundle (`npm run build`).

---

## 🛡️ License
Copyright © 2026 Calin M. All rights reserved.
