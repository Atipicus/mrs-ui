/**
 * Theme Editor Stories
 * Storybook stories for the theme editor application
 */

import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEditorApp } from './ThemeEditorApp';

const meta = {
  title: 'Tools/Theme Editor',
  component: ThemeEditorApp,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Theme Editor

Interactive visual editor for theme tokens in the MRS Design System.

## Features

- **Color Editor**: Edit semantic colors for light and dark modes
- **Typography Editor**: Adjust font sizes, weights, and line heights
- **Spacing & Shape**: Modify spacing scale and border radius values
- **Live Preview**: See component changes in real-time
- **Sync to Theme**: Export changes back to theme.ts

## Usage

\`\`\`tsx
import { ThemeEditorApp } from '@mrs-ui/theme-editor';

export function MyApp() {
  return <ThemeEditorApp />;
}
\`\`\`

## How It Works

1. Select a category (Colors, Typography, or Spacing)
2. Make edits using the visual interface
3. See changes in real-time in the preview panel
4. Click "Sync Changes" to generate the code
5. Copy the generated code into your theme.ts file

## Architecture

The theme editor consists of:

- **useThemeParser**: Hook for parsing and managing theme data
- **useThemeSync**: Hook for serializing and syncing changes
- **ColorEditor**: Component for editing color tokens
- **TypographyEditor**: Component for editing typography
- **SpacingEditor**: Component for editing spacing and shape
- **ComponentPreview**: Live preview of components with current theme

## Integration with Figma

While this editor allows direct theme.ts editing, it works alongside:

- **Token Studio (Figma Plugin)**: For design-driven token generation
- **Style Dictionary**: For token generation and transformation
- **Storybook**: For component documentation

## Future Enhancements

- [ ] Direct file write support (via API)
- [ ] Git commit integration
- [ ] Theme export/import (JSON, CSS Variables)
- [ ] Comparison with previous versions
- [ ] Undo/redo support
- [ ] Keyboard shortcuts
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeEditorApp>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default editor with all features enabled
 */
export const Default: Story = {
  args: {
    showSync: true,
    defaultTab: 0,
  },
};

/**
 * Editor with sync disabled (preview only)
 */
export const PreviewOnly: Story = {
  args: {
    showSync: false,
    defaultTab: 0,
  },
};

/**
 * Editor starting on Typography tab
 */
export const TypographyFocused: Story = {
  args: {
    showSync: true,
    defaultTab: 1,
  },
};

/**
 * Editor starting on Spacing tab
 */
export const SpacingFocused: Story = {
  args: {
    showSync: true,
    defaultTab: 2,
  },
};
