# Multi-stage Dockerfile for React/Vite application
FROM node:20-alpine AS base

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy package files for better layer caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Development stage
FROM base AS development

# Copy source code
COPY . .

# Show network information when starting
RUN echo "Development server will be available at:" && \
    echo "  Local:   http://localhost:5173" && \
    echo "  Network: http://0.0.0.0:5173" && \
    echo ""

# Expose development port
EXPOSE 5173

# Start development server with hot reload
CMD ["pnpm", "run", "dev"]

# Production build stage
FROM base AS build

# Copy source code
COPY . .

# Build the application
RUN pnpm run build

# Production stage with Nginx
FROM nginx:alpine AS production

# Copy built application from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080 (Coolify will handle external port mapping)
EXPOSE 8080

# Add health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8080/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
