# Developer Documentation

## Configuration

All site-wide configurations are centralized in `src/config/site.ts`. This makes it easy to update common values across the entire site.

### Site Configuration

To modify site-wide values, update the `siteConfig` object:

```typescript
export const siteConfig = {
  // Basic Info
  name: "Subash Chandra",        // Used in titles, metadata
  title: "Technical Product...",  // Your professional title
  company: "J.P. Morgan Chase",   // Current company
  location: "Plano, Texas...",    // Location info
  email: "subashc2023@gmail.com", // Contact email

  // Site Info
  url: "https://subash.co",      // Your domain - update this when changing domains
  description: "...",            // Short description
  longDescription: "...",        // Detailed description for SEO

  // Social Links
  github: "https://github.com/...",
  linkedin: "https://linkedin.com/..."
}
```

### Where Configurations Are Used

1. **SEO & Metadata** (`src/app/layout.tsx`)
   - Page titles
   - Meta descriptions
   - OpenGraph data
   - Twitter cards
   - Robots meta tags

2. **Static Files**
   - `robots.txt` references the site URL
   - `sitemap.xml` uses the domain

3. **Theme Configuration**
   - Default theme setting
   - Light/dark mode colors
   - Used in ThemeProvider

## Project Structure

```
src/
├── app/                    # Next.js app router pages
├── components/
│   ├── home/              # Main page components
│   └── theme/             # Theme components
├── config/
│   └── site.ts            # Central configuration
└── types/                 # TypeScript type definitions
```

## Adding New Features

When adding new features:
1. Check if related constants should be added to `siteConfig`
2. Use existing config values when possible
3. Keep the single source of truth principle

## Common Tasks

### Changing the Domain
1. Update `url` in `siteConfig`
2. The change will automatically propagate to:
   - Meta tags
   - OpenGraph data
   - Canonical URLs
   - Robots.txt
   - Sitemap.xml

### Updating Personal Info
1. Modify relevant fields in `siteConfig`
2. Changes will reflect across the site automatically

### Adding New Metadata
1. Add new fields to `siteConfig`
2. Update `metadata` in `layout.tsx` if needed

## Theme Customization

The theme configuration in `siteConfig` controls:
1. Default theme preference
2. Color schemes for light/dark modes
3. Background colors and other theme variables

## SEO Optimization

The site uses various SEO features:
1. Proper meta tags (from `siteConfig`)
2. OpenGraph for social sharing
3. Structured metadata
4. Robots.txt and Sitemap.xml
5. Canonical URLs

Remember to update `keywords` in `siteConfig` when adding new content or skills. 