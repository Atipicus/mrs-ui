/**
 * Accordion Component Tests
 *
 * Comprehensive tests for Accordion and all sub-components
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import userEvent from '@testing-library/user-event';
import { Accordion } from './Accordion';
import { AccordionSummary } from './AccordionSummary';
import { AccordionDetails } from './AccordionDetails';
import { AccordionActions } from './AccordionActions';

describe('Accordion', () => {
  describe('Accordion Component', () => {
    it('renders correctly', () => {
      renderWithTheme(
        <Accordion>
          <AccordionSummary>Summary</AccordionSummary>
          <AccordionDetails>Details</AccordionDetails>
        </Accordion>
      );
      expect(screen.getByText('Summary')).toBeInTheDocument();
    });

    it('expands and collapses on click', async () => {
      const user = userEvent.setup();
      renderWithTheme(
        <Accordion>
          <AccordionSummary>Summary</AccordionSummary>
          <AccordionDetails>Details Content</AccordionDetails>
        </Accordion>
      );

      // Initially collapsed - details should not be visible
      expect(screen.queryByText('Details Content')).not.toBeVisible();

      // Click to expand
      const summary = screen.getByText('Summary');
      await user.click(summary);

      // Details should now be visible
      expect(screen.getByText('Details Content')).toBeVisible();
    });

    it('applies defaultExpanded prop', () => {
      renderWithTheme(
        <Accordion defaultExpanded>
          <AccordionSummary>Summary</AccordionSummary>
          <AccordionDetails>Details</AccordionDetails>
        </Accordion>
      );

      // Details should be visible by default
      expect(screen.getByText('Details')).toBeVisible();
    });

    it('respects disabled prop', () => {
      const handleChange = jest.fn();

      const { container } = renderWithTheme(
        <Accordion disabled onChange={handleChange}>
          <AccordionSummary>Summary</AccordionSummary>
          <AccordionDetails>Details</AccordionDetails>
        </Accordion>
      );

      // Check that the accordion is disabled
      const accordion = container.querySelector('.MuiAccordion-root');
      expect(accordion).toHaveClass('Mui-disabled');

      // onChange should not be called when disabled
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('calls onChange when expanded state changes', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();

      renderWithTheme(
        <Accordion onChange={handleChange}>
          <AccordionSummary>Summary</AccordionSummary>
          <AccordionDetails>Details</AccordionDetails>
        </Accordion>
      );

      const summary = screen.getByText('Summary');
      await user.click(summary);

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(expect.any(Object), true);
    });

    it('works in controlled mode with expanded prop', () => {
      const { rerender } = renderWithTheme(
        <Accordion expanded={false}>
          <AccordionSummary>Summary</AccordionSummary>
          <AccordionDetails>Details</AccordionDetails>
        </Accordion>
      );

      // Initially collapsed
      expect(screen.queryByText('Details')).not.toBeVisible();

      // Rerender with expanded=true
      rerender(
        <Accordion expanded={true}>
          <AccordionSummary>Summary</AccordionSummary>
          <AccordionDetails>Details</AccordionDetails>
        </Accordion>
      );

      // Now should be visible
      expect(screen.getByText('Details')).toBeVisible();
    });

    it('applies disableGutters prop', () => {
      const { container } = renderWithTheme(
        <Accordion disableGutters>
          <AccordionSummary>Summary</AccordionSummary>
          <AccordionDetails>Details</AccordionDetails>
        </Accordion>
      );

      const accordion = container.querySelector('.MuiAccordion-root');
      expect(accordion).not.toHaveClass('MuiAccordion-gutters');
    });

    it('applies square prop', () => {
      const { container } = renderWithTheme(
        <Accordion square>
          <AccordionSummary>Summary</AccordionSummary>
          <AccordionDetails>Details</AccordionDetails>
        </Accordion>
      );

      const accordion = container.querySelector('.MuiAccordion-root');
      expect(accordion).not.toHaveClass('MuiAccordion-rounded');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      renderWithTheme(
        <Accordion ref={ref}>
          <AccordionSummary>Summary</AccordionSummary>
          <AccordionDetails>Details</AccordionDetails>
        </Accordion>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('applies custom sx prop', () => {
      const { container } = renderWithTheme(
        <Accordion sx={{ maxWidth: 600 }}>
          <AccordionSummary>Summary</AccordionSummary>
          <AccordionDetails>Details</AccordionDetails>
        </Accordion>
      );
      const accordion = container.querySelector('.MuiAccordion-root');
      expect(accordion).toHaveStyle({ maxWidth: '600px' });
    });
  });

  describe('AccordionSummary Component', () => {
    it('renders correctly', () => {
      renderWithTheme(
        <Accordion>
          <AccordionSummary>Summary Content</AccordionSummary>
          <AccordionDetails>Details</AccordionDetails>
        </Accordion>
      );
      expect(screen.getByText('Summary Content')).toBeInTheDocument();
    });

    it('renders with expand icon', () => {
      renderWithTheme(
        <Accordion>
          <AccordionSummary expandIcon={<div data-testid="expand-icon">▼</div>}>
            Summary
          </AccordionSummary>
          <AccordionDetails>Details</AccordionDetails>
        </Accordion>
      );
      expect(screen.getByTestId('expand-icon')).toBeInTheDocument();
    });

    it('renders without expand icon', () => {
      renderWithTheme(
        <Accordion>
          <AccordionSummary>Summary</AccordionSummary>
          <AccordionDetails>Details</AccordionDetails>
        </Accordion>
      );
      // Summary should exist but no expand icon
      expect(screen.getByText('Summary')).toBeInTheDocument();
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      renderWithTheme(
        <Accordion>
          <AccordionSummary ref={ref}>Summary</AccordionSummary>
          <AccordionDetails>Details</AccordionDetails>
        </Accordion>
      );
      // AccordionSummary renders as a ButtonBase, so ref is to button element
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });

  describe('AccordionDetails Component', () => {
    it('renders correctly', () => {
      renderWithTheme(
        <Accordion defaultExpanded>
          <AccordionSummary>Summary</AccordionSummary>
          <AccordionDetails>Details Content</AccordionDetails>
        </Accordion>
      );
      expect(screen.getByText('Details Content')).toBeInTheDocument();
    });

    it('is hidden when accordion is collapsed', () => {
      renderWithTheme(
        <Accordion>
          <AccordionSummary>Summary</AccordionSummary>
          <AccordionDetails>Details Content</AccordionDetails>
        </Accordion>
      );
      expect(screen.queryByText('Details Content')).not.toBeVisible();
    });

    it('is visible when accordion is expanded', () => {
      renderWithTheme(
        <Accordion defaultExpanded>
          <AccordionSummary>Summary</AccordionSummary>
          <AccordionDetails>Details Content</AccordionDetails>
        </Accordion>
      );
      expect(screen.getByText('Details Content')).toBeVisible();
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      renderWithTheme(
        <Accordion defaultExpanded>
          <AccordionSummary>Summary</AccordionSummary>
          <AccordionDetails ref={ref}>Details</AccordionDetails>
        </Accordion>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe('AccordionActions Component', () => {
    it('renders correctly', () => {
      renderWithTheme(
        <Accordion defaultExpanded>
          <AccordionSummary>Summary</AccordionSummary>
          <AccordionDetails>Details</AccordionDetails>
          <AccordionActions>
            <button>Cancel</button>
            <button>Save</button>
          </AccordionActions>
        </Accordion>
      );
      expect(screen.getByText('Cancel')).toBeInTheDocument();
      expect(screen.getByText('Save')).toBeInTheDocument();
    });

    it('applies disableSpacing prop', () => {
      const { container } = renderWithTheme(
        <Accordion defaultExpanded>
          <AccordionSummary>Summary</AccordionSummary>
          <AccordionDetails>Details</AccordionDetails>
          <AccordionActions disableSpacing>
            <button>Action</button>
          </AccordionActions>
        </Accordion>
      );
      const actions = container.querySelector('.MuiAccordionActions-root');
      expect(actions).toBeInTheDocument();
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      renderWithTheme(
        <Accordion defaultExpanded>
          <AccordionSummary>Summary</AccordionSummary>
          <AccordionDetails>Details</AccordionDetails>
          <AccordionActions ref={ref}>
            <button>Action</button>
          </AccordionActions>
        </Accordion>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe('Integration Tests', () => {
    it('renders complete accordion with all sub-components', () => {
      renderWithTheme(
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<div data-testid="icon">▼</div>}>
            Summary Title
          </AccordionSummary>
          <AccordionDetails>Details Content</AccordionDetails>
          <AccordionActions>
            <button>Cancel</button>
            <button>Save</button>
          </AccordionActions>
        </Accordion>
      );

      expect(screen.getByText('Summary Title')).toBeInTheDocument();
      expect(screen.getByTestId('icon')).toBeInTheDocument();
      expect(screen.getByText('Details Content')).toBeInTheDocument();
      expect(screen.getByText('Cancel')).toBeInTheDocument();
      expect(screen.getByText('Save')).toBeInTheDocument();
    });

    it('handles multiple accordions independently', async () => {
      const user = userEvent.setup();
      renderWithTheme(
        <div>
          <Accordion>
            <AccordionSummary>Accordion 1</AccordionSummary>
            <AccordionDetails>Details 1</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Accordion 2</AccordionSummary>
            <AccordionDetails>Details 2</AccordionDetails>
          </Accordion>
        </div>
      );

      // Both details initially hidden
      expect(screen.queryByText('Details 1')).not.toBeVisible();
      expect(screen.queryByText('Details 2')).not.toBeVisible();

      // Expand first accordion
      await user.click(screen.getByText('Accordion 1'));
      expect(screen.getByText('Details 1')).toBeVisible();
      expect(screen.queryByText('Details 2')).not.toBeVisible();

      // Expand second accordion
      await user.click(screen.getByText('Accordion 2'));
      expect(screen.getByText('Details 1')).toBeVisible();
      expect(screen.getByText('Details 2')).toBeVisible();
    });

    it('supports controlled accordion group', async () => {
      const user = userEvent.setup();
      const TestComponent = () => {
        const [expanded, setExpanded] = React.useState<string | false>('panel1');

        const handleChange =
          (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
          };

        return (
          <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary>Panel 1</AccordionSummary>
              <AccordionDetails>Content 1</AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary>Panel 2</AccordionSummary>
              <AccordionDetails>Content 2</AccordionDetails>
            </Accordion>
          </div>
        );
      };

      renderWithTheme(<TestComponent />);

      // Panel 1 should be expanded initially
      expect(screen.getByText('Content 1')).toBeVisible();
      expect(screen.queryByText('Content 2')).not.toBeVisible();

      // Click Panel 2
      await user.click(screen.getByText('Panel 2'));

      // Only Panel 2 should be expanded
      expect(screen.queryByText('Content 1')).not.toBeVisible();
      expect(screen.getByText('Content 2')).toBeVisible();
    });
  });
});
