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
export declare const useHoverScale: (options?: UseHoverScaleOptions) => {
    isHovered: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    style: {
        transform: string;
        transition: string;
        cursor: string;
    };
};
export {};
//# sourceMappingURL=useHoverScale.d.ts.map