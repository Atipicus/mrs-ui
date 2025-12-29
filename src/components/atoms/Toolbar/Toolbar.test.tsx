/**
 * Toolbar Component Tests
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import { Toolbar } from './Toolbar';

describe('Toolbar', () => {
  it('renders without crashing', () => {
    renderWithTheme(
      <Toolbar>
        <div>Content</div>
      </Toolbar>
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    renderWithTheme(
      <Toolbar>
        <div data-testid="child-element">Child Content</div>
      </Toolbar>
    );
    expect(screen.getByTestId('child-element')).toBeInTheDocument();
  });

  it('applies regular variant by default', () => {
    const { container } = renderWithTheme(
      <Toolbar>
        <div>Content</div>
      </Toolbar>
    );
    const toolbar = container.querySelector('.MuiToolbar-regular');
    expect(toolbar).toBeInTheDocument();
  });

  it('applies dense variant', () => {
    const { container } = renderWithTheme(
      <Toolbar variant="dense">
        <div>Content</div>
      </Toolbar>
    );
    const toolbar = container.querySelector('.MuiToolbar-dense');
    expect(toolbar).toBeInTheDocument();
  });

  it('applies gutters by default', () => {
    const { container } = renderWithTheme(
      <Toolbar>
        <div>Content</div>
      </Toolbar>
    );
    const toolbar = container.querySelector('.MuiToolbar-gutters');
    expect(toolbar).toBeInTheDocument();
  });

  it('removes gutters when disableGutters is true', () => {
    const { container } = renderWithTheme(
      <Toolbar disableGutters>
        <div>Content</div>
      </Toolbar>
    );
    const toolbar = container.querySelector('.MuiToolbar-gutters');
    expect(toolbar).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = renderWithTheme(
      <Toolbar className="custom-toolbar">
        <div>Content</div>
      </Toolbar>
    );
    const toolbar = container.querySelector('.custom-toolbar');
    expect(toolbar).toBeInTheDocument();
  });

  it('applies custom sx styles', () => {
    const { container } = renderWithTheme(
      <Toolbar sx={{ backgroundColor: 'red' }}>
        <div>Content</div>
      </Toolbar>
    );
    const toolbar = container.querySelector('.MuiToolbar-root');
    expect(toolbar).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    renderWithTheme(
      <Toolbar ref={ref}>
        <div>Content</div>
      </Toolbar>
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has correct display name', () => {
    expect(Toolbar.displayName).toBe('Toolbar');
  });
});
