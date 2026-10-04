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

The server-side route at `/api/youtube` fetches current uploads through the YouTube Data API. It reads credentials only on the server.

1. Copy `.env.example` to `.env.local`.
2. Set `YOUTUBE_API_KEY` and `YOUTUBE_CHANNEL_ID`.

Without credentials, the video area stays empty and offers a link to the channel. It does not show fabricated video entries or thumbnails.

## Portrait image

The provided portrait is at `/images/divyansh-portrait.png` (file path: `public/images/divyansh-portrait.png`). It is referenced without editing and displayed with its natural aspect ratio. Next.js Image Optimization serves responsive, optimized versions for the browser.
