/**
 * Lazy Loaded Components
 *
 * This file provides lazy-loaded versions of heavy components
 * to optimize initial bundle size and improve application performance.
 *
 * Use these exports when you want to load components on-demand
 * with React.lazy() and Suspense.
 *
 * @example
 * ```tsx
 * import { Suspense } from 'react';
 * import { LazyTable } from '@atipicus/mrs-ui/lazy';
 * import { CircularProgress } from '@atipicus/mrs-ui';
 *
 * function MyApp() {
 *   return (
 *     <Suspense fallback={<CircularProgress />}>
 *       <LazyTable>
 *         // ... table content
 *       </LazyTable>
 *     </Suspense>
 *   );
 * }
 * ```
 *
 * @package @atipicus/mrs-ui
 * @version 0.12.0
 */
/**
 * Lazy-loaded DatePicker component
 *
 * Saves ~196 KB from initial bundle if date pickers are not immediately needed.
 *
 * @example
 * ```tsx
 * import { Suspense } from 'react';
 * import { LazyDatePicker } from '@atipicus/mrs-ui/lazy';
 *
 * <Suspense fallback={<CircularProgress />}>
 *   <LazyDatePicker label="Select Date" />
 * </Suspense>
 * ```
 */
export declare const LazyDatePicker: import('../node_modules/react').LazyExoticComponent<import('../node_modules/react').ForwardRefExoticComponent<import('./components').DatePickerProps & import('../node_modules/react').RefAttributes<HTMLDivElement>>>;
/**
 * Lazy-loaded TimePicker component
 *
 * Part of the date-pickers chunk (~196 KB gzipped).
 *
 * @example
 * ```tsx
 * import { Suspense } from 'react';
 * import { LazyTimePicker } from '@atipicus/mrs-ui/lazy';
 *
 * <Suspense fallback={<CircularProgress />}>
 *   <LazyTimePicker label="Select Time" />
 * </Suspense>
 * ```
 */
export declare const LazyTimePicker: import('../node_modules/react').LazyExoticComponent<import('../node_modules/react').ForwardRefExoticComponent<import('./components').TimePickerProps & import('../node_modules/react').RefAttributes<HTMLDivElement>>>;
/**
 * Lazy-loaded DateTimePicker component
 *
 * Part of the date-pickers chunk (~196 KB gzipped).
 *
 * @example
 * ```tsx
 * import { Suspense } from 'react';
 * import { LazyDateTimePicker } from '@atipicus/mrs-ui/lazy';
 *
 * <Suspense fallback={<CircularProgress />}>
 *   <LazyDateTimePicker label="Select Date & Time" />
 * </Suspense>
 * ```
 */
export declare const LazyDateTimePicker: import('../node_modules/react').LazyExoticComponent<import('../node_modules/react').ForwardRefExoticComponent<import('./components').DateTimePickerProps & import('../node_modules/react').RefAttributes<HTMLDivElement>>>;
/**
 * Lazy-loaded Table component
 *
 * Saves ~70 KB from initial bundle. Use for tables that are not immediately visible.
 *
 * Includes: Table, TableContainer, TableHead, TableBody, TableFooter, TableRow, TableCell
 *
 * @example
 * ```tsx
 * import { Suspense } from 'react';
 * import {
 *   LazyTable,
 *   LazyTableContainer,
 *   LazyTableHead,
 *   LazyTableBody,
 *   LazyTableRow,
 *   LazyTableCell
 * } from '@atipicus/mrs-ui/lazy';
 *
 * <Suspense fallback={<CircularProgress />}>
 *   <LazyTableContainer>
 *     <LazyTable>
 *       <LazyTableHead>
 *         <LazyTableRow>
 *           <LazyTableCell>Name</LazyTableCell>
 *         </LazyTableRow>
 *       </LazyTableHead>
 *     </LazyTable>
 *   </LazyTableContainer>
 * </Suspense>
 * ```
 */
export declare const LazyTable: import('../node_modules/react').LazyExoticComponent<import('../node_modules/react').MemoExoticComponent<import('../node_modules/react').ForwardRefExoticComponent<Omit<import('./components').TableProps, "ref"> & import('../node_modules/react').RefAttributes<HTMLTableElement>>>>;
export declare const LazyTableContainer: import('../node_modules/react').LazyExoticComponent<import('../node_modules/react').ForwardRefExoticComponent<Omit<import('./components').TableContainerProps, "ref"> & import('../node_modules/react').RefAttributes<HTMLDivElement>>>;
export declare const LazyTableHead: import('../node_modules/react').LazyExoticComponent<import('../node_modules/react').ForwardRefExoticComponent<Omit<import('./components').TableHeadProps, "ref"> & import('../node_modules/react').RefAttributes<HTMLTableSectionElement>>>;
export declare const LazyTableBody: import('../node_modules/react').LazyExoticComponent<import('../node_modules/react').ForwardRefExoticComponent<Omit<import('./components').TableBodyProps, "ref"> & import('../node_modules/react').RefAttributes<HTMLTableSectionElement>>>;
export declare const LazyTableFooter: import('../node_modules/react').LazyExoticComponent<import('../node_modules/react').ForwardRefExoticComponent<Omit<import('./components').TableFooterProps, "ref"> & import('../node_modules/react').RefAttributes<HTMLTableSectionElement>>>;
export declare const LazyTableRow: import('../node_modules/react').LazyExoticComponent<import('../node_modules/react').MemoExoticComponent<import('../node_modules/react').ForwardRefExoticComponent<Omit<import('./components').TableRowProps, "ref"> & import('../node_modules/react').RefAttributes<HTMLTableRowElement>>>>;
export declare const LazyTableCell: import('../node_modules/react').LazyExoticComponent<import('../node_modules/react').MemoExoticComponent<import('../node_modules/react').ForwardRefExoticComponent<Omit<import('./components').TableCellProps, "ref"> & import('../node_modules/react').RefAttributes<HTMLTableCellElement>>>>;
/**
 * Lazy-loaded Drawer component
 *
 * Saves ~14 KB from initial bundle. Use for drawers that are conditionally rendered.
 *
 * @example
 * ```tsx
 * import { Suspense, useState } from 'react';
 * import { LazyDrawer } from '@atipicus/mrs-ui/lazy';
 * import { Button } from '@atipicus/mrs-ui';
 *
 * function MyApp() {
 *   const [open, setOpen] = useState(false);
 *
 *   return (
 *     <>
 *       <Button onClick={() => setOpen(true)}>Open Drawer</Button>
 *
 *       {open && (
 *         <Suspense fallback={null}>
 *           <LazyDrawer open={open} onClose={() => setOpen(false)}>
 *             Drawer content
 *           </LazyDrawer>
 *         </Suspense>
 *       )}
 *     </>
 *   );
 * }
 * ```
 */
export declare const LazyDrawer: import('../node_modules/react').LazyExoticComponent<import('../node_modules/react').ForwardRefExoticComponent<Omit<import('./components').DrawerProps, "ref"> & import('../node_modules/react').RefAttributes<HTMLDivElement>>>;
/**
 * Lazy-loaded Dialog component
 *
 * Part of the overlays chunk (~14 KB gzipped).
 *
 * Includes: Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
 *
 * @example
 * ```tsx
 * import { Suspense, useState } from 'react';
 * import {
 *   LazyDialog,
 *   LazyDialogTitle,
 *   LazyDialogContent,
 *   LazyDialogActions
 * } from '@atipicus/mrs-ui/lazy';
 * import { Button } from '@atipicus/mrs-ui';
 *
 * function MyApp() {
 *   const [open, setOpen] = useState(false);
 *
 *   return (
 *     <>
 *       <Button onClick={() => setOpen(true)}>Open Dialog</Button>
 *
 *       {open && (
 *         <Suspense fallback={null}>
 *           <LazyDialog open={open} onClose={() => setOpen(false)}>
 *             <LazyDialogTitle>Dialog Title</LazyDialogTitle>
 *             <LazyDialogContent>Dialog content</LazyDialogContent>
 *             <LazyDialogActions>
 *               <Button onClick={() => setOpen(false)}>Close</Button>
 *             </LazyDialogActions>
 *           </LazyDialog>
 *         </Suspense>
 *       )}
 *     </>
 *   );
 * }
 * ```
 */
export declare const LazyDialog: import('../node_modules/react').LazyExoticComponent<import('../node_modules/react').ForwardRefExoticComponent<Omit<import('./components').DialogProps, "ref"> & import('../node_modules/react').RefAttributes<HTMLDivElement>>>;
export declare const LazyDialogTitle: import('../node_modules/react').LazyExoticComponent<import('@mui/material/OverridableComponent').OverridableComponent<import('@mui/material').DialogTitleTypeMap<{}, "span">>>;
export declare const LazyDialogContent: import('../node_modules/react').LazyExoticComponent<typeof import('@mui/material').DialogContent>;
export declare const LazyDialogContentText: import('../node_modules/react').LazyExoticComponent<import('@mui/material/OverridableComponent').OverridableComponent<import('@mui/material').DialogContentTextTypeMap<{}, "span">>>;
export declare const LazyDialogActions: import('../node_modules/react').LazyExoticComponent<typeof import('@mui/material').DialogActions>;
/**
 * Helper type for lazy-loaded components with proper typing
 *
 * @example
 * ```tsx
 * import type { LazyComponent } from '@atipicus/mrs-ui/lazy';
 *
 * const MyLazyComponent: LazyComponent<typeof MyComponent> = lazy(() =>
 *   import('./MyComponent').then(mod => ({ default: mod.MyComponent }))
 * );
 * ```
 */
export type LazyComponent<T extends React.ComponentType<any>> = React.LazyExoticComponent<T>;
/**
 * Pre-configured Suspense component with fallback
 *
 * @example
 * ```tsx
 * import { LazySuspense, LazyTable } from '@atipicus/mrs-ui/lazy';
 *
 * <LazySuspense>
 *   <LazyTable>
 *     // table content
 *   </LazyTable>
 * </LazySuspense>
 * ```
 */
export { Suspense as LazySuspense } from '../node_modules/react';
//# sourceMappingURL=lazy.d.ts.map