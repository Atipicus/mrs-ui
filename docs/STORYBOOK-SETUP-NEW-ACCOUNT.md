# Configurar Storybook para Nueva Cuenta

**Fecha**: Enero 23, 2026  
**Versión**: v0.12.0

---

## 📋 Resumen

Esta guía te ayudará a configurar Storybook en una nueva cuenta, incluyendo:

1. ✅ Chromatic (Visual Regression Testing)
2. ✅ GitHub Pages (Deployment)
3. ✅ GitHub Actions (CI/CD)

---

## 🎯 Paso 1: Configurar Chromatic

### 1.1 Crear Cuenta en Chromatic

1. Ve a [chromatic.com](https://www.chromatic.com/)
2. Haz clic en **"Sign up"**
3. Conecta con tu cuenta de GitHub
4. Autoriza el acceso

### 1.2 Crear Nuevo Proyecto

1. En Chromatic, haz clic en **"Add project"**
2. Selecciona el repositorio: **`Atipicus/mrs-ui`**
3. Chromatic te dará un **Project Token** (guárdalo)
4. Copia el **Project ID** (formato: `Project:xxxxx`)

### 1.3 Actualizar Configuración Local

Edita `chromatic.config.json`:

```json
{
  "onlyChanged": true,
  "projectId": "Project:TU_NUEVO_PROJECT_ID",
  "zip": true
}
```

**Reemplaza** `TU_NUEVO_PROJECT_ID` con el ID que te dio Chromatic.

---

## 🔐 Paso 2: Configurar GitHub Secrets

### 2.1 Agregar CHROMATIC_PROJECT_TOKEN

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (⚙️)
3. En el menú lateral, click en **Secrets and variables** → **Actions**
4. Click en **"New repository secret"**
5. Agrega estos secrets:

| Nombre | Valor | Descripción |
|--------|-------|-------------|
| `CHROMATIC_PROJECT_TOKEN` | `[Token de Chromatic]` | Para visual regression tests |

**Obtener el token**: En Chromatic → Project Settings → Configure → Manage tokens

### 2.2 Verificar Otros Secrets (Opcionales)

Si planeas publicar a npm:

| Secret | Necesario Para | Cómo Obtener |
|--------|----------------|--------------|
| `NPM_TOKEN` | Publicar a npm | npmjs.com → Access Tokens |
| `FIGMA_PERSONAL_ACCESS_TOKEN` | Sync con Figma | Figma → Settings → Personal Access Tokens |
| `FIGMA_FILE_KEY` | Sync con Figma | Del URL de Figma |

---

## 📦 Paso 3: Configurar GitHub Pages

### 3.1 Habilitar GitHub Pages

1. Ve a **Settings** → **Pages**
2. En **"Source"**, selecciona: **Deploy from a branch**
3. En **"Branch"**, selecciona: **`gh-pages`** → **`/ (root)`**
4. Click **Save**

### 3.2 Verificar URL de Deployment

Tu Storybook estará disponible en:

```
https://[TU_USUARIO_GITHUB].github.io/mrs-ui/
```

Por ejemplo:
```
https://atipicus.github.io/mrs-ui/
```

---

## 🚀 Paso 4: Test de Deployment

### 4.1 Build Local

Prueba que el build funciona localmente:

```bash
# Build Storybook
npm run build-storybook

# Verificar output
ls -la storybook-static/
```

### 4.2 Deploy Manual (Primera Vez)

```bash
# Deploy a GitHub Pages
npm run deploy-storybook
```

Este comando:
1. Construye Storybook
2. Sube los archivos a la rama `gh-pages`
3. GitHub Pages los publica automáticamente

### 4.3 Verificar Deployment

Espera 1-2 minutos y visita:
```
https://[TU_USUARIO_GITHUB].github.io/mrs-ui/
```

---

## 🔄 Paso 5: Configurar CI/CD (GitHub Actions)

### 5.1 Workflows Actuales

El proyecto ya tiene estos workflows configurados:

| Workflow | Archivo | Qué Hace |
|----------|---------|----------|
| **CI** | `ci.yml` | Tests, build Storybook, Chromatic |
| **Deploy Storybook** | `deploy-storybook.yml` | Deploy automático a GitHub Pages |
| **Chromatic Baseline** | `chromatic-baseline.yml` | Crear baseline de Chromatic |

### 5.2 Test de CI

Haz un commit y push para probar CI:

```bash
git add chromatic.config.json
git commit -m "chore: update chromatic config for new account"
git push origin main
```

### 5.3 Verificar Workflows

1. Ve a **Actions** en GitHub
2. Verás 3 workflows ejecutándose:
   - ✅ CI (tests, build, chromatic)
   - ✅ Deploy Storybook (deploy a Pages)
   - ⚠️ Chromatic Baseline (manual)

---

## 🎨 Paso 6: Crear Baseline en Chromatic

### 6.1 Por Qué es Necesario

La primera vez, Chromatic necesita un **baseline** (punto de referencia) para comparar cambios visuales futuros.

### 6.2 Ejecutar Workflow Manual

1. Ve a **Actions** → **Chromatic Baseline**
2. Click en **"Run workflow"**
3. Selecciona branch: **`main`**
4. Click **"Run workflow"**

### 6.3 Verificar en Chromatic

1. Ve a chromatic.com
2. Verás tu primer build
3. Acepta todas las stories como baseline

---

## ✅ Verificación Final

### Checklist de Configuración

- [ ] ✅ Cuenta de Chromatic creada
- [ ] ✅ Proyecto conectado a GitHub repo
- [ ] ✅ `chromatic.config.json` actualizado con nuevo Project ID
- [ ] ✅ Secret `CHROMATIC_PROJECT_TOKEN` agregado a GitHub
- [ ] ✅ GitHub Pages habilitado
- [ ] ✅ Build local exitoso (`npm run build-storybook`)
- [ ] ✅ Deploy manual exitoso (`npm run deploy-storybook`)
- [ ] ✅ Storybook accesible en GitHub Pages
- [ ] ✅ CI workflow ejecutándose correctamente
- [ ] ✅ Chromatic baseline creado

### URLs para Verificar

```bash
# Storybook en GitHub Pages
https://[TU_USUARIO].github.io/mrs-ui/

# Chromatic Dashboard
https://www.chromatic.com/builds?appId=[TU_PROJECT_ID]

# GitHub Actions
https://github.com/[TU_USUARIO]/mrs-ui/actions
```

---

## 📝 Comandos Útiles

```bash
# Development
npm run dev                    # Storybook local (puerto 6006)

# Build
npm run build-storybook        # Construir Storybook

# Deploy
npm run deploy-storybook       # Deploy a GitHub Pages

# Chromatic (manual si necesitas)
npx chromatic --project-token=YOUR_TOKEN
```

---

## 🛠️ Troubleshooting

### Error: "Chromatic: Project token is required"

**Solución**: Verifica que el secret `CHROMATIC_PROJECT_TOKEN` esté configurado en GitHub Settings → Secrets.

### Error: "Failed to publish to gh-pages"

**Solución**: 
1. Verifica que GitHub Pages esté habilitado
2. Verifica que la rama `gh-pages` exista
3. Ejecuta manualmente: `npm run deploy-storybook`

### Storybook muestra 404 en GitHub Pages

**Solución**:
1. Espera 2-3 minutos (GitHub Pages tarda en actualizar)
2. Verifica que el branch en Settings → Pages sea `gh-pages`
3. Verifica que la URL sea correcta: `https://[usuario].github.io/mrs-ui/`

### Chromatic no detecta cambios

**Solución**:
1. Asegúrate de que el baseline esté creado
2. Ejecuta el workflow "Chromatic Baseline" manualmente
3. Verifica en chromatic.com que todas las stories estén aprobadas

---

## 🔄 Workflow Normal de Desarrollo

### Cuando haces cambios en componentes:

1. **Local**: `npm run dev` para ver cambios
2. **Commit**: `git add . && git commit -m "feat: update component"`
3. **Push**: `git push origin [branch]`
4. **Automático**:
   - CI corre tests
   - Chromatic detecta cambios visuales
   - Si pasas tests → Deploy a GitHub Pages
5. **Chromatic Review**:
   - Ve a chromatic.com
   - Revisa cambios visuales
   - Aprueba o rechaza

---

## 📚 Recursos Adicionales

### Documentación Oficial

- **Chromatic**: https://www.chromatic.com/docs/
- **Storybook**: https://storybook.js.org/docs/
- **GitHub Pages**: https://docs.github.com/en/pages
- **GitHub Actions**: https://docs.github.com/en/actions

### Documentación del Proyecto

- `README.md` - Getting started
- `docs/README.md` - Índice de documentación
- `CONTRIBUTING.md` - Guía de contribución

---

## 🆘 Necesitas Ayuda?

Si tienes problemas:

1. **GitHub Issues**: Crea un issue en el repositorio
2. **Chromatic Support**: support@chromatic.com
3. **Storybook Discord**: https://discord.gg/storybook

---

## 📊 Resumen Visual

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  CONFIGURACIÓN STORYBOOK - NUEVA CUENTA             │
│                                                     │
│  1. Chromatic                                       │
│     ✅ Crear cuenta                                 │
│     ✅ Conectar repo                                │
│     ✅ Obtener Project ID & Token                   │
│                                                     │
│  2. GitHub Secrets                                  │
│     ✅ CHROMATIC_PROJECT_TOKEN                      │
│                                                     │
│  3. GitHub Pages                                    │
│     ✅ Habilitar en Settings                        │
│     ✅ Branch: gh-pages                             │
│                                                     │
│  4. Test                                            │
│     ✅ npm run build-storybook                      │
│     ✅ npm run deploy-storybook                     │
│                                                     │
│  5. Chromatic Baseline                              │
│     ✅ Run workflow manual                          │
│     ✅ Aprobar en chromatic.com                     │
│                                                     │
│  RESULTADO: Storybook funcionando con CI/CD         │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

**Última actualización**: Enero 23, 2026  
**Versión del proyecto**: v0.12.0  
**Tiempo estimado**: 20-30 minutos
