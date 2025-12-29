import { TableProps as MuiTableProps } from '@mui/material/Table';
import { TableHeadProps as MuiTableHeadProps } from '@mui/material/TableHead';
import { TableBodyProps as MuiTableBodyProps } from '@mui/material/TableBody';
import { TableRowProps as MuiTableRowProps } from '@mui/material/TableRow';
import { TableCellProps as MuiTableCellProps } from '@mui/material/TableCell';
import { TableContainerProps as MuiTableContainerProps } from '@mui/material/TableContainer';
import { TableFooterProps as MuiTableFooterProps } from '@mui/material/TableFooter';
/**
 * Table component props
 * Displays data in rows and columns
 */
export interface TableProps extends MuiTableProps {
    /**
     * The content of the table (typically TableHead, TableBody, TableFooter)
     */
    children?: React.ReactNode;
    /**
     * The size of the table
     * @default 'medium'
     */
    size?: 'small' | 'medium';
    /**
     * If true, the table will take up the full width of its container
     * @default false
     */
    stickyHeader?: boolean;
    /**
     * Set the table padding
     * @default 'normal'
     */
    padding?: 'normal' | 'checkbox' | 'none';
}
/**
 * TableContainer component props
 * Wrapper for Table with scroll support
 */
export interface TableContainerProps extends MuiTableContainerProps {
    /**
     * The content of the container (typically a Table)
     */
    children?: React.ReactNode;
    /**
     * The component used for the root node
     */
    component?: React.ElementType;
}
/**
 * TableHead component props
 * Table header section
 */
export interface TableHeadProps extends MuiTableHeadProps {
    /**
     * The content of the table head (typically TableRow with TableCell)
     */
    children?: React.ReactNode;
}
/**
 * TableBody component props
 * Table body section
 */
export interface TableBodyProps extends MuiTableBodyProps {
    /**
     * The content of the table body (typically TableRow elements)
     */
    children?: React.ReactNode;
}
/**
 * TableFooter component props
 * Table footer section
 */
export interface TableFooterProps extends MuiTableFooterProps {
    /**
     * The content of the table footer (typically TableRow)
     */
    children?: React.ReactNode;
}
/**
 * TableRow component props
 * Row in a table
 */
export interface TableRowProps extends MuiTableRowProps {
    /**
     * The content of the row (typically TableCell elements)
     */
    children?: React.ReactNode;
    /**
     * If true, the row will be selected
     * @default false
     */
    selected?: boolean;
    /**
     * If true, the row will have hover effect
     * @default false
     */
    hover?: boolean;
}
/**
 * TableCell component props
 * Cell in a table row
 */
export interface TableCellProps extends MuiTableCellProps {
    /**
     * The content of the cell
     */
    children?: React.ReactNode;
    /**
     * Set the text alignment
     * @default 'left'
     */
    align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
    /**
     * Set the padding
     * @default 'normal'
     */
    padding?: 'normal' | 'checkbox' | 'none';
    /**
     * Set the size
     * @default 'medium'
     */
    size?: 'small' | 'medium';
    /**
     * Set the scope attribute
     */
    variant?: 'head' | 'body' | 'footer';
    /**
     * Set the number of columns a cell should span
     */
    colSpan?: number;
    /**
     * Set the number of rows a cell should span
     */
    rowSpan?: number;
    /**
     * Set aria-sort for sortable columns
     */
    sortDirection?: 'asc' | 'desc' | false;
}
//# sourceMappingURL=Table.types.d.ts.map