# AgentHQ

Self-hosted analytics workspace built on [Agent-Native](https://www.agent-native.com/).
Humans and agents share the same SQL state, actions, charts, and dashboards.

This app is based on the Agent-Native Analytics template, branded and packaged as **AgentHQ**.

## Develop

```bash
# from repo root
pnpm --filter agenthq install
pnpm --filter agenthq dev
```

Or inside this directory:

```bash
pnpm install
pnpm dev
```

App: http://localhost:8080

Set `ANTHROPIC_API_KEY` or `OPENAI_API_KEY` in `.env` (see `.env.example`).

## Self-host

See the repo root `docker-compose.yml` and website `/self-host` page.
