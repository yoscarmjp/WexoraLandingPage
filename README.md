# Wexora — Landing Page

> A modern, high-performance landing page built with React 19, TypeScript, Vite, and Tailwind CSS v4. Fully containerized with Docker and optimized for cloud deployment.

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | ^19.1.0 | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | ~5.8.3 | Static typing |
| [Vite](https://vitejs.dev/) | ^6.3.5 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.1.8 | Utility-first styling |
| [React Router DOM](https://reactrouter.com/) | ^7.6.2 | Client-side routing |
| [Lucide React](https://lucide.dev/) | ^0.544.0 | Icon library |
| [Axios](https://axios-http.com/) | ^1.9.0 | HTTP client |
| [date-fns](https://date-fns.org/) | ^4.1.0 | Date utilities |
| [Docker](https://www.docker.com/) | — | Containerization |
| [Nginx](https://nginx.org/) | alpine | Production server |

---

## ⚙️ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) **v20+**
- [pnpm](https://pnpm.io/) **v8+** — `npm install -g pnpm`
- [Docker](https://www.docker.com/) *(optional, for containerized runs)*

---

## 🛠️ Installation & Local Development

### 1. Clone the repository

```bash
git clone https://github.com/your-org/WexoraLandingPage.git
cd WexoraLandingPage
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start the development server

```bash
pnpm dev
```

The app will be available at:
- **Local:** `http://localhost:5173`
- **Network:** `http://0.0.0.0:5173`

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Type-check and build for production |
| `pnpm preview` | Locally preview the production build |
| `pnpm lint` | Run ESLint across the project |

---

## 🐳 Docker

### Development (with hot reload)

```bash
docker compose up wexora-dev
```

Access at `http://localhost:5173`

### Production

```bash
docker compose --profile production up wexora-prod
```

Access at `http://localhost:8282`

### Build production image manually

```bash
docker build --target production -t wexora-landing .
docker run -p 8282:8282 wexora-landing
```

---

## ☁️ Cloud Deployment

A helper script is provided for cloud platforms:

```bash
chmod +x deploy.sh
./deploy.sh
```

This script installs dependencies, builds the app, and verifies the output.

### Supported platforms

- **[Railway](https://railway.app/)** — Connect your repository; auto-deploy is configured.
- **[Render](https://render.com/)** — Link the repository and use the provided `Dockerfile`.
- **[Fly.io](https://fly.io/)** — Run `fly launch` or `fly deploy`.
- **[Coolify](https://coolify.io/)** — Self-hosted PaaS; uses the `coolify` Docker network defined in `docker-compose.yml`.

---

## 🏗️ Production Build

To generate the production bundle locally:

```bash
pnpm build
```

Output will be in the `dist/` directory, served by Nginx in the Docker production stage.