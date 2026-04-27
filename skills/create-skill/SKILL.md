---
name: create-skill
description: "Scaffold and validate agent skill packages with proper YAML frontmatter, progressive disclosure structure, and references directories. Use when creating a new SKILL.md file, updating an existing skill's metadata or structure, writing custom agent instructions, or converting documentation into a skill format."
---

# Create Skill

Create well-structured agent skill packages with valid frontmatter, progressive disclosure, and bundled resources.

## Skill Creation Workflow

1. **Create directory**: `mkdir -p skill-name/{references,scripts,assets}`
2. **Write SKILL.md** with YAML frontmatter and markdown body (see template below)
3. **Move detailed content** to `references/` — keep SKILL.md under 200 lines
4. **Validate structure**: frontmatter has `name` + `description`, body is present, line count ≤ 200
5. **Test activation**: verify the skill triggers correctly with target agent harness

## SKILL.md Template

```yaml
---
name: my-skill-name
description: "Concrete actions this skill performs. Use when [specific trigger scenarios]."
---
```

```markdown
# Skill Title

One-line summary of what this skill does.

## When to Activate
- [Specific trigger scenario 1]
- [Specific trigger scenario 2]

## Core Workflow
1. Step with validation checkpoint
2. Step with concrete example
3. Step with verification

## References
- `references/detailed-guide.md` - Extended guidance
```

## Frontmatter Rules

- `name`: required, kebab-case (e.g. `my-skill`)
- `description`: required, quoted string — include concrete actions and a `"Use when..."` clause
- Optional: `compatibility`, `allowed-tools`, `license`, `metadata`

## Progressive Disclosure

Keep SKILL.md as a concise overview. Delegate detail:

| Content type | Location | Limit |
|---|---|---|
| Core principles, workflow | `SKILL.md` | < 200 lines |
| Detailed guides, examples | `references/` | Unlimited |
| Executable automation | `scripts/` | Unlimited |
| Templates, outputs | `assets/` | Unlimited |

## Quality Checklist

- [ ] `name` is kebab-case and matches directory name
- [ ] `description` lists concrete actions + `"Use when..."` clause
- [ ] Body has actionable workflow with at least one concrete example
- [ ] SKILL.md ≤ 200 lines; heavy content in `references/`
- [ ] References are one level deep and clearly signaled

## References

For detailed guidance, see:
- `references/progressive-disclosure.md` - 200-line rule and references pattern
- `references/skill-structure.md` - SKILL.md format and frontmatter details
- `references/examples.md` - Good skill examples
- `references/best-practices.md` - Comprehensive best practices guide
