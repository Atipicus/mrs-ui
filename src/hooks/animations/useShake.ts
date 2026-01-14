import { useCallback, useRef } from 'react';
import { PrimitivesMotionDurationBase } from '../../tokens/generated/ts/tokens';

interface UseShakeOptions {
  duration?: number;
  distance?: number;
}

/**
 * useShake Hook
 *
 * Triggers a shake animation (useful for errors, invalid inputs)
 *
 * @param options - Configuration options
 * @param options.duration - Animation duration in ms (default: 200ms from tokens)
 * @param options.distance - Shake distance in pixels (default: 10)
 *
 * @example
 * ```tsx
 * const { ref, shake } = useShake<HTMLInputElement>();
 *
 * <input
 *   ref={ref}
 *   onError={() => shake()}
 * />
 * ```
 */
export const useShake = <T extends HTMLElement>(options: UseShakeOptions = {}) => {
  const { duration = parseInt(PrimitivesMotionDurationBase), distance = 10 } = options;
  const ref = useRef<T>(null);

  const shake = useCallback(() => {
    if (!ref.current) return;

    const element = ref.current;
    const keyframes = [
      { transform: 'translateX(0)' },
      { transform: `translateX(-${distance}px)` },
      { transform: `translateX(${distance}px)` },
      { transform: `translateX(-${distance}px)` },
      { transform: `translateX(${distance}px)` },
      { transform: 'translateX(0)' },
    ];

    element.animate(keyframes, {
      duration,
      easing: 'ease-in-out',
    });
  }, [duration, distance]);

  return { ref, shake };
};
