FROM node:22-bookworm-slim
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-workspace.yaml ./
COPY apps/api/package.json apps/api/package.json
RUN pnpm install --no-frozen-lockfile
COPY . .
RUN pnpm --filter @hayasell/api prisma:generate && pnpm --filter @hayasell/api build
EXPOSE 3000
CMD ["./apps/api/start.sh"]
