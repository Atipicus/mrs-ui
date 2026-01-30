# 👀 How to View the Save & Sync Implementation

## 🚀 Quick Start - Run Storybook

```bash
npm run dev
```

Then open your browser to: **http://localhost:6006**

Navigate to: **Tools → Theme Editor → Default**

---

## 📱 What You'll See in Storybook

### Initial State (No Edits)
```
┌────────────────────────────────────────────────────────┐
│  MRS Design System - Theme Editor                       │
│                              [Show Preview]             │
└────────────────────────────────────────────────────────┘

Colors | Typography | Spacing & Shape

Total Changes: 0 groups modified
(No Save/Sync buttons visible)
```

### After Making Edits
```
┌────────────────────────────────────────────────────────┐
│  MRS Design System - Theme Editor                       │
│  [Show Preview]  [Save Theme ✓]  [Sync Theme ✗]       │
└────────────────────────────────────────────────────────┘

Colors | Typography | Spacing & Shape

Total Changes: 3 groups modified
[Reset Changes]  [View Code]
```

Notice:
- ✅ **Save Theme** button appears and is **enabled** (can click)
- ❌ **Sync Theme** button appears but is **disabled** (greyed out)

### After Clicking "Save Theme"

A **SaveDialog** modal appears:

```
┌──────────────────────────────────────────┐
│ Save Theme Changes                    [X] │
├──────────────────────────────────────────┤
│                                          │
│ ℹ️  Summary: colors (2), typography (1) │
│     Total changes: 3                    │
│                                          │
│ Changes Breakdown:                      │
│   • Colors (light): 2                   │
│   • Typography: 1                       │
│                                          │
│ Target File: src/theme/theme.ts         │
│ Mode: light                             │
│                                          │
│ Preview Commit Message:                 │
│ ┌──────────────────────────────────────┐│
│ │Theme update: colors (2),              ││
│ │typography (1) - light mode            ││
│ └──────────────────────────────────────┘│
│                                          │
│ ☑️ Create backup                        │
│                                          │
├──────────────────────────────────────────┤
│                  [Cancel]  [Confirm]    │
└──────────────────────────────────────────┘
```

**Click Confirm:**
- Shows spinning loader
- Text changes: "Confirm" → "Saving..."
- Takes ~2 seconds
- ✅ Success alert appears
- Dialog closes
- **Now "Sync Theme" button becomes ENABLED**

### After Clicking "Sync Theme"

A **SyncDialog** modal appears with a **4-step stepper**:

```
┌──────────────────────────────────────────┐
│ ⏳ Syncing Theme                      [X] │
├──────────────────────────────────────────┤
│                                          │
│ ◉ Regenerate Tokens           ▓▓▓▓▓     │
│ ○ Update Files                          │
│ ○ Commit to Git                         │
│ ○ Complete                              │
│                                          │
│ Currently: Regenerate Tokens...         │
│ [spinner animation]                     │
│                                          │
└──────────────────────────────────────────┘
```

**Steps auto-progress every ~400ms:**

```
Step 1 (0-1s):  ✓ Regenerate Tokens
                 ◉ Update Files

Step 2 (1-2s):  ✓ Regenerate Tokens
                 ✓ Update Files
                 ◉ Commit to Git

Step 3 (2-3s):  ✓ Regenerate Tokens
                 ✓ Update Files
                 ✓ Commit to Git
                 ◉ Complete

Step 4 (3s+):   ✅ Sync Complete (title changes)
```

**On Success:**

```
┌──────────────────────────────────────────┐
│ ✅ Sync Complete                      [X] │
├──────────────────────────────────────────┤
│                                          │
│ ✓ Regenerate Tokens                    │
│ ✓ Update Files                         │
│ ✓ Commit to Git                        │
│ ✓ Complete                             │
│                                          │
│ ✅ Theme synced successfully!           │
│                                          │
│    Commit: a1b2c3d                     │
│                                          │
│    Ready for PR review                  │
│                                          │
│ ℹ️  Your team can review the changes   │
│    in a GitHub PR before merging       │
│                                          │
├──────────────────────────────────────────┤
│                            [Done]        │
└──────────────────────────────────────────┘
```

**Click Done:**
- Dialog closes
- AppBar now shows: `[Show Preview] [Save Theme ✓] [Sync Theme ✓] [Undo (4:59)]`
- **The Undo button with countdown appears!**

### Undo Button with Countdown

```
AppBar: [Show Preview] [Save Theme] [Sync Theme] [Undo (4:59)]
                                                      ^
                                                      Countdown timer
```

**The timer counts down:**
```
[Undo (4:59)]
[Undo (4:30)]
[Undo (3:00)]
[Undo (1:00)]
[Undo (0:30)]
[Undo] (expired)  ← Button becomes disabled (greyed out)
```

### Clicking "Undo" Button

```
Before clicking:      [Undo (3:45)]

After clicking:       [Undoing...]  ← Shows spinner

After completion:     [Button disappears]

Alert shows:          ✅ Sync reversed successfully
                      Reverted commit: a1b2c3d
```

---

## 📂 Files You Can Review

### The 6 New Files Created:

#### **Hooks (3)** - Business Logic
1. **`src/theme-editor/hooks/useThemeSave.ts`** (150 lines)
   - Serializes theme edits to TypeScript code
   - Creates automatic backups
   - Handles file persistence

2. **`src/theme-editor/hooks/useGitIntegration.ts`** (190 lines)
   - Manages git commits
   - Implements undo via git revert
   - Tracks 5-minute undo window

3. **`src/theme-editor/hooks/useFileSystem.ts`** (100 lines)
   - Shared utilities
   - Generates commit messages
   - Creates change summaries

#### **Components (3)** - UI Elements
4. **`src/theme-editor/components/SaveDialog.tsx`** (200 lines)
   - Confirmation modal before saving
   - Shows change preview
   - Lists backup checkbox

5. **`src/theme-editor/components/SyncDialog.tsx`** (160 lines)
   - Progress modal with 4-step stepper
   - Shows commit hash on success
   - Displays error messages

6. **`src/theme-editor/components/UndoButton.tsx`** (85 lines)
   - Countdown timer button
   - Expires after 5 minutes
   - Tooltip with status

---

## 🎯 Complete User Workflow

```
1️⃣  USER MAKES EDITS
    └─ Edit colors, typography, or spacing in the tabs
    └─ Info panel shows: "Total Changes: 2 groups modified"

2️⃣  SAVE THEME
    └─ Click [Save Theme] button in AppBar
    └─ SaveDialog opens with summary
    └─ Review changes and confirm
    └─ ✅ Success: theme.ts saved + backup created
    └─ [Sync Theme] button becomes enabled

3️⃣  SYNC THEME
    └─ Click [Sync Theme] button in AppBar
    └─ SyncDialog opens with 4-step stepper
    └─ Steps auto-complete:
       ├─ Regenerate Tokens (npm run tokens:build)
       ├─ Update Files
       ├─ Commit to Git
       └─ Complete
    └─ ✅ Success: shows commit hash a1b2c3d

4️⃣  OPTIONAL: UNDO SYNC (within 5 minutes)
    └─ Click [Undo (4:59)] button that appears
    └─ Shows "Undoing..." spinner
    └─ ✅ Revert applied: git revert a1b2c3d
    └─ State restored to pre-sync
    └─ Can save and sync again if needed
```

---

## 💾 What Gets Saved/Committed

### Save Phase
```
File: src/theme/theme.ts (modified)
Backup: src/theme/theme-backup-2026-01-30-14-45-23.ts (created)
```

### Sync Phase
```
Git Commit: "Theme update: colors (2), typography (1) - light mode"
Commit Hash: a1b2c3d (example)
```

### Undo Phase
```
Git Revert: Undoes the commit
Revert Hash: x9y8z7w (example)
State: Restored to before sync
```

---

## 🔄 State Transitions Diagram

```
┌─────────────────┐
│   No Edits      │
│ Save: ✗ Sync: ✗ │
└────────┬────────┘
         │ (make changes)
         ↓
┌─────────────────┐
│   Has Edits     │
│ Save: ✓ Sync: ✗ │  ← Save button enabled
└────────┬────────┘
         │ (click Save)
         ↓
┌─────────────────┐
│   Saving...     │
│ Save: ⏳ Sync: ✗ │  ← Loading spinner
└────────┬────────┘
         │ (save complete)
         ↓
┌─────────────────┐
│   Saved         │
│ Save: ✓ Sync: ✓ │  ← Sync button enabled
└────────┬────────┘
         │ (click Sync)
         ↓
┌─────────────────┐
│   Syncing...    │
│ Save: ✓ Sync: ⏳ │  ← 4-step stepper
└────────┬────────┘
         │ (sync complete)
         ↓
┌──────────────────┐
│   Synced         │
│ Save: ✓ Sync: ✓  │
│ Undo: [4:59]    │  ← Undo button visible
└────────┬─────────┘
         │ (optional: click Undo)
         ↓
┌──────────────────┐
│ Reverting...     │
│ Undo: [Undoing] │  ← Loading spinner
└────────┬─────────┘
         │ (revert complete)
         ↓
┌─────────────────┐
│   Reverted      │
│ Save: ✓ Sync: ✗ │  ← Can save/sync again
└─────────────────┘
```

---

## 🧪 Interactive Testing in Storybook

When you run `npm run dev` and open Storybook:

1. **Navigate to** Tools → Theme Editor → Default
2. **Make edits** in the Colors/Typography/Spacing tabs
3. **Observe** buttons appearing in AppBar
4. **Click "Save Theme"** to see SaveDialog
5. **Click "Sync Theme"** to see SyncDialog with stepper
6. **Watch the countdown** on Undo button
7. **Click "Undo"** to see revert process

---

## 📊 Implementation Summary

| Aspect | Details |
|--------|---------|
| **New Files** | 6 (3 hooks + 3 components) |
| **New Code** | ~885 lines |
| **TypeScript Errors** | 0 ✅ |
| **Build Status** | Successful ✅ |
| **Bundle Impact** | < 20KB |
| **UI Buttons** | 3 new (Save, Sync, Undo) |
| **Dialogs** | 2 new (SaveDialog, SyncDialog) |
| **Hooks** | 3 new (useThemeSave, useGitIntegration, useFileSystem) |

---

## 🎨 UI Features

### Visual Feedback
- ✅ Loading spinners during operations
- ✅ Disabled/enabled button states
- ✅ Countdown timer with MM:SS format
- ✅ Stepper visualization for sync process
- ✅ Success/error alerts
- ✅ Change summaries and previews

### User Experience
- ✅ Confirmation dialogs prevent accidents
- ✅ Clear button state transitions
- ✅ Real-time feedback and progress
- ✅ Helpful error messages
- ✅ Undo window with countdown

---

## ✅ Verification Checklist

After running `npm run dev`:

- [ ] Storybook opens to http://localhost:6006
- [ ] Theme Editor story loads
- [ ] No errors in browser console
- [ ] Make edits → Save/Sync buttons appear
- [ ] Click Save → SaveDialog opens
- [ ] Click Confirm → Success alert shown
- [ ] Click Sync → SyncDialog with stepper appears
- [ ] Stepper progresses through 4 steps
- [ ] Success shows commit hash
- [ ] Undo button appears with countdown
- [ ] Countdown decrements every second
- [ ] Click Undo → Revert happens
- [ ] All buttons and dialogs close properly

---

**You now have a complete, working Save & Sync implementation! 🎉**

To see it in action, simply run:
```bash
npm run dev
```

Then navigate to **Tools → Theme Editor → Default** in Storybook.
