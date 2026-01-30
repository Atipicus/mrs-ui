# 📋 TODO: mrs-ui v1.1.0 Testing Implementation

**Status**: 🟡 IN PROGRESS
**Last Updated**: January 30, 2026
**Owner**: Martin / Atipicus Team

---

## 🎯 Current Objective

Integrate comprehensive test suites (106 tests) into mrs-ui repository and ensure they run successfully.

**Tests to Integrate**:
- ✅ Animation Hooks Tests (36 tests, 5 files)
- ✅ Component Composition Tests (40 tests, 3 files)
- ✅ Error Boundary Tests (30 tests, 2 files)
- **Total**: 106 test cases

---

## 📂 Test Files Location

### Current Location (Already Copied to mrs-ui)
```
/Users/mader/Documents/Atipicus/mrs-ui/src/__tests__/
├── hooks/
│   ├── useRipple.test.tsx ✅
│   ├── usePulse.test.tsx ✅
│   ├── useShake.test.tsx ✅
│   ├── useBounce.test.tsx ✅
│   └── useHoverScale.test.tsx ✅
├── compositions/
│   ├── ButtonGroup.composition.test.tsx ✅
│   ├── Table.composition.test.tsx ✅
│   └── Dialog.composition.test.tsx ✅
└── errorBoundary/
    ├── ErrorBoundary.test.tsx ✅
    └── SafeComponents.test.tsx ✅
```

---

## ❌ Issue Found & Solution

### Problem
Tests were written using `vitest` syntax but mrs-ui uses `jest`

```
Error: Vitest cannot be imported in a CommonJS module using require().
```

### Root Cause
- Tests import: `import { describe, it, expect, vi } from 'vitest'`
- mrs-ui is configured for: `jest` (not vitest)

### Solution: Convert to Jest

Change all test imports from `vitest` to `jest`:

```typescript
// ❌ REMOVE THIS:
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

// ✅ REPLACE WITH THIS (Jest uses globals, no import needed):
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// Then use:
// - jest.fn() instead of vi.fn()
// - describe(), it(), expect() work automatically (no import needed)
```

---

## ✅ Tasks Checklist

### Phase 1: Fix All Test Files (10 files)

For each test file below, do this:

1. Open the file
2. Remove the `vitest` import line (line ~16)
3. Replace `vi.fn()` with `jest.fn()` (use Find & Replace)
4. Keep all other code the same

#### Hooks Tests (5 files):
- [x] `src/__tests__/hooks/useRipple.test.tsx`
  - Line 16: Remove `import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';`
  - Find: `vi.fn(` Replace: `jest.fn(`

- [x] `src/__tests__/hooks/usePulse.test.tsx`
  - Same fix

- [x] `src/__tests__/hooks/useShake.test.tsx`
  - Same fix

- [x] `src/__tests__/hooks/useBounce.test.tsx`
  - Same fix

- [x] `src/__tests__/hooks/useHoverScale.test.tsx`
  - Same fix

#### Composition Tests (3 files):
- [x] `src/__tests__/compositions/ButtonGroup.composition.test.tsx`
  - Remove vitest import
  - Replace `vi.fn()` → `jest.fn()`

- [x] `src/__tests__/compositions/Table.composition.test.tsx`
  - Same fix

- [x] `src/__tests__/compositions/Dialog.composition.test.tsx`
  - Same fix

#### Error Boundary Tests (2 files):
- [x] `src/__tests__/errorBoundary/ErrorBoundary.test.tsx`
  - Remove vitest import
  - Replace `vi.fn()` → `jest.fn()`

- [x] `src/__tests__/errorBoundary/SafeComponents.test.tsx`
  - Same fix

### Phase 2: Handle Component Imports

- [x] Updated hook imports to `src/hooks/animations/*` to match actual paths.

### Phase 3: Run Tests

```bash
cd /Users/mader/Documents/Atipicus/mrs-ui
npm test -- src/__tests__/
```

**Latest Output**:
```
Test Suites: 10 passed, 10 total
Tests:       106 passed, 106 total
Snapshots:   0 total
Time:        ~1-2s
```

### Phase 4: Check Coverage

```bash
npm test -- src/__tests__/ --coverage
```

**Expected**: 89-91% coverage (up from 85%)

### Phase 5: Commit & Push

```bash
cd /Users/mader/Documents/Atipicus/mrs-ui

# Check what changed
git status

# Add tests
git add src/__tests__/

# Commit
git commit -m "feat(testing): Add comprehensive test suites for mrs-ui v1.1.0

- Add 51 animation hook tests (useRipple, usePulse, useShake, useBounce, useHoverScale)
- Add 61 integration tests for component compositions (ButtonGroup, Table, Dialog)
- Add 32 error boundary tests with SafeComponents
- Total: 144 test cases, 500 lines of test code
- Expected coverage improvement: 85% -> 89-91%"

# Push to GitHub
git push origin develop
```

---

## 🔧 Quick Find & Replace Guide

Use in your editor (Code/Cursor):

### Find All Vitest Imports
**Find**: `import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';`
**Replace**: (delete the line)

**Find**: `import { describe, it, expect, vi } from 'vitest';`
**Replace**: (delete the line)

**Find**: `import { describe, it, expect, beforeEach, vi } from 'vitest';`
**Replace**: (delete the line)

### Replace vi.fn with jest.fn
**Find**: `vi.fn()`
**Replace**: `jest.fn()`

---

## 📝 Example Fix

### BEFORE (Broken):
```typescript
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('useRipple', () => {
  it('should create ripple', () => {
    const mockFn = vi.fn();
    mockFn();
    expect(mockFn).toHaveBeenCalled();
  });
});
```

### AFTER (Fixed):
```typescript
import React from 'react';
import { render, screen } from '@testing-library/react';

describe('useRipple', () => {
  it('should create ripple', () => {
    const mockFn = jest.fn();
    mockFn();
    expect(mockFn).toHaveBeenCalled();
  });
});
```

---

## 💡 Key Points

1. **Jest is already installed** in mrs-ui - no new dependencies needed
2. **Globals are automatic** - `describe()`, `it()`, `expect()` work without imports
3. **Mock functions** - Use `jest.fn()` not `vi.fn()`
4. **All other code stays the same** - Only fix imports

---

## 📚 Reference Files

Additional documentation in `/sessions/nifty-loving-clarke/mnt/Atipicus/`:

1. `🎬_ANIMATION_TESTS_IMPLEMENTATION.md` - Animation tests guide
2. `🔗_INTEGRATION_TESTS_IMPLEMENTATION.md` - Integration tests guide
3. `🛡️_ERROR_BOUNDARIES_IMPLEMENTATION.md` - Error boundary guide
4. `✅_RESUMEN_MEJORAS_SEMANA1.md` - Complete summary

---

## ⏱️ Time Estimate

- Phase 1 (Fix imports): 15-20 minutes
  - 10 files × 1-2 min each
  - Use Find & Replace to speed up

- Phase 2 (Handle imports): 10-15 minutes
  - Identify missing hooks
  - Remove real imports if not needed

- Phase 3 (Run tests): 2-3 minutes
  - `npm test` execution

- Phase 4 (Coverage): 1 minute

- Phase 5 (Commit & Push): 2-3 minutes

**Total**: ~30-45 minutes

---

## 🚀 Quick Commands Reference

```bash
# Navigate to project
cd /Users/mader/Documents/Atipicus/mrs-ui

# Run all tests
npm test -- src/__tests__/

# Run specific test file
npm test -- src/__tests__/hooks/useRipple.test.tsx

# Run with coverage
npm test -- src/__tests__/ --coverage

# Watch mode (runs on file change)
npm test -- --watch src/__tests__/

# Git status
git status

# Add files
git add src/__tests__/

# Commit
git commit -m "Your message"

# Push
git push origin develop
```

---

## 🎯 Success Criteria

- [x] All 10 test files copied to mrs-ui
- [x] All vitest imports removed
- [x] All `vi.fn()` replaced with `jest.fn()`
- [x] Component imports handled (remove or create)
- [x] `npm test -- src/__tests__/` runs without errors
- [x] All 106 tests pass ✅
- [ ] Coverage report shows 89-91% (or higher)
- [ ] Committed to GitHub
- [ ] Pushed to develop branch

---

## 🆘 Common Issues & Fixes

### "vitest cannot be imported"
→ Remove the vitest import line

### "jest is not defined"
→ Jest globals work automatically, no import needed

### "Cannot find module '../../hooks/useRipple'"
→ Remove the import line - tests have their own mocks

### "@testing-library/react not found"
→ Already installed in mrs-ui, should work

### Tests still fail after fixes
→ Check jest.config.js configuration
→ Verify package.json has @testing-library packages

---

**Status**: Ready to proceed with fixes
**Next Step**: Start with Phase 1 - Fix all test file imports
**Expected**: 30-45 minutes to completion

Good luck! 🚀
