# syntax=docker/dockerfile:1

FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

# Install all dependencies (including dev) required for Vite build
RUN npm ci --include=dev

COPY . .

RUN npm run build

FROM node:22-alpine AS production

WORKDIR /app

RUN npm install -g serve@14.2.4

COPY --from=build /app/dist ./dist

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8080

EXPOSE 8080

# Railway injects PORT at runtime; serve static SPA with client-side routing fallback
CMD ["sh", "-c", "serve -s dist -l tcp://0.0.0.0:${PORT}"]
