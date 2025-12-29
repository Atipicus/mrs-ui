/**
 * Drawer Component Tests
 */

import React from 'react';
import { renderWithTheme, screen, fireEvent } from '../../../../tests/test-utils';
import { Drawer } from './Drawer';
import { waitFor } from '@testing-library/react';

describe('Drawer', () => {
  // Rendering tests
  it('renders without crashing when closed', () => {
    renderWithTheme(
      <Drawer open={false}>
        <div>Drawer content</div>
      </Drawer>
    );
    // Drawer content shouldn't be visible when closed
    expect(screen.queryByText('Drawer content')).not.toBeInTheDocument();
  });

  it('renders content when open', async () => {
    renderWithTheme(
      <Drawer open={true}>
        <div>Drawer content</div>
      </Drawer>
    );
    await waitFor(() => {
      expect(screen.getByText('Drawer content')).toBeInTheDocument();
    });
  });

  it('renders children correctly', async () => {
    renderWithTheme(
      <Drawer open={true}>
        <div data-testid="drawer-child">Child Content</div>
      </Drawer>
    );
    await waitFor(() => {
      expect(screen.getByTestId('drawer-child')).toBeInTheDocument();
    });
  });

  // Anchor position tests
  it('applies left anchor by default', async () => {
    renderWithTheme(
      <Drawer open={true}>
        <div>Content</div>
      </Drawer>
    );
    await waitFor(() => {
      const drawer = document.querySelector('.MuiDrawer-anchorLeft');
      expect(drawer).toBeInTheDocument();
    });
  });

  it('applies right anchor', async () => {
    renderWithTheme(
      <Drawer anchor="right" open={true}>
        <div>Content</div>
      </Drawer>
    );
    await waitFor(() => {
      const drawer = document.querySelector('.MuiDrawer-anchorRight');
      expect(drawer).toBeInTheDocument();
    });
  });

  it('applies top anchor', async () => {
    renderWithTheme(
      <Drawer anchor="top" open={true}>
        <div>Content</div>
      </Drawer>
    );
    await waitFor(() => {
      const drawer = document.querySelector('.MuiDrawer-anchorTop');
      expect(drawer).toBeInTheDocument();
    });
  });

  it('applies bottom anchor', async () => {
    renderWithTheme(
      <Drawer anchor="bottom" open={true}>
        <div>Content</div>
      </Drawer>
    );
    await waitFor(() => {
      const drawer = document.querySelector('.MuiDrawer-anchorBottom');
      expect(drawer).toBeInTheDocument();
    });
  });

  // Variant tests
  it('applies temporary variant by default', async () => {
    renderWithTheme(
      <Drawer open={true}>
        <div>Content</div>
      </Drawer>
    );
    await waitFor(() => {
      // Temporary drawer includes modal backdrop
      const backdrop = document.querySelector('.MuiModal-backdrop');
      expect(backdrop).toBeInTheDocument();
    });
  });

  it('applies persistent variant', async () => {
    renderWithTheme(
      <Drawer variant="persistent" open={true}>
        <div>Content</div>
      </Drawer>
    );
    await waitFor(() => {
      const drawer = document.querySelector('.MuiDrawer-docked');
      expect(drawer).toBeInTheDocument();
    });
  });

  it('applies permanent variant', async () => {
    renderWithTheme(
      <Drawer variant="permanent" open={true}>
        <div>Content</div>
      </Drawer>
    );
    await waitFor(() => {
      const drawer = document.querySelector('.MuiDrawer-docked');
      expect(drawer).toBeInTheDocument();
    });
  });

  // Elevation tests
  it('applies default elevation of 16', async () => {
    renderWithTheme(
      <Drawer open={true}>
        <div>Content</div>
      </Drawer>
    );
    await waitFor(() => {
      const paper = document.querySelector('.MuiDrawer-paper');
      expect(paper).toBeInTheDocument();
      expect(paper?.classList.contains('MuiPaper-elevation16')).toBe(true);
    });
  });

  it('applies custom elevation', async () => {
    renderWithTheme(
      <Drawer elevation={8} open={true}>
        <div>Content</div>
      </Drawer>
    );
    await waitFor(() => {
      const paper = document.querySelector('.MuiDrawer-paper');
      expect(paper).toBeInTheDocument();
      expect(paper?.classList.contains('MuiPaper-elevation8')).toBe(true);
    });
  });

  it('applies zero elevation', async () => {
    renderWithTheme(
      <Drawer elevation={0} open={true}>
        <div>Content</div>
      </Drawer>
    );
    await waitFor(() => {
      const paper = document.querySelector('.MuiDrawer-paper');
      expect(paper).toBeInTheDocument();
      expect(paper?.classList.contains('MuiPaper-elevation0')).toBe(true);
    });
  });

  // Backdrop tests
  it('shows backdrop by default for temporary variant', async () => {
    renderWithTheme(
      <Drawer variant="temporary" open={true}>
        <div>Content</div>
      </Drawer>
    );
    await waitFor(() => {
      const backdrop = document.querySelector('.MuiModal-backdrop');
      expect(backdrop).toBeInTheDocument();
    });
  });

  it('hides backdrop when hideBackdrop is true', async () => {
    renderWithTheme(
      <Drawer hideBackdrop open={true}>
        <div>Content</div>
      </Drawer>
    );
    await waitFor(() => {
      const backdrop = document.querySelector('.MuiModal-backdrop');
      expect(backdrop).not.toBeInTheDocument();
    });
  });

  // Interaction tests
  it('calls onClose when backdrop is clicked', async () => {
    const onClose = jest.fn();
    renderWithTheme(
      <Drawer open={true} onClose={onClose}>
        <div>Content</div>
      </Drawer>
    );

    await waitFor(() => {
      const backdrop = document.querySelector('.MuiModal-backdrop');
      expect(backdrop).toBeInTheDocument();
    });

    const backdrop = document.querySelector('.MuiModal-backdrop');
    if (backdrop) {
      fireEvent.click(backdrop);
      await waitFor(() => {
        expect(onClose).toHaveBeenCalled();
      });
    }
  });

  it('calls onClose when ESC key is pressed', async () => {
    const onClose = jest.fn();
    renderWithTheme(
      <Drawer open={true} onClose={onClose}>
        <div>Content</div>
      </Drawer>
    );

    await waitFor(() => {
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    const drawer = document.querySelector('.MuiDrawer-paper');
    if (drawer) {
      fireEvent.keyDown(drawer, { key: 'Escape', code: 'Escape', keyCode: 27 });
      await waitFor(() => {
        expect(onClose).toHaveBeenCalled();
      });
    } else {
      // If drawer element not found, test should fail
      expect(drawer).not.toBeNull();
    }
  });

  // Custom sx styles test
  it('applies custom sx styles', async () => {
    renderWithTheme(
      <Drawer sx={{ zIndex: 1500 }} open={true}>
        <div>Content</div>
      </Drawer>
    );
    await waitFor(() => {
      const drawer = document.querySelector('.MuiDrawer-root');
      expect(drawer).toBeInTheDocument();
    });
  });

  // Ref forwarding test
  it('forwards ref correctly', async () => {
    const ref = React.createRef<HTMLDivElement>();
    renderWithTheme(
      <Drawer ref={ref} open={true}>
        <div>Content</div>
      </Drawer>
    );
    await waitFor(() => {
      expect(ref.current).toBeInstanceOf(HTMLElement);
    });
  });

  // Display name test
  it('has correct display name', () => {
    expect(Drawer.displayName).toBe('Drawer');
  });

  // Open/close state tests
  it('is closed when open is false', () => {
    renderWithTheme(
      <Drawer open={false}>
        <div>Content</div>
      </Drawer>
    );
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  it('is open when open is true', async () => {
    renderWithTheme(
      <Drawer open={true}>
        <div>Content</div>
      </Drawer>
    );
    await waitFor(() => {
      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });

  // Variant combination tests
  it('combines anchor and variant props correctly', async () => {
    renderWithTheme(
      <Drawer anchor="right" variant="persistent" open={true}>
        <div>Content</div>
      </Drawer>
    );
    await waitFor(() => {
      const drawer = document.querySelector('.MuiDrawer-anchorRight');
      expect(drawer).toBeInTheDocument();
      expect(drawer?.classList.contains('MuiDrawer-docked')).toBe(true);
    });
  });

  // slotProps test
  it('applies custom slotProps to paper', async () => {
    renderWithTheme(
      <Drawer
        open={true}
        slotProps={{
          paper: {
            'data-testid': 'custom-paper',
            sx: { width: 400 },
          },
        }}
      >
        <div>Content</div>
      </Drawer>
    );
    await waitFor(() => {
      const paper = screen.queryByTestId('custom-paper');
      expect(paper).toBeInTheDocument();
    });
  });
});
