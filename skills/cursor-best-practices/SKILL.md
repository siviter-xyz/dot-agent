---
name: cursor-best-practices
description: "Configure .cursorrules files, manage Composer context windows, use Plan Mode for multi-file edits, and set up parallel agents in the Cursor IDE. Use when working in Cursor, configuring Cursor settings, writing .cursorrules, using Composer or Agent mode, or optimizing Cursor AI workflows."
---

# Cursor Best Practices

Practices for maximizing productivity and code quality when working with the Cursor AI code editor.

## Quick-Start Workflow

1. **Plan first**: Press `Shift+Tab` to enter Plan Mode — outline the task before generating code
2. **Scope context**: Start a new Composer conversation per task; attach only relevant files (`@file`) rather than entire directories
3. **Iterate with TDD**: Write a failing test → ask Cursor to implement → run tests → iterate until green
4. **Review diffs**: Read every generated diff before accepting; treat AI output like a junior engineer's PR

## Context Management

- **New conversation per task** — stale context causes drift and hallucinations
- **Let the agent search** — avoid manually pasting large files; use `@codebase` or `@file` references
- **Prune attachments** — remove files from context once they are no longer relevant to the current task
- **Rules for static context** — project conventions belong in `.cursorrules` or `.cursor/rules/`, not repeated in every prompt
- **Skills for dynamic capabilities** — install reusable skill packages for specialized workflows

## Parallel Agents

Run multiple Composer agents simultaneously to compare approaches:
- Open separate Composer panels with different prompts for the same task
- Compare outputs side-by-side before accepting either
- Useful for architectural decisions or when the best approach is unclear

## References

For detailed guidance, see:
- `references/planning.md` - Plan mode and starting with plans
- `references/context.md` - Managing context and conversations
- `references/extending.md` - Rules vs Skills, extending agent
- `references/workflows.md` - TDD, codebase understanding, git workflows
- `references/reviewing.md` - Code review strategies
- `references/parallel-agents.md` - Running agents in parallel
