/**
 * BottomNavigation Component
 *
 * BottomNavigation component for the MRS Design System.
 * Wraps Material-UI BottomNavigation with custom theme tokens.
 *
 * @see {@link https://mui.com/material-ui/react-bottom-navigation/}
 */

import React from 'react';
import MuiBottomNavigation from '@mui/material/BottomNavigation';
import type { BottomNavigationProps } from './BottomNavigation.types';

/**
 * BottomNavigation component
 *
 * Bottom navigation bars allow movement between primary destinations in an app.
 *
 * @param props - BottomNavigation component props
 * @returns BottomNavigation component
 */
export const BottomNavigation = React.forwardRef<HTMLDivElement, BottomNavigationProps>(
  (props, ref) => {
    return (
      <MuiBottomNavigation
        ref={ref}
        {...props}
      />
    );
  }
);

BottomNavigation.displayName = 'BottomNavigation';
