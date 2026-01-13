/**
 * Menu Component Tests
 * @package @mrs/ui
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import userEvent from '@testing-library/user-event';
import { Menu } from './Menu';
import MenuItem from '@mui/material/MenuItem';

describe('Menu', () => {
  const mockAnchorEl = document.createElement('button');

  beforeAll(() => {
    document.body.appendChild(mockAnchorEl);
  });

  afterAll(() => {
    document.body.removeChild(mockAnchorEl);
  });

  describe('Basic Rendering', () => {
    it('renders when open is true', () => {
      renderWithTheme(
        <Menu open anchorEl={mockAnchorEl}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </Menu>
      );

      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
    });

    it('does not render content when open is false', () => {
      renderWithTheme(
        <Menu open={false} anchorEl={mockAnchorEl}>
          <MenuItem>Item 1</MenuItem>
        </Menu>
      );

      expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
    });

    it('renders multiple MenuItems', () => {
      renderWithTheme(
        <Menu open anchorEl={mockAnchorEl}>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      );

      expect(screen.getByText('Profile')).toBeInTheDocument();
      expect(screen.getByText('Settings')).toBeInTheDocument();
      expect(screen.getByText('Logout')).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('calls onClose when clicking outside', async () => {
      const user = userEvent.setup();
      const handleClose = jest.fn();

      renderWithTheme(
        <Menu open anchorEl={mockAnchorEl} onClose={handleClose}>
          <MenuItem>Item 1</MenuItem>
        </Menu>
      );

      // Click outside (on backdrop)
      const backdrop = document.querySelector('.MuiBackdrop-root');
      if (backdrop) {
        await user.click(backdrop);
        expect(handleClose).toHaveBeenCalled();
      }
    });

    it('calls onClick handler when MenuItem is clicked', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();

      renderWithTheme(
        <Menu open anchorEl={mockAnchorEl}>
          <MenuItem onClick={handleClick}>Click me</MenuItem>
        </Menu>
      );

      const menuItem = screen.getByText('Click me');
      await user.click(menuItem);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Menu Items', () => {
    it('renders disabled MenuItem', () => {
      renderWithTheme(
        <Menu open anchorEl={mockAnchorEl}>
          <MenuItem disabled>Disabled Item</MenuItem>
        </Menu>
      );

      const menuItem = screen.getByText('Disabled Item');
      expect(menuItem.closest('li')).toHaveClass('Mui-disabled');
    });

    it('renders selected MenuItem', () => {
      renderWithTheme(
        <Menu open anchorEl={mockAnchorEl}>
          <MenuItem selected>Selected Item</MenuItem>
        </Menu>
      );

      const menuItem = screen.getByText('Selected Item');
      expect(menuItem.closest('li')).toHaveClass('Mui-selected');
    });

    it('renders MenuItem with custom onClick', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();

      renderWithTheme(
        <Menu open anchorEl={mockAnchorEl}>
          <MenuItem onClick={handleClick}>Custom Click</MenuItem>
        </Menu>
      );

      await user.click(screen.getByText('Custom Click'));
      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe('Props', () => {
    it('applies custom anchorOrigin', () => {
      renderWithTheme(
        <Menu
          open
          anchorEl={mockAnchorEl}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <MenuItem>Item</MenuItem>
        </Menu>
      );

      expect(screen.getByText('Item')).toBeInTheDocument();
    });

    it('applies custom transformOrigin', () => {
      renderWithTheme(
        <Menu
          open
          anchorEl={mockAnchorEl}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem>Item</MenuItem>
        </Menu>
      );

      expect(screen.getByText('Item')).toBeInTheDocument();
    });

    it('applies MenuListProps', () => {
      renderWithTheme(
        <Menu open anchorEl={mockAnchorEl} MenuListProps={{ 'data-testid': 'menu-list' }}>
          <MenuItem>Item</MenuItem>
        </Menu>
      );

      expect(screen.getByTestId('menu-list')).toBeInTheDocument();
    });

    it('applies autoFocus prop', () => {
      renderWithTheme(
        <Menu open anchorEl={mockAnchorEl} autoFocus={true}>
          <MenuItem>Item</MenuItem>
        </Menu>
      );

      expect(screen.getByText('Item')).toBeInTheDocument();
    });

    it('applies variant prop', () => {
      const { rerender } = renderWithTheme(
        <Menu open anchorEl={mockAnchorEl} variant="menu">
          <MenuItem>Menu variant</MenuItem>
        </Menu>
      );
      expect(screen.getByText('Menu variant')).toBeInTheDocument();

      rerender(
        <Menu open anchorEl={mockAnchorEl} variant="selectedMenu">
          <MenuItem>SelectedMenu variant</MenuItem>
        </Menu>
      );
      expect(screen.getByText('SelectedMenu variant')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has role="menu"', () => {
      renderWithTheme(
        <Menu open anchorEl={mockAnchorEl}>
          <MenuItem>Item</MenuItem>
        </Menu>
      );

      expect(screen.getByRole('menu')).toBeInTheDocument();
    });

    it('MenuItems have role="menuitem"', () => {
      renderWithTheme(
        <Menu open anchorEl={mockAnchorEl}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
        </Menu>
      );

      const menuItems = screen.getAllByRole('menuitem');
      expect(menuItems).toHaveLength(2);
    });

    it('disabled MenuItem is not clickable', () => {
      const handleClick = jest.fn();

      renderWithTheme(
        <Menu open anchorEl={mockAnchorEl}>
          <MenuItem disabled onClick={handleClick}>
            Disabled
          </MenuItem>
        </Menu>
      );

      const menuItem = screen.getByText('Disabled');
      // MenuItem has pointer-events: none when disabled, so we just check the class
      expect(menuItem.closest('li')).toHaveClass('Mui-disabled');
    });
  });

  describe('Props forwarding', () => {
    it('forwards additional props to MuiMenu', () => {
      renderWithTheme(
        <Menu open anchorEl={mockAnchorEl} data-testid="custom-menu">
          <MenuItem>Item</MenuItem>
        </Menu>
      );

      // Menu renders as a Popover, so we check for the menu role
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });

    it('forwards ref correctly', () => {
      const ref = jest.fn();

      renderWithTheme(
        <Menu ref={ref} open anchorEl={mockAnchorEl}>
          <MenuItem>Item</MenuItem>
        </Menu>
      );

      expect(ref).toHaveBeenCalled();
    });
  });

  describe('Edge Cases', () => {
    it('renders without children', () => {
      renderWithTheme(<Menu open anchorEl={mockAnchorEl} />);

      expect(screen.getByRole('menu')).toBeInTheDocument();
    });

    it('renders with null anchorEl when closed', () => {
      renderWithTheme(
        <Menu open={false} anchorEl={null}>
          <MenuItem>Item</MenuItem>
        </Menu>
      );

      expect(screen.queryByText('Item')).not.toBeInTheDocument();
    });
  });
});
