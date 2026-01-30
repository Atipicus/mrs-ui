# MRS Design System Theme

Centralized theme configuration and design tokens for the MRS UI Design System.

## Architecture

```
tokens/generated/ts/tokens.ts (Style Dictionary output)
         ↓
tokens-import.ts (organize tokens by mode)
         ↓
styleCompositions.ts (reusable style patterns)
         ↓
theme.ts (apply overrides to 40+ MUI components)
         ↓
index.ts (export public API)
```

## Files Overview

### 1. `tokens-import.ts` (475 lines)
**Purpose**: Import and organize generated tokens from Style Dictionary

Contains:
- `typographyTokens` - Font family, sizes, weights, variants
- `shapeTokens` - Border radius values
- `spacingArray` - Spacing scale (8px base)
- `lightTokens` - Light mode colors and components
- `darkTokens` - Dark mode colors and components
- `sidenavTokens` - Custom component tokens

**Usage**:
```tsx
import { lightTokens, darkTokens, typographyTokens } from './tokens-import';

const color = mode === 'light' ? lightTokens.colors.primary.main : darkTokens.colors.primary.main;
```

### 2. `styleCompositions.ts` (NEW - 400+ lines)
**Purpose**: Provide reusable style patterns to reduce duplication

Contains compositions for:
- `button` - Base styles, sizes, states
- `input` - Base styles, sizes, states
- `surface` - Base styles, elevations
- `listItem` - Base styles, states
- `chip` - Base styles, sizes, states
- `feedback` - Alert and snackbar styles
- `states` - Common states (hover, focus, disabled, etc.)
- `layout` - Flex and container patterns

**Usage**:
```tsx
// In theme.ts
MuiButton: {
  styleOverrides: {
    root: {
      ...styleCompositions.button.base(),
    },
    sizeSmall: styleCompositions.button.sizes.small,
  },
}
```

### 3. `theme.ts` (560 lines)
**Purpose**: Central theme configuration with 40+ component overrides

Key sections:
- Global baseline (MuiCssBaseline)
- Buttons (MuiButton, MuiIconButton, MuiFab, etc.)
- Inputs (MuiTextField, MuiOutlinedInput, etc.)
- Selection controls (MuiCheckbox, MuiRadio, MuiSwitch)
- Chips (MuiChip)
- Alerts & Feedback (MuiAlert, MuiSnackbar)
- Surfaces (MuiPaper, MuiCard, MuiDialog, etc.)
- Tables (MuiTable, MuiTableCell)
- Lists & Menus (MuiList, MuiMenu, MuiListItemButton)
- Navigation (MuiTabs, MuiBreadcrumbs, MuiPagination)
- Typography & Data Display

**Two theme exports**:
- `lightTheme` - Light mode with light tokens
- `darkTheme` - Dark mode with dark tokens

**Usage**:
```tsx
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';

<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
  <App />
</ThemeProvider>
```

### 4. `tokens.ts` (78 lines)
**Purpose**: Re-export tokens for easy access

Exports:
- `colors` - { light, dark }
- `typography` - Typography variants
- `shape` - Border radius tokens
- `spacing` - Spacing scale
- `components` - { light, dark }
- `tokens` - Full object (backwards compatibility)

### 5. `index.ts`
**Purpose**: Public API exports

Exports:
- `theme`, `lightTheme`, `darkTheme`
- `MRSTheme` type
- All tokens (`colors`, `typography`, `shape`, `spacing`, `components`)

## Design Tokens

### Color System

**Light Mode** (`lightTokens.colors`):
- `primary` - Main brand color (#1976d2)
- `secondary` - Secondary color
- `error`, `warning`, `info`, `success` - Semantic colors
- `background` - { default, paper }
- `text` - { primary, secondary, disabled }
- `action` - { active, hover, selected, disabled, disabledBackground }
- `divider` - Divider color

**Dark Mode** (`darkTokens.colors`):
- Same structure as light mode with adjusted colors

### Typography

Defined in `typographyTokens`:

```typescript
h1 - 60px, fontWeight: 600
h2 - 48px, fontWeight: 600
h3 - 34px, fontWeight: 600
h4 - 24px, fontWeight: 600
h5 - 20px, fontWeight: 600
h6 - 16px, fontWeight: 600
body1 - 16px, fontWeight: 400
body2 - 14px, fontWeight: 400
subtitle1 - 16px, fontWeight: 500
subtitle2 - 14px, fontWeight: 500
button - 14px, fontWeight: 600
caption - 12px, fontWeight: 400
overline - 12px, fontWeight: 400, text-transform: uppercase
```

### Shape (Border Radius)

```typescript
sm: 4px       // Small elements, borders
md: 8px       // Default, cards, inputs (default)
lg: 12px      // Cards, dialogs
xl: 20px      // Large buttons
rounded: 9999px  // Pill shape, chips, avatars
```

### Spacing

8px base grid system:
```typescript
0, 4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96
```

MUI multiplies by base unit:
```tsx
<Box sx={{ m: 1 }} />  // 8px margin
<Box sx={{ m: 2 }} />  // 16px margin
<Box sx={{ m: 3 }} />  // 24px margin
```

## Component Overrides

All MUI component overrides are defined in `theme.ts` using centralized tokens.

### Pattern

```typescript
const getComponentOverrides = (mode: 'light' | 'dark') => {
  const modeTokens = mode === 'light' ? lightTokens : darkTokens;
  const shape = shapeTokens;
  const typography = typographyTokens;

  return {
    MuiComponent: {
      defaultProps: { /* default props */ },
      styleOverrides: {
        root: { /* root styles */ },
        // variant overrides
        outlined: { /* outlined styles */ },
        // size overrides
        small: { /* small size styles */ },
      },
    },
    // ... more components
  };
};
```

## Light/Dark Mode

### Implementation

1. **Token Duplication**
   - `lightTokens` - Light mode values
   - `darkTokens` - Dark mode values

2. **Dynamic Selection**
   ```typescript
   const modeTokens = mode === 'light' ? lightTokens : darkTokens;
   ```

3. **Automatic Theme Switching**
   ```tsx
   <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
     {/* All components automatically update */}
   </ThemeProvider>
   ```

## Adding New Components

### Steps

1. **Define override in `theme.ts`**:
   ```typescript
   MuiNewComponent: {
     styleOverrides: {
       root: {
         // use tokens from shapeTokens, typography, modeTokens
       },
     },
   }
   ```

2. **Use tokens from**:
   - `shapeTokens` - Border radius
   - `typography` - Font properties
   - `modeTokens` - Colors (lightTokens or darkTokens)

3. **Test light/dark mode**:
   - Verify colors change automatically
   - No additional component code needed

## Composition Usage

### Button Example

```typescript
// In theme.ts
MuiButton: {
  styleOverrides: {
    root: {
      ...styleCompositions.button.base(),
      textTransform: 'none' as const,
    },
    sizeSmall: styleCompositions.button.sizes.small,
    sizeMedium: styleCompositions.button.sizes.medium,
    sizeLarge: styleCompositions.button.sizes.large,
  },
}

// Result: All MuiButton instances get:
// - Border radius: 8px
// - Font weight: 600
// - Correct padding for each size
// - Transition effects
```

### Input Example

```typescript
// In theme.ts
MuiOutlinedInput: {
  styleOverrides: {
    root: {
      ...styleCompositions.input.base(),
      borderRadius: shape.md,
    },
    notchedOutline: {
      borderColor: modeTokens.components.input.outlined.enabledBorder,
    },
  },
}
```

## Best Practices

### ✅ DO

- Use tokens for all colors, spacing, and sizing
- Use `styleCompositions` for common patterns
- Define component styling in `theme.ts`
- Use `modeTokens` for light/dark mode support
- Access tokens via `useTheme()` in components if needed

### ❌ DON'T

- Hardcode colors or sizes
- Duplicate styling patterns
- Use inline styles for component base styling
- Import tokens directly in components (use `useTheme()` instead)
- Add `fontFamily` to component overrides (it's global in `MuiCssBaseline`)

## References

- [Material-UI Theme Documentation](https://mui.com/material-ui/customization/theming/)
- [Material-UI Theme Components](https://mui.com/material-ui/customization/theme-components/)
- [Style Dictionary](https://amzn.github.io/style-dictionary/)
- [MRS Design System Tokens](../tokens/README.md)

## Related Files

- `src/tokens/` - Generated tokens from Style Dictionary
- `src/stories/theme/` - Storybook documentation (TokensShowcase.stories.tsx)
- `src/components/` - Components using the theme
- `src/types/theme.d.ts` - TypeScript theme type definitions

## Version History

- **v0.12.0** - Migrated to 100% generated tokens
- **v0.13.0** - Added styleCompositions for reusable patterns
- **v0.13.1** - Complete 100% centralization (Sidenav tokens consolidated)
