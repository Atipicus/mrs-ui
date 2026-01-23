# Migration Guide: @mrs-uisystem/ui-v6 → @atipicus/mrs-ui

This guide will help you migrate from the old package `@mrs-uisystem/ui-v6` to the new package `@atipicus/mrs-ui`.

## 📦 Quick Migration

### Step 1: Uninstall Old Package

```bash
npm uninstall @mrs-uisystem/ui-v6
```

### Step 2: Install New Package

```bash
npm install @atipicus/mrs-ui
```

### Step 3: Update Imports

Find and replace all import statements in your codebase:

**Before:**
```typescript
import { Button, TextField, Stack } from '@mrs-uisystem/ui-v6';
import { theme } from '@mrs-uisystem/ui-v6/theme';
import * as tokens from '@mrs-uisystem/ui-v6/tokens';
```

**After:**
```typescript
import { Button, TextField, Stack } from '@atipicus/mrs-ui';
import { theme } from '@atipicus/mrs-ui/theme';
import * as tokens from '@atipicus/mrs-ui/tokens';
```

## 🔍 Automated Migration

### Using Find & Replace

**VS Code / Cursor:**
1. Press `Cmd+Shift+H` (Mac) or `Ctrl+Shift+H` (Windows/Linux)
2. Find: `@mrs-uisystem/ui-v6`
3. Replace: `@atipicus/mrs-ui`
4. Click "Replace All"

**Command Line (macOS/Linux):**
```bash
find . -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" \) \
  ! -path "*/node_modules/*" \
  ! -path "*/dist/*" \
  -exec sed -i '' 's/@mrs-uisystem\/ui-v6/@atipicus\/mrs-ui/g' {} +
```

**Command Line (Windows PowerShell):**
```powershell
Get-ChildItem -Recurse -Include *.ts,*.tsx,*.js,*.jsx | 
  Where-Object { $_.FullName -notmatch 'node_modules|dist' } |
  ForEach-Object { (Get-Content $_.FullName) -replace '@mrs-uisystem/ui-v6', '@atipicus/mrs-ui' | Set-Content $_.FullName }
```

## 📝 What Changed?

### Package Name
- **Old:** `@mrs-uisystem/ui-v6`
- **New:** `@atipicus/mrs-ui`

### Package Organization
- **Old Organization:** `@mrs-uisystem`
- **New Organization:** `@atipicus`

### Version
- The package version remains the same: `0.8.0`
- All functionality is identical - only the package name changed

## 🔄 Import Paths

All import paths remain the same structure, only the package name changes:

| Old Import | New Import |
|------------|------------|
| `@mrs-uisystem/ui-v6` | `@atipicus/mrs-ui` |
| `@mrs-uisystem/ui-v6/theme` | `@atipicus/mrs-ui/theme` |
| `@mrs-uisystem/ui-v6/tokens` | `@atipicus/mrs-ui/tokens` |

## ✅ Verification

After migration, verify everything works:

```bash
# Check package is installed
npm list @atipicus/mrs-ui

# Run your build
npm run build

# Run your tests
npm test
```

## 🐛 Troubleshooting

### Issue: Module not found

**Error:**
```
Cannot find module '@mrs-uisystem/ui-v6'
```

**Solution:**
1. Make sure you've uninstalled the old package
2. Make sure you've installed the new package
3. Check that all imports have been updated

### TypeScript errors

**Error:**
```
Module '@atipicus/mrs-ui' has no exported member 'X'
```

**Solution:**
- The exports are identical - this is likely a caching issue
- Try: `rm -rf node_modules package-lock.json && npm install`
- Restart your TypeScript server in your IDE

### Build errors

**Error:**
```
Package @atipicus/mrs-ui not found
```

**Solution:**
1. Verify the package exists: `npm view @atipicus/mrs-ui`
2. Check your npm registry: `npm config get registry`
3. Clear npm cache: `npm cache clean --force`
4. Reinstall: `npm install @atipicus/mrs-ui`

## 📚 Additional Resources

- **New Package:** https://www.npmjs.com/package/@atipicus/mrs-ui
- **Old Package (Deprecated):** https://www.npmjs.com/package/@mrs-uisystem/ui-v6
- **GitHub Repository:** https://github.com/madersystem/mrs-ui-v6
- **Documentation:** See README.md in the package

## ❓ Need Help?

If you encounter any issues during migration:

1. Check the [CHANGELOG.md](./CHANGELOG.md) for breaking changes
2. Review the [README.md](./README.md) for usage examples
3. Open an issue on GitHub: https://github.com/madersystem/mrs-ui-v6/issues

## 🎉 Migration Complete!

Once you've updated all imports and verified everything works, you're all set! The new package is fully compatible with the old one - only the name changed.

---

**Last Updated:** December 31, 2025  
**Package Version:** 0.8.0

