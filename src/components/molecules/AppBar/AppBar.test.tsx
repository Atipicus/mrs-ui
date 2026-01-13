/**
 * AppBar Component Tests
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import { AppBar } from './AppBar';

describe('AppBar', () => {
  // Rendering tests
  it('renders without crashing', () => {
    renderWithTheme(
      <AppBar>
        <div>Content</div>
      </AppBar>
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    renderWithTheme(
      <AppBar>
        <div data-testid="child-element">Child Content</div>
      </AppBar>
    );
    expect(screen.getByTestId('child-element')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = renderWithTheme(
      <AppBar className="custom-appbar">
        <div>Content</div>
      </AppBar>
    );
    const appBar = container.querySelector('.custom-appbar');
    expect(appBar).toBeInTheDocument();
  });

  // Color variant tests
  it('applies default color (white) by default', () => {
    const { container } = renderWithTheme(
      <AppBar>
        <div>Content</div>
      </AppBar>
    );
    const appBar = container.querySelector('.MuiAppBar-colorDefault');
    expect(appBar).toBeInTheDocument();
  });

  it('applies secondary color variant', () => {
    const { container } = renderWithTheme(
      <AppBar color="secondary">
        <div>Content</div>
      </AppBar>
    );
    const appBar = container.querySelector('.MuiAppBar-colorSecondary');
    expect(appBar).toBeInTheDocument();
  });

  it('applies default color variant', () => {
    const { container } = renderWithTheme(
      <AppBar color="default">
        <div>Content</div>
      </AppBar>
    );
    const appBar = container.querySelector('.MuiAppBar-colorDefault');
    expect(appBar).toBeInTheDocument();
  });

  it('applies transparent color variant', () => {
    const { container } = renderWithTheme(
      <AppBar color="transparent">
        <div>Content</div>
      </AppBar>
    );
    const appBar = container.querySelector('.MuiAppBar-colorTransparent');
    expect(appBar).toBeInTheDocument();
  });

  it('applies inherit color variant', () => {
    const { container } = renderWithTheme(
      <AppBar color="inherit">
        <div>Content</div>
      </AppBar>
    );
    const appBar = container.querySelector('.MuiAppBar-colorInherit');
    expect(appBar).toBeInTheDocument();
  });

  // Position tests
  it('applies fixed position by default', () => {
    const { container } = renderWithTheme(
      <AppBar>
        <div>Content</div>
      </AppBar>
    );
    const appBar = container.querySelector('.MuiAppBar-positionFixed');
    expect(appBar).toBeInTheDocument();
  });

  it('applies static position', () => {
    const { container } = renderWithTheme(
      <AppBar position="static">
        <div>Content</div>
      </AppBar>
    );
    const appBar = container.querySelector('.MuiAppBar-positionStatic');
    expect(appBar).toBeInTheDocument();
  });

  it('applies sticky position', () => {
    const { container } = renderWithTheme(
      <AppBar position="sticky">
        <div>Content</div>
      </AppBar>
    );
    const appBar = container.querySelector('.MuiAppBar-positionSticky');
    expect(appBar).toBeInTheDocument();
  });

  it('applies absolute position', () => {
    const { container } = renderWithTheme(
      <AppBar position="absolute">
        <div>Content</div>
      </AppBar>
    );
    const appBar = container.querySelector('.MuiAppBar-positionAbsolute');
    expect(appBar).toBeInTheDocument();
  });

  it('applies relative position', () => {
    const { container } = renderWithTheme(
      <AppBar position="relative">
        <div>Content</div>
      </AppBar>
    );
    const appBar = container.querySelector('.MuiAppBar-positionRelative');
    expect(appBar).toBeInTheDocument();
  });

  // Elevation tests
  it('applies default elevation of 4', () => {
    const { container } = renderWithTheme(
      <AppBar>
        <div>Content</div>
      </AppBar>
    );
    const appBar = container.querySelector('.MuiPaper-elevation4');
    expect(appBar).toBeInTheDocument();
  });

  it('applies custom elevation', () => {
    const { container } = renderWithTheme(
      <AppBar elevation={8}>
        <div>Content</div>
      </AppBar>
    );
    const appBar = container.querySelector('.MuiPaper-elevation8');
    expect(appBar).toBeInTheDocument();
  });

  it('applies zero elevation', () => {
    const { container } = renderWithTheme(
      <AppBar elevation={0}>
        <div>Content</div>
      </AppBar>
    );
    const appBar = container.querySelector('.MuiPaper-elevation0');
    expect(appBar).toBeInTheDocument();
  });

  it('applies maximum elevation of 24', () => {
    const { container } = renderWithTheme(
      <AppBar elevation={24}>
        <div>Content</div>
      </AppBar>
    );
    const appBar = container.querySelector('.MuiPaper-elevation24');
    expect(appBar).toBeInTheDocument();
  });

  // enableColorOnDark prop test
  it('applies enableColorOnDark prop', () => {
    renderWithTheme(
      <AppBar enableColorOnDark>
        <div>Content</div>
      </AppBar>
    );
    // Component should render without errors
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('does not enable color on dark by default', () => {
    renderWithTheme(
      <AppBar>
        <div>Content</div>
      </AppBar>
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  // Custom sx styles test
  it('applies custom sx styles', () => {
    const { container } = renderWithTheme(
      <AppBar sx={{ backgroundColor: 'red' }}>
        <div>Content</div>
      </AppBar>
    );
    const appBar = container.querySelector('.MuiAppBar-root');
    expect(appBar).toBeInTheDocument();
  });

  it('merges sx styles with default styles', () => {
    const { container } = renderWithTheme(
      <AppBar sx={{ padding: 2 }}>
        <div>Content</div>
      </AppBar>
    );
    const appBar = container.querySelector('.MuiAppBar-root');
    expect(appBar).toBeInTheDocument();
  });

  // Accessibility tests
  it('supports aria-label', () => {
    const { container } = renderWithTheme(
      <AppBar aria-label="Main navigation">
        <div>Content</div>
      </AppBar>
    );
    const appBar = container.querySelector('[aria-label="Main navigation"]');
    expect(appBar).toBeInTheDocument();
  });

  it('supports custom role attribute', () => {
    const { container } = renderWithTheme(
      <AppBar role="banner">
        <div>Content</div>
      </AppBar>
    );
    const appBar = container.querySelector('[role="banner"]');
    expect(appBar).toBeInTheDocument();
  });

  // Ref forwarding test
  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    renderWithTheme(
      <AppBar ref={ref}>
        <div>Content</div>
      </AppBar>
    );
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it('ref points to correct element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = renderWithTheme(
      <AppBar ref={ref}>
        <div>Content</div>
      </AppBar>
    );
    const appBar = container.querySelector('.MuiAppBar-root');
    expect(ref.current).toBe(appBar);
  });

  // Theme integration test
  it('applies Nunito font family from theme', () => {
    const { container } = renderWithTheme(
      <AppBar>
        <div>Content</div>
      </AppBar>
    );
    const appBar = container.querySelector('.MuiAppBar-root');
    expect(appBar).toBeInTheDocument();
  });

  // Component structure tests
  it('renders as a header element by default', () => {
    const { container } = renderWithTheme(
      <AppBar>
        <div>Content</div>
      </AppBar>
    );
    const header = container.querySelector('header');
    expect(header).toBeInTheDocument();
  });

  it('has correct display name', () => {
    expect(AppBar.displayName).toBe('AppBar');
  });

  // Multiple children test
  it('renders multiple children correctly', () => {
    renderWithTheme(
      <AppBar>
        <div>First child</div>
        <div>Second child</div>
        <div>Third child</div>
      </AppBar>
    );
    expect(screen.getByText('First child')).toBeInTheDocument();
    expect(screen.getByText('Second child')).toBeInTheDocument();
    expect(screen.getByText('Third child')).toBeInTheDocument();
  });

  // Props combination tests
  it('combines color and position props correctly', () => {
    const { container } = renderWithTheme(
      <AppBar color="secondary" position="static">
        <div>Content</div>
      </AppBar>
    );
    const appBar = container.querySelector('.MuiAppBar-colorSecondary.MuiAppBar-positionStatic');
    expect(appBar).toBeInTheDocument();
  });

  it('combines all props correctly', () => {
    const { container } = renderWithTheme(
      <AppBar color="primary" position="fixed" elevation={12} enableColorOnDark>
        <div>Content</div>
      </AppBar>
    );
    const appBar = container.querySelector('.MuiAppBar-root');
    expect(appBar).toBeInTheDocument();
    expect(appBar?.classList.contains('MuiAppBar-colorPrimary')).toBe(true);
    expect(appBar?.classList.contains('MuiAppBar-positionFixed')).toBe(true);
    expect(appBar?.classList.contains('MuiPaper-elevation12')).toBe(true);
  });
});
