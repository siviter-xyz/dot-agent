# Async Patterns

Async/await best practices for CLI development.

## Async-First Design

All I/O operations should be async:

**File Operations:**
- Use `fs/promises` in Node.js
- Use `aiofiles` in Python
- Avoid blocking file I/O

**Network Requests:**
- Use async HTTP clients (fetch, axios, httpx)
- Handle timeouts properly
- Use connection pooling

**Process Execution:**
- Use async process APIs
- Handle streams asynchronously
- Proper cleanup on exit

## Error Handling

**Try/Catch with Await:**
```typescript
try {
  const result = await asyncOperation();
} catch (error) {
  // Handle error
}
```

**Promise Rejections:**
```typescript
asyncOperation()
  .catch(error => {
    // Handle rejection
  });
```

**Error Propagation:**
- Let errors bubble up when appropriate
- Catch and transform for user-facing messages
- Exit with appropriate codes

## Concurrent Operations

**Parallel Execution:**
```typescript
const results = await Promise.all([
  operation1(),
  operation2(),
  operation3()
]);
```

**Sequential with Results:**
```typescript
const result1 = await operation1();
const result2 = await operation2(result1);
const result3 = await operation3(result2);
```

## Best Practices

1. **Always use async/await**: Avoid mixing promises and callbacks
2. **Handle errors**: Use try/catch or .catch()
3. **Avoid blocking**: Never use blocking I/O in async functions
4. **Cleanup**: Ensure proper cleanup in finally blocks
5. **Timeouts**: Add timeouts for long-running operations
