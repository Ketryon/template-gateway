# template-gateway

A Next.js starter for putting your own API layer in front of an existing backend. Frontends call this app's `/api` routes; the routes forward requests to your backend with the API key attached server-side, so the key never reaches the browser.

## What's included

- **Catch-all proxy** — `app/api/proxy/[...path]/route.ts` forwards `GET/POST/PUT/PATCH/DELETE /api/proxy/*` to `{API_BASE_URL}/*`, passing the query string and JSON body through.
- **Server-side API client** — `lib/api-client.ts`: typed `api.get/post/put/patch/delete` helpers with a Bearer `API_KEY`, a 30 s timeout and an `ApiClientError` carrying the upstream status.
- **CORS middleware** — `middleware.ts` handles preflight and allows origins listed in `ALLOWED_ORIGINS` on `/api/*`, and adds an `x-request-id` header to every API response.
- **Webhook receiver stub** — `app/api/webhooks/route.ts` with a `switch` on the event type. Signature verification is a TODO; add it for your provider before going live.
- **Health check** — `GET /api/health` returns `{ status, timestamp }`.
- **Security headers** — HSTS, `X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy` and `Permissions-Policy`, set in `next.config.ts`.
- **Design system and landing page** — Tailwind CSS v4 with a sage oklch palette, dark mode via `next-themes`, and components in `components/` (button, heading, section, FAQ, navbar, footer and more).
- **Dockerfile** — a multi-stage `node:20-alpine` image that serves on port 3009. It copies `public/`, which the repo does not include yet, so create that folder before building the image.

## Stack

Next.js 15 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS 4, next-themes, lucide-react, ESLint 9 and Prettier.

## Getting started

Requires Node 20+ and pnpm.

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

The app runs on http://localhost:3009.

### Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_APP_URL` | Public URL of this app (used for metadata). Defaults to `http://localhost:3009`. |
| `API_BASE_URL` | Base URL of the backend the proxy forwards to. |
| `API_KEY` | Optional. Sent as `Authorization: Bearer <key>` to the backend. |
| `ALLOWED_ORIGINS` | Comma-separated frontend origins allowed to call `/api/*`. `*` allows any origin. |

### Scripts

- `pnpm dev`: start the dev server on port 3009.
- `pnpm build`: production build.
- `pnpm start`: serve the production build.
- `pnpm lint`: run ESLint.

## Built by Ketryon

Built and used by [Ketryon](https://www.ketryon.com), a developer on subscription for founders.

## License

MIT. See [LICENSE](LICENSE).
