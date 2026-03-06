/**
 * Global type augmentation for MRS Design System
 * Extends Material-UI theme with custom tokens
 *
 * This file extends the default Material-UI theme interface
 * to include our custom design tokens.
 */

import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    _components: {
      alert: {
        error: {
          filled: { background: string; foreground: string };
          outlined: { background: string; foreground: string; border: string };
          standard: { background: string; foreground: string };
        };
        warning: {
          filled: { background: string; foreground: string };
          outlined: { background: string; foreground: string; border: string };
          standard: { background: string; foreground: string };
        };
        info: {
          filled: { background: string; foreground: string };
          outlined: { background: string; foreground: string; border: string };
          standard: { background: string; foreground: string };
        };
        success: {
          filled: { background: string; foreground: string };
          outlined: { background: string; foreground: string; border: string };
          standard: { background: string; foreground: string };
        };
      };
      rating: {
        activeFill: string;
        enabledBorder: string;
      };
      chip: {
        defaultCloseFill: string;
        defaultEnabledBorder: string;
      };
      input: {
        standard: { enabledBorder: string };
        filled: { enabledFill: string };
        outlined: { enabledBorder: string };
      };
      table: {
        border: string;
      };
      paper: {
        elevation0: string;
        elevation1: string;
        elevation2: string;
      };
    };
    primitives: {
      brand: {
        veronesMain: string;
        lima: string;
      };
      neutral: {
        white: string;
        black: string;
        gray: {
          50: string;
          100: string;
          200: string;
          300: string;
          400: string;
          500: string;
          600: string;
          700: string;
          800: string;
          900: string;
        };
      };
      status: {
        error: {
          50: string;
          100: string;
          500: string;
          600: string;
          700: string;
        };
        warning: {
          50: string;
          500: string;
          600: string;
          700: string;
        };
        info: {
          50: string;
          100: string;
          500: string;
          600: string;
          700: string;
          800: string;
        };
        success: {
          50: string;
          100: string;
          500: string;
          600: string;
          700: string;
          800: string;
        };
      };
      alpha: {
        black: {
          4: string;
          8: string;
          12: string;
          23: string;
          26: string;
          38: string;
          42: string;
          56: string;
          60: string;
          87: string;
        };
        white: {
          8: string;
          12: string;
          16: string;
          23: string;
          26: string;
          30: string;
          42: string;
          50: string;
          70: string;
          100: string;
        };
        primary: {
          8: string;
          12: string;
          16: string;
          25: string;
          '24-dark': string;
          '32-dark': string;
          '40-dark': string;
        };
      };
      special: {
        rating: string;
      };
    };
    semantic: {
      primary: {
        main: string;
        dark: string;
        light: string;
        contrastText: string;
      };
      secondary: {
        main: string;
        dark: string;
        light: string;
        contrastText: string;
      };
      error: {
        main: string;
        dark: string;
        light: string;
        contrastText: string;
      };
      warning: {
        main: string;
        dark: string;
        light: string;
        contrastText: string;
      };
      info: {
        main: string;
        dark: string;
        light: string;
        contrastText: string;
      };
      success: {
        main: string;
        dark: string;
        light: string;
        contrastText: string;
      };
      background: {
        default: string;
        paper: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      action: {
        active: string;
        hover: string;
        selected: string;
        disabled: string;
        disabledBackground: string;
      };
      divider: string;
    };
  }

  interface PaletteOptions {
    _components?: {
      alert?: {
        error?: {
          filled?: { background: string; foreground: string };
          outlined?: { background: string; foreground: string; border: string };
          standard?: { background: string; foreground: string };
        };
        warning?: {
          filled?: { background: string; foreground: string };
          outlined?: { background: string; foreground: string; border: string };
          standard?: { background: string; foreground: string };
        };
        info?: {
          filled?: { background: string; foreground: string };
          outlined?: { background: string; foreground: string; border: string };
          standard?: { background: string; foreground: string };
        };
        success?: {
          filled?: { background: string; foreground: string };
          outlined?: { background: string; foreground: string; border: string };
          standard?: { background: string; foreground: string };
        };
      };
      rating?: {
        activeFill: string;
        enabledBorder: string;
      };
      chip?: {
        defaultCloseFill: string;
        defaultEnabledBorder: string;
      };
      input?: {
        standard?: { enabledBorder: string };
        filled?: { enabledFill: string };
        outlined?: { enabledBorder: string };
      };
      table?: {
        border: string;
      };
      paper?: {
        elevation0: string;
        elevation1: string;
        elevation2: string;
      };
    };
    primitives?: {
      brand: {
        veronesMain: string;
        lima: string;
      };
      neutral: {
        white: string;
        black: string;
        gray: {
          50: string;
          100: string;
          200: string;
          300: string;
          400: string;
          500: string;
          600: string;
          700: string;
          800: string;
          900: string;
        };
      };
      status: {
        error: {
          50: string;
          100: string;
          500: string;
          600: string;
          700: string;
        };
        warning: {
          50: string;
          500: string;
          600: string;
          700: string;
        };
        info: {
          50: string;
          100: string;
          500: string;
          600: string;
          700: string;
          800: string;
        };
        success: {
          50: string;
          100: string;
          500: string;
          600: string;
          700: string;
          800: string;
        };
      };
      alpha: {
        black: {
          4: string;
          8: string;
          12: string;
          23: string;
          26: string;
          38: string;
          42: string;
          56: string;
          60: string;
          87: string;
        };
        white: {
          8: string;
          12: string;
          16: string;
          23: string;
          26: string;
          30: string;
          42: string;
          50: string;
          70: string;
          100: string;
        };
        primary: {
          8: string;
          12: string;
          16: string;
          25: string;
          '24-dark': string;
          '32-dark': string;
          '40-dark': string;
        };
      };
      special: {
        rating: string;
      };
    };
    semantic?: {
      primary: {
        main: string;
        dark: string;
        light: string;
        contrastText: string;
      };
      secondary: {
        main: string;
        dark: string;
        light: string;
        contrastText: string;
      };
      error: {
        main: string;
        dark: string;
        light: string;
        contrastText: string;
      };
      warning: {
        main: string;
        dark: string;
        light: string;
        contrastText: string;
      };
      info: {
        main: string;
        dark: string;
        light: string;
        contrastText: string;
      };
      success: {
        main: string;
        dark: string;
        light: string;
        contrastText: string;
      };
      background: {
        default: string;
        paper: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      action: {
        active: string;
        hover: string;
        selected: string;
        disabled: string;
        disabledBackground: string;
      };
      divider: string;
    };
  }

  interface PaletteColor {
    _states?: {
      hover?: string;
      selected?: string;
      focus?: string;
      focusVisible?: string;
    };
  }

  interface SimplePaletteColorOptions {
    _states?: {
      hover?: string;
      selected?: string;
      focus?: string;
      focusVisible?: string;
    };
  }

  interface Shape {
    borderRadius: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    rounded: number;
  }

  interface ShapeOptions {
    borderRadius?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    rounded?: number;
  }

  interface TypographyVariants {
    fontWeightSemiBold: number;
  }

  interface TypographyVariantsOptions {
    fontWeightSemiBold?: number;
  }
}

// Make this file a module
export {};
