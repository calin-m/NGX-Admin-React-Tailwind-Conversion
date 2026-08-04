# 🛠️ ENTERPRISE REACT STARTER — Developer Environment & Engineering Blueprint

> **Environment**: Node.js 18+ | **Build Tool**: Vite + React 18 | **Design System**: Storybook 8 | **Test Suite**: Vitest + RTL + JSDOM

Welcome to the **Developer Environment Guide**. This document defines local setup, testing workflows, quality gates, and deployment pipelines.

---

## 💻 1. Local Development Setup & Commands

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Master Development Commands

| Command | Action / Description | Target |
| :--- | :--- | :--- |
| `npm run dev:all` | **Master Concurrent Suite**: Spawns Vite Dev Server & Storybook concurrently | Vite `:5173` & Storybook `:6006` |
| `npm run dev` | Launches local Vite development server | `http://localhost:5173` |
| `npm run storybook` | Launches Storybook Design System Catalog | `http://localhost:6006` |
| `git commit` | **Standard Enterprise Commit**: High-context commit using `.gitmessage` template | Git Commit History |
| `npm test` | Runs Vitest unit test suite once in terminal | Terminal Output |
| `npm run test:watch` | Runs Vitest in interactive watch mode | Terminal Output |
| `npm run verify` | Runs programmatic 7-Gateway Quality Engine + Dual-Stack Doc Sync | Terminal Output |
| `npm run docs:sync` | Auto-synchronizes active React architecture, legacy blueprint & release changelog | `ARCHITECTURE.md`, `docs/LEGACY_BLUEPRINT.md` & `CHANGELOG.md` |
| `npm run docs:legacy` | Auto-synchronizes legacy Angular reference blueprint & conversion tracking | `docs/LEGACY_BLUEPRINT.md` |

---

## 🛡️ 2. 7-Gateway Quality Engine (`node scripts/verify-build.js`)

Executing `npm run verify` triggers a 7-pass quality gate audit:
1. **Pass 0: Zero-Manual Auto-Scaffolder & Doc Sync**: Auto-scaffolds missing tests/stories & syncs `ARCHITECTURE.md`.
2. **Pass 1: AST Syntax & A11y Audit**: Validates JSX syntax and image `alt` accessibility attributes.
3. **Pass 2: Ghost Files Audit**: Ensures no orphan or dead files exist in `src/`.
4. **Pass 3: Living Architecture Blueprint (`ARCHITECTURE.md`)**: Verifies C4 Mermaid Level 1-3 diagrams.
5. **Pass 4: ADR Decision Records (`docs/DECISIONS.md`)**: Validates sequential numbering of Architectural Decision Records.
6. **Pass 5 & 6: Vitest Dual-Theme Execution**: Executes full test suites across Dark and Light modes.
7. **Pass 7: Production Vite Bundle Compilation**: Verifies clean production `dist/` compilation.

---

## 📏 3. Code Quality & ESLint AST Line Limits

Code quality is enforced via **ESLint v9 Flat Config** ([eslint.config.js](eslint.config.js)):
- **`max-lines-per-function`**: Capped at **180 lines** per function/component.
- **`max-lines`**: Capped at **250 lines** per file.

---

## 🤖 4. AI Agent Workspace Protocol

All AI coding assistants operating within this codebase must adhere strictly to [.agents/AGENTS.md](.agents/AGENTS.md):
- **Rule 1**: Automated Documentation Synchronization (`ARCHITECTURE.md` & `docs/DECISIONS.md`).
- **Rule 2**: Automated Script & Tooling Maintenance.
- **Rule 3**: Streamlined Programmatic Code Verification.
- **Rule 4**: Safety & Code Integrity Protocol.
- **Rule 5**: Sub-Component Decomposition Protocol.
- **Rule 6**: Automated Verification Engine Protocol.
- **Rule 7**: **Approval-First Protocol**.

---

## 🛡️ License
Copyright © 2026 Calin M. All rights reserved.
