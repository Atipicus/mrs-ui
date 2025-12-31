/**
 * MRS Design System Theme Configuration
 * Material-UI v6.5.0 theme with centralized component overrides
 *
 * This theme uses:
 * 1. Design tokens from theme.json (legacy, for backward compatibility)
 * 2. Component overrides for consistent styling across all components
 *
 * @see https://mui.com/material-ui/customization/theme-components/
 */

/// <reference path="../types/theme.d.ts" />

import type { Theme, ThemeOptions } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import themeTokens from '../../theme.json';

/**
 * Spacing function for MUI
 * Multiplies the base unit (8px) by the given factor
 */
const spacing = (factor: number): number => {
  const baseUnit = 8;
  return baseUnit * factor;
};

/**
 * Shared component overrides
 * These apply consistent styling across all components using theme tokens
 *
 * Benefits:
 * - Single place to manage component styles
 * - No need for sx prop overrides in individual components
 * - Consistent with MUI best practices
 */
const getComponentOverrides = (mode: 'light' | 'dark'): ThemeOptions['components'] => {
  const palette = themeTokens.colorSchemes[mode].palette;
  const shape = themeTokens.shape;
  const typography = themeTokens.typography;

  return {
    // =========================================================================
    // GLOBAL BASELINE
    // =========================================================================
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: typography.fontFamily,
        },
        // Apply Nunito font globally
        '*': {
          fontFamily: 'inherit',
        },
      },
    },

    // =========================================================================
    // BUTTONS
    // =========================================================================
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: shape.md,
          textTransform: 'none' as const,
          fontWeight: typography.fontWeightSemiBold,
          fontFamily: typography.fontFamily,
        },
        sizeSmall: {
          fontSize: '0.8125rem',
          padding: '4px 10px',
        },
        sizeMedium: {
          fontSize: '0.875rem',
          padding: '6px 16px',
        },
        sizeLarge: {
          fontSize: '1rem',
          padding: '8px 22px',
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    MuiButtonGroup: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: shape.md,
        },
      },
    },

    MuiFab: {
      styleOverrides: {
        root: {
          borderRadius: shape.rounded,
          textTransform: 'none' as const,
        },
      },
    },

    // =========================================================================
    // INPUTS
    // =========================================================================
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
          borderRadius: shape.sm,
        },
        notchedOutline: {
          borderColor: palette._components.input.outlined.enabledBorder,
        },
      },
    },

    MuiFilledInput: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
          backgroundColor: palette._components.input.filled.enabledFill,
          borderRadius: `${shape.sm}px ${shape.sm}px 0 0`,
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
        },
        underline: {
          '&:before': {
            borderBottomColor: palette._components.input.standard.enabledBorder,
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    // =========================================================================
    // SELECTION CONTROLS
    // =========================================================================
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: palette.primary.main,
          },
        },
      },
    },

    MuiRadio: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: palette.primary.main,
          },
        },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .MuiSwitch-switchBase.Mui-checked': {
            color: palette.primary.main,
          },
          '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            backgroundColor: palette.primary.main,
          },
        },
      },
    },

    // =========================================================================
    // CHIPS
    // =========================================================================
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
          borderRadius: shape.rounded,
        },
        outlined: {
          borderColor: palette._components.chip.defaultEnabledBorder,
        },
        deleteIcon: {
          color: palette._components.chip.defaultCloseFill,
        },
      },
    },

    // =========================================================================
    // ALERTS & FEEDBACK
    // =========================================================================
    MuiAlert: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
          borderRadius: `${shape.md}px`,
        },
        // Filled variants
        filledError: {
          backgroundColor: palette._components.alert.error.filled.background,
          color: palette._components.alert.error.filled.foreground,
        },
        filledWarning: {
          backgroundColor: palette._components.alert.warning.filled.background,
          color: palette._components.alert.warning.filled.foreground,
        },
        filledInfo: {
          backgroundColor: palette._components.alert.info.filled.background,
          color: palette._components.alert.info.filled.foreground,
        },
        filledSuccess: {
          backgroundColor: palette._components.alert.success.filled.background,
          color: palette._components.alert.success.filled.foreground,
        },
        // Outlined variants
        outlinedError: {
          backgroundColor: palette._components.alert.error.outlined.background,
          color: palette._components.alert.error.outlined.foreground,
          borderColor: palette._components.alert.error.outlined.border,
        },
        outlinedWarning: {
          backgroundColor: palette._components.alert.warning.outlined.background,
          color: palette._components.alert.warning.outlined.foreground,
          borderColor: palette._components.alert.warning.outlined.border,
        },
        outlinedInfo: {
          backgroundColor: palette._components.alert.info.outlined.background,
          color: palette._components.alert.info.outlined.foreground,
          borderColor: palette._components.alert.info.outlined.border,
        },
        outlinedSuccess: {
          backgroundColor: palette._components.alert.success.outlined.background,
          color: palette._components.alert.success.outlined.foreground,
          borderColor: palette._components.alert.success.outlined.border,
        },
        // Standard variants
        standardError: {
          backgroundColor: palette._components.alert.error.standard.background,
          color: palette._components.alert.error.standard.foreground,
        },
        standardWarning: {
          backgroundColor: palette._components.alert.warning.standard.background,
          color: palette._components.alert.warning.standard.foreground,
        },
        standardInfo: {
          backgroundColor: palette._components.alert.info.standard.background,
          color: palette._components.alert.info.standard.foreground,
        },
        standardSuccess: {
          backgroundColor: palette._components.alert.success.standard.background,
          color: palette._components.alert.success.standard.foreground,
        },
      },
    },

    MuiSnackbar: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    // =========================================================================
    // SURFACES
    // =========================================================================
    MuiPaper: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
        },
        rounded: {
          borderRadius: shape.md,
        },
        elevation0: {
          backgroundColor: palette._components.paper.elevation0,
        },
        elevation1: {
          backgroundColor: palette._components.paper.elevation1,
        },
        elevation2: {
          backgroundColor: palette._components.paper.elevation2,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: shape.lg,
          fontFamily: typography.fontFamily,
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: shape.lg,
          fontFamily: typography.fontFamily,
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    // =========================================================================
    // TABLES
    // =========================================================================
    MuiTable: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
          borderBottomColor: palette._components.table.border,
        },
        head: {
          fontWeight: typography.fontWeightMedium,
        },
      },
    },

    // =========================================================================
    // LISTS & MENUS
    // =========================================================================
    MuiList: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
          borderRadius: shape.sm,
          '&.Mui-selected': {
            backgroundColor: palette.primary._states.selected,
          },
          '&.Mui-selected:hover': {
            backgroundColor: palette.primary._states.hover,
          },
        },
      },
    },

    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontFamily: typography.fontFamily,
        },
        secondary: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: shape.md,
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    // =========================================================================
    // NAVIGATION
    // =========================================================================
    MuiTabs: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
          textTransform: 'none' as const,
        },
      },
    },

    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    MuiPagination: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    MuiStepper: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    // =========================================================================
    // TYPOGRAPHY
    // =========================================================================
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    // =========================================================================
    // DATA DISPLAY
    // =========================================================================
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    MuiBadge: {
      styleOverrides: {
        badge: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: palette.divider,
        },
      },
    },

    // =========================================================================
    // FORMS
    // =========================================================================
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
        },
      },
    },

    // =========================================================================
    // PROGRESS
    // =========================================================================
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: shape.sm,
        },
      },
    },
  };
};

/**
 * Light theme configuration
 */
export const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    ...themeTokens.colorSchemes.light.palette,
  },
  typography: {
    ...themeTokens.typography,
  },
  shape: {
    ...themeTokens.shape,
  },
  spacing,
  components: getComponentOverrides('light'),
});

/**
 * Dark theme configuration
 */
export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    ...themeTokens.colorSchemes.dark.palette,
  },
  typography: {
    ...themeTokens.typography,
  },
  shape: {
    ...themeTokens.shape,
  },
  spacing,
  components: getComponentOverrides('dark'),
});

/**
 * Default theme export (light mode)
 */
export const theme = lightTheme;

/**
 * Export both themes for theme switching
 */
export default {
  light: lightTheme,
  dark: darkTheme,
};
