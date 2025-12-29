/**
 * Alert Component
 *
 * Implements the MRS Alert using design tokens from the theme.
 * Supports severity (error, warning, info, success) and variants (filled, outlined, standard),
 * optional title/description, optional leading icon, custom action, and close button.
 *
 * @figma https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=6595-48211
 * @see https://mui.com/material-ui/react-alert/
 */

/// <reference path="../../../types/theme.d.ts" />

import React from 'react';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MaterialSymbol } from '../../atoms/MaterialSymbol';
import type { AlertProps, AlertSeverity, AlertVariant } from './Alert.types';

type AlertColorTokens = {
  background: string;
  foreground: string;
  border?: string;
};

/**
 * Material Symbols icon names for each severity level
 * Icons use the same name for filled/outlined variants - fill prop controls appearance
 */
const severityIcons: Record<AlertSeverity, string> = {
  error: 'error',
  warning: 'error', // Material Symbols uses 'error' for warnings too
  info: 'info',
  success: 'check_circle',
};

/**
 * Returns token-based colors for a given severity and variant.
 */
function useAlertColors(severity: AlertSeverity, variant: AlertVariant): AlertColorTokens {
  const theme = useTheme();
  const tokens = theme.palette._components.alert[severity][variant];
  return tokens;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      severity = 'error',
      variant = 'filled',
      title,
      description,
      icon = true,
      close = false,
      onClose,
      action,
      sx,
      children,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();
    const tokenColors = useAlertColors(severity, variant);

    // Use theme.shape.md (8px) for consistent, moderate border radius
    // Note: theme.shape has custom tokens - sm(4), md(8), lg(12), xl(24), rounded(9999)
    // IMPORTANT: Must use string with 'px' suffix - numbers are multiplied by spacing (8*8=64px)
    const shapeWithTokens = theme.shape as { borderRadius: number; sm: number; md: number; lg: number; xl: number; rounded: number };
    const alertBorderRadius = `${shapeWithTokens.md}px`; // '8px' - explicit units prevent spacing multiplication

    // Debug: Log border radius in development
    // eslint-disable-next-line no-undef
    if (process.env.NODE_ENV === 'development') {
      console.log('[Alert] Using border radius:', alertBorderRadius, '(theme.shape.md)');
      console.log('[Alert] Available shape tokens (raw values):', {
        sm: shapeWithTokens.sm,
        md: shapeWithTokens.md,
        lg: shapeWithTokens.lg,
        xl: shapeWithTokens.xl,
        rounded: shapeWithTokens.rounded,
      });
      console.log('[Alert] Note: Values converted to px strings to prevent MUI spacing multiplication');
    }

    // Determine icon name and fill based on severity and variant
    const iconName = severityIcons[severity];
    const iconFill = variant === 'filled' ? 1 : 0;

    const startIcon =
      icon === false
        ? false
        : React.isValidElement(icon)
        ? icon
        : iconName && (
            <MaterialSymbol
              icon={iconName}
              fill={iconFill}
              size="small"
              color={tokenColors.foreground}
            />
          );

    const closeButton =
      close && (
        <IconButton
          size="small"
          aria-label="close"
          onClick={onClose}
          sx={{ color: tokenColors.foreground }}
        >
          <MaterialSymbol
            icon="close"
            size="small"
            color={tokenColors.foreground}
          />
        </IconButton>
      );

    const actionContent = action ? (
      closeButton ? (
        <Stack direction="row" spacing={1} alignItems="center">
          {action}
          {closeButton}
        </Stack>
      ) : (
        action
      )
    ) : (
      closeButton || undefined
    );

    return (
      <MuiAlert
        ref={ref}
        severity={severity}
        variant="standard"
        icon={startIcon}
        action={actionContent}
        sx={{
          borderRadius: alertBorderRadius,
          backgroundColor: tokenColors.background,
          color: tokenColors.foreground,
          alignItems: 'flex-justify',
          py: 1.5,
          px: 2,
          ...(variant === 'outlined' && {
            border: `1px solid ${tokenColors.border}`,
          }),
          '& .MuiAlert-icon': {
            color: tokenColors.foreground,
            padding: 1,
            marginRight: theme.spacing(1),
            mt: 0.25,
          },
          '& .MuiAlert-message': {
            padding: 1,
            width: '100%',
          },
          '& .MuiAlert-action': {
            padding: 0,
            marginLeft: theme.spacing(2),
            alignItems: 'flex-justify',
          },
          ...sx,
        }}
        {...props}
      >
        <Stack spacing={0.25}>
          {title && (
            <Typography
              variant="body1"
              fontWeight={theme.typography.fontWeightMedium}
              lineHeight={1.5}
            >
              {title}
            </Typography>
          )}
          {description && (
            <Typography variant="body2" lineHeight={1.43}>
              {description}
            </Typography>
          )}
          {children}
        </Stack>
      </MuiAlert>
    );
  }
);

Alert.displayName = 'Alert';

export default Alert;

