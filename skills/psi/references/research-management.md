# Research Management

Handling research files and detection patterns.

## Research Storage

**Location**: `~/.dot-agent/working-dir/repo/YYYY-MM-work-name.research.md`

Working directory is the current repo or folder of repos open to the agent.

## Research File Format

```markdown
# Research: Work Name

## Research Questions
- [ ] Question 1
- [ ] Question 2

## Findings

### Topic 1
- Finding 1 with source
- Finding 2 with source

### Topic 2
- Finding 1 with source

## Decisions
- Decision 1: Rationale based on findings
- Decision 2: Rationale based on findings

## References
- Source 1: URL or citation
- Source 2: URL or citation

## Open Questions
- Question that needs more research
- Question to clarify with user
```

## Detection Patterns

The skill detects phrases to manage research:

### "looking at your research"
**Action**: Load research file into context
**Use case**: User wants to reference previous research findings
**Behavior**: Read research file and make findings available in context

### "refine your research"
**Action**: Update research file, narrow focus
**Use case**: User wants to improve or focus research
**Behavior**: 
- Load existing research
- Update with new findings
- Narrow scope based on user direction
- Remove irrelevant findings

### "update research"
**Action**: Modify research file with new findings
**Use case**: New information discovered
**Behavior**: Add new findings to research file, update decisions if needed

## Research Generation

During plan phase, research may be generated:
1. Identify research questions
2. Investigate topics
3. Organize findings by topic
4. Document sources and references
5. Record decisions and rationale
6. Note open questions

## Research Usage

Research findings inform:
- Plan generation (technical approach, patterns)
- Spec generation (technology choices, architecture)
- Design considerations (UI/UX patterns, component approaches)

## Narrowing Working Memory

When "refine your research" is detected:
- Focus on specific topics
- Remove tangential findings
- Deepen relevant areas
- Update decisions based on refined focus
- Keep only relevant context in working memory

## Best Practices

1. **Organize by topic** - Group related findings
2. **Cite sources** - Always include references
3. **Record decisions** - Note why choices were made
4. **Keep current** - Update as new information emerges
5. **Focus when needed** - Refine to narrow scope
