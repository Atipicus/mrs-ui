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

  const BounceButton = ({ duration, scale }: { duration?: number; scale?: number }) => {
    const { ref, bounce } = useBounce<HTMLButtonElement>({ duration, scale });
    return (
      <button ref={ref} onClick={bounce} data-testid="bounce-btn">
        Bounce
      </button>
    );
  };

  it('returns ref and bounce function', () => {
    let hookResult: ReturnType<typeof useBounce> | null = null;
    const TestComponent = () => {
      hookResult = useBounce();
      return null;
    };
    render(<TestComponent />);
    expect(hookResult).not.toBeNull();
    expect(typeof hookResult!.bounce).toBe('function');
    expect(hookResult!.ref).toBeDefined();
  });

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
    expect(options).toMatchObject({ easing: 'ease-out' });
    expect(typeof options.duration).toBe('number');
    expect(options.duration).toBeGreaterThan(0);
    expect(keyframes).toEqual(expect.arrayContaining([{ transform: 'scale(1)' }]));
    expect(
      keyframes.some(
        (frame: any) => typeof frame.transform === 'string' && frame.transform.startsWith('scale(')
      )
    ).toBe(true);
  });

  it('uses custom scale in keyframes', async () => {
    const animateSpy = jest
      .spyOn(Element.prototype, 'animate')
      .mockReturnValue({ cancel: jest.fn() } as any);

    const { getByTestId } = render(<BounceButton scale={1.5} />);
    fireEvent.click(getByTestId('bounce-btn'));

    await waitFor(() => {
      expect(animateSpy).toHaveBeenCalled();
    });

    expect(animateSpy).toHaveBeenCalledWith(
      expect.arrayContaining([{ transform: 'scale(1.5)' }]),
      expect.any(Object)
    );
  });

  it('does not throw when ref is not attached (no element)', () => {
    const NoRefComponent = () => {
      const { bounce } = useBounce<HTMLButtonElement>();
      return (
        <button onClick={bounce} data-testid="no-ref-btn">
          No ref
        </button>
      );
    };

    const { getByTestId } = render(<NoRefComponent />);
    expect(() => fireEvent.click(getByTestId('no-ref-btn'))).not.toThrow();
  });

  it('uses default duration from tokens when not provided', async () => {
    const animateSpy = jest
      .spyOn(Element.prototype, 'animate')
      .mockReturnValue({ cancel: jest.fn() } as any);

    const { getByTestId } = render(<BounceButton />);
    fireEvent.click(getByTestId('bounce-btn'));

    await waitFor(() => {
      expect(animateSpy).toHaveBeenCalled();
    });

    const [, options] = animateSpy.mock.calls[0];
    expect(options.duration).toBeGreaterThan(0);
  });
});
