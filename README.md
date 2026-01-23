# MRS UI Design System

[![npm version](https://badge.fury.io/js/@atipicus%2Fmrs-ui.svg)](https://www.npmjs.com/package/@atipicus/mrs-ui)

Material-UI v6.5 based design system with 54 production-ready React components, TypeScript support, and comprehensive testing.

## 📖 Documentation

**[Complete Documentation →](docs/)**

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
