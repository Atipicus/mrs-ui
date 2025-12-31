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
export declare const usePulse: <T extends HTMLElement>(options?: UsePulseOptions) => React.RefObject<T>;
export {};
//# sourceMappingURL=usePulse.d.ts.map