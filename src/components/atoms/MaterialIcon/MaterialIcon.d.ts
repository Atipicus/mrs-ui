import { default as React } from '../../../../node_modules/react';
import { MaterialIconProps } from './MaterialIcon.types';
/**
 * MaterialIcon Component
 *
 * Renders icons from Google's Material Icons library using font technology.
 * Supports 5 official Material Design theme variants.
 *
 * **Available Variants:**
 * - **Filled** (default): Solid, filled icons
 * - **Outlined**: Hollow icons with strokes
 * - **Rounded**: Softer appearance with rounded corners
 * - **Two Tone**: Dual-color design
 * - **Sharp**: Angular with sharp corners
 *
 * **When to Use:**
 * - Need specific Material Design icon variants (outlined, rounded, etc.)
 * - Working with designs that specify Material Icons font
 * - Need font-based icon rendering
 *
 * **Alternatives:**
 * - Use `MaterialSymbol` for variable font with customizable weight/fill/grade
 * - Use `Icon` with SVG imports for best performance and tree-shaking
 *
 * @example
 * Basic usage
 * ```tsx
 * <MaterialIcon icon="home" />
 * ```
 *
 * @example
 * With variant
 * ```tsx
 * <MaterialIcon icon="favorite" variant="outlined" />
 * <MaterialIcon icon="settings" variant="rounded" />
 * ```
 *
 * @example
 * With size and color
 * ```tsx
 * <MaterialIcon
 *   icon="delete"
 *   size="large"
 *   color="error.main"
 * />
 * ```
 *
 * @example
 * Clickable icon with accessibility
 * ```tsx
 * <MaterialIcon
 *   icon="close"
 *   onClick={() => handleClose()}
 *   ariaLabel="Close dialog"
 * />
 * ```
 *
 * @example
 * Custom size
 * ```tsx
 * <MaterialIcon icon="star" size={48} />
 * ```
 */
export declare const MaterialIcon: React.ForwardRefExoticComponent<MaterialIconProps & React.RefAttributes<HTMLSpanElement>>;
export default MaterialIcon;
//# sourceMappingURL=MaterialIcon.d.ts.map