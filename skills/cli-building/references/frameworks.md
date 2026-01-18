# CLI Frameworks

Framework comparisons and selection guidelines.

## TypeScript/JavaScript

### stricli (@bloomberg/stricli)

**Best for:** Modern async-first CLIs

**Features:**
- Built for async/await from ground up
- Type-safe command definitions with full type inference
- Excellent TypeScript support
- Lazy loading for performance
- Zero dependencies
- ESM and CommonJS support

**When to use:**
- New projects
- Async-heavy operations
- Type safety important
- Need lazy loading for startup performance

### oclif

**Best for:** Complex CLIs with plugins

**Features:**
- Mature and feature-rich
- Plugin system
- Good documentation
- Large ecosystem

**When to use:**
- Complex CLI requirements
- Need plugin system
- Existing oclif ecosystem

## Python

### cyclopts

**Best for:** Async-first Python CLIs

**Features:**
- Modern async-first design
- Type-safe with type hints
- Clean API
- Excellent async support

**When to use:**
- New async-first projects
- Type safety important
- Modern Python (3.8+)

### typer

**Best for:** Type-hint based CLIs

**Features:**
- Based on Python type hints
- Clean and intuitive
- Good for simple to medium complexity
- Built on click

**When to use:**
- Simple to medium complexity
- Type hints preferred
- When full async support available

## Selection Guidelines

**Choose stricli/cyclopts when:**
- Async-first design is priority
- Type safety is important
- Modern framework preferred

**Choose oclif/typer when:**
- Need mature ecosystem
- Plugin system required
- Simpler requirements

## Migration

**From other frameworks:**
- Evaluate async requirements
- Check type safety needs
- Consider plugin requirements
- Test with existing codebase
