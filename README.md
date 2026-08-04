# ⚡ ENTERPRISE REACT STARTER — Dual-Stack Modernization Platform

> **Active Target Architecture**: React 18 SPA + Vite 6 + Tailwind CSS v4 + Storybook 8 + Vitest (`src/`)  
> **Legacy Reference Architecture**: Angular 15 + TypeScript + RxJS + Nebular / Bootstrap 4 (`old-src/`)  
> **Living Documentation**: Auto-Synchronized via AST File-Tree Scanning (`ARCHITECTURE.md` & `docs/LEGACY_BLUEPRINT.md`)

Welcome to the **Enterprise React Modernization Platform**. This repository serves a dual purpose: it houses an active, production-grade React 18 + Tailwind CSS v4 application alongside a fully indexed legacy Angular 15 reference suite (`old-src/ngx-admin-master`), providing a structured, 100% deterministic workflow for converting legacy enterprise code into modern React components.

---

## 🏛️ Project Purpose & Scope

This project is engineered to execute an **Enterprise Angular-to-React Modernization Strategy** using the industry-standard **Strangler Fig Pattern**:

1. 📜 **Read-Only Legacy Reference (`old-src/`)**: Holds the complete **Angular 15 (`ngx-admin-master`)** codebase, containing 118 Angular components, 102 templates, and 18 RxJS data services. It is strictly read-only and isolated from all build and linting pipelines.
2. 🚀 **Active Target Stack (`src/`)**: Holds the modern **React 18 + Tailwind CSS v4** architecture. Converted components are built here, isolated in Storybook 8, tested via Vitest, and validated through the 7-Gateway Quality Engine (`npm run verify`).
3. 🔄 **Automated Living Documentation**: Automatically tracks migration progress, dynamically flipping legacy component status from `🔴 Pending` ➡️ `🟢 Completed` in [`docs/LEGACY_BLUEPRINT.md`](docs/LEGACY_BLUEPRINT.md) while indexing active React components in [`ARCHITECTURE.md`](ARCHITECTURE.md).

---

## 🛠️ Framework Concept Translation Standard

Below is the established engineering standard for translating legacy Angular patterns into modern React + Tailwind CSS v4 equivalents:

| Legacy Angular 15 Pattern (`old-src/`) | Modern React 18 Equivalent (`src/`) | Verification & Catalog |
| :--- | :--- | :--- |
| **Angular Component (`.component.ts` + `.component.html`)** | React Functional Component (`.jsx`) | Storybook 8 (`.stories.jsx`) |
| **Angular Services (`@Injectable()`) & RxJS Observables** | React Custom Hooks (`src/hooks/useXxx.js`) | Vitest (`.test.jsx`) |
| **Nebular / Bootstrap SASS Styles (`.scss`)** | Tailwind CSS v4 Utility Classes & Design Tokens | `src/index.css` |
| **Reactive Forms (`FormGroup`, `Validators`)** | React Hook Form / Standard Controlled State | Vitest Test Suite |
| **Angular Input / Output (`@Input()`, `@Output()`)** | React Props (`props`, `onAction`) | Storybook Controls |

---

## 📖 Complete Documentation Network

| Documentation Portal | Purpose / Description | Link |
| :--- | :--- | :---: |
| 🛠️ **Developer Environment Blueprint** | Local Setup, Commands (`dev:all`), Storybook & Quality Gates | [**DEVELOPMENT.md**](DEVELOPMENT.md) |
| 📐 **Master Active Architecture** | Active React C4 Level 1-3 System Diagrams & Component Inventory | [**ARCHITECTURE.md**](ARCHITECTURE.md) |
| 📜 **Master Legacy Blueprint** | Legacy Angular C4 Diagram, 118-Component & RxJS Data Services Inventory | [**docs/LEGACY_BLUEPRINT.md**](docs/LEGACY_BLUEPRINT.md) |
| 📜 **Release Changelog** | Keep a Changelog v1.1.0 Automated Log | [**CHANGELOG.md**](CHANGELOG.md) |
| 🧩 **Component & Storybook Guide** | Component Decomposition, Storybook CSF 3 & Vitest Standards | [**docs/COMPONENT_GUIDE.md**](docs/COMPONENT_GUIDE.md) |
| ⚡ **Automation & Pipeline Guide** | 7-Gateway Engine, Dual-Stack Script Registry & CI/CD Pipelines | [**docs/PIPELINE_GUIDE.md**](docs/PIPELINE_GUIDE.md) |
| 📜 **Architectural Decisions Log** | Numbered Architectural Decision Records (ADRs) | [**docs/DECISIONS.md**](docs/DECISIONS.md) |
| 🤖 **AI Agent Guidelines** | Antigravity AI Assistant Rules & Dual-Stack Protocols | [**.agents/AGENTS.md**](.agents/AGENTS.md) |

---

## 🚦 Master CLI Development Commands

```bash
# 1. Install dependencies for the active React application
npm install

# 2. Launch Vite Dev Server (:5173) & Storybook (:6006) concurrently
npm run dev:all

# 3. Run the Vitest unit test suite
npm test

# 4. Run the 7-Gateway Quality Engine audit & auto-sync living docs
npm run verify

# 5. Manually synchronize documentation across both stacks
npm run docs:sync
```

For complete developer onboarding, script references, and testing standards, please refer to **[DEVELOPMENT.md](DEVELOPMENT.md)**.

---

## 🛡️ License
Copyright © 2026 Calin M. All rights reserved.
