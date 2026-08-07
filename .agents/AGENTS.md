# Workspace Agent Guidelines

## 1. Automated Documentation Synchronization
- **Living Architecture**: Every code modification, component addition, or architectural refactor MUST automatically update `ARCHITECTURE.md` (including C4 Mermaid diagrams and component matrices) via `npm run docs:sync`, and generate the in-depth quality report into `docs/QUALITY_AUDIT_REPORT.md` via `npm run report`.
- **Zero-Bloat Rule**: Agents MUST NOT write manual JSDoc headers or documentation comments inside individual presentation components. All component indexing, diagramming, audit reporting, and changelog generation MUST remain 100% script-driven via AST file-tree parsing (`scripts/lib/ast-parser.js`, `scripts/generate-architecture-matrix.js`, `scripts/generate-quality-report.js`).
- **Automated-Only Report Artifacts**: Agents MUST NEVER manually edit programmatic report artifacts (`docs/QUALITY_AUDIT_REPORT.md`, `docs/quality-audit-results.json`, `ARCHITECTURE.md`, `docs/LEGACY_BLUEPRINT.md`, `test-results.json`). All updates to these files MUST occur strictly via automated driver script execution (`npm run verify` / `npm run report` / `.husky/pre-commit`).
- **Decision Tracking**: New technical decisions MUST automatically add a numbered Architectural Decision Record (ADR) to `docs/DECISIONS.md` via `npm run adr:new`.

## 2. Automated Script & Tooling Maintenance
- Driver scripts (`scripts/verify-build.js`, `scripts/generate-quality-report.js`, `scripts/audit-theme-accents.js`, `scripts/audit-all-menu-pages.js`, `scripts/audit-layout-density.js`, `scripts/lib/ast-parser.js`, `copy-assets.js`), test configs (`vitest.config.js`), linter configs (`eslint.config.js`), and CI workflows (`.github/workflows/ci.yml`) MUST be kept in sync automatically whenever codebase structure changes.


## 3. Streamlined Programmatic Code Verification
- Perform direct AST code parsing, static syntax validation, and unit test execution for code changes.
- Focus on deterministic code-level verification (Vitest test suites, ESLint rules, and Vite build compilation checks).
- Do not record videos or capture visual screenshots unless explicitly requested by the user.

## 4. Safety & Code Integrity Protocol
- All code modifications must strictly preserve existing comments, docstrings, and untargeted lines.

## 5. Sub-Component Decomposition Protocol
- Any presentation component rendering domain item lists or complex sub-views MUST decompose items into discrete, single-responsibility sub-components under dedicated subdirectories (`src/components/ui/`, `src/components/sections/`).

## 6. Automated Verification Engine Protocol
- Every quality audit MUST execute `node scripts/verify-build.js` to validate AST syntax, JSX A11y image alt attributes, layout density, 100% theme accent parity across all 17 menu tabs, in-depth quality report generation (`docs/QUALITY_AUDIT_REPORT.md`), living blueprint presence, decision record numbering, and dual-theme state passes.
- **Reporting Transparency Standard**: Agent verification summaries MUST provide 100% transparency by explicitly detailing both zero-blocking errors AND any logged advisory warnings (e.g., layout density wrap risks or lint advisories).


## 7. Approval-First Protocol
- Before executing any code edits, file modifications, or terminal commands that alter the codebase, the agent MUST present a detailed analysis and proposed plan to the USER and wait for explicit approval.

## 8. Repository Hygiene & Secret Prevention Protocol
- Whenever creating new files, temporary logs, or build artifacts, the agent MUST explicitly audit .gitignore to guarantee secret keys, environment files, and temporary logs never get staged or committed to Git.

## 9. Automated Commit Formatting Protocol
- Whenever recommending or executing Git commits, the agent MUST strictly format the commit message using separate `-m` arguments starting with Conventional Commit title line `<type>(<scope>): <summary>` followed by `[PHASE]`, `[WHY] Motivation & Context:`, `[WHAT] Summary of Changes:`, and `[VERIFICATION] Enterprise Quality Checklist:` with bullet points (`- `):

```powershell
git commit `
  -m "<type>(<scope>): <summary>" `
  -m "[PHASE]: Phase Name & Target" `
  -m "[WHY] Motivation & Context:`n- Bullet point explaining motivation 1`n- Bullet point explaining motivation 2" `
  -m "[WHAT] Summary of Changes:`n- Modified path/to/file1 (change description)`n- Modified path/to/file2 (change description)" `
  -m "[VERIFICATION] Enterprise Quality Checklist:`n- 7-Gateway Quality Verification engine verified`n- Living Architecture & Legacy Blueprint synchronized"
```

- **Context Integrity Standard**: Commit messages MUST NEVER contain generic or vague placeholders (e.g. "update files" or "bug fixes"). The [WHY] section MUST state the precise business and technical motivation, and the [WHAT] section MUST explicitly list the modified components, added symbols, API changes, and structural updates so both human maintainers and AI context engines retain full, unambiguous understanding.

## 10. Domain Separation & Infrastructure Scoping Protocol
- **Clear Boundary Isolation**: Development automation infrastructure (`scripts/`, `.husky/`, `.github/`, linter/test configs) MUST remain strictly decoupled from application domain code (`src/`, `api/`).
- **Zero Cross-Pollution**: Application components (`src/components/`) MUST NEVER import from `scripts/` or build tooling. Build tools MUST operate non-intrusively from outside the application domain via AST parsing and CLI hooks.
- **Dual Audit Verification**: Every quality audit MUST independently verify both the **Development Automation Health** (`verify-build.js`, AST syntax, secret scanner, CI/CD) and the **Application Domain Health** (Vitest test suites, UI component rendering, dual-theme parity).

## 11. Dual-Stack Reference & Legacy Migration Protocol
- **Strict Read-Only Isolation**: `old-src/` is strictly a read-only reference directory for converting Angular 15 components to React. Agents MUST NEVER mutate `old-src/` files during component migration.
- **Automated Legacy Blueprint Sync**: Legacy blueprint documentation MUST be automatically generated via `node scripts/generate-legacy-docs.js` into `docs/LEGACY_BLUEPRINT.md`.
- **Governance & Corporate Scope (ADR-002)**: Migration activities MUST adhere strictly to [ADR-002](docs/DECISIONS.md#adr-002-corporate-dashboard-scoped-migration-strategy), targeting the Corporate Business Suite (`pages/e-commerce/`, `@theme/`, `@core/data/`) using the 4-Phase Migration Framework.
- **Dual Documentation Inter-Referencing**: All component migration tasks MUST cross-reference `docs/LEGACY_BLUEPRINT.md` and automatically index newly converted components into `ARCHITECTURE.md`.

## 12. Master Documentation & Quality Report Registry
Agents MUST reference the following registry to locate generated reports and living blueprints:

| Report / Blueprint File | Generating Driver Script | Trigger Command | Purpose & Agent Usage |
| :--- | :--- | :--- | :--- |
| **[`test-results.json`](test-results.json)** | `vitest` | `npm test` / `npm run test:run` | Raw real-time Vitest JSON execution output containing test suite pass/fail assertions and failure trace messages. |
| **[`docs/QUALITY_AUDIT_REPORT.md`](docs/QUALITY_AUDIT_REPORT.md)** | `scripts/generate-quality-report.js` | `npm run report` / `npm run verify` | Full line-by-line AST quality audit, 17-menu-tab theme accent parity breakdown, layout density audit, and Vitest test results. |
| **[`docs/quality-audit-results.json`](docs/quality-audit-results.json)** | `scripts/generate-quality-report.js` | `npm run report` / `npm run verify` | Serialized machine-readable JSON containing full test suite results, health score, menu tab status, and bundle size metrics. |
| **[`ARCHITECTURE.md`](ARCHITECTURE.md)** | `scripts/generate-architecture-matrix.js` | `npm run docs:sync` / `npm run verify` | Active React C4 Level 1-3 system context diagrams, C4 Level 3 Hook dependency graph, AST component index matrix, state dependencies, and prop schemas. |

| **[`docs/LEGACY_BLUEPRINT.md`](docs/LEGACY_BLUEPRINT.md)** | `scripts/generate-legacy-docs.js` | `npm run docs:legacy` / `npm run docs:sync` | 100% component-by-component Angular 15 (`old-src/`) to React 18 (`src/`) conversion tracking blueprint. |
| **[`docs/DECISIONS.md`](docs/DECISIONS.md)** | `scripts/new-adr.js` | `npm run adr:new` | Sequential Architectural Decision Records (ADRs) tracking structural choices. |
| **[`CHANGELOG.md`](CHANGELOG.md)** | `scripts/generate-changelog.js` | `npm run docs:sync` | Keep a Changelog v1.1.0 automated release history. |
| **[`DEVELOPMENT.md`](DEVELOPMENT.md)** | Manual / Script Maintained | N/A | Developer environment setup, command registry, and 7-Gateway Quality Engine rules. |
| **[`docs/PIPELINE_GUIDE.md`](docs/PIPELINE_GUIDE.md)** | Manual / Script Maintained | N/A | CI/CD automation pipeline specification, secret scanner rules, and driver script registry. |


