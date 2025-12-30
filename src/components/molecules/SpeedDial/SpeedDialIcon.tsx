/**
 * SpeedDialIcon Component
 *
 * SpeedDialIcon component for the MRS Design System.
 * Wraps Material-UI SpeedDialIcon with custom theme tokens.
 *
 * @see {@link https://mui.com/material-ui/react-speed-dial/}
 */

import React from 'react';
import MuiSpeedDialIcon from '@mui/material/SpeedDialIcon';
import type { SpeedDialIconProps } from './SpeedDial.types';

/**
 * SpeedDialIcon component
 *
 * Icon for the SpeedDial Floating Action Button that animates when opened/closed.
 *
 * @param props - SpeedDialIcon component props
 * @returns SpeedDialIcon component
 */
export const SpeedDialIcon = React.forwardRef<HTMLSpanElement, SpeedDialIconProps>(
  (props, ref) => {
    return (
      <MuiSpeedDialIcon
        ref={ref}
        {...props}
      />
    );
  }
);

SpeedDialIcon.displayName = 'SpeedDialIcon';
