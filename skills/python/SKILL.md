---
name: python
description: "Enforce Python typing conventions, Pydantic v2 data models, Protocol-based dependency injection, and pytest testing patterns. Use when writing or reviewing Python code, setting up Python project structure, configuring type hints, creating Pydantic models, or writing pytest test suites."
---

# Python Guidelines

Conventions for Python code style, typing, architecture, and testing in this project.

## Type Annotations

```python
from __future__ import annotations

# Preferred: built-in generics + union syntax
def fetch(url: str, timeout: int | None = None) -> dict[str, list[str]]:
    ...
```

- Always include `from __future__ import annotations`
- Use `str | None` not `Optional[str]`; `dict`, `list` not `typing.Dict`, `typing.List`
- Avoid `Any` unless genuinely required

## Architecture

### Dependency Injection with Protocol

```python
from typing import Protocol

class Storage(Protocol):
    def save(self, key: str, data: bytes) -> None: ...

class UserService:
    def __init__(self, storage: Storage) -> None:
        self._storage = storage
```

- Inject dependencies via constructors; define interfaces with `Protocol`
- One service class per module; prefer composition over inheritance

### Data Models (Pydantic v2)

```python
from pydantic import BaseModel

class UserCreate(BaseModel):
    name: str
    email: str
    role: str = "member"
```

- Use Pydantic v2 for all schemas, validation, and configuration
- Use for API request/response schemas, config objects, and DTOs

### Environment Variables

- Centralize access in `environment.py` with one function per variable (e.g. `def api_key() -> str`)
- Simplifies mocking in tests

### Module Organization

- One concern per module with clear boundaries
- Avoid barrel exports in `__init__.py` — prefer blank files
- Docstrings on all public classes, functions, and enums

## Testing

```python
import pytest

class TestUserService:
    def test_creates_user(self, mock_storage):
        # Arrange
        service = UserService(storage=mock_storage)
        # Act
        result = service.create("Alice")
        # Assert
        assert result.name == "Alice"
```

- Mirror `src/` structure; `class TestFoo` for `def foo()`
- Prefer `pytest` + `pytest-mock`; shared fixtures in `conftest.py`
- Follow AAA (Arrange, Act, Assert) pattern

## Implementation Checklist

1. Write or modify code following conventions above
2. Run type checker: `mypy .` or `pyright`
3. Run tests: `pytest`
4. Fix any failures before committing
5. Group related changes with tests in atomic commits

## References

- `references/uv-scripts.md` - Adhoc Python scripts in uv-managed projects
- `references/uv-monorepo.md` - Monorepo patterns using uv and Hatch
