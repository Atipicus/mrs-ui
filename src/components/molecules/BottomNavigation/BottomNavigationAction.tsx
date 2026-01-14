/**
 * BottomNavigationAction Component
 */

import React from 'react';
import MuiBottomNavigationAction from '@mui/material/BottomNavigationAction';
import type { BottomNavigationActionProps } from './BottomNavigation.types';

export const BottomNavigationAction = React.forwardRef<
  HTMLButtonElement,
  BottomNavigationActionProps
>((props, ref) => {
  return <MuiBottomNavigationAction ref={ref} {...props} />;
});

BottomNavigationAction.displayName = 'BottomNavigationAction';
