---
name: software-engineer
description: "Enforce self-documenting naming conventions, clean commit hygiene (no stale TODO/FIXME markers), structured detect-change-verify development workflows, and NO_COLOR-compliant terminal output formatting. Use when reviewing naming or comment quality, detecting a project's existing workflow patterns (spec-first, TDD), deciding when to stop and ask the user for clarification, or configuring terminal output formatting rules."
---

# Software Engineering Principles

Cross-cutting conventions for code style, documentation, development workflow, and output formatting.

## Code Style

- **Self-documenting code**: Use clear naming and structure; reserve comments for non-obvious design decisions only
- **No stale markers**: Do not leave TODO/FIXME in committed code unless directed — implement, file an issue, or delete
- **Follow existing patterns**: Match established conventions in the codebase before introducing new ones
- **Single responsibility**: Each function and component has one clear purpose

```diff
# Bad — comment restates the code
- user = get_user(id)  # get the user by id

# Good — comment explains non-obvious "why"
+ user = get_user(id)  # cached; DB call only on first access per request
```

## Development Workflow

1. **Detect project workflow**: Check for `docs/`, `specs/`, test-first patterns, or plan files — follow existing workflow when present
2. **Make changes**: Edit code directly; do not run `git add`/`commit`/`push` unless directed
3. **Verify**: Run the project's test and lint commands; if they fail, fix and re-run before proceeding
4. **Review diff**: Confirm changes match intent before handing back

### Stop and Ask

Pause and confirm with the user when:
- Uncertain how to proceed or requirements are ambiguous
- About to add type ignores, suppressions, or `any` types
- A better alternative exists but needs confirmation

### Behavioral Rules

- **Fact-based**: Search documentation rather than guessing; ask when clarification is needed
- **Constructive disagreement**: Propose better alternatives with technical justification rather than silently accepting suboptimal direction
- **Backward compatibility**: Only required for public-facing APIs/libraries — for internal code, tests are the confirmation gate

## Output Formatting

- No emojis unless directed; unicode symbols (✓ ✗ → ⚠) are acceptable
- Use color libraries (chalk, rich, etc.) — never hardcode ANSI escape codes
- Always respect the `NO_COLOR` environment variable

## Documentation

- Concise, scannable structure with clear headings; no verbose paragraphs
- Use the stack's standard documentation style (JSDoc, docstrings, XML comments, etc.)

## References

For detailed guidance, see:
- `references/workflow-patterns.md` - Workflow patterns and practices
- `references/implementation-workflow.md` - Unified implementation workflow
