# 📜 AUTOMATED RELEASE CHANGELOG

> **Status**: 100% Auto-Generated from Conventional Git Commits | **Format**: Keep a Changelog v1.1.0

---

## [1.0.0] — 2026-08-04

### 🚀 New Features
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
- **fix(config): eliminate post-commit timestamp drift in documentation generators** (`9665481`) *by Calin on 2026-08-04*
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

*Last Auto-Generated: 2026-08-04T18:39:55.560Z*
