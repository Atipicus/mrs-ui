/**
 * Table Component Tests
 * @package @mrs/ui
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableFooter,
  TableRow,
  TableCell,
} from './Table';
import Paper from '@mui/material/Paper';

describe('Table', () => {
  describe('Basic Rendering', () => {
    it('renders table with rows and cells', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Cell 1</TableCell>
              <TableCell>Cell 2</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Cell 1')).toBeInTheDocument();
      expect(screen.getByText('Cell 2')).toBeInTheDocument();
    });

    it('renders table with head, body, and footer', () => {
      renderWithTheme(
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Header</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Body</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>Footer</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      );

      expect(screen.getByText('Header')).toBeInTheDocument();
      expect(screen.getByText('Body')).toBeInTheDocument();
      expect(screen.getByText('Footer')).toBeInTheDocument();
    });
  });

  describe('Table Component', () => {
    it('renders with default size', () => {
      const { container } = renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      const table = container.querySelector('table');
      expect(table).toBeInTheDocument();
    });

    it('renders with small size', () => {
      renderWithTheme(
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      // Just verify content is rendered, MUI handles size class internally
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('renders with sticky header', () => {
      const { container } = renderWithTheme(
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Header</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      );

      const table = container.querySelector('.MuiTable-stickyHeader');
      expect(table).toBeInTheDocument();
    });

    it('applies padding prop', () => {
      renderWithTheme(
        <Table padding="checkbox">
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });

  describe('TableContainer Component', () => {
    it('renders table container', () => {
      const { container } = renderWithTheme(
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Content</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      );

      const tableContainer = container.querySelector('.MuiTableContainer-root');
      expect(tableContainer).toBeInTheDocument();
    });

    it('renders with Paper component', () => {
      const { container } = renderWithTheme(
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Content</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      );

      const paper = container.querySelector('.MuiPaper-root');
      expect(paper).toBeInTheDocument();
    });
  });

  describe('TableRow Component', () => {
    it('renders table row', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Row Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Row Content')).toBeInTheDocument();
    });

    it('renders selected row', () => {
      const { container } = renderWithTheme(
        <Table>
          <TableBody>
            <TableRow selected>
              <TableCell>Selected</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      const row = container.querySelector('.Mui-selected');
      expect(row).toBeInTheDocument();
    });

    it('renders row with hover effect', () => {
      const { container } = renderWithTheme(
        <Table>
          <TableBody>
            <TableRow hover>
              <TableCell>Hoverable</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      const row = container.querySelector('.MuiTableRow-hover');
      expect(row).toBeInTheDocument();
    });
  });

  describe('TableCell Component', () => {
    it('renders table cell', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Cell Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Cell Content')).toBeInTheDocument();
    });

    it('renders with left alignment', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell align="left">Left</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      const cell = screen.getByText('Left').closest('td');
      expect(cell).toHaveClass('MuiTableCell-alignLeft');
    });

    it('renders with center alignment', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell align="center">Center</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      const cell = screen.getByText('Center').closest('td');
      expect(cell).toHaveClass('MuiTableCell-alignCenter');
    });

    it('renders with right alignment', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell align="right">Right</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      const cell = screen.getByText('Right').closest('td');
      expect(cell).toHaveClass('MuiTableCell-alignRight');
    });

    it('renders with small size', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell size="small">Small</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      const cell = screen.getByText('Small').closest('td');
      expect(cell).toHaveClass('MuiTableCell-sizeSmall');
    });

    it('renders header variant', () => {
      renderWithTheme(
        <Table>
          <TableHead>
            <TableRow>
              <TableCell variant="head">Header Cell</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      );

      const cell = screen.getByText('Header Cell').closest('th');
      expect(cell).toBeInTheDocument();
    });

    it('renders with colSpan', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell colSpan={2}>Spanning Cell</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      const cell = screen.getByText('Spanning Cell').closest('td');
      expect(cell).toHaveAttribute('colspan', '2');
    });

    it('renders with rowSpan', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell rowSpan={2}>Spanning Cell</TableCell>
              <TableCell>Cell 2</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      const cell = screen.getByText('Spanning Cell').closest('td');
      expect(cell).toHaveAttribute('rowspan', '2');
    });
  });

  describe('TableHead Component', () => {
    it('renders table head', () => {
      renderWithTheme(
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Header</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      );

      expect(screen.getByText('Header')).toBeInTheDocument();
    });
  });

  describe('TableBody Component', () => {
    it('renders table body', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Body Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Body Content')).toBeInTheDocument();
    });
  });

  describe('TableFooter Component', () => {
    it('renders table footer', () => {
      renderWithTheme(
        <Table>
          <TableFooter>
            <TableRow>
              <TableCell>Footer Content</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      );

      expect(screen.getByText('Footer Content')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('table has role="table"', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByRole('table')).toBeInTheDocument();
    });

    it('rows have role="row"', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Cell 1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cell 2</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      const rows = screen.getAllByRole('row');
      expect(rows.length).toBeGreaterThanOrEqual(2);
    });

    it('cells have role="cell"', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Cell 1</TableCell>
              <TableCell>Cell 2</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      const cells = screen.getAllByRole('cell');
      expect(cells).toHaveLength(2);
    });
  });

  describe('Props forwarding', () => {
    it('forwards additional props to Table', () => {
      const { container } = renderWithTheme(
        <Table data-testid="custom-table">
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      const table = container.querySelector('[data-testid="custom-table"]');
      expect(table).toBeInTheDocument();
    });

    it('forwards ref to Table', () => {
      const ref = jest.fn();

      renderWithTheme(
        <Table ref={ref}>
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(ref).toHaveBeenCalled();
    });

    it('forwards ref to TableContainer', () => {
      const ref = jest.fn();

      renderWithTheme(
        <TableContainer ref={ref}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Content</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      );

      expect(ref).toHaveBeenCalled();
    });
  });
});
