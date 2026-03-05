import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { useHoverScale } from '../../hooks/animations/useHoverScale';

describe('useHoverScale', () => {
  const HoverCard = ({
    scale,
    duration,
    easing,
  }: {
    scale?: number;
    duration?: string;
    easing?: string;
  }) => {
    const { isHovered, onMouseEnter, onMouseLeave, style } = useHoverScale({
      scale,
      duration,
      easing,
    });

    return (
      <div
        data-testid="hover-card"
        data-hovered={isHovered ? 'true' : 'false'}
        style={style}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        Card
      </div>
    );
  };

  it('returns isHovered, onMouseEnter, onMouseLeave, style', () => {
    let hookResult: ReturnType<typeof useHoverScale> | null = null;
    const TestComponent = () => {
      hookResult = useHoverScale();
      return null;
    };
    render(<TestComponent />);
    expect(hookResult).not.toBeNull();
    expect(typeof hookResult!.isHovered).toBe('boolean');
    expect(typeof hookResult!.onMouseEnter).toBe('function');
    expect(typeof hookResult!.onMouseLeave).toBe('function');
    expect(typeof hookResult!.style).toBe('object');
  });

  it('starts not hovered with scale(1)', () => {
    const { getByTestId } = render(<HoverCard scale={1.1} />);
    const card = getByTestId('hover-card');
    expect(card.style.transform).toContain('scale(1)');
    expect(card.getAttribute('data-hovered')).toBe('false');
  });

  it('scales element on hover and resets on leave', async () => {
    const { getByTestId } = render(<HoverCard scale={1.1} />);
    const card = getByTestId('hover-card');

    fireEvent.mouseEnter(card);
    await waitFor(() => {
      expect(card.style.transform).toContain('scale(1.1)');
      expect(card.getAttribute('data-hovered')).toBe('true');
    });

    fireEvent.mouseLeave(card);
    await waitFor(() => {
      expect(card.style.transform).toContain('scale(1)');
      expect(card.getAttribute('data-hovered')).toBe('false');
    });
  });

  it('uses provided scale and duration options', async () => {
    const { getByTestId } = render(<HoverCard scale={1.2} duration="200ms" />);
    const card = getByTestId('hover-card');

    fireEvent.mouseEnter(card);

    await waitFor(() => {
      expect(card.style.transform).toContain('scale(1.2)');
      expect(card.style.transition).toContain('200ms');
    });
  });

  it('uses default scale of 1.05 when not provided', async () => {
    const { getByTestId } = render(<HoverCard />);
    const card = getByTestId('hover-card');

    fireEvent.mouseEnter(card);
    await waitFor(() => {
      expect(card.style.transform).toContain('scale(1.05)');
    });
  });

  it('applies custom easing in transition', async () => {
    const { getByTestId } = render(<HoverCard easing="linear" />);
    const card = getByTestId('hover-card');

    await waitFor(() => {
      expect(card.style.transition).toContain('linear');
    });
  });

  it('style has cursor: pointer', () => {
    const { getByTestId } = render(<HoverCard />);
    const card = getByTestId('hover-card');
    expect(card.style.cursor).toBe('pointer');
  });
});
