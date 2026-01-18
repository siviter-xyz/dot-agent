# Root Cause Analysis

Systematic methods for identifying root causes of issues.

## Analysis Framework

### 1. Symptom Analysis

Understand the problem:
- What is the actual vs expected behavior?
- When does it occur?
- What conditions trigger it?
- Is it reproducible?

### 2. Hypothesis Generation

Based on evidence, generate hypotheses:
- What could cause this symptom?
- What changed recently?
- What dependencies are involved?
- What patterns match known issues?

### 3. Hypothesis Testing

Test each hypothesis:
- Add logging to verify assumptions
- Create minimal test cases
- Isolate variables
- Check each dependency

### 4. Root Cause Identification

Identify the underlying cause:
- Not just the immediate error
- Why did the error occur?
- What allowed it to happen?
- What prevents it from being caught?

### 5. Solution Design

Design fix that:
- Addresses root cause, not just symptom
- Prevents recurrence
- Maintains existing behavior
- Follows codebase patterns

## Common Root Causes

**Code Issues:**
- Logic errors
- Type mismatches
- Missing error handling
- Incorrect assumptions

**State Issues:**
- Uninitialized state
- State corruption
- Race conditions
- Stale state

**Configuration Issues:**
- Missing environment variables
- Incorrect settings
- Version mismatches
- Dependency issues

**Architecture Issues:**
- Tight coupling
- Missing abstractions
- Incorrect data flow
- Resource leaks

## Verification

After identifying root cause:
1. Verify hypothesis with evidence
2. Test fix in isolation
3. Confirm fix resolves issue
4. Check for regressions
5. Update tests if needed
