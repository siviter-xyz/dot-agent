# Output Formatting

Guidelines for CLI output formatting with unicode symbols and color.

## Unicode Symbols

Use unicode symbols for status indicators:
- ✓ (checkmark) - Success
- ✗ (cross) - Failure
- → (arrow) - Progress/next step
- ⚠ (warning) - Warning

## Color Libraries

**Never use hardcoded ANSI codes.** Use color libraries:

**TypeScript:**
- `chalk` - Popular, well-maintained
- `kleur` - Lightweight alternative
- `colors` - Simple API

**Python:**
- `rich` - Full-featured formatting
- `colorama` - Cross-platform colors
- `click.style()` - Built into click

## NO_COLOR Support

Always respect `NO_COLOR` environment variable:

```typescript
import chalk from 'chalk';

const supportsColor = !process.env.NO_COLOR;
const success = supportsColor ? chalk.green('✓') : '✓';
```

```python
import os
from rich.console import Console

console = Console(no_color=os.getenv('NO_COLOR'))
console.print('[green]✓[/green] Success')
```

## Formatting Guidelines

**Status Messages:**
```typescript
console.log(chalk.green('✓') + ' Operation successful');
console.log(chalk.red('✗') + ' Operation failed');
console.log(chalk.yellow('⚠') + ' Warning message');
```

**Progress Indicators:**
```typescript
console.log(chalk.blue('→') + ' Processing...');
```

**Tables and Lists:**
- Use consistent spacing
- Align columns properly
- Use dim for secondary information

## Best Practices

1. **No emojis**: Unless explicitly directed
2. **Unicode symbols**: Use for status indicators
3. **Color libraries**: Never hardcoded ANSI
4. **NO_COLOR**: Always check and respect
5. **Consistent style**: Use same symbols/colors throughout
6. **Accessibility**: Ensure readable without color
