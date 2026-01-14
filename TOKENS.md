# MRS Design System - Token Architecture

## Overview

The MRS Design System implements a **three-tier token architecture** that promotes consistency, maintainability, and scalability across all components and organisms.

## Token Tiers

### 🎨 Tier 1: Primitives
**Location**: `src/tokens/source/primitives/`

Foundation-level tokens that define the core visual language. These are the raw, context-independent values.

#### Files:
- **colors.json** - Base color palette
  - Brand colors (Verones, Lima)
  - Neutral grayscale (50-900)
  - Status colors (error, warning, info, success)
  - Alpha transparency variants (black, white, primary)
  - Special colors (rating)

- **spacing.json** - Spatial system (8px grid)
  - Spacing 0-12 (0px - 96px)
  - Based on 8px increments

- **radius.json** - Border radius scale
  - none, sm, md, lg, xl, full
  - Used for component rounding

- **typography.json** - Type system
  - Font families (brand: Nunito)
  - Font sizes (xs, sm, md, lg, xl, 2xl, 3xl, 4xl)
  - Font weights (light, regular, medium, semibold, bold)
  - Line heights

- **motion.json** - Animation timing
  - Durations (instant, fast, base, moderate, slow, slower)
  - Easings (linear, standard, emphasized, decelerate, accelerate)

**Example Usage**:
```typescript
import { PrimitivesSpacing2, PrimitivesRadiusMd, PrimitivesTypographyFontSizeMd } from '@/tokens';

const styles = {
  padding: PrimitivesSpacing2,
  borderRadius: PrimitivesRadiusMd,
  fontSize: PrimitivesTypographyFontSizeMd
};
```

---

### 🎯 Tier 2: Semantic Tokens
**Location**: `src/tokens/source/semantic/`

Context-aware tokens that reference primitives and adapt to themes (light/dark mode).

#### Files:
- **colors.json** - Theme-aware color roles
  - Primary, Secondary colors
  - Status colors (error, warning, info, success)
  - Background colors (default, paper)
  - Text colors (primary, secondary, disabled)
  - Action states (active, hover, selected, disabled)
  - Divider colors

- **transitions.json** - Semantic animation tokens
  - Component-specific transition timings

**Example Usage**:
```typescript
import { SemanticColorLightPrimaryMain, SemanticColorDarkPrimaryMain } from '@/tokens';

const backgroundColor = mode === 'light'
  ? SemanticColorLightPrimaryMain
  : SemanticColorDarkPrimaryMain;
```

---

### 🧩 Tier 3: Component Tokens
**Location**: `src/tokens/source/component/`

Component-specific tokens that reference semantic and primitive tokens. These ensure consistent styling across all component instances.

#### Files:

**button.json** - Button styling
- Border radius
- Font weight
- Size variants (small, medium, large)
- Height and font size per variant

**alert.json** - Alert component styling
- Border radius
- Severity variants (error, warning, info, success)
- Style variants (filled, outlined, standard)
- Background and foreground colors per mode

**inputs.json** - Input component styling
- TextField, Select, Autocomplete tokens
- Border radius
- Variant tokens (standard, filled, outlined)
- Border and fill colors
- Chip and Rating component tokens

**surfaces.json** - Surface component tokens
- Paper elevation colors (0-24)
- Card border radius
- Dialog border radius
- Table border and header colors

**navigation.json** - Navigation component tokens
- Sidenav (width, background, item states)
- AppBar (height, colors)
- Drawer (background, border radius)
- Bottom Navigation (height, item states)

**data-display.json** - Data display tokens
- Accordion (background, border, radius)
- List (item states, divider)
- Menu (background, radius)
- Avatar (sizes, border radius)
- Badge (colors, border radius)
- Tooltip (colors, border radius)

**feedback.json** - Feedback component tokens
- Snackbar (colors, border radius)
- Progress (colors, thickness)
- Skeleton (background, border radius)

**layout.json** - Layout component tokens
- Stepper (connector, step states)
- Tabs (indicator, tab states)
- Timeline (connector, dot colors)
- Pagination (item states, border radius)

**Example Usage**:
```typescript
import { ComponentButtonBorderRadius, ComponentAlertLightErrorFilledBackground } from '@/tokens';

const buttonStyles = {
  borderRadius: ComponentButtonBorderRadius
};

const alertStyles = {
  backgroundColor: ComponentAlertLightErrorFilledBackground
};
```

---

## Token Naming Convention

Tokens follow a hierarchical naming pattern:

```
{Category}{Subcategory}{Mode}{Property}{Variant}{State}
```

### Examples:

**Primitives**:
- `PrimitivesSpacing2` - Spacing tier, value 2
- `PrimitivesColorsNeutralGray500` - Colors, neutral, gray at 500 weight
- `PrimitivesTypographyFontSizeMd` - Typography, font size, medium
- `PrimitivesMotionDurationBase` - Motion, duration, base speed

**Semantic**:
- `SemanticColorLightPrimaryMain` - Light mode, primary color, main variant
- `SemanticColorDarkErrorLight` - Dark mode, error color, light variant
- `SemanticColorLightActionHover` - Light mode, action state, hover

**Component**:
- `ComponentButtonBorderRadius` - Button, border radius (mode-agnostic)
- `ComponentAlertLightErrorFilledBackground` - Alert, light mode, error, filled variant, background
- `ComponentSidenavWidthExpanded` - Sidenav, expanded width (mode-agnostic)
- `ComponentTabsLightIndicator` - Tabs, light mode, indicator color

---

## Usage Patterns

### Pattern 1: Direct Token Import (Recommended)
```typescript
import * as tokens from '@/tokens/generated/ts/tokens';

const styles = {
  padding: tokens.PrimitivesSpacing3,
  backgroundColor: tokens.SemanticColorLightPrimaryMain,
  borderRadius: tokens.ComponentButtonBorderRadius
};
```

### Pattern 2: Theme-Based Access (MUI Components)
```typescript
import { useTheme } from '@mui/material/styles';

const MyComponent = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  return (
    <Box
      sx={{
        backgroundColor: mode === 'light'
          ? tokens.SemanticColorLightBackgroundPaper
          : tokens.SemanticColorDarkBackgroundPaper
      }}
    />
  );
};
```

### Pattern 3: Component Override (Theme Configuration)
```typescript
// In theme.ts
MuiButton: {
  styleOverrides: {
    root: {
      borderRadius: tokens.ComponentButtonBorderRadius,
      fontWeight: tokens.PrimitivesTypographyFontWeightSemibold
    }
  }
}
```

---

## Token Generation

Tokens are defined in JSON (DTCG format) and transformed using [Style Dictionary](https://styledictionary.com/) into multiple output formats:

### Source Files
`src/tokens/source/**/*.json`

### Generated Outputs
- **TypeScript**: `src/tokens/generated/ts/tokens.{js,d.ts}`
- **CSS Variables**: `src/tokens/generated/css/tokens.css`
- **SCSS Variables**: `src/tokens/generated/scss/tokens.scss`
- **JSON**: `src/tokens/generated/json/*.json`

### Build Commands
```bash
# Build tokens from source
npm run tokens:build

# Watch for changes and rebuild
npm run tokens:watch

# Clean and rebuild
npm run tokens:rebuild
```

---

## Component Token Application

### Atoms (31 components)
✅ **Token-Enabled**:
- Avatar (size tokens, border radius)
- Badge (colors, border radius)
- Button (border radius, font weight, sizes)
- Chip (border radius, colors)
- TextField (border radius, colors)
- Tooltip (colors, spacing, border radius)
- Typography (font family, sizes, weights)

### Molecules (26 components)
✅ **Token-Enabled**:
- Alert (colors, border radius, variants)
- Sidenav (widths, colors, item states)
- Card (border radius)
- Dialog (border radius)
- List (item states, divider)
- Accordion (background, border, radius)
- Menu (background, radius)
- Tabs (indicator, tab states)
- Stepper (connector, step states)
- Pagination (item states, border radius)

### Effects (3 components)
✅ **Token-Enabled**:
- AnimatedBadge (motion duration)
- LoadingDots (motion duration)
- RippleButton (motion duration)

---

## Best Practices

### ✅ DO:
- Use primitive tokens for base values (spacing, colors, sizes)
- Use semantic tokens for theme-aware colors and contexts
- Use component tokens for component-specific styling
- Reference tokens in component `sx` props or `styled()` functions
- Build tokens before committing changes

### ❌ DON'T:
- Hardcode color values (use semantic tokens)
- Use magic numbers for spacing (use primitive spacing tokens)
- Mix token tiers incorrectly (components should reference semantic, not primitives directly for colors)
- Modify generated files (edit source JSON files instead)
- Skip token generation after source changes

---

## Token Coverage

| Category | Token Count | Coverage |
|----------|-------------|----------|
| Primitives | ~80 tokens | Complete |
| Semantic | ~120 tokens | Complete |
| Components | ~270+ tokens | Complete |
| **Total** | **~470 tokens** | **100%** |

---

## Migration Guide

### Converting Hardcoded Values to Tokens

**Before**:
```typescript
<Box
  sx={{
    padding: '16px',
    backgroundColor: '#00686f',
    borderRadius: '8px',
    fontSize: '14px'
  }}
/>
```

**After**:
```typescript
import * as tokens from '@/tokens/generated/ts/tokens';

<Box
  sx={{
    padding: tokens.PrimitivesSpacing2,
    backgroundColor: tokens.SemanticColorLightPrimaryMain,
    borderRadius: tokens.PrimitivesRadiusMd,
    fontSize: tokens.PrimitivesTypographyFontSizeSm
  }}
/>
```

---

## Resources

- **Token Documentation**: `src/tokens/examples/typescript-usage.tsx`
- **Storybook**: Browse token visualizations at `/storybook`
- **Figma Design System**: [MRS Material UI v7.2.0](https://figma.com/design/c4weC6RhdEd7c8B1GkCjTB/)
- **Style Dictionary Docs**: https://styledictionary.com/

---

## Token Visualization

View all tokens in Storybook:
- **Spacing & Typography**: Design Tokens → Spacing & Typography
- **Border Radius**: Design Tokens → Spacing & Typography → Border Radius
- **Motion**: Design Tokens → Spacing & Typography → Motion
- **Colors**: Design Tokens → Color Palette (coming soon)

---

**Last Updated**: 2026-01-13
**Version**: 0.9.0
**Architecture**: Three-Tier Token System
