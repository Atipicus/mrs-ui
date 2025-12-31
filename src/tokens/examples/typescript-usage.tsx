/**
 * MRS Design System - TypeScript/React Usage Examples
 * 
 * This file demonstrates how to use design tokens in React components
 * with full TypeScript type safety.
 */

import React from 'react';
import {
  // Semantic tokens
  SemanticColorPrimaryMain,
  SemanticColorPrimaryDark,
  SemanticColorPrimaryContrastText,
  SemanticColorSecondaryMain,
  SemanticColorTextPrimary,
  SemanticColorBackgroundDefault,
  
  // Component tokens
  ComponentButtonBorderRadius,
  ComponentButtonMediumHeight,
  ComponentButtonFontWeight,
  ComponentAlertBorderRadius,
  ComponentAlertErrorFilledBackground,
  ComponentAlertErrorFilledForeground,
  ComponentCardBorderRadius,
  
  // Primitive tokens
  PrimitivesSpacing2,
  PrimitivesSpacing3,
  PrimitivesSpacing4,
  PrimitivesTypographyFontFamilyStack,
  PrimitivesTypographyFontSizeMd,
  PrimitivesTypographyFontSizeXl,
  PrimitivesTypographyFontWeightSemibold,
} from '../generated/ts/tokens';

// ============================================
// Example 1: Styled Component Pattern
// ============================================
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary',
  onClick 
}) => {
  const backgroundColor = variant === 'primary' 
    ? SemanticColorPrimaryMain 
    : SemanticColorSecondaryMain;

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor,
        color: SemanticColorPrimaryContrastText,
        border: 'none',
        borderRadius: ComponentButtonBorderRadius,
        height: ComponentButtonMediumHeight,
        padding: `0 ${PrimitivesSpacing3}`,
        fontWeight: ComponentButtonFontWeight,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = SemanticColorPrimaryDark;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = backgroundColor;
      }}
    >
      {children}
    </button>
  );
};

// ============================================
// Example 2: Alert Component
// ============================================
interface AlertProps {
  children: React.ReactNode;
  severity: 'error' | 'warning' | 'info' | 'success';
}

export const Alert: React.FC<AlertProps> = ({ children, severity }) => {
  // Map severity to token values
  const styles = {
    error: {
      background: ComponentAlertErrorFilledBackground,
      foreground: ComponentAlertErrorFilledForeground,
    },
    warning: {
      background: '#dfa00a', // You can still use raw values if needed
      foreground: '#000000de',
    },
    info: {
      background: '#2481b8',
      foreground: '#ffffff',
    },
    success: {
      background: '#2e7d32',
      foreground: '#ffffff',
    },
  };

  return (
    <div
      style={{
        backgroundColor: styles[severity].background,
        color: styles[severity].foreground,
        padding: `${PrimitivesSpacing2} ${PrimitivesSpacing3}`,
        borderRadius: ComponentAlertBorderRadius,
        marginBottom: PrimitivesSpacing3,
        display: 'flex',
        alignItems: 'center',
        gap: PrimitivesSpacing2,
      }}
    >
      {children}
    </div>
  );
};

// ============================================
// Example 3: Card Component
// ============================================
interface CardProps {
  children: React.ReactNode;
  title?: string;
}

export const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: ComponentCardBorderRadius,
        padding: PrimitivesSpacing4,
        marginBottom: PrimitivesSpacing4,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      {title && (
        <h2
          style={{
            fontSize: PrimitivesTypographyFontSizeXl,
            fontWeight: PrimitivesTypographyFontWeightSemibold,
            marginTop: 0,
            marginBottom: PrimitivesSpacing3,
            color: SemanticColorTextPrimary,
          }}
        >
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

// ============================================
// Example 4: Using Tokens in MUI Theme
// ============================================
import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
  palette: {
    primary: {
      main: SemanticColorPrimaryMain,
      dark: SemanticColorPrimaryDark,
      contrastText: SemanticColorPrimaryContrastText,
    },
  },
  typography: {
    fontFamily: PrimitivesTypographyFontFamilyStack,
    fontSize: parseInt(PrimitivesTypographyFontSizeMd),
  },
  shape: {
    borderRadius: parseInt(ComponentButtonBorderRadius),
  },
  spacing: (factor: number) => `${parseInt(PrimitivesSpacing2) * factor / 16}rem`,
});

// ============================================
// Example 5: Token-based Style Object
// ============================================
export const tokenStyles = {
  page: {
    fontFamily: PrimitivesTypographyFontFamilyStack,
    color: SemanticColorTextPrimary,
    backgroundColor: SemanticColorBackgroundDefault,
    padding: PrimitivesSpacing4,
  },
  heading: {
    fontSize: PrimitivesTypographyFontSizeXl,
    fontWeight: PrimitivesTypographyFontWeightSemibold,
    color: SemanticColorPrimaryMain,
    marginBottom: PrimitivesSpacing3,
  },
  button: {
    primary: {
      backgroundColor: SemanticColorPrimaryMain,
      color: SemanticColorPrimaryContrastText,
      borderRadius: ComponentButtonBorderRadius,
      padding: `0 ${PrimitivesSpacing3}`,
    },
  },
};

// ============================================
// Example 6: Demo Page Component
// ============================================
export const TokenDemoPage: React.FC = () => {
  return (
    <div style={tokenStyles.page}>
      <h1 style={tokenStyles.heading}>
        🎨 MRS Design System - TypeScript Tokens Example
      </h1>

      <Card title="Buttons">
        <Button variant="primary" onClick={() => alert('Primary clicked!')}>
          Primary Button
        </Button>
        {' '}
        <Button variant="secondary">
          Secondary Button
        </Button>
      </Card>

      <Card title="Alerts">
        <Alert severity="error">
          ❌ Error: This is an error message using tokens
        </Alert>
        <Alert severity="warning">
          ⚠️ Warning: This is a warning message
        </Alert>
        <Alert severity="info">
          ℹ️ Info: This is an info message
        </Alert>
        <Alert severity="success">
          ✅ Success: This is a success message
        </Alert>
      </Card>

      <Card title="Benefits">
        <ul>
          <li>✅ Full TypeScript type safety</li>
          <li>✅ Autocomplete in IDE</li>
          <li>✅ Tree-shaking (only import what you use)</li>
          <li>✅ Consistent with design system</li>
          <li>✅ Easy to refactor (rename tokens)</li>
        </ul>
      </Card>
    </div>
  );
};

// ============================================
// Example 7: Custom Hook for Theme Tokens
// ============================================
import { useMemo } from 'react';

export const useTokens = () => {
  return useMemo(() => ({
    colors: {
      primary: SemanticColorPrimaryMain,
      primaryDark: SemanticColorPrimaryDark,
      text: SemanticColorTextPrimary,
      background: SemanticColorBackgroundDefault,
    },
    spacing: {
      sm: PrimitivesSpacing2,
      md: PrimitivesSpacing3,
      lg: PrimitivesSpacing4,
    },
    typography: {
      fontFamily: PrimitivesTypographyFontFamilyStack,
      fontSize: {
        md: PrimitivesTypographyFontSizeMd,
        xl: PrimitivesTypographyFontSizeXl,
      },
      fontWeight: {
        semibold: PrimitivesTypographyFontWeightSemibold,
      },
    },
    components: {
      button: {
        borderRadius: ComponentButtonBorderRadius,
        height: ComponentButtonMediumHeight,
      },
      alert: {
        borderRadius: ComponentAlertBorderRadius,
      },
      card: {
        borderRadius: ComponentCardBorderRadius,
      },
    },
  }), []);
};

// Usage:
export const MyComponent: React.FC = () => {
  const tokens = useTokens();
  
  return (
    <div style={{ 
      backgroundColor: tokens.colors.background,
      padding: tokens.spacing.lg,
    }}>
      <h1 style={{ color: tokens.colors.primary }}>
        Hello from MyComponent
      </h1>
    </div>
  );
};

