/**
 * Sidenav Component Tests
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Sidenav } from './Sidenav';
import type { SidenavNavigationItem } from './Sidenav.types';

const theme = createTheme();

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

const defaultItems: SidenavNavigationItem[] = [
  { id: 'home', label: 'Inicio', icon: 'home', selected: true },
  { id: 'appointments', label: 'Citas', icon: 'event' },
  {
    header: 'Mi salud',
    items: [
      { id: 'orders', label: 'Órdenes', icon: 'order_approve' },
      { id: 'prescriptions', label: 'Recetas', icon: 'medication' },
    ],
  },
];

describe('Sidenav', () => {
  describe('Rendering', () => {
    it('renders with default variant', () => {
      renderWithTheme(<Sidenav variant="default" items={defaultItems} />);

      // Should render navigation items with labels
      expect(screen.getByText('Inicio')).toBeInTheDocument();
      expect(screen.getByText('Citas')).toBeInTheDocument();
    });

    it('renders with slim variant', () => {
      renderWithTheme(<Sidenav variant="slim" items={defaultItems} />);

      // Component should render
      expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('renders logo by default', () => {
      renderWithTheme(<Sidenav variant="default" items={defaultItems} />);

      // Should have SVG logo
      const svgs = document.querySelectorAll('svg');
      expect(svgs.length).toBeGreaterThan(0);
    });

    it('hides logo when logo prop is false', () => {
      renderWithTheme(<Sidenav variant="default" items={defaultItems} logo={false} />);

      // Should not have the logo SVG (but may have icon SVGs)
      const container = screen.getByRole('list').parentElement;
      const logoSection = container?.querySelector('[style*="height: 64px"]');
      expect(logoSection).not.toBeInTheDocument();
    });

    it('renders action button', () => {
      renderWithTheme(
        <Sidenav
          variant="default"
          items={defaultItems}
          showActionButton
          actionButton={{
            label: 'Agendar',
            icon: 'add',
          }}
        />
      );

      expect(screen.getByText('Agendar')).toBeInTheDocument();
    });

    it('hides action button when showActionButton is false', () => {
      renderWithTheme(
        <Sidenav
          variant="default"
          items={defaultItems}
          showActionButton={false}
          actionButton={{
            label: 'Agendar',
            icon: 'add',
          }}
        />
      );

      expect(screen.queryByText('Agendar')).not.toBeInTheDocument();
    });

    it('renders group headers in default variant', () => {
      renderWithTheme(<Sidenav variant="default" items={defaultItems} />);

      expect(screen.getByText('Mi salud')).toBeInTheDocument();
    });

    it('renders items within groups', () => {
      renderWithTheme(<Sidenav variant="default" items={defaultItems} />);

      expect(screen.getByText('Órdenes')).toBeInTheDocument();
      expect(screen.getByText('Recetas')).toBeInTheDocument();
    });
  });

  describe('Interaction', () => {
    it('calls onItemClick when navigation item is clicked', () => {
      const handleItemClick = jest.fn();

      renderWithTheme(
        <Sidenav
          variant="default"
          items={defaultItems}
          onItemClick={handleItemClick}
        />
      );

      fireEvent.click(screen.getByText('Citas'));

      expect(handleItemClick).toHaveBeenCalledWith(
        expect.objectContaining({ label: 'Citas' })
      );
    });

    it('calls item onClick when provided', () => {
      const handleClick = jest.fn();
      const itemsWithClick: SidenavNavigationItem[] = [
        { id: 'home', label: 'Inicio', icon: 'home', onClick: handleClick },
      ];

      renderWithTheme(<Sidenav variant="default" items={itemsWithClick} />);

      fireEvent.click(screen.getByText('Inicio'));

      expect(handleClick).toHaveBeenCalled();
    });

    it('calls action button onClick when clicked', () => {
      const handleActionClick = jest.fn();

      renderWithTheme(
        <Sidenav
          variant="default"
          items={defaultItems}
          showActionButton
          actionButton={{
            label: 'Agendar',
            icon: 'add',
            onClick: handleActionClick,
          }}
        />
      );

      fireEvent.click(screen.getByText('Agendar'));

      expect(handleActionClick).toHaveBeenCalled();
    });
  });

  describe('Variants', () => {
    it('applies correct width for default variant', () => {
      const { container } = renderWithTheme(
        <Sidenav variant="default" items={defaultItems} />
      );

      const paper = container.querySelector('.MuiPaper-root');
      expect(paper).toHaveStyle({ width: '256px' });
    });

    it('applies correct width for slim variant', () => {
      const { container } = renderWithTheme(
        <Sidenav variant="slim" items={defaultItems} />
      );

      const paper = container.querySelector('.MuiPaper-root');
      expect(paper).toHaveStyle({ width: '72px' });
    });

    it('applies custom width when provided', () => {
      const { container } = renderWithTheme(
        <Sidenav variant="default" items={defaultItems} width={300} />
      );

      const paper = container.querySelector('.MuiPaper-root');
      expect(paper).toHaveStyle({ width: '300px' });
    });
  });

  describe('Selected State', () => {
    it('applies selected styles to selected item', () => {
      renderWithTheme(<Sidenav variant="default" items={defaultItems} />);

      const selectedButton = screen.getByText('Inicio').closest('div[role="button"]');
      expect(selectedButton).toHaveClass('Mui-selected');
    });

    it('does not apply selected styles to non-selected items', () => {
      renderWithTheme(<Sidenav variant="default" items={defaultItems} />);

      const unselectedButton = screen.getByText('Citas').closest('div[role="button"]');
      expect(unselectedButton).not.toHaveClass('Mui-selected');
    });
  });

  describe('Accessibility', () => {
    it('renders list with proper role', () => {
      renderWithTheme(<Sidenav variant="default" items={defaultItems} />);

      expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('renders list items as buttons', () => {
      renderWithTheme(<Sidenav variant="default" items={defaultItems} />);

      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
    });
  });
});

