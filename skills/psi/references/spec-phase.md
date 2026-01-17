# Spec Phase Protocol

Generate specifications and apply them to project documentation.

## Spec Categories

Generate specs based on change type:

### Always Relevant
- **Package/project structure** - Directory organization, module boundaries
- **Tech choices and rationale** - Technology decisions with reasoning

### API Changes
- **API schemas** - OpenAPI, GraphQL, REST contracts
- **Interfaces/TypeScript types** - Type definitions
- **DTO models** - Data transfer objects

### Backend Changes
- **Database models/schemas** - Entity definitions, relationships
- **Config models** - Configuration structures
- **Environment variables** - Per-package env var definitions

### Frontend Changes
- **Component interfaces** - Props, state, events
- **User journeys** - User flows with E2E test requirements

### Large Features
- **Architecture diagrams** - System design, data flow
- **User journeys** - Complete user flows

## Spec Generation Process

1. **Analyze plan** (if exists) or requirements
2. **Embed design considerations** - UI/UX, component design, architecture
3. **Generate specs** for relevant categories
4. **Present to user** for review
5. **Review specs** - Embedded review before applying
   - Completeness
   - Consistency with existing patterns
   - Technical accuracy
6. **Iterate** until agreed
7. **Apply to documentation** - Update/create project docs

## Design Integration

Design considerations embedded in spec phase:
- UI/UX specifications
- Component design and structure
- Visual hierarchy and interactions
- Design system usage

Design artifacts can be stored in `docs/design/` if needed in repo.

## Review Integration

Before applying specs to docs:
- Review for completeness
- Check consistency with existing documentation
- Verify technical accuracy
- Ensure alignment with plan (if exists)

## Spec Application

Once specs are agreed, apply to:

### docs/ Folder
- `docs/architecture.md` - Overall architecture (update or create)
- `docs/tech-choices.md` - Technology decisions (update or create)
- `docs/user-journeys/<feature-group>/<short-description>.md` - User journey docs
  - Frontmatter: name, description, status (live/beta/candidate/deprecated)
- `docs/design/` - Design artifacts if needed
- `docs/setup/<guide>.md` - Setup guides if needed

### README.md Files
- Root level: Project overview, architecture summary
- Package level: Package-specific specs
- Module level: Module-specific specs
- Inline next to code: Only if relevant and useful
- **Length**: Aim for < 1000 lines, but can be longer if needed

### AGENTS.md Files
- Root/packages/modules/code level: Custom behavior/commands
- **Length**: < 200 lines (hard limit)
- Only for custom workflows, not general documentation

## Spec Format Examples

### API Schema
```markdown
## API Endpoints

### POST /api/users
**Request Body:**
```json
{
  "name": "string",
  "email": "string"
}
```

**Response:**
```json
{
  "id": "string",
  "name": "string",
  "email": "string"
}
```
```

### User Journey
```markdown
---
name: User Registration
description: Complete user registration flow with email verification
status: live
---

## User Journey: Registration

1. User visits registration page
2. Fills registration form
3. Submits form
4. Receives verification email
5. Clicks verification link
6. Account activated

**E2E Test Requirements:**
- Test complete flow
- Test email delivery
- Test verification link
```

## Documentation Updates

When applying specs:
- Update existing docs if specs change
- Create new docs if needed
- Ensure all related docs stay consistent
- Update README.md files at appropriate levels
- Create/update AGENTS.md only for custom behavior
