# Consolidación de Tokens - MRS Design System

## Resumen de Cambios

Se ha consolidado la estructura de tokens para centralizar su edición y eliminar duplicación. Todos los archivos de tokens light/dark ahora están unificados en archivos únicos.

## Estructura Anterior vs Nueva

### ❌ Antes (Archivos Separados)
```
src/tokens/source/
├── semantic/
│   ├── colors-light.json    (separado)
│   └── colors-dark.json     (separado)
└── component/
    ├── alert.json           (solo light)
    ├── alert-dark.json      (separado)
    ├── inputs.json          (solo light)
    ├── inputs-dark.json     (separado)
    ├── surfaces.json        (solo light)
    └── surfaces-dark.json   (separado)
```

### ✅ Ahora (Archivos Consolidados)
```
src/tokens/source/
├── semantic/
│   └── colors.json          (light + dark juntos)
└── component/
    ├── alert.json           (light + dark juntos)
    ├── inputs.json          (light + dark juntos)
    └── surfaces.json        (light + dark juntos)
```

## Beneficios

1. **Centralización**: Un solo archivo por categoría de tokens
2. **Sin duplicación**: Elimina redundancia y posibles inconsistencias
3. **Fácil mantenimiento**: Cambios en light y dark mode en el mismo archivo
4. **Mejor visibilidad**: Ver ambos modos juntos facilita comparaciones
5. **Menos archivos**: Estructura más limpia y simple

## Estructura de Archivos Consolidados

### 1. Colors Semánticos (`semantic/colors.json`)

```json
{
  "semantic": {
    "color": {
      "light": {
        "primary": { ... },
        "secondary": { ... },
        "error": { ... },
        ...
      },
      "dark": {
        "primary": { ... },
        "secondary": { ... },
        "error": { ... },
        ...
      }
    }
  }
}
```

### 2. Alert Component (`component/alert.json`)

```json
{
  "component": {
    "alert": {
      "light": {
        "borderRadius": { ... },
        "error": { ... },
        "warning": { ... },
        "info": { ... },
        "success": { ... }
      },
      "dark": {
        "borderRadius": { ... },
        "error": { ... },
        "warning": { ... },
        "info": { ... },
        "success": { ... }
      }
    }
  }
}
```

### 3. Inputs Component (`component/inputs.json`)

```json
{
  "component": {
    "input": {
      "light": {
        "standard": { ... },
        "filled": { ... },
        "outlined": { ... },
        "borderRadius": { ... }
      },
      "dark": {
        "standard": { ... },
        "filled": { ... },
        "outlined": { ... },
        "borderRadius": { ... }
      }
    },
    "chip": { ... },
    "rating": { ... }
  }
}
```

### 4. Surfaces Component (`component/surfaces.json`)

```json
{
  "component": {
    "paper": {
      "light": {
        "elevation0": { ... },
        "elevation1": { ... },
        "elevation2": { ... }
      },
      "dark": {
        "elevation0": { ... },
        "elevation1": { ... },
        ...
        "elevation24": { ... }
      }
    },
    "table": {
      "light": { ... },
      "dark": { ... }
    },
    "card": {
      "light": { ... },
      "dark": { ... }
    },
    "dialog": {
      "light": { ... },
      "dark": { ... }
    }
  }
}
```

## Cómo Editar Tokens Ahora

### Antes (Estructura Antigua)
Para cambiar un color de Alert en dark mode:
1. Buscar archivo `alert-dark.json`
2. Editar el valor
3. Regenerar tokens

### Ahora (Estructura Consolidada)
Para cambiar un color de Alert en dark mode:
1. Abrir `component/alert.json`
2. Navegar a `alert.dark.*`
3. Editar el valor en el mismo archivo donde está light
4. Regenerar tokens

## Comandos

```bash
# Regenerar tokens después de editar archivos source
npm run tokens:build

# Watch mode para desarrollo
npm run tokens:watch

# Limpiar y regenerar
npm run tokens:rebuild
```

## Archivos Generados

Los tokens consolidados se generan automáticamente en múltiples formatos:

- **TypeScript**: `src/tokens/generated/ts/tokens.js` + `.d.ts`
- **CSS**: `src/tokens/generated/css/tokens.css`
- **SCSS**: `src/tokens/generated/scss/tokens.scss`
- **JSON**: `src/tokens/generated/json/` (flat, nested, figma-tokens)

## Notas Importantes

1. ⚠️ **NO editar archivos en** `src/tokens/generated/` - son auto-generados
2. ✅ **Editar solo archivos en** `src/tokens/source/`
3. 🔄 Siempre ejecutar `npm run tokens:build` después de cambios
4. 📝 Los cambios en archivos source se propagan a todos los formatos generados

## Migración Completada

### Archivos Eliminados
- ❌ `semantic/colors-light.json`
- ❌ `semantic/colors-dark.json`
- ❌ `component/alert-dark.json`
- ❌ `component/inputs-dark.json`
- ❌ `component/surfaces-dark.json`

### Archivos Consolidados
- ✅ `semantic/colors.json` (nuevo)
- ✅ `component/alert.json` (actualizado)
- ✅ `component/inputs.json` (actualizado)
- ✅ `component/surfaces.json` (actualizado)

---

**Fecha de consolidación**: 2026-01-13
**Versión**: 0.9.0
