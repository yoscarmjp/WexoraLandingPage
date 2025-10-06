# 🚀 Despliegue en Servicios en la Nube

Este proyecto está optimizado para desplegarse en plataformas como **Coolify**, **Railway**, **Render**, **Fly.io**, **Heroku**, y otros servicios en la nube.

## 🌟 Inicio Rápido

### Coolify (Auto-hosted)

1. **Conecta tu repositorio**: En tu panel de Coolify, conecta tu repositorio de Git
2. **Crear servicio**: Selecciona "New Service" → "From Git Repository"
3. **Configuración**:
   - **Source**: Git repository
   - **Branch**: `main` o la rama que prefieras
   - **Build Type**: `Dockerfile`
   - **Deploy Settings**: Se configura automáticamente
4. **Deploy automático**: Coolify construirá y desplegará usando el `Dockerfile`

**Nota**: Coolify manejará automáticamente las redes y puertos, no necesitas configuración adicional de networking.

### Railway (Recomendado)

1. **Conecta tu repositorio**: Ve a [railway.app](https://railway.app) y conecta tu repositorio de GitHub/GitLab
2. **Deploy automático**: Railway detectará automáticamente el `Dockerfile` y construirá la aplicación
3. **Configuración automática**: Se usarán las siguientes configuraciones por defecto:
   - Puerto: `10000` (Railway lo asigna automáticamente)
   - Comando: Se ejecuta el contenedor de producción con Nginx

### Render

1. **Crea un nuevo servicio web**: En [render.com](https://render.com) selecciona "Web Service"
2. **Conecta repositorio**: Elige tu repositorio de Git
3. **Configuración**:
   - **Runtime**: `Docker`
   - **Build Command**: `./deploy.sh` (opcional, para optimización)
   - **Start Command**: Se ejecuta automáticamente con el Dockerfile

### Fly.io

```bash
# Instalar Fly CLI si no lo tienes
curl -L https://fly.io/install.sh | sh

# Iniciar despliegue
fly launch

# O desplegar directamente
fly deploy
```

## 📋 Archivos de Configuración

- **`Dockerfile`**: Configuración multi-stage optimizada para desarrollo y producción
- **`docker-compose.yml`**: Para desarrollo local y pruebas
- **`nginx.conf`**: Configuración de Nginx optimizada para producción
- **`.dockerignore`**: Excluye archivos innecesarios del contexto de Docker
- **`deploy.sh`**: Script opcional para optimizar el proceso de construcción

## 🔧 Características de Producción

✅ **Multi-stage build**: Optimiza el tamaño de la imagen final
✅ **Nginx**: Servidor web rápido y eficiente
✅ **Compresión gzip**: Reduce el tamaño de transferencia
✅ **Headers de seguridad**: Protección contra vulnerabilidades comunes
✅ **SPA routing**: Soporte completo para React Router
✅ **Cache optimizado**: Assets estáticos con cache de largo plazo

## 🌐 Variables de Entorno

Para producción, estas variables se configuran automáticamente en las plataformas:

```bash
NODE_ENV=production
# Puerto asignado automáticamente por cada plataforma
# Coolify: Configura automáticamente
# Railway: 10000 (asignado automáticamente)
# Render: Configurado por la plataforma
```

**Nota**: Coolify y otras plataformas auto-hosted manejan automáticamente el networking y puertos, no necesitas configurar redes personalizadas en `docker-compose.yml`.

## 🛠️ Desarrollo Local

Para desarrollo local con Docker:

```bash
# Modo desarrollo con hot-reload
docker-compose up wexora-dev

# Modo producción local
docker-compose --profile production up wexora-prod
```

## 📊 Comandos Útiles

```bash
# Construir imagen de producción
docker build -t wexora-landing .

# Ejecutar producción localmente
docker run -p 80:80 wexora-landing

# Ver logs de construcción
docker build --no-cache --progress=plain -t wexora-landing .

# Limpiar imágenes antiguas
docker image prune -f
```

## 🚨 Solución de Problemas

### Problema: Assets no se cargan correctamente
- Asegúrate de que el `nginx.conf` esté correctamente configurado
- Verifica que los archivos estén en `/usr/share/nginx/html`

### Problema: Routing no funciona en producción
- El `nginx.conf` incluye configuración para SPA routing
- Asegúrate de que `try_files $uri $uri/ /index.html;` esté presente

### Problema: Puerto ocupado
- Cambia el puerto en `docker-compose.yml` si es necesario
- Usa `docker-compose down` para detener contenedores anteriores

## 📞 Soporte

Si tienes problemas con el despliegue, verifica:
1. Los logs de construcción en tu plataforma
2. Que todos los archivos estén presentes en el repositorio
3. Las variables de entorno estén correctamente configuradas

---

**¡Tu aplicación Wexora Landing Page está lista para conquistar la nube! 🌩️**
