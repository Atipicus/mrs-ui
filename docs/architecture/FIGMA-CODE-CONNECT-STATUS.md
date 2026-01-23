# Figma Code Connect Status - v0.12.0

**Date**: January 23, 2026  
**Status**: 📊 **IN PROGRESS** (30/54 complete - 56%)  

---

## 📊 Overview

Figma Code Connect helps designers understand which React components map to Figma designs.

**Current Status**:
- ✅ **Complete**: 30 components (56%)
- ⏳ **Pending**: 24 components (44%)
- **Total Components**: 54

---

## ✅ Components with Figma Code Connect (30)

### Atoms (17)

1. ✅ Avatar
2. ✅ Badge
3. ✅ Button
4. ✅ Checkbox
5. ✅ Chip
6. ✅ CircularProgress
7. ✅ Divider
8. ✅ Icon
9. ✅ LinearProgress
10. ✅ Link
11. ✅ Paper
12. ✅ Radio
13. ✅ Select
14. ✅ Slider
15. ✅ Switch
16. ✅ TextField
17. ✅ Typography

### Molecules (13)

1. ✅ Accordion
2. ✅ Alert
3. ✅ AppBar
4. ✅ BottomNavigation
5. ✅ Dialog
6. ✅ Drawer
7. ✅ Menu
8. ✅ Pagination
9. ✅ SpeedDial
10. ✅ Stepper
11. ✅ Table
12. ✅ Tabs
13. ✅ Timeline

---

## ⏳ High Priority - Missing Figma Code Connect (24)

### Atoms (10)

1. ⏳ **IconButton** - Common interactive element
2. ⏳ **Tooltip** - Essential for UX
3. ⏳ **Skeleton** - Loading states
4. ⏳ **FormControlLabel** - Form layouts
5. ⏳ **RadioGroup** - Form groups
6. ⏳ **FormGroup** - Form layouts
7. ⏳ **MenuItem** - Menu items
8. ⏳ **MaterialSymbol** - Icon system
9. ⏳ **Toolbar** - App layout
10. ⏳ **AccountStack** - User profile

### Molecules (14)

1. ⏳ **Card** (+ sub-components) - Very common
2. ⏳ **ButtonGroup** - Button groups
3. ⏳ **Autocomplete** - Search/filter
4. ⏳ **Rating** - Reviews/ratings
5. ⏳ **Snackbar** - Notifications
6. ⏳ **List** - Lists
7. ⏳ **ListItem** - List items
8. ⏳ **DatePicker** - Date input
9. ⏳ **TimePicker** - Time input
10. ⏳ **DateTimePicker** - DateTime input
11. ⏳ **DrawerNavigation** - Side nav
12. ⏳ **ExpandableNavItem** - Navigation
13. ⏳ **Sidenav** - Side navigation
14. ⏳ **AccordionActions** - Accordion parts

---

## 📋 Implementation Plan

### Phase 1: Core Components (Priority 1) - 8 components

**Target**: Most commonly used components

1. ⏳ IconButton
2. ⏳ Tooltip
3. ⏳ Card (+ CardContent, CardActions, CardHeader)
4. ⏳ ButtonGroup
5. ⏳ Autocomplete
6. ⏳ Rating
7. ⏳ Snackbar
8. ⏳ Skeleton

**Estimated Time**: 2 hours

---

### Phase 2: Form Components (Priority 2) - 6 components

**Target**: Form-related components

1. ⏳ FormControlLabel
2. ⏳ RadioGroup
3. ⏳ FormGroup
4. ⏳ DatePicker
5. ⏳ TimePicker
6. ⏳ DateTimePicker

**Estimated Time**: 1.5 hours

---

### Phase 3: Navigation & Layout (Priority 3) - 6 components

**Target**: Navigation and layout components

1. ⏳ DrawerNavigation
2. ⏳ ExpandableNavItem
3. ⏳ Sidenav
4. ⏳ List
5. ⏳ ListItem
6. ⏳ Toolbar

**Estimated Time**: 1.5 hours

---

### Phase 4: Utility Components (Priority 4) - 4 components

**Target**: Supporting components

1. ⏳ MenuItem
2. ⏳ MaterialSymbol
3. ⏳ AccountStack
4. ⏳ AccordionActions

**Estimated Time**: 1 hour

---

## 🎯 Figma Code Connect Template

```tsx
/**
 * Figma Code Connect for [ComponentName]
 * 
 * Links this React component to its Figma design counterpart.
 * 
 * @figma [Figma URL]
 */

import figma from '@figma/code-connect';
import React from 'react';
import { [ComponentName] } from './[ComponentName]';

figma.connect(
  [ComponentName],
  '[Figma URL]',
  {
    props: {
      // Map Figma properties to React props
      label: figma.string('Label'),
      variant: figma.enum('Variant', {
        contained: 'contained',
        outlined: 'outlined',
        text: 'text',
      }),
      disabled: figma.boolean('Disabled'),
      // Add more props as needed
    },
    example: ({ label, variant, disabled }) => (
      <[ComponentName]
        variant={variant}
        disabled={disabled}
      >
        {label}
      </[ComponentName]>
    ),
  }
);
```

---

## 📚 Figma URLs Reference

**Note**: These URLs need to be extracted from the Figma design file.

Base URL: `https://www.figma.com/design/c4weC6RhdEd7c8B1GkCjTB/MRS---Material-UI-v.7.2.0`

### Component Node IDs (Examples)

- Button: `node-id=11225-362624`
- TextField: `node-id=6570-49856`
- Alert: `node-id=6591-48882`

**Action Required**: Extract node IDs for remaining 24 components from Figma.

---

## ✅ Verification Checklist

For each Figma Code Connect file:

- [ ] ✅ File created: `[Component].figma.tsx`
- [ ] ✅ Figma URL correct
- [ ] ✅ Props mapped to Figma properties
- [ ] ✅ Example code matches component API
- [ ] ✅ TypeScript types correct
- [ ] ✅ No linting errors
- [ ] ✅ Builds successfully

---

## 🚀 Benefits of Figma Code Connect

### For Designers

- ✅ **See Real Code**: View actual React implementation
- ✅ **Props Visibility**: Understand component props
- ✅ **Sync Status**: Know if design matches code
- ✅ **Design Tokens**: See which tokens are used

### For Developers

- ✅ **Design Reference**: Direct link to Figma design
- ✅ **Prop Mapping**: Clear mapping between design and code
- ✅ **Documentation**: Self-documenting components
- ✅ **Validation**: Automated design-code sync checks

### For Teams

- ✅ **Single Source of Truth**: Figma as design system source
- ✅ **Reduced Handoff Time**: Clear design-to-code path
- ✅ **Consistency**: Ensures design matches implementation
- ✅ **Automated Updates**: Sync when designs change

---

## 📊 Progress Tracking

```
┌──────────────────────────────────────────┐
│ Figma Code Connect Progress             │
├──────────────────────────────────────────┤
│                                          │
│ ✅ Complete:  ████████████░░  56% (30)  │
│ ⏳ Pending:   ░░░░░░░░░░░░    44% (24)  │
│                                          │
│ TOTAL:        54 components              │
└──────────────────────────────────────────┘
```

### By Category

| Category | Complete | Pending | Total | Progress |
|----------|----------|---------|-------|----------|
| **Atoms** | 17 | 10 | 27 | 63% ✅ |
| **Molecules** | 13 | 14 | 27 | 48% ⏳ |
| **TOTAL** | 30 | 24 | 54 | 56% |

---

## 🎯 Next Steps

### Immediate (This Session)

1. **Extract Figma Node IDs** - Get URLs for remaining 24 components
2. **Create Phase 1 Files** - 8 core components (2 hours)
3. **Verify Implementation** - Test all new files

### Short-term (Next Sprint)

4. **Create Phase 2 Files** - 6 form components (1.5 hours)
5. **Create Phase 3 Files** - 6 navigation components (1.5 hours)
6. **Create Phase 4 Files** - 4 utility components (1 hour)

### Long-term (Future)

7. **Automate Sync** - CI/CD validation of design-code sync
8. **Documentation** - Usage guide for designers
9. **Training** - Team workshop on Figma Code Connect

**Total Estimated Time**: 6-7 hours

---

## 📝 Notes

### Figma Code Connect Requirements

- ✅ `@figma/code-connect` package installed
- ✅ Figma file URL available
- ✅ Component node IDs extractable
- ✅ React components exported correctly

### Limitations

- ⚠️ **Manual Mapping Required**: Props must be manually mapped
- ⚠️ **Node ID Changes**: Figma node IDs can change if designs are reorganized
- ⚠️ **Sync Not Automatic**: Requires manual updates when designs change

### Best Practices

- ✅ Use descriptive prop names
- ✅ Map all important props
- ✅ Provide realistic examples
- ✅ Keep examples simple
- ✅ Update when component API changes

---

**Last Updated**: January 23, 2026  
**Next Review**: After Phase 1 completion  
**Maintained By**: MRS Design System Team
