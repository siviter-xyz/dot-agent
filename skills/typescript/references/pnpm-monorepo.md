# TypeScript pnpm Monorepo Guidelines

Guidelines for TypeScript monorepos managed by `pnpm` with workspace support.

## Project Structure

### Layout

- Root workspace at repository root
- Packages under `packages/` directory (or `apps/` for applications)
- Shared config in root `package.json` and `tsconfig.json`
- Workspace configuration in `pnpm-workspace.yaml`

### Package Structure

Required structure for each package:

```
packages/<package-name-kebab-case>/
├── package.json          # Package config and dependencies
├── tsconfig.json         # TypeScript config (extends root)
├── src/
│   ├── index.ts          # Main entry point
│   └── <submodule>/      # Submodules
└── tests/                # Mirrors src structure
    └── <submodule>.test.ts
```

**Naming**: Directories use kebab-case; TypeScript files use camelCase

## Build System

- **Package manager**: pnpm (>=10)
- **Node version**: 24.x (or as specified in engines)
- **TypeScript**: Latest stable (5.x)
- **Build tool**: Prefer Vite for applications (unless directed otherwise)
- **Modern Rust-based tooling**: Use Rolldown, esbuild, or tsup for libraries or when performance is critical
- Avoid Webpack and other older JavaScript-based bundlers unless specifically required

### Build Tool Selection

**Default: Vite**
- Use for applications, websites, and most projects
- Excellent DX with HMR, fast builds, and plugin ecosystem
- Works well with React, Vue, Svelte, Astro, and other frameworks

**For Libraries or Performance-Critical Code:**
- **Rolldown**: Modern Rust-based bundler (Vite-compatible API)
- **esbuild**: Fast JavaScript/TypeScript bundler
- **tsup**: Zero-config TypeScript bundler built on esbuild

**When to Use Lower-Level Tooling:**
- Building npm packages or libraries
- Performance-critical builds
- When Vite's abstraction isn't needed
- Custom build requirements

## Dependency Management

- **Tool**: ALWAYS use `pnpm`. NEVER use npm or yarn directly
- **Root dependencies**: Available to all packages (dev dependencies)
- **Install**: Use `pnpm install` to install/sync
- **Package dependencies**: Specify in individual `package.json`
- **Workspace dependencies**: Reference workspace packages with `workspace:*`

## Workspace Configuration

### pnpm-workspace.yaml

```yaml
packages:
  - packages/*
  - apps/*
```

### Root package.json

```json
{
  "name": "root",
  "private": true,
  "packageManager": "pnpm@10.16.1",
  "engines": {
    "node": "24.x",
    "pnpm": ">=10"
  },
  "scripts": {
    "build": "pnpm -r build",
    "test": "pnpm -r test",
    "lint": "pnpm -r lint",
    "format": "prettier --write .",
    "typecheck": "pnpm -r typecheck"
  }
}
```

## Package Organization

### Cross-Package Dependencies

- Reference workspace packages: `"@workspace/package-name": "workspace:*"`
- Extract common functionality into a shared core package
- Establish clear dependency hierarchy; avoid circular dependencies
- Use TypeScript project references for better type checking

### Package Boundaries

- Each package is independently buildable and testable
- Expose only necessary APIs through public exports
- Keep implementation details private within modules
- Place shared utilities in dedicated packages

## TypeScript Configuration

### Root tsconfig.json

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "skipLibCheck": true,
    "composite": true
  },
  "files": [],
  "references": [
    { "path": "./packages/package-a" },
    { "path": "./packages/package-b" }
  ]
}
```

### Package tsconfig.json

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "references": [
    { "path": "../shared-core" }
  ]
}
```

## Testing

### Structure

- Tests mirror `src/` directory structure
- Test files: `*.test.ts` or `*.spec.ts`
- Use Vitest for unit and integration tests
- Use Playwright for end-to-end (E2E) tests

### Vitest Configuration

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html']
    }
  }
});
```

### Playwright Configuration

```typescript
// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },
});
```

## Tooling

### Modern Lightweight Stack

- **Vitest**: Fast test runner for unit/integration tests (replaces Jest)
- **Playwright**: End-to-end testing framework
- **Prettier**: Code formatting
- **ESLint**: Linting with TypeScript support
- **TypeScript**: Type checking
- **pnpm**: Package management

### Scripts

```json
{
  "scripts": {
    "dev": "vite dev",
    "build": "tsc && vite build",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "typecheck": "tsc --noEmit",
    "fix": "pnpm format && pnpm lint:fix"
  }
}
```

## Framework Integration

### Astro (Recommended for Non-Heavy Client Interaction)

- Excellent for content-focused sites, blogs, documentation
- Minimal JavaScript by default
- Static generation with server islands when needed
- TypeScript-first with excellent developer experience
- Use `@astrojs/ts-plugin` for optimal TypeScript support

### React/Vue/Svelte

- Use appropriate TypeScript templates
- Configure TypeScript for framework-specific features
- Use framework-specific type definitions

## Best Practices

1. **Use pnpm workspaces** for monorepo management
2. **TypeScript project references** for faster type checking
3. **Vitest for unit/integration tests**, **Playwright for E2E tests**
4. **Prettier + ESLint** for consistent code style
5. **Explicit types** to reduce inference time
6. **Avoid barrel exports** to prevent circular dependencies
7. **Clear package boundaries** with minimal cross-package dependencies
