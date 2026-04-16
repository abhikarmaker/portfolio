# CRA 4 to Modern Stack (Least-Risky Path)

## Goal
Move from legacy CRA tooling to a modern, maintainable frontend stack with minimal downtime and easy rollback.

## Current Baseline (Completed)
1. Upgrade `react-scripts` from `4.0.1` to `5.0.1`.
2. Remove custom `node_modules` patch scripts.
3. Remove OpenSSL legacy wrapper scripts and use standard CRA commands.
4. Keep React at `17.x` to avoid framework-level behavior changes during tooling migration.

## Phase 1: Stabilize on CRA 5
1. Run CI checks (`test`, `build`, lint) on every change.
2. Replace remaining deprecated/unsafe transitive dependencies where possible using non-breaking updates.
3. Keep deployment process unchanged (`gh-pages`) while validating production parity.

## Phase 2: React 18 Compatibility
1. Upgrade `react` and `react-dom` to `18.x`.
2. Update `src/index.js` to `createRoot`.
3. Re-test runtime behavior, especially effects and strict mode interactions.
4. Keep CRA 5 in place for one release cycle to reduce change scope.

## Phase 3: Migrate off CRA (Vite Recommended)
1. Create a migration branch and scaffold Vite React app.
2. Copy source and public assets incrementally.
3. Map env vars and `PUBLIC_URL`/base path behavior to Vite `base` config (`/portfolio/`).
4. Recreate build/deploy scripts and validate GitHub Pages output.
5. Run side-by-side smoke tests before cutover.

## Phase 4: Cleanup
1. Remove CRA-only dependencies and scripts.
2. Tighten lint rules and add dependency auditing in CI.
3. Document local dev + deploy workflow in README.

## Rollback Strategy
1. Keep each phase in a separate PR.
2. Tag releases at each stable phase.
3. If regressions appear, roll back by reverting a single phase PR instead of reverting all modernization work.
