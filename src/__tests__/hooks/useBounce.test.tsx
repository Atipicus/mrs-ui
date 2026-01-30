import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { useBounce } from '../../hooks/animations/useBounce';

describe('useBounce', () => {
  beforeAll(() => {
    if (!Element.prototype.animate) {
      Element.prototype.animate = jest.fn();
    }
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const BounceButton = ({
    duration,
    scale,
  }: {
    duration?: number;
    scale?: number;
  }) => {
    const { ref, bounce } = useBounce<HTMLButtonElement>({ duration, scale });
    return (
      <button ref={ref} onClick={bounce} data-testid="bounce-btn">
        Bounce
      </button>
    );
  };

  it('triggers bounce animation on click', async () => {
    const animateSpy = jest
      .spyOn(Element.prototype, 'animate')
      .mockReturnValue({ cancel: jest.fn() } as any);

    const { getByTestId } = render(<BounceButton />);
    fireEvent.click(getByTestId('bounce-btn'));

    await waitFor(() => {
      expect(animateSpy).toHaveBeenCalled();
    });
  });

  it('uses provided duration and scale options', async () => {
    const animateSpy = jest
      .spyOn(Element.prototype, 'animate')
      .mockReturnValue({ cancel: jest.fn() } as any);

    const { getByTestId } = render(<BounceButton duration={500} scale={1.3} />);
    fireEvent.click(getByTestId('bounce-btn'));

    await waitFor(() => {
      expect(animateSpy).toHaveBeenCalled();
    });

    const [keyframes, options] = animateSpy.mock.calls[0];
    expect(options).toMatchObject({
      easing: 'ease-out',
    });
    expect(typeof options.duration).toBe('number');
    expect(options.duration).toBeGreaterThan(0);
    expect(keyframes).toEqual(
      expect.arrayContaining([
        { transform: 'scale(1)' },
      ])
    );
    expect(
      keyframes.some((frame) => typeof frame.transform === 'string' && frame.transform.startsWith('scale('))
    ).toBe(true);
  });
});
