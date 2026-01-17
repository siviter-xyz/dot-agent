# Testing

## E2E Testing

- Use Vitest for unit tests
  - Test files `test/<mirror-src-dir>/file.test.ts`
- Use Vitest for integration tests
  - Test files in `test/integration/` directory
- Use Playwright for automated end-to-end testing
  - Test files in `test/e2e/` directory
  - Tests verify form submissions, validation, and user flows
  - Use test utilities for common patterns
  - Take screenshots during tests for debugging

## Test Commands

- `pnpm test` - Run Vitest unit tests
- `pnpm test:e2e` - Run Playwright tests
- `pnpm test:e2e:ui` - Run tests in UI mode

## Test Structure

- Use Page Object Model pattern where appropriate
- Create reusable test utilities
- Test both success and error states
- Verify validation and GDPR requirements
