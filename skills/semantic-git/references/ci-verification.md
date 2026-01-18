# CI Verification

CI verification ensures code passes all checks before committing.

## CI Command Detection

### Preferred: Single CI Command

Check for common CI command patterns:
- `pnpm ci` or `pnpm run ci`
- `npm run ci`
- `just ci` or `make ci`
- `task ci` or `run ci`

If found, run the single command. If it fails, stop and report errors.

### Fallback: Individual Checks

If no single CI command exists, run checks individually:

**Type Checking:**
- TypeScript: `pnpm typecheck` or `tsc --noEmit`
- Python: `mypy .` or `pyright`
- Check package.json/justfile/makefile for typecheck script

**Testing:**
- `pnpm test` or `npm test`
- `pytest` or `python -m pytest`
- `cargo test`
- Check for test scripts in package.json/justfile/makefile

**Linting:**
- `pnpm lint` or `npm run lint`
- `ruff check` or `pylint`
- `cargo clippy`
- Check for lint scripts in package.json/justfile/makefile

## Error Handling

If any check fails:
1. **Stop immediately** - Do not proceed to staging
2. **Report errors clearly** - Show which check failed and why
3. **Wait for user** - Do not attempt to fix automatically unless directed
4. **Do not stage or commit** - Changes must pass all checks first

## Integration with Task Managers

### Justfile
```just
ci: typecheck lint test
```

### Makefile
```make
ci: typecheck lint test
```

### package.json
```json
{
  "scripts": {
    "ci": "pnpm typecheck && pnpm lint && pnpm test"
  }
}
```

## Common Patterns

**Node.js/TypeScript:**
```bash
pnpm ci  # or
pnpm typecheck && pnpm lint && pnpm test
```

**Python:**
```bash
just ci  # or
mypy . && ruff check . && pytest
```

**Rust:**
```bash
cargo clippy && cargo test
```

## Verification Before Staging

Always verify CI passes before staging changes:
1. Run CI checks
2. Confirm all checks pass
3. Only then stage atomic changes
4. Proceed with commit workflow
