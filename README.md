# MRS UI Design System

[![npm version](https://badge.fury.io/js/@atipicus%2Fmrs-ui.svg)](https://www.npmjs.com/package/@atipicus/mrs-ui)
[![License](https://img.shields.io/badge/License-UNLICENSED-red.svg)](LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/Atipicus/mrs-ui/ci.yml?branch=main)](https://github.com/Atipicus/mrs-ui/actions)

A comprehensive Material-UI v6.5 based design system with **54 production-ready components** built with React, TypeScript, and modern best practices.

> **Version 0.8.0** - Complete Design Token System, Dark Mode, Animation Tokens & Micro-Interactions Library. 54 production-ready components with comprehensive theming. 1,182 tests passing (56 test suites).

## 🚀 Features

- ✅ **54 Production Components** (31 atoms + 23 molecules)
- ✅ **TypeScript Support** - Full type safety with strict mode
- ✅ **Material-UI v6.5** - Latest Material-UI features
- ✅ **MUI X Date Pickers** - Advanced date/time selection components
- ✅ **Tree-shakeable** - Import only what you need
- ✅ **Comprehensive Testing** - 1,182 tests with 100% pass rate (56 test suites)
- ✅ **Storybook Documentation** - Interactive component explorer
- ✅ **Dual Module Support** - ESM and CommonJS
- ✅ **Design Token Hub** - Multi-format exports (CSS, SCSS, TypeScript, JSON)
- ✅ **Figma Sync** - Automated token synchronization from Figma
- ✅ **Theme Integration** - Customizable design tokens with DTCG format
- ✅ **Responsive** - Mobile-first design approach
- ✅ **Accessible** - WCAG compliant components

## 📦 Installation

```bash
npm install @atipicus/mrs-ui
```

### Peer Dependencies

```bash
npm install @mui/material @emotion/react @emotion/styled react react-dom
```

### Additional Dependencies (Included)

For date/time pickers, the package includes:
- `@mui/x-date-pickers` - Advanced date and time picker components
- `dayjs` - Date library for pickers
- `@mui/lab` - Timeline component

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

**Material Symbols** (recommended for MaterialSymbol component):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
/>
```

## 🎯 Quick Start

```tsx
import { Button, TextField, Container, Stack } from '@atipicus/mrs-ui';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '@atipicus/mrs-ui/theme';

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

### Using Material Symbols Icons

```tsx
import { MaterialSymbol, Button, Stack } from '@atipicus/mrs-ui';

function IconExample() {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {/* Basic icon */}
      <MaterialSymbol icon="home" />

      {/* Customized icon */}
      <MaterialSymbol
        icon="favorite"
        size="large"
        fill={1}
        color="error.main"
      />

      {/* Icon with button */}
      <Button
        startIcon={<MaterialSymbol icon="add" size="medium" />}
        variant="contained"
      >
        Add Item
      </Button>

      {/* Clickable icon */}
      <MaterialSymbol
        icon="settings"
        onClick={() => console.log('Settings clicked')}
        ariaLabel="Settings"
      />
    </Stack>
  );
}
```

**Material Symbols Features:**
- **Variable Font Technology**: Dynamic weight (100-700), fill (0-1), grade (-50 to 200)
- **MRS Design System Defaults**: weight=300 (Light), fill=0 (Outlined), grade=100 (Lighter), rounded variant
- **Full Customization**: Size, color, accessibility attributes
- **Performance**: ~50KB variable font vs ~600KB icon components
- **Browse Icons**: [fonts.google.com/icons](https://fonts.google.com/icons)

## 📚 Components (54 Total)

### Atoms (31)
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
- **MaterialSymbol** - Google Material Symbols icons with variable font (NEW ✨)
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

### Molecules (23)
- **Alert** - Contextual feedback messages
- **AppBar** - Top application navigation bar (Phase 4)
- **Autocomplete** - Search with suggestions
- **BottomNavigation** - Bottom mobile navigation (Phase 5)
- **ButtonGroup** - Group of related buttons
- **DatePicker** - Date selection with calendar UI (Phase 6 ✨)
- **DateTimePicker** - Combined date and time selection (Phase 6 ✨)
- **Dialog** - Modal dialogs (Phase 2)
- **Drawer** - Side navigation panel (Phase 4)
- **DrawerNavigation** - Navigation component for Drawer (Phase 4)
- **ExpandableNavItem** - Collapsible navigation item (Phase 4)
- **List** - List of items
- **ListItem** - Individual list item
- **Menu** - Dropdown menu (Phase 2)
- **Pagination** - Page navigation (Phase 3)
- **Rating** - Star rating input (Phase 5)
- **Snackbar** - Temporary notifications (Phase 2)
- **SpeedDial** - Floating action button with actions (Phase 5)
- **Stepper** - Multi-step process indicator (Phase 3)
- **Table** - Data table with 7 sub-components (Phase 3)
- **Tabs** - Tabbed navigation (Phase 2)
- **Timeline** - Event timeline with 7 sub-components (Phase 5 ✨)
- **TimePicker** - Time selection with 12h/24h support (Phase 6 ✨)

## 🎨 Theme Customization

```tsx
import { createTheme, ThemeProvider } from '@mui/material';
import { theme as baseTheme } from '@atipicus/mrs-ui/theme';

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
import { colors, shape, typography } from '@atipicus/mrs-ui/theme';

const primary = colors.light.primary.main; // #00686f (teal)
const borderRadius = shape.rounded; // 9999px (pill shape)
const heading = typography.h1.fontFamily; // Nunito
```

## 🎨 Design Token Hub

The MRS Design System includes a comprehensive **Token Hub** that manages design tokens and exports them to multiple formats.

### Multi-Format Exports

Design tokens are available in **4 formats**:

#### 1️⃣ CSS Variables
```css
@import '@atipicus/mrs-ui/tokens/generated/css/tokens.css';

.my-button {
  background: var(--mrs-semantic-color-primary-main);
  border-radius: var(--mrs-component-button-border-radius);
}
```

#### 2️⃣ SCSS Variables
```scss
@import '@atipicus/mrs-ui/tokens/generated/scss/tokens';

.my-button {
  background: $mrs-semantic-color-primary-main;
  border-radius: $mrs-component-button-border-radius;
}
```

#### 3️⃣ TypeScript Exports
```typescript
import {
  SemanticColorPrimaryMain,
  ComponentButtonBorderRadius,
} from '@atipicus/mrs-ui/tokens';

const MyButton = () => (
  <button style={{ 
    backgroundColor: SemanticColorPrimaryMain,
    borderRadius: ComponentButtonBorderRadius,
  }}>
    Click me
  </button>
);
```

#### 4️⃣ JSON Exports
```javascript
// For scripts, tools, or Figma sync
import tokens from '@atipicus/mrs-ui/tokens/generated/json/tokens-flat.json';
console.log(tokens['semantic-color-primary-main']); // "#00686f"
```

### Figma Synchronization

The system includes **automated Figma token synchronization** via GitHub Actions:

**Features**:
- ✅ Scheduled sync (every Monday at 9 AM UTC)
- ✅ Manual sync via GitHub Actions UI  
- ✅ Automatic Pull Request creation
- ✅ Token validation and diff reports
- ✅ DTCG (Design Token Community Group) format compliant

**Setup Guide**: See [`.github/FIGMA_SYNC_SETUP.md`](.github/FIGMA_SYNC_SETUP.md) for configuration instructions.

### Token Structure

```
Design Tokens (DTCG Format)
├── primitives/       → Brand colors, typography, spacing, radius
├── semantic/         → Primary, secondary, error, warning, info, success
└── component/        → Button, alert, input, card overrides
         ↓
   Style Dictionary Build
         ↓
   Multi-Format Exports
   ├── CSS Variables (tokens.css)
   ├── SCSS Variables (tokens.scss)
   ├── TypeScript (tokens.js, tokens.d.ts)
   └── JSON (flat, nested, figma-tokens)
```

### Token Management Commands

```bash
# Build all token formats
npm run tokens:build

# Watch mode (auto-rebuild on changes)
npm run tokens:watch

# Figma sync (requires GitHub Actions setup)
npm run tokens:sync:pull      # Figma → Code
npm run tokens:sync:push      # Code → Figma
npm run tokens:sync:dry-run   # Preview changes
```

**Full Documentation**: [`src/tokens/README.md`](src/tokens/README.md)

## 📖 Documentation

- **📘 Storybook**: [https://atipicus.github.io/mrs-ui/](https://atipicus.github.io/mrs-ui/)
- **📋 Component Roadmap**: [COMPONENT_ROADMAP.md](COMPONENT_ROADMAP.md)
- **📝 Changelog**: [CHANGELOG.md](CHANGELOG.md)
- **🚀 Deployment Guide**: [DEPLOYMENT.md](DEPLOYMENT.md)

## 🧪 Testing

Comprehensive test coverage with 1,182 tests across 56 test suites:

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

### Using Date Pickers

```tsx
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  LocalizationProvider
} from '@atipicus/mrs-ui';
import dayjs from 'dayjs';

function DatePickerExample() {
  const [date, setDate] = React.useState(dayjs());

  return (
    <LocalizationProvider>
      <Stack spacing={2}>
        {/* Date Picker */}
        <DatePicker
          label="Birth Date"
          value={date}
          onChange={(newValue) => setDate(newValue)}
        />

        {/* Time Picker */}
        <TimePicker
          label="Meeting Time"
          value={date}
          onChange={(newValue) => setDate(newValue)}
        />

        {/* Date Time Picker */}
        <DateTimePicker
          label="Event Date & Time"
          value={date}
          onChange={(newValue) => setDate(newValue)}
        />
      </Stack>
    </LocalizationProvider>
  );
}
```

### Using Timeline

```tsx
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent
} from '@atipicus/mrs-ui';

function TimelineExample() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Design Review</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Development</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
```

## 📊 Package Stats

- **Package Size**: 383.69 kB (gzipped)
- **Tree-shakeable**: ✅ Import only what you need
- **Zero Runtime Dependencies**: All peer dependencies only
- **TypeScript**: Full type definitions included
- **Module Formats**: ESM + CommonJS
- **Tests**: 1,182 passing (100% pass rate, 56 test suites)

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for details.

## 📝 License

UNLICENSED - This project is proprietary software.

## 🔗 Links

- [npm Package](https://www.npmjs.com/package/@atipicus/mrs-ui)
- [Storybook Documentation](https://atipicus.github.io/mrs-ui/)
- [GitHub Repository](https://github.com/Atipicus/mrs-ui)
- [Issue Tracker](https://github.com/Atipicus/mrs-ui/issues)
- [Figma Design](https://figma.com/design/ESNP5KunFotGObfcuXZ9Op/MRS---Material-UI-v.6.5.0)

## 🎯 Roadmap

See [COMPONENT_ROADMAP.md](COMPONENT_ROADMAP.md) for detailed implementation plan.

### Completed Phases:
- ✅ **Phase 1** (v0.1.0): Layout Foundation - Box, Stack, Grid, Container
- ✅ **Phase 2** (v0.1.0): User Interaction - Dialog, Snackbar, Menu, Tabs
- ✅ **Phase 3** (v0.2.0): Data Display - Table, Pagination, Stepper
- ✅ **Phase 4** (v0.3.0): Navigation & Layouts - AppBar, Toolbar, AccountStack, Drawer
- ✅ **Phase 5** (v0.5.0): Enhanced Inputs - Timeline, BottomNavigation, Rating, SpeedDial
- ✅ **Phase 6** (v0.6.0): Advanced Components - DatePicker, TimePicker, DateTimePicker

### Upcoming Features:
- Additional form components
- Enhanced data visualization
- More navigation patterns
- And more...

## 💻 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📦 Package Contents

```
@atipicus/mrs-ui/
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
import type { ButtonProps, StackProps, GridProps } from '@atipicus/mrs-ui';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## 🌟 Version 0.8.0 Highlights

- ✨ **Complete Design Token System**: Multi-format exports (CSS, SCSS, TypeScript, JSON)
- ✨ **Dark Mode Support**: Full Material Design 3 compliant dark theme with WCAG AA compliance
- ✨ **Animation & Transition Tokens**: Material Motion system with 30+ component-specific transitions
- ✨ **Micro-Interactions Library**: 5 animation hooks + 3 effect components for rich UX
- ✨ **Figma Synchronization**: Automated bidirectional token sync with GitHub Actions
- ✨ **54 production-ready components** (31 atoms + 23 molecules)
- ✨ **1,182 tests passing** (100% pass rate across 56 test suites)
- ✨ **Full TypeScript support** with strict mode
- ✨ **Storybook documentation** deployed at [https://atipicus.github.io/mrs-ui/](https://atipicus.github.io/mrs-ui/)
- ✨ **CI/CD pipeline** with optimized GitHub Actions
- ✨ **Production ready** with comprehensive testing and quality checks

## 🚀 Quick Examples

### Form Layout

```tsx
import { Container, Stack, TextField, Button, FormControlLabel, Checkbox } from '@atipicus/mrs-ui';

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
import { Container, Grid, Card, CardContent, Typography } from '@atipicus/mrs-ui';

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
**Last Updated**: January 5, 2026
