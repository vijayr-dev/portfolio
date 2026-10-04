# Divyansh Rathore Portfolio

A multi-page professional portfolio built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Pages

- `/` — Home
- `/about` — Biography, career journey, education, interests, and digital seva
- `/experience` — Professional timeline
- `/projects` — Projects overview
- `/projects/production-automation` — Production automation case study
- `/projects/healthcare-hackathon` — KakushIN concept
- `/projects/client-website` — Client website
- `/projects/digital-seva` — Digital seva website
- `/skills`, `/achievements`, `/certifications`, `/youtube`, `/contact`

## Getting started

```bash
npm install
npm run dev
```

## YouTube setup

The server-side route at `/api/youtube` fetches the 12 latest public uploads through the YouTube Data API, revalidating the upstream feed every hour. Home displays the latest three; `/youtube` features the newest video and lists the remaining uploads. Credentials are read only on the server.

1. Copy `.env.example` to `.env.local`.
2. Set `YOUTUBE_API_KEY` and `YOUTUBE_CHANNEL_ID`.

For Vercel, open the project **Settings → Environment Variables** and add:

- `YOUTUBE_API_KEY` — a YouTube Data API v3 key created in Google Cloud Console.
- `YOUTUBE_CHANNEL_ID` — the channel ID for `@thedivyansh9290` (find it in YouTube Studio under **Settings → Channel → Advanced settings**).

Apply the variables to the deployment environments you use, then redeploy. Do not use a `NEXT_PUBLIC_` prefix for the API key. Without credentials, the video area explains the setup and links to the channel; it never shows fabricated video entries or thumbnails.

## Portrait image

The provided portrait is at `/images/divyansh-portrait.png` (file path: `public/images/divyansh-portrait.png`). It is referenced without editing and displayed with its natural aspect ratio. Next.js Image Optimization serves responsive, optimized versions for the browser.
