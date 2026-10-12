# Compendio Técnico en Accesibilidad Web

React + Vite

## Uso con Node.js Local

    npm install
    npm run dev

Para generar la versión de producción:

    npm run build

## Uso con Docker

### Entorno de Desarrollo (con Hot Reload)
    docker compose up dev

Abre en tu navegador `http://localhost:5173`. Los cambios en el código se reflejarán automáticamente.

### Entorno de Producción (Nginx Alpine)
    docker compose up --build app

Abre en tu navegador `http://localhost:8080`.

## Estructura

    public/
      docs/                     Documentos descargables (Word, PowerPoint, PDF)
    docker/
      nginx/nginx.conf          Configuración del servidor web Nginx
    src/
      main.jsx                  Entrada de la app
      App.jsx                   Rutas
      components/               Header, Footer, PageHero, cards, filtros, plantilla de subpágina
      pages/                    Home y las 4 subpáginas
      data/                     Estructura del sitio y contenido de tarjetas
      styles/global.css         Estilos Tailwind y variables globales

## Páginas

- `/` Entendiendo la discapacidad
- `/materiales-accesibles` Cómo hacer materiales accesibles (incluye descargas Word y PowerPoint)
- `/clases-en-linea` Clases en línea
- `/videos` Videos
- `/dentro-del-aula` Dentro del aula
