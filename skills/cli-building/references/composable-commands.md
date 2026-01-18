# Composable Commands

Command composition patterns for modular CLI design.

## Command Modules

Create reusable command modules:

```typescript
// shared/commands/base.ts
export function createBaseCommand(options) {
  return async function baseCommand() {
    // Shared behavior
    return options.handler();
  };
}

// commands/user.ts
import { createBaseCommand } from '../shared/commands/base';

export const userCommand = createBaseCommand({
  handler: async () => {
    // User-specific logic
  }
});
```

## Command Middleware

Use middleware for shared behavior:

```typescript
function withAuth(command) {
  return {
    ...command,
    async handler(args) {
      await checkAuth();
      return command.handler(args);
    }
  };
}
```

## Command Composition

Compose commands from smaller parts:

```typescript
const createCommand = compose(
  withAuth,
  withLogging,
  withErrorHandling
);

const myCommand = createCommand({
  name: 'my-command',
  handler: async () => { /* ... */ }
});
```

## Shared Utilities

Extract common functionality:

```typescript
// utils/output.ts
export async function printTable(data) {
  // Shared table printing logic
}

// commands/list.ts
import { printTable } from '../utils/output';

export async function listCommand() {
  const data = await fetchData();
  await printTable(data);
}
```

## Best Practices

1. **Extract common patterns**: Create reusable utilities
2. **Use middleware**: For cross-cutting concerns
3. **Compose commands**: Build complex commands from simple ones
4. **Share utilities**: Common functionality in shared modules
5. **Keep focused**: Each command module should have single responsibility
