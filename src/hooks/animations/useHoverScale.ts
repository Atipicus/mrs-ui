import { useState, useCallback } from 'react';
import { PrimitivesMotionDurationFast, PrimitivesMotionEasingStandard } from '../../tokens/generated/ts/tokens';

interface UseHoverScaleOptions {
  scale?: number;
  duration?: string;
  easing?: string;
}

/**
 * useHoverScale Hook
 *
 * Provides hover scale animation state and handlers
 *
 * @param options - Configuration options
 * @param options.scale - Scale factor on hover (default: 1.05)
 * @param options.duration - Transition duration (default: from tokens)
 * @param options.easing - Easing function (default: from tokens)
 *
 * @example
 * ```tsx
 * const { isHovered, onMouseEnter, onMouseLeave, style } = useHoverScale({
 *   scale: 1.1
 * });
 *
 * <div
 *   onMouseEnter={onMouseEnter}
 *   onMouseLeave={onMouseLeave}
 *   style={style}
 * >
 *   Hover me
 * </div>
 * ```
 */
export const useHoverScale = (options: UseHoverScaleOptions = {}) => {
  const {
    scale = 1.05,
    duration = PrimitivesMotionDurationFast,
    easing = PrimitivesMotionEasingStandard,
  } = options;

  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = useCallback(() => setIsHovered(true), []);
  const onMouseLeave = useCallback(() => setIsHovered(false), []);

  const style = {
    transform: isHovered ? `scale(${scale})` : 'scale(1)',
    transition: `transform ${duration} ${easing}`,
    cursor: 'pointer',
  };

  return {
    isHovered,
    onMouseEnter,
    onMouseLeave,
    style,
  };
};

