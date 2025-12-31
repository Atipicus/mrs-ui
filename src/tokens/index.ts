/**
 * MRS Design System - Token Hub
 *
 * Central export point for all design tokens.
 * Tokens are generated from source JSON files using Style Dictionary.
 *
 * @example
 * ```typescript
 * import * as tokens from '@mrs-uisystem/ui-v6/tokens';
 *
 * // Access token values
 * const brandColor = tokens.PrimitivesColorsBrandVerones;
 * const buttonRadius = tokens.ComponentButtonBorderRadius;
 * ```
 */

// Re-export all generated token constants
export * from './generated/ts/tokens';

// Re-export the nested JSON structure for advanced usage
export { default as tokenTree } from './generated/ts/tokens.json';
