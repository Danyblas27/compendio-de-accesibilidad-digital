# ==========================================
# Etapa 1: Base de Node.js (Alpine)
# ==========================================
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./

# ==========================================
# Etapa 2: Entorno de Desarrollo (Vite HMR)
# ==========================================
FROM base AS development
ENV NODE_ENV=development
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# ==========================================
# Etapa 3: Compilación para Producción
# ==========================================
FROM base AS builder
ENV NODE_ENV=production
RUN npm ci
COPY . .
RUN npm run build

# ==========================================
# Etapa 4: Servidor Web de Producción (Nginx Alpine)
# ==========================================
FROM nginx:1.27-alpine AS production
# Copiar artefactos estáticos generados por Vite
COPY --from=builder /app/dist /usr/share/nginx/html
# Configuración personalizada de Nginx
COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
