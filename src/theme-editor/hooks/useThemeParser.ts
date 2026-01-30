/**
 * useThemeParser Hook
 * Parses and extracts theme data from theme configuration
 *
 * This hook provides structured access to theme tokens and allows
 * tracking changes for real-time preview
 */

import { useState, useCallback, useMemo } from 'react';
import { lightTheme, darkTheme } from '../../theme';

export interface ColorToken {
  name: string;
  light: string;
  dark: string;
  description?: string;
}

export interface TypographyToken {
  variant: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  lineHeight?: string | number;
  letterSpacing?: string | number;
}

export interface SpacingToken {
  name: string;
  value: number | string;
}

export interface ShapeToken {
  name: string;
  value: number;
}

export interface ThemeParsed {
  colors: {
    light: Record<string, string>;
    dark: Record<string, string>;
  };
  typography: TypographyToken[];
  spacing: SpacingToken[];
  shape: ShapeToken[];
  mode: 'light' | 'dark';
}

/**
 * Extract colors from theme palette
 */
const extractColors = (lightT: any, darkT: any): ThemeParsed['colors'] => {
  const extractPalette = (theme: any): Record<string, string> => {
    const colors: Record<string, string> = {};

    // Primary colors
    if (theme.palette?.primary) {
      colors['primary.main'] = theme.palette.primary.main;
      colors['primary.light'] = theme.palette.primary.light;
      colors['primary.dark'] = theme.palette.primary.dark;
      colors['primary.contrastText'] = theme.palette.primary.contrastText;
    }

    // Secondary colors
    if (theme.palette?.secondary) {
      colors['secondary.main'] = theme.palette.secondary.main;
      colors['secondary.light'] = theme.palette.secondary.light;
      colors['secondary.dark'] = theme.palette.secondary.dark;
      colors['secondary.contrastText'] = theme.palette.secondary.contrastText;
    }

    // Error, Warning, Info, Success
    ['error', 'warning', 'info', 'success'].forEach((severity) => {
      if (theme.palette?.[severity]) {
        colors[`${severity}.main`] = theme.palette[severity].main;
        colors[`${severity}.light`] = theme.palette[severity].light;
        colors[`${severity}.dark`] = theme.palette[severity].dark;
        colors[`${severity}.contrastText`] = theme.palette[severity].contrastText;
      }
    });

    // Background and text
    if (theme.palette?.background) {
      colors['background.default'] = theme.palette.background.default;
      colors['background.paper'] = theme.palette.background.paper;
    }

    if (theme.palette?.text) {
      colors['text.primary'] = theme.palette.text.primary;
      colors['text.secondary'] = theme.palette.text.secondary;
      colors['text.disabled'] = theme.palette.text.disabled;
    }

    // Action colors
    if (theme.palette?.action) {
      colors['action.active'] = theme.palette.action.active;
      colors['action.hover'] = theme.palette.action.hover;
      colors['action.selected'] = theme.palette.action.selected;
      colors['action.disabled'] = theme.palette.action.disabled;
      colors['action.disabledBackground'] = theme.palette.action.disabledBackground;
    }

    if (theme.palette?.divider) {
      colors['divider'] = theme.palette.divider;
    }

    return colors;
  };

  return {
    light: extractPalette(lightT),
    dark: extractPalette(darkT),
  };
};

/**
 * Extract typography variants
 */
const extractTypography = (theme: any): TypographyToken[] => {
  const typography = theme.typography;
  if (!typography) return [];

  const variants = [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'body1', 'body2',
    'subtitle1', 'subtitle2',
    'button', 'caption', 'overline'
  ];

  return variants.map((variant) => {
    const typo = typography[variant] || {};
    return {
      variant,
      fontSize: typo.fontSize,
      fontWeight: typo.fontWeight,
      lineHeight: typo.lineHeight,
      letterSpacing: typo.letterSpacing,
    };
  });
};

/**
 * Extract spacing scale
 */
const extractSpacing = (theme: any): SpacingToken[] => {
  // MUI spacing function returns: base * multiplier
  // Base is typically 8px
  const spacingValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return spacingValues.map((factor) => {
    const value = typeof theme.spacing === 'function'
      ? theme.spacing(factor)
      : factor * 8; // Default 8px base unit

    return {
      name: `spacing(${factor})`,
      value: value,
    };
  });
};

/**
 * Extract shape/border-radius tokens
 */
const extractShape = (theme: any): ShapeToken[] => {
  const shape = theme.shape || {};

  return Object.entries(shape).map(([name, value]) => ({
    name,
    value: typeof value === 'number' ? value : 0,
  }));
};

export function useThemeParser() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [edits, setEdits] = useState<Partial<ThemeParsed>>({});

  const currentTheme = mode === 'light' ? lightTheme : darkTheme;

  // Parse theme data
  const parsedTheme: ThemeParsed = useMemo(() => {
    const colors = extractColors(lightTheme, darkTheme);
    const typography = extractTypography(currentTheme);
    const spacing = extractSpacing(currentTheme);
    const shape = extractShape(currentTheme);

    return {
      colors,
      typography,
      spacing,
      shape,
      mode,
    };
  }, [mode]);

  // Update color value
  const updateColor = useCallback((colorKey: string, newValue: string) => {
    setEdits((prev) => {
      const prevColors = prev.colors || { light: {}, dark: {} };
      return {
        ...prev,
        colors: {
          ...prevColors,
          [mode]: {
            ...(prevColors[mode] || {}),
            [colorKey]: newValue,
          },
        },
      };
    });
  }, [mode]);

  // Update typography value
  const updateTypography = useCallback((variant: string, property: string, value: any) => {
    setEdits((prev) => ({
      ...prev,
      typography: (prev.typography || parsedTheme.typography).map((typo) =>
        typo.variant === variant
          ? { ...typo, [property]: value }
          : typo
      ),
    }));
  }, [parsedTheme.typography]);

  // Update spacing value
  const updateSpacing = useCallback((spacingName: string, newValue: number) => {
    setEdits((prev) => ({
      ...prev,
      spacing: (prev.spacing || parsedTheme.spacing).map((space) =>
        space.name === spacingName
          ? { ...space, value: newValue }
          : space
      ),
    }));
  }, [parsedTheme.spacing]);

  // Update shape value
  const updateShape = useCallback((shapeName: string, newValue: number) => {
    setEdits((prev) => ({
      ...prev,
      shape: (prev.shape || parsedTheme.shape).map((s) =>
        s.name === shapeName
          ? { ...s, value: newValue }
          : s
      ),
    }));
  }, [parsedTheme.shape]);

  // Get current edited value or fallback to parsed
  const getColorValue = useCallback((colorKey: string): string => {
    return edits.colors?.[mode]?.[colorKey] ?? parsedTheme.colors[mode][colorKey] ?? '#000000';
  }, [edits, mode, parsedTheme]);

  const getTypographyValue = useCallback((variant: string, property: string): any => {
    const edited = edits.typography?.find((t) => t.variant === variant);
    if (edited && property in edited) {
      return (edited as any)[property];
    }
    const original = parsedTheme.typography.find((t) => t.variant === variant);
    return (original as any)?.[property];
  }, [edits.typography, parsedTheme.typography]);

  return {
    // Data
    parsedTheme: {
      ...parsedTheme,
      // Apply edits
      colors: {
        light: { ...parsedTheme.colors.light, ...edits.colors?.light },
        dark: { ...parsedTheme.colors.dark, ...edits.colors?.dark },
      },
      typography: edits.typography || parsedTheme.typography,
      spacing: edits.spacing || parsedTheme.spacing,
      shape: edits.shape || parsedTheme.shape,
    },
    // State
    mode,
    setMode,
    edits,
    // Mutations
    updateColor,
    updateTypography,
    updateSpacing,
    updateShape,
    // Getters
    getColorValue,
    getTypographyValue,
    // Reset
    resetEdits: () => setEdits({}),
  };
}
