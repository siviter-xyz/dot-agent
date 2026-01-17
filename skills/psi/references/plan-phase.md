# Plan Phase Protocol

Generate detailed implementation plans with embedded design considerations and review.

## Storage

**Plan file**: `~/.dot-agent/repo/YYYY-MM-work-name.plan.md`
**Research file**: `~/.dot-agent/working-dir/repo/YYYY-MM-work-name.research.md`

Working directory is the current repo or folder of repos open to the agent.

## Plan Generation Process

1. **Analyze codebase** - Understand current structure, patterns, dependencies
2. **Ask clarifying questions** - Gather requirements, constraints, preferences
3. **Research if needed** - Investigate similar patterns, approaches, technologies
   - Store findings in research file
   - Organize by topic with sources and rationale
4. **Embed design considerations** - Include UI/UX, architecture, component design in plan
5. **Generate detailed plan** - File paths, code references, implementation steps, dependencies
6. **Review plan** - Embedded review before proceeding
   - Technical feasibility
   - Alignment with existing architecture
   - Completeness
7. **Store plan** - Save to ephemeral location
8. **Inform user** - Clearly state plan location
9. **Allow refinement** - Iterative back-and-forth to improve plan

## Plan Format

Similar to Cursor/Claude plan mode:

```markdown
# Work Name - Implementation Plan

## Overview
Brief description of the work.

## Research Findings
(If research was conducted)
- Finding 1
- Finding 2

## Design Considerations
- UI/UX approach
- Architecture decisions
- Component structure

## Implementation Steps

### Step 1: Setup
- Files to create: `path/to/file.ts`
- Dependencies: package1, package2
- Changes needed: ...

### Step 2: Core Implementation
...
```

## Design Integration

Design considerations are embedded in the plan phase:
- UI/UX approach for frontend changes
- Architecture patterns for backend changes
- Component/module structure
- Data flow and state management
- Integration points

If design artifacts are needed in the repo, they can go to `docs/design/` after spec phase.

## Review Integration

Before proceeding to spec phase:
- Review plan for technical feasibility
- Check alignment with existing codebase patterns
- Verify completeness of approach
- Identify potential issues or edge cases

## Documentation Updates

If plan changes affect existing documentation:
- Update relevant README.md files
- Update docs/ files if architecture changes
- Note changes in plan file

## Research Management

Research findings stored separately in research file:
- Organized by topic
- Sources and references
- Decision rationale
- Open questions

Research can be loaded/refined using detection patterns:
- "looking at your research" → Load research file
- "refine your research" → Update research file, narrow focus
