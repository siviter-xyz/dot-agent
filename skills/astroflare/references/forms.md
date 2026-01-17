# Forms and Server Actions

## Form Handling Pattern

- Use native HTML `<form>` elements with custom web elements for client logic
- Server actions in `src/actions/` directory using `defineAction()`
- Form data submitted via `fetch()` to `/_actions/[action-name]/` endpoints
- Server actions validate with Zod schemas
- Return JSON responses for 200 responses

## Server Action Structure

```typescript
export const myAction = defineAction({
  accept: 'form',
  input: zodSchema,
  handler: async (input, context) => {
    // Access env via context.locals.runtime.env
    // Handle form logic
    // Return { success: true } or throw error
  }
});
```

## Form Submission Pattern

- **Use native HTML `<form>` elements** with custom web elements for client-side validation and UX
- **Use Cloudflare Workers via Astro integration for form actions** - keep the rest of the site static
- Form actions handled via client-side `fetch()` to `/_actions/[action-name]/` endpoints
- Server actions run on Cloudflare Workers (via `platformProxy`), keeping static site performance
- Handle loading states, validation errors, and success states in custom form elements
