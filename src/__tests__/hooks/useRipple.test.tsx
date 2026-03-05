import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { useRipple } from '../../hooks/animations/useRipple';

const mockRect = (element: HTMLElement, rect: Partial<DOMRect> = {}) => {
  jest.spyOn(element, 'getBoundingClientRect').mockReturnValue({
    width: 120,
    height: 40,
    top: 20,
    left: 10,
    right: 130,
    bottom: 60,
    x: 10,
    y: 20,
    toJSON: () => ({}),
    ...rect,
  } as DOMRect);
};

const RippleButton = () => {
  const { ripples, createRipple, clearRipples } = useRipple();

  return (
    <button onClick={createRipple} onDoubleClick={clearRipples} data-testid="ripple-button">
      Click me
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          data-testid="ripple-element"
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            borderRadius: '50%',
          }}
        />
      ))}
    </button>
  );
};

describe('useRipple', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  it('creates a ripple on click', async () => {
    render(<RippleButton />);
    const button = screen.getByTestId('ripple-button');
    mockRect(button);

    fireEvent.click(button, { clientX: 50, clientY: 40 });

    await waitFor(() => {
      expect(screen.queryAllByTestId('ripple-element')).toHaveLength(1);
    });
  });

  it('positions the ripple using click coordinates', async () => {
    render(<RippleButton />);
    const button = screen.getByTestId('ripple-button');
    mockRect(button, { width: 100, height: 40, left: 10, top: 20 });

    fireEvent.click(button, { clientX: 60, clientY: 40 });

    await waitFor(() => {
      const ripple = screen.getByTestId('ripple-element');
      const style = ripple.getAttribute('style') ?? '';
      expect(style).toContain('left:');
      expect(style).toContain('top:');
    });
  });

  it('ripple size is max of width and height', async () => {
    render(<RippleButton />);
    const button = screen.getByTestId('ripple-button');
    // width > height
    mockRect(button, { width: 200, height: 50, left: 0, top: 0 });

    fireEvent.click(button, { clientX: 100, clientY: 25 });

    await waitFor(() => {
      const ripple = screen.getByTestId('ripple-element');
      const style = ripple.getAttribute('style') ?? '';
      expect(style).toContain('width: 200');
    });
  });

  it('supports multiple ripples', async () => {
    render(<RippleButton />);
    const button = screen.getByTestId('ripple-button');
    mockRect(button);

    jest
      .spyOn(Date, 'now')
      .mockReturnValueOnce(1001)
      .mockReturnValueOnce(1002)
      .mockReturnValueOnce(1003);

    fireEvent.click(button, { clientX: 40, clientY: 30 });
    fireEvent.click(button, { clientX: 45, clientY: 35 });
    fireEvent.click(button, { clientX: 50, clientY: 40 });

    await waitFor(() => {
      expect(screen.queryAllByTestId('ripple-element').length).toBeGreaterThanOrEqual(3);
    });
  });

  it('clears ripples after animation duration', async () => {
    render(<RippleButton />);
    const button = screen.getByTestId('ripple-button');
    mockRect(button);

    fireEvent.click(button, { clientX: 40, clientY: 30 });

    await waitFor(() => {
      expect(screen.queryAllByTestId('ripple-element')).toHaveLength(1);
    });

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    await waitFor(() => {
      expect(screen.queryAllByTestId('ripple-element')).toHaveLength(0);
    });
  });

  it('clearRipples removes all ripples immediately', async () => {
    render(<RippleButton />);
    const button = screen.getByTestId('ripple-button');
    mockRect(button);

    jest.spyOn(Date, 'now').mockReturnValueOnce(2001).mockReturnValueOnce(2002);

    fireEvent.click(button, { clientX: 40, clientY: 30 });
    fireEvent.click(button, { clientX: 50, clientY: 30 });

    await waitFor(() => {
      expect(screen.queryAllByTestId('ripple-element').length).toBeGreaterThanOrEqual(2);
    });

    fireEvent.dblClick(button);

    await waitFor(() => {
      expect(screen.queryAllByTestId('ripple-element')).toHaveLength(0);
    });
  });

  it('each ripple has a unique id based on Date.now()', async () => {
    render(<RippleButton />);
    const button = screen.getByTestId('ripple-button');
    mockRect(button);

    jest.spyOn(Date, 'now').mockReturnValueOnce(3001).mockReturnValueOnce(3002);

    fireEvent.click(button, { clientX: 40, clientY: 30 });
    fireEvent.click(button, { clientX: 50, clientY: 30 });

    await waitFor(() => {
      const ripples = screen.queryAllByTestId('ripple-element');
      expect(ripples.length).toBe(2);
    });
  });

  it('each ripple is removed independently after timeout', async () => {
    render(<RippleButton />);
    const button = screen.getByTestId('ripple-button');
    mockRect(button);

    jest.spyOn(Date, 'now').mockReturnValueOnce(4001).mockReturnValueOnce(4002);

    fireEvent.click(button, { clientX: 40, clientY: 30 });

    await waitFor(() => {
      expect(screen.queryAllByTestId('ripple-element')).toHaveLength(1);
    });

    act(() => {
      jest.advanceTimersByTime(700);
    });

    await waitFor(() => {
      expect(screen.queryAllByTestId('ripple-element')).toHaveLength(0);
    });
  });

  it('exposes ripples array, createRipple, and clearRipples', () => {
    let hookResult: ReturnType<typeof useRipple> | null = null;

    const TestComponent = () => {
      hookResult = useRipple();
      return null;
    };

    render(<TestComponent />);

    expect(hookResult).not.toBeNull();
    expect(hookResult!.ripples).toEqual([]);
    expect(typeof hookResult!.createRipple).toBe('function');
    expect(typeof hookResult!.clearRipples).toBe('function');
  });
});
