import { useCallback, useRef } from 'react';
import { PrimitivesMotionDurationModerate } from '../../tokens/generated/ts/tokens';

interface UseBounceOptions {
  duration?: number;
  scale?: number;
}

/**
 * useBounce Hook
 *
 * Triggers a bounce animation effect
 *
 * @param options - Configuration options
 * @param options.duration - Animation duration in ms (default: 300ms from tokens)
 * @param options.scale - Bounce scale factor (default: 1.2)
 *
 * @example
 * ```tsx
 * const { ref, bounce } = useBounce<HTMLButtonElement>();
 *
 * <button ref={ref} onClick={bounce}>
 *   Bounce on click
 * </button>
 * ```
 */
export const useBounce = <T extends HTMLElement>(options: UseBounceOptions = {}) => {
  const { duration = parseInt(PrimitivesMotionDurationModerate), scale = 1.2 } = options;
  const ref = useRef<T>(null);

  const bounce = useCallback(() => {
    if (!ref.current) return;

    const element = ref.current;
    const keyframes = [
      { transform: 'scale(1)' },
      { transform: `scale(${scale})` },
      { transform: 'scale(0.9)' },
      { transform: `scale(${scale * 0.95})` },
      { transform: 'scale(1)' },
    ];

    element.animate(keyframes, {
      duration,
      easing: 'ease-out',
    });
  }, [duration, scale]);

  return { ref, bounce };
};
