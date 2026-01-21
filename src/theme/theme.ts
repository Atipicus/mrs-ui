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

import { lightTokens, darkTokens } from './tokens-import';

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
  const modeTokens = mode === 'light' ? lightTokens : darkTokens;
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
      variants: [
        // Primary variant - Main action button
        {
          props: { variant: 'primary' },
          style: {
            color: '#FFFFFF',
            borderRadius: '100px',
            background: '#00828A',
            fontWeight: '600',
            maxHeight: '48px',
            '&:hover': {
              background: '#004D4D',
              color: '#FFFFFF',
            },
            '&:focus': {
              background: '#006B6B',
              color: '#FFFFFF',
              boxShadow: 'inset 0 0 0 2px #00828A',
            },
            '&:active': {
              background: '#008A8A',
              color: '#FFFFFF',
              boxShadow: 'inset 0 0 0 2px #008A8A',
            },
            '&:disabled': {
              backgroundColor: '#D5D5D5',
              color: '#9E9E9E',
              border: '2px solid #BABAB9',
            },
          },
        },
        {
          props: { variant: 'primary', size: 'medium' },
          style: {
            maxHeight: '40px',
            fontSize: 18,
          },
        },
        {
          props: { variant: 'primary', size: 'small' },
          style: {
            maxHeight: '24px',
            fontSize: 12,
          },
        },
        // Secondary variant - Secondary action button
        {
          props: { variant: 'secondary' },
          style: {
            borderRadius: '100px',
            background: '#FFFFFF',
            color: '#006B6B',
            fontWeight: '600',
            maxHeight: '48px',
            border: '2px solid #1AA3A3',
            '&:hover': {
              background: '#CCE680',
            },
            '&:focus': {
              background: '#008A8A',
              color: '#FFFFFF',
              border: '2px solid #99CC00',
            },
            '&:active': {
              background: '#B3E0E0',
              color: '#004D4D',
              border: '2px solid #1AA3A3',
            },
            '&:disabled': {
              background: '#F1F1F1',
              color: '#9E9E9D',
              border: '2px solid #BABAB9',
            },
          },
        },
        {
          props: { variant: 'secondary', size: 'medium' },
          style: {
            maxHeight: '40px',
            fontSize: 18,
          },
        },
        {
          props: { variant: 'secondary', size: 'small' },
          style: {
            maxHeight: '24px',
            fontSize: 12,
          },
        },
        // TextCustom variant - Text button with white background
        {
          props: { variant: 'textCustom' },
          style: {
            borderRadius: '100px',
            background: '#FFFFFF',
            color: '#0F0F0F',
            maxHeight: '32px',
            '&:hover': {
              color: '#006B6B',
              background: '#FFFFFF',
            },
            '&:focus': {
              boxShadow: 'inset 0 0 0 1px #99CC00',
            },
            '&:active': {
              background: '#CCE680',
              color: '#006B6B',
            },
            '&:disabled': {
              color: '#9E9E9D',
            },
          },
        },
        {
          props: { variant: 'textCustom', size: 'medium' },
          style: {
            maxHeight: '40px',
            fontSize: 18,
          },
        },
        {
          props: { variant: 'textCustom', size: 'small' },
          style: {
            maxHeight: '24px',
            fontSize: 12,
          },
        },
        // TextTransparent variant - Transparent text button
        {
          props: { variant: 'textTransparent' },
          style: {
            borderRadius: '100px',
            background: 'transparent',
            color: '#0F0F0F',
            maxHeight: '32px',
            '&:hover': {
              color: '#006B6B',
              background: '#F6F6F6',
            },
            '&:focus': {
              boxShadow: 'inset 0 0 0 1px #99CC00',
            },
            '&:active': {
              background: '#CCE680',
              color: '#006B6B',
            },
            '&:disabled': {
              color: '#9E9E9D',
            },
          },
        },
        {
          props: { variant: 'textTransparent', size: 'medium' },
          style: {
            maxHeight: '40px',
            fontSize: 18,
          },
        },
        {
          props: { variant: 'textTransparent', size: 'small' },
          style: {
            maxHeight: '24px',
            fontSize: 12,
          },
        },
        // AlternativePrimary variant - Alternative primary button with green background
        {
          props: { variant: 'alternativePrimary' },
          style: {
            color: '#000000',
            borderRadius: '100px',
            background: '#99CC00',
            fontWeight: '600',
            maxHeight: '48px',
            paddingLeft: '24px',
            paddingRight: '24px',
            marginTop: '12px',
            marginBottom: '12px',
            '&:hover': {
              background: '#8AB800',
              color: '#000000',
            },
            '&:focus': {
              background: '#99CC00',
              color: '#000000',
              boxShadow: 'inset 0 0 0 2px #99CC00',
            },
            '&:active': {
              background: '#7AA300',
              color: '#000000',
              boxShadow: 'inset 0 0 0 2px #99CC00',
            },
            '&:disabled': {
              backgroundColor: '#99CC00',
              color: '#000000',
              opacity: 0.5,
            },
          },
        },
        {
          props: { variant: 'alternativePrimary', size: 'medium' },
          style: {
            maxHeight: '40px',
            fontSize: 18,
          },
        },
        {
          props: { variant: 'alternativePrimary', size: 'small' },
          style: {
            maxHeight: '24px',
            fontSize: 12,
          },
        },
      ],
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
          borderColor: modeTokens.components.input.outlined.enabledBorder,
        },
      },
    },

    MuiFilledInput: {
      styleOverrides: {
        root: {
          fontFamily: typography.fontFamily,
          backgroundColor: modeTokens.components.input.filled.enabledFill,
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
            borderBottomColor: modeTokens.components.input.standard.enabledBorder,
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
          borderColor: modeTokens.components.chip.defaultEnabledBorder,
        },
        deleteIcon: {
          color: modeTokens.components.chip.defaultCloseFill,
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
          backgroundColor: modeTokens.components.alert.error.filled.background,
          color: modeTokens.components.alert.error.filled.foreground,
        },
        filledWarning: {
          backgroundColor: modeTokens.components.alert.warning.filled.background,
          color: modeTokens.components.alert.warning.filled.foreground,
        },
        filledInfo: {
          backgroundColor: modeTokens.components.alert.info.filled.background,
          color: modeTokens.components.alert.info.filled.foreground,
        },
        filledSuccess: {
          backgroundColor: modeTokens.components.alert.success.filled.background,
          color: modeTokens.components.alert.success.filled.foreground,
        },
        // Outlined variants
        outlinedError: {
          backgroundColor: modeTokens.components.alert.error.outlined.background,
          color: modeTokens.components.alert.error.outlined.foreground,
          borderColor: modeTokens.components.alert.error.outlined.border,
        },
        outlinedWarning: {
          backgroundColor: modeTokens.components.alert.warning.outlined.background,
          color: modeTokens.components.alert.warning.outlined.foreground,
          borderColor: modeTokens.components.alert.warning.outlined.border,
        },
        outlinedInfo: {
          backgroundColor: modeTokens.components.alert.info.outlined.background,
          color: modeTokens.components.alert.info.outlined.foreground,
          borderColor: modeTokens.components.alert.info.outlined.border,
        },
        outlinedSuccess: {
          backgroundColor: modeTokens.components.alert.success.outlined.background,
          color: modeTokens.components.alert.success.outlined.foreground,
          borderColor: modeTokens.components.alert.success.outlined.border,
        },
        // Standard variants
        standardError: {
          backgroundColor: modeTokens.components.alert.error.standard.background,
          color: modeTokens.components.alert.error.standard.foreground,
        },
        standardWarning: {
          backgroundColor: modeTokens.components.alert.warning.standard.background,
          color: modeTokens.components.alert.warning.standard.foreground,
        },
        standardInfo: {
          backgroundColor: modeTokens.components.alert.info.standard.background,
          color: modeTokens.components.alert.info.standard.foreground,
        },
        standardSuccess: {
          backgroundColor: modeTokens.components.alert.success.standard.background,
          color: modeTokens.components.alert.success.standard.foreground,
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
          backgroundColor: modeTokens.components.paper.elevation0,
        },
        elevation1: {
          backgroundColor: modeTokens.components.paper.elevation1,
        },
        elevation2: {
          backgroundColor: modeTokens.components.paper.elevation2,
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
    primary: lightTokens.colors.primary,
    secondary: lightTokens.colors.secondary,
    error: lightTokens.colors.error,
    warning: lightTokens.colors.warning,
    info: lightTokens.colors.info,
    success: lightTokens.colors.success,
    background: lightTokens.colors.background,
    text: lightTokens.colors.text,
    action: lightTokens.colors.action,
    divider: lightTokens.colors.divider,
    _components: lightTokens.components,
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
    primary: darkTokens.colors.primary,
    secondary: darkTokens.colors.secondary,
    error: darkTokens.colors.error,
    warning: darkTokens.colors.warning,
    info: darkTokens.colors.info,
    success: darkTokens.colors.success,
    background: darkTokens.colors.background,
    text: darkTokens.colors.text,
    action: darkTokens.colors.action,
    divider: darkTokens.colors.divider,
    _components: darkTokens.components,
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
