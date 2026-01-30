# MRS UI Design System

[![npm version](https://badge.fury.io/js/@atipicus%2Fmrs-ui.svg)](https://www.npmjs.com/package/@atipicus/mrs-ui)

A cromprehensive design system Based on Material UI, with 53 production ready React components and TypeScript support...

## 📖 Documentation

- **[Complete Documentation](docs/)** - All docs, guides, and references
- **[Getting Started](docs/START-HERE.md)** - New to MRS UI? Start here
- **[Component Library](docs/components/)** - Browse all 53 components
- **[API Reference](docs/API-REFERENCE.md)** - Complete API documentation
- **[Best Practices](docs/BEST-PRACTICES.md)** - Development guidelines
- **[Migration Guide](docs/migration-guides/)** - Migrating from Material-UI
- **[Theme & Tokens](docs/architecture/THEME_ARCHITECTURE.md)** - Theming system

## 📦 Installation

```bash
npm install @atipicus/mrs-ui
```

**Peer Dependencies:**
```bash
npm install @mui/material @emotion/react @emotion/styled react react-dom
```

## 🎯 Quick Start

```tsx
import { Button, TextField, ThemeProvider, theme } from '@atipicus/mrs-ui';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TextField label="Email" />
      <Button variant="contained">Sign In</Button>
    </ThemeProvider>
  );
}
```

## 🔗 Links

- [npm Package](https://www.npmjs.com/package/@atipicus/mrs-ui)
- [GitHub Repository](https://github.com/Atipicus/mrs-ui)

---

**Version**: 0.12.0  
**License**: UNLICENSED
