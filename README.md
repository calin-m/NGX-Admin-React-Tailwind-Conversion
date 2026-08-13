# ⚡ NGX ADMIN REACT TAILWIND CONVERSION

> **Author & Repository**: Created by **Calin M** ([GitHub Repository](https://github.com/calin-m/NGX-Admin-React-Tailwind-Conversion))  
> **Original Angular Template**: Modernized conversion based on [akveo/ngx-admin](https://github.com/akveo/ngx-admin)  
> **Active Target Architecture**: React 18 SPA + Vite 6 + Tailwind CSS v4 + Storybook 8 + Vitest (`src/`)  
> **Legacy Reference Architecture**: Angular 15 + TypeScript + RxJS + Nebular / Bootstrap 4 (`old-src/`)  
> **Living Documentation Network**: Auto-Synchronized via AST File-Tree Scanning (`ARCHITECTURE.md`, `docs/QUALITY_AUDIT_REPORT.md`, & `docs/LEGACY_BLUEPRINT.md`)

Welcome to the **NGX Admin React Tailwind Conversion Platform**. This enterprise repository serves a dual purpose: it houses an active, production-grade **React 18 + Tailwind CSS v4** application alongside a fully indexed legacy **Angular 15** reference suite (`old-src/ngx-admin-master`) derived from [akveo/ngx-admin](https://github.com/akveo/ngx-admin), providing a structured, 100% deterministic workflow for converting legacy enterprise code into modern React components with **100% dynamic theme accent parity across all 17 sidebar menu tabs**.

---

## 🏛️ Project Purpose & Scope

This project is engineered to execute an **Enterprise Angular-to-React Modernization Strategy** for the [akveo/ngx-admin](https://github.com/akveo/ngx-admin) platform using the industry-standard **Strangler Fig Pattern**:

1. 📜 **Read-Only Legacy Reference (`old-src/`)**: Holds the complete **Angular 15 (`ngx-admin-master`)** codebase, containing 118 Angular components, 102 templates, and 18 RxJS data services. It is strictly read-only and isolated from all build and linting pipelines.
2. 🚀 **Active Target Stack (`src/`)**: Holds the modern **React 18 + Tailwind CSS v4** architecture. Converted components are built here, isolated in Storybook 8, tested via Vitest, and validated through the 7-Gateway Quality Engine (`npm run verify`).
3. 🔄 **Automated Living Documentation**: Automatically tracks migration progress, dynamically flipping legacy component status from `🔴 Pending` ➡️ `🟢 Completed` in [`docs/LEGACY_BLUEPRINT.md`](docs/LEGACY_BLUEPRINT.md) while indexing active React components in [`ARCHITECTURE.md`](ARCHITECTURE.md) and [`docs/QUALITY_AUDIT_REPORT.md`](docs/QUALITY_AUDIT_REPORT.md).

---

## 🎨 100% Dynamic Brand Color Accent Engine

The application features a 0ms instant-repaint dynamic brand accent engine. Selecting a brand color palette in **`ThemeCustomizer`** dynamically recolors 100% of interactive element groups across all 17 menu tabs:

- **Indigo Palette** (`#6366f1` / `#4f46e5`): Corporate default primary accent.
- **Emerald Palette** (`#10b981` / `#059669`): Vibrant energetic eco/finance accent.
- **Purple Palette** (`#a855f7` / `#9333ea`): Sleek modern luxury accent.
- **Teal Palette** (`#14b8a6` / `#0d9488`): Professional tech/data accent.

All presentation components bind to CSS custom properties (`[data-accent]`) using dynamic utility classes (`.bg-accent`, `.hover:bg-accent-hover`, `.text-accent`, `.border-accent`, `.bg-accent-light`, `.focus:ring-accent`).

---

## 🧩 Enterprise UI Primitives Architecture (`src/components/ui/`)

The repository features a suite of 17 low-level **UI Primitives** designed under Atomic Design principles with 100% test coverage in Vitest and Storybook CSF 3 stories:

- **`Card.jsx`**: Compound card container with title, subtitle, top-right extra actions, hover elevation, and dark mode padding.
- **`CardHeader.jsx`**: Universal card header component supporting title, subtitle, status badges, and action slots.
- **`Modal.jsx`**: Accessible modal dialog with backdrop blur, scale entry animation, `✕` close button, backdrop click dismiss, and `Esc` key listener.
- **`AlertBanner.jsx`**: Accessible callout banner (`role="alert"`) supporting `success`, `error`, `warning`, and `info` variants.
- **`Avatar.jsx`**: Automated initials calculation, image fallback, online status dot (`Online`, `Busy`, `Offline`), and sizes (`sm`, `md`, `lg`).
- **`Button.jsx`**: Reusable interactive button supporting `primary`, `secondary`, `outline`, and `ghost` variants with dynamic theme accents.
- **`Badge.jsx`**: Status indicator pill with accent color theming, solid, and subtle variants.
- **`ToggleSwitch.jsx`**: Animated iOS-style toggle switch with full keyboard accessibility and screen-reader labels.
- **`PeriodSelector.jsx`**: Interactive sliding pill period filter (`week`, `month`, `year`) with zero-CLS measurement and accent animations.
- **`FormInput.jsx`**: Standalone form field container with label, helper text, validation message, and integrated clear badge.
- **`ClearableInput.jsx`**: Universal input field with dynamic `✕ ESC` badge (renders when text is entered) and `Esc` key listener.
- **`CircularProgress.jsx`**: SVG-based radial progress ring with animated stroke offsets and centered metric labels.
- **`GlassCard.jsx`**: Glassmorphism container with backdrop blur, subtle borders, and dark mode translucency.
- **`FlipCard.jsx`**: 3D CSS perspective card container supporting smooth front/back flip animations.
- **`FlipButton.jsx`**: Top-right corner flip action trigger button with hover rotation and icon transitions.
- **`RevealCard.jsx`**: Two-layer reveal container supporting slide-over interaction between front and back views.
- **`TrendBadge.jsx`**: Metric delta indicator with directional arrows (▲ / ▼) and positive/negative color coding.

---

## 📌 17 / 17 Sidebar Menu Tab Parity Matrix

Every single page and underlying component across all **17 sidebar menu tabs** has achieved 100% dynamic theme accent parity:

| Menu Tab ID | Menu Label | Page Components | Dynamic Theme Status |
| :--- | :--- | :--- | :---: |
| `dashboard` | **Corporate Dashboard** | `ECommerce.jsx`, `ChartsPanel.jsx`, `OrdersChart.jsx`, `EarningCard.jsx`, `VisitorsAnalytics.jsx`, `UserActivity.jsx`, `CountryOrders.jsx`, `ProfitCard.jsx`, `TrafficRevealCard.jsx`, `ProgressSection.jsx` | 🟢 **100% Fully Dynamic Theme Accents** |
| `iot` | **IoT Smart Home** | `ElectricityCard.jsx`, `SecurityCameras.jsx`, `RoomsCard.jsx`, `TemperatureCard.jsx`, `SolarWeather.jsx` | 🟢 **100% Fully Dynamic Theme Accents** |
| `orders` | **Orders & Invoices** | `OrdersChart.jsx`, `OrderModal.jsx` | 🟢 **100% Fully Dynamic Theme Accents** |
| `users` | **User Management** | `UserManagement.jsx` | 🟢 **100% Fully Dynamic Theme Accents** |
| `chat` | **Support Chat App** | `Chat.jsx` | 🟢 **100% Fully Dynamic Theme Accents** |
| `calendar` | **Calendar Scheduler** | `CalendarApp.jsx` | 🟢 **100% Fully Dynamic Theme Accents** |
| `maps` | **Maps Showcase** | `Maps.jsx`, `BubbleMaps.jsx` | 🟢 **100% Fully Dynamic Theme Accents** |
| `ckeditor` | **CKEditor Text Format** | `CKEditorApp.jsx` | 🟢 **100% Fully Dynamic Theme Accents** |
| `stepper` | **Multi-Step Stepper** | `Stepper.jsx` | 🟢 **100% Fully Dynamic Theme Accents** |
| `accordion` | **Accordion List** | `Accordion.jsx` | 🟢 **100% Fully Dynamic Theme Accents** |
| `grid` | **Responsive Grid** | `Grid.jsx` | 🟢 **100% Fully Dynamic Theme Accents** |
| `typography` | **Typography Scale** | `Typography.jsx` | 🟢 **100% Fully Dynamic Theme Accents** |
| `icons` | **Icon Gallery** | `IconGallery.jsx` | 🟢 **100% Fully Dynamic Theme Accents** |
| `treegrid` | **Tree Grid Table** | `TreeGrid.jsx` | 🟢 **100% Fully Dynamic Theme Accents** |
| `forms` | **Form Controls** | `FormInputs.jsx`, `FormLayouts.jsx`, `FormButtons.jsx` | 🟢 **100% Fully Dynamic Theme Accents** |
| `auth` | **Authentication** | `Login.jsx`, `Register.jsx`, `ResetPassword.jsx` | 🟢 **100% Fully Dynamic Theme Accents** |
| `settings` | **Settings** | `Settings.jsx` | 🟢 **100% Fully Dynamic Theme Accents** |

---

## 🛠️ Framework Concept Translation Standard & Stack Specifications

### 🔴 FROM (Legacy Source Stack in `old-src/ngx-admin-master`)
- **Core Framework**: **Angular 15.2** (`@angular/core` `^15.2.10`, `@angular/router`, `zone.js` `~0.11.4`)
- **Language**: **TypeScript 4.9** (`typescript` `~4.9.5`)
- **UI & Theme Engine**: **Nebular 11** (`@nebular/theme`, `@nebular/auth`, `@nebular/security`) + **Bootstrap 4** (`bootstrap` `4.3.1`)
- **Styling**: **SASS/SCSS** (`node-sass` `^4.14.1`, Nebular `.scss` theme maps)
- **State Management & Async Data**: **RxJS 6.6** (`rxjs` `6.6.2`, `@Injectable()` services)
- **Icon Sets**: **Eva Icons**, Nebular Icons, Ionicons, FontAwesome
- **Data Visualization & Charts**: **ECharts 4** (`ngx-echarts`), **Chart.js 2** (`angular2-chartjs`), **`@swimlane/ngx-charts`**
- **Tables & Forms**: **`ng2-smart-table`** (`1.6.0`), `@angular/forms` (Reactive/Template forms), `ng2-ckeditor`
- **Maps**: **Leaflet 1.2** (`@asymmetrik/ngx-leaflet`), `@angular/google-maps`
- **Testing & Tooling**: Karma + Jasmine (`karma` `~6.3.19`), Protractor, Compodoc, TSLint/ESLint

### 🟢 TO (Modern Target Stack in `src/`)
- **Runtime Environment**: **Node.js 24 LTS** (`v24.18.1`+) / **npm 10+**
- **Core Framework**: **React 18** (`react` `^18.3.1`, `react-dom` `^18.3.1`)
- **Build Tooling & Server**: **Vite 6** (`vite` `^6.0.11`, `@vitejs/plugin-react`)
- **Styling & Design System**: **Tailwind CSS v4** (`tailwindcss` `^4.0.0`, `@tailwindcss/vite`) + Native CSS Custom Properties (`[data-accent]` 0ms repaints)
- **Language / Syntax**: **JavaScript (ESNext)** with standard controlled state / custom React Hooks
- **Icon Set**: **Lucide React** (`lucide-react` `^0.460.0`)
- **Component Workshop**: **Storybook 8** (`storybook` `^8.6.0`, CSF 3 format)
- **Testing Suite**: **Vitest 3** (`vitest` `^3.0.5`, `@testing-library/react`, `jsdom`)
- **Verification & Automation Engine**: AST File-Tree parsing via `@babel/parser` + custom Node.js 7-Gateway scripts in `scripts/`

### 🔄 Summary of Conceptual Mapping

| Legacy Angular 15 Pattern (`old-src/`) | Modern React 18 Equivalent (`src/`) | Verification & Catalog |
| :--- | :--- | :--- |
| **Angular Component (`.component.ts` + `.component.html`)** | React Functional Component (`.jsx`) | Storybook 8 (`.stories.jsx`) |
| **Angular Services (`@Injectable()`) & RxJS Observables** | React Custom Hooks (`src/hooks/useXxx.js`) | Vitest (`.test.jsx`) |
| **Nebular / Bootstrap SASS Styles (`.scss`)** | Tailwind CSS v4 Utility Classes & Design Tokens | `src/index.css` |
| **Reactive Forms (`FormGroup`, `Validators`)** | React Hook Form / Standard Controlled State | Vitest Test Suite |
| **Angular Input / Output (`@Input()`, `@Output()`)** | React Props (`props`, `onAction`) | Storybook Controls |
| **Build Tooling (Angular CLI + Webpack)** | Vite 6 (`vite`) | `vite.config.js` |
| **Iconography (Eva Icons / Nebular Icons)** | Lucide React (`lucide-react`) | `src/components/` |
| **Testing Suite (Karma + Jasmine)** | Vitest 3 (`vitest`) | `vitest.config.js` |
| **Quality Verification Engine** | AST 7-Gateway Verification Engine (`scripts/verify-build.js`) | `npm run verify` |

---

## 📖 Master Documentation Network

| Documentation Portal | Purpose / Description | Link |
| :--- | :--- | :---: |
| 🛡️ **In-Depth Quality Audit Report** | Full Line-by-Line AST Audit, Theme Parity & Test Case Breakdown | [**docs/QUALITY_AUDIT_REPORT.md**](docs/QUALITY_AUDIT_REPORT.md) |
| 📊 **Machine-Readable Audit JSON** | Serialized AST audit, test results, layout density & bundle size metrics | [**docs/quality-audit-results.json**](docs/quality-audit-results.json) |
| 📐 **Master Active Architecture** | Active React C4 Level 1-3 System Diagrams & Hook Dependency Graph | [**ARCHITECTURE.md**](ARCHITECTURE.md) |

| 📜 **Master Legacy Blueprint** | Legacy Angular C4 Diagram, 118-Component & RxJS Data Services Inventory | [**docs/LEGACY_BLUEPRINT.md**](docs/LEGACY_BLUEPRINT.md) |
| 🛠️ **Developer Environment Blueprint** | Local Setup, Commands (`dev:all`), Storybook & Quality Gates | [**DEVELOPMENT.md**](DEVELOPMENT.md) |
| 📜 **Release Changelog** | Keep a Changelog v1.1.0 Automated Log | [**CHANGELOG.md**](CHANGELOG.md) |
| 🧩 **Component & Storybook Guide** | Component Decomposition, Storybook CSF 3 & Vitest Standards | [**docs/COMPONENT_GUIDE.md**](docs/COMPONENT_GUIDE.md) |
| ⚡ **Automation & Pipeline Guide** | 7-Gateway Engine, Dual-Stack Script Registry & CI/CD Pipelines | [**docs/PIPELINE_GUIDE.md**](docs/PIPELINE_GUIDE.md) |
| 📜 **Architectural Decisions Log** | Numbered Architectural Decision Records (ADRs) | [**docs/DECISIONS.md**](docs/DECISIONS.md) |
| 🤖 **AI Agent Guidelines** | Antigravity AI Assistant Rules & Dual-Stack Protocols | [**.agents/AGENTS.md**](.agents/AGENTS.md) |

---

## 🚦 Comprehensive CLI Command Registry

Below is the complete suite of development, testing, auditing, documentation, and build commands available in the project:

### 1. 💻 Development & Workshop Servers
```bash
# Launch Vite Dev Server (:5173) standalone
npm run dev

# Launch Vite Dev Server (:5173) & Storybook (:6006) concurrently
npm run dev:all

# Launch Storybook Component Workshop (:6006) standalone
npm run storybook
```

### 2. 🧪 Unit Testing & Quality Verification
```bash
# Execute full Vitest unit test suite
npm test

# Run Vitest unit tests in interactive watch mode
npm run test:watch

# Collect LCOV unit test coverage report
npm run test:coverage

# Generate the in-depth quality audit report (docs/QUALITY_AUDIT_REPORT.md)
npm run report

# Execute the master 7-Gateway Quality Verification Engine audit
npm run verify
```

### 3. 🔍 AST Audit Tools
```bash
# Run AST brand color accent coverage audit
node scripts/audit-theme-accents.js

# Run AST 17-menu-tab page audit runner
node scripts/audit-all-menu-pages.js

# Run AST layout density & flex collision scanner
node scripts/audit-layout-density.js
```

### 4. 📚 Documentation & Architectural Decision Tools
```bash
# Synchronize Living Architecture (ARCHITECTURE.md) & C4 Mermaid diagrams
npm run docs:sync

# Synchronize Legacy Angular Migration Blueprint (docs/LEGACY_BLUEPRINT.md)
node scripts/generate-legacy-docs.js

# Create a new numbered Architectural Decision Record (docs/DECISIONS.md)
npm run adr:new
```

### 5. 📦 Production Build & Distribution
```bash
# Compile optimized React + Tailwind v4 production bundle (dist/)
npm run build

# Build static Storybook documentation website (storybook-static/)
npm run build-storybook

# Preview local production build
npm run preview
```

---

## 🛡️ License & Author Attribution
Created by **Calin M** ([Repository URL](https://github.com/calin-m/NGX-Admin-React-Tailwind-Conversion)). All rights reserved.
