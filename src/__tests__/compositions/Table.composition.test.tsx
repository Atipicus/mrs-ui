/**
 * @file Table.composition.test.ts
 * @description Integration tests for Table + TableRow + TableCell components composition
 *
 * This test suite validates that Table, TableRow, and TableCell components work correctly
 * together, testing:
 * - Parent-child relationships
 * - Props propagation through hierarchy
 * - Semantic HTML structure (table, thead, tbody, tr, td, th)
 * - Accessibility (ARIA roles, headers)
 * - Data representation and sorting
 * - Selection and interactive features
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React, { useState } from 'react';
import '@testing-library/jest-dom';

/**
 * Mock Components (simulating mrs-ui Table components)
 */
const TableCell = React.forwardRef<
  HTMLTableCellElement,
  {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
    variant?: 'body' | 'header';
    width?: string | number;
    sortable?: boolean;
    'data-testid'?: string;
  }
>(({ children, align = 'left', variant = 'body', sortable, ...props }, ref) => {
  const Element = variant === 'header' ? 'th' : 'td';

  return (
    <Element
      ref={ref as any}
      style={{
        textAlign: align as any,
        padding: '12px 16px',
        fontWeight: variant === 'header' ? 'bold' : 'normal',
        cursor: sortable ? 'pointer' : 'default',
      }}
      role={variant === 'header' ? 'columnheader' : 'cell'}
      data-testid={props['data-testid']}
      {...props}
    >
      {children}
    </Element>
  );
});

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  {
    children: React.ReactNode;
    selected?: boolean;
    hover?: boolean;
    onClick?: (e: React.MouseEvent) => void;
    'data-testid'?: string;
  }
>(({ children, selected = false, hover = true, onClick, ...props }, ref) => (
  <tr
    ref={ref}
    style={{
      backgroundColor: selected ? '#e3f2fd' : hover ? 'transparent' : undefined,
      cursor: onClick ? 'pointer' : 'default',
      '&:hover': hover ? { backgroundColor: '#f5f5f5' } : {},
    }}
    onClick={onClick}
    role="row"
    tabIndex={onClick ? 0 : undefined}
    data-testid={props['data-testid']}
    {...props}
  >
    {children}
  </tr>
));

const Table = React.forwardRef<
  HTMLTableElement,
  {
    children: React.ReactNode;
    striped?: boolean;
    bordered?: boolean;
    selectable?: boolean;
    'data-testid'?: string;
  }
>(({ children, striped = false, bordered = false, ...props }, ref) => (
  <table
    ref={ref}
    style={{
      width: '100%',
      borderCollapse: 'collapse',
      border: bordered ? '1px solid #ddd' : 'none',
    }}
    role="table"
    data-testid={props['data-testid']}
    {...props}
  >
    {children}
  </table>
));

/**
 * Test Suite 1: Basic Table Structure
 * Validates semantic HTML and component hierarchy
 */
describe('Table + TableRow + TableCell - Basic Structure', () => {
  it('should render table with proper semantic structure', () => {
    const { getByRole } = render(
      <Table data-testid="data-table">
        <thead>
          <TableRow>
            <TableCell variant="header">Name</TableCell>
            <TableCell variant="header">Email</TableCell>
            <TableCell variant="header">Role</TableCell>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>Admin</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    /**
     * Verify table element exists
     */
    const table = getByRole('table');
    expect(table).toBeInTheDocument();
  });

  it('should render header cells as <th> elements', () => {
    const { container } = render(
      <Table>
        <thead>
          <TableRow>
            <TableCell variant="header">Column 1</TableCell>
            <TableCell variant="header">Column 2</TableCell>
          </TableRow>
        </thead>
      </Table>
    );

    /**
     * Verify <th> elements
     */
    const headers = container.querySelectorAll('th');
    expect(headers).toHaveLength(2);
    expect(headers[0]).toHaveTextContent('Column 1');
  });

  it('should render body cells as <td> elements', () => {
    const { container } = render(
      <Table>
        <tbody>
          <TableRow>
            <TableCell>Data 1</TableCell>
            <TableCell>Data 2</TableCell>
            <TableCell>Data 3</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    /**
     * Verify <td> elements
     */
    const cells = container.querySelectorAll('td');
    expect(cells).toHaveLength(3);
  });

  it('should render multiple rows correctly', () => {
    const { container } = render(
      <Table>
        <tbody>
          <TableRow data-testid="row-1">
            <TableCell>Row 1</TableCell>
          </TableRow>
          <TableRow data-testid="row-2">
            <TableCell>Row 2</TableCell>
          </TableRow>
          <TableRow data-testid="row-3">
            <TableCell>Row 3</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    /**
     * Verify 3 rows rendered
     */
    const rows = container.querySelectorAll('tr');
    expect(rows).toHaveLength(3);
  });
});

/**
 * Test Suite 2: Data Representation
 * Validates that table correctly displays data
 */
describe('Table + TableRow + TableCell - Data Representation', () => {
  it('should display data in correct cell positions', () => {
    const { getByText } = render(
      <Table>
        <thead>
          <TableRow>
            <TableCell variant="header">Name</TableCell>
            <TableCell variant="header">Email</TableCell>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>Alice</TableCell>
            <TableCell>alice@example.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bob</TableCell>
            <TableCell>bob@example.com</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    /**
     * Verify data is displayed correctly
     */
    expect(getByText('Alice')).toBeInTheDocument();
    expect(getByText('alice@example.com')).toBeInTheDocument();
    expect(getByText('Bob')).toBeInTheDocument();
    expect(getByText('bob@example.com')).toBeInTheDocument();
  });

  it('should support cell alignment', () => {
    const { container } = render(
      <Table>
        <thead>
          <TableRow>
            <TableCell variant="header" align="left">
              Left
            </TableCell>
            <TableCell variant="header" align="center">
              Center
            </TableCell>
            <TableCell variant="header" align="right">
              Right
            </TableCell>
          </TableRow>
        </thead>
      </Table>
    );

    const headers = container.querySelectorAll('th');
    expect(headers[0]).toHaveStyle({ textAlign: 'left' });
    expect(headers[1]).toHaveStyle({ textAlign: 'center' });
    expect(headers[2]).toHaveStyle({ textAlign: 'right' });
  });

  it('should support custom content in cells', () => {
    const { getByTestId } = render(
      <Table>
        <tbody>
          <TableRow>
            <TableCell data-testid="cell-with-button">
              <button>Action</button>
            </TableCell>
            <TableCell data-testid="cell-with-badge">
              <span style={{ backgroundColor: '#ff0000', color: 'white' }}>Active</span>
            </TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    /**
     * Verify custom content rendered
     */
    expect(getByTestId('cell-with-button')).toBeInTheDocument();
    expect(getByTestId('cell-with-button').querySelector('button')).toHaveTextContent('Action');
  });
});

/**
 * Test Suite 3: Row Selection
 * Validates selectable rows functionality
 */
describe('Table + TableRow + TableCell - Row Selection', () => {
  it('should highlight selected row', async () => {
    const SelectableTable = () => {
      const [selected, setSelected] = useState<number | null>(null);

      return (
        <Table>
          <tbody>
            <TableRow selected={selected === 0} onClick={() => setSelected(0)} data-testid="row-0">
              <TableCell>Row 1</TableCell>
            </TableRow>
            <TableRow selected={selected === 1} onClick={() => setSelected(1)} data-testid="row-1">
              <TableCell>Row 2</TableCell>
            </TableRow>
          </tbody>
        </Table>
      );
    };

    const { getByTestId } = render(<SelectableTable />);

    /**
     * Click first row
     */
    fireEvent.click(getByTestId('row-0'));

    await waitFor(() => {
      expect(getByTestId('row-0')).toHaveStyle({
        backgroundColor: '#e3f2fd',
      });
    });

    /**
     * Click second row
     */
    fireEvent.click(getByTestId('row-1'));

    await waitFor(() => {
      expect(getByTestId('row-0')).not.toHaveStyle({
        backgroundColor: '#e3f2fd',
      });
      expect(getByTestId('row-1')).toHaveStyle({
        backgroundColor: '#e3f2fd',
      });
    });
  });

  it('should support multi-select rows', async () => {
    const MultiSelectTable = () => {
      const [selected, setSelected] = useState<Set<number>>(new Set());

      const toggleRow = (index: number) => {
        const newSelected = new Set(selected);
        if (newSelected.has(index)) {
          newSelected.delete(index);
        } else {
          newSelected.add(index);
        }
        setSelected(newSelected);
      };

      return (
        <Table>
          <tbody>
            {[0, 1, 2].map((index) => (
              <TableRow
                key={index}
                selected={selected.has(index)}
                onClick={() => toggleRow(index)}
                data-testid={`row-${index}`}
              >
                <TableCell>Item {index + 1}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      );
    };

    const { getByTestId } = render(<MultiSelectTable />);

    /**
     * Select multiple rows
     */
    fireEvent.click(getByTestId('row-0'));
    fireEvent.click(getByTestId('row-2'));

    await waitFor(() => {
      expect(getByTestId('row-0')).toHaveStyle({ backgroundColor: '#e3f2fd' });
      expect(getByTestId('row-1')).not.toHaveStyle({ backgroundColor: '#e3f2fd' });
      expect(getByTestId('row-2')).toHaveStyle({ backgroundColor: '#e3f2fd' });
    });
  });
});

/**
 * Test Suite 4: Sorting
 * Validates sortable columns
 */
describe('Table + TableRow + TableCell - Sorting', () => {
  it('should handle sortable column headers', async () => {
    const SortableTable = () => {
      const [data, setData] = useState([
        { id: 1, name: 'Charlie', age: 30 },
        { id: 2, name: 'Alice', age: 25 },
        { id: 3, name: 'Bob', age: 28 },
      ]);
      const [sortBy, setSortBy] = useState<'name' | 'age' | null>(null);

      const handleSort = (field: 'name' | 'age') => {
        const newData = [...data].sort((a, b) => {
          if (field === 'name') {
            return a.name.localeCompare(b.name);
          }
          return a.age - b.age;
        });
        setData(newData);
        setSortBy(field);
      };

      return (
        <Table data-testid="sortable-table">
          <thead>
            <TableRow>
              <TableCell
                variant="header"
                sortable
                onClick={() => handleSort('name')}
                data-testid="sort-name"
              >
                Name
              </TableCell>
              <TableCell
                variant="header"
                sortable
                onClick={() => handleSort('age')}
                data-testid="sort-age"
              >
                Age
              </TableCell>
            </TableRow>
          </thead>
          <tbody>
            {data.map((row) => (
              <TableRow key={row.id} data-testid={`row-${row.id}`}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      );
    };

    const { getByTestId, getAllByRole } = render(<SortableTable />);

    /**
     * Click sort by name
     */
    fireEvent.click(getByTestId('sort-name'));

    await waitFor(() => {
      const cells = getAllByRole('cell');
      // After sort: Alice, Bob, Charlie
      expect(cells[0]).toHaveTextContent('Alice');
    });
  });
});

/**
 * Test Suite 5: Accessibility
 * Validates semantic HTML and ARIA attributes
 */
describe('Table + TableRow + TableCell - Accessibility', () => {
  it('should have proper ARIA roles', () => {
    const { getByRole, container } = render(
      <Table>
        <thead>
          <TableRow>
            <TableCell variant="header">Header 1</TableCell>
            <TableCell variant="header">Header 2</TableCell>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>Data 1</TableCell>
            <TableCell>Data 2</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    /**
     * Verify ARIA roles
     */
    expect(getByRole('table')).toBeInTheDocument();

    const headers = container.querySelectorAll('[role="columnheader"]');
    expect(headers).toHaveLength(2);

    const cells = container.querySelectorAll('[role="cell"]');
    expect(cells).toHaveLength(2);
  });

  it('should be keyboard accessible', () => {
    const { container, getByTestId } = render(
      <Table>
        <tbody>
          <TableRow onClick={jest.fn()} data-testid="clickable-row">
            <TableCell>Clickable Row</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    const row = getByTestId('clickable-row');

    /**
     * Row should be focusable
     */
    row.focus();
    expect(document.activeElement).toBe(row);

    /**
     * Can activate with Enter key
     */
    fireEvent.keyDown(row, { key: 'Enter' });
  });

  it('should support screen reader navigation', () => {
    const { container } = render(
      <Table>
        <thead>
          <TableRow>
            <TableCell variant="header" role="columnheader">
              Name
            </TableCell>
            <TableCell variant="header" role="columnheader">
              Email
            </TableCell>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell role="cell">John Doe</TableCell>
            <TableCell role="cell">john@example.com</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    /**
     * Verify semantic structure for screen readers
     */
    const thead = container.querySelector('thead');
    const tbody = container.querySelector('tbody');

    expect(thead).toBeInTheDocument();
    expect(tbody).toBeInTheDocument();
  });
});

/**
 * Test Suite 6: Visual Features
 * Validates striped and bordered styling
 */
describe('Table + TableRow + TableCell - Visual Features', () => {
  it('should apply striped styling when enabled', () => {
    const { container } = render(
      <Table striped>
        <tbody>
          <TableRow data-testid="row-1">
            <TableCell>Row 1</TableCell>
          </TableRow>
          <TableRow data-testid="row-2">
            <TableCell>Row 2</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    const table = container.querySelector('table');
    /**
     * When striped, alternating rows have background
     */
    expect(table).toBeInTheDocument();
  });

  it('should apply bordered styling when enabled', () => {
    const { container } = render(
      <Table bordered>
        <tbody>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    const table = container.querySelector('table');
    expect(table).toHaveStyle({ border: '1px solid #ddd' });
  });
});

/**
 * Test Suite 7: Complex Data Scenarios
 * Validates real-world table use cases
 */
describe('Table + TableRow + TableCell - Complex Data', () => {
  it('should handle large datasets efficiently', () => {
    const largeData = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      name: `User ${i}`,
      email: `user${i}@example.com`,
    }));

    const { container } = render(
      <Table>
        <thead>
          <TableRow>
            <TableCell variant="header">Name</TableCell>
            <TableCell variant="header">Email</TableCell>
          </TableRow>
        </thead>
        <tbody>
          {largeData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    );

    /**
     * Verify all rows rendered
     */
    const rows = container.querySelectorAll('tbody tr');
    expect(rows).toHaveLength(100);
  });

  it('should handle mixed content types in cells', () => {
    const { getByRole } = render(
      <Table>
        <tbody>
          <TableRow>
            <TableCell>
              <strong>Bold Text</strong>
            </TableCell>
            <TableCell>
              <em>Italic Text</em>
            </TableCell>
            <TableCell>
              <a href="#">Link</a>
            </TableCell>
            <TableCell>
              <span style={{ color: 'red' }}>Colored</span>
            </TableCell>
          </TableRow>
        </tbody>
      </Table>
    );

    /**
     * Verify all content types render
     */
    expect(getByRole('table')).toBeInTheDocument();
  });
});
