# Strategy Pattern

Using strategy pattern for CLI workflow branching.

## Workflow Branching

Use strategy pattern for different workflows:

```typescript
interface WorkflowStrategy {
  execute(): Promise<void>;
}

class BuildWorkflow implements WorkflowStrategy {
  async execute() {
    // Build workflow logic
  }
}

class DeployWorkflow implements WorkflowStrategy {
  async execute() {
    // Deploy workflow logic
  }
}

function selectWorkflow(type: string): WorkflowStrategy {
  switch (type) {
    case 'build': return new BuildWorkflow();
    case 'deploy': return new DeployWorkflow();
    default: throw new Error('Unknown workflow');
  }
}
```

## Task-Based Commands

Use strategy for task selection:

```typescript
const taskStrategies = {
  init: new InitTask(),
  build: new BuildTask(),
  test: new TestTask(),
};

const task = taskStrategies[taskName];
if (task) {
  await task.execute();
}
```

## Dynamic Routing

Route commands based on context:

```typescript
class CommandRouter {
  private strategies: Map<string, WorkflowStrategy>;

  route(command: string, context: Context): WorkflowStrategy {
    const strategy = this.strategies.get(command);
    if (!strategy) {
      throw new Error(`Unknown command: ${command}`);
    }
    return strategy;
  }
}
```

## Best Practices

1. **Separate strategies**: Each strategy in own module
2. **Common interface**: All strategies implement same interface
3. **Factory pattern**: Use factory to create strategies
4. **Context passing**: Pass context to strategies
5. **Error handling**: Handle strategy selection errors
