# Routing and Pages

## File-Based Routing

- Utilize Astro's file-based routing in `src/pages/` directory
- Implement dynamic routes using `[...slug].astro` syntax
- Use `getStaticPaths()` for generating static pages with dynamic routes

## Data Fetching

### Content Collections

- Use Astro Content Collections with `glob` loader pattern
- Define collections in `src/content/config.ts` using `defineCollection()`
- Use `loader: glob({ pattern: '**/*.md', base: './content/blog' })` for file-based content
- Define Zod schemas for frontmatter validation
- Access via `getCollection()` and `getEntry()` in pages
- Use `render()` to get `<Content />` component for markdown rendering

### Static Data

- Use `Astro.props` for passing data to components
- Implement `getStaticPaths()` for fetching data at build time
- Use `Astro.glob()` for working with local files
- Implement proper error handling and logging
