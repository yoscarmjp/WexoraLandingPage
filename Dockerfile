# ------------------------
# Build stage
# ------------------------
FROM node:20-alpine AS builder
# Instalar pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copiar package.json y pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Instalar dependencias
RUN pnpm install --frozen-lockfile

# Copiar el resto del código
COPY . .

# Construir la aplicación
RUN pnpm run build

# ------------------------
# Production stage
# ------------------------
FROM nginx:alpine AS production

# Copiar los archivos compilados
COPY --from=builder /app/dist /usr/share/nginx/html

# Configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto 80
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]

# ------------------------
# Development stage
# ------------------------
FROM node:20-alpine AS development

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

# Exponer puerto de Vite
EXPOSE 5173

# Iniciar servidor de desarrollo de Vite
CMD ["pnpm", "run", "dev", "--host"]
    