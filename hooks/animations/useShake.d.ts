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
export declare const useShake: <T extends HTMLElement>(options?: UseShakeOptions) => {
    ref: import('react').RefObject<T>;
    shake: () => void;
};
export {};
//# sourceMappingURL=useShake.d.ts.map