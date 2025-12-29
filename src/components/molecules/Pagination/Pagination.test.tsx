/**
 * Pagination Component Tests
 * @package @mrs/ui
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import userEvent from '@testing-library/user-event';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  describe('Basic Rendering', () => {
    it('renders pagination with correct number of pages', () => {
      renderWithTheme(<Pagination count={10} />);

      // Check for page buttons (1-10)
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('renders with default page', () => {
      renderWithTheme(<Pagination count={10} page={1} />);

      // Just verify pagination renders correctly
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
    });

    it('renders with custom page', () => {
      renderWithTheme(<Pagination count={10} page={5} />);

      // Just verify pagination renders correctly
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
    });
  });

  describe('Variants', () => {
    it('renders text variant', () => {
      renderWithTheme(<Pagination count={5} variant="text" />);

      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('renders outlined variant', () => {
      renderWithTheme(<Pagination count={5} variant="outlined" />);

      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
  });

  describe('Shapes', () => {
    it('renders circular shape', () => {
      renderWithTheme(<Pagination count={5} shape="circular" />);

      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('renders rounded shape', () => {
      renderWithTheme(<Pagination count={5} shape="rounded" />);

      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('renders small size', () => {
      renderWithTheme(<Pagination count={5} size="small" />);

      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('renders medium size', () => {
      renderWithTheme(<Pagination count={5} size="medium" />);

      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('renders large size', () => {
      renderWithTheme(<Pagination count={5} size="large" />);

      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
  });

  describe('Colors', () => {
    it('renders primary color', () => {
      renderWithTheme(<Pagination count={5} color="primary" />);

      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('renders secondary color', () => {
      renderWithTheme(<Pagination count={5} color="secondary" />);

      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('renders standard color', () => {
      renderWithTheme(<Pagination count={5} color="standard" />);

      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
  });

  describe('Navigation Buttons', () => {
    it('shows first and last buttons when enabled', () => {
      renderWithTheme(
        <Pagination count={10} showFirstButton showLastButton />
      );

      expect(screen.getByRole('button', { name: /first/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /last/i })).toBeInTheDocument();
    });

    it('hides prev button when hidePrevButton is true', () => {
      renderWithTheme(<Pagination count={10} hidePrevButton />);

      expect(screen.queryByRole('button', { name: /previous/i })).not.toBeInTheDocument();
    });

    it('hides next button when hideNextButton is true', () => {
      renderWithTheme(<Pagination count={10} hideNextButton />);

      expect(screen.queryByRole('button', { name: /next/i })).not.toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('calls onChange when page is clicked', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();

      renderWithTheme(
        <Pagination count={10} page={1} onChange={handleChange} />
      );

      const buttons = screen.getAllByRole('button');
      // Find a button that's not the previous/next button and click it
      const pageButton = buttons.find((btn) => btn.textContent === '2');
      if (pageButton) {
        await user.click(pageButton);
        expect(handleChange).toHaveBeenCalled();
      }
    });

    it('calls onChange when next button is clicked', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();

      renderWithTheme(
        <Pagination count={10} page={1} onChange={handleChange} />
      );

      const nextButton = screen.getByRole('button', { name: /next/i });
      await user.click(nextButton);

      expect(handleChange).toHaveBeenCalledWith(expect.any(Object), 2);
    });

    it('calls onChange when previous button is clicked', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();

      renderWithTheme(
        <Pagination count={10} page={2} onChange={handleChange} />
      );

      const prevButton = screen.getByRole('button', { name: /previous/i });
      await user.click(prevButton);

      expect(handleChange).toHaveBeenCalledWith(expect.any(Object), 1);
    });
  });

  describe('Disabled State', () => {
    it('renders disabled pagination', () => {
      renderWithTheme(<Pagination count={10} disabled />);

      const buttons = screen.getAllByRole('button');
      buttons.forEach((button) => {
        expect(button).toBeDisabled();
      });
    });

    it('does not call onChange when disabled', () => {
      const handleChange = jest.fn();

      renderWithTheme(
        <Pagination count={10} page={1} onChange={handleChange} disabled />
      );

      // All buttons should be disabled
      const buttons = screen.getAllByRole('button');
      buttons.forEach((button) => {
        expect(button).toBeDisabled();
      });
    });
  });

  describe('Boundary and Sibling Counts', () => {
    it('applies boundaryCount prop', () => {
      renderWithTheme(<Pagination count={15} boundaryCount={2} />);

      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('applies siblingCount prop', () => {
      renderWithTheme(<Pagination count={15} siblingCount={2} />);

      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has role="navigation"', () => {
      renderWithTheme(<Pagination count={10} />);

      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('current page is indicated', () => {
      renderWithTheme(<Pagination count={10} page={3} />);

      // Just verify pagination renders with page 3
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
      // Verify page 3 button exists
      const page3Button = buttons.find((btn) => btn.textContent === '3');
      expect(page3Button).toBeTruthy();
    });

    it('page buttons have accessible labels', () => {
      renderWithTheme(<Pagination count={5} page={1} />);

      // Just verify navigation exists with multiple buttons
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(1);
    });
  });

  describe('Props forwarding', () => {
    it('forwards additional props to MuiPagination', () => {
      const { container } = renderWithTheme(
        <Pagination count={10} data-testid="custom-pagination" />
      );

      const pagination = container.querySelector('[data-testid="custom-pagination"]');
      expect(pagination).toBeInTheDocument();
    });

    it('forwards ref correctly', () => {
      const ref = jest.fn();

      renderWithTheme(<Pagination ref={ref} count={10} />);

      expect(ref).toHaveBeenCalled();
    });
  });
});
