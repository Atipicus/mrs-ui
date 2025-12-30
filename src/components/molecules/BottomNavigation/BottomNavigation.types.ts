/**
 * BottomNavigation Component Types
 */

import type { BottomNavigationProps as MuiBottomNavigationProps } from '@mui/material/BottomNavigation';
import type { BottomNavigationActionProps as MuiBottomNavigationActionProps } from '@mui/material/BottomNavigationAction';

/**
 * Props for the BottomNavigation component
 *
 * @see {@link https://mui.com/material-ui/api/bottom-navigation/}
 */
export interface BottomNavigationProps extends MuiBottomNavigationProps {
  /**
   * Callback fired when the value changes
   */
  onChange?: (event: React.SyntheticEvent, value: any) => void;

  /**
   * If true, all BottomNavigationActions will show their labels
   * @default false
   */
  showLabels?: boolean;

  /**
   * The value of the currently selected BottomNavigationAction
   */
  value?: any;
}

/**
 * Props for the BottomNavigationAction component
 *
 * @see {@link https://mui.com/material-ui/api/bottom-navigation-action/}
 */
export interface BottomNavigationActionProps extends MuiBottomNavigationActionProps {
  /**
   * The icon to display
   */
  icon?: React.ReactNode;

  /**
   * The label element
   */
  label?: React.ReactNode;

  /**
   * If true, the BottomNavigationAction will show its label
   * @default false
   */
  showLabel?: boolean;

  /**
   * You can provide your own value. Otherwise, it falls back to the child position index
   */
  value?: any;
}
