# Code Connect Setup Guide - MRS Design System

Este documento te guía paso a paso para conectar tus componentes de Figma con el código del repositorio.

## 📋 Resumen

**Code Connect** crea un "puente" entre tus componentes de Figma y su implementación en código. Cuando alguien use el MCP server de Figma con tu archivo, verá automáticamente cómo importar y usar cada componente.

---

## 🚀 Instalación

### Paso 1: Instalar dependencias

En la raíz de tu repositorio (`mrs-ui/`), ejecuta:

```bash
npm install --save-dev @figma/code-connect
```

### Paso 2: Configurar Code Connect

Crea el archivo de configuración en la raíz del proyecto:

```bash
# El archivo figma.config.json ya está incluido en este paquete
cp figma.config.json /ruta/a/mrs-ui/
```

### Paso 3: Copiar archivos .figma.tsx

Copia cada archivo `.figma.tsx` a la carpeta correspondiente de cada componente:

```
src/components/
├── atoms/
│   ├── Avatar/
│   │   ├── Avatar.tsx
│   │   └── Avatar.figma.tsx        ← Copiar aquí
│   ├── Badge/
│   │   ├── Badge.tsx
│   │   └── Badge.figma.tsx         ← Copiar aquí
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.figma.tsx        ← Copiar aquí
│   └── ... (resto de atoms)
├── molecules/
│   ├── Alert/
│   │   ├── Alert.tsx
│   │   └── Alert.figma.tsx         ← Copiar aquí
│   └── ... (resto de molecules)
└── organisms/
    ├── AppBar/
    │   ├── AppBar.tsx
    │   └── AppBar.figma.tsx        ← Copiar aquí
    └── ... (resto de organisms)
```

---

## 🔐 Configurar Token de Figma

### Paso 4: Obtener tu Personal Access Token

1. Ve a Figma → Settings → Account
2. Scroll hasta "Personal access tokens"
3. Click "Create new token"
4. Dale un nombre descriptivo: `code-connect-mrs`
5. Copia el token generado

### Paso 5: Configurar variable de entorno

```bash
# Opción A: Exportar temporalmente
export FIGMA_ACCESS_TOKEN="tu-token-aquí"

# Opción B: Agregar a .env (recomendado)
echo "FIGMA_ACCESS_TOKEN=tu-token-aquí" >> .env

# Opción C: Agregar a ~/.bashrc o ~/.zshrc (permanente)
echo 'export FIGMA_ACCESS_TOKEN="tu-token-aquí"' >> ~/.bashrc
source ~/.bashrc
```

---

## 📤 Publicar los mapeos

### Paso 6: Verificar la configuración

```bash
# Verificar que Code Connect puede leer tus archivos
npx figma connect parse
```

Deberías ver una lista de todos los componentes detectados.

### Paso 7: Publicar a Figma

```bash
# Publicar todos los mapeos
npx figma connect publish
```

Esto enviará los mapeos a Figma y los vinculará con tu archivo de diseño.

---

## ✅ Verificación

### Paso 8: Comprobar en Figma

1. Abre tu archivo de Figma: `MRS - Material UI`
2. Selecciona cualquier componente (ejemplo: Button)
3. En el panel derecho, busca la sección "Code Connect" o "Dev Resources"
4. Deberías ver el código de tu repositorio vinculado

---

## 🔄 Comandos útiles

```bash
# Ver todos los componentes mapeados
npx figma connect parse

# Publicar cambios
npx figma connect publish

# Eliminar mapeos publicados
npx figma connect unpublish

# Ver ayuda
npx figma connect --help
```

---

## 📁 Estructura de archivos incluidos

```
code-connect-setup/
├── CODE_CONNECT_SETUP.md          ← Esta guía
├── figma.config.json              ← Configuración principal
└── components/
    ├── atoms/
    │   ├── Avatar.figma.tsx
    │   ├── Badge.figma.tsx
    │   ├── Button.figma.tsx
    │   ├── Checkbox.figma.tsx
    │   ├── Chip.figma.tsx
    │   ├── CircularProgress.figma.tsx
    │   ├── Divider.figma.tsx
    │   ├── Fab.figma.tsx
    │   ├── Icon.figma.tsx
    │   ├── IconButton.figma.tsx
    │   ├── LinearProgress.figma.tsx
    │   ├── Link.figma.tsx
    │   ├── Paper.figma.tsx
    │   ├── Radio.figma.tsx
    │   ├── Rating.figma.tsx
    │   ├── Select.figma.tsx
    │   ├── Slider.figma.tsx
    │   ├── Switch.figma.tsx
    │   ├── TextField.figma.tsx
    │   └── Typography.figma.tsx
    ├── molecules/
    │   ├── Accordion.figma.tsx
    │   ├── Alert.figma.tsx
    │   ├── Card.figma.tsx
    │   ├── Dialog.figma.tsx
    │   ├── Menu.figma.tsx
    │   ├── Pagination.figma.tsx
    │   ├── Snackbar.figma.tsx
    │   ├── Stepper.figma.tsx
    │   ├── Table.figma.tsx
    │   ├── Tabs.figma.tsx
    │   └── Tooltip.figma.tsx
    └── organisms/
        ├── AppBar.figma.tsx
        ├── BottomNavigation.figma.tsx
        ├── Drawer.figma.tsx
        ├── List.figma.tsx
        ├── SpeedDial.figma.tsx
        └── Timeline.figma.tsx
```

---

## ❓ Solución de problemas

### Error: "Component not found"
- Verifica que el `nodeId` en el archivo `.figma.tsx` coincide con el componente en Figma
- Asegúrate de que el componente está publicado como parte de una biblioteca

### Error: "Invalid token"
- Verifica que `FIGMA_ACCESS_TOKEN` está configurado correctamente
- El token debe tener permisos de lectura en el archivo

### Error: "File not found"
- Verifica que el `fileKey` en `figma.config.json` es correcto
- El fileKey es la parte de la URL entre `/design/` y el nombre del archivo

---

## 📚 Recursos adicionales

- [Documentación oficial de Code Connect](https://www.figma.com/developers/code-connect)
- [Repositorio de Code Connect](https://github.com/figma/code-connect)
- [MRS Design System en GitHub](https://github.com/mgomez-ext/mrs-ui/)

---

**Archivo de Figma**: https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI
**Repositorio**: https://github.com/mgomez-ext/mrs-ui/
