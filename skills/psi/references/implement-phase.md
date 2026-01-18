# Implement Phase Protocol

Test-first implementation that keeps documentation current.

## Phase Independence

Implement phase can work independently:
- Doesn't require plan file to exist
- Can reference specs from project docs
- Must keep documentation up-to-date

## Test-First Approach

1. **Write tests for docs/user journeys first**
   - E2E tests for user journeys
   - Integration tests for API specs
   - Unit tests for component interfaces
2. **Then implement code**
   - Follow plan if exists
   - Reference specs from docs
   - Make tests pass
3. **Update documentation as code evolves**
   - Keep docs current with implementation
   - Update README.md if behavior changes
   - Update AGENTS.md if workflows change

## Implementation Process

### 1. Reference Specifications

- Load specs from project docs (docs/, README.md files)
- Reference plan file if exists (`~/.dot-agent/repo/YYYY-MM-work-name.plan.md`)
- Understand requirements from documentation

### 2. Write Tests First

**For User Journeys:**
- E2E tests that verify complete user flows
- Test happy paths and edge cases
- Reference `docs/user-journeys/` files

**For API Specs:**
- Integration tests for API endpoints
- Test request/response formats
- Reference API schemas in docs

**For Components:**
- Unit tests for component interfaces
- Test props, state, events
- Reference component specs in docs

### 3. Implement Code

- Follow plan steps if plan exists
- Make tests pass
- Follow existing codebase patterns
- Reference specs from docs for accuracy

### 4. CI Verification

Before considering change complete:
- Run CI checks (types, tests, lint)
- Prefer single CI command if available
- If checks fail, stop and report
- Only proceed when all checks pass

### 5. Atomic Commits

After CI passes:
- Stage atomic changes (code + tests together)
- Suggest semantic commit message
- Confirm with user before committing
- Continue to next atomic change

### 4. Update Documentation

As implementation evolves, update:

**docs/ Files:**
- Update architecture.md if architecture changes
- Update user-journeys/ status if feature status changes
- Update design/ if design artifacts change

**README.md Files:**
- Update if behavior or API changes
- Update if setup/usage changes
- Keep inline with code if relevant

**AGENTS.md Files:**
- Update if custom workflows change
- Add new workflows if needed
- Keep < 200 lines

## Documentation Maintenance

### During Implementation

- Update docs when you discover discrepancies
- Update README.md when behavior differs from docs
- Update AGENTS.md when workflows change
- Keep all documentation synchronized

### After Implementation

- Verify all docs are current
- Update user journey status if needed
- Archive or update plan file if complete
- Ensure all specs in docs match implementation

## Stop and Ask

Stop and ask user before:
- Adding type ignores (`@ts-ignore`, `# type: ignore`, etc.)
- Adding suppressions (ESLint disable, pylint disable, etc.)
- Using `any` type or similar type escapes
- Uncertain how to proceed

## Backward Compatibility

- Only consider backward compatibility for public-facing interfaces (APIs, libraries)
- For greenfield/internal refactoring, E2E tests serve as confirmation gate
- Unless explicitly directed otherwise

## Best Practices

1. **Tests as documentation** - Tests should reflect specs in docs
2. **Docs as source of truth** - Implementation should match docs
3. **Update incrementally** - Don't wait until end to update docs
4. **Verify consistency** - Check docs match code regularly
5. **Keep AGENTS.md focused** - Only custom behavior, < 200 lines
6. **CI verification** - Always verify CI passes before committing
7. **Atomic commits** - Group related changes together with tests

## Working Without Plan/Spec Files

If starting implement phase without plan or spec files:
- Load specs from project docs
- Understand requirements from README.md files
- Reference existing patterns in codebase
- Still must keep docs up-to-date as you implement
