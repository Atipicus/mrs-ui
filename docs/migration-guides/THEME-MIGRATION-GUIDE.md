# Theme Migration Guide - v0.11.x → v0.12.0

**Status**: ✅ Complete  
**Date**: January 23, 2026  
**Breaking Changes**: ⚠️ YES (Internal only - public API compatible)  
**Estimated Migration Time**: 10-30 minutes

---

## 🎯 Overview

Version 0.12.0 completes the migration to a **single source of truth** for design tokens by eliminating the dependency on `theme.json` and using **100% generated tokens** from Style Dictionary.

### What Changed?

| Aspect | Before (v0.11.x) | After (v0.12.0) |
|--------|------------------|-----------------|
| **Token Source** | Dual system (theme.json + generated) | Single system (generated only) |
| **theme.json** | Active, imported directly | Deprecated, moved to `legacy/` |
| **theme.ts** | Mixed imports (theme.json + generated) | 100% generated tokens |
| **tokens.ts** | Exports from theme.json | Re-exports from generated tokens |
| **Type Safety** | Partial (JSON not typed) | Full (TypeScript generated) |

### Benefits

✅ **Single Source of Truth**: All tokens come from `src/tokens/source/`  
✅ **No Inconsistency Risk**: Can't have mismatched values  
✅ **Better Type Safety**: Full TypeScript types for all tokens  
✅ **Easier Maintenance**: Update once, regenerates everywhere  
✅ **Multi-Format Support**: CSS, SCSS, TS, JSON exports  
✅ **Figma Sync Ready**: Direct sync with design tools

---

## 🚨 Breaking Changes

### For External Consumers (You)

**✅ NO BREAKING CHANGES** - The public API remains unchanged.

If you're using the package via npm:
```typescript
import { Button, theme } from '@atipicus/mrs-ui';
```

**You don't need to change anything.** The migration is internal.

### For Internal Development (MRS Team)

**⚠️ BREAKING CHANGES** - If working on the MRS UI codebase directly:

1. **Direct theme.json imports removed**
   ```typescript
   // ❌ This will fail:
   import themeTokens from '../../theme.json';
   
   // ✅ Use this instead:
   import { colors, typography, shape } from './theme/tokens';
   ```

2. **theme.json moved to legacy/**
   - Path changed: `./theme.json` → `./legacy/theme.json`
   - File kept for reference only (deprecated)

---

## 📋 Migration Checklist

### For External Consumers

- [ ] **No action required** ✅
- [ ] Update to `@atipicus/mrs-ui@0.12.0`
- [ ] Verify your app still works
- [ ] Done! 🎉

### For Internal MRS UI Development

- [ ] Pull latest changes from main branch
- [ ] Run `npm install` (dependencies unchanged)
- [ ] Run `npm run tokens:build` to ensure tokens are generated
- [ ] Update any custom scripts that referenced `theme.json`
- [ ] Update any tests that imported `theme.json` directly
- [ ] Run tests: `npm test`
- [ ] Run build: `npm run build`
- [ ] Done! 🎉

---

## 🔄 Code Migration Examples

### Example 1: Using Theme Colors

**❌ Old Way (v0.11.x):**
```typescript
import themeTokens from '../../theme.json';

const MyComponent = () => {
  const primaryColor = themeTokens.colorSchemes.light.palette.primary.main;
  
  return <div style={{ color: primaryColor }}>Hello</div>;
};
```

**✅ New Way (v0.12.0):**
```typescript
import { colors } from '@atipicus/mrs-ui/theme';
// or
import { useTheme } from '@mui/material/styles';

const MyComponent = () => {
  // Option 1: Direct import
  const primaryColor = colors.light.primary.main;
  
  // Option 2: Use theme hook (recommended)
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  
  return <div style={{ color: primaryColor }}>Hello</div>;
};
```

### Example 2: Using Typography

**❌ Old Way:**
```typescript
import themeTokens from '../../theme.json';

const fontFamily = themeTokens.typography.fontFamily;
const h1Style = themeTokens.typography.h1;
```

**✅ New Way:**
```typescript
import { typography } from '@atipicus/mrs-ui/theme';

const fontFamily = typography.fontFamily;
const h1Style = typography.h1;
```

### Example 3: Using Shape Tokens

**❌ Old Way:**
```typescript
import themeTokens from '../../theme.json';

const borderRadius = themeTokens.shape.md;
```

**✅ New Way:**
```typescript
import { shape } from '@atipicus/mrs-ui/theme';

const borderRadius = shape.md;
```

### Example 4: Custom Theme Extension

**❌ Old Way:**
```typescript
import themeTokens from './theme.json';
import { createTheme } from '@mui/material';

const customTheme = createTheme({
  palette: {
    primary: {
      main: themeTokens.colorSchemes.light.palette.primary.main,
    },
  },
  typography: {
    fontFamily: themeTokens.typography.fontFamily,
  },
});
```

**✅ New Way:**
```typescript
import { theme } from '@atipicus/mrs-ui/theme';
import { createTheme } from '@mui/material';

// Option 1: Extend existing theme
const customTheme = createTheme({
  ...theme,
  palette: {
    ...theme.palette,
    primary: {
      ...theme.palette.primary,
      main: '#your-custom-color',
    },
  },
});

// Option 2: Use token exports
import { colors, typography } from '@atipicus/mrs-ui/theme';

const customTheme = createTheme({
  palette: {
    primary: {
      main: colors.light.primary.main,
    },
  },
  typography: {
    fontFamily: typography.fontFamily,
  },
});
```

### Example 5: Using Generated Tokens Directly

**🎯 Best Practice (New in v0.12.0):**
```typescript
// Import specific tokens from generated files
import * as tokens from '@atipicus/mrs-ui/tokens';

const MyComponent = () => {
  return (
    <div
      style={{
        color: tokens.SemanticColorLightPrimaryMain,
        fontFamily: tokens.PrimitivesTypographyFontFamilyStack,
        borderRadius: tokens.PrimitivesRadiusMd,
        padding: tokens.PrimitivesSpacing2,
      }}
    >
      Using generated tokens directly
    </div>
  );
};
```

---

## 🏗️ Architecture Changes

### Before (v0.11.x) - Dual System

```
┌─────────────┐
│ theme.json  │ ← Manual JSON file (legacy)
└──────┬──────┘
       │ (imported directly)
       ↓
┌─────────────┐     ┌──────────────────┐
│  theme.ts   │  +  │ Generated Tokens │
└─────────────┘     └──────────────────┘
       │                     │
       └──────┬──────────────┘
              ↓
       ┌─────────────┐
       │ Components  │
       └─────────────┘
```

**Problems:**
- ⚠️ Two sources of truth
- ⚠️ Manual sync required
- ⚠️ Type safety gaps
- ⚠️ Confusion for developers

### After (v0.12.0) - Single System

```
┌───────────────────────┐
│ src/tokens/source/    │ ← SINGLE SOURCE OF TRUTH
│  - primitives/        │
│  - semantic/          │
│  - component/         │
└──────────┬────────────┘
           │
           ↓
    Style Dictionary
           │
           ↓
┌──────────────────────┐
│ Generated Tokens     │
│  - CSS Variables     │
│  - SCSS Variables    │
│  - TypeScript        │
│  - JSON              │
└──────────┬───────────┘
           │
           ↓
    ┌─────────────┐
    │ tokens-     │ ← Organized exports
    │ import.ts   │
    └──────┬──────┘
           │
           ↓
    ┌─────────────┐
    │  theme.ts   │ ← 100% generated tokens
    └──────┬──────┘
           │
           ↓
    ┌─────────────┐
    │ Components  │
    └─────────────┘
```

**Benefits:**
- ✅ Single source of truth
- ✅ Automatic regeneration
- ✅ Full type safety
- ✅ Multi-platform support

---

## 📂 File Changes

### Moved Files

| File | Old Location | New Location | Status |
|------|-------------|--------------|--------|
| `theme.json` | `./theme.json` | `./legacy/theme.json` | Deprecated |

### Modified Files

| File | Changes |
|------|---------|
| `src/theme/theme.ts` | - Removed `theme.json` import<br>- Now uses 100% generated tokens<br>- Added version comment |
| `src/theme/tokens.ts` | - Re-exports from generated tokens<br>- Added deprecation notices<br>- Backwards compatible |
| `src/theme/tokens-import.ts` | - Added `typographyTokens`<br>- Added `shapeTokens`<br>- Added `spacingArray`<br>- Complete token coverage |

### New Files

| File | Purpose |
|------|---------|
| `legacy/README.md` | Documentation for deprecated files |
| `THEME-MIGRATION-GUIDE.md` | This migration guide |

---

## 🧪 Testing the Migration

### Run Tests

```bash
# 1. Ensure tokens are generated
npm run tokens:build

# 2. Run type check
npm run type-check

# 3. Run linter
npm run lint

# 4. Run tests
npm test

# 5. Build the package
npm run build

# 6. Build Storybook
npm run build-storybook
```

### Verify in Your App

```typescript
import { theme, Button } from '@atipicus/mrs-ui';

console.log('Primary color:', theme.palette.primary.main);
// Should output: #00686f (light mode)
```

---

## ❓ FAQ

### Q: Will my app break after upgrading to v0.12.0?

**A:** No. If you're using the package as a consumer (`@atipicus/mrs-ui`), the public API hasn't changed. Just update the version and you're good to go.

### Q: What if I was importing theme.json directly?

**A:** You'll need to update your imports:

```typescript
// Old
import themeTokens from '@atipicus/mrs-ui/theme.json'; // ❌ Won't work

// New
import { colors, typography, shape } from '@atipicus/mrs-ui/theme'; // ✅ Works
```

### Q: Can I still access the old theme.json?

**A:** Yes, for reference only. It's in `legacy/theme.json` in the source code. However, **don't import it** - it's deprecated and will be removed in v1.0.0.

### Q: How do I add new design tokens?

**A:** Edit the source files in `src/tokens/source/`, then run:

```bash
npm run tokens:build
```

The tokens will be automatically regenerated in all formats (CSS, SCSS, TS, JSON).

See [`src/tokens/README.md`](src/tokens/README.md) for details.

### Q: What if I find a bug related to the migration?

**A:** Please open an issue on GitHub with:
- The error message
- Your usage code
- Expected vs actual behavior

---

## 📚 Additional Resources

- **Token System Documentation**: [`src/tokens/README.md`](src/tokens/README.md)
- **Token Quick Start**: [`TOKENS-QUICK-START.md`](TOKENS-QUICK-START.md)
- **Token Sync Workflow**: [`TOKENS-SYNC-WORKFLOW.md`](TOKENS-SYNC-WORKFLOW.md)
- **Legacy Files Reference**: [`legacy/README.md`](legacy/README.md)

---

## 🎉 Summary

The migration to v0.12.0 brings:

✅ **Consistency**: Single source of truth for all tokens  
✅ **Type Safety**: Full TypeScript support  
✅ **Maintainability**: Update once, regenerates everywhere  
✅ **Scalability**: Easier to add new tokens and platforms  
✅ **DX Improvement**: Better autocomplete and documentation

**For most users**: No action required, just enjoy the improvements! 🚀

---

**Migration Completed**: January 23, 2026  
**Version**: 0.12.0  
**Author**: MRS Design System Team
