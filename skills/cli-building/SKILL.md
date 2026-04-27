---
name: cli-building
description: "Scaffold CLI tools with argument parsing, subcommands, async I/O, and formatted terminal output using stricli (TypeScript) or cyclopts (Python). Use when creating a new CLI tool, adding subcommands to an existing CLI, building an interactive terminal application, or selecting a CLI framework."
---

# CLI Building

Build command-line interfaces with async-first I/O, composable subcommands, and proper terminal output.

## CLI Creation Workflow

1. **Choose framework** — stricli (TS) or cyclopts (Python) for async-first; oclif or typer as alternatives
2. **Define command tree** — top-level app → subcommand groups → leaf commands
3. **Implement async handlers** — all file, network, and process I/O via async/await
4. **Format output** — unicode status symbols (✓ ✗ → ⚠), color via libraries, respect `NO_COLOR`
5. **Test in isolation** — unit-test each command handler independently of the CLI harness

## Quick-Start Examples

### TypeScript (stricli)

```typescript
import { buildApplication, buildCommand } from "@stricli/core";

const greet = buildCommand({
  docs: { brief: "Greet a user" },
  parameters: { positional: { kind: "tuple", parameters: [{ brief: "name", parse: String }] } },
  func: async (_flags, name) => {
    console.log(`Hello, ${name}!`);
  },
});

const app = buildApplication(greet, { name: "my-cli", versionInfo: { currentVersion: "1.0.0" } });
export default app;
```

### Python (cyclopts)

```python
import cyclopts

app = cyclopts.App(name="my-cli")

@app.default
async def greet(name: str):
    """Greet a user."""
    print(f"Hello, {name}!")

if __name__ == "__main__":
    app()
```

## Output Formatting Rules

- **No emojis** unless explicitly directed
- **Unicode symbols** for status: ✓ success, ✗ failure, → action, ⚠ warning
- **Color via libraries** (chalk, rich) — never hardcode ANSI escape codes
- **Always respect `NO_COLOR`** environment variable

## Composable Command Patterns

- Extract shared logic (auth, config loading) into reusable middleware or utility functions
- Use the strategy pattern when a command branches into distinct workflows based on input
- Keep leaf commands focused — one responsibility per handler

## References

For detailed guidance, see:
- `references/async-patterns.md` - Async/await best practices
- `references/composable-commands.md` - Command composition patterns
- `references/strategy-pattern.md` - Strategy pattern for workflows
- `references/output-formatting.md` - Output formatting guidelines
- `references/frameworks.md` - Framework comparisons and selection
