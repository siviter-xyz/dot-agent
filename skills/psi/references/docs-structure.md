# Documentation Structure

Organization rules for project documentation.

## README.md Files

### Placement
- **Root level**: Project overview, architecture summary, getting started
- **Package level**: Package-specific documentation
- **Module level**: Module-specific documentation  
- **Inline next to code**: Only if relevant and useful (not for adding's sake)

### Length Guidelines
- **Aim for < 1000 lines** (not a hard rule)
- Can be longer if comprehensive documentation is needed
- Focus on usefulness over arbitrary limits
- Break into sections for readability

### Content
- What the code does
- How to use it
- Architecture and design decisions
- Examples and patterns
- Setup and configuration

## AGENTS.md Files

### Placement
- Root level: Global project behavior
- Package level: Package-specific behavior
- Module level: Module-specific behavior
- Next to code: File-specific behavior (if relevant)

### Length Limit
- **< 200 lines** (hard limit)
- Must be concise and focused
- Only for custom behavior/commands/workflows
- Not for general documentation

### Content
- Custom commands or workflows
- Agent-specific instructions
- Development workflow patterns
- Testing patterns specific to area
- Concise, actionable information only

### When NOT to Use
- General documentation → Use README.md
- Large documentation → Use docs/ folder
- Reusable knowledge → Use skills

## docs/ Folder Organization

### Core Files
- `docs/architecture.md` - Overall system architecture
- `docs/roadmap.md` - Project roadmap (keep relevant, < 1000 lines)
- `docs/tech-choices.md` - Technology decisions and rationale

### Subdirectories
- `docs/setup/<any-custom-setup-guide>.md` - Setup and installation guides
- `docs/user-journeys/<feature-group>/<short-description>.md` - User journey documentation
  - Frontmatter required: name, description, status (live/beta/candidate/deprecated)
- `docs/design/` - Design artifacts (if needed in repo)

### User Journey Format

```markdown
---
name: User Registration
description: Complete user registration flow with email verification
status: live
---

## User Journey: Registration

[Detailed journey description]

## E2E Test Requirements
- Test complete flow
- Test email delivery
```

## Documentation Principles

1. **READMEs are living docs** - Update as code evolves
2. **AGENTS.md is for behavior** - Custom workflows only, keep concise
3. **docs/ is for structure** - Architecture, journeys, design
4. **Inline when relevant** - README next to code only if useful
5. **Don't add for adding's sake** - Every doc should serve a purpose

## Documentation Updates

All phases must keep docs current:
- **Plan phase**: Update if plan affects existing docs
- **Spec phase**: Apply specs to docs
- **Implement phase**: Update as code evolves

## Consistency

- Keep docs synchronized with code
- Update related docs when one changes
- Ensure specs in docs match implementation
- Verify user journey status matches reality
