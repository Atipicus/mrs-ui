/**
 * Theme Helper Types
 *
 * Helper types and functions for working with the extended MUI theme.
 * Provides type-safe access to custom theme properties.
 */

import type { Theme } from '@mui/material/styles';

/**
 * Extended Shape interface with custom border radius values
 */
export interface ExtendedShape {
  borderRadius: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  rounded: number;
}

/**
 * Get typed shape object from theme
 *
 * @param theme - MUI theme object
 * @returns Shape object with custom border radius values
 *
 * @example
 * ```tsx
 * const theme = useTheme();
 * const shape = getThemeShape(theme);
 * console.log(shape.rounded); // 9999
 * ```
 */
export const getThemeShape = (theme: Theme): ExtendedShape => {
  return theme.shape as unknown as ExtendedShape;
};

/**
 * Extended Palette Color interface with state tokens
 */
export interface ExtendedPaletteColor {
  main: string;
  dark: string;
  light: string;
  contrastText: string;
  _states?: {
    hover?: string;
    selected?: string;
    focus?: string;
    focusVisible?: string;
  };
}

/**
 * Get typed palette color with states
 *
 * @param color - Palette color object
 * @returns Color object with state tokens
 *
 * @example
 * ```tsx
 * const theme = useTheme();
 * const primaryColor = getExtendedColor(theme.palette.primary);
 * console.log(primaryColor._states?.hover); // hover color
 * ```
 */
export const getExtendedColor = (color: any): ExtendedPaletteColor => {
  return color as ExtendedPaletteColor;
};
