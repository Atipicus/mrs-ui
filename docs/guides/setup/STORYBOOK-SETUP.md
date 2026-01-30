# Storybook Local - Guía de Uso

## ✅ Estado Actual

Storybook está **corriendo** en tu máquina:

```
URL: http://localhost:6006
Estado: ✅ Activo
```

---

## 🚀 Comandos Básicos

### Iniciar Storybook

```bash
npm run dev
```

- Abre automáticamente en: http://localhost:6006
- Hot reload activado (cambios en vivo)
- Puerto: 6006

### Detener Storybook

Presiona: **Ctrl + C** en la terminal donde está corriendo

### Reiniciar Storybook

```bash
# Detener (Ctrl + C)
# Luego iniciar de nuevo
npm run dev
```

### Build Estático (sin servidor)

```bash
npm run build-storybook
```

Genera: `storybook-static/` (archivos HTML estáticos)

---

## 📂 Estructura de Storybook

### Archivos de Configuración

```
.storybook/
├── main.ts          # Configuración principal
├── preview.tsx      # Decoradores y parámetros globales
└── preview-head.html # HTML head personalizado
```

### Ubicación de Stories

```
src/
├── components/
│   ├── atoms/
│   │   └── Button/
│   │       └── Button.stories.tsx
│   ├── molecules/
│   └── organisms/
└── stories/
    ├── design-tokens/
    ├── foundations/
    └── templates/
```

---

## 🎨 Navegación en Storybook

### Panel Izquierdo: Stories

```
├── 📖 Introduction
├── 🎨 Design Tokens
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   └── Components
├── 🧱 Components
│   ├── Atoms
│   │   ├── Button
│   │   ├── IconButton
│   │   ├── Avatar
│   │   └── ...
│   ├── Molecules
│   └── Organisms
└── 🎬 Animations & Interactions
```

### Panel Inferior: Addons

- **Controls**: Modificar props en tiempo real
- **Actions**: Ver eventos disparados
- **Interactions**: Tests de interacción
- **Accessibility**: Validación WCAG
- **Docs**: Documentación generada

---

## 🔧 Funciones Útiles

### Dark Mode

Toggle en la barra superior:
- 🌞 Light Mode
- 🌙 Dark Mode

Todos los componentes responden al tema seleccionado.

### Responsive Testing

Toolbar → Viewport:
- Mobile (320px)
- Tablet (768px)
- Desktop (1024px)
- Custom

### Canvas vs Docs

- **Canvas**: Vista interactiva del componente
- **Docs**: Documentación completa con props table

### Compartir Story

1. Selecciona una story
2. Click en "Copy canvas link" (icono de link)
3. Comparte: `http://localhost:6006/?path=/story/...`

---

## 📤 Opciones para Compartir

### Opción 1: ngrok (Tunnel Temporal)

Convierte `localhost:6006` en URL pública temporal.

#### Instalar ngrok

```bash
# Con Homebrew
brew install ngrok

# O descargar de https://ngrok.com/download
```

#### Uso

```bash
# Terminal 1: Storybook corriendo
npm run dev

# Terminal 2: Crear tunnel
ngrok http 6006
```

Obtendrás:
```
Forwarding: https://abc123.ngrok.io -> http://localhost:6006
```

✅ Comparte: `https://abc123.ngrok.io`

⚠️ Limitaciones:
- URL cambia cada vez
- Requiere mantener ngrok activo
- Gratis: 1 concurrent tunnel

#### ngrok Permanente (cuenta gratis)

```bash
# Registrarse y obtener authtoken
ngrok authtoken YOUR_TOKEN

# Tunnel con URL estática (plan pago)
ngrok http 6006 --subdomain=mrs-ui
```

---

### Opción 2: Build Estático + Compartir

Genera archivos HTML y compártelos.

```bash
# Generar build
npm run build-storybook

# Comprimir
zip -r storybook-build.zip storybook-static/

# Compartir archivo por:
# - Email
# - Google Drive
# - Dropbox
# - WeTransfer
```

**Receptor abre:**
1. Descomprimir `storybook-build.zip`
2. Abrir `storybook-static/index.html` en navegador

---

### Opción 3: Capturas y Videos

Para compartir ejemplos específicos:

```bash
# macOS: Captura de pantalla
Cmd + Shift + 4

# macOS: Grabar pantalla
Cmd + Shift + 5

# Loom (screen recording)
# https://www.loom.com
```

---

### Opción 4: Demo en Vivo

Compartir pantalla en videollamada:
- Zoom
- Google Meet
- Microsoft Teams

---

## 🛠️ Troubleshooting

### Puerto 6006 Ocupado

**Error:** `Port 6006 is already in use`

**Solución:**

```bash
# Encontrar proceso
lsof -ti:6006

# Matar proceso
kill -9 $(lsof -ti:6006)

# O usar puerto diferente
npm run dev -- -p 6007
```

### Cambios No Se Reflejan

```bash
# Limpiar cache
npm run dev -- --no-manager-cache

# O eliminar cache
rm -rf node_modules/.cache
npm run dev
```

### Build Falla

```bash
# Limpiar todo
rm -rf node_modules storybook-static
npm install
npm run build-storybook
```

---

## 📊 Performance Tips

### Hot Reload Lento

Reduce el número de stories cargadas editando `.storybook/main.ts`:

```typescript
stories: [
  '../src/components/atoms/**/*.stories.tsx', // Solo atoms
  // '../src/components/molecules/**/*.stories.tsx', // Comentar
],
```

### Build Optimizado

```bash
# Build de producción (más rápido)
NODE_ENV=production npm run build-storybook
```

---

## 🎯 Workflow Recomendado

### Desarrollo Diario

```bash
# 1. Iniciar Storybook
npm run dev

# 2. Desarrollar componente + story

# 3. Ver cambios en vivo
# (navegador actualiza automáticamente)

# 4. Cuando termines: Ctrl + C
```

### Antes de Commit

```bash
# 1. Build para verificar
npm run build-storybook

# 2. Si funciona, hacer commit
git add .
git commit -m "feat: add new component"
git push
```

---

## 📖 Recursos

### Documentación Storybook

- **Oficial**: https://storybook.js.org/docs
- **Addons**: https://storybook.js.org/addons
- **Recipes**: https://storybook.js.org/recipes

### Shortcuts

| Acción | Shortcut |
|--------|----------|
| Buscar stories | `/` |
| Toggle sidebar | `S` |
| Toggle addons | `A` |
| Full screen | `F` |
| Prev story | `←` |
| Next story | `→` |

---

## 🔄 Actualizar Storybook

```bash
# Ver versión actual
npm list @storybook/react

# Actualizar (cuando sea necesario)
npx storybook@latest upgrade
```

---

## 📝 Agregar Nueva Story

### Template

Crea: `src/components/atoms/NewComponent/NewComponent.stories.tsx`

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { NewComponent } from './NewComponent';

const meta: Meta<typeof NewComponent> = {
  title: 'Components/Atoms/NewComponent',
  component: NewComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // props aquí
  },
};
```

---

## 🎉 Resumen Rápido

```bash
# Iniciar
npm run dev

# Abrir
http://localhost:6006

# Compartir (temporal)
ngrok http 6006

# Build estático
npm run build-storybook

# Detener
Ctrl + C
```

---

**Última actualización:** Enero 23, 2026  
**Versión:** 0.12.0  
**Storybook:** 10.1.10
