# MOAi

A clean, professional AI chat interface in a single HTML file. No build step, no dependencies. Works on mobile and desktop.

## Features

- Streaming replies with a stop button and smart auto-scroll
- Markdown rendering: headings, lists, tables, links, syntax-highlighted code with copy buttons
- Edit messages, regenerate, copy, and feedback buttons
- Chat history with search, saved in the browser
- Light and dark themes, responsive layout, safe-area and keyboard handling on phones
- **Settings with 50+ providers**: add your API keys, pick a model, done
  - Multiple keys per provider with automatic rotation and fallback
  - Model dropdown, live "Fetch models", or type any model ID
  - Editable endpoints, including local servers (Ollama, LM Studio) and any OpenAI-compatible API
  - Anthropic uses its native API; everything else uses the OpenAI-compatible format

## Quick start

1. Download or clone this repo.
2. Open `index.html` in a browser.
3. Open **Settings** (slider icon), choose a provider, add an API key, select a model.

## Deploy on GitHub Pages

1. Push these files to a repository.
2. Go to **Settings → Pages**, set the source to your main branch, root folder.
3. Your app will be live at `https://<username>.github.io/<repo>/`.

## Notes

- API keys and chats are stored in your browser's localStorage in plain text. Use trusted devices only.
- Requests go directly from the browser to the provider. Some providers block browser (CORS) requests; for those, put a small proxy in front and set it as the endpoint.
- Provider URLs and model names change over time. Use **Fetch models** or edit the endpoint if something is out of date.

## Customize

Providers live in the `PV` array inside `index.html`. Colors are CSS variables at the top of the file (`--acc` is the accent).

## License

See [LICENSE](LICENSE). A license is required for commercial use.
