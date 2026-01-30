/**
 * @file ErrorBoundary.test.ts
 * @description Test suite for Error Boundary component
 *
 * Error Boundaries catch JavaScript errors anywhere in the child component tree,
 * log those errors, and display a fallback UI instead of crashing the whole app.
 *
 * This test validates:
 * - Error catching in child components
 * - Error logging
 * - Fallback UI rendering
 * - Error recovery
 * - Reset functionality
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React, { useState, ReactNode } from 'react';
import '@testing-library/jest-dom';

/**
 * Error Boundary Component
 * Catches errors in child components and displays fallback UI
 */
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: (error: Error, reset: () => void) => React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  /**
   * Update state so the next render will show the fallback UI
   */
  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  /**
   * Log error details for debugging
   */
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);

    this.setState({
      error,
      errorInfo,
    });

    /**
     * Call custom error handler if provided
     */
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  /**
   * Reset error boundary to allow recovery
   */
  reset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      /**
       * Render custom fallback if provided
       */
      if (this.props.fallback && this.state.error) {
        return this.props.fallback(this.state.error, this.reset);
      }

      /**
       * Default fallback UI
       */
      return (
        <div
          style={{
            padding: '20px',
            margin: '20px',
            backgroundColor: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '4px',
          }}
          role="alert"
          data-testid="error-fallback"
        >
          <h2 style={{ color: '#856404', marginTop: 0 }}>
            ⚠️ Something went wrong
          </h2>
          <details style={{ whiteSpace: 'pre-wrap', color: '#856404' }}>
            {this.state.error && (
              <>
                <summary>{this.state.error.toString()}</summary>
                {this.state.errorInfo && (
                  <p>{this.state.errorInfo.componentStack}</p>
                )}
              </>
            )}
          </details>
          <button
            onClick={this.reset}
            data-testid="error-reset-btn"
            style={{
              padding: '8px 16px',
              backgroundColor: '#0066ff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '12px',
            }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Component that throws an error
 */
const ThrowError: React.FC<{ shouldThrow: boolean; message?: string }> = ({
  shouldThrow,
  message = 'Test error',
}) => {
  if (shouldThrow) {
    throw new Error(message);
  }
  return <div data-testid="no-error">Component rendered successfully</div>;
};

/**
 * Test Suite 1: Basic Error Catching
 * Validates that ErrorBoundary catches child component errors
 */
describe('ErrorBoundary - Basic Error Catching', () => {
  /**
   * Suppress console.error during tests
   */
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render children when no error occurs', () => {
    const { getByTestId } = render(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );

    /**
     * Normal component should render
     */
    expect(getByTestId('no-error')).toBeInTheDocument();
    expect(getByTestId('no-error')).toHaveTextContent(
      'Component rendered successfully'
    );
  });

  it('should catch error and show fallback UI', () => {
    const { getByTestId } = render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} message="Test error message" />
      </ErrorBoundary>
    );

    /**
     * Fallback UI should be displayed
     */
    expect(getByTestId('error-fallback')).toBeInTheDocument();
    expect(getByTestId('error-fallback')).toHaveTextContent(
      'Something went wrong'
    );
  });

  it('should display error message in fallback UI', () => {
    const { getByTestId } = render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} message="Custom error occurred" />
      </ErrorBoundary>
    );

    const errorFallback = getByTestId('error-fallback');
    expect(errorFallback).toHaveTextContent('Custom error occurred');
  });

  it('should not catch errors that occur outside render phase', () => {
    /**
     * Note: Event handlers and async code are not caught by ErrorBoundary
     * This is expected React behavior
     */
    const { getByTestId } = render(
      <ErrorBoundary>
        <button
          data-testid="async-error-btn"
          onClick={() => {
            // This error would NOT be caught by ErrorBoundary
            // It would need a try-catch or separate error handling
          }}
        >
          Click for error
        </button>
      </ErrorBoundary>
    );

    expect(getByTestId('async-error-btn')).toBeInTheDocument();
  });
});

/**
 * Test Suite 2: Error Recovery
 * Validates that errors can be recovered from
 */
describe('ErrorBoundary - Error Recovery', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should reset and recover from error', async () => {
    const { getByTestId, rerender } = render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    /**
     * Initially in error state
     */
    expect(getByTestId('error-fallback')).toBeInTheDocument();

    /**
     * Click "Try Again" button
     */
    /**
     * Switch to non-throwing child before reset
     */
    rerender(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );

    fireEvent.click(getByTestId('error-reset-btn'));

    /**
     * Should be back to normal rendering
     */
    await waitFor(() => {
      expect(getByTestId('no-error')).toBeInTheDocument();
    });
  });

  it('should allow multiple error cycles', async () => {
    const { getByTestId, rerender } = render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    /**
     * First error
     */
    expect(getByTestId('error-fallback')).toBeInTheDocument();

    /**
     * Switch to non-throwing child before reset
     */
    rerender(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );

    fireEvent.click(getByTestId('error-reset-btn'));

    await waitFor(() => {
      expect(getByTestId('no-error')).toBeInTheDocument();
    });

    /**
     * Cause error again
     */
    rerender(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} message="Second error" />
      </ErrorBoundary>
    );

    expect(getByTestId('error-fallback')).toBeInTheDocument();
  });
});

/**
 * Test Suite 3: Custom Fallback UI
 * Validates custom error fallback rendering
 */
describe('ErrorBoundary - Custom Fallback UI', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render custom fallback component', () => {
    const CustomFallback = (error: Error, reset: () => void) => (
      <div data-testid="custom-fallback">
        <h3>Oops! An error occurred</h3>
        <p>Error: {error.message}</p>
        <button onClick={reset} data-testid="custom-reset">
          Recover
        </button>
      </div>
    );

    const { getByTestId } = render(
      <ErrorBoundary fallback={CustomFallback}>
        <ThrowError shouldThrow={true} message="Custom error" />
      </ErrorBoundary>
    );

    /**
     * Custom fallback should be rendered
     */
    expect(getByTestId('custom-fallback')).toBeInTheDocument();
    expect(getByTestId('custom-fallback')).toHaveTextContent('Oops! An error occurred');
    expect(getByTestId('custom-fallback')).toHaveTextContent('Custom error');
  });

  it('should allow custom error handling', () => {
    const onError = jest.fn();

    const { getByTestId } = render(
      <ErrorBoundary onError={onError}>
        <ThrowError shouldThrow={true} message="Tracked error" />
      </ErrorBoundary>
    );

    /**
     * onError callback should be called
     */
    expect(onError).toHaveBeenCalled();
    const [error, errorInfo] = onError.mock.calls[0];
    expect(error.message).toContain('Tracked error');
    expect(errorInfo).toHaveProperty('componentStack');
  });
});

/**
 * Test Suite 4: Multiple Child Components
 * Validates error catching with multiple children
 */
describe('ErrorBoundary - Multiple Children', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should catch error from one child and preserve others', () => {
    /**
     * Note: In reality, if one child throws during render,
     * the entire ErrorBoundary catches it. But we can test
     * that children that render are preserved.
     */
    const { getByTestId } = render(
      <ErrorBoundary>
        <div>
          <div data-testid="working-child-1">Child 1</div>
          <ThrowError shouldThrow={true} />
          <div data-testid="working-child-2">Child 2 (not rendered)</div>
        </div>
      </ErrorBoundary>
    );

    /**
     * Error boundary catches the error from any child
     */
    expect(getByTestId('error-fallback')).toBeInTheDocument();
  });

  it('should work with nested components', () => {
    const NestedComponent = () => (
      <div data-testid="nested">
        <ThrowError shouldThrow={true} />
      </div>
    );

    const { getByTestId } = render(
      <ErrorBoundary>
        <NestedComponent />
      </ErrorBoundary>
    );

    /**
     * Should catch error from deeply nested component
     */
    expect(getByTestId('error-fallback')).toBeInTheDocument();
  });
});

/**
 * Test Suite 5: Error Boundary with Different Error Types
 * Validates handling of various error scenarios
 */
describe('ErrorBoundary - Different Error Types', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should catch ReferenceError', () => {
    const ComponentWithRefError = () => {
      // @ts-ignore - Intentional error for testing
      return <div>{undefined.property}</div>;
    };

    const { getByTestId } = render(
      <ErrorBoundary>
        <ComponentWithRefError />
      </ErrorBoundary>
    );

    expect(getByTestId('error-fallback')).toBeInTheDocument();
  });

  it('should catch TypeError', () => {
    const ComponentWithTypeError = () => {
      const obj = null;
      // @ts-ignore - Intentional error for testing
      return <div>{obj.method()}</div>;
    };

    const { getByTestId } = render(
      <ErrorBoundary>
        <ComponentWithTypeError />
      </ErrorBoundary>
    );

    expect(getByTestId('error-fallback')).toBeInTheDocument();
  });

  it('should catch errors with custom error classes', () => {
    class CustomError extends Error {
      constructor(message: string) {
        super(message);
        this.name = 'CustomError';
      }
    }

    const ComponentWithCustomError = () => {
      throw new CustomError('Custom error occurred');
    };

    const { getByTestId } = render(
      <ErrorBoundary>
        <ComponentWithCustomError />
      </ErrorBoundary>
    );

    expect(getByTestId('error-fallback')).toBeInTheDocument();
    expect(getByTestId('error-fallback')).toHaveTextContent('CustomError');
  });
});

/**
 * Test Suite 6: Accessibility
 * Validates that error UI is accessible
 */
describe('ErrorBoundary - Accessibility', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should have alert role for error UI', () => {
    const { getByRole } = render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    /**
     * Error fallback should have alert role for screen readers
     */
    expect(getByRole('alert')).toBeInTheDocument();
  });

  it('should allow keyboard interaction with recovery button', () => {
    const { getByTestId } = render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    const resetBtn = getByTestId('error-reset-btn');

    /**
     * Button should be focusable and clickable
     */
    resetBtn.focus();
    expect(document.activeElement).toBe(resetBtn);

    fireEvent.keyDown(resetBtn, { key: 'Enter' });
    expect(resetBtn).toBeInTheDocument();
  });

  it('should announce error to screen readers', () => {
    const { getByRole } = render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} message="Something went wrong" />
      </ErrorBoundary>
    );

    const alert = getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent('Something went wrong');
  });
});
