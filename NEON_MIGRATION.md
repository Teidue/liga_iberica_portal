# Neon Database Migration Guide

## Overview
Base de datos migrada exitosamente de PostgreSQL local a Neon (PostgreSQL en la nube).

## Configuration Changes

### 1. Backend Configuration (`packages/backend/src/app.module.ts`)
- Configuración dual para desarrollo (local) y producción (Neon)
- SSL habilitado para producción
- `synchronize` deshabilitado en producción (práctica segura)

### 2. Environment Variables
- **Development**: Usa configuración local PostgreSQL
- **Production**: Usa credenciales Neon

## How to Run

### Development (Local DB)
```bash
npm run start:dev
# o
npm run start
```

### Production (Neon)
```bash
NODE_ENV=production npm run start
```

## Database Details

### Neon Credentials
- **Host**: ep-twilight-truth-a4fgvypc-pooler.us-east-1.aws.neon.tech
- **Database**: neondb
- **User**: neondb_owner
- **SSL**: Required (rejectUnauthorized: false)

### Local Development
- **Host**: localhost
- **Port**: 5432
- **Database**: liga_iberica_portal

## Important Notes

1. **Security**: Las credenciales están hardcodeadas solo para testing. En producción real, usa variables de entorno.
2. **SSL**: Neon requiere SSL para conexiones seguras.
3. **Migrations**: Para producción, considera usar migraciones TypeORM en lugar de `synchronize: true`.

## Next Steps

1. Configurar variables de entorno en producción (Vercel, Railway, etc.)
2. Implementar migraciones TypeORM para cambios de esquema
3. Configurar backup y monitoring en Neon

## Verification

La migración fue exitosa si:
- ✅ Backend se conecta a Neon en producción
- ✅ Las tablas se crean correctamente
- ✅ Los endpoints funcionan con la nueva base de datos