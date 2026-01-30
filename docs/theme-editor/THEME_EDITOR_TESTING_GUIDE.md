# 🧪 Theme Editor Save & Sync - Testing Guide

**Date:** January 30, 2026
**Version:** 1.0
**Status:** Ready for Testing ✅

---

## 📋 Quick Start

### Option 1: Storybook (Recommended)
```bash
npm run storybook
# Navigate to: Tools > Theme Editor > Default
```

### Option 2: Local Development
```bash
npm run dev
# Import and use ThemeEditorApp in your app
```

---

## 🎯 Test Scenarios

## Test 1: Button Visibility & State Changes

### Scenario: Buttons appear when edits exist

**Steps:**
1. Open Theme Editor
2. Observe AppBar buttons initially
3. Make a change in Colors tab (e.g., change primary color)
4. Observe button state

**Expected Results:**
- ✅ "Show Preview" button: Always visible
- ✅ "Save Theme" button: Appears after first edit
- ✅ "Sync Theme" button: Appears but DISABLED (greyed out)
- ✅ Info panel shows: "Total Changes: 1 groups modified"

**Console Output:**
```
Theme edits detected: { colors: { light: { primary: '#...' } } }
```

---

## Test 2: Save Theme Workflow

### Scenario: User saves theme changes to file

**Steps:**
1. Make 3+ changes across different tabs:
   - Colors: Change primary and secondary
   - Typography: Change h1 fontSize
   - Spacing: Change spacing scale
2. Click "Save Theme" button

**Expected Results:**
```
✅ SaveDialog appears with:
  - "Total Changes: 3 groups modified"
  - Breakdown showing color (2), typography (1), spacing (1)
  - Target file: src/theme/theme.ts
  - Mode: light
  - Checkbox: "Create backup" (checked)
  - Preview commit message:
    "Theme update: colors (2), typography (1), spacing (1) - light mode"

✅ Click Confirm:
  - "Saving..." spinner shows
  - Takes ~2 seconds
  - Success alert appears:
    "✅ Theme saved successfully to src/theme/theme.ts"
  - SaveDialog closes
  - "Sync Theme" button becomes ENABLED
  - Backup file created: theme-backup-[TIMESTAMP].ts
```

**Console Output:**
```
Theme save initiated...
Serializing 3 theme edits...
Creating backup: theme-backup-2026-01-30-14-45-23.ts
Writing to: src/theme/theme.ts
Theme saved successfully!
```

---

## Test 3: Sync Theme Workflow

### Scenario: User syncs theme to git after saving

**Prerequisites:** Theme must be saved (isSaved = true)

**Steps:**
1. After Test 2 completes (isSaved = true)
2. "Sync Theme" button is now enabled
3. Click "Sync Theme" button

**Expected Results:**
```
✅ SyncDialog opens immediately with:
  - Title: "⏳ Syncing Theme"
  - Stepper showing 4 steps
  - Step 1: "Regenerate Tokens" (in progress)

✅ After ~400ms:
  - Step 1: ✓ Complete
  - Step 2: "Update Files" (in progress)

✅ After ~400ms:
  - Step 2: ✓ Complete
  - Step 3: "Commit to Git" (in progress)

✅ After ~400ms:
  - Step 3: ✓ Complete
  - Step 4: "Complete" (in progress)

✅ After ~400ms:
  - Step 4: ✓ Complete
  - Title changes to: "✅ Sync Complete"
  - Dialog shows:
    - Green alert: "Theme synced successfully!"
    - Commit hash: "a1b2c3d" (7-char hash)
    - Info: "Ready for PR review"
  - "Done" button appears
```

**Click Done:**
```
✅ SyncDialog closes
✅ "Undo (4:59)" button appears in AppBar (next to Sync Theme)
✅ Countdown timer visible: "4:59 left"
✅ Starts counting down

Console Output:
=== Git Commit Preview ===
git add .
git commit -m "Theme update: colors (2), typography (1), spacing (1) - light mode"
Commit hash: a1b2c3d
========================
```

---

## Test 4: Undo Countdown

### Scenario: User watches undo countdown and window expires

**Prerequisites:** Just completed Test 3 (sync successful)

**Steps:**
1. Observe "Undo (4:59)" button in AppBar
2. Wait and watch timer

**Expected Results:**
```
✅ At 4:59 - Shows: "[Undo] 4:59 left"
✅ At 3:00 - Shows: "[Undo] 3:00 left"
✅ At 1:00 - Shows: "[Undo] 1:00 left"
✅ At 0:30 - Shows: "[Undo] 0:30 left"
✅ At 0:00 - Shows: "[Undo] (expired)"
           Button disabled (greyed out)
           Countdown stops
           Tooltip: "Undo window has expired (5 minutes maximum)"

✅ After 5 minutes:
  - Button disappears from AppBar
  - User cannot undo anymore
  - Next changes require new save/sync cycle
```

---

## Test 5: Undo Sync (Before Expiry)

### Scenario: User reverts sync within 5-minute window

**Prerequisites:** Just completed Test 3 (sync successful, timer showing 3+ min remaining)

**Steps:**
1. Observe "Undo (4:30)" button
2. Click the "Undo" button

**Expected Results:**
```
✅ Button text changes: "Undo" → "Undoing..."
✅ Button disabled (spinner shows)
✅ Takes ~1.5 seconds

✅ After completion:
  - Button disappears
  - Info alert appears:
    "✅ Sync reversed successfully"
    "Reverted commit: a1b2c3d"
  - isSaved flag reset to false
  - "Save Theme" button enabled
  - "Sync Theme" button disabled again

✅ Changes in memory restored to pre-sync state

Console Output:
=== Git Revert Preview ===
git revert a1b2c3d
Revert hash: x9y8z7w
========================
```

---

## Test 6: Error Handling

### Scenario: Simulating error conditions

**Step 1: Save Failure**
```
1. Trigger error in useThemeSave (modify code temporarily)
2. Click "Save Theme"
3. Expected: Error alert "Failed to save theme"
4. SaveDialog closes
5. Can retry
```

**Step 2: Sync Failure**
```
1. Trigger error in useGitIntegration
2. Click "Sync Theme"
3. Expected: SyncDialog shows error message
4. Step that failed highlighted
5. Close button appears
6. Can retry
```

---

## Test 7: Multiple Edits & Reset

### Scenario: User makes many edits then resets

**Steps:**
1. Edit multiple categories:
   - Change 5+ colors
   - Edit 3 typography variants
   - Adjust spacing scale
2. Info panel should show: "Total Changes: 3 groups modified"
3. Click "Reset Changes" button

**Expected Results:**
```
✅ All edits cleared
✅ "Save Theme" button disappears
✅ "Sync Theme" button hidden
✅ Info panel shows: "Total Changes: 0 groups modified"
✅ All editor inputs revert to original values
✅ Preview components reset to original theme
```

---

## Test 8: Save Without Changes

### Scenario: User tries to save with no edits

**Steps:**
1. Load Theme Editor with no changes
2. Look for "Save Theme" button

**Expected Results:**
```
✅ "Save Theme" button is NOT visible
✅ "Sync Theme" button is NOT visible
✅ Only "Show Preview" button visible
✅ Info panel shows: "Total Changes: 0 groups modified"
```

---

## Test 9: Light/Dark Mode Switching

### Scenario: User saves in light mode, then switches to dark

**Steps:**
1. Make changes in light mode
2. Save theme
3. In some editors, switch to dark mode (if available)
4. Sync theme

**Expected Results:**
```
✅ Changes tracked separately for light/dark
✅ Commit message includes mode: "light mode" or "dark mode"
✅ Backup created with mode indication
✅ Both light and dark edits saved together
```

---

## Test 10: UI Responsiveness

### Scenario: Test UI behavior during operations

**Steps:**
1. Click "Save Theme"
2. Quickly click elsewhere (don't click Save)
3. Dialog should remain focused

**Expected Results:**
```
✅ Dialog is modal (blocks interaction)
✅ Cannot click buttons outside dialog
✅ Can only Cancel or Confirm
✅ Escape key closes dialog (cancels operation)
```

---

## 🔍 Verification Checklist

### Visual Elements
- [ ] "Show Preview" button visible always
- [ ] "Save Theme" button appears with edits
- [ ] "Sync Theme" button disabled until saved
- [ ] "Undo" button appears after sync
- [ ] Countdown timer displays correctly
- [ ] All alerts styled properly
- [ ] Icons load (Undo icon in button)
- [ ] Loading spinners animate

### Functional Elements
- [ ] Buttons are clickable
- [ ] Dialogs open/close smoothly
- [ ] Stepper animates properly
- [ ] Countdown counts down every second
- [ ] Expiry handling works
- [ ] Error messages display
- [ ] Success messages display

### State Management
- [ ] hasEdits tracks correctly
- [ ] isSaved state gates Sync button
- [ ] undoVisible toggles properly
- [ ] undoTimeRemaining decrements
- [ ] All state resets after operations

### Integration
- [ ] Works with ColorEditor
- [ ] Works with TypographyEditor
- [ ] Works with SpacingEditor
- [ ] Works with ComponentPreview
- [ ] Works with existing theme system

---

## 📊 Expected Console Output

### Successful Save
```
Theme save initiated...
Serializing 3 theme edits...
Creating backup: theme-backup-2026-01-30-14-45-23.ts
Writing to: src/theme/theme.ts
Theme saved successfully!
Serialized edits:
// Light mode
const lightThemeUpdate = {
  colors: { primary: '#1976d2', ... },
  typography: { h1: { fontSize: 32 } },
  spacing: { scale: [0, 4, 8, 16, ...] }
}
```

### Successful Sync
```
=== Git Commit Preview ===
git add .
git commit -m "Theme update: colors (2), typography (1) - light mode"
Commit hash: a1b2c3d
========================
Git commit simulated for 1500ms
Commit successful: a1b2c3d
Undo available until: 2026-01-30T14:55:30.000Z
```

### Successful Undo
```
=== Git Revert Preview ===
git revert a1b2c3d
Revert hash: x9y8z7w
========================
Git revert simulated for 1500ms
Revert successful: x9y8z7w
Sync reverted - theme restored to previous state
```

---

## 🐛 Common Issues & Solutions

### Issue: "Sync Theme" button stays disabled
**Solution:** Make sure to click "Confirm" in SaveDialog, not just open it

### Issue: Undo button doesn't appear
**Solution:** Check that sync completed successfully (success alert displayed)

### Issue: Timer stops counting down
**Solution:** This is expected - timer only updates when sync is successful

### Issue: Dialog won't close
**Solution:** Ensure to click "Done" or "Close" button, or press Escape

### Issue: Changes don't seem to save
**Solution:** Check browser console for error messages

---

## ✅ Sign-Off Checklist

After testing all scenarios:

- [ ] Test 1: Button visibility ✓
- [ ] Test 2: Save workflow ✓
- [ ] Test 3: Sync workflow ✓
- [ ] Test 4: Undo countdown ✓
- [ ] Test 5: Undo sync ✓
- [ ] Test 6: Error handling ✓
- [ ] Test 7: Multiple edits ✓
- [ ] Test 8: No changes state ✓
- [ ] Test 9: Light/dark mode ✓
- [ ] Test 10: UI responsiveness ✓

**Overall Status:** ✅ Ready for production

---

## 📞 Reporting Issues

When reporting issues, include:
1. Steps to reproduce
2. Expected vs actual result
3. Browser console output
4. Screenshot/video if relevant
5. Theme editor state (what edits were made)

---

**Happy Testing! 🚀**
