# 🗺️ LEGACY ANGULAR (ngx-admin) TO REACT MIGRATION MAPPING MATRIX

> **Purpose**: Cross-reference mapping document tracking the conversion of legacy **Angular 15** components (`old-src/ngx-admin-master`) into modern **React 18 + Tailwind CSS v4** components (`src/`).

---

## 🔁 Conversion Status Key
- 🔴 **Pending**: Not yet converted.
- 🟡 **In Progress**: Currently being converted / prototyped in Storybook.
- 🟢 **Completed**: Converted, tested via Vitest, and auto-indexed in `ARCHITECTURE.md`.

---

## 📊 1. Corporate & Business Dashboard Modules

| Legacy Angular Component (`old-src/ngx-admin-master`) | Target React Component (`src`) | Conversion Status | Notes / Target |
| :--- | :--- | :---: | :--- |
| `pages/e-commerce/profit-card/` | `src/components/sections/ProfitAnalyticsCard.jsx` | 🔴 Pending | Revenue & profit chart widget |
| `pages/e-commerce/traffic-reveal-card/` | `src/components/sections/TrafficRevealCard.jsx` | 🔴 Pending | Traffic sources & breakdown card |
| `pages/e-commerce/country-orders/` | `src/components/sections/CountryOrdersMap.jsx` | 🔴 Pending | Global sales map & country list |
| `pages/e-commerce/user-activity/` | `src/components/sections/UserActivityTimeline.jsx` | 🔴 Pending | User activity timeline feed |
| `pages/e-commerce/earnings-card/` | `src/components/sections/EarningsKpiCard.jsx` | 🔴 Pending | Earnings KPI summary card |

---

## 🧩 2. Layout & UI Primitives Mapping

| Legacy Angular Component (`@theme/`) | Target React Component | Status | Tailwind CSS v4 Notes |
| :--- | :--- | :---: | :--- |
| `@theme/components/header/` | `src/components/ui/Header.jsx` | 🔴 Pending | Top bar with search & profile |
| `@theme/layouts/one-column/` | `src/components/ui/MainLayout.jsx` | 🔴 Pending | Main layout container |
| `@theme/components/footer/` | `src/components/ui/Footer.jsx` | 🔴 Pending | Standard footer |
| `@nebular/theme (nb-card)` | `src/components/ui/Card.jsx` / `GlassCard.jsx` | 🟢 Completed | Reused active primitive |
| `@nebular/theme (nb-button)` | `src/components/ui/Button.jsx` | 🟢 Completed | Reused active primitive |
| `@nebular/theme (nb-badge)` | `src/components/ui/Badge.jsx` | 🟢 Completed | Reused active primitive |

---

*Last Updated: 2026-08-04T17:07:00.000Z*
