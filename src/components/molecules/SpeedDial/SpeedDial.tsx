/**
 * SpeedDial Component
 *
 * SpeedDial component for the MRS Design System.
 * Wraps Material-UI SpeedDial with custom theme tokens.
 *
 * @see {@link https://mui.com/material-ui/react-speed-dial/}
 */

import React from 'react';
import MuiSpeedDial from '@mui/material/SpeedDial';
import type { SpeedDialProps } from './SpeedDial.types';

/**
 * SpeedDial component
 *
 * When pressed, a floating action button can display three to six related actions in the form of a Speed Dial.
 *
 * @param props - SpeedDial component props
 * @returns SpeedDial component
 */
export const SpeedDial = React.forwardRef<HTMLDivElement, SpeedDialProps>((props, ref) => {
  return <MuiSpeedDial ref={ref} {...props} />;
});

SpeedDial.displayName = 'SpeedDial';
