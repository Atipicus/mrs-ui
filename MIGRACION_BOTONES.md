# Guía de Migración de Botones - redsalud-portal-paciente

## 📋 Resumen

Esta guía describe cómo migrar los botones de `redsalud-portal-paciente` para usar el componente `Button` de `@atipicus/mrs-ui` en lugar de `@mui/material/Button` directamente.

## ✅ Cambios Realizados en mrs-ui

### 1. Variantes Custom Agregadas

Se han agregado las siguientes variantes custom al theme de `mrs-ui`:

- **`primary`** - Botón principal con fondo teal (#00828A)
- **`secondary`** - Botón secundario con borde (#1AA3A3)
- **`textCustom`** - Botón de texto con fondo blanco
- **`textTransparent`** - Botón de texto transparente
- **`alternativePrimary`** - Botón alternativo con fondo verde (#99CC00)

### 2. Tipos TypeScript

Las variantes están correctamente tipadas y disponibles en TypeScript.

### 3. Compatibilidad

Todas las variantes mantienen la misma apariencia y comportamiento que tenían en `redsalud-portal-paciente`.

## 🚀 Pasos de Migración

### Paso 1: Actualizar Imports

**Antes:**
```tsx
import { Button } from '@mui/material';
```

**Después:**
```tsx
import { Button } from '@atipicus/mrs-ui';
```

### Paso 2: Verificar Uso del Theme

Asegúrate de que el proyecto esté usando el theme de `mrs-ui`:

```tsx
import { theme } from '@atipicus/mrs-ui';
import { ThemeProvider } from '@mui/material/styles';

// En _app.tsx o donde configures el theme
<ThemeProvider theme={theme}>
  {/* Tu aplicación */}
</ThemeProvider>
```

**Nota:** Si actualmente usas `theme` de `@atipicus/mrs-ui` en `_app.tsx`, ya estás listo. Si usas un theme custom, necesitarás extender el theme de mrs-ui o usar las variantes directamente.

### Paso 3: Reemplazar Imports en Archivos

Busca y reemplaza todos los imports de Button:

```bash
# Buscar todos los archivos que usan Button de MUI
grep -r "from '@mui/material'" --include="*.tsx" --include="*.ts" | grep Button

# O usar find and replace en tu IDE:
# Buscar: import { Button } from '@mui/material'
# Reemplazar: import { Button } from '@atipicus/mrs-ui'
```

### Paso 4: Verificar Variantes

Las variantes existentes deberían funcionar sin cambios:

```tsx
// ✅ Estos siguen funcionando igual
<Button variant="primary">Aprobar presupuesto</Button>
<Button variant="secondary">Revisar presupuesto</Button>
<Button variant="textCustom">Cancelar</Button>
<Button variant="textTransparent">Cerrar</Button>
<Button variant="alternativePrimary">Continuar</Button>
```

### Paso 5: Eliminar Configuración Legacy

Una vez migrado, puedes eliminar:

1. **`src/styles/Components/MuiButton.css.ts`** - Ya no es necesario
2. **La importación en `src/theme/themes.ts`**:
   ```tsx
   // Eliminar esta línea:
   import { MuiButtonCustom } from '../styles/Components/MuiButton.css'
   
   // Y esta en components:
   MuiButton: MuiButtonCustom,
   ```
3. **Las declaraciones de tipos en `src/theme/themes.ts`**:
   ```tsx
   // Eliminar este bloque:
   declare module '@mui/material/Button' {
     interface ButtonPropsVariantOverrides {
       primary: true
       secondary: true
       textCustom: true
       textTransparent: true
       alternativePrimary: true
     }
   }
   ```

## 📝 Ejemplos de Migración

### Ejemplo 1: Botón Simple

**Antes:**
```tsx
import { Button } from '@mui/material';

<Button variant="primary" onClick={handleClick}>
  Aprobar presupuesto
</Button>
```

**Después:**
```tsx
import { Button } from '@atipicus/mrs-ui';

<Button variant="primary" onClick={handleClick}>
  Aprobar presupuesto
</Button>
```

### Ejemplo 2: Botón con Iconos

**Antes:**
```tsx
import { Button } from '@mui/material';
import { Icon } from '@atipicus/mrs-ui';

<Button 
  variant="secondary" 
  endIcon={<Icon iconName="download" />}
>
  Descargar
</Button>
```

**Después:**
```tsx
import { Button, Icon } from '@atipicus/mrs-ui';

<Button 
  variant="secondary" 
  endIcon={<Icon iconName="download" />}
>
  Descargar
</Button>
```

### Ejemplo 3: Botón con Loading

**Antes:**
```tsx
import { Button, CircularProgress } from '@mui/material';

<Button 
  variant="primary"
  endIcon={isLoading ? <CircularProgress size={16} /> : null}
>
  Guardar
</Button>
```

**Después:**
```tsx
import { Button } from '@atipicus/mrs-ui';
import { CircularProgress } from '@mui/material'; // O de mrs-ui si está disponible

<Button 
  variant="primary"
  endIcon={isLoading ? <CircularProgress size={16} /> : null}
>
  Guardar
</Button>
```

## 🔍 Verificación

### Checklist de Migración

- [ ] Todos los imports de `Button` actualizados a `@atipicus/mrs-ui`
- [ ] El theme de `mrs-ui` está configurado en la aplicación
- [ ] Todas las variantes funcionan correctamente
- [ ] No hay errores de TypeScript
- [ ] Los estilos visuales se mantienen iguales
- [ ] Archivos legacy eliminados (opcional)

### Comandos de Verificación

```bash
# Verificar que no queden imports de Button de MUI
grep -r "from '@mui/material'" --include="*.tsx" | grep -i button

# Verificar que todos usen mrs-ui
grep -r "from '@atipicus/mrs-ui'" --include="*.tsx" | grep -i button

# Verificar errores de TypeScript
npm run type-check
# o
yarn type-check
```

## ⚠️ Notas Importantes

1. **Compatibilidad Total**: Las variantes mantienen exactamente la misma apariencia y comportamiento.

2. **Theme Custom**: Si estás usando un theme custom que extiende el de mrs-ui, las variantes seguirán funcionando.

3. **Sizes**: Los tamaños (`small`, `medium`, `large`) funcionan igual que antes.

4. **Props Adicionales**: Todas las props de MUI Button siguen funcionando (disabled, fullWidth, startIcon, endIcon, etc.).

5. **Testing**: Asegúrate de probar todos los botones en diferentes estados (hover, focus, active, disabled).

## 🐛 Troubleshooting

### Error: "Property 'primary' does not exist on type..."

**Solución**: Asegúrate de que el theme de `mrs-ui` esté correctamente configurado y que hayas actualizado `@atipicus/mrs-ui` a la versión que incluye las variantes.

### Los estilos no se aplican correctamente

**Solución**: Verifica que el `ThemeProvider` esté usando el theme de `mrs-ui`:
```tsx
import { theme } from '@atipicus/mrs-ui';
```

### Conflicto con theme legacy

**Solución**: Si tienes un theme legacy, puedes extender el theme de mrs-ui:
```tsx
import { theme as mrsTheme } from '@atipicus/mrs-ui';
import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  ...mrsTheme,
  // Tus personalizaciones adicionales
});
```

## 📚 Referencias

- [Documentación de mrs-ui](https://atipicus.github.io/mrs-ui/)
- [Material-UI Button Documentation](https://mui.com/material-ui/react-button/)
- [MRS UI GitHub](https://github.com/Atipicus/mrs-ui)

## ✅ Resultado Final

Después de la migración:

1. ✅ Todos los botones usan el componente de `mrs-ui`
2. ✅ Mantiene consistencia con el design system
3. ✅ Código más limpio sin configuraciones duplicadas
4. ✅ Facilita futuras actualizaciones del design system
5. ✅ Mejor mantenibilidad

---

**Última actualización**: Enero 2026
**Versión de mrs-ui requerida**: 0.11.2+
