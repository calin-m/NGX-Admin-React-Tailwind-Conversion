# ⚡ AUTOMATION & PIPELINE ENGINEERING SPECIFICATION

> **Status**: Production Operational | **CI/CD Engine**: 7-Gateway + GitHub Actions + Docker

Welcome to the **Automation & Pipeline Guide**. This document details our 7-Gateway Quality Engine, Secret Scanner, Husky pre-commit hooks, and GitHub Actions CI/CD.

---

## 🔬 1. 7-Gateway Quality Verification Engine (`scripts/verify-build.js`)

Executing `npm run verify` triggers a 7-pass quality gate audit:
1. **Pass 0: Zero-Manual Auto-Scaffolder & Dual-Stack Doc Sync**: Auto-scaffolds missing tests/stories & syncs `ARCHITECTURE.md`, `docs/LEGACY_BLUEPRINT.md` + `CHANGELOG.md`.
2. **Pass 0.5: Pre-Commit Secret & Security Scanner**: Audits codebase for hardcoded private keys, tokens, or un-ignored `.env` credentials.
3. **Pass 1: AST Syntax & A11y Audit**: Validates JSX syntax and image `alt` accessibility attributes.
4. **Pass 2: Ghost Files Audit**: Ensures no orphan or dead files exist in `src/`.
5. **Pass 3: Living Architecture Blueprint (`ARCHITECTURE.md`)**: Verifies C4 Mermaid Level 1-3 diagrams.
6. **Pass 4: ADR Decision Records (`docs/DECISIONS.md`)**: Validates sequential numbering of Architectural Decision Records.
7. **Pass 5 & 6: Vitest Dual-Theme Execution**: Executes full test suites across Dark and Light modes.
8. **Pass 7: Production Vite Bundle Compilation**: Verifies clean production `dist/` compilation.

---

## 🛠️ 2. Dual-Stack Automation Driver Scripts Registry

| Driver Script (`scripts/`) | Target Stack | Output Destination | Trigger Command |
| :--- | :--- | :--- | :--- |
| `generate-architecture-matrix.js` | 🚀 **Active React (`src/`)** | [**`ARCHITECTURE.md`**](file:///d:/Proiecte/Real%20Estate%20Demo/ARCHITECTURE.md) | `npm run docs:sync` / `npm run verify` |
| `generate-legacy-docs.js` | 📜 **Legacy Angular (`old-src/`)** | [**`docs/LEGACY_BLUEPRINT.md`**](file:///d:/Proiecte/Real%20Estate%20Demo/docs/LEGACY_BLUEPRINT.md) | `npm run docs:legacy` / `npm run docs:sync` / `npm run verify` |
| `generate-changelog.js` | 📜 **Release History** | [**`CHANGELOG.md`**](file:///d:/Proiecte/Real%20Estate%20Demo/CHANGELOG.md) | `npm run docs:sync` |
| `verify-build.js` | 🛡️ **7-Gateway Engine** | Terminal Audit Output | `npm run verify` |
| `new-adr.js` | 📜 **ADR Generator** | [**`docs/DECISIONS.md`**](file:///d:/Proiecte/Real%20Estate%20Demo/docs/DECISIONS.md) | `npm run adr:new` |

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
1. Provisions `ubuntu-latest` container with Node.js 18.
2. Installs dependencies (`npm ci`).
3. Executes `npm run verify`.
4. Compiles production bundle (`npm run build`).

---

## 🛡️ License
Copyright © 2026 Calin M. All rights reserved.
