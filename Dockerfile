# Stage 1: Build React application with Node.js 24 Alpine
FROM node:24-alpine AS builder
WORKDIR /app

# Install dependencies based on lockfile
COPY package*.json ./
RUN npm ci

# Copy source files and compile production bundle
COPY . .
RUN npm run build

# Stage 2: Serve compiled static assets with lightweight Nginx Alpine (~15MB)
FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy compiled static assets from builder stage
COPY --from=builder /app/dist .

# Copy custom Nginx SPA configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
