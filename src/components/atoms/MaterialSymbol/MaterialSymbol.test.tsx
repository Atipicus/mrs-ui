import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MaterialSymbol } from './MaterialSymbol';
import '@testing-library/jest-dom';

describe('MaterialSymbol', () => {
  describe('Rendering', () => {
    it('renders with icon name as text content', () => {
      render(<MaterialSymbol icon="home" />);
      expect(screen.getByText('home')).toBeInTheDocument();
    });

    it('applies correct CSS class', () => {
      const { container } = render(<MaterialSymbol icon="close" />);
      const icon = container.querySelector('.material-symbols-rounded');
      expect(icon).toBeInTheDocument();
    });

    it('renders different icon names', () => {
      const { rerender } = render(<MaterialSymbol icon="star" />);
      expect(screen.getByText('star')).toBeInTheDocument();

      rerender(<MaterialSymbol icon="favorite" />);
      expect(screen.getByText('favorite')).toBeInTheDocument();
    });
  });

  describe('Size Variants', () => {
    it('applies small size correctly', () => {
      const { container } = render(<MaterialSymbol icon="check" size="small" />);
      const icon = container.querySelector('.material-symbols-rounded');
      expect(icon).toHaveStyle({ fontSize: '20px' });
    });

    it('applies medium size correctly (default)', () => {
      const { container } = render(<MaterialSymbol icon="check" size="medium" />);
      const icon = container.querySelector('.material-symbols-rounded');
      expect(icon).toHaveStyle({ fontSize: '24px' });
    });

    it('applies large size correctly', () => {
      const { container } = render(<MaterialSymbol icon="check" size="large" />);
      const icon = container.querySelector('.material-symbols-rounded');
      expect(icon).toHaveStyle({ fontSize: '36px' });
    });

    it('applies custom numeric size', () => {
      const { container } = render(<MaterialSymbol icon="check" size={48} />);
      const icon = container.querySelector('.material-symbols-rounded');
      expect(icon).toHaveStyle({ fontSize: '48px' });
    });

    it('applies inherit size', () => {
      const { container } = render(<MaterialSymbol icon="check" size="inherit" />);
      const icon = container.querySelector('.material-symbols-rounded');
      expect(icon).toHaveStyle({ fontSize: 'inherit' });
    });

    it('uses medium size by default', () => {
      const { container } = render(<MaterialSymbol icon="check" />);
      const icon = container.querySelector('.material-symbols-rounded');
      expect(icon).toHaveStyle({ fontSize: '24px' });
    });
  });

  describe('Color', () => {
    it('inherits color by default', () => {
      const { container } = render(<MaterialSymbol icon="error" />);
      const icon = container.querySelector('.material-symbols-rounded');
      expect(icon).toHaveStyle({ color: 'inherit' });
    });

    it('applies custom color', () => {
      const { container } = render(<MaterialSymbol icon="error" color="red" />);
      const icon = container.querySelector('.material-symbols-rounded');
      expect(icon).toHaveStyle({ color: 'red' });
    });

    it('applies hex color', () => {
      const { container } = render(<MaterialSymbol icon="info" color="#00686f" />);
      const icon = container.querySelector('.material-symbols-rounded');
      expect(icon).toHaveStyle({ color: 'rgb(0, 104, 111)' });
    });
  });

  describe('Accessibility', () => {
    it('applies aria-label', () => {
      render(<MaterialSymbol icon="info" ariaLabel="Information icon" />);
      expect(screen.getByLabelText('Information icon')).toBeInTheDocument();
    });

    it('applies role="img" when aria-label is present', () => {
      const { container } = render(<MaterialSymbol icon="check" ariaLabel="Success" />);
      const icon = container.querySelector('[role="img"]');
      expect(icon).toBeInTheDocument();
    });

    it('does not apply role when no aria-label', () => {
      const { container } = render(<MaterialSymbol icon="check" />);
      const icon = container.querySelector('[role="img"]');
      expect(icon).not.toBeInTheDocument();
    });

    it('applies aria-hidden', () => {
      const { container } = render(<MaterialSymbol icon="close" ariaHidden={true} />);
      const icon = container.querySelector('[aria-hidden="true"]');
      expect(icon).toBeInTheDocument();
    });

    it('does not apply role when aria-hidden is true', () => {
      const { container } = render(
        <MaterialSymbol icon="close" ariaLabel="Close" ariaHidden={true} />
      );
      const icon = container.querySelector('[role="img"]');
      expect(icon).not.toBeInTheDocument();
    });
  });

  describe('Click Handling', () => {
    it('calls onClick handler when clicked', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();

      render(<MaterialSymbol icon="close" onClick={handleClick} />);

      const icon = screen.getByText('close');
      await user.click(icon);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies pointer cursor when clickable', () => {
      const { container } = render(<MaterialSymbol icon="close" onClick={() => {}} />);
      const icon = container.querySelector('.material-symbols-rounded');
      expect(icon).toHaveStyle({ cursor: 'pointer' });
    });

    it('does not apply pointer cursor when not clickable', () => {
      const { container } = render(<MaterialSymbol icon="close" />);
      const icon = container.querySelector('.material-symbols-rounded');
      expect(icon).toHaveStyle({ cursor: 'inherit' });
    });
  });

  describe('Custom Styling', () => {
    it('applies custom className', () => {
      const { container } = render(<MaterialSymbol icon="star" className="custom-class" />);
      const icon = container.querySelector('.custom-class');
      expect(icon).toBeInTheDocument();
    });

    it('applies sx prop', () => {
      const { container } = render(<MaterialSymbol icon="home" sx={{ opacity: 0.5 }} />);
      const icon = container.querySelector('.material-symbols-rounded');
      expect(icon).toHaveStyle({ opacity: '0.5' });
    });

    it('merges sx with default styles', () => {
      const { container } = render(
        <MaterialSymbol icon="settings" sx={{ color: 'blue', fontSize: '32px' }} />
      );
      const icon = container.querySelector('.material-symbols-rounded');
      expect(icon).toHaveStyle({
        color: 'blue',
        fontSize: '32px',
      });
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLSpanElement>();
      render(<MaterialSymbol icon="check" ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    it('ref has correct text content', () => {
      const ref = React.createRef<HTMLSpanElement>();
      render(<MaterialSymbol icon="favorite" ref={ref} />);
      expect(ref.current?.textContent).toBe('favorite');
    });
  });

  describe('Combined Props', () => {
    it('renders with multiple props', () => {
      const handleClick = jest.fn();
      const { container } = render(
        <MaterialSymbol
          icon="star"
          size="large"
          fill={1}
          weight={700}
          grade={50}
          color="gold"
          onClick={handleClick}
          ariaLabel="Gold star"
          className="custom-star"
        />
      );

      const icon = container.querySelector('.material-symbols-rounded');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass('custom-star');
      expect(icon).toHaveStyle({
        fontSize: '36px',
        color: 'gold',
        cursor: 'pointer',
      });
      expect(screen.getByLabelText('Gold star')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('renders with empty className', () => {
      const { container } = render(<MaterialSymbol icon="home" className="" />);
      const icon = container.querySelector('.material-symbols-rounded');
      expect(icon).toBeInTheDocument();
    });

    it('handles very large custom sizes', () => {
      const { container } = render(<MaterialSymbol icon="star" size={200} />);
      const icon = container.querySelector('.material-symbols-rounded');
      expect(icon).toHaveStyle({ fontSize: '200px' });
    });

    it('handles very small custom sizes', () => {
      const { container } = render(<MaterialSymbol icon="star" size={8} />);
      const icon = container.querySelector('.material-symbols-rounded');
      expect(icon).toHaveStyle({ fontSize: '8px' });
    });
  });
});
