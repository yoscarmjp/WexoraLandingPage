# Docker Setup para Wexora Landing Page

Este proyecto incluye una configuración completa de Docker para desarrollo y producción.

## 🚀 Inicio Rápido

### Modo Desarrollo

Para iniciar el proyecto en modo desarrollo con hot-reload:

```bash
docker-compose up wexora-dev
```

La aplicación estará disponible en: http://localhost:5173

### Modo Producción

Para construir y ejecutar la versión de producción optimizada:

```bash
docker-compose --profile production up wexora-prod
```

La aplicación estará disponible en: http://localhost:80

## 📋 Comandos Útiles

### Construir las imágenes
```bash
# Desarrollo
docker-compose build wexora-dev

# Producción
docker-compose build wexora-prod
```

### Ejecutar en segundo plano
```bash
# Desarrollo
docker-compose up -d wexora-dev

# Producción
docker-compose --profile production up -d wexora-prod
```

### Ver logs
```bash
# Desarrollo
docker-compose logs -f wexora-dev

# Producción
docker-compose logs -f wexora-prod
```

### Detener los contenedores
```bash
docker-compose down
```

### Limpiar todo (contenedores, imágenes, volúmenes)
```bash
docker-compose down -v --rmi all
```

### Acceder al contenedor
```bash
# Desarrollo
docker exec -it wexora-dev sh

# Producción
docker exec -it wexora-prod sh
```

## 🔧 Configuración

### Variables de Entorno

Asegúrate de tener un archivo `.env` en la raíz del proyecto con las variables necesarias.

### Puertos

- **Desarrollo**: 5173
- **Producción**: 80

Puedes cambiar los puertos en el archivo `docker-compose.yml` si es necesario.

## 📦 Estructura

- **Dockerfile**: Configuración multi-stage para desarrollo y producción
- **docker-compose.yml**: Orquestación de servicios
- **nginx.conf**: Configuración de Nginx para producción
- **.dockerignore**: Archivos excluidos del contexto de Docker

## 🛠️ Tecnologías

- **Node.js 20 Alpine**: Imagen base ligera
- **pnpm**: Gestor de paquetes
- **Vite**: Servidor de desarrollo y build tool
- **Nginx Alpine**: Servidor web para producción
- **React + TypeScript + Tailwind CSS**: Stack de la aplicación

## 💡 Notas

- El modo desarrollo incluye hot-reload automático
- Los archivos están montados como volúmenes en desarrollo para reflejar cambios en tiempo real
- La versión de producción está optimizada con Nginx y compresión gzip
- Se incluyen headers de seguridad en la configuración de Nginx
