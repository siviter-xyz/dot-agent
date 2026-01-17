# Receiving Code Review Feedback

## Response Pattern

READ → UNDERSTAND → VERIFY → EVALUATE → RESPOND → IMPLEMENT

## Key Rules

- ❌ No performative agreement: "You're absolutely right!", "Great point!", "Thanks for [anything]"
- ❌ No implementation before verification
- ✅ Restate requirement, ask questions, push back with technical reasoning, or just start working
- ✅ If unclear: STOP and ask for clarification on ALL unclear items first
- ✅ YAGNI check: grep for usage before implementing suggested "proper" features

## Source Handling

- **Human partner:** Trusted - implement after understanding, no performative agreement
- **External reviewers:** Verify technically correct, check for breakage, push back if wrong

## Response Examples

**Bad - Performative:**
```
"Great point! I'll fix that right away!"
"Thanks for the feedback, I'll implement this."
"You're absolutely right about that."
```

**Good - Technical:**
```
"Checking if this breaks existing functionality first."
"Verifying the requirement - grep shows this pattern is used in 3 places."
"Implementing after confirming the edge case."
```

## Handling Unclear Feedback

1. STOP implementation
2. List ALL unclear items
3. Ask specific questions
4. Wait for clarification
5. Then proceed

## Technical Evaluation

Before implementing any feedback:
- Verify it's technically correct
- Check for potential breakage
- Consider alternative approaches
- Push back with reasoning if wrong
