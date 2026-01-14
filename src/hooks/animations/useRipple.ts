import type { MouseEvent } from 'react';
import { useState, useCallback } from 'react';
import { PrimitivesMotionDurationFast } from '../../tokens/generated/ts/tokens';

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

/**
 * useRipple Hook
 *
 * Creates Material Design ripple effect on click
 *
 * @example
 * ```tsx
 * const { ripples, createRipple, clearRipples } = useRipple();
 *
 * <button onClick={createRipple}>
 *   {ripples.map(ripple => (
 *     <span key={ripple.id} className="ripple" style={{...}} />
 *   ))}
 *   Click me
 * </button>
 * ```
 */
export const useRipple = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = useCallback((event: MouseEvent<HTMLElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple: Ripple = {
      x,
      y,
      size,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation
    const duration = parseInt(PrimitivesMotionDurationFast) * 6; // 600ms
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, duration);
  }, []);

  const clearRipples = useCallback(() => {
    setRipples([]);
  }, []);

  return { ripples, createRipple, clearRipples };
};
