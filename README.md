# dot-agent 🤖

A curated collection of agent skills for coding agents designed to enhance the workflows of Software Engineers (and, let's be honest, me primarily).

Skills provide reusable, domain-specific knowledge and workflows that agents can use when relevant. Works with Cursor, Claude Code, Codex, OpenCode, Antigravity, GitHub Copilot, Amp, Roo Code, and other agent harnesses that support the Agent Skills standard.

## What are Skills?

Skills are modular, self-contained packages that extend agent capabilities with:
- Specialized workflows for specific domains
- Tool integrations and instructions
- Domain expertise and best practices
- Bundled resources (scripts, references, assets)

Skills use **progressive disclosure** - keeping SKILL.md files under 200 lines with detailed content in `references/` directories loaded on-demand.

## Getting Started 🚀

### Install All Skills (Recommended)

Install all skills globally (to `~/.cursor/skills/`, `~/.claude/skills/`, etc. depending on agent):

```bash
npx skills add siviter-xyz/dot-agent --global --agent cursor
```

By default, `npx skills` will prompt before installing or updating skills. You can add `--yes` (or `-y`) to skip confirmations.

### Install Specific Skills

Install individual skills by name:

```bash
# Install a single skill
npx skills add siviter-xyz/dot-agent --skill typescript --global

# Install multiple specific skills
npx skills add siviter-xyz/dot-agent --skill typescript --skill python --skill astroflare --global
```

### List Available Skills

See all available skills in this repository without installing:

```bash
npx skills add siviter-xyz/dot-agent --list
```

To discover skills across the broader ecosystem, use the built-in `skills find` command (powered by the internal `find-skills` helper skill; you don't need to install it separately):

```bash
npx skills find dot-agent
```

### Install to Specific Agents

Target specific agent harnesses:

```bash
# Install to Cursor only
npx skills add siviter-xyz/dot-agent --agent cursor --global

# Install to multiple agents
npx skills add siviter-xyz/dot-agent --agent cursor --agent claude-code --global
```

### Project-Level Installation

Install skills to your project (committed in repo):

```bash
# Install all skills to project
npx skills add siviter-xyz/dot-agent

# Install specific skill to project
npx skills add siviter-xyz/dot-agent --skill psi
```

For more options, see the [skills CLI documentation](https://github.com/vercel-labs/skills).

### Sync from Local Repository

When working on dot-agent locally, sync all skills to your local agent installation:

```bash
# Sync all skills from local dot-agent repo to Cursor
npx skills add "$(pwd)" --global --agent cursor

# Sync to multiple agents
npx skills add "$(pwd)" --global --agent cursor --agent claude-code

# Sync specific skills only
npx skills add "$(pwd)" --skill python --skill typescript --global --agent cursor
```

This is useful when developing or modifying skills locally before publishing.

## Available Skills

See [skills/README.md](skills/README.md) for a complete list of available skills.

## Project-Specific Configuration

For project-specific rules and commands, commit them in your repository:

- **AGENTS.md**: Project root or subdirectories for inline rules (works across agent harnesses, **PREFERRRED**)
- **Rules**: `.cursor/rules/`, `.claude/rules/`, `.codex/rules/`, etc. in your repo
- **Commands**: `.cursor/commands/`, `.claude/commands/`, `.codex/commands/`, etc. in your repo

Keep project-specific content small and focused. Use skills for reusable knowledge.

## Progressive Disclosure

All skills follow the progressive disclosure principle:

- **SKILL.md** < 200 lines - Core principles and when to use
- **references/** - Detailed documentation loaded on-demand
- **scripts/** - Executable code for deterministic tasks
- **assets/** - Files used in output (templates, etc.)

This keeps context windows clean while providing access to specialized capabilities when needed.

## Contributing

Skills are designed to be:
- **Focused** - Each skill covers a specific domain
- **Reusable** - Work across projects and teams
- **Maintainable** - Clear structure with progressive disclosure

When contributing:
1. Keep SKILL.md under 200 lines
2. Use references/ for detailed content
3. Follow existing skill structure and the [Agent Skills specification](https://agentskills.io/specification)
4. Prefer agent-harness agnostic skills; if a skill is environment-specific, document this clearly in its frontmatter and/or README
5. For scripts inside skills:
   - Prefer **uv scripts** (PEP 723 `# /// script` metadata with `#!/usr/bin/env -S uv run --script`) or **plain Bash** for simple glue
   - Aim for cross-platform behavior (Linux, macOS; avoid hard-coding shell- or OS-specific paths)
   - Recommend installing [`uv`](https://docs.astral.sh/uv/) locally and running scripts via `uv run` where appropriate
6. Test installation and usage

## References & Inspiration

- [vercel-labs/add-skill](https://github.com/vercel-labs/add-skill)
- [mrgoonie/claudekit-skills](https://github.com/mrgoonie/claudekit-skills)
