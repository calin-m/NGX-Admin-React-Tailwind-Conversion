# Workspace Agent Guidelines

## 1. Automated Documentation Synchronization
- **Living Architecture**: Every code modification, component addition, or architectural refactor MUST automatically update `ARCHITECTURE.md` (including C4 Mermaid diagrams and component matrices) via `npm run docs:sync`.
- **Zero-Bloat Rule**: Agents MUST NOT write manual JSDoc headers or documentation comments inside individual presentation components. All component indexing, diagramming, and changelog generation MUST remain 100% script-driven via AST file-tree parsing (`scripts/generate-architecture-matrix.js`).
- **Decision Tracking**: New technical decisions MUST automatically add a numbered Architectural Decision Record (ADR) to `docs/DECISIONS.md` via `npm run adr:new`.

## 2. Automated Script & Tooling Maintenance
- Driver scripts (`scripts/verify-build.js`, `copy-assets.js`), test configs (`vitest.config.js`), linter configs (`eslint.config.js`), and CI workflows (`.github/workflows/ci.yml`) MUST be kept in sync automatically whenever codebase structure changes.

## 3. Streamlined Programmatic Code Verification
- Perform direct AST code parsing, static syntax validation, and unit test execution for code changes.
- Focus on deterministic code-level verification (Vitest test suites, ESLint rules, and Vite build compilation checks).
- Do not record videos or capture visual screenshots unless explicitly requested by the user.

## 4. Safety & Code Integrity Protocol
- All code modifications must strictly preserve existing comments, docstrings, and untargeted lines.

## 5. Sub-Component Decomposition Protocol
- Any presentation component rendering domain item lists or complex sub-views MUST decompose items into discrete, single-responsibility sub-components under dedicated subdirectories (`src/components/ui/`, `src/components/sections/`).

## 6. Automated Verification Engine Protocol
- Every quality audit MUST execute `node scripts/verify-build.js` to validate AST syntax, JSX A11y image alt attributes, living blueprint presence, decision record numbering, and dual-theme state passes.

## 7. Approval-First Protocol
- Before executing any code edits, file modifications, or terminal commands that alter the codebase, the agent MUST present a detailed analysis and proposed plan to the USER and wait for explicit approval.

## 8. Repository Hygiene & Secret Prevention Protocol
- Whenever creating new files, temporary logs, or build artifacts, the agent MUST explicitly audit .gitignore to guarantee secret keys, environment files, and temporary logs never get staged or committed to Git.

## 9. Automated Commit Formatting Protocol
- Whenever recommending or executing Git commits, the agent MUST strictly format the commit message using the full multi-line .gitmessage template structure ([PHASE], [WHY], [WHAT], [VERIFICATION]) via standard git commit.
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


