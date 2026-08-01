# AgentNative

Monorepo for **AgentHQ** — self-hosted analytics your agent can operate.

| Name | Role |
|------|------|
| **AgentHQ** | Product (analytics app) |
| **AgentNative** | This repository |

Built on [Agent-Native](https://www.agent-native.com/) (Analytics template).

## Structure

```
apps/
  app/   # AgentHQ (Agent-Native analytics)
  web/   # Bilingual marketing site (EN / 中文)
```

## Requirements

- Node.js 22+
- [pnpm](https://pnpm.io/) 10+
- Optional: Docker
- On macOS: accept the Xcode license if native modules fail to build (`sudo xcodebuild -license`)

## Quick start (local)

```bash
pnpm install

# AI key for the in-app agent
cp apps/app/.env.example apps/app/.env
# edit apps/app/.env → ANTHROPIC_API_KEY or OPENAI_API_KEY

# AgentHQ app → http://localhost:8080
pnpm dev:app

# Marketing site → http://localhost:4321
pnpm dev:web
```

First visit: create a local account (no email verification in dev), then connect an AI engine if the key was not set in `.env`.

## Self-host with Docker

```bash
cp apps/app/.env.example apps/app/.env
# set your AI key in apps/app/.env

docker compose up --build
# → http://localhost:8080
```

SQLite data persists in the `agenthq-data` volume.

## Language

Marketing site routes:

- English: `/en/`
- 中文: `/zh/`

## License

App code follows the Agent-Native template license (MIT upstream). Add your own license before publishing a fork.
