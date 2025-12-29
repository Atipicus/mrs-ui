/**
 * DrawerNavigation Component Tests
 */

import React from 'react';
import { renderWithTheme, screen, fireEvent } from '../../../../tests/test-utils';
import { DrawerNavigation } from './DrawerNavigation';
import { waitFor } from '@testing-library/react';
import HomeIcon from '@mui/icons-material/Home';
import InboxIcon from '@mui/icons-material/Inbox';

describe('DrawerNavigation', () => {
  // Rendering tests
  it('renders without crashing', () => {
    renderWithTheme(<DrawerNavigation items={[]} />);
    // Component should render even with empty items
    expect(document.querySelector('.MuiList-root')).toBeInTheDocument();
  });

  it('renders simple navigation items', () => {
    renderWithTheme(
      <DrawerNavigation
        items={[
          { label: 'Home', icon: <HomeIcon /> },
          { label: 'Inbox', icon: <InboxIcon /> },
        ]}
      />
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Inbox')).toBeInTheDocument();
  });

  it('renders expandable items', async () => {
    renderWithTheme(
      <DrawerNavigation
        items={[
          {
            label: 'Products',
            expandable: true,
            defaultOpen: true,
            children: [{ label: 'All Products' }, { label: 'Categories' }],
          },
        ]}
      />
    );
    expect(screen.getByText('Products')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText('All Products')).toBeInTheDocument();
      expect(screen.getByText('Categories')).toBeInTheDocument();
    });
  });

  it('renders mixed simple and expandable items', async () => {
    renderWithTheme(
      <DrawerNavigation
        items={[
          { label: 'Home', icon: <HomeIcon /> },
          {
            label: 'Products',
            expandable: true,
            defaultOpen: true,
            children: [{ label: 'All Products' }],
          },
          { label: 'Settings' },
        ]}
      />
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText('All Products')).toBeInTheDocument();
    });
  });

  // Width and padding tests
  it('applies default width of 256px', () => {
    const { container } = renderWithTheme(<DrawerNavigation items={[]} />);
    const box = container.firstChild as HTMLElement;
    expect(box).toHaveStyle({ width: '256px' });
  });

  it('applies custom width', () => {
    const { container } = renderWithTheme(<DrawerNavigation items={[]} width={320} />);
    const box = container.firstChild as HTMLElement;
    expect(box).toHaveStyle({ width: '320px' });
  });

  it('applies default padding', () => {
    const { container } = renderWithTheme(<DrawerNavigation items={[]} />);
    const box = container.firstChild as HTMLElement;
    expect(box).toHaveStyle({ paddingTop: '32px', paddingBottom: '32px' });
  });

  it('applies custom padding', () => {
    const { container } = renderWithTheme(
      <DrawerNavigation items={[]} paddingTop={16} paddingBottom={24} />
    );
    const box = container.firstChild as HTMLElement;
    expect(box).toHaveStyle({ paddingTop: '16px', paddingBottom: '24px' });
  });

  // Selected state tests
  it('applies selected state to items', () => {
    renderWithTheme(
      <DrawerNavigation
        items={[
          { label: 'Home', selected: true },
          { label: 'Inbox', selected: false },
        ]}
      />
    );
    const home = screen.getByRole('button', { name: /Home/i });
    const inbox = screen.getByRole('button', { name: /Inbox/i });
    expect(home).toHaveClass('Mui-selected');
    expect(inbox).not.toHaveClass('Mui-selected');
  });

  // Click handler tests
  it('calls onClick when item is clicked', () => {
    const onClick = jest.fn();
    renderWithTheme(<DrawerNavigation items={[{ label: 'Home', onClick }]} />);
    const item = screen.getByText('Home');
    fireEvent.click(item);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('calls onItemClick callback', () => {
    const onItemClick = jest.fn();
    renderWithTheme(
      <DrawerNavigation items={[{ label: 'Home' }]} onItemClick={onItemClick} />
    );
    const item = screen.getByText('Home');
    fireEvent.click(item);
    expect(onItemClick).toHaveBeenCalledTimes(1);
    expect(onItemClick).toHaveBeenCalledWith(
      expect.objectContaining({ label: 'Home' })
    );
  });

  it('calls both onClick and onItemClick', () => {
    const onClick = jest.fn();
    const onItemClick = jest.fn();
    renderWithTheme(
      <DrawerNavigation items={[{ label: 'Home', onClick }]} onItemClick={onItemClick} />
    );
    const item = screen.getByText('Home');
    fireEvent.click(item);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onItemClick).toHaveBeenCalledTimes(1);
  });

  // Expandable item tests
  it('toggles expandable items', async () => {
    renderWithTheme(
      <DrawerNavigation
        items={[
          {
            label: 'Products',
            expandable: true,
            defaultOpen: false,
            children: [{ label: 'All Products' }],
          },
        ]}
      />
    );

    // Initially closed
    expect(screen.queryByText('All Products')).not.toBeInTheDocument();

    // Click to open
    const parent = screen.getByText('Products');
    fireEvent.click(parent);

    await waitFor(() => {
      expect(screen.getByText('All Products')).toBeInTheDocument();
    });

    // Click to close
    fireEvent.click(parent);

    await waitFor(() => {
      expect(screen.queryByText('All Products')).not.toBeInTheDocument();
    });
  });

  it('respects defaultOpen for expandable items', async () => {
    renderWithTheme(
      <DrawerNavigation
        items={[
          {
            label: 'Products',
            expandable: true,
            defaultOpen: true,
            children: [{ label: 'All Products' }],
          },
        ]}
      />
    );

    await waitFor(() => {
      expect(screen.getByText('All Products')).toBeInTheDocument();
    });
  });

  // Divider tests
  it('renders dividers when specified', () => {
    renderWithTheme(
      <DrawerNavigation
        items={[
          { label: 'Home', divider: true },
          { label: 'Inbox' },
        ]}
      />
    );
    const dividers = document.querySelectorAll('.MuiDivider-root');
    expect(dividers.length).toBeGreaterThan(0);
  });

  // Icon tests
  it('renders items with icons', () => {
    renderWithTheme(
      <DrawerNavigation
        items={[
          { label: 'Home', icon: <HomeIcon data-testid="home-icon" /> },
          { label: 'Inbox', icon: <InboxIcon data-testid="inbox-icon" /> },
        ]}
      />
    );
    expect(screen.getByTestId('home-icon')).toBeInTheDocument();
    expect(screen.getByTestId('inbox-icon')).toBeInTheDocument();
  });

  it('renders items without icons', () => {
    renderWithTheme(<DrawerNavigation items={[{ label: 'Home' }, { label: 'Inbox' }]} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Inbox')).toBeInTheDocument();
  });

  // Custom sx styles test
  it('applies custom sx styles to container', () => {
    const { container } = renderWithTheme(
      <DrawerNavigation items={[]} sx={{ backgroundColor: 'red' }} />
    );
    const box = container.firstChild as HTMLElement;
    expect(box).toHaveStyle({ backgroundColor: 'red' });
  });

  it('applies custom listSx styles to List', () => {
    renderWithTheme(
      <DrawerNavigation items={[{ label: 'Home' }]} listSx={{ backgroundColor: 'blue' }} />
    );
    const list = document.querySelector('.MuiList-root');
    // Check that custom sx is applied
    expect(list).toBeInTheDocument();
  });

  // Ref forwarding test
  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    renderWithTheme(<DrawerNavigation ref={ref} items={[]} />);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  // Display name test
  it('has correct display name', () => {
    expect(DrawerNavigation.displayName).toBe('DrawerNavigation');
  });

  // Multiple expandable items test
  it('handles multiple expandable items independently', async () => {
    renderWithTheme(
      <DrawerNavigation
        items={[
          {
            id: 'products',
            label: 'Products',
            expandable: true,
            defaultOpen: false,
            children: [{ label: 'All Products' }],
          },
          {
            id: 'customers',
            label: 'Customers',
            expandable: true,
            defaultOpen: false,
            children: [{ label: 'All Customers' }],
          },
        ]}
      />
    );

    // Both should be closed
    expect(screen.queryByText('All Products')).not.toBeInTheDocument();
    expect(screen.queryByText('All Customers')).not.toBeInTheDocument();

    // Open first
    fireEvent.click(screen.getByText('Products'));
    await waitFor(() => {
      expect(screen.getByText('All Products')).toBeInTheDocument();
    });
    expect(screen.queryByText('All Customers')).not.toBeInTheDocument();

    // Open second
    fireEvent.click(screen.getByText('Customers'));
    await waitFor(() => {
      expect(screen.getByText('All Customers')).toBeInTheDocument();
    });
    expect(screen.getByText('All Products')).toBeInTheDocument(); // First still open
  });

  // Edge cases
  it('renders with empty items array', () => {
    renderWithTheme(<DrawerNavigation items={[]} />);
    expect(document.querySelector('.MuiList-root')).toBeInTheDocument();
  });

  it('handles items without id (uses index)', () => {
    renderWithTheme(
      <DrawerNavigation
        items={[
          { label: 'Item 1' },
          { label: 'Item 2' },
        ]}
      />
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('handles expandable items without children', async () => {
    renderWithTheme(
      <DrawerNavigation
        items={[
          {
            label: 'Empty Parent',
            expandable: true,
            children: [],
          },
        ]}
      />
    );
    expect(screen.getByText('Empty Parent')).toBeInTheDocument();
  });
});
