# ⚡ Guía Rápida: Cómo Manejar Estilos desde Documento Central

**Para encontrar respuestas rápidas sobre estilos**, consulta esta guía.

---

## 🎯 Preguntas Frecuentes

### ❓ P1: "Necesito cambiar el color de botones"

**R:** Ve al archivo: `src/theme/theme.ts` línea **63-87**

```typescript
MuiButton: {
  styleOverrides: {
    root: {
      borderRadius: shape.md,
      textTransform: 'none' as const,
      fontWeight: typography.fontWeightSemiBold,  // ← Cambiar aquí
    },
  },
}
```

**Impacto**: Todos los botones en la aplicación

---

### ❓ P2: "¿Dónde cambio el border radius de inputs?"

**R:** Ve al archivo: `src/theme/theme.ts` línea **140-150**

```typescript
MuiOutlinedInput: {
  styleOverrides: {
    root: {
      fontFamily: typography.fontFamily,
      borderRadius: shape.md,  // ← Cambiar aquí
    },
  },
}
```

**Nota**: También ve a `MuiTextField`, `MuiFilledInput`, `MuiInput`

---

### ❓ P3: "¿Cómo agregar estilos a un nuevo componente?"

**R:** Sigue este patrón en `src/theme/theme.ts`:

```typescript
// PASO 1: Ir a getComponentOverrides()
const getComponentOverrides = (mode: 'light' | 'dark'): ThemeOptions['components'] => {
  // ...

  // PASO 2: Agregar nuevo componente
  MuiNuevoComponente: {
    defaultProps: {
      // Propiedades por defecto
    },
    styleOverrides: {
      root: {
        // Estilos base
        borderRadius: shape.md,
        fontFamily: typography.fontFamily,
      },
      // Variantes específicas
      outlined: {
        // ...
      },
    },
  },

  // PASO 3: Usar tokens para colores
  // ✅ Usa lightTokens/darkTokens para acceder a colores por modo
  // ✅ Usa shapeTokens para border radius
  // ✅ Usa typographyTokens para tipografía
};
```

---

### ❓ P4: "¿Dónde están los colores del sistema?"

**R:** Los colores están en **TRES NIVELES**:

```
1. GENERADO (Source)
   └─ src/tokens/generated/ts/tokens.ts
      └─ 3000+ tokens auto-generados por Style Dictionary

2. ORGANIZADO (Processing)
   └─ src/theme/tokens-import.ts
      └─ lightTokens.colors.*
      └─ darkTokens.colors.*

3. CONSUMIDO (Application)
   └─ src/theme/theme.ts
      └─ getComponentOverrides() usa los tokens
```

**Para ver colores específicos**:
```typescript
// src/theme/tokens-import.ts línea 141-196 (light mode)
// src/theme/tokens-import.ts línea 307-362 (dark mode)

lightTokens.colors = {
  primary: { main, dark, light, contrastText },
  secondary: { ... },
  error: { ... },
  warning: { ... },
  info: { ... },
  success: { ... },
  background: { default, paper },
  text: { primary, secondary, disabled },
  action: { active, hover, selected, disabled, disabledBackground },
  divider: color,
}
```

---

### ❓ P5: "¿Cómo cambio el tema de Light a Dark?"

**R:** El tema cambia automáticamente si:

1. **En tu App principal**:
```typescript
// App.tsx
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';

const [isDarkMode, setIsDarkMode] = useState(false);

<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
  {/* Tu app aquí */}
</ThemeProvider>
```

2. **Automáticamente**:
   - Todos los componentes se re-renderean
   - Todos los estilos cambian
   - Ningún componente individual necesita actualizar

**Razón**: En `theme.ts` usamos:
```typescript
const modeTokens = mode === 'light' ? lightTokens : darkTokens;
// Todos los colores vienen de modeTokens
```

---

### ❓ P6: "¿Dónde está el tamaño de fuente de los headings?"

**R:** Ve a: `src/theme/tokens-import.ts` línea **24-65**

```typescript
export const typographyTokens = {
  // ...
  h1: {
    fontFamily: tokens.PrimitivesTypographyFontFamilyStack,
    fontWeight: Number(tokens.PrimitivesTypographyFontWeightSemibold),
    fontSize: tokens.PrimitivesTypographyFontSize4xl,  // ← 60px
    lineHeight: Number(tokens.PrimitivesTypographyLineHeightTight),
    letterSpacing: '-0.01562em',
  },
  h2: {
    // fontSize: tokens.PrimitivesTypographyFontSize3xl,  // ← 48px
  },
  h3: {
    // fontSize: tokens.PrimitivesTypographyFontSize2xl,  // ← 34px
  },
  // ... más
};
```

**Para cambiar**: Edita los valores en este archivo (línea 24-117)

---

### ❓ P7: "¿Dónde cambio el border radius de todo?"

**R:** Ve a: `src/theme/tokens-import.ts` línea **122-129**

```typescript
export const shapeTokens = {
  borderRadius: 8,  // Default MUI
  sm: 4,            // ← Cambiar aquí
  md: 8,            // ← Cambiar aquí
  lg: 12,           // ← Cambiar aquí
  xl: 20,           // ← Cambiar aquí
  rounded: 9999,    // ← Píldora/círculo
};
```

**Impacto**:
- `sm` → usado en `LinearProgress`, `ListItemButton`
- `md` → usado en `Button`, `Card`, `Input`, `Dialog`
- `lg` → usado en `Card` grande, `Dialog`
- `xl` → usado en botones grandes
- `rounded` → usado en `Chip`, `FAB`

---

### ❓ P8: "¿Dónde está la escala de espaciado?"

**R:** Ve a: `src/theme/tokens-import.ts` línea **134-136**

```typescript
export const spacingArray = [0, 4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96];
```

**En MUI se usa así**:
```typescript
// theme.ts tiene una función spacing()
const spacing = (factor: number): number => {
  const baseUnit = 8;
  return baseUnit * factor;
};

// En componentes:
<Box sx={{ mb: 2 }} />  // mb = margin-bottom = 8 * 2 = 16px
<Box sx={{ p: 3 }} />   // p = padding = 8 * 3 = 24px
```

---

### ❓ P9: "¿Cómo veo todos los estilos de Alert?"

**R:** Ve a: `src/theme/tokens-import.ts` línea **197-260** (light) y **363-425** (dark)

```typescript
lightTokens.components = {
  alert: {
    borderRadius: ...,
    error: {
      filled: {
        background: ...,
        foreground: ...,
      },
      outlined: {
        background: ...,
        foreground: ...,
        border: ...,
      },
      standard: {
        background: ...,
        foreground: ...,
      },
    },
    warning: { /* ... */ },
    info: { /* ... */ },
    success: { /* ... */ },
  },
  // ... más componentes
}
```

Y están aplicados en: `src/theme/theme.ts` línea **256-318**

---

### ❓ P10: "¿Por qué un componente no está estilizado?"

**Checklist de debugging**:

1. ¿Está el componente en `theme.ts`?
   - Busca `Mui{NombreComponente}:`
   - Si NO está, agrégalo

2. ¿Es componente custom o MUI?
   - Si es custom: usa `sx` prop
   - Si es MUI: debe estar en theme.ts

3. ¿El `sx` prop está sobrescribiendo?
   ```typescript
   // Malo: sx sobrescribe theme
   <Button sx={{ fontWeight: 400 }} />  // Contradice theme (600)

   // Bueno: sx complementa theme
   <Button sx={{ mb: 2 }} />  // Agrega margen, mantiene font-weight
   ```

4. ¿El token existe?
   - Busca en `lightTokens` o `darkTokens`
   - Si NO existe, agrégalo en `tokens-import.ts`

---

## 🗂️ MAPA RÁPIDO DE ARCHIVOS

```
┌─────────────────────────────────────────────────────────┐
│ ¿Qué necesito cambiar?                                  │
├─────────────────────────────────────────────────────────┤
│ Color de botones                → src/theme/theme.ts    │
│ Border radius de inputs          → src/theme/theme.ts    │
│ Tamaño de fuente                 → src/theme/tokens-import.ts │
│ Escala de espaciado              → src/theme/tokens-import.ts │
│ Colores generales                → src/theme/tokens-import.ts │
│ Estilos de Alert                 → src/theme/theme.ts    │
│ Font family global               → src/theme/theme.ts    │
│ Elevaciones de Paper             → src/theme/tokens-import.ts │
│ Tokens para componente custom    → src/theme/tokens-import.ts │
│ Propiedades por defecto (MUI)    → src/theme/theme.ts    │
└─────────────────────────────────────────────────────────┘
```

---

## 📊 TABLA DE COMPONENTES Y UBICACIÓN

| Componente | Override en theme.ts | Línea |
|-----------|----------------------|-------|
| Button | MuiButton | 63 |
| TextField | MuiTextField | 129 |
| Input variants | MuiOutlinedInput/MuiFilledInput/MuiInput | 140-173 |
| Checkbox/Radio | MuiCheckbox/MuiRadio | 202-220 |
| Switch | MuiSwitch | 222 |
| Chip | MuiChip | 238 |
| Alert | MuiAlert | 256 |
| Paper/Card | MuiPaper/MuiCard | 331-358 |
| Dialog | MuiDialog | 360 |
| Table | MuiTable/MuiTableCell | 388-406 |
| List | MuiList/MuiListItem/MuiListItemButton | 411-440 |
| Menu | MuiMenu/MuiMenuItem | 453-467 |
| Tabs | MuiTabs/MuiTab | 472-487 |
| Typography | MuiTypography/MuiLink | 516-530 |

---

## ✅ CHECKLIST: Antes de hacer cambios

- [ ] ¿Estoy en el archivo correcto?
- [ ] ¿Estoy modificando el token correcto?
- [ ] ¿El cambio afecta a light y dark mode?
- [ ] ¿Hay componentes dependientes?
- [ ] ¿He ejecutado tests?
- [ ] ¿He verificado el visual?

---

## 🚀 WORKFLOW TÍPICO

```
1. Usuario reporta: "El botón verde no se ve bien"
   ↓
2. Ir a: src/theme/theme.ts línea 63
   ↓
3. Buscar: MuiButton
   ↓
4. Cambiar color: primary.main a nuevo color
   ↓
5. Guardar y verificar
   ↓
6. ✅ Todos los botones actualizan automáticamente
```

---

## 🎓 CONCEPTOS CLAVE

### El flujo de estilos en MRS UI

```
1. Style Dictionary genera tokens → src/tokens/generated/ts/tokens.ts
2. tokens-import.ts organiza tokens → lightTokens, darkTokens
3. theme.ts aplica overrides → getComponentOverrides()
4. MUI aplica automáticamente → componentes reciben estilos
5. Consumidor usa componente → <Button /> ya está estilizado
```

### Por qué es centralizado

- **Single Source of Truth**: Un archivo controla todo
- **No duplicación**: No repites estilos
- **Consistencia**: Todos los botones son iguales
- **Fácil mantenimiento**: Cambio en un lugar
- **Type Safe**: TypeScript valida tokens

---

## 📞 CONTACTO/SOPORTE

Si no encuentras algo:

1. Busca en `src/theme/theme.ts`
2. Busca en `src/theme/tokens-import.ts`
3. Lee el análisis: `ANALISIS_GESTION_CENTRALIZADA_ESTILOS.md`
4. Lee el plan: `PLAN_IMPLEMENTACION_CENTRALIZACION.md`

---

**Última actualización**: Enero 2026
**Versión**: 1.0
