/**
 * AccountStack Component Types
 * Displays user account information with avatar, badge, and text
 */

import type { BoxProps } from '@mui/material/Box';

export interface AccountStackProps extends Omit<BoxProps, 'children'> {
  /**
   * Show/hide avatar with badge
   * @default true
   */
  user?: boolean;

  /**
   * Show/hide user account information text
   * @default true
   */
  userAccountInfo?: boolean;

  /**
   * Show/hide notification badge on avatar
   * @default true
   */
  notifications?: boolean;

  /**
   * User's name to display
   * @default 'John Doe'
   */
  userName?: string;

  /**
   * User's email or secondary info to display
   * @default 'john.doe@example.com'
   */
  userEmail?: string;

  /**
   * Avatar image source URL
   */
  avatarSrc?: string;

  /**
   * Avatar alt text for accessibility
   * @default 'User avatar'
   */
  avatarAlt?: string;

  /**
   * Number of notifications (optional, for future badge content)
   */
  notificationCount?: number;

  /**
   * Position of the avatar relative to user info
   * @default 'left'
   */
  avatarPosition?: 'left' | 'right';

  /**
   * Custom sx styles
   */
  sx?: BoxProps['sx'];
}
