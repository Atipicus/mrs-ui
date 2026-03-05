import { MouseEvent } from 'react';
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
export declare const useRipple: () => {
    ripples: Ripple[];
    createRipple: (event: MouseEvent<HTMLElement>) => void;
    clearRipples: () => void;
};
export {};
//# sourceMappingURL=useRipple.d.ts.map