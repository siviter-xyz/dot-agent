# PSI - Plan Spec Implement

A streamlined workflow for structured development that emphasizes documentation-first specifications and test-first implementation.

## Overview

PSI (Plan-Spec-Implement) provides a methodology for managing complex development work through three independent but coordinated phases. Unlike rigid phase-gated workflows, PSI allows you to start with any phase while ensuring documentation stays current throughout.

## Methodology

### Core Philosophy

**Documentation is the source of truth.** Specifications live in your project's documentation (docs/, READMEs, AGENTS.md), not in ephemeral planning files. This ensures your team always has access to current specifications and behavior definitions.

### Three Independent Phases

1. **Plan** - Generate detailed implementation plans (stored ephemerally)
2. **Spec** - Create and apply specifications to project documentation
3. **Implement** - Test-first implementation that keeps docs current

Each phase can work independently, but all must ensure documentation is up-to-date.

## Relationship to OPSX

PSI was inspired by OpenSpec's experimental workflow (OPSX) but takes a different approach:

- **OPSX**: Artifact-based workflow with dependencies, stored in project
- **PSI**: Documentation-first workflow with ephemeral plans, specs in project docs

PSI focuses on making project documentation the source of truth, while OPSX uses separate artifact files. Both approaches have merit - PSI is optimized for teams that want specifications integrated into their existing documentation structure.

## Key Features

- **Ephemeral planning** - Plans stored in `~/.dot-agent/` (not committed to repo)
- **Documentation-first specs** - Specifications live in project docs/READMEs
- **Test-first implementation** - Tests for docs/user journeys before code
- **Embedded design/review** - Design and review integrated into Plan/Spec phases
- **Research management** - Research files with detection patterns
- **Phase independence** - Start with any phase, all keep docs current

## Usage

The PSI skill activates when you:
- Start new features or major changes
- Need architectural planning
- Want structured documentation
- Require test-first development workflows

See the skill documentation for detailed protocols on each phase.

## Documentation Structure

PSI organizes documentation across:

- **README.md** files - Project/package/module documentation (aim for < 1000 lines)
- **AGENTS.md** files - Custom behavior/commands (< 200 lines, inline)
- **docs/** folder - Architecture, roadmap, tech choices, user journeys, design

All specifications become part of your project's living documentation.
