# Component Development

## Astro Components (Primary Pattern)

- Create `.astro` files for all components - this is the default and preferred approach
- Implement proper component composition and reusability
- Use Astro's component props with TypeScript interfaces for data passing
- Organize components by purpose: `core/` (reusable), `forms/`, `modals/`, `animations/`, `layout/`
- Keep components focused and single-purpose

## Component Library Pattern

**Prioritize Reusable Components with Minimal Coupling**
- Always prioritize using concise, reusable components with minimal coupling
- Use `components/core/` for any reusable components with directory nesting where appropriate
- Components should be self-contained and composable
- Avoid tight coupling between components - use props and slots for composition

**Starwind UI for New Component Patterns**
- For new projects or when a component pattern/type is new to the project (i.e., if a bespoke one or alternative does NOT exist in `core/`)
- Use [Starwind UI](https://github.com/starwind-ui/starwind-ui) for reusable component patterns
- **Always ask the user before installing Starwind if it has NOT been installed**
- Starwind components should be added to `@/components/starwind` directory
- Reference [Starwind UI AI Guide](https://starwind.dev/llms-full.txt) for detailed usage patterns

**Starwind UI Setup:**
1. Ensure path aliases are configured in `tsconfig.json`
2. If using pnpm, create `.npmrc` with appropriate settings
3. Initialize Starwind: `pnpx starwind@latest init`
4. Import CSS in layout: `import "@/styles/starwind.css";`
5. Add components as needed: `npx starwind@latest add button`
6. Import and use components from `@/components/starwind/`

**Component Decision Tree:**
1. Check if component exists in `components/core/` - use it
2. Check if similar pattern exists - extend or compose from existing
3. If new pattern needed and Starwind has it - use Starwind (ask user first if not installed)
4. If Starwind doesn't have it or user prefers custom - create in `components/core/` with minimal coupling

## Client-Side Interactivity (Web Components First)

**PRIMARY PATTERN: Custom Web Components**
- **Use native web components with custom elements as the default for ALL client-side interactivity**
- Define custom elements in `<script>` tags within Astro components
- Use `customElements.define()` with guard checks: `if (!customElements.get('element-name'))`
- Pass server-side data via data attributes (`data-*`) or `dataset` API
- Use frontmatter variables and `define:vars` for passing server-side data to scripts when needed

**Web Component Pattern Example:**
```astro
<custom-element data-config={JSON.stringify(config)}>
  <slot />
</custom-element>

<script>
  class CustomElement extends HTMLElement {
    connectedCallback() {
      const config = JSON.parse(this.dataset.config || '{}');
      // Initialize component logic
    }
    
    disconnectedCallback() {
      // Cleanup
    }
  }
  
  if (!customElements.get('custom-element')) {
    customElements.define('custom-element', CustomElement);
  }
</script>
```

**DOM Utilities Pattern:**
- Create type-safe DOM helpers in `src/client/dom.ts`
- Use `getElementById<T>()` and `getElementByQuery<T>()` for type-safe element access
- Pattern: `getElementById('id', HTMLDialogElement)` returns `HTMLDialogElement | null`
- Use `getElementByIdOrThrow()` and `getElementByQueryOrThrow()` when element must exist

**Native HTML Elements:**
- **Prefer native HTML elements**: `<dialog>` for modals, `<form>` for forms, `<details>` for accordions
- Wrap native elements in custom elements for enhanced behavior when needed
- Example: `<app-modal>` wraps `<dialog>` to add close button handling

**React Usage (STRICTLY AVOIDED)**
- **DO NOT use React components or component islands unless explicitly required by the user**
- Component islands (`client:load`, `client:idle`, `client:visible`) add unnecessary JavaScript bundle size
- **Default to custom elements and vanilla JavaScript for ALL interactivity**
- If React is absolutely necessary, confirm with user first and document why

## Reusable Component Patterns

### Modal Pattern
- Use `<dialog>` element wrapped in custom `<app-modal>` component
- Create `<modal-trigger>` custom element for opening modals
- Pass modal ID via `data-modal-id` attribute
- Handle close button and backdrop clicks in custom element

### Form Pattern
- Create custom form elements (e.g., `<custom-form-element>`) for form logic
- Handle validation, submission, loading states, and success/error views
- Use native form validation with custom error display
- Submit via `fetch()` to server actions
- Show/hide form views using `hidden` attribute and Tailwind classes

### Loading Spinner Pattern
- Use `<dialog>` for loading overlays
- Listen to Astro view transition events
- Animate with CSS transitions respecting `prefers-reduced-motion`
- Use CSS custom properties for theming
