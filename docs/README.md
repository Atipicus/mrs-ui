# Documentation Index

**MRS UI v6 Design System** - Additional documentation for developers

---

## 📚 Main Documentation

For primary documentation, see the root-level files:

- **[README.md](../README.md)** - Main package documentation, installation, usage
- **[CHANGELOG.md](../CHANGELOG.md)** - Version history and release notes
- **[DEPLOYMENT.md](../DEPLOYMENT.md)** - GitHub Pages deployment guide
- **[COMPONENT_ROADMAP.md](../COMPONENT_ROADMAP.md)** - Component development roadmap
- **[CONTRIBUTING.md](../CONTRIBUTING.md)** - Contribution guidelines
- **[PACKAGE_STATUS.md](../PACKAGE_STATUS.md)** - Current package status

---

## 📖 Additional Guides

### Setup & Configuration

- **[Fonts.md](guides/Fonts.md)** - Font setup and configuration guide
  - How to add Nunito font to your project
  - Material Symbols icon font setup
  - Font loading optimization

---

## 🧩 Component Documentation

The **[components/](components/)** directory contains detailed documentation for individual components:

- Quick reference for component APIs
- Usage examples and code snippets
- Design token references
- Props and variants

**Note**: For interactive examples and full prop tables, see the [Storybook documentation](https://mgomez-ext.github.io/mrs-ui/).

### Component Categories

**Atoms** (28 components):
- Avatar, Badge, Box, Button, Checkbox, Chip, CircularProgress, Container, Divider
- FormControlLabel, FormGroup, Grid, Icon, IconButton, LinearProgress, Link
- MenuItem, Paper, Radio, RadioGroup, Select, Skeleton, Slider, Stack
- Switch, TextField, Tooltip, Typography

**Molecules** (11 components):
- Alert, Autocomplete, ButtonGroup, Dialog, List, ListItem
- Menu, Pagination, Snackbar, Stepper, Table, Tabs

---

## 🔗 External Resources

- **Storybook**: [https://mgomez-ext.github.io/mrs-ui/](https://mgomez-ext.github.io/mrs-ui/)
- **npm Package**: [https://www.npmjs.com/package/@mrs-uisystem/ui-v6](https://www.npmjs.com/package/@mrs-uisystem/ui-v6)
- **GitHub**: [https://github.com/madersystem/mrs-ui-v6](https://github.com/madersystem/mrs-ui-v6)
- **Figma**: [MRS Material UI Design](https://figma.com/design/ESNP5KunFotGObfcuXZ9Op/MRS---Material-UI-v.6.5.0)

---

## 🚀 Quick Start Paths

### New to the Package?
1. Start with [README.md](../README.md) - Installation and basic usage
2. Check [Fonts.md](guides/Fonts.md) - Required font setup
3. Browse [Storybook](https://mgomez-ext.github.io/mrs-ui/) - Interactive examples

### Adding a Component?
1. Review [COMPONENT_ROADMAP.md](../COMPONENT_ROADMAP.md) - Planned components
2. Read [CONTRIBUTING.md](../CONTRIBUTING.md) - Contribution guidelines
3. Check [components/](components/) - Existing patterns

### Deploying Updates?
1. See [DEPLOYMENT.md](../DEPLOYMENT.md) - Deployment process
2. Check [PACKAGE_STATUS.md](../PACKAGE_STATUS.md) - Current status
3. Review [CHANGELOG.md](../CHANGELOG.md) - Version history

---

## 📦 Package Structure

```
mrs-ui-v6/
├── README.md                   # Main documentation
├── CHANGELOG.md                # Version history
├── DEPLOYMENT.md               # Deployment guide
├── COMPONENT_ROADMAP.md        # Roadmap
├── CONTRIBUTING.md             # Contribution guide
├── PACKAGE_STATUS.md           # Current status
├── docs/                       # This directory
│   ├── README.md              # You are here
│   ├── guides/
│   │   └── Fonts.md          # Font setup guide
│   └── components/            # Component docs
├── src/                        # Source code
│   ├── components/            # All components
│   ├── theme/                 # Theme configuration
│   └── index.ts               # Main entry
└── tests/                      # Test utilities
```

---

**Last Updated**: December 29, 2024
**Version**: 0.2.1
