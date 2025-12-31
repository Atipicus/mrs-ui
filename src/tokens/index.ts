/**
 * MRS Design System - Token Hub
 *
 * Central export point for all design tokens.
 * Tokens are generated from source JSON files using Style Dictionary.
 *
 * @example
 * ```typescript
 * import * as tokens from '@atipicus/mrs-ui/tokens';
 *
 * // Access token values
 * const brandColor = tokens.PrimitivesColorsBrandVerones;
 * const buttonRadius = tokens.ComponentButtonBorderRadius;
 * ```
 */

// Re-export all generated token constants
export * from './generated/ts/tokens';

// Re-export the nested JSON structure for advanced usage
// Note: JSON files are in generated/json/ folder, not generated/ts/
// Users can import directly: import tokens from '@atipicus/mrs-ui/tokens/generated/json/tokens-nested.json'
