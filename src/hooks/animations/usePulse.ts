import { useEffect, useRef } from 'react';

interface UsePulseOptions {
  duration?: number;
  scale?: number;
  enabled?: boolean;
}

/**
 * usePulse Hook
 *
 * Creates a pulsing animation effect
 *
 * @param options - Configuration options
 * @param options.duration - Animation duration in ms (default: 1000)
 * @param options.scale - Scale factor (default: 1.05)
 * @param options.enabled - Whether animation is enabled (default: true)
 *
 * @example
 * ```tsx
 * const pulseRef = usePulse({ duration: 1000, scale: 1.1 });
 *
 * <div ref={pulseRef}>Pulsing element</div>
 * ```
 */
export const usePulse = <T extends HTMLElement>(
  options: UsePulseOptions = {}
): React.RefObject<T> => {
  const { duration = 1000, scale = 1.05, enabled = true } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!enabled || !ref.current) return;

    const element = ref.current;
    const keyframes = [
      { transform: 'scale(1)' },
      { transform: `scale(${scale})` },
      { transform: 'scale(1)' },
    ];

    const animation = element.animate(keyframes, {
      duration,
      iterations: Infinity,
      easing: 'ease-in-out',
    });

    return () => {
      animation.cancel();
    };
  }, [duration, scale, enabled]);

  return ref;
};

