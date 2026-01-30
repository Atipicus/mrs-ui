import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { usePulse } from '../../hooks/animations/usePulse';

describe('usePulse', () => {
  beforeAll(() => {
    if (!Element.prototype.animate) {
      Element.prototype.animate = jest.fn();
    }
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const PulseElement = ({
    enabled = true,
    duration = 1000,
    scale = 1.05,
  }: {
    enabled?: boolean;
    duration?: number;
    scale?: number;
  }) => {
    const ref = usePulse<HTMLDivElement>({ enabled, duration, scale });
    return <div ref={ref} data-testid="pulse-element" />;
  };

  it('starts animation when enabled', async () => {
    const animateSpy = jest
      .spyOn(Element.prototype, 'animate')
      .mockReturnValue({ cancel: jest.fn() } as any);

    render(<PulseElement enabled={true} />);

    await waitFor(() => {
      expect(animateSpy).toHaveBeenCalled();
    });
  });

  it('allows disabling without crashing', () => {
    render(<PulseElement enabled={false} />);
  });

  it('passes duration and easing to animation', async () => {
    const animateSpy = jest
      .spyOn(Element.prototype, 'animate')
      .mockReturnValue({ cancel: jest.fn() } as any);

    render(<PulseElement duration={750} />);

    await waitFor(() => {
      expect(animateSpy).toHaveBeenCalled();
    });

    const [, options] = animateSpy.mock.calls[0];
    expect(options).toMatchObject({
      easing: 'ease-in-out',
      iterations: Infinity,
    });
    expect(typeof options.duration).toBe('number');
    expect(options.duration).toBeGreaterThan(0);
  });
});
