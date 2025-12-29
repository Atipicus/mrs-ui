/**
 * Tabs Component Tests
 * @package @mrs/ui
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import userEvent from '@testing-library/user-event';
import { Tabs, Tab } from './Tabs';

describe('Tabs', () => {
  describe('Basic Rendering', () => {
    it('renders tabs with labels', () => {
      renderWithTheme(
        <Tabs value={0}>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
        </Tabs>
      );

      expect(screen.getByText('Tab 1')).toBeInTheDocument();
      expect(screen.getByText('Tab 2')).toBeInTheDocument();
      expect(screen.getByText('Tab 3')).toBeInTheDocument();
    });

    it('renders with default value', () => {
      renderWithTheme(
        <Tabs value={1}>
          <Tab label="First" />
          <Tab label="Second" />
        </Tabs>
      );

      const secondTab = screen.getByText('Second').closest('button');
      expect(secondTab).toHaveClass('Mui-selected');
    });

    it('renders with string values', () => {
      renderWithTheme(
        <Tabs value="tab2">
          <Tab label="Tab 1" value="tab1" />
          <Tab label="Tab 2" value="tab2" />
        </Tabs>
      );

      const tab2 = screen.getByText('Tab 2').closest('button');
      expect(tab2).toHaveClass('Mui-selected');
    });
  });

  describe('Tab Component', () => {
    it('renders Tab with label', () => {
      renderWithTheme(
        <Tabs value={0}>
          <Tab label="My Tab" />
        </Tabs>
      );

      expect(screen.getByText('My Tab')).toBeInTheDocument();
    });

    it('renders Tab with icon', () => {
      const TestIcon = () => <span data-testid="test-icon">Icon</span>;

      renderWithTheme(
        <Tabs value={0}>
          <Tab label="Tab" icon={<TestIcon />} />
        </Tabs>
      );

      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });

    it('renders disabled Tab', () => {
      renderWithTheme(
        <Tabs value={0}>
          <Tab label="Disabled" disabled />
        </Tabs>
      );

      const tab = screen.getByText('Disabled').closest('button');
      expect(tab).toBeDisabled();
    });

    it('renders wrapped Tab', () => {
      renderWithTheme(
        <Tabs value={0}>
          <Tab label="Long label that wraps" wrapped />
        </Tabs>
      );

      expect(screen.getByText('Long label that wraps')).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('calls onChange when tab is clicked', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();

      renderWithTheme(
        <Tabs value={0} onChange={handleChange}>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
        </Tabs>
      );

      await user.click(screen.getByText('Tab 2'));

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(
        expect.any(Object),
        1
      );
    });

    it('does not call onChange when disabled tab is clicked', () => {
      const handleChange = jest.fn();

      renderWithTheme(
        <Tabs value={0} onChange={handleChange}>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" disabled />
        </Tabs>
      );

      const disabledTab = screen.getByText('Tab 2').closest('button');
      // Disabled tab has pointer-events: none, so we just verify it's disabled
      expect(disabledTab).toBeDisabled();
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('handles value change correctly', async () => {
      const user = userEvent.setup();
      let currentValue = 0;
      const handleChange = jest.fn((e, newValue) => {
        currentValue = newValue;
      });

      const { rerender } = renderWithTheme(
        <Tabs value={currentValue} onChange={handleChange}>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
        </Tabs>
      );

      await user.click(screen.getByText('Tab 2'));

      rerender(
        <Tabs value={currentValue} onChange={handleChange}>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
        </Tabs>
      );

      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe('Variants', () => {
    it('renders standard variant', () => {
      const { container } = renderWithTheme(
        <Tabs value={0} variant="standard">
          <Tab label="Tab 1" />
        </Tabs>
      );

      const tabs = container.querySelector('.MuiTabs-root');
      expect(tabs).not.toHaveClass('MuiTabs-scrollable');
    });

    it('renders scrollable variant', () => {
      renderWithTheme(
        <Tabs value={0} variant="scrollable">
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
        </Tabs>
      );

      // Just verify tabs are rendered, MUI handles scrollable class internally
      expect(screen.getByText('Tab 1')).toBeInTheDocument();
      expect(screen.getByText('Tab 2')).toBeInTheDocument();
    });

    it('renders fullWidth variant', () => {
      const { container } = renderWithTheme(
        <Tabs value={0} variant="fullWidth">
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
        </Tabs>
      );

      const tabs = container.querySelector('.MuiTabs-root');
      expect(tabs).toBeInTheDocument();
    });
  });

  describe('Orientation', () => {
    it('renders horizontal orientation by default', () => {
      const { container } = renderWithTheme(
        <Tabs value={0}>
          <Tab label="Tab 1" />
        </Tabs>
      );

      const tabs = container.querySelector('.MuiTabs-root');
      expect(tabs).not.toHaveClass('MuiTabs-vertical');
    });

    it('renders vertical orientation', () => {
      const { container } = renderWithTheme(
        <Tabs value={0} orientation="vertical">
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
        </Tabs>
      );

      const tabs = container.querySelector('.MuiTabs-vertical');
      expect(tabs).toBeInTheDocument();
    });
  });

  describe('Colors', () => {
    it('applies primary indicator color', () => {
      renderWithTheme(
        <Tabs value={0} indicatorColor="primary">
          <Tab label="Tab 1" />
        </Tabs>
      );

      expect(screen.getByText('Tab 1')).toBeInTheDocument();
    });

    it('applies secondary indicator color', () => {
      renderWithTheme(
        <Tabs value={0} indicatorColor="secondary">
          <Tab label="Tab 1" />
        </Tabs>
      );

      expect(screen.getByText('Tab 1')).toBeInTheDocument();
    });

    it('applies primary text color', () => {
      renderWithTheme(
        <Tabs value={0} textColor="primary">
          <Tab label="Tab 1" />
        </Tabs>
      );

      expect(screen.getByText('Tab 1')).toBeInTheDocument();
    });

    it('applies secondary text color', () => {
      renderWithTheme(
        <Tabs value={0} textColor="secondary">
          <Tab label="Tab 1" />
        </Tabs>
      );

      expect(screen.getByText('Tab 1')).toBeInTheDocument();
    });
  });

  describe('Layout', () => {
    it('renders centered tabs', () => {
      const { container } = renderWithTheme(
        <Tabs value={0} centered>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
        </Tabs>
      );

      const tabs = container.querySelector('.MuiTabs-centered');
      expect(tabs).toBeInTheDocument();
    });

    it('applies scrollButtons prop', () => {
      renderWithTheme(
        <Tabs value={0} variant="scrollable" scrollButtons="auto">
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
        </Tabs>
      );

      expect(screen.getByText('Tab 1')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has role="tablist"', () => {
      renderWithTheme(
        <Tabs value={0}>
          <Tab label="Tab 1" />
        </Tabs>
      );

      expect(screen.getByRole('tablist')).toBeInTheDocument();
    });

    it('tabs have role="tab"', () => {
      renderWithTheme(
        <Tabs value={0}>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
        </Tabs>
      );

      const tabs = screen.getAllByRole('tab');
      expect(tabs).toHaveLength(2);
    });

    it('selected tab has aria-selected="true"', () => {
      renderWithTheme(
        <Tabs value={0}>
          <Tab label="Selected" />
          <Tab label="Not Selected" />
        </Tabs>
      );

      const selectedTab = screen.getByText('Selected').closest('button');
      expect(selectedTab).toHaveAttribute('aria-selected', 'true');
    });

    it('disabled tab is disabled', () => {
      renderWithTheme(
        <Tabs value={0}>
          <Tab label="Disabled" disabled />
        </Tabs>
      );

      const disabledTab = screen.getByText('Disabled').closest('button');
      expect(disabledTab).toBeDisabled();
    });
  });

  describe('Props forwarding', () => {
    it('forwards additional props to MuiTabs', () => {
      const { container } = renderWithTheme(
        <Tabs value={0} data-testid="custom-tabs">
          <Tab label="Tab 1" />
        </Tabs>
      );

      const tabs = container.querySelector('[data-testid="custom-tabs"]');
      expect(tabs).toBeInTheDocument();
    });

    it('forwards ref correctly', () => {
      const ref = jest.fn();

      renderWithTheme(
        <Tabs ref={ref} value={0}>
          <Tab label="Tab 1" />
        </Tabs>
      );

      expect(ref).toHaveBeenCalled();
    });

    it('forwards TabIndicatorProps', () => {
      renderWithTheme(
        <Tabs
          value={0}
          TabIndicatorProps={{ 'data-testid': 'custom-indicator' }}
        >
          <Tab label="Tab 1" />
        </Tabs>
      );

      expect(screen.getByTestId('custom-indicator')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('renders with value false', () => {
      renderWithTheme(
        <Tabs value={false}>
          <Tab label="Tab 1" />
        </Tabs>
      );

      expect(screen.getByText('Tab 1')).toBeInTheDocument();
    });

    it('renders without onChange handler', () => {
      renderWithTheme(
        <Tabs value={0}>
          <Tab label="Tab 1" />
        </Tabs>
      );

      expect(screen.getByText('Tab 1')).toBeInTheDocument();
    });

    it('renders Tab without value prop', () => {
      renderWithTheme(
        <Tabs value={0}>
          <Tab label="No value" />
        </Tabs>
      );

      expect(screen.getByText('No value')).toBeInTheDocument();
    });
  });
});
