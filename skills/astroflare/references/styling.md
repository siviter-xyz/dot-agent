# Styling

## Tailwind CSS

- Use Tailwind V4 via `@tailwindcss/vite` plugin
- Use utility classes extensively in components
- Leverage responsive utilities (sm:, md:, lg:, etc.)
- Never use `@apply` directive
- Define theme in `src/styles/global.css` using `@theme` directive
- Use CSS custom properties and variables for theming
- Support dark mode via `@custom-variant dark` with `[data-theme=dark]` selector
- Use `color-mix()` for dynamic color variations

## Scoped Styles

- Use Astro's scoped `<style>` tags for component-specific styles
- Import global styles in layouts when necessary
- Use inline styles sparingly (e.g., for dynamic values like text-shadow)

## Images and Media

- **Prefer Astro's `<Picture>` component** for images with multiple sizes and formats
  - **Always specify `formats={['avif','webp']}`** for optimal image delivery with `<Picture>`
- Use `<Image>` component for standalone images when Picture is not needed
- Implement lazy loading for images
