# syntax=docker/dockerfile:1

FROM node:22-alpine AS build

WORKDIR /app

# Use npm 11 — npm 10 resolves optional deps differently and breaks lockfile sync
RUN npm install -g npm@11

COPY package.json package-lock.json .npmrc ./

# npm install (not ci) is reliable across Linux/Windows optional native deps
RUN npm install --include=dev --no-audit --no-fund

COPY . .

RUN npm run build

FROM node:22-alpine AS production

WORKDIR /app

RUN npm install -g npm@11 serve@14.2.4

COPY --from=build /app/dist ./dist

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8080

EXPOSE 8080

# Railway injects PORT at runtime; serve static SPA with client-side routing fallback
CMD ["sh", "-c", "serve -s dist -l tcp://0.0.0.0:${PORT}"]
