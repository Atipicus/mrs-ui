/**
 * Style Compositions - Reusable style patterns
 *
 * This module provides composable style patterns that are used across
 * multiple components to reduce duplication and improve consistency.
 *
 * Each composition is a function that returns style objects compatible
 * with MUI's sx prop.
 *
 * @example
 * ```tsx
 * // In theme.ts
 * MuiButton: {
 *   styleOverrides: {
 *     root: {
 *       ...styleCompositions.button.base(),
 *     },
 *     sizeSmall: {
 *       ...styleCompositions.button.sizes.small,
 *     },
 *   },
 * }
 * ```
 */

import type { CSSObject, SxProps, Theme } from '@mui/material/styles';
import { typographyTokens, shapeTokens } from './tokens-import';

/**
 * Style composition factory for creating reusable patterns
 */
export const styleCompositions = {
  /**
   * Button style compositions
   * Used by: MuiButton, MuiFab, MuiToggleButton
   */
  button: {
    /**
     * Base button styles
     */
    base: (): CSSObject => ({
      fontWeight: typographyTokens.fontWeightSemiBold,
      textTransform: 'none',
      borderRadius: shapeTokens.md,
      transition: 'all 0.2s ease',
    }),

    /**
     * Button size variants
     */
    sizes: {
      small: {
        fontSize: '0.8125rem',
        padding: '4px 10px',
      },
      medium: {
        fontSize: '0.875rem',
        padding: '6px 16px',
      },
      large: {
        fontSize: '1rem',
        padding: '8px 22px',
      },
    },

    /**
     * Button state styles
     */
    states: {
      disabled: (): SxProps<Theme> => ({
        opacity: 0.5,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      }),
    },
  },

  /**
   * Input style compositions
   * Used by: MuiTextField, MuiOutlinedInput, MuiFilledInput, MuiInput
   */
  input: {
    /**
     * Base input styles
     */
    base: (): CSSObject => ({
      borderRadius: shapeTokens.md,
      transition: 'all 0.2s ease',
    }),

    /**
     * Input size variants
     */
    sizes: {
      small: {
        fontSize: '0.8125rem',
        padding: '6px 10px',
      },
      medium: {
        fontSize: '0.875rem',
        padding: '8px 12px',
      },
      large: {
        fontSize: '1rem',
        padding: '10px 14px',
      },
    },

    /**
     * Input state styles
     */
    states: {
      disabled: (theme: Theme): SxProps<Theme> => ({
        backgroundColor: theme.palette.action.disabledBackground,
        cursor: 'not-allowed',
      }),
      error: (theme: Theme): SxProps<Theme> => ({
        borderColor: theme.palette.error.main,
        color: theme.palette.error.main,
      }),
      focused: (theme: Theme): SxProps<Theme> => ({
        borderColor: theme.palette.primary.main,
        outline: `2px solid ${theme.palette.primary.main}`,
      }),
    },
  },

  /**
   * Surface style compositions
   * Used by: MuiCard, MuiPaper, MuiDialog
   */
  surface: {
    /**
     * Base surface styles
     */
    base: (theme: Theme): SxProps<Theme> => ({
      borderRadius: shapeTokens.lg,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
    }),

    /**
     * Surface elevation variants
     */
    elevations: {
      none: { boxShadow: 'none' },
      low: { boxShadow: (theme: Theme) => theme.shadows?.[1] },
      medium: { boxShadow: (theme: Theme) => theme.shadows?.[4] },
      high: { boxShadow: (theme: Theme) => theme.shadows?.[8] },
    },
  },

  /**
   * List item style compositions
   * Used by: MuiListItem, MuiListItemButton
   */
  listItem: {
    /**
     * Base list item styles
     */
    base: (): CSSObject => ({
      borderRadius: shapeTokens.sm,
      transition: 'all 0.2s ease',
    }),

    /**
     * List item state styles
     */
    states: {
      selected: (theme: Theme): SxProps<Theme> => ({
        backgroundColor: theme.palette.action.selected,
        fontWeight: typographyTokens.fontWeightSemiBold,
      }),
      hover: (theme: Theme): SxProps<Theme> => ({
        backgroundColor: theme.palette.action.hover,
      }),
      disabled: (): SxProps<Theme> => ({
        opacity: 0.5,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      }),
    },
  },

  /**
   * Chip style compositions
   * Used by: MuiChip
   */
  chip: {
    /**
     * Base chip styles
     */
    base: (): CSSObject => ({
      borderRadius: shapeTokens.rounded,
      fontWeight: typographyTokens.fontWeightMedium,
      transition: 'all 0.2s ease',
    }),

    /**
     * Chip size variants
     */
    sizes: {
      small: {
        fontSize: '0.75rem',
        padding: '4px 8px',
      },
      medium: {
        fontSize: '0.875rem',
        padding: '6px 12px',
      },
    },

    /**
     * Chip state styles
     */
    states: {
      disabled: (): SxProps<Theme> => ({
        opacity: 0.5,
        cursor: 'not-allowed',
      }),
    },
  },

  /**
   * Alert and feedback style compositions
   * Used by: MuiAlert, MuiSnackbar
   */
  feedback: {
    /**
     * Base feedback styles
     */
    base: (): SxProps<Theme> => ({
      borderRadius: shapeTokens.md,
      padding: '12px 16px',
      transition: 'all 0.2s ease',
    }),

    /**
     * Alert severity variants
     */
    variants: {
      success: (theme: Theme): SxProps<Theme> => ({
        backgroundColor: theme.palette.success.light,
        color: theme.palette.success.dark,
      }),
      warning: (theme: Theme): SxProps<Theme> => ({
        backgroundColor: theme.palette.warning.light,
        color: theme.palette.warning.dark,
      }),
      error: (theme: Theme): SxProps<Theme> => ({
        backgroundColor: theme.palette.error.light,
        color: theme.palette.error.dark,
      }),
      info: (theme: Theme): SxProps<Theme> => ({
        backgroundColor: theme.palette.info.light,
        color: theme.palette.info.dark,
      }),
    },
  },

  /**
   * Common state compositions
   * Used across multiple components
   */
  states: {
    /**
     * Focus state - applies consistent focus styling
     */
    focus: (theme: Theme): SxProps<Theme> => ({
      outline: `2px solid ${theme.palette.primary.main}`,
      outlineOffset: '2px',
    }),

    /**
     * Hover state - applies consistent hover styling
     */
    hover: (theme: Theme): SxProps<Theme> => ({
      backgroundColor: theme.palette.action.hover,
      transition: 'background-color 0.2s ease',
    }),

    /**
     * Active/selected state
     */
    active: (theme: Theme): SxProps<Theme> => ({
      backgroundColor: theme.palette.action.selected,
      fontWeight: typographyTokens.fontWeightSemiBold,
    }),

    /**
     * Disabled state - applies consistent disabled styling
     */
    disabled: (): SxProps<Theme> => ({
      opacity: 0.5,
      cursor: 'not-allowed',
      pointerEvents: 'none',
    }),

    /**
     * Loading state - subtle opacity reduction
     */
    loading: (): SxProps<Theme> => ({
      position: 'relative',
      pointerEvents: 'none',
      opacity: 0.7,
    }),
  },

  /**
   * Typography weight shortcuts
   */
  typography: {
    bold: { fontWeight: typographyTokens.fontWeightBold },
    semiBold: { fontWeight: typographyTokens.fontWeightSemiBold },
    medium: { fontWeight: typographyTokens.fontWeightMedium },
    regular: { fontWeight: typographyTokens.fontWeightRegular },
    light: { fontWeight: typographyTokens.fontWeightLight },
  },

  /**
   * Spacing shortcuts
   * Note: Use MUI spacing() function for responsive values
   */
  spacing: {
    compact: { padding: '8px 12px', gap: '8px' },
    normal: { padding: '12px 16px', gap: '12px' },
    comfortable: { padding: '16px 20px', gap: '16px' },
    spacious: { padding: '20px 24px', gap: '20px' },
  },

  /**
   * Border radius shortcuts
   */
  borderRadius: {
    sharp: { borderRadius: 0 },
    small: { borderRadius: shapeTokens.sm },
    medium: { borderRadius: shapeTokens.md },
    large: { borderRadius: shapeTokens.lg },
    rounded: { borderRadius: shapeTokens.rounded },
  },

  /**
   * Flexbox and layout compositions
   */
  layout: {
    /**
     * Flex row with centered items
     */
    flexRowCenter: (): SxProps<Theme> => ({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    }),

    /**
     * Flex column with centered items
     */
    flexColumnCenter: (): SxProps<Theme> => ({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }),

    /**
     * Full width container
     */
    fullWidth: (): SxProps<Theme> => ({
      width: '100%',
    }),

    /**
     * Responsive container
     */
    responsiveContainer: (): SxProps<Theme> => ({
      width: '100%',
      maxWidth: '100%',
    }),
  },
};

/**
 * Type export for style compositions
 */
export type StyleComposition = typeof styleCompositions;
