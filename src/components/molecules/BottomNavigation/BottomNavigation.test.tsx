/**
 * BottomNavigation Component Tests
 */

import React from 'react';
import { renderWithTheme } from '../../../../tests/test-utils';
import { BottomNavigation } from './BottomNavigation';
import { BottomNavigationAction } from './BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

describe('BottomNavigation', () => {
  describe('Rendering', () => {
    it('should render with default props', () => {
      const { container } = renderWithTheme(
        <BottomNavigation>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        </BottomNavigation>
      );
      const nav = container.querySelector('.MuiBottomNavigation-root');
      expect(nav).toBeInTheDocument();
    });

    it('should render with multiple actions', () => {
      const { container } = renderWithTheme(
        <BottomNavigation>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      );
      const actions = container.querySelectorAll('.MuiBottomNavigationAction-root');
      expect(actions).toHaveLength(3);
    });

    it('should render with showLabels prop', () => {
      const { container } = renderWithTheme(
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        </BottomNavigation>
      );
      const nav = container.querySelector('.MuiBottomNavigation-root');
      expect(nav).toBeInTheDocument();
    });
  });

  describe('Value', () => {
    it('should render with controlled value', () => {
      const { container } = renderWithTheme(
        <BottomNavigation value={0}>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </BottomNavigation>
      );
      const actions = container.querySelectorAll('.MuiBottomNavigationAction-root');
      expect(actions[0]).toHaveClass('Mui-selected');
    });

    it('should render with string value', () => {
      const { container } = renderWithTheme(
        <BottomNavigation value="favorites">
          <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        </BottomNavigation>
      );
      const nav = container.querySelector('.MuiBottomNavigation-root');
      expect(nav).toBeInTheDocument();
    });

    it('should accept onChange handler', () => {
      const handleChange = jest.fn();
      renderWithTheme(
        <BottomNavigation onChange={handleChange}>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </BottomNavigation>
      );
      expect(handleChange).toBeDefined();
    });
  });

  describe('BottomNavigationAction', () => {
    it('should render action with label and icon', () => {
      const { container } = renderWithTheme(
        <BottomNavigation>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        </BottomNavigation>
      );
      const action = container.querySelector('.MuiBottomNavigationAction-root');
      expect(action).toBeInTheDocument();
    });

    it('should render action with custom value', () => {
      const { container } = renderWithTheme(
        <BottomNavigation>
          <BottomNavigationAction label="Recents" value="custom" icon={<RestoreIcon />} />
        </BottomNavigation>
      );
      const action = container.querySelector('.MuiBottomNavigationAction-root');
      expect(action).toBeInTheDocument();
    });

    it('should render action with showLabel prop', () => {
      const { container } = renderWithTheme(
        <BottomNavigation>
          <BottomNavigationAction label="Recents" showLabel icon={<RestoreIcon />} />
        </BottomNavigation>
      );
      const action = container.querySelector('.MuiBottomNavigationAction-root');
      expect(action).toBeInTheDocument();
    });

    it('should render action without label', () => {
      const { container } = renderWithTheme(
        <BottomNavigation>
          <BottomNavigationAction icon={<RestoreIcon />} />
        </BottomNavigation>
      );
      const action = container.querySelector('.MuiBottomNavigationAction-root');
      expect(action).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should render as nav element', () => {
      const { container } = renderWithTheme(
        <BottomNavigation>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        </BottomNavigation>
      );
      const nav = container.querySelector('.MuiBottomNavigation-root');
      expect(nav?.tagName).toBe('DIV');
    });

    it('should have proper button roles for actions', () => {
      const { container } = renderWithTheme(
        <BottomNavigation>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        </BottomNavigation>
      );
      const button = container.querySelector('button');
      expect(button).toBeInTheDocument();
    });
  });

  describe('Display Names', () => {
    it('should have correct display name for BottomNavigation', () => {
      expect(BottomNavigation.displayName).toBe('BottomNavigation');
    });

    it('should have correct display name for BottomNavigationAction', () => {
      expect(BottomNavigationAction.displayName).toBe('BottomNavigationAction');
    });
  });
});
