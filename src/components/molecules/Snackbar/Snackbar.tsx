/**
 * Snackbar Component
 * @package @mrs/ui
 *
 * Temporary notification message shown at the bottom or top of the screen.
 * Provides brief feedback about an operation through a message at the bottom of the screen.
 *
 * @example
 * ```tsx
 * <Snackbar
 *   open={open}
 *   autoHideDuration={6000}
 *   onClose={handleClose}
 *   message="Item successfully saved"
 * />
 * ```
 *
 * @example With severity
 * ```tsx
 * <Snackbar
 *   open={open}
 *   onClose={handleClose}
 *   severity="success"
 * >
 *   Item successfully saved!
 * </Snackbar>
 * ```
 */

import React from 'react';
import MuiSnackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import { MaterialSymbol } from '../../atoms/MaterialSymbol';
import type { SnackbarProps } from './Snackbar.types';

export const Snackbar = React.forwardRef<HTMLDivElement, SnackbarProps>(
  (
    {
      open = false,
      autoHideDuration = 6000,
      onClose,
      message,
      anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
      action,
      severity,
      variant = 'filled',
      showCloseButton = true,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    const handleClose = (
      event: React.SyntheticEvent | Event,
      reason?: string
    ) => {
      if (reason === 'clickaway') {
        return;
      }
      onClose?.(event, reason);
    };

    // Render as Alert if severity is provided
    if (severity) {
      return (
        <MuiSnackbar
          ref={ref}
          open={open}
          autoHideDuration={autoHideDuration}
          onClose={handleClose}
          anchorOrigin={anchorOrigin}
          {...props}
        >
          <Alert
            severity={severity}
            variant={variant}
            icon={icon}
            onClose={showCloseButton ? (e) => handleClose(e) : undefined}
            sx={{ width: '100%' }}
          >
            {children || message}
          </Alert>
        </MuiSnackbar>
      );
    }

    // Default action (close button) if no action provided
    const defaultAction = action !== undefined ? action : (
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={(e) => handleClose(e)}
      >
        <MaterialSymbol icon="close" size="small" />
      </IconButton>
    );

    // Render as simple Snackbar
    return (
      <MuiSnackbar
        ref={ref}
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
        message={children || message}
        action={defaultAction}
        anchorOrigin={anchorOrigin}
        {...props}
      />
    );
  }
);

Snackbar.displayName = 'Snackbar';

export default Snackbar;
