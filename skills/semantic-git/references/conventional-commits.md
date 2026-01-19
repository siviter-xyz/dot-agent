# Conventional Commits Reference

Detailed reference for conventional commit message format.

## Format

```
<type>[optional scope]: <subject>

[optional body]

[optional footer(s)]
```

## Type Categories

### Primary Types

**feat**: A new feature
- Introduces new functionality
- Includes implementation and tests together
- Example: `feat: add user registration`

**fix**: A bug fix
- Fixes a bug in existing code
- Includes fix and tests together
- Example: `fix: resolve null pointer in user service`

**test**: Test-only changes
- Only when no implementation code changes
- Adding, updating, or removing tests without code changes
- Example: `test: add edge case tests for auth`

### Documentation

**docs**: Documentation only changes
- README, comments, API docs
- Example: `docs: update API documentation`

### Code Quality

**style**: Code style changes
- Formatting, whitespace, semicolons
- No logic changes
- Example: `style: format code with prettier`

**refactor**: Code refactoring
- Restructuring without changing behavior
- Example: `refactor: extract validation logic`

**perf**: Performance improvements
- Optimizations that improve performance
- Example: `perf: optimize database queries`

### Maintenance

**chore**: Maintenance tasks
- Build process, tooling, dependencies
- Prefer **small, focused dependency bumps** over blanket upgrades. When updating dependencies:
  - Group small related updates together where possible
  - Keep breaking or risky upgrades in their own commits
- Example commit subjects:
  - `chore: bump P to x.y.z`
  - `chore: bump lockfile` or `chore: bump dependencies`

**ci**: CI/CD changes
- GitHub Actions, CI configs
- Example: `ci: add test coverage job`

**build**: Build system changes
- Webpack, Vite, tsconfig changes
- Example: `build: update Vite config`

**revert**: Revert previous commit
- Example: `revert: revert "feat: add user auth"`

## Scope

Optional scope indicates what part of codebase is affected:
- `feat(api): add endpoint`
- `fix(ui): resolve button styling`
- `refactor(auth): simplify login flow`

**For monorepos/subpackages**: If work is in a subpackage, use the subpackage name as the scope, removing any project prefix:
- ✅ `feat(api): add endpoint` (not `feat(project-api)` or `feat(@project/api)`)
- ✅ `refactor(core): simplify login flow` (not `refactor(@myorg/core)`)

Use when it adds clarity. Omit if obvious from context or many areas are touched in the change.

## Breaking Changes

### Using `!`

Add `!` after type/scope to indicate breaking change:
- `feat!: change API response format`
- `fix(api)!: remove deprecated endpoint`

### BREAKING CHANGE Footer

For complex breaking changes, use footer:
```
feat!: migrate to new database schema

BREAKING CHANGE: Database schema changed. Run migration script before deploying.
```

## Subject Guidelines

### Imperative Mood

✅ Good:
- `feat: add user authentication`
- `fix: resolve memory leak`
- `refactor: extract validation`

❌ Bad:
- `feat: added user authentication` (past tense)
- `fix: resolves memory leak` (present tense)
- `feat: adding user authentication` (gerund)

### Capitalization

- First letter lowercase (unless proper noun)
- `feat: add User model` (User is proper noun)
- `feat: add user model` (preferred)

### Length

- Keep under 72 characters when possible
- Be concise but descriptive
- Omit unnecessary words

### No Period

- No period at end of subject
- `feat: add feature` ✅
- `feat: add feature.` ❌

## Body

### When to Include

Include body only when:
- Change is complex and needs explanation
- Breaking changes need details
- References to issues, PRs, or docs are needed

### Format

- Blank line after subject
- Wrap at 72 characters
- Use imperative mood
- Reference related issues: `Closes #123`
- Reference documentation: `See docs/api.md`

### Example

```
feat(api): add pagination support

Implements cursor-based pagination for large datasets.
Improves performance for queries returning >1000 results.

Closes #456
See docs/api/pagination.md for usage.
```

## Footer

Use for:
- Breaking changes: `BREAKING CHANGE: <description>`
- Issue references: `Closes #123`, `Fixes #456`
- Co-authors: `Co-authored-by: Name <email>`

## Atomic Commits

### Group Related Changes

✅ Good:
- Implementation + tests together
- Feature + related refactoring
- Fix + test for fix

❌ Bad:
- Multiple unrelated features
- Implementation without tests
- Tests without implementation (unless test-only change)

### Examples

**Feature with tests:**
```
feat: add user authentication

- Add login endpoint
- Add password hashing
- Add authentication tests
```

**Bug fix with tests:**
```
fix: resolve memory leak in cache

- Fix cache cleanup logic
- Add test for cache expiration
```

**Test-only change:**
```
test: add edge case tests for auth

- Add tests for expired tokens
- Add tests for invalid credentials
```
