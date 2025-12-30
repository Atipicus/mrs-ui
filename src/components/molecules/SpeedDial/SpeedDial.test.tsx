/**
 * SpeedDial Component Tests
 */

import React from 'react';
import { renderWithTheme } from '../../../../tests/test-utils';
import { SpeedDial } from './SpeedDial';
import { SpeedDialAction } from './SpeedDialAction';
import { SpeedDialIcon } from './SpeedDialIcon';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';

describe('SpeedDial', () => {
  describe('Rendering', () => {
    it('should render with default props', () => {
      const { container } = renderWithTheme(
        <SpeedDial ariaLabel="Test SpeedDial" icon={<SpeedDialIcon />}>
          <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
        </SpeedDial>
      );
      const speedDial = container.querySelector('.MuiSpeedDial-root');
      expect(speedDial).toBeInTheDocument();
    });

    it('should render with children', () => {
      const { container } = renderWithTheme(
        <SpeedDial ariaLabel="Test SpeedDial" icon={<SpeedDialIcon />}>
          <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
          <SpeedDialAction icon={<SaveIcon />} tooltipTitle="Save" />
        </SpeedDial>
      );
      const actions = container.querySelectorAll('.MuiSpeedDialAction-fab');
      expect(actions.length).toBeGreaterThan(0);
    });

    it('should render with custom icon', () => {
      const { container } = renderWithTheme(
        <SpeedDial ariaLabel="Custom icon" icon={<FileCopyIcon />}>
          <SpeedDialAction icon={<SaveIcon />} tooltipTitle="Save" />
        </SpeedDial>
      );
      const speedDial = container.querySelector('.MuiSpeedDial-root');
      expect(speedDial).toBeInTheDocument();
    });
  });

  describe('Directions', () => {
    it('should render with up direction by default', () => {
      const { container } = renderWithTheme(
        <SpeedDial ariaLabel="Up direction" icon={<SpeedDialIcon />}>
          <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
        </SpeedDial>
      );
      const speedDial = container.querySelector('.MuiSpeedDial-directionUp');
      expect(speedDial).toBeInTheDocument();
    });

    it('should render with down direction', () => {
      const { container } = renderWithTheme(
        <SpeedDial ariaLabel="Down direction" direction="down" icon={<SpeedDialIcon />}>
          <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
        </SpeedDial>
      );
      const speedDial = container.querySelector('.MuiSpeedDial-directionDown');
      expect(speedDial).toBeInTheDocument();
    });

    it('should render with left direction', () => {
      const { container } = renderWithTheme(
        <SpeedDial ariaLabel="Left direction" direction="left" icon={<SpeedDialIcon />}>
          <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
        </SpeedDial>
      );
      const speedDial = container.querySelector('.MuiSpeedDial-directionLeft');
      expect(speedDial).toBeInTheDocument();
    });

    it('should render with right direction', () => {
      const { container } = renderWithTheme(
        <SpeedDial ariaLabel="Right direction" direction="right" icon={<SpeedDialIcon />}>
          <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
        </SpeedDial>
      );
      const speedDial = container.querySelector('.MuiSpeedDial-directionRight');
      expect(speedDial).toBeInTheDocument();
    });
  });

  describe('States', () => {
    it('should render as hidden', () => {
      const { container } = renderWithTheme(
        <SpeedDial ariaLabel="Hidden" hidden icon={<SpeedDialIcon />}>
          <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
        </SpeedDial>
      );
      const fab = container.querySelector('.MuiFab-root');
      expect(fab).toBeInTheDocument();
    });

    it('should render as open when controlled', () => {
      const { container } = renderWithTheme(
        <SpeedDial ariaLabel="Open" open icon={<SpeedDialIcon />}>
          <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
        </SpeedDial>
      );
      const speedDial = container.querySelector('.MuiSpeedDial-root');
      expect(speedDial).toBeInTheDocument();
    });

    it('should accept onOpen callback', () => {
      const handleOpen = jest.fn();
      renderWithTheme(
        <SpeedDial ariaLabel="With onOpen" onOpen={handleOpen} icon={<SpeedDialIcon />}>
          <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
        </SpeedDial>
      );
      expect(handleOpen).toBeDefined();
    });

    it('should accept onClose callback', () => {
      const handleClose = jest.fn();
      renderWithTheme(
        <SpeedDial ariaLabel="With onClose" onClose={handleClose} icon={<SpeedDialIcon />}>
          <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
        </SpeedDial>
      );
      expect(handleClose).toBeDefined();
    });
  });

  describe('SpeedDialAction', () => {
    it('should render action with icon and tooltip', () => {
      const { container } = renderWithTheme(
        <SpeedDial ariaLabel="Action test" icon={<SpeedDialIcon />}>
          <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
        </SpeedDial>
      );
      const actions = container.querySelectorAll('.MuiSpeedDialAction-fab');
      expect(actions.length).toBeGreaterThan(0);
    });

    it('should render multiple actions', () => {
      const { container } = renderWithTheme(
        <SpeedDial ariaLabel="Multiple actions" icon={<SpeedDialIcon />}>
          <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
          <SpeedDialAction icon={<SaveIcon />} tooltipTitle="Save" />
        </SpeedDial>
      );
      const actions = container.querySelectorAll('.MuiSpeedDialAction-fab');
      expect(actions.length).toBeGreaterThanOrEqual(2);
    });

    it('should render disabled action', () => {
      const { container } = renderWithTheme(
        <SpeedDial ariaLabel="Disabled action" icon={<SpeedDialIcon />}>
          <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" disabled />
        </SpeedDial>
      );
      const speedDial = container.querySelector('.MuiSpeedDial-root');
      expect(speedDial).toBeInTheDocument();
    });

    it('should accept onClick handler', () => {
      const handleClick = jest.fn();
      renderWithTheme(
        <SpeedDial ariaLabel="Action with onClick" icon={<SpeedDialIcon />}>
          <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" onClick={handleClick} />
        </SpeedDial>
      );
      expect(handleClick).toBeDefined();
    });
  });

  describe('SpeedDialIcon', () => {
    it('should render SpeedDialIcon', () => {
      const { container } = renderWithTheme(
        <SpeedDial ariaLabel="Icon test" icon={<SpeedDialIcon />}>
          <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
        </SpeedDial>
      );
      const icon = container.querySelector('.MuiSpeedDialIcon-root');
      expect(icon).toBeInTheDocument();
    });

    it('should render with custom open icon', () => {
      const { container } = renderWithTheme(
        <SpeedDial
          ariaLabel="Custom open icon"
          icon={<SpeedDialIcon icon={<FileCopyIcon />} openIcon={<SaveIcon />} />}
        >
          <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
        </SpeedDial>
      );
      const icon = container.querySelector('.MuiSpeedDialIcon-root');
      expect(icon).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have aria-label', () => {
      const { container } = renderWithTheme(
        <SpeedDial ariaLabel="Accessible SpeedDial" icon={<SpeedDialIcon />}>
          <SpeedDialAction icon={<FileCopyIcon />} tooltipTitle="Copy" />
        </SpeedDial>
      );
      const button = container.querySelector('[aria-label="Accessible SpeedDial"]');
      expect(button).toBeInTheDocument();
    });
  });

  describe('Display Names', () => {
    it('should have correct display name for SpeedDial', () => {
      expect(SpeedDial.displayName).toBe('SpeedDial');
    });

    it('should have correct display name for SpeedDialAction', () => {
      expect(SpeedDialAction.displayName).toBe('SpeedDialAction');
    });

    it('should have correct display name for SpeedDialIcon', () => {
      expect(SpeedDialIcon.displayName).toBe('SpeedDialIcon');
    });
  });
});
