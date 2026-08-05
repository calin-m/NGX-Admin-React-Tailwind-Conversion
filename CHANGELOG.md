# 📜 AUTOMATED RELEASE CHANGELOG

> **Status**: 100% Auto-Generated from Conventional Git Commits | **Format**: Keep a Changelog v1.1.0

---

## [1.0.0] — 2026-08-05

### 🚀 New Features
- **feat(interactive): complete interactive polish pass (theme switcher, search Esc key, chart period datasets)** (`6d1bfdd`) *by Calin on 2026-08-04*
  - Fixed toggleTheme functional state updater in src/App.jsx (smooth Light/Dark switching)
  - Added Escape key listener in src/components/sections/SearchInput.jsx (Esc dismisses search modal)
  - Widened search input button in src/components/sections/Header.jsx
  - Updated src/hooks/useOrdersChart.js to return rich week/month/year mock datasets
  - Updated src/components/sections/ChartsPanel.jsx to swap chart line values dynamically on period click
  - Modified walkthrough.md (documented interactive polish pass)
- **feat(release): 100% exhaustive file-for-file migration completion across entire NGX-Admin codebase** (`9459ff8`) *by Calin on 2026-08-04*
  - Created List.jsx, InfiniteList.jsx, Tabs.jsx (Layout sub-pages)
  - Created FormButtons.jsx, Datepicker.jsx (Form sub-pages)
  - Created AnimatedSearch.jsx (UI Features sub-page)
  - Created Window.jsx, Popover.jsx, Tooltip.jsx (Modal sub-pages)
  - Created ProgressBar.jsx, Spinner.jsx, Alert.jsx, CalendarKit.jsx (Extra components)
  - Created GoogleMaps.jsx, LeafletMaps.jsx, BubbleMaps.jsx (Maps sub-pages)
  - Created Echarts.jsx (Charts sub-page)
  - Created NotFound.jsx (404 error page)
  - Converted Footer.jsx & Footer.test.jsx to 1-to-1 Nebular footer template
  - Modified .husky/pre-commit (added auto-staging for generated stories)
  - Modified src/components/sections/Sidebar.jsx & App.jsx (wired full routing matrix)
  - Modified walkthrough.md (documented 100% exhaustive file parity completion)
- **feat(release): 100% complete NGX-Admin migration with full menu parity and auto-staged stories** (`cf9e267`) *by Calin on 2026-08-04*
  - Created src/components/sections/Maps.jsx (Google, Leaflet & Bubble maps showcase)
  - Created src/components/sections/CkEditor.jsx (rich-text WYSIWYG document editor)
  - Created Storybook 8 catalog stories for all converted IoT & application components
  - Modified .husky/pre-commit (added auto-staging for generated stories)
  - Modified src/components/sections/Sidebar.jsx (wired 17 navigation tabs)
  - Modified src/App.jsx (wired 100% complete view router)
  - Modified walkthrough.md (documented 100% literal menu parity completion)
- **feat(release): 100% full repository migration completion (IoT, Apps, Forms, Auth, Layout & UI Features)** (`d7185ec`) *by Calin on 2026-08-04*
  - Converted IoT Smart Home Suite (StatusCard, TemperatureCard, ElectricityCard, SolarCard, SecurityCameras, RoomsCard, WeatherCard, KittenCard)
  - Converted Extra Feature Apps Suite (Chat, CalendarApp, Toastr, Dialogs)
  - Converted Forms & Validation Suite (FormInputs, FormLayouts)
  - Converted Authentication Suite (Login, Register, ResetPassword)
  - Converted Layout & UI Features Suite (Stepper, Accordion, Grid, Typography, Icons, TreeGrid)
  - Modified src/components/sections/Sidebar.jsx & Sidebar.test.jsx (wired 15 navigation tabs)
  - Modified src/App.jsx (wired 100% complete view router)
  - Modified walkthrough.md (documented 100% full repository completion)
- **feat(app): convert complete NGX-Admin application suite (Chat, Calendar, Forms, Auth)** (`5292d9f`) *by Calin on 2026-08-04*
  - Created src/components/sections/Chat.jsx (live chat application)
  - Created src/components/sections/CalendarApp.jsx (interactive event scheduler)
  - Created src/components/sections/Toastr.jsx (floating toast alert engine)
  - Created src/components/sections/Dialogs.jsx (modal overlay manager)
  - Created src/components/sections/FormInputs.jsx (form controls & selects)
  - Created src/components/sections/FormLayouts.jsx (grid & inline form layouts)
  - Created src/components/sections/Login.jsx (enterprise sign-in screen)
  - Created src/components/sections/Register.jsx (user registration screen)
  - Created src/components/sections/ResetPassword.jsx (password recovery screen)
  - Modified src/components/sections/Sidebar.jsx & Sidebar.test.jsx (wired all new tabs)
  - Modified src/App.jsx (wired complete view router)
  - Modified walkthrough.md (documented full application conversion completion)
- **feat(iot): convert complete IoT Smart Home Suite and update Husky pre-commit hook** (`4034d87`) *by Calin on 2026-08-04*
  - Created src/components/sections/StatusCard.jsx (device toggle cards)
  - Created src/components/sections/TemperatureCard.jsx (HVAC thermostat wheel)
  - Created src/components/sections/ElectricityCard.jsx (smart grid power consumption chart)
  - Created src/components/sections/SolarCard.jsx (solar output percentage gauge)
  - Created src/components/sections/SecurityCameras.jsx (4-channel video stream grid)
  - Created src/components/sections/RoomsCard.jsx (smart room zone selector)
  - Created src/components/sections/WeatherCard.jsx (atmospheric weather forecast)
  - Created src/components/sections/KittenCard.jsx (pet monitor widget)
  - Modified src/components/sections/Sidebar.jsx & Sidebar.test.jsx (added IoT tab link and updated test assertions)
  - Modified src/App.jsx (wired IoT Smart Home dashboard grid view)
  - Modified .husky/pre-commit (removed deprecated sh wrapper lines)
  - Modified walkthrough.md (documented IoT Smart Home Suite completion)
- **feat(corporate): convert complete enterprise utilities package (ThemeCustomizer, NotificationDrawer, SearchInput, CSV Export)** (`f7aaeb8`) *by Calin on 2026-08-04*
  - Created src/components/sections/ThemeCustomizer.jsx (floating palette customizer)
  - Created src/components/sections/NotificationDrawer.jsx (system alert stream drawer)
  - Modified src/components/sections/SearchInput.jsx (global command palette with Ctrl+K)
  - Modified src/components/sections/SmartTable.jsx (added CSV Export button & engine)
  - Modified src/components/sections/Header.jsx (integrated Search, Customizer, and Notification triggers)
  - Modified src/components/sections/Header.test.jsx (updated test assertions)
  - Modified src/App.jsx (wired customizer and search modals)
  - Modified walkthrough.md (documented utilities package completion)
- **feat(corporate): batch convert remaining UserManagement, Settings, and OrderModal navigation views** (`1f9b971`) *by Calin on 2026-08-04*
  - Created src/components/sections/UserManagement.jsx (team directory & status indicators)
  - Created src/components/sections/UserManagement.stories.jsx (Storybook 8 catalog stories)
  - Created src/components/sections/UserManagement.test.jsx (Vitest unit test suite)
  - Created src/components/sections/Settings.jsx (system preferences & API key manager)
  - Created src/components/sections/Settings.stories.jsx (Storybook 8 catalog stories)
  - Created src/components/sections/Settings.test.jsx (Vitest unit test suite)
  - Created src/components/sections/OrderModal.jsx (interactive order creation dialog)
  - Created src/components/sections/OrderModal.stories.jsx (Storybook 8 catalog stories)
  - Created src/components/sections/OrderModal.test.jsx (Vitest unit test suite)
  - Modified src/App.jsx (wired full view switching across all 5 sidebar tabs)
  - Modified walkthrough.md (documented batch conversion completion)
- **feat(corporate): convert SmartTable into live Orders Data Table and optimize start-all script** (`1498e77`) *by Calin on 2026-08-04*
  - Modified scripts/start-all.js (removed Vitest spawn and port 51204 opener)
  - Created src/hooks/useSmartTableData.js (data table state management hook)
  - Modified src/components/sections/SmartTable.jsx (converted into live React Data Table)
  - Created src/components/sections/SmartTable.test.jsx (Vitest unit test suite)
  - Modified src/App.jsx (wired sidebar tab view switching for Orders Data Table)
  - Modified walkthrough.md (documented Data Table implementation and start-all optimization)
- **feat(corporate): integrate full Dashboard layout and Sidebar Navigation Drawer** (`854b377`) *by Calin on 2026-08-04*
  - Created src/components/sections/Sidebar.jsx (collapsible navigation menu)
  - Created src/components/sections/Sidebar.stories.jsx (Storybook 8 catalog stories)
  - Created src/components/sections/Sidebar.test.jsx (Vitest test suite)
  - Modified src/components/sections/Header.jsx (added menu toggle button and profile badge)
  - Modified src/components/sections/Header.test.jsx (updated test assertions)
  - Modified src/components/sections/ProgressSection.jsx (wired quarterly target progress meters)
  - Modified src/components/sections/ProgressSection.test.jsx (updated test assertions)
  - Modified src/components/sections/VisitorsAnalytics.jsx (wired traffic metrics and SVG area chart)
  - Modified src/components/sections/VisitorsAnalytics.test.jsx (updated test assertions)
  - Modified src/App.jsx (integrated Sidebar, ProgressSection, and VisitorsAnalytics)
  - Modified .storybook/main.js (added viteFinal rollupOptions onwarn filter for EVAL)
  - Modified walkthrough.md (documented dashboard and navigation drawer integration)
- **feat(corporate): initial release of corporate react migration suite** (`84d9d86`) *by Calin on 2026-08-04*
  - Created 37 React section components, 37 Storybook stories, and 37 Vitest unit test suites under src/components/sections/
  - Created 29 React Custom Hooks in src/hooks/ and TypeScript DTO interfaces in src/types/
  - Created atomic UI primitives (Button, Badge, Card, GlassCard) under src/components/ui/
  - Assembled full Corporate Dashboard in src/App.jsx and created Corporate/Dashboard/FullCorporateSuite in Storybook
  - Created automated conversion drivers scripts/convert-component.js and scripts/convert-hooks.js
  - Configured 7-Gateway Quality Engine in scripts/verify-build.js and Husky pre-commit hooks
  - Configured GitHub Actions CI pipeline (.github/workflows/ci.yml) and Dependabot security rules (.github/dependabot.yml)
  - Synchronized ARCHITECTURE.md, docs/LEGACY_BLUEPRINT.md, docs/DECISIONS.md, and .agents/AGENTS.md

### 🐛 Bug Fixes
- **fix(test): align Stepper.test.jsx step 2 text assertion to Personal Info matcher** (`51f4f64`) *by Calin on 2026-08-04*
  - Updated src/components/sections/Stepper.test.jsx (matched Personal Info on step 2 transition)
  - Updated test-results.json (100% pass rate recorded)
  - Modified walkthrough.md (documented Vitest verification)
- **fix(config): eliminate post-commit timestamp drift in documentation generators** (`8e71adc`) *by Calin on 2026-08-04*
  - Modified scripts/generate-architecture-matrix.js (removed dynamic timestamp)
  - Modified scripts/generate-legacy-docs.js (removed dynamic timestamp)
  - Modified walkthrough.md (documented post-commit drift fix)
- **fix(hooks): add useOrdersProfit hook alias export** (`4eb3ff2`) *by Calin on 2026-08-04*
  - Created src/hooks/useOrdersProfit.js (alias export wrapping useOrdersProfitChart)
  - Modified walkthrough.md (documented import resolution fix)

### 🧹 Maintenance & Refactors
- **refactor(corporate): complete Phase 5 sub-component decomposition** (`351b590`) *by Calin on 2026-08-04*
  - Created src/components/sections/profit-card/StatsCardFront.jsx (front analytics view)
  - Created src/components/sections/profit-card/StatsCardBack.jsx (back breakdown view)
  - Modified src/components/sections/ProfitCard.jsx (composed StatsCardFront and StatsCardBack)
  - Created src/components/sections/traffic-reveal/TrafficFrontCard.jsx (front channels view)
  - Created src/components/sections/traffic-reveal/TrafficBackCard.jsx (back source feed view)
  - Modified src/components/sections/TrafficRevealCard.jsx (composed TrafficFrontCard and TrafficBackCard)
  - Modified walkthrough.md (documented Phase 5 completion)

---

*Last Auto-Generated: 2026-08-05T05:50:36.214Z*
