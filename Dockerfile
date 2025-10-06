FROM node:20-alpine AS base

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Clean pnpm cache and install dependencies
RUN pnpm store prune && \
    pnpm install --frozen-lockfile --prefer-offline && \
    pnpm prune

FROM base AS development

# Copy source code
COPY . .

# Expose port
EXPOSE 5173

# Start development server
CMD ["pnpm", "run", "dev", "--", "--host"]

FROM base AS build

# Copy source code
COPY . .

# Build the application
RUN pnpm run build

FROM nginx:alpine AS production

# Copy built files to nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]