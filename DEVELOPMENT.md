# 🛠️ ENTERPRISE REACT STARTER — Developer Environment & Engineering Blueprint

> **Environment**: Node.js 24 LTS | **Build Tool**: Vite 6 + React 18 | **Design System**: Storybook 8 | **Test Suite**: Vitest + RTL + JSDOM

Welcome to the **Developer Environment Guide**. This document defines local setup, testing workflows, quality gates, and deployment pipelines.

---

## 💻 1. Local Development Setup & Commands

### Prerequisites
- **Node.js**: v24.0.0 LTS or higher (tested on Node.js v24.18.1)
- **npm**: v10.0.0 or higher

### Master Development Commands

| Command | Action / Description | Target |
| :--- | :--- | :--- |
| `npm run dev:all` | **Master Concurrent Suite**: Spawns Vite Dev Server & Storybook concurrently | Vite `:5173` & Storybook `:6006` |
| `npm run dev` | Launches local Vite development server | `http://localhost:5173` |
| `npm run storybook` | Launches Storybook Design System Catalog | `http://localhost:6006` |
| `npm test` | Runs Vitest unit test suite once in terminal | Terminal Output |
| `npm run test:watch` | Runs Vitest in interactive watch mode | Terminal Output |
| `npm run test:ui` | **Vitest Visual UI**: Launches Vitest Interactive Visual Browser UI | Browser UI |
| `npm run test:coverage` | **Code Coverage Suite**: Runs Vitest V8 coverage report | Terminal & `coverage/index.html` |
| `npm run lint` | **ESLint Audit**: Executes ESLint 9 code quality & a11y audit | Terminal Output |
| `npm run knip` | **Knip Audit**: Scans codebase for dead code and unused exports | Terminal Output |
| `npm run report` | **In-Depth Quality Report**: Generates full AST quality report | `docs/QUALITY_AUDIT_REPORT.md` |
| `npm run audit:pages` | **17-Menu-Tab Parity Check**: Runs 100% menu tab accent check | Terminal Output |
| `npm run audit:theme` | **AST Accent Scanner**: Scans components for hardcoded colors | Terminal Output |
| `npm run audit:density` | **Layout Density Scanner**: Scans flex container wrap risks | Terminal Output |
| `npm run verify` | Runs programmatic 7-Gateway Quality Engine + Dual-Stack Doc Sync | Terminal Output |
| `npm run docs:sync` | Auto-synchronizes active React architecture, legacy blueprint & release changelog | `ARCHITECTURE.md`, `docs/LEGACY_BLUEPRINT.md` & `CHANGELOG.md` |
| `npm run docs:legacy` | Auto-synchronizes legacy Angular reference blueprint & conversion tracking | `docs/LEGACY_BLUEPRINT.md` |
| `npm run adr:new` | Generates a new numbered Architectural Decision Record | `docs/DECISIONS.md` |
| `npm run build` | Compiles optimized React production bundle | `dist/` |
| `npm run build-storybook` | Compiles static Storybook website catalog | `storybook-static/` |
| `npm run preview` | Previews compiled local production build | `http://localhost:4173` |
| `docker compose up -d` | **Optional Container Deployment**: Launches Nginx Alpine production container | `http://localhost:80` |

---

## 🛡️ 2. 7-Gateway Quality Engine (`node scripts/verify-build.js`)

Executing `npm run verify` triggers a non-destructive 7-pass quality gate audit:
1. **Pass 0.5: Pre-Commit Secret Scanner**: Audits codebase for hardcoded private keys or tokens.
2. **Pass 1: AST Syntax Validation**: Validates JSX/JS syntax across `src/`.
3. **Pass 2 & 3: Vitest Dual-Theme Execution**: Executes full test suites across Dark and Light modes to generate fresh `docs/test-results.json`.
4. **Pass 4: Master Quality Report Auto-Sync**: Reads fresh `docs/test-results.json` to auto-sync `docs/QUALITY_AUDIT_REPORT.md`, `docs/quality-audit-results.json`, `ARCHITECTURE.md`, `docs/LEGACY_BLUEPRINT.md` + `CHANGELOG.md`.
5. **Pass 5: Living Blueprints & ADR Decision Records**: Validates presence of `ARCHITECTURE.md`, `docs/LEGACY_BLUEPRINT.md`, and `docs/DECISIONS.md`.
6. **Pass 6: ESLint Linter & Knip Dead-Code Audit**: Validates code quality rules, accessibility, and zero unused exports.
7. **Pass 7: Production Vite Bundle Compilation**: Verifies clean production `dist/` compilation.

> **Reporting Transparency Standard**: Verification output explicitly details both 0 blocking errors AND any non-blocking advisory warnings (e.g. 20 layout density wrap warnings). All blocking and non-blocking audits are serialized directly into machine-readable JSON ([`docs/quality-audit-results.json`](docs/quality-audit-results.json)) containing explicit references to all generated markdown and test reports.


---

## 📏 3. Code Quality & ESLint AST Line Limits

Code quality is enforced via **ESLint v9 Flat Config** ([eslint.config.js](eslint.config.js)):
- **`max-lines-per-function`**: Capped at **220 lines** per function/component.
- **`max-lines`**: Capped at **350 lines** per file.

---

## 🤖 4. AI Agent Workspace Protocol

All AI coding assistants operating within this codebase must adhere strictly to [.agents/AGENTS.md](.agents/AGENTS.md):
- **Rule 1**: Automated Documentation Synchronization (`ARCHITECTURE.md` & `docs/DECISIONS.md`).
- **Rule 2**: Automated Script & Tooling Maintenance.
- **Rule 3**: Streamlined Programmatic Code Verification.
- **Rule 4**: Safety & Code Integrity Protocol.
- **Rule 5**: Sub-Component Decomposition Protocol.
- **Rule 6**: Automated Verification Engine Protocol.
- **Rule 7**: Approval-First Protocol.
- **Rule 8**: Repository Hygiene & Secret Prevention Protocol.
- **Rule 9**: Automated Commit Formatting Protocol (`[PHASE]`, `[WHY]`, `[WHAT]`, `[VERIFICATION]`).
- **Rule 10**: Domain Separation & Infrastructure Scoping Protocol.
- **Rule 11**: Dual-Stack Reference & Legacy Migration Protocol (`old-src/` read-only).
- **Rule 12**: Master Documentation & Quality Report Registry.

---

## 🛡️ License
Copyright © 2026 Calin M. All rights reserved.
