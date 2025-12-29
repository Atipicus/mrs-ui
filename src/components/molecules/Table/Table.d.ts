import { default as React } from '../../../../node_modules/react';
import { TableProps, TableContainerProps, TableHeadProps, TableBodyProps, TableFooterProps, TableRowProps, TableCellProps } from './Table.types';
/**
 * Table component for displaying tabular data
 */
export declare const Table: React.ForwardRefExoticComponent<Omit<TableProps, "ref"> & React.RefAttributes<HTMLTableElement>>;
/**
 * TableContainer component - wrapper for Table with scroll support
 */
export declare const TableContainer: React.ForwardRefExoticComponent<Omit<TableContainerProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
/**
 * TableHead component - table header section
 */
export declare const TableHead: React.ForwardRefExoticComponent<Omit<TableHeadProps, "ref"> & React.RefAttributes<HTMLTableSectionElement>>;
/**
 * TableBody component - table body section
 */
export declare const TableBody: React.ForwardRefExoticComponent<Omit<TableBodyProps, "ref"> & React.RefAttributes<HTMLTableSectionElement>>;
/**
 * TableFooter component - table footer section
 */
export declare const TableFooter: React.ForwardRefExoticComponent<Omit<TableFooterProps, "ref"> & React.RefAttributes<HTMLTableSectionElement>>;
/**
 * TableRow component - row in a table
 */
export declare const TableRow: React.ForwardRefExoticComponent<Omit<TableRowProps, "ref"> & React.RefAttributes<HTMLTableRowElement>>;
/**
 * TableCell component - cell in a table row
 */
export declare const TableCell: React.ForwardRefExoticComponent<Omit<TableCellProps, "ref"> & React.RefAttributes<HTMLTableCellElement>>;
export default Table;
//# sourceMappingURL=Table.d.ts.map