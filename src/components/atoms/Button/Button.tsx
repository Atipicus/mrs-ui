/**
 * Button Component
 *
 * Primary action component for the MRS Design System.
 * Wraps Material-UI Button with custom theme tokens.
 *
 * @figma https://figma.com/design/ESNP5KunFotGObfcuXZ9Op/MRS---Material-UI-v.7.2.0
 * @see {@link https://mui.com/material-ui/react-button/}
 */

import React from 'react';
import MuiButton from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import type { ButtonProps } from './Button.types';

/**
 * Button component
 *
 * @param props - Button component props
 * @returns Button component
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, sx, variant, ...props }, ref) => {
    const theme = useTheme();

    // Custom variants use borderRadius: '100px' (defined in theme variants)
    // Standard variants use theme shape tokens
    const isCustomVariant = variant === 'primary' || 
                           variant === 'secondary' || 
                           variant === 'textCustom' || 
                           variant === 'textTransparent' || 
                           variant === 'alternativePrimary';

    return (
      <MuiButton
        ref={ref}
        variant={variant}
        {...props}
        sx={{
          // Use theme tokens for consistent styling
          textTransform: 'none', // Override MUI default uppercase
          // Custom variants already have borderRadius in theme variants
          // Standard variants use rounded shape token
          ...(!isCustomVariant && {
            borderRadius: (theme.shape as any).rounded,
          }),
          fontWeight: theme.typography.fontWeightSemiBold,
          // Allow custom sx to override defaults
          ...sx,
        }}
      >
        {children}
      </MuiButton>
    );
  }
);

Button.displayName = 'Button';
