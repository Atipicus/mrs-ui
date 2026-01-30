/**
 * @file SafeComponents.test.ts
 * @description Test suite for Safe (Error-Boundary-Wrapped) Components
 *
 * Safe components are pre-wrapped with ErrorBoundary, providing automatic
 * error recovery without requiring parent components to implement their own
 * error boundaries.
 *
 * This test validates:
 * - SafeDatePicker error recovery
 * - SafeTable error recovery
 * - SafeDialog error recovery
 * - Graceful degradation
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React, { ReactNode, useState } from 'react';
import '@testing-library/jest-dom';

/**
 * Reuse ErrorBoundary from previous test
 */
class ErrorBoundary extends React.Component<
  { children: ReactNode; fallback?: (error: Error, reset: () => void) => React.ReactNode },
  { hasError: boolean; error: Error | null; errorInfo: React.ErrorInfo | null }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught:', error, errorInfo);
    this.setState({ errorInfo });
  }

  reset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback && this.state.error) {
        return this.props.fallback(this.state.error, this.reset);
      }
      return (
        <div role="alert" data-testid="error-fallback">
          <h2>Something went wrong</h2>
          <button onClick={this.reset} data-testid="error-reset">
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

/**
 * Mock DatePicker Component
 */
const DatePicker: React.FC<{
  value?: Date;
  onChange?: (date: Date) => void;
  shouldError?: boolean;
}> = ({ value, onChange, shouldError = false }) => {
  if (shouldError) {
    throw new Error('DatePicker rendering failed');
  }

  return (
    <div data-testid="date-picker">
      <input
        type="date"
        value={value ? value.toISOString().split('T')[0] : ''}
        onChange={(e) => onChange?.(new Date(e.target.value))}
        data-testid="date-input"
      />
    </div>
  );
};

/**
 * Safe DatePicker - Auto-wrapped with ErrorBoundary
 */
const SafeDatePicker: React.FC<{
  value?: Date;
  onChange?: (date: Date) => void;
  shouldError?: boolean;
}> = (props) => (
  <ErrorBoundary
    fallback={(error, reset) => (
      <div data-testid="date-picker-error">
        <p>Date picker unavailable: {error.message}</p>
        <button onClick={reset} data-testid="date-picker-reset">
          Restore Date Picker
        </button>
      </div>
    )}
  >
    <DatePicker {...props} />
  </ErrorBoundary>
);

/**
 * Mock Table Component
 */
const Table: React.FC<{
  data: any[];
  shouldError?: boolean;
}> = ({ data, shouldError = false }) => {
  if (shouldError) {
    throw new Error('Table rendering failed');
  }

  return (
    <table data-testid="table">
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            <td>{row.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

/**
 * Safe Table - Auto-wrapped with ErrorBoundary
 */
const SafeTable: React.FC<{
  data: any[];
  shouldError?: boolean;
}> = (props) => (
  <ErrorBoundary
    fallback={(error, reset) => (
      <div data-testid="table-error">
        <p>Table unavailable: {error.message}</p>
        <button onClick={reset} data-testid="table-reset">
          Reload Table
        </button>
      </div>
    )}
  >
    <Table {...props} />
  </ErrorBoundary>
);

/**
 * Mock Dialog Component
 */
const Dialog: React.FC<{
  open: boolean;
  onClose: () => void;
  shouldError?: boolean;
  children: ReactNode;
}> = ({ open, onClose, shouldError = false, children }) => {
  if (shouldError) {
    throw new Error('Dialog rendering failed');
  }

  if (!open) return null;

  return (
    <div role="dialog" data-testid="dialog">
      {children}
      <button onClick={onClose} data-testid="dialog-close">
        Close
      </button>
    </div>
  );
};

/**
 * Safe Dialog - Auto-wrapped with ErrorBoundary
 */
const SafeDialog: React.FC<{
  open: boolean;
  onClose: () => void;
  shouldError?: boolean;
  children: ReactNode;
}> = (props) => (
  <ErrorBoundary
    fallback={(error, reset) => (
      <div data-testid="dialog-error">
        <p>Dialog error: {error.message}</p>
        <button onClick={() => { reset(); props.onClose(); }} data-testid="dialog-error-close">
          Close
        </button>
      </div>
    )}
  >
    <Dialog {...props} />
  </ErrorBoundary>
);

/**
 * Test Suite 1: SafeDatePicker
 * Validates error handling in date picker
 */
describe('SafeDatePicker - Error Recovery', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render date picker normally without errors', () => {
    const { getByTestId } = render(<SafeDatePicker />);

    expect(getByTestId('date-picker')).toBeInTheDocument();
  });

  it('should catch error and show fallback', () => {
    const { getByTestId } = render(<SafeDatePicker shouldError={true} />);

    /**
     * Error fallback should be visible
     */
    expect(getByTestId('date-picker-error')).toBeInTheDocument();
    expect(getByTestId('date-picker-error')).toHaveTextContent(
      'Date picker unavailable'
    );
  });

  it('should recover from error when reset button clicked', async () => {
    const { getByTestId, rerender } = render(<SafeDatePicker shouldError={true} />);

    expect(getByTestId('date-picker-error')).toBeInTheDocument();

    /**
     * Rerender with working component before reset
     */
    rerender(<SafeDatePicker shouldError={false} />);

    /**
     * Click reset button
     */
    fireEvent.click(getByTestId('date-picker-reset'));

    /**
     * Should now show working date picker
     */
    await waitFor(() => {
      expect(getByTestId('date-picker')).toBeInTheDocument();
    });
  });

  it('should handle user interaction in recovered state', async () => {
    const handleChange = jest.fn();
    const { getByTestId, rerender } = render(<SafeDatePicker shouldError={true} />);

    rerender(<SafeDatePicker shouldError={false} onChange={handleChange} />);

    fireEvent.click(getByTestId('date-picker-reset'));

    /**
     * Simulate date selection
     */
    const dateInput = getByTestId('date-input');
    fireEvent.change(dateInput, { target: { value: '2026-02-14' } });

    /**
     * Handler should be called
     */
    expect(handleChange).toHaveBeenCalled();
  });
});

/**
 * Test Suite 2: SafeTable
 * Validates error handling in table component
 */
describe('SafeTable - Error Recovery', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render table normally with data', () => {
    const data = [
      { name: 'Alice' },
      { name: 'Bob' },
      { name: 'Charlie' },
    ];

    const { getByTestId } = render(<SafeTable data={data} />);

    expect(getByTestId('table')).toBeInTheDocument();
  });

  it('should show error message when table fails', () => {
    const data: any[] = [];

    const { getByTestId } = render(<SafeTable data={data} shouldError={true} />);

    /**
     * Error state should be shown
     */
    expect(getByTestId('table-error')).toBeInTheDocument();
    expect(getByTestId('table-error')).toHaveTextContent('Table unavailable');
  });

  it('should reload table after reset', async () => {
    const data = [{ name: 'User' }];

    const { getByTestId, rerender } = render(<SafeTable data={data} shouldError={true} />);

    expect(getByTestId('table-error')).toBeInTheDocument();

    /**
     * Rerender with fixed data before reset
     */
    rerender(<SafeTable data={data} shouldError={false} />);

    /**
     * Reset button
     */
    fireEvent.click(getByTestId('table-reset'));

    /**
     * Table should be restored
     */
    await waitFor(() => {
      expect(getByTestId('table')).toBeInTheDocument();
    });
  });

  it('should keep app responsive even when table crashes', () => {
    const data: any[] = [];

    const App = () => (
      <div>
        <header data-testid="app-header">App Header</header>
        <SafeTable data={data} shouldError={true} />
        <footer data-testid="app-footer">App Footer</footer>
      </div>
    );

    const { getByTestId } = render(<App />);

    /**
     * App structure should remain intact
     */
    expect(getByTestId('app-header')).toBeInTheDocument();
    expect(getByTestId('app-footer')).toBeInTheDocument();

    /**
     * Only table shows error
     */
    expect(getByTestId('table-error')).toBeInTheDocument();
  });
});

/**
 * Test Suite 3: SafeDialog
 * Validates error handling in dialog component
 */
describe('SafeDialog - Error Recovery', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render dialog when open and no error', () => {
    const handleClose = jest.fn();

    const { getByTestId } = render(
      <SafeDialog open={true} onClose={handleClose}>
        <h2>Dialog Content</h2>
      </SafeDialog>
    );

    expect(getByTestId('dialog')).toBeInTheDocument();
  });

  it('should show error message when dialog fails', () => {
    const handleClose = jest.fn();

    const { getByTestId } = render(
      <SafeDialog open={true} onClose={handleClose} shouldError={true}>
        <h2>Dialog Content</h2>
      </SafeDialog>
    );

    /**
     * Error fallback should be shown
     */
    expect(getByTestId('dialog-error')).toBeInTheDocument();
    expect(getByTestId('dialog-error')).toHaveTextContent('Dialog error');
  });

  it('should allow closing dialog after error', async () => {
    const handleClose = jest.fn();

    const { getByTestId } = render(
      <SafeDialog open={true} onClose={handleClose} shouldError={true}>
        <h2>Dialog Content</h2>
      </SafeDialog>
    );

    /**
     * Click error close button
     */
    fireEvent.click(getByTestId('dialog-error-close'));

    /**
     * onClose should be called
     */
    expect(handleClose).toHaveBeenCalled();
  });

  it('should recover from error and show dialog again', async () => {
    const handleClose = jest.fn();

    const { getByTestId, rerender } = render(
      <SafeDialog open={true} onClose={handleClose} shouldError={true}>
        <h2>Dialog Content</h2>
      </SafeDialog>
    );

    /**
     * Reopen dialog with fix before reset
     */
    rerender(
      <SafeDialog open={true} onClose={handleClose} shouldError={false}>
        <h2>Dialog Content Fixed</h2>
      </SafeDialog>
    );

    fireEvent.click(getByTestId('dialog-error-close'));

    /**
     * Dialog should be restored
     */
    await waitFor(() => {
      expect(getByTestId('dialog')).toBeInTheDocument();
    });
  });
});

/**
 * Test Suite 4: Multiple Safe Components
 * Validates that Safe components work together
 */
describe('SafeComponents - Multiple Components Integration', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should handle errors independently in multiple Safe components', () => {
    const App = () => {
      const [dialogOpen, setDialogOpen] = useState(false);

      return (
        <div>
          <SafeDatePicker shouldError={true} />
          <SafeTable data={[]} shouldError={true} />
          <SafeDialog
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            shouldError={true}
          >
            Content
          </SafeDialog>
        </div>
      );
    };

    const { getByTestId } = render(<App />);

    /**
     * Each component should show its own error
     */
    expect(getByTestId('date-picker-error')).toBeInTheDocument();
    expect(getByTestId('table-error')).toBeInTheDocument();
    expect(getByTestId('dialog-error')).toBeInTheDocument();
  });

  it('should recover components independently', async () => {
    const App = () => {
      const [dateError, setDateError] = useState(true);
      const [tableError, setTableError] = useState(true);

      return (
        <div>
          <SafeDatePicker shouldError={dateError} />
          <SafeTable data={[]} shouldError={tableError} />
        </div>
      );
    };

    const { getByTestId, rerender } = render(<App />);

    expect(getByTestId('date-picker-error')).toBeInTheDocument();
    expect(getByTestId('table-error')).toBeInTheDocument();

    /**
     * Recover only date picker
     */
    rerender(
      <div>
        <SafeDatePicker shouldError={false} />
        <SafeTable data={[]} shouldError={true} />
      </div>
    );

    /**
     * Only date picker should recover
     */
    await waitFor(() => {
      expect(getByTestId('date-picker')).toBeInTheDocument();
    });
    expect(getByTestId('table-error')).toBeInTheDocument();
  });
});

/**
 * Test Suite 5: Graceful Degradation
 * Validates that app functionality is preserved despite component errors
 */
describe('SafeComponents - Graceful Degradation', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should keep app functional when one component fails', () => {
    const App = () => {
      const [count, setCount] = useState(0);

      return (
        <div>
          <button onClick={() => setCount(count + 1)} data-testid="counter-btn">
            Count: {count}
          </button>
          <SafeTable data={[]} shouldError={true} />
        </div>
      );
    };

    const { getByTestId } = render(<App />);

    /**
     * Counter should still work
     */
    fireEvent.click(getByTestId('counter-btn'));
    expect(getByTestId('counter-btn')).toHaveTextContent('Count: 1');

    /**
     * Table error is isolated
     */
    expect(getByTestId('table-error')).toBeInTheDocument();
  });

  it('should show helpful error messages', () => {
    const { getByTestId } = render(
      <SafeDatePicker shouldError={true} />
    );

    /**
     * Error message should be helpful
     */
    const error = getByTestId('date-picker-error');
    expect(error).toHaveTextContent('Date picker unavailable');
    expect(error).toHaveTextContent('Restore Date Picker');
  });
});
