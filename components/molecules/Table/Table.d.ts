import { default as React } from 'react';
import { TableProps, TableContainerProps, TableHeadProps, TableBodyProps, TableFooterProps, TableRowProps, TableCellProps } from './Table.types';
export declare const Table: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<TableProps, "ref"> & React.RefAttributes<HTMLTableElement>>>;
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
export declare const TableRow: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<TableRowProps, "ref"> & React.RefAttributes<HTMLTableRowElement>>>;
export declare const TableCell: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<TableCellProps, "ref"> & React.RefAttributes<HTMLTableCellElement>>>;
export default Table;
//# sourceMappingURL=Table.d.ts.map