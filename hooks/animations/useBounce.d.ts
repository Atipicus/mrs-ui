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
export declare const useBounce: <T extends HTMLElement>(options?: UseBounceOptions) => {
    ref: import('react').RefObject<T>;
    bounce: () => void;
};
export {};
//# sourceMappingURL=useBounce.d.ts.map