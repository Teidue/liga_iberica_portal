# Setup GitHub Secrets

Necesitas configurar estos secrets en tu repositorio de GitHub para el CI/CD automático.

## 🔧 Pasos para configurar secrets:

1. Ve a tu repositorio en GitHub
2. Click: **Settings** → **Secrets and variables** → **Actions**
3. Click: **New repository secret**
4. Agrega los siguientes secrets:

---

## 📋 Secrets requeridos:

### 1. NEON_DATABASE_URL
```
postgres://neondb_owner:npg_oAShDzOj6H2s@ep-twilight-truth-a4fgvypc-pooler.us-east-1.aws.neon.tech/neondb
```

### 2. DATABASE_HOST
```
ep-twilight-truth-a4fgvypc-pooler.us-east-1.aws.neon.tech
```

### 3. DATABASE_USER
```
neondb_owner
```

### 4. DATABASE_PASSWORD
```
npg_oAShDzOj6H2s
```

### 5. DATABASE_NAME
```
neondb
```

---

## ✅ Verificación

Una vez configurados los 5 secrets, el workflow podrá:

- **Tests**: Correr automáticamente en cada push
- **Build**: Compilar el código 
- **Deploy**: Conectarse a Neon en producción
- **Rollback**: Detectar errores automáticamente

## 🚀 Flujo completo

1. **Tú**: `git push`
2. **GitHub**: Detecta push
3. **CI**: Tests + build automáticos
4. **CD**: Deploy a producción con Neon
5. **Resultado**: 🌐 Aplicación en vivo

**Importante**: Solo se deploya automáticamente desde la rama `main`.