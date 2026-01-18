# Error Patterns

Common error patterns and their typical causes.

## Null/Undefined Errors

**Symptoms:**
- `TypeError: Cannot read property 'x' of undefined`
- `TypeError: Cannot read property 'x' of null`

**Common Causes:**
- Missing null checks
- Uninitialized variables
- Failed API calls without error handling
- Missing default values

**Solutions:**
- Add null/undefined checks
- Use optional chaining (`?.`)
- Provide default values
- Handle API errors properly

## Type Errors

**Symptoms:**
- `TypeError: x is not a function`
- Type mismatches in TypeScript/Python

**Common Causes:**
- Incorrect type assumptions
- Missing type guards
- Type coercion issues
- API contract changes

**Solutions:**
- Add type guards
- Verify types at boundaries
- Use type assertions carefully
- Check API contracts

## Timing Issues

**Symptoms:**
- Race conditions
- Async/await problems
- Order-dependent failures

**Common Causes:**
- Missing await
- Incorrect async flow
- Shared mutable state
- Event ordering issues

**Solutions:**
- Ensure proper await usage
- Use proper async patterns
- Avoid shared mutable state
- Add synchronization if needed

## State Corruption

**Symptoms:**
- Unexpected state values
- Inconsistent behavior
- Side effects

**Common Causes:**
- Mutating shared state
- Missing state updates
- Incorrect state management
- Side effects in wrong places

**Solutions:**
- Use immutable patterns
- Centralize state management
- Isolate side effects
- Add state validation

## Configuration Issues

**Symptoms:**
- Missing environment variables
- Incorrect settings
- Feature flags not working

**Common Causes:**
- Missing .env files
- Incorrect variable names
- Default values not set
- Configuration not loaded

**Solutions:**
- Verify environment setup
- Check configuration loading
- Provide sensible defaults
- Validate configuration
