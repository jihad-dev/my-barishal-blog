# My Barishal Blog (blog.mybarishal.com)

Static Next.js 15 + MDX blog. No backend, no database.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out (also generates llms.txt, llms-full.txt)
```

## New post
Add `content/blogs/<slug>.mdx` with frontmatter (see existing posts), push to Git. Vercel / Cloudflare Pages / Netlify rebuilds automatically.

## Deploy
- Build command: `npm run build`
- Output directory: `out`

Edit site URL and links in `src/lib/constants.ts` and `scripts/generate-llms.mjs`.
