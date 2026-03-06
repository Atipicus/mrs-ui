# Theme Editor - Interactive Visual Theme Management

## Overview

The Theme Editor is an interactive web application that allows developers and designers to visualize and edit theme tokens in real-time. It provides a user-friendly interface for managing colors, typography, spacing, and other design tokens that control the entire MRS Design System.

## Features

### 🎨 Color Editor

- Edit semantic colors (primary, secondary, error, warning, info, success)
- Separate light and dark mode color management
- Interactive color picker with hex input
- Real-time color preview
- Organized by category (primary, secondary, background, text, action, divider)

### ✍️ Typography Editor

- Edit typography variants (h1-h6, body1-2, subtitle1-2, button, caption, overline)
- Adjust font sizes, font weights, line heights, and letter spacing
- Live preview of text variants
- Visual representation of typography changes

### 📏 Spacing & Shape Editor

- Modify spacing scale (8px base unit multipliers)
- Visual spacing indicators
- Edit border radius values with live preview
- Slider controls for precise adjustments

### 👁️ Live Preview

- Real-time component preview with current theme
- Shows buttons, inputs, chips, alerts, tabs, typography, and more
- Switch between light and dark modes instantly
- Split-screen view option

### 💾 Sync & Export

- Generate TypeScript code for theme changes
- Diff view of modifications
- Copy to clipboard functionality
- Git integration ready (future enhancement)

## Installation

The theme editor is included in the MRS Design System package:

```bash
npm install @mrs-ui/theme
```

## Usage

### Basic Usage

```tsx
import { ThemeEditorApp } from '@mrs-ui/theme-editor';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '@mrs-ui/theme';

export function App() {
  const [mode, setMode] = useState('light');
  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <ThemeEditorApp
        showSync={true}
        defaultTab={0}
        onThemeSynced={(edits) => console.log('Theme synced:', edits)}
      />
    </ThemeProvider>
  );
}
```

### Props

```typescript
interface ThemeEditorAppProps {
  /**
   * Show sync button
   * @default true
   */
  showSync?: boolean;

  /**
   * Callback when theme is synced
   */
  onThemeSynced?: (edits: any) => void;

  /**
   * Initial tab index (0=Colors, 1=Typography, 2=Spacing)
   * @default 0
   */
  defaultTab?: number;
}
```

## Architecture

### File Structure

```
src/theme-editor/
├── ThemeEditorApp.tsx           # Main application component
├── ThemeEditor.stories.tsx      # Storybook stories
├── index.tsx                    # Public exports
├── README.md                    # This file
├── components/
│   ├── ColorEditor.tsx          # Color editing interface
│   ├── TypographyEditor.tsx     # Typography editing interface
│   ├── SpacingEditor.tsx        # Spacing & shape editing
│   └── ComponentPreview.tsx     # Live component preview
├── hooks/
│   ├── useThemeParser.ts        # Parse and manage theme data
│   └── useThemeSync.ts          # Serialize and sync changes
└── utils/
    └── (future: more utilities)
```

### Component Architecture

```
ThemeEditorApp (Main Container)
├── Header (with tabs and sync button)
├── Main Content (Flex layout)
│   ├── Editor Panel (50-100% width)
│   │   ├── TabPanel: ColorEditor
│   │   ├── TabPanel: TypographyEditor
│   │   └── TabPanel: SpacingEditor
│   └── Preview Panel (0-50% width, toggleable)
│       └── ComponentPreview (Live component display)
```

### Hook: useThemeParser

Parses and manages theme data with real-time editing.

```typescript
const {
  // Data
  parsedTheme, // Current theme with edits applied
  mode, // 'light' | 'dark'
  edits, // Active edits

  // State management
  setMode, // Switch light/dark mode
  updateColor, // Update a color value
  updateTypography, // Update a typography property
  updateSpacing, // Update a spacing value
  updateShape, // Update a shape/border-radius value

  // Getters
  getColorValue, // Get current color (edited or original)
  getTypographyValue, // Get current typography value

  // Utilities
  resetEdits, // Clear all changes
} = useThemeParser();
```

### Hook: useThemeSync

Handles serialization and syncing of theme changes.

```typescript
const {
  // Status
  status, // 'idle' | 'syncing' | 'success' | 'error'
  lastSync, // Last sync result

  // Actions
  sync, // Sync changes to files

  // Utilities
  getSerializedEdits, // Get code representation
  getDiff, // Get diff view

  // Reset
  reset, // Reset sync state
} = useThemeSync();
```

## Workflow

### 1. Edit Theme Tokens

1. Select an editor (Colors, Typography, or Spacing)
2. Make changes using the visual interface
3. See real-time updates in the preview panel

### 2. Review Changes

1. Click "View Code" to see the generated TypeScript
2. Use the diff view to compare before/after
3. Review changes in the live component preview

### 3. Sync to theme.ts

**Current (Manual Sync):**

1. Click "Sync Changes" button
2. Copy the generated code from the console
3. Paste into `src/theme/theme.ts` or `src/theme/tokens-import.ts`
4. The changes take effect after saving

**Future (Automated Sync):**

- Direct file write via API
- Git commit integration
- GitHub Actions CI/CD integration

## Integration Points

### With Design System

The theme editor works with your existing design system:

```
┌─────────────────────────────────────────┐
│     Theme Editor (Visual Interface)     │
├─────────────────────────────────────────┤
│ useThemeParser → Reads theme.ts         │
│ useThemeSync → Generates TypeScript     │
└─────────────────────────────────────────┘
              ↓ (Manual)
┌─────────────────────────────────────────┐
│     src/theme/theme.ts                  │
│     (MUI Theme Configuration)           │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│     Material-UI Components              │
│     (Styled with theme)                 │
└─────────────────────────────────────────┘
```

### With Figma & Token Studio

For design-driven workflows:

```
Figma Design System
        ↓
Token Studio Plugin
        ↓
tokens/*.json (DTCG format)
        ↓
Style Dictionary (npm script)
        ↓
tokens/generated/ts/tokens.ts
        ↓
theme.ts (uses generated tokens)
        ↓
Theme Editor (visualizes & can override)
```

### With Storybook

For documentation and testing:

1. **Component Showcase**: See all components with current theme
2. **Visual Testing**: Verify color, spacing, typography changes
3. **Living Documentation**: Document design tokens and usage

View in Storybook:

```
Tools > Theme Editor > Default
```

## Common Tasks

### Change Primary Color

1. Open Theme Editor
2. Go to "Colors" tab
3. Toggle between Light/Dark mode as needed
4. Click on the "primary.main" color swatch
5. Select new color or paste hex value
6. See changes in live preview
7. Click "Sync Changes" to save

### Adjust Typography Size

1. Go to "Typography" tab
2. Scroll to desired variant (e.g., "h1")
3. Change "fontSize" value
4. See preview update immediately
5. Click "Sync Changes" to save

### Modify Spacing Scale

1. Go to "Spacing & Shape" tab
2. Adjust spacing values (8px base unit)
3. Use slider for quick adjustments
4. See visual spacing indicator
5. Click "Sync Changes" to save

### Switch Color Scheme

1. Use Light/Dark toggle in Color Editor
2. All colors update in real-time
3. Live preview updates automatically
4. Make adjustments for both modes
5. Sync both separately or together

## Advanced Usage

### Programmatic Access

```typescript
const { parsedTheme, edits, updateColor } = useThemeParser();

// Update color programmatically
updateColor('primary.main', '#FF0000');

// Access current values
console.log(parsedTheme.colors.light['primary.main']); // '#FF0000'

// Get serialized code
const { getSerializedEdits } = useThemeSync();
const code = getSerializedEdits(edits, 'light');
```

### Custom Integration

```typescript
import { useThemeParser, useThemeSync } from '@mrs-ui/theme-editor';

function MyCustomEditor() {
  const { parsedTheme, updateColor } = useThemeParser();
  const { sync } = useThemeSync();

  const handleCustomChange = async (color, value) => {
    updateColor(color, value);
    // Send to your backend
    await sync(...);
  };

  return (
    // Your custom UI
  );
}
```

## Limitations & Future Enhancements

### Current Limitations

- Edits are live in preview but require manual copy-paste to theme.ts
- No undo/redo support
- No keyboard shortcuts
- No theme import/export
- No comparison with previous versions

### Planned Features

- [ ] Direct file write via Node API / Electron / Tauri
- [ ] Git commit integration (`git commit -am "Update theme"`)
- [ ] GitHub Actions trigger for CI/CD
- [ ] Theme backup and restore
- [ ] Undo/redo with history
- [ ] Keyboard shortcuts
- [ ] Dark mode toggle
- [ ] Responsive mobile editor
- [ ] Code diff viewer with syntax highlighting
- [ ] Multi-brand theme management

## Troubleshooting

### Changes not appearing in preview

1. Check that you're in the correct mode (Light/Dark)
2. Verify theme is loaded: `console.log(parsedTheme)`
3. Check browser console for errors
4. Try clicking "Reset Changes" and making again

### Sync button disabled

- This happens when there are no edits
- Make changes first, then try again

### Color picker not working

1. Ensure input is valid hex: `#RRGGBB`
2. Try using the native color input instead
3. Check browser console for errors

### Missing components in preview

- Some components may not be included in the preview
- Check `ComponentPreview.tsx` to add missing components
- Create a GitHub issue to request new components

## Contributing

To add new token types or editors:

1. Add parser in `useThemeParser.ts` (`extract*` function)
2. Create new editor component in `components/`
3. Add tab to `ThemeEditorApp.tsx`
4. Update Storybook story
5. Add tests and documentation

## Resources

- [Material-UI Theme Documentation](https://mui.com/material-ui/customization/theming/)
- [Design Tokens 101](https://www.designtokens.org/)
- [Token Studio](https://tokens.studio/)
- [Style Dictionary](https://styledictionary.com/)
- [W3C Design Tokens Standard](https://www.designtokens.org/)

## License

MIT - Part of MRS Design System

## Support

For issues and questions:

- Check Storybook documentation
- Review examples in stories
- Create an issue in the GitHub repo
- Contact the design system team
