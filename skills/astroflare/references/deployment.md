# Build and Deployment

## Build Process

- Run `pnpm build` to build the site
- Build outputs to `dist/` directory
- Use `pnpm preview` to preview production build locally
- Configure `wrangler dev` for local Cloudflare testing

## Deployment

- NEVER DEPLOY THE CODE YOURSELF
- Ensure `worker-configuration.d.ts` is generated via `pnpm gen:types`

## Integrations

### Required Integrations
- `@astrojs/cloudflare` - Cloudflare Workers adapter (required)
- `@astrojs/sitemap` - Sitemap generation
- `astro-robots` - Robots.txt generation
- `@tailwindcss/vite` - Tailwind CSS V4 plugin
- `astro-seo` - SEO meta tags helper

### Optional Integrations
- `@astrojs/react` - Only if React is absolutely necessary (avoid if possible)
- `astro-expressive-code` - Code block syntax highlighting
- `astro-embed` - Embed components for external content

### Configuration
- Implement proper configuration in `astro.config.mjs`
- Pay attention to TypeScript strict mode configuration
- Use compatibility flags like `nodejs_compat` in wrangler.jsonc

## Environment Variables

- Use `astro:env/client` for client-accessible environment variables
- Define in `astro.config.mjs` using `envField` for type safety
- Server-side variables defined in `wrangler.jsonc` vars
- Use `.dev.vars` for local development secrets (not committed)

## Code Formatting and Linting

### Prettier and ESLint
- Config: `printWidth: 120`, `singleQuote: true`, `jsxSingleQuote: true`
- Run `pnpm format` to format code
- Run `pnpm format:check` to check code formatting
- Run `pnpm lint` to check code linting
- Run `pnpm fix` to fix both linting and formatting issues

### TypeScript
- Use `astro/tsconfigs/strict` as base
- Enable strict mode with unused locals/parameters checks
- Use proper type definitions for all functions

## Performance Optimization

### View Transitions
- Use Astro's View Transitions API with `<ClientRouter fallback='none' />` in layouts unless rejected
- Create custom loading spinners using `<dialog>` elements
- Listen to `astro:before-preparation`, `astro:after-swap`, and `astro:page-load` events
- Use `is:inline` scripts for view transition handlers to avoid hydration overhead

### Server Islands (Minimal Use)
- Use `server:defer` directive only for non-critical server-side rendering
- Minimize server-side work by deferring where possible
- **Avoid client islands** - use web components instead for interactivity

### Asset Optimization
- Use Astro's built-in asset optimization
- Configure `inlineStylesheets: 'auto'` in build config
- Use `compressHTML: true` for smaller HTML output
- Lazy load images with native `loading="lazy"`
- Preload critical fonts in layout `<head>` sections

## Security

- Implement `security.checkOrigin: true` in config
- Validate all form inputs on both client and server
- Sanitize user input before processing
- Use proper security headers

## Accessibility

- Use semantic HTML elements throughout
- Implement ARIA attributes where necessary
- Ensure keyboard navigation support
- Use proper form labels and associations
- Test with screen readers

## Debugging and Development

### Local Development
- Use `pnpm dev` for development server
- View on `http://localhost:4321`
- Use browser DevTools for debugging
- Check Cloudflare Workers logs via `wrangler tail`

### When Site Output Changes
- **NEVER assume the issue is in the output HTML**
- Check: environment variables (`.dev.vars`, `wrangler.jsonc`)
- Check: configuration files (`astro.config.mjs`, `wrangler.jsonc`)
- Check: build process and warnings
- Ask user to confirm if output changes are expected

## Key Workflow Principles

- Always run `pnpm gen:types` after environment changes
- Fix code with `pnpm fix` before committing
- Test locally with `pnpm preview` before deploying
- Run E2E tests before major changes
- Use semantic HTML and proper accessibility patterns
- Keep server actions type-safe with Zod schemas
- Log server actions with structured logging
- **Prioritize web components over React islands for interactivity**
- **Create reusable components in `core/` directory**
- **Use type-safe DOM utilities from `src/client/dom.ts`**

## References

- [Astro Documentation](https://docs.astro.build)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Starwind UI AI Guide](https://starwind.dev/llms-full.txt) - Component library patterns and usage
