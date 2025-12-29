/**
 * Menu Component
 * @package @mrs/ui
 *
 * Displays a list of choices on temporary surfaces.
 * Menus appear when users interact with a button, action, or other control.
 *
 * @example
 * ```tsx
 * const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
 *
 * <Button onClick={(e) => setAnchorEl(e.currentTarget)}>
 *   Open Menu
 * </Button>
 * <Menu
 *   open={Boolean(anchorEl)}
 *   anchorEl={anchorEl}
 *   onClose={() => setAnchorEl(null)}
 * >
 *   <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
 *   <MenuItem onClick={() => setAnchorEl(null)}>Settings</MenuItem>
 * </Menu>
 * ```
 */

import React from 'react';
import MuiMenu from '@mui/material/Menu';
import type { MenuProps } from './Menu.types';

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  (
    {
      open,
      anchorEl,
      onClose,
      children,
      anchorOrigin = { vertical: 'top', horizontal: 'left' },
      transformOrigin = { vertical: 'top', horizontal: 'left' },
      autoFocus = false,
      MenuListProps,
      variant = 'selectedMenu',
      ...props
    },
    ref
  ) => {
    return (
      <MuiMenu
        ref={ref}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        autoFocus={autoFocus}
        MenuListProps={MenuListProps}
        variant={variant}
        {...props}
      >
        {children}
      </MuiMenu>
    );
  }
);

Menu.displayName = 'Menu';

export default Menu;
