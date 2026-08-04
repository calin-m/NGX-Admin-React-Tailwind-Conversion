# 📜 ARCHITECTURAL DECISION RECORDS (ADR LOG)

This document records key technical decisions made during the architecture and lifecycle of this application.

---

### ADR-001: Adoption of Enterprise React Starter Boilerplate & Tailwind v4
- **Status**: Approved
- **Context**: Need a production-grade, automated React platform foundation.
- **Decision**: Adopted Vite + React 18 + Tailwind CSS v4 + Storybook 8 + Vitest + 7-Gateway Quality Engine.
- **Consequences**: Zero technical debt, 100% automated documentation sync, and deterministic quality enforcement.

---

### ADR-002: Corporate Dashboard Scoped Migration Strategy
- **Status**: Approved
- **Context**: The legacy reference repository (`old-src/ngx-admin-master`) contains multiple demo modules (IoT Dashboard, E-Commerce/Corporate, Form Controls, Tables, Editors, UI Features).
- **Scope**: Formally scope migration target strictly to the **Corporate Business Suite** (`pages/e-commerce/`, `@theme/`, `@core/data/`).
- **Motivation (WHY)**: Corporate business analytics (revenue charts, profit metrics, traffic reveal cards, global country orders, user activity feeds) represent 100% of real-world enterprise SaaS and B2B portal requirements.
- **Methodology (HOW)**: Executed via the 4-Phase Migration Framework:
  1. *Data Models*: Extract TypeScript DTO interfaces (`src/types/`).
  2. *UI Primitives*: Convert Nebular/Bootstrap SCSS to React + Tailwind v4 primitives in Storybook 8 (`src/components/ui/`).
  3. *State & Logic*: Translate Angular `@Injectable()` RxJS services to React Hooks (`src/hooks/`).
  4. *Page Assembly*: Assemble section components (`src/components/sections/`) & audit via 7-Gateway Engine (`npm run verify`).
- **Timeline (WHEN)**: Iterative component-by-component migration.
- **Consequences**: Focused migration scope, zero bloat, high enterprise relevance, and 100% deterministic quality.

