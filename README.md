# Laith Altarabishi - Personal Website

Personal portfolio website built with Next.js and deployed to GitHub Pages.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: GitHub Pages

## Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Setup Required (One-time)

1. Go to your repository Settings
2. Navigate to Pages (under Code and automation)
3. Under "Build and deployment":
   - Source: GitHub Actions

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will handle the build and deployment automatically.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   └── blog/
│       ├── page.tsx        # Blog listing
│       └── [slug]/
│           └── page.tsx    # Individual blog posts
├── lib/
│   └── blog-posts.ts       # Blog post data
├── components/             # Reusable React components
├── public/                 # Static assets
└── out/                    # Build output (GitHub Pages serves this)
```

## Adding Blog Posts

Edit `lib/blog-posts.ts` and add a new entry to the `blogPosts` array:

```typescript
{
  slug: "your-post-slug",
  title: "Your Post Title",
  date: "2025-01-28",
  description: "A brief description",
  content: `Your full post content...`,
}
```

## Notes

- No Vercel-specific dependencies (removed `@vercel/analytics`)
- Configured for static export with `output: 'export'` in `next.config.mjs`
- Images are unoptimized for static hosting
- Uses `--legacy-peer-deps` due to React 19 compatibility with some packages
