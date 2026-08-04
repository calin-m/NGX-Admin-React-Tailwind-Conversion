# 📜 LEGACY ARCHITECTURE & BLUEPRINT INVENTORY (`old-src/ngx-admin-master`)

> **Status**: Reference Document | **Source Stack**: Angular 15 + TypeScript + RxJS + Nebular / Bootstrap 4

---

## 🏗️ 1. High-Level Legacy Application Structure

The legacy application is structured as a modern enterprise **Angular 15** application using RxJS, TypeScript, Nebular UI, and Angular Material.

- **Root Component**: [`old-src/ngx-admin-master/src/app/app.component.ts`](file:///d:/Proiecte/Real%20Estate%20Demo/old-src/ngx-admin-master/src/app/app.component.ts)
- **Core Theme Module**: [`old-src/ngx-admin-master/src/app/@theme/theme.module.ts`](file:///d:/Proiecte/Real%20Estate%20Demo/old-src/ngx-admin-master/src/app/@theme/theme.module.ts)
- **Core Services Root**: [`old-src/ngx-admin-master/src/app/@core/core.module.ts`](file:///d:/Proiecte/Real%20Estate%20Demo/old-src/ngx-admin-master/src/app/@core/core.module.ts)
- **Corporate & E-Commerce Views**: [`old-src/ngx-admin-master/src/app/pages/e-commerce/`](file:///d:/Proiecte/Real%20Estate%20Demo/old-src/ngx-admin-master/src/app/pages/e-commerce/)

---

## 🧩 2. Corporate & Business Pages Inventory

Below is the inventory of main Corporate & Business components found in `old-src/ngx-admin-master/src/app/pages/e-commerce/`:

| Legacy Angular Component | Description | Conversion Target Status |
| :--- | :--- | :---: |
| `e-commerce/profit-card/profit-card.component.ts` | Corporate Revenue & Profit Charts | 🔴 Pending |
| `e-commerce/traffic-reveal-card/traffic-reveal-card.component.ts` | Traffic Analytics & Breakdown | 🔴 Pending |
| `e-commerce/country-orders/country-orders.component.ts` | Global Sales Map & Orders List | 🔴 Pending |
| `e-commerce/user-activity/user-activity.component.ts` | User Activity Logs & Timelines | 🔴 Pending |
| `e-commerce/earnings-card/earnings-card.component.ts` | KPI & Earnings Cards | 🔴 Pending |
| `e-commerce/e-commerce-bar-chart.component.ts` | Bar Chart Visualizations | 🔴 Pending |

---

## 🎨 3. Legacy Layout Components (`@theme/`)

| Component Directory | Description | Modern React Equivalent |
| :--- | :--- | :--- |
| `@theme/components/header/` | Corporate Top Navbar (Search, Profile, Theme Switch) | `src/components/ui/Header.jsx` |
| `@theme/components/footer/` | Corporate Footer | `src/components/ui/Footer.jsx` |
| `@theme/layouts/one-column/` | Standard One-Column Frame (Header + Sidebar) | `src/components/ui/MainLayout.jsx` |

---

## ⚙️ 4. Angular Source Inventory Count

- **Total Angular Components (`.component.ts`)**: 118
- **Total HTML Templates (`.component.html`)**: 102
- **Total Angular Modules (`.module.ts`)**: 22
- **Total Source Files Scanned**: 430

*Last Synchronized: 2026-08-04T17:07:00.000Z*
