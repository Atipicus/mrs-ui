# MRS UI v6 Design System

[![npm version](https://badge.fury.io/js/@mrs-uisystem%2Fui-v6.svg)](https://www.npmjs.com/package/@mrs-uisystem/ui-v6)
[![License](https://img.shields.io/badge/License-UNLICENSED-red.svg)](LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/madersystem/mrs-ui-v6/ci.yml?branch=main)](https://github.com/madersystem/mrs-ui-v6/actions)

A comprehensive Material-UI v6.5 based design system with **45 production-ready components** built with React, TypeScript, and modern best practices.

> **Version 0.3.0** - Phase 4 complete: Full navigation suite (AppBar, Toolbar, AccountStack, Drawer, DrawerNavigation, ExpandableNavItem) with 931 tests passing.

## 🚀 Features

- ✅ **45 Production Components** (30 atoms + 15 molecules)
- ✅ **TypeScript Support** - Full type safety with strict mode
- ✅ **Material-UI v6.5** - Latest Material-UI features
- ✅ **Tree-shakeable** - Import only what you need
- ✅ **Comprehensive Testing** - 931 tests with 100% pass rate (46 test suites)
- ✅ **Storybook Documentation** - Interactive component explorer
- ✅ **Dual Module Support** - ESM and CommonJS
- ✅ **Theme Integration** - Customizable design tokens
- ✅ **Responsive** - Mobile-first design approach
- ✅ **Accessible** - WCAG compliant components

## 📦 Installation

```bash
npm install @mrs-uisystem/ui-v6
```

### Peer Dependencies

```bash
npm install @mui/material @emotion/react @emotion/styled react react-dom
```

### Required Fonts

Add Nunito font (required) to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

Optional - Material Symbols for icon support:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>
```

## 🎯 Quick Start

```tsx
import { Button, TextField, Container, Stack } from '@mrs-uisystem/ui-v6';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '@mrs-uisystem/ui-v6/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Stack spacing={2}>
          <TextField label="Email" variant="outlined" />
          <Button variant="contained" color="primary">
            Sign In
          </Button>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}
```

## 📚 Components (45 Total)

### Atoms (30)
- **AccountStack** - User account display with avatar and badge (Phase 4 ✨)
- **Avatar** - User profile pictures
- **Badge** - Status indicators and counts
- **Box** - Fundamental layout container with sx prop
- **Button** - Primary action buttons
- **Checkbox** - Binary selection input
- **Chip** - Compact tags and filters
- **CircularProgress** - Circular loading indicator
- **Container** - Max-width wrapper for page content
- **Divider** - Visual content separator
- **FormControlLabel** - Labels for form controls
- **FormGroup** - Group multiple controls
- **Grid** - Responsive grid system (12-column)
- **Icon** - Icon display
- **IconButton** - Clickable icons
- **LinearProgress** - Linear loading bar
- **Link** - Accessible hyperlinks
- **MenuItem** - Options for Select
- **Paper** - Elevated surface container
- **Radio** - Single selection from group
- **RadioGroup** - Manage radio button groups
- **Select** - Dropdown selection menu
- **Skeleton** - Loading placeholders
- **Slider** - Range selection slider
- **Stack** - Flexbox layout manager for spacing
- **Switch** - Toggle on/off
- **TextField** - Text input with variants
- **Toolbar** - AppBar content container (Phase 4 ✨)
- **Tooltip** - Contextual help popups
- **Typography** - Text with theme variants

### Molecules (15)
- **Alert** - Contextual feedback messages
- **AppBar** - Top application navigation bar (Phase 4 ✨)
- **Autocomplete** - Search with suggestions
- **ButtonGroup** - Group of related buttons
- **Dialog** - Modal dialogs (Phase 2)
- **Drawer** - Side navigation panel (Phase 4 ✨)
- **DrawerNavigation** - Navigation component for Drawer (Phase 4 ✨)
- **ExpandableNavItem** - Collapsible navigation item (Phase 4 ✨)
- **List** - List of items
- **ListItem** - Individual list item
- **Menu** - Dropdown menu (Phase 2)
- **Pagination** - Page navigation (Phase 3)
- **Snackbar** - Temporary notifications (Phase 2)
- **Stepper** - Multi-step process indicator (Phase 3)
- **Table** - Data table with 7 sub-components (Phase 3)
- **Tabs** - Tabbed navigation (Phase 2)

## 🎨 Theme Customization

```tsx
import { createTheme, ThemeProvider } from '@mui/material';
import { theme as baseTheme } from '@mrs-uisystem/ui-v6/theme';

// Customize the base theme
const customTheme = createTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    primary: {
      main: '#your-brand-color',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

### Access Design Tokens

```tsx
import { colors, shape, typography } from '@mrs-uisystem/ui-v6/theme';

const primary = colors.light.primary.main; // #00686f (teal)
const borderRadius = shape.rounded; // 9999px (pill shape)
const heading = typography.h1.fontFamily; // Nunito
```

## 📖 Documentation

- **📘 Storybook**: [https://mgomez-ext.github.io/mrs-ui/](https://mgomez-ext.github.io/mrs-ui/)
- **📋 Component Roadmap**: [COMPONENT_ROADMAP.md](COMPONENT_ROADMAP.md)
- **📝 Changelog**: [CHANGELOG.md](CHANGELOG.md)
- **🚀 Deployment Guide**: [DEPLOYMENT.md](DEPLOYMENT.md)

## 🧪 Testing

Comprehensive test coverage with 931 tests across 46 test suites:

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# Type checking
npm run type-check
```

## 🏗️ Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook  # Opens at http://localhost:6006

# Build the library
npm run build

# Build Storybook
npm run build-storybook

# Linting & Formatting
npm run lint
npm run lint:fix
npm run format
```

## 📊 Package Stats

- **Package Size**: 230.06 kB (gzipped)
- **Tree-shakeable**: ✅ Import only what you need
- **Zero Runtime Dependencies**: All peer dependencies only
- **TypeScript**: Full type definitions included
- **Module Formats**: ESM + CommonJS
- **Tests**: 789 passing (100% pass rate)

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for details.

## 📝 License

UNLICENSED - This project is proprietary software.

## 🔗 Links

- [npm Package](https://www.npmjs.com/package/@mrs-uisystem/ui-v6)
- [Storybook Documentation](https://mgomez-ext.github.io/mrs-ui/)
- [GitHub Repository](https://github.com/madersystem/mrs-ui-v6)
- [Issue Tracker](https://github.com/madersystem/mrs-ui-v6/issues)
- [Figma Design](https://figma.com/design/ESNP5KunFotGObfcuXZ9Op/MRS---Material-UI-v.6.5.0)

## 🎯 Roadmap

See [COMPONENT_ROADMAP.md](COMPONENT_ROADMAP.md) for detailed implementation plan.

### Completed Phases:
- ✅ **Phase 1** (v0.1.0): Layout Foundation - Box, Stack, Grid, Container
- ✅ **Phase 2** (v0.1.0): User Interaction - Dialog, Snackbar, Menu, Tabs
- ✅ **Phase 3** (v0.2.0): Data Display - Table, Pagination, Stepper

### Coming in Future Releases:
- **Phase 4** (v0.3.0): Navigation & Layouts - AppBar, Drawer, BottomNavigation
- **Phase 5** (v0.4.0): Enhanced Inputs - Rating, SpeedDial, Timeline
- And more...

## 💻 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📦 Package Contents

```
@mrs-uisystem/ui-v6/
├── dist/
│   ├── index.js          # CommonJS bundle
│   ├── index.mjs         # ES Module bundle
│   ├── index.d.ts        # TypeScript definitions
│   ├── theme/
│   │   └── theme.js      # Theme configuration
│   └── components/       # Individual components
└── README.md
```

## ⚙️ TypeScript Support

Full TypeScript support with comprehensive type definitions:

```tsx
import type { ButtonProps, StackProps, GridProps } from '@mrs-uisystem/ui-v6';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## 🌟 Version 0.2.0 Highlights

- ✨ **39 production-ready components** (28 atoms + 11 molecules)
- ✨ **Phase 3 Complete**: Table, Pagination, Stepper components
- ✨ **Data Display Suite**: Comprehensive table system with 7 sub-components
- ✨ **789 tests passing** (100% pass rate across 40 test suites)
- ✨ **Full TypeScript support** with strict mode
- ✨ **Storybook documentation** deployed at [https://mgomez-ext.github.io/mrs-ui/](https://mgomez-ext.github.io/mrs-ui/)
- ✨ **CI/CD pipeline** with GitHub Actions
- ✨ **Production ready** with GitHub Pages deployment

## 🚀 Quick Examples

### Form Layout

```tsx
import { Container, Stack, TextField, Button, FormControlLabel, Checkbox } from '@mrs-uisystem/ui-v6';

function LoginForm() {
  return (
    <Container maxWidth="sm">
      <Stack spacing={2}>
        <TextField label="Email" type="email" fullWidth />
        <TextField label="Password" type="password" fullWidth />
        <FormControlLabel control={<Checkbox />} label="Remember me" />
        <Button variant="contained" fullWidth>
          Sign In
        </Button>
      </Stack>
    </Container>
  );
}
```

### Responsive Grid

```tsx
import { Container, Grid, Card, CardContent, Typography } from '@mrs-uisystem/ui-v6';

function Dashboard() {
  return (
    <Container>
      <Grid container spacing={3}>
        {[1, 2, 3, 4].map((item) => (
          <Grid key={item} xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Metric {item}</Typography>
                <Typography variant="h4">1,234</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
```

---

**Made with ❤️ by the MRS Design System Team**
