import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { useShake } from '../../hooks/animations/useShake';

describe('useShake', () => {
  beforeAll(() => {
    if (!Element.prototype.animate) {
      Element.prototype.animate = jest.fn();
    }
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const ShakeButton = ({ duration, distance }: { duration?: number; distance?: number }) => {
    const { ref, shake } = useShake<HTMLButtonElement>({ duration, distance });
    return (
      <button ref={ref} onClick={shake} data-testid="shake-btn">
        Shake
      </button>
    );
  };

  it('returns ref and shake function', () => {
    let hookResult: ReturnType<typeof useShake> | null = null;
    const TestComponent = () => {
      hookResult = useShake();
      return null;
    };
    render(<TestComponent />);
    expect(hookResult).not.toBeNull();
    expect(typeof hookResult!.shake).toBe('function');
    expect(hookResult!.ref).toBeDefined();
  });

  it('triggers shake animation on click', async () => {
    const animateSpy = jest
      .spyOn(Element.prototype, 'animate')
      .mockReturnValue({ cancel: jest.fn() } as any);

    const { getByTestId } = render(<ShakeButton />);
    fireEvent.click(getByTestId('shake-btn'));

    await waitFor(() => {
      expect(animateSpy).toHaveBeenCalled();
    });
  });

  it('uses provided duration and distance options', async () => {
    const animateSpy = jest
      .spyOn(Element.prototype, 'animate')
      .mockReturnValue({ cancel: jest.fn() } as any);

    const { getByTestId } = render(<ShakeButton duration={300} distance={20} />);
    fireEvent.click(getByTestId('shake-btn'));

    await waitFor(() => {
      expect(animateSpy).toHaveBeenCalled();
    });

    const [keyframes, options] = animateSpy.mock.calls[0];
    expect(options).toMatchObject({ easing: 'ease-in-out' });
    expect(typeof options.duration).toBe('number');
    expect(options.duration).toBeGreaterThan(0);
    expect(keyframes).toEqual(expect.arrayContaining([{ transform: 'translateX(0)' }]));
    expect(
      keyframes.some(
        (frame: any) =>
          typeof frame.transform === 'string' &&
          frame.transform.startsWith('translateX(') &&
          frame.transform !== 'translateX(0)'
      )
    ).toBe(true);
  });

  it('uses custom distance in keyframes', async () => {
    const animateSpy = jest
      .spyOn(Element.prototype, 'animate')
      .mockReturnValue({ cancel: jest.fn() } as any);

    const { getByTestId } = render(<ShakeButton distance={25} />);
    fireEvent.click(getByTestId('shake-btn'));

    await waitFor(() => {
      expect(animateSpy).toHaveBeenCalled();
    });

    expect(animateSpy).toHaveBeenCalledWith(
      expect.arrayContaining([
        { transform: 'translateX(-25px)' },
        { transform: 'translateX(25px)' },
      ]),
      expect.any(Object)
    );
  });

  it('does not throw when ref is not attached (no element)', () => {
    const NoRefComponent = () => {
      const { shake } = useShake<HTMLButtonElement>();
      return (
        <button onClick={shake} data-testid="no-ref-btn">
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

    const { getByTestId } = render(<ShakeButton />);
    fireEvent.click(getByTestId('shake-btn'));

    await waitFor(() => {
      expect(animateSpy).toHaveBeenCalled();
    });

    const [, options] = animateSpy.mock.calls[0];
    expect(options.duration).toBeGreaterThan(0);
  });
});
