/**
 * Table Component
 * @package @mrs/ui
 *
 * Displays data in rows and columns.
 * Tables organize information in a way that's easy to scan and compare.
 *
 * @example
 * ```tsx
 * <TableContainer component={Paper}>
 *   <Table>
 *     <TableHead>
 *       <TableRow>
 *         <TableCell>Name</TableCell>
 *         <TableCell>Email</TableCell>
 *       </TableRow>
 *     </TableHead>
 *     <TableBody>
 *       <TableRow>
 *         <TableCell>John Doe</TableCell>
 *         <TableCell>john@example.com</TableCell>
 *       </TableRow>
 *     </TableBody>
 *   </Table>
 * </TableContainer>
 * ```
 */

import React from 'react';
import MuiTable from '@mui/material/Table';
import MuiTableContainer from '@mui/material/TableContainer';
import MuiTableHead from '@mui/material/TableHead';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableFooter from '@mui/material/TableFooter';
import MuiTableRow from '@mui/material/TableRow';
import MuiTableCell from '@mui/material/TableCell';
import type {
  TableProps,
  TableContainerProps,
  TableHeadProps,
  TableBodyProps,
  TableFooterProps,
  TableRowProps,
  TableCellProps,
} from './Table.types';

/**
 * Table component for displaying tabular data
 */
export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ children, size = 'medium', stickyHeader = false, padding = 'normal', ...props }, ref) => {
    return (
      <MuiTable ref={ref} size={size} stickyHeader={stickyHeader} padding={padding} {...props}>
        {children}
      </MuiTable>
    );
  }
);

Table.displayName = 'Table';

/**
 * TableContainer component - wrapper for Table with scroll support
 */
export const TableContainer = React.forwardRef<HTMLDivElement, TableContainerProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiTableContainer ref={ref} {...props}>
        {children}
      </MuiTableContainer>
    );
  }
);

TableContainer.displayName = 'TableContainer';

/**
 * TableHead component - table header section
 */
export const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiTableHead ref={ref} {...props}>
        {children}
      </MuiTableHead>
    );
  }
);

TableHead.displayName = 'TableHead';

/**
 * TableBody component - table body section
 */
export const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiTableBody ref={ref} {...props}>
        {children}
      </MuiTableBody>
    );
  }
);

TableBody.displayName = 'TableBody';

/**
 * TableFooter component - table footer section
 */
export const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ children, ...props }, ref) => {
    return (
      <MuiTableFooter ref={ref} {...props}>
        {children}
      </MuiTableFooter>
    );
  }
);

TableFooter.displayName = 'TableFooter';

/**
 * TableRow component - row in a table
 */
export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, selected = false, hover = false, ...props }, ref) => {
    return (
      <MuiTableRow ref={ref} selected={selected} hover={hover} {...props}>
        {children}
      </MuiTableRow>
    );
  }
);

TableRow.displayName = 'TableRow';

/**
 * TableCell component - cell in a table row
 */
export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  (
    {
      children,
      align = 'left',
      padding = 'normal',
      size = 'medium',
      variant,
      colSpan,
      rowSpan,
      sortDirection,
      ...props
    },
    ref
  ) => {
    return (
      <MuiTableCell
        ref={ref}
        align={align}
        padding={padding}
        size={size}
        variant={variant}
        colSpan={colSpan}
        rowSpan={rowSpan}
        sortDirection={sortDirection}
        {...props}
      >
        {children}
      </MuiTableCell>
    );
  }
);

TableCell.displayName = 'TableCell';

export default Table;
