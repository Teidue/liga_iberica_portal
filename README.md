# 🏆 Liga Ibérica Portal

Monorepo para la aplicación de gestión de la Liga Ibérica con arquitectura monolítica: backend NestJS + frontend Next.js.

## 📁 Estructura del Proyecto

```
liga-iberica-portal/
├── packages/
│   ├── backend/          # API NestJS con TypeORM + PostgreSQL
│   └── frontend/         # Aplicación Next.js
├── .github/workflows/    # CI/CD configurations
├── vercel.json          # Configuración de despliegue
├── package.json          # Workspace configuration
└── README.md
```

## 🚀 Quick Start

### Instalación
```bash
npm install
```

### Desarrollo Local
```bash
# Inicia ambos frontend y backend
npm run dev

# O por separado:
npm run start:dev:backend    # Backend en http://localhost:3000
npm run start:dev:frontend   # Frontend en http://localhost:3001
```

### Producción (Neon Database)
```bash
# Cambiar a configuración Neon
cd packages/backend
cp .env.production .env
NODE_ENV=production npm run start
```

## 🗄️ Configuración de Base de Datos

### 📋 Archivos de Entorno Optimizados

Solo 2 archivos necesarios:

**`.env`** (Desarrollo Local):
```bash
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=tadeo123
DB_DATABASE=liga_iberica_portal
PORT=3000
```

**`.env.production`** (Producción Neon):
```bash
NODE_ENV=production
DB_HOST=ep-twilight-truth-a4fgvypc-pooler.us-east-1.aws.neon.tech
DB_PORT=5432
DB_USERNAME=neondb_owner
DB_PASSWORD=npg_oAShDzOj6H2s
DB_DATABASE=neondb
PORT=3001
```

### 🔄 Cambiar Entre Ambientes

```bash
# Desarrollo (predeterminado)
npm run start:dev

# Producción Neon
cd packages/backend
cp .env.production .env
NODE_ENV=production npm run start
```

### 🧪 Verificar Conexión a Base de Datos

**Endpoints de Health Check:**
- `GET /health` - Estado general de la aplicación
- `GET /health/database` - Conexión a base de datos

**Prueba rápida:**
```bash
curl http://localhost:3000/health/database
```

**Respuesta esperada:**
```json
{
  "status": "connected",
  "database": "liga_iberica_portal",
  "environment": "development",
  "userCount": 0
}
```

## 🗃️ Esquema de Base de Datos

### Entidades Principales

1. **Users** - Gestión de usuarios y autenticación
2. **Tournaments** - Administración de torneos
3. **Clubs** - Gestión de clubes
4. **Teams** - Administración de equipos
5. **Players** - Gestión de jugadores
6. **MatchDays** - Jornadas de partidos
7. **TournamentTeams** - Relaciones torneos-equipos
8. **PlayerMatchDay** - Asistencias de jugadores
9. **Payments** - Gestión de pagos
10. **Guests** - Gestión de invitados

### 🔄 Migraciones TypeORM

**Crear nueva migración:**
```bash
cd packages/backend
npm run build
npx typeorm migration:generate ./src/migrations/NewMigration -d dist/data-source.js
```

**Ejecutar migraciones:**
```bash
# En producción (Neon)
NODE_ENV=production npx typeorm migration:run -d dist/data-source.js
```

## 📦 Scripts Disponibles

### Raíz del Proyecto
```bash
npm install              # Instala dependencias de todos los packages
npm run dev              # Inicia frontend y backend
npm run build            # Build de todos los packages
npm test                 # Ejecuta tests
```

### Backend
```bash
cd packages/backend
npm run start:dev       # Desarrollo con watch
npm run start           # Producción
npm run build           # Build para producción
npm run test            # Tests unitarios
npm run test:e2e        # Tests e2e
npm run lint            # Linting

# Migraciones
npm run migration:generate # Generar migración
npm run migration:run     # Ejecutar migraciones
npm run migration:revert  # Revertir última migración
```

### Frontend
```bash
cd packages/frontend
npm run dev             # Desarrollo
npm run build           # Build para producción
npm run start           # Inicia servidor de producción
npm run lint            # Linting
```

## 🛠️ Stack Tecnológico

### Backend
- **Framework**: NestJS 11.0.1
- **Base de Datos**: PostgreSQL con TypeORM 0.3.28
- **Lenguaje**: TypeScript 5.9.3
- **Testing**: Jest 30.0.0

### Frontend
- **Framework**: Next.js 16.1.1
- **UI**: React 19.2.3
- **Styling**: Tailwind CSS 4
- **Lenguaje**: TypeScript 5

### DevOps
- **CI/CD**: GitHub Actions
- **Despliegue**: Vercel
- **Base de Datos**: Neon (PostgreSQL cloud)
- **Package Manager**: npm workspaces

## 🚀 CI/CD Automático

El proyecto incluye **CI/CD completo** con GitHub Actions y Vercel:

### Workflow Automático
```bash
Tú:
git push                    # 🎯 Tu único paso

GitHub Actions:
1. Tests ✅               # 1-2 min
2. Build ✅               # 30 seg  
3. Deploy ✅              # 1-2 min
4. ¡Producción! 🚀       # Total: ~3 min
```

### Configuraciones
- **`.github/workflows/vercel-deploy.yml`** - Despliegue unificado frontend+backend
- **`vercel.json`** - Configuración de Vercel para monorepo
- **GitHub Secrets** - Variables de entorno seguras para producción

## 📊 Estado Actual del Desarrollo

### ✅ Completado (60%)
- [x] Arquitectura monolítica NestJS + Next.js
- [x] Entidades de base de datos definidas
- [x] Configuración dual (local/Neon)
- [x] Health checks y endpoints de monitoreo
- [x] Migraciones TypeORM creadas
- [x] Variables de entorno seguras
- [x] CI/CD configurado

### 🔄 En Progreso
- [ ] Conexión Neon establecida y probada
- [ ] Controllers completos para todos los módulos

### ⏳ Próximos Pasos
- [ ] Implementar autenticación (JWT)
- [ ] Completar frontend e integración con API
- [ ] Crear seed data para desarrollo
- [ ] Tests end-to-end
- [ ] Optimización de producción

## 🔧 Configuración de Development

### Requisitos Previos
1. **Node.js** 18+ (descargar desde [nodejs.org](https://nodejs.org/))
2. **PostgreSQL** local (para desarrollo) - Instalar desde [postgresql.org](https://www.postgresql.org/download/windows/)
3. **Cuenta Neon** (para producción) - Crear en [neon.tech](https://neon.tech)
4. **Git** (para clonar el repositorio)

### Setup Inicial Detallado desde Cero

#### 1. Instalar Dependencias del Sistema
```bash
# Verificar Node.js y npm
node --version  # Debe ser 18+
npm --version   # Debe ser 8+

# Instalar PostgreSQL (Windows)
# Descargar e instalar desde postgresql.org
# Durante instalación:
# - Usuario: postgres
# - Contraseña: tadeo123 (o la que configures)
# - Puerto: 5432
```

#### 2. Clonar y Configurar el Proyecto
```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd liga-iberica-portal

# Instalar dependencias
npm install
```

#### 3. Configurar Base de Datos Local
```bash
# Abrir pgAdmin o psql
# Crear nueva base de datos llamada 'liga_iberica_portal'
createdb liga_iberica_portal

# Verificar conexión
psql -h localhost -U postgres -d liga_iberica_portal
# Salir con \q
```

#### 4. Configurar Variables de Entorno
```bash
# Copiar archivo de ejemplo
cd packages/backend
copy .env.example .env

# Editar .env con un editor de texto (ej: notepad .env)
# Configurar:
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=tu_contraseña_postgres
DB_DATABASE=liga_iberica_portal
PORT=3000
```

#### 5. Ejecutar Migraciones de Base de Datos
```bash
# Construir el proyecto
npm run build

# Ejecutar migraciones
npm run migration:run
```

#### 6. Ejecutar Seed Data (Opcional)
```bash
# Poblar base de datos con datos de prueba
npm run seed
```

#### 7. Iniciar el Servidor de Desarrollo
```bash
# Desde la raíz del proyecto
npm run dev

# O por separado:
npm run dev:backend   # Backend en http://localhost:3000
npm run dev:frontend  # Frontend en http://localhost:3001
```

#### 8. Verificar Instalación
```bash
# Verificar health checks
curl http://localhost:3000/health
curl http://localhost:3000/health/database

# Deberías ver respuestas JSON indicando estado "ok"
```

### Variables de Entorno para Vercel
Configura estos secrets en tu proyecto Vercel:
- `NODE_ENV=production`
- `DB_HOST=ep-twilight-truth-a4fgvypc-pooler.us-east-1.aws.neon.tech`
- `DB_PORT=5432`
- `DB_USERNAME=neondb_owner`
- `DB_PASSWORD=npg_oAShDzOj6H2s`
- `DB_DATABASE=neondb`

## 🐛 Troubleshooting

### Problemas Comunes

**Error: "listen EADDRINUSE"**
- Cambia el puerto en `.env` o cierra procesos existentes
- Comando Windows: `netstat -ano | findstr :3000` para ver PID, luego `taskkill /PID <pid> /F`

**Error: SSL connection**
- Verifica configuración SSL para producción: `ssl: { rejectUnauthorized: false }`

**Error: "relation already exists"**
- Significa que las tablas ya existen (conexión exitosa)

**Error: TypeORM connection issues**
- Verifica credenciales en `.env`
- Asegúrate de que PostgreSQL esté corriendo: `pg_isready -h localhost -p 5432`

**Error: Module not found**
- Ejecuta `npm install` desde la raíz del proyecto

### Errores de Código Identificados

**Problemas de Seguridad:**
- Las contraseñas se guardan sin hash en algunos servicios. Se recomienda implementar bcrypt para hashear contraseñas antes de guardar.

**Problemas de Tipado TypeScript:**
- Uso excesivo de tipos `any` en módulos de autenticación. Se recomienda definir interfaces específicas para payloads y usuarios.

**Inconsistencias en Migraciones:**
- Algunas entidades tienen campos nullable pero las migraciones los definen como NOT NULL. Verificar y alinear definiciones.

**Código No Utilizado:**
- Variables e imports no utilizados en varios archivos. Ejecutar `npm run lint` para identificar y limpiar.

### Commands Útiles
```bash
# Ver procesos en puerto (Windows)
netstat -ano | findstr :3000

# Matar proceso en puerto (Windows)
taskkill /F /IM node.exe
# O específico: taskkill /PID <pid> /F

# Verificar PostgreSQL
pg_isready -h localhost -p 5432

# Verificar conexión a base de datos
curl http://localhost:3000/health/database

# Ejecutar linter y formateador
npm run lint
npm run format

# Corregir migraciones
npm run migration:run -- -d dist/data-source.js

# Limpiar node_modules y reinstalar
rmdir /s /q node_modules
npm install
```

## 📋 API Endpoints

### Health Checks
- `GET /health` - Estado general de la aplicación
- `GET /health/database` - Verificación de conexión a base de datos

### Autenticación
- `POST /auth/login` - Inicio de sesión
- `POST /auth/register` - Registro de usuario
- `GET /auth/profile` - Perfil del usuario autenticado

### Usuarios
- `GET /users` - Listar todos los usuarios
- `GET /users/:id` - Obtener usuario por ID
- `GET /users/email/:email` - Obtener usuario por email
- `POST /users` - Crear nuevo usuario
- `PATCH /users/:id` - Actualizar usuario
- `DELETE /users/:id` - Eliminar usuario

### Clubes
- `GET /clubs` - Listar todos los clubes
- `GET /clubs/:id` - Obtener club por ID
- `POST /clubs` - Crear nuevo club
- `PATCH /clubs/:id` - Actualizar club
- `DELETE /clubs/:id` - Eliminar club

### Equipos
- `GET /teams` - Listar todos los equipos
- `GET /teams/:id` - Obtener equipo por ID
- `POST /teams` - Crear nuevo equipo
- `PATCH /teams/:id` - Actualizar equipo
- `DELETE /teams/:id` - Eliminar equipo

### Otros Módulos
Los módulos de torneos, jugadores, jornadas, pagos e invitados tienen endpoints similares siguiendo el patrón REST estándar.

## 📄 Documentación Adicional

- **Guía de Configuración**: Ver sección de Variables de Entorno
- **Migraciones**: Ver sección de TypeORM
- **CI/CD**: Ver sección de GitHub Actions
- **API**: Ver sección de API Endpoints

---

**🚀 Liga Ibérica Portal - Plataforma de gestión deportiva moderna y escalable**