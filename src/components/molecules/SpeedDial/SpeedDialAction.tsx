/**
 * SpeedDialAction Component
 *
 * SpeedDialAction component for the MRS Design System.
 * Wraps Material-UI SpeedDialAction with custom theme tokens.
 *
 * @see {@link https://mui.com/material-ui/react-speed-dial/}
 */

import React from 'react';
import MuiSpeedDialAction from '@mui/material/SpeedDialAction';
import type { SpeedDialActionProps } from './SpeedDial.types';

/**
 * SpeedDialAction component
 *
 * Individual action button for SpeedDial.
 *
 * @param props - SpeedDialAction component props
 * @returns SpeedDialAction component
 */
export const SpeedDialAction = React.forwardRef<HTMLDivElement, SpeedDialActionProps>(
  (props, ref) => {
    return (
      <MuiSpeedDialAction
        ref={ref}
        {...props}
      />
    );
  }
);

SpeedDialAction.displayName = 'SpeedDialAction';
