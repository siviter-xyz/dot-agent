# AGENTS.md Best Practices

## Size Guidelines

- Keep AGENTS.md files under 200 lines when possible
- Focus on essential project-specific instructions
- Move detailed documentation to skills or project docs

## Content Guidelines

### What to Include

- Project-specific coding conventions
- Architecture decisions unique to this project
- Testing patterns for this codebase
- Deployment procedures
- Environment setup

### What to Avoid

- General programming advice (use skills instead)
- Framework documentation (reference official docs)
- Long examples (reference code files)
- Duplicate information from skills

## Organization

### Project Root AGENTS.md

- Global project conventions
- Overall architecture
- Common patterns

### Folder-Scoped AGENTS.md

- Directory-specific rules
- Package-specific instructions (in monorepos)
- Test-specific guidance

## Examples

### Good: Focused and Specific

```markdown
# API Package Instructions

- All endpoints in `src/routes/`
- Use Zod for validation
- Return JSON with `{ success: boolean, data?: T, error?: string }`
- See `src/routes/users.ts` for example
```

### Bad: Too Generic

```markdown
# General Programming

- Write good code
- Use best practices
- Follow SOLID principles
- [500 lines of generic advice]
```
