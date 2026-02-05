---
name: semantic-git
description: Manage Git commits using conventional commit format with atomic staging. Always generate plain git commands before running them and offer to let the user run them manually.
---

# Semantic Git

Manage Git commits using conventional commit format with atomic commits and concise messages.

This skill is **zagi-aware** and is designed to work well with AI IDEs (Cursor, etc.)

## Tooling

- **Preferred**: [`zagi`](https://github.com/mattzcarey/zagi) (a better git interface for agents).
  - Assume zagi is installed if:
    - `git` is aliased to zagi in the shell **or**
    - a `zagi` binary is available.
  - When in doubt, treat `git` as if it may be zagi-compatible and avoid using exotic flags.
  - Even when zagi is available, **generate plain `git` commands** and let any `git` → `zagi` integration handle them.
- **Fallback**: plain `git` when zagi is not available.

## When to Use

- Committing changes to git
- Staging files for commit
- Creating commit messages
- Managing atomic commits
- Before pushing changes

## Core Principles

- **Atomic commits**: Stage and commit related changes together. Tests go with implementation code.
- **User confirmation**: Always confirm with user before committing and before moving to the next commit.
- **Conventional format**: Use conventional commit message format (feat, fix, etc.) unless directed otherwise.
- **Concise messages**: Keep messages brief and to the point. Omit description unless change is complicated.
- **Command transparency**: Always show the exact `git` commands that will be run (which may be handled by zagi via alias/wrapper), and ask whether the user wants:
  - to run them manually, or
  - to have the agent run them.

## Commit Message Format

```
<type>[optional scope]: <subject>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to CI configuration files and scripts
- `chore`: Maintenance tasks (updating build tasks, dependencies, etc.; no production code change)
- `revert`: Revert a previous commit

### Breaking Changes

Use `!` after the type/scope to indicate breaking changes:
- `feat!: add new API`
- `fix(api)!: change response format`

### Subject Line

- Use imperative mood: "add feature" not "added feature" or "adds feature"
- First letter lowercase (unless starting with proper noun)
- No period at the end
- Keep under 72 characters when possible

### Body and Footer

- Omit body unless change is complicated or requires explanation
- When needed, be concise and reference issues, PRs, or documentation
- Use footer for breaking changes: `BREAKING CHANGE: <description>`

## Workflow

1. **Implement atomic change**: Code + tests together.
   - Use `test:` for test-only changes.
2. **Run CI checks**: Verify types, tests, and linting pass before staging.
   - Prefer a single CI command if it exists (e.g., `pnpm ci`, `npm run ci`, `just ci`).
   - If no CI command, run checks individually (typecheck, test, lint).
   - If any check fails, stop and report – do not proceed.
3. **Stage atomic changes**: Group related files together (implementation + tests).
4. **Suggest commit message**: Generate a conventional commit message based on changes.
5. **Generate commands**:
   - Construct explicit shell commands using `git` (which may be an alias or wrapper such as zagi), for example:

     ```bash
     git add path/to/file1 path/to/file2
     GIT_AUTHOR_DATE="YYYY-MM-DD HH:MM:SS" \
     GIT_COMMITTER_DATE="YYYY-MM-DD HH:MM:SS" \
     git commit -m "feat: add feature"
     ```

   - Always **print these commands** to the user in order.
6. **Ask for execution preference**:
   - Ask the user whether they want:
     - to copy-paste and run the commands themselves, or
     - to have the agent run them.
   - Only execute commands after explicit user approval.
7. **Commit**:
   - When executing, run **exactly** the printed commands.
   - Respect any user instructions about backdating timestamps or additional flags.
8. **Next commit**:
   - Before staging the next set of changes, confirm with the user that the previous commit is complete and understood.

## Automation Mode

If user requests "continue to X" or "automate until X":

- Proceed with atomic commits automatically, **but still print commands**.
- For each commit:
  - Show the staging and commit commands.
  - Optionally execute them automatically, as per the user’s automation request.
- Resume asking for confirmation when X is reached.
- X can be: specific file, feature completion, test passing, etc.

## Stop and Ask Protocols

Stop and ask user before:

- Adding type ignores (`@ts-ignore`, `# type: ignore`, etc.).
- Adding suppressions (ESLint disable, pylint disable, etc.).
- Using `any` type or similar type escapes.
- When uncertain how to proceed with implementation.
- When requirements are unclear.
- When a destructive git operation is proposed (`reset --hard`, `checkout .`, `clean -f`, `push --force`); prefer safer alternatives and explain the risks.

## Examples

**Simple feature or behaviour change:**
```
feat: add user authentication
```

**Feature with scope:**
```
feat(api): add user endpoint
```

**Bug fix:**
```
fix: resolve memory leak in cache
```

**Breaking change:**
```
feat!: migrate to new API version
```

**Test-only change:**
```
test: improve unit tests for auth service
```

**Refactor (no behavior change):**
```
refactor: extract validation logic into separate function
```

**Complex change (with body):**
```
feat(api): add pagination support

Implements cursor-based pagination for large datasets.
See docs/api/pagination.md for details.
```

## References

For detailed guidance, see:

- `references/conventional-commits.md` – Commit format and examples
- `references/ci-verification.md` – CI check patterns and verification
- `references/co-authors.md` – Handling Co-Authored-By trailers and zagi co-author stripping
