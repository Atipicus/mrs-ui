import { default as React } from '../../../../node_modules/react';
import { GridProps } from './Grid.types';
/**
 * Grid component - responsive grid layout using CSS Grid
 * Uses the new Grid2 component from MUI for improved performance and flexibility
 *
 * @example
 * ```tsx
 * <Grid container spacing={2}>
 *   <Grid size={{ xs: 12, md: 6 }}>
 *     <Item>1</Item>
 *   </Grid>
 *   <Grid size={{ xs: 12, md: 6 }}>
 *     <Item>2</Item>
 *   </Grid>
 * </Grid>
 * ```
 */
export declare const Grid: React.ForwardRefExoticComponent<Omit<GridProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default Grid;
//# sourceMappingURL=Grid.d.ts.map