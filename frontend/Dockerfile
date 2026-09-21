# =========================
# Stage 1: Build
# =========================

FROM node:22 AS builder

WORKDIR /app

# ./ =/app

COPY package*.json ./

# npm= node package manager and ci =clean install

RUN npm ci

COPY . .

RUN npm run build


# =========================
# Stage 2: Runtime
# =========================

FROM nginx:alpine

# Nginx ka default web-server directory = /usr/share/nginx/html

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]