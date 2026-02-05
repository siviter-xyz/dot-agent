# dot-agent Project Instructions

## Skills authoring and best practices

- Prefer **general, agent-harness and platform agnostic skills**. If a skill must target a specific agent or environment, document this clearly in the SKILL.md frontmatter (e.g. `compatibility`) and the skill’s README. Using a agent prefix also helps (e.g., `cursor-`, `claude-`, `win-`, ...).
- Follow the Agent Skills specification when adding or updating skills in this repo.
- Use the existing meta-skills when working in this repository:
  - `create-skill` – for creating or evolving skills with proper structure (frontmatter, progressive disclosure, references, scripts).
  - `create-agents-md` – for adding project- or folder-specific AGENTS.md files in downstream repos.
  - `psi` – for plan/spec/implement workflows when making non-trivial changes.
  - `semantic-git` – for atomic commits using conventional commit typesand clear scopes.
- Each skill **must** have at least:
  - A `SKILL.md` that describes what it does and when to use it.
  - A **documenting README** in the skill directory when behavior or structure is non-trivial (e.g. scripts, workflows, or complex references).

## Scripts and tooling

- For skill scripts, prefer:
  - **uv scripts** (PEP 723 `# /// script` metadata + `#!/usr/bin/env -S uv run --script`) or
  - **plain Bash** for simple glue / shell workflows.
- Scripts should aim to work **cross-platform** (Linux, macOS; avoid hard-coding platform-specific paths and shells where possible).
- When adding new Python-based scripts:
  - Default to uv-managed scripts rather than ad-hoc virtualenvs.
  - Keep dependencies explicit in the inline `script` metadata or a `scripts/requirements.txt` if a full project is needed.

## Working in this repo

- Use skills from this repo to drive changes:
  - `software-engineer` + `backend-engineer` / `frontend-engineer` for implementation guidance.
  - `code-review` when reviewing or refactoring skills.
- Keep changes **general and reusable** by default; if something is project- or client-specific, prefer documenting it in that project’s own AGENTS.md rather than here.

## References

- Agent Skills:
  - Specification: https://agentskills.io/specification
  - What are skills?: https://agentskills.io/what-are-skills
  - Integrate skills: https://agentskills.io/integrate-skills
