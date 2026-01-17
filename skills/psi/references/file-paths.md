# File Paths and Conventions

Storage paths and naming conventions for PSI workflow.

## Ephemeral Storage

### Plan Files
**Path**: `~/.dot-agent/repo/YYYY-MM-work-name.plan.md`

### Research Files
**Path**: `~/.dot-agent/working-dir/repo/YYYY-MM-work-name.research.md`

### Working Directory Detection
- Current repository root (if single repo)
- Current folder (if folder of repos)
- Detected automatically by agent

## Naming Convention

### Format
`YYYY-MM-work-name`

### Examples
- `2025-01-user-auth` - User authentication feature
- `2025-01-api-refactor` - API refactoring
- `2025-01-database-migration` - Database migration
- `2025-02-frontend-redesign` - Frontend redesign

### Rules
- Use kebab-case for work-name
- Include year and month for organization
- Use descriptive, concise names
- Avoid special characters

## Path Generation

### Plan Path
```
~/.dot-agent/repo/YYYY-MM-work-name.plan.md
```

### Research Path
```
~/.dot-agent/working-dir/repo/YYYY-MM-work-name.research.md
```

### Repository Detection
- Check if current directory is git repo root
- If not, check parent directories
- Use repo name or folder name in path
- Handle nested repos appropriately

## Helper Scripts

Scripts in `scripts/` directory:

### get-plan-path.js (or .sh)
- Generates plan file path
- Takes work name as input
- Returns full path
- Handles date formatting

### get-research-path.js (or .sh)
- Generates research file path
- Takes work name as input
- Returns full path
- Handles date formatting

### show-plan-location.js (or .sh)
- Displays plan location to user
- Formats message clearly
- Shows full path
- Provides instructions for accessing

## Path Examples

### Single Repository
```
~/.dot-agent/my-project/2025-01-user-auth.plan.md
~/.dot-agent/working-dir/my-project/2025-01-user-auth.research.md
```

### Folder of Repos
```
~/.dot-agent/dev-folder/2025-01-user-auth.plan.md
~/.dot-agent/working-dir/dev-folder/2025-01-user-auth.research.md
```

## File Management

### Creating Files
- Create directory structure if needed
- Use absolute paths for reliability
- Handle path creation errors gracefully

### Accessing Files
- Load plan file when referenced
- Load research file on detection patterns
- Handle missing files appropriately

### Cleanup
- Plans are ephemeral (not committed)
- User can manually clean up old plans
- Research files can be archived or deleted

## Platform Considerations

### Windows
- Use `%USERPROFILE%` or `~` expansion
- Handle path separators correctly
- Test path generation on Windows

### Unix/Linux/Mac
- Use `~` expansion
- Handle permissions appropriately
- Test path generation on Unix systems
