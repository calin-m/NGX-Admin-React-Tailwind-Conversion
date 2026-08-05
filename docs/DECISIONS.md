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

---

### ADR-003: Full System Migration Roadmap (Phased Scope Expansion)
- **Status**: Approved
- **Context**: ADR-002 focused initial conversion efforts on the Corporate Business Suite. The project mandate has expanded to achieve 100% full conversion across all 118 Angular components in `old-src/ngx-admin-master`.
- **Scope**: Expand coverage to all remaining modules (IoT Dashboard, Forms & Steppers, Charts Suite, UI Features, Maps, Data Grids, Auth & Misc pages) with 100% interactive parity.
- **Methodology (HOW)**: Executed in 5 structured phases:
  1. *Phase 1*: Corporate Business Suite Interactivity & Feature Parity Polish.
  2. *Phase 2*: IoT Dashboard Suite (`SolarCard`, `TemperatureCard`, `RoomsCard`, `Player`, `ElectricityCard`).
  3. *Phase 3*: Forms, Stepper & UI Primitives (`FormInputs`, `FormLayouts`, `Datepicker`, `Stepper`, `Dialogs`, `Popover`, `Toastr`).
  4. *Phase 4*: Complete Charting & Maps Suite (`Chartjs`, `D3`, `ECharts`, `Leaflet`, `Google Maps`, `Bubble Maps`).
  5. *Phase 5*: Smart Tables CRUD, TreeGrid & Auth Pages (`SmartTable` full CRUD/filtering, `TreeGrid`, `Login`, `Register`, `ResetPassword`).
- **Consequences**: 100% full repository conversion, complete interactive feature parity, and continuous quality verification via the 7-Gateway Engine.


