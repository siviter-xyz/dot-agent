# SEO and Meta Tags

## Comprehensive SEO Structure

Implement a complete SEO structure in your base layout following this pattern.

### Basic Meta Tags
- `<meta charset="UTF-8" />`
- `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`
- `<meta name="generator" content={Astro.generator} />`
- `<link rel="alternate" hreflang="en" href={canonicalURL} />`

### Site Configuration
- Create `src/config.ts` with individual constants
- Use `site_url()` function to get fully qualified domain URL
- Do not include description, author, or email in config - these should be page-specific

### SEO Component (astro-seo)
- Use `astro-seo` package for Open Graph and Twitter Card tags
- Configure `title`, `description`, `canonical` URL
- Set Open Graph `type` to `'article'` for blog posts, `'website'` for pages
- Include social sharing images (OG image)
- Format titles: `${title} | ${SITE_TITLE}` (unless title already includes site name)

### Schema.org Structured Data

**For Personal Sites:**
- Use `@graph` array with `Person` and `WebSite` types
- Include `@id` references for linking entities
- Add `sameAs` array for social media links
- Include `knowsAbout` array for topics/expertise

**For Business/Local Business:**
- Use multiple types: `["Organization", "LocalBusiness", "ProfessionalService"]`
- Include complete `PostalAddress` with all fields
- Add `areaServed` array for service areas (cities, regions)
- Include `serviceType` array
- Add `hasOfferCatalog` with detailed service offerings
- Include `sameAs` for social media and external links

### Additional SEO Meta Tags

**For Local Businesses:**
- `<meta name="author" content="Author Name" />`
- `<meta name="keywords" content="comma, separated, keywords" />`
- `<meta name="geo.region" content="REGION" />`
- `<meta name="geo.placename" content="City Name" />`
- `<meta name="geo.position" content="lat;lng" />`
- `<meta name="ICBM" content="lat, lng" />`

**Robots Control:**
- Use `noindex` prop in layout to control indexing: `{noindex && <meta name="robots" content="noindex, nofollow" />}`

### Favicons and Manifest
- Multiple favicon sizes: `.ico`, `32x32.png`, `16x16.png`, `svg`
- Apple touch icon: `180x180.png`
- Web manifest: `site.webmanifest`
- Apple mobile web app title: `<meta name="apple-mobile-web-app-title" />`

### Performance Hints
- DNS prefetch for external resources: `<link rel="dns-prefetch" href="//domain.com" />`
- Preload critical fonts: `<link rel="preload" as="font" type="font/woff2" href={fontUrl} crossorigin="anonymous" />`

### Theme and Color Scheme
- Theme color: `<meta name="theme-color" content="#color" />`
- Color scheme: `<meta name="color-scheme" content="dark light" />`

### Sitemap and Robots
- Configure robots.txt via `astro-robots` integration
- Generate sitemap via `@astrojs/sitemap` integration
- Link sitemap in head: `<link rel="sitemap" href="/sitemap-index.xml" />`
- Disallow `/_actions/` and admin routes in robots.txt

### SEO Checklist
- [ ] Basic meta tags (charset, viewport, generator, hreflang)
- [ ] Canonical URLs on all pages
- [ ] Open Graph tags for social sharing
- [ ] Twitter Card tags
- [ ] Schema.org structured data (Person/Organization/LocalBusiness)
- [ ] Sitemap link in head
- [ ] Robots meta tag (if needed)
- [ ] Favicons (multiple sizes + SVG)
- [ ] Web manifest
- [ ] Geo-location tags (if local business)
- [ ] Keywords meta tag (if needed)
- [ ] Author meta tag
- [ ] Theme color and color scheme
- [ ] DNS prefetch for external resources
- [ ] Font preloading for critical fonts
