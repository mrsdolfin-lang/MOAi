# MOAi

A clean AI chat app (installable PWA) for 50+ providers. Bring your own API keys. No backend, no build step.

## Use it

1. Open the live app: https://mrsdolfin-lang.github.io/MOAi/
2. Tap **Add API key** (or the sliders icon), pick a provider, paste your key.
3. Chat. The first key you add is selected automatically.

## Features

- Streaming replies, stop button, smart auto-scroll
- Markdown: tables, lists, links, syntax-highlighted code with copy buttons
- Edit, regenerate, copy and feedback buttons
- Chat history with search, saved in the browser
- Light and dark themes, responsive on phone and desktop
- 50+ providers, several keys per provider with rotation and fallback, model picker, live Fetch models, custom endpoints
- Install to the home screen, works offline for the app shell
- Backup and restore of settings

## Deploy on GitHub Pages

Settings, Pages, Source: Deploy from a branch, Branch: `main`, folder: `/ (root)`. If a custom domain is set there and not configured, remove it.

## Files

`index.html`, `style.css`, `app.js`, `onboarding.js`, `sw.js`, `manifest.webmanifest`, `icon.svg`, `maskable.svg`

## Notes

- Keys and chats are stored in your browser (localStorage) in plain text. Use trusted devices only.
- Requests go straight from the browser to the provider. If a provider blocks browser (CORS) requests, put a small proxy in front and set it as the endpoint.
- Provider URLs and model names change over time. Use Fetch models or edit the endpoint.

## License

See [LICENSE](LICENSE).
