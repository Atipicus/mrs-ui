import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { useHoverScale } from '../../hooks/animations/useHoverScale';

describe('useHoverScale', () => {
  const HoverCard = ({
    scale,
    duration,
  }: {
    scale?: number;
    duration?: string;
  }) => {
    const { onMouseEnter, onMouseLeave, style } = useHoverScale({
      scale,
      duration,
    });

    return (
      <div
        data-testid="hover-card"
        style={style}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        Card
      </div>
    );
  };

  it('scales element on hover and resets on leave', async () => {
    const { getByTestId } = render(<HoverCard scale={1.1} />);
    const card = getByTestId('hover-card');

    expect(card.style.transform).toContain('scale(1)');

    fireEvent.mouseEnter(card);
    await waitFor(() => {
      expect(card.style.transform).toContain('scale(1.1)');
    });

    fireEvent.mouseLeave(card);
    await waitFor(() => {
      expect(card.style.transform).toContain('scale(1)');
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
});
