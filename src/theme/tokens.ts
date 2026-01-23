/**
 * Design tokens exports
 * Re-exports from generated tokens (Style Dictionary)
 *
 * @version 0.12.0 - Migrated to 100% generated tokens
 * @deprecated Direct theme.json dependency removed - use generated tokens
 */

import {
  lightTokens,
  darkTokens,
  typographyTokens,
  shapeTokens,
  spacingArray,
} from './tokens-import';

/**
 * Color tokens (organized by light/dark mode)
 */
export const colors = {
  light: lightTokens.colors,
  dark: darkTokens.colors,
};

/**
 * Typography tokens
 * Includes font family, sizes, weights, and variant definitions
 */
export const typography = typographyTokens;

/**
 * Shape tokens (border radius values)
 */
export const shape = shapeTokens;

/**
 * Spacing scale (8px base grid system)
 * Array format: [0, 4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96]
 */
export const spacing = spacingArray;

/**
 * Component-specific tokens
 */
export const components = {
  light: lightTokens.components,
  dark: darkTokens.components,
};

/**
 * Full tokens object (for backwards compatibility)
 * @deprecated Use named exports (colors, typography, shape, etc.) instead
 */
export const tokens = {
  colorSchemes: {
    light: {
      palette: lightTokens.colors,
      _components: lightTokens.components,
    },
    dark: {
      palette: darkTokens.colors,
      _components: darkTokens.components,
    },
  },
  typography: typographyTokens,
  shape: shapeTokens,
  spacing: spacingArray,
};

/**
 * Type definitions for tokens
 */
export type ColorScheme = typeof lightTokens.colors;
export type ComponentTokens = typeof lightTokens.components;
export type TypographyScale = typeof typographyTokens;
export type ShapeTokens = typeof shapeTokens;
export type SpacingScale = typeof spacingArray;
