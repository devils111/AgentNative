FROM node:22-bookworm-slim AS base
RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 make g++ \
  && rm -rf /var/lib/apt/lists/*
RUN corepack enable && corepack prepare pnpm@10.14.0 --activate
WORKDIR /repo

FROM base AS deps
COPY package.json pnpm-workspace.yaml ./
COPY apps/app/package.json apps/app/package.json
COPY apps/web/package.json apps/web/package.json
RUN pnpm install --filter agenthq... --frozen-lockfile=false

FROM deps AS build
COPY apps/app apps/app
WORKDIR /repo/apps/app
RUN pnpm build

FROM base AS runner
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8080
ENV DATABASE_URL=file:/data/app.db
WORKDIR /repo
COPY --from=deps /repo/node_modules /repo/node_modules
COPY --from=deps /repo/apps/app/node_modules /repo/apps/app/node_modules
COPY --from=build /repo/apps/app /repo/apps/app
WORKDIR /repo/apps/app
RUN mkdir -p /data
VOLUME ["/data"]
EXPOSE 8080
CMD ["pnpm", "start"]
