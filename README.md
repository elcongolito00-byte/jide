# jide music website

Live site: https://jide.digital/

A React and TypeScript music/artist website with home, socials, music and Mundillo views. The interface uses a retro desktop/CRT style.

## Run locally

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

## Code and assets

- `App.tsx`: readable React application source, preserved from the original repository
- `src/main.tsx`: React entry point
- `src/index.css`: styles recovered from the deployed site
- `public/`: recovered SVG icons
- PNG music-platform icons are embedded in `App.tsx`

## Recovery notes

On 20 November 2026 the existing React source was kept, and the missing entry point, deployed styles and static assets were restored so the repository could be run locally. The deployed TikTok icon was missing, so its social link is text-only rather than showing a broken image.

The live Netlify deployment was not changed. The site is a music/artist website, not a streaming-service backend. It does not use Supabase.
