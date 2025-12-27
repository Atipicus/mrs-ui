# MRS UI v6 Design System

[![npm version](https://badge.fury.io/js/@mrs-uisystem%2Fui-v6.svg)](https://www.npmjs.com/package/@mrs-uisystem/ui-v6)
[![License](https://img.shields.io/badge/License-UNLICENSED-red.svg)](LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/madersystem/mrs-ui-v6/ci.yml?branch=main)](https://github.com/madersystem/mrs-ui-v6/actions)

A comprehensive Material-UI v6.5 based design system with **33 production-ready components** built with React, TypeScript, and modern best practices.

> **Version 0.1.0** - First stable release with layout foundation, form controls, and essential UI components.

## 🚀 Features

- ✅ **33 Production Components** (28 atoms + 5 molecules)
- ✅ **TypeScript Support** - Full type safety with strict mode
- ✅ **Material-UI v6.5** - Latest Material-UI features
- ✅ **Tree-shakeable** - Import only what you need
- ✅ **Comprehensive Testing** - 621 tests with 100% pass rate
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

## 📚 Components (33 Total)

### Layout Foundation (4)
- **Box** - Fundamental layout container with sx prop
- **Stack** - Flexbox layout manager for spacing
- **Grid** - Responsive grid system (12-column)
- **Container** - Max-width wrapper for page content

### Form Controls (11)
- **Button** - Primary action buttons
- **Checkbox** - Binary selection input
- **FormControlLabel** - Labels for form controls
- **FormGroup** - Group multiple controls
- **Radio** - Single selection from group
- **RadioGroup** - Manage radio button groups
- **Select** - Dropdown selection menu
- **MenuItem** - Options for Select
- **Switch** - Toggle on/off
- **TextField** - Text input with variants
- **Slider** - Range selection slider

### Display Components (11)
- **Typography** - Text with theme variants
- **Avatar** - User profile pictures
- **Badge** - Status indicators and counts
- **Chip** - Compact tags and filters
- **Divider** - Visual content separator
- **Icon** - Icon display
- **IconButton** - Clickable icons
- **Link** - Accessible hyperlinks
- **Paper** - Elevated surface container
- **Skeleton** - Loading placeholders
- **Tooltip** - Contextual help popups

### Feedback (2)
- **CircularProgress** - Circular loading indicator
- **LinearProgress** - Linear loading bar

### Complex Components (5)
- **Accordion** - Expandable content panels
- **Alert** - Contextual feedback messages
- **Autocomplete** - Search with suggestions
- **Breadcrumbs** - Navigation hierarchy
- **Card** - Content container with header/actions

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

- **📘 Storybook**: Interactive component explorer (coming soon)
- **📋 Component Roadmap**: [COMPONENT_ROADMAP.md](COMPONENT_ROADMAP.md)
- **📝 Changelog**: [CHANGELOG.md](CHANGELOG.md)
- **🚀 Deployment Guide**: [DEPLOYMENT_READINESS.md](DEPLOYMENT_READINESS.md)

## 🧪 Testing

Comprehensive test coverage with 621 tests:

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

- **Package Size**: 199.67 kB (gzipped)
- **Tree-shakeable**: ✅ Import only what you need
- **Zero Runtime Dependencies**: All peer dependencies only
- **TypeScript**: Full type definitions included
- **Module Formats**: ESM + CommonJS

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for details.

## 📝 License

UNLICENSED - This project is proprietary software.

## 🔗 Links

- [npm Package](https://www.npmjs.com/package/@mrs-uisystem/ui-v6)
- [GitHub Repository](https://github.com/madersystem/mrs-ui-v6)
- [Issue Tracker](https://github.com/madersystem/mrs-ui-v6/issues)
- [Figma Design](https://figma.com/design/ESNP5KunFotGObfcuXZ9Op/MRS---Material-UI-v.6.5.0)

## 🎯 Roadmap

See [COMPONENT_ROADMAP.md](COMPONENT_ROADMAP.md) for detailed implementation plan.

### Coming in Future Releases:
- **Phase 2** (v0.2.0): Dialog, Snackbar, Menu, Tabs
- **Phase 3** (v0.3.0): Table with sorting/pagination, Stepper
- **Phase 4** (v0.4.0): AppBar, Drawer, BottomNavigation
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

## 🌟 Version 0.1.0 Highlights

- ✨ **33 production-ready components**
- ✨ **Complete layout foundation** (Box, Stack, Grid, Container)
- ✨ **Comprehensive form controls** (11 components)
- ✨ **621 tests passing** (100% pass rate)
- ✨ **Full TypeScript support**
- ✨ **Storybook documentation**
- ✨ **CI/CD pipeline** with GitHub Actions
- ✨ **Deployment ready** (Vercel, Netlify, GitHub Pages)

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
