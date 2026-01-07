# Liga Ibérica Portal

Monorepo para la aplicación de la Liga Ibérica con backend NestJS y frontend Next.js.

## 📁 Estructura del Proyecto

```
liga-iberica-portal/
├── packages/
│   ├── backend/          # API NestJS con TypeORM + PostgreSQL
│   └── frontend/         # Aplicación Next.js
├── package.json          # Workspace configuration
└── README.md
```

## 🚀 Comenzar

### Instalación
```bash
npm install
```

### Desarrollo Local
```bash
# Backend (development - PostgreSQL local)
npm run start:dev

# Frontend
cd packages/frontend && npm run dev
```

### Producción
```bash
# Backend (producción - Neon Database)
NODE_ENV=production npm run start
```

## 🗄️ Base de Datos

- **Desarrollo**: PostgreSQL local
- **Producción**: Neon (PostgreSQL en la nube)

Ver `NEON_MIGRATION.md` para detalles de la migración.

## 📦 Scripts Disponibles

```bash
# Raíz del proyecto
npm install              # Instala dependencias de todos los packages
npm run dev              # Inicia frontend en desarrollo
npm run build            # Build de todos los packages
npm test                 # Ejecuta tests

# Backend
cd packages/backend
npm run start:dev       # Desarrollo con watch
npm run build           # Build para producción
npm run test            # Tests unitarios
npm run test:e2e        # Tests e2e
npm run lint            # Linting
```

## 🛠️ Tecnologías

### Backend
- NestJS
- TypeORM
- PostgreSQL
- TypeScript

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

## 🔧 Configuración

Las variables de entorno se configuran en `.env`:
```env
# Desarrollo local
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=tu_password
DB_DATABASE=liga_iberica_portal

# Producción Neon
NEON_DATABASE_URL=postgres://user:password@host/database

# App
PORT=3000
NODE_ENV=development
```

## 📝 Próximos Pasos

- [ ] Configurar GitHub Actions para CI/CD
- [ ] Implementar migraciones TypeORM
- [ ] Configurar tests e2e
- [ ] Deploy automático a Vercel/Heroku