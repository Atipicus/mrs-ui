# BottomNavigation Component

Complete implementation of the BottomNavigation component for the MRS Design System.

## Overview

The BottomNavigation component provides mobile-friendly navigation bars that allow movement between primary destinations in an app. This implementation wraps Material-UI's BottomNavigation with MRS Design System theme tokens and includes full support for Material Symbols.

## Component Status

✅ **Complete Implementation**

- ✅ Main component (`BottomNavigation.tsx`)
- ✅ Sub-component (`BottomNavigationAction.tsx`)
- ✅ TypeScript types (`BottomNavigation.types.ts`)
- ✅ Comprehensive tests (`BottomNavigation.test.tsx`) - 14 tests passing
- ✅ Storybook stories (`BottomNavigation.stories.tsx`) - 12 stories
- ✅ Documentation (`BottomNavigation.mdx`)
- ✅ Proper exports (`index.ts`)
- ✅ Material Symbols integration
- ✅ Accessibility support

## Files

```
BottomNavigation/
├── BottomNavigation.tsx              # Main container component
├── BottomNavigationAction.tsx        # Navigation action item
├── BottomNavigation.types.ts         # TypeScript interfaces
├── BottomNavigation.test.tsx         # Unit tests (14 tests)
├── BottomNavigation.stories.tsx      # Storybook stories (12 stories)
├── BottomNavigation.mdx              # Comprehensive documentation
├── index.ts                          # Component exports
└── README.md                         # This file
```

## Installation

The component is automatically exported from the main package:

```tsx
import { BottomNavigation, BottomNavigationAction } from '@mrs/ui';
```

## Basic Usage

### With MUI Icons

```tsx
import { BottomNavigation, BottomNavigationAction } from '@mrs/ui';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationIcon from '@mui/icons-material/LocationOn';

function MyNavigation() {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationIcon />} />
    </BottomNavigation>
  );
}
```

### With Material Symbols (Recommended)

```tsx
import { BottomNavigation, BottomNavigationAction, MaterialSymbol } from '@mrs/ui';

function MyNavigation() {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
    >
      <BottomNavigationAction
        label="Home"
        icon={<MaterialSymbol icon="home" fill={value === 0 ? 1 : 0} />}
      />
      <BottomNavigationAction
        label="Favorites"
        icon={<MaterialSymbol icon="favorite" fill={value === 1 ? 1 : 0} />}
      />
      <BottomNavigationAction
        label="Nearby"
        icon={<MaterialSymbol icon="location_on" fill={value === 2 ? 1 : 0} />}
      />
    </BottomNavigation>
  );
}
```

## Features

### Core Features

- ✅ **Controlled & Uncontrolled modes**: Flexible state management
- ✅ **showLabels prop**: Toggle label visibility
- ✅ **Value mapping**: Support for string or number values
- ✅ **Icon support**: Compatible with MUI icons and Material Symbols
- ✅ **Theme integration**: Uses MRS Design System tokens
- ✅ **TypeScript**: Full type safety with proper interfaces
- ✅ **Ref forwarding**: Supports React.forwardRef
- ✅ **Accessibility**: Proper ARIA attributes and keyboard navigation

### Material Symbols Support

- ✅ Outlined and filled variants
- ✅ Customizable weight (100-700)
- ✅ Dynamic fill states based on selection
- ✅ Responsive icon sizing
- ✅ Color customization

## Storybook Stories

The component includes 12 comprehensive stories:

1. **Default** - Basic usage with labels shown
2. **WithoutLabels** - Labels appear only on selection
3. **FixedAtBottom** - Mobile-style fixed positioning
4. **FourActions** - Example with 4 navigation items
5. **WithValueMapping** - String-based value mapping
6. **Uncontrolled** - Uncontrolled component example
7. **FullWidthMobile** - Full mobile app simulation
8. **IconsOnly** - No labels shown at all
9. **WithMaterialSymbols** - Modern Material Symbols integration
10. **MaterialSymbolsFilled** - Filled icon variants
11. **MaterialSymbolsCustom** - Custom icon weights
12. **MobileWithMaterialSymbols** - Complete mobile example with dynamic fills

## Testing

All tests passing: **14/14** ✅

### Test Coverage

- ✅ Rendering with default props
- ✅ Multiple navigation actions
- ✅ showLabels prop behavior
- ✅ Controlled value (number)
- ✅ Controlled value (string)
- ✅ onChange handler
- ✅ BottomNavigationAction with label and icon
- ✅ Custom value prop
- ✅ showLabel prop
- ✅ Icon-only rendering
- ✅ Semantic HTML structure
- ✅ Button roles for accessibility
- ✅ Display names for debugging

Run tests:

```bash
npm test -- BottomNavigation
```

## API Reference

### BottomNavigation Props

Extends `MuiBottomNavigationProps`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `any` | - | Currently selected action value |
| `onChange` | `(event: SyntheticEvent, value: any) => void` | - | Callback when value changes |
| `showLabels` | `boolean` | `false` | Show labels for all actions |
| `children` | `ReactNode` | - | BottomNavigationAction components |
| `sx` | `SxProps` | - | MUI sx prop for styling |

### BottomNavigationAction Props

Extends `MuiBottomNavigationActionProps`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `ReactNode` | - | Icon element (MUI Icon or MaterialSymbol) |
| `label` | `ReactNode` | - | Label text or element |
| `value` | `any` | - | Custom value (defaults to index) |
| `showLabel` | `boolean` | `false` | Always show this action's label |
| `disabled` | `boolean` | `false` | Disable this action |
| `sx` | `SxProps` | - | MUI sx prop for styling |

## Design Guidelines

### When to Use

- Mobile application primary navigation
- 3-5 top-level destinations of equal importance
- Navigation that needs to be accessible from anywhere
- Apps following Material Design guidelines

### When Not to Use

- More than 5 navigation items (use Drawer instead)
- Desktop-first applications (use AppBar or Drawer)
- Hierarchical navigation (use Breadcrumbs or back buttons)
- Sequential workflows (use Stepper)

### Best Practices

1. **Limit Items**: Use 3-5 items for optimal usability
2. **Equal Importance**: All items should have similar hierarchy
3. **Clear Labels**: Use concise, descriptive labels
4. **Appropriate Icons**: Choose icons that clearly represent destinations
5. **Material Symbols**: Prefer Material Symbols over legacy MUI icons
6. **Dynamic Fills**: Use fill states to indicate active navigation
7. **Accessibility**: Always provide labels (even if hidden visually)

## Accessibility

- ✅ Semantic HTML with proper button elements
- ✅ Keyboard navigation (Tab, Enter, Space)
- ✅ ARIA labels for screen readers
- ✅ Focus indicators
- ✅ Color contrast compliance

### Recommendations

```tsx
// Good: Labels provide context
<BottomNavigation showLabels>
  <BottomNavigationAction label="Home" icon={<MaterialSymbol icon="home" />} />
</BottomNavigation>

// Better: Explicit ARIA labels for icons
<BottomNavigationAction
  label="Home"
  icon={<MaterialSymbol icon="home" ariaLabel="Navigate to home" />}
/>
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS 12+)
- ✅ Chrome Mobile (Android)

## Related Components

- **AppBar**: Top navigation for desktop applications
- **Drawer**: Side navigation drawer
- **Tabs**: Content organization tabs
- **Stepper**: Multi-step process navigation
- **MaterialSymbol**: Modern icon system

## Examples

### Fixed Mobile Navigation

```tsx
import { Paper } from '@mui/material';

<Paper
  sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
  elevation={3}
>
  <BottomNavigation showLabels value={value} onChange={handleChange}>
    <BottomNavigationAction label="Home" icon={<MaterialSymbol icon="home" />} />
    <BottomNavigationAction label="Search" icon={<MaterialSymbol icon="search" />} />
    <BottomNavigationAction label="Profile" icon={<MaterialSymbol icon="person" />} />
  </BottomNavigation>
</Paper>
```

### With React Router

```tsx
import { Link } from 'react-router-dom';

<BottomNavigation value={value} onChange={handleChange}>
  <BottomNavigationAction
    label="Home"
    icon={<MaterialSymbol icon="home" />}
    component={Link}
    to="/home"
  />
  <BottomNavigationAction
    label="Profile"
    icon={<MaterialSymbol icon="person" />}
    component={Link}
    to="/profile"
  />
</BottomNavigation>
```

### Responsive Navigation

```tsx
import { useMediaQuery, useTheme } from '@mui/material';

const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('md'));

return (
  <>
    {isMobile ? (
      <BottomNavigation>
        {/* Mobile navigation */}
      </BottomNavigation>
    ) : (
      <AppBar>
        {/* Desktop navigation */}
      </AppBar>
    )}
  </>
);
```

## Migration from Legacy Icons

Replace MUI icons with Material Symbols for better consistency:

```tsx
// Before (MUI Icons)
import HomeIcon from '@mui/icons-material/Home';
<BottomNavigationAction icon={<HomeIcon />} />

// After (Material Symbols)
import { MaterialSymbol } from '@mrs/ui';
<BottomNavigationAction icon={<MaterialSymbol icon="home" />} />
```

## Resources

- [Storybook Documentation](http://localhost:6006/?path=/docs/components-molecules-bottomnavigation)
- [Material-UI BottomNavigation Docs](https://mui.com/material-ui/react-bottom-navigation/)
- [Material Design Guidelines](https://m3.material.io/components/navigation-bar)
- [Material Symbols Library](https://fonts.google.com/icons)

## Contributing

This component follows the MRS Design System component template. To contribute:

1. Ensure all tests pass: `npm test -- BottomNavigation`
2. Add stories for new variants
3. Update documentation
4. Follow accessibility guidelines
5. Maintain TypeScript type safety

## Version History

- **v0.4.0** - Enhanced with Material Symbols support and comprehensive documentation
- **v0.3.0** - Initial implementation with MUI icons
