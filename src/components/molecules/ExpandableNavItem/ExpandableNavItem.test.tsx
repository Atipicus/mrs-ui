/**
 * ExpandableNavItem Component Tests
 */

import React from 'react';
import { renderWithTheme, screen, fireEvent } from '../../../../tests/test-utils';
import { ExpandableNavItem } from './ExpandableNavItem';
import { waitFor } from '@testing-library/react';
import InboxIcon from '@mui/icons-material/Inbox';
import List from '@mui/material/List';

describe('ExpandableNavItem', () => {
  // Rendering tests
  it('renders without crashing', () => {
    renderWithTheme(
      <List>
        <ExpandableNavItem label="Test Item" />
      </List>
    );
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });

  it('renders with icon', () => {
    renderWithTheme(
      <List>
        <ExpandableNavItem label="Inbox" icon={<InboxIcon data-testid="inbox-icon" />} />
      </List>
    );
    expect(screen.getByTestId('inbox-icon')).toBeInTheDocument();
  });

  it('renders children when provided', () => {
    renderWithTheme(
      <List>
        <ExpandableNavItem
          label="Parent"
          isOpen={true}
          children={[{ label: 'Child 1' }, { label: 'Child 2' }]}
        />
      </List>
    );
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  // Expand/Collapse tests
  it('shows expand icon when closed', () => {
    renderWithTheme(
      <List>
        <ExpandableNavItem label="Parent" isOpen={false} children={[{ label: 'Child' }]} />
      </List>
    );
    // ExpandMore icon should be present (downward arrow)
    const expandIcon = document.querySelector('[data-testid="ExpandMoreIcon"]');
    expect(expandIcon).toBeInTheDocument();
  });

  it('shows collapse icon when open', () => {
    renderWithTheme(
      <List>
        <ExpandableNavItem label="Parent" isOpen={true} children={[{ label: 'Child' }]} />
      </List>
    );
    // ExpandLess icon should be present (upward arrow)
    const collapseIcon = document.querySelector('[data-testid="ExpandLessIcon"]');
    expect(collapseIcon).toBeInTheDocument();
  });

  it('hides children when closed', () => {
    renderWithTheme(
      <List>
        <ExpandableNavItem label="Parent" isOpen={false} children={[{ label: 'Child' }]} />
      </List>
    );
    expect(screen.queryByText('Child')).not.toBeInTheDocument();
  });

  it('shows children when open', async () => {
    renderWithTheme(
      <List>
        <ExpandableNavItem label="Parent" isOpen={true} children={[{ label: 'Child' }]} />
      </List>
    );
    await waitFor(() => {
      expect(screen.getByText('Child')).toBeInTheDocument();
    });
  });

  // Interaction tests
  it('calls onToggle when parent is clicked', () => {
    const onToggle = jest.fn();
    renderWithTheme(
      <List>
        <ExpandableNavItem
          label="Parent"
          onToggle={onToggle}
          children={[{ label: 'Child' }]}
        />
      </List>
    );
    const parent = screen.getByText('Parent');
    fireEvent.click(parent);
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it('calls onClick when parent is clicked', () => {
    const onClick = jest.fn();
    renderWithTheme(
      <List>
        <ExpandableNavItem label="Parent" onClick={onClick} />
      </List>
    );
    const parent = screen.getByText('Parent');
    fireEvent.click(parent);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('calls both onToggle and onClick when provided', () => {
    const onToggle = jest.fn();
    const onClick = jest.fn();
    renderWithTheme(
      <List>
        <ExpandableNavItem
          label="Parent"
          onToggle={onToggle}
          onClick={onClick}
          children={[{ label: 'Child' }]}
        />
      </List>
    );
    const parent = screen.getByText('Parent');
    fireEvent.click(parent);
    expect(onToggle).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('calls child onClick when child is clicked', async () => {
    const childClick = jest.fn();
    renderWithTheme(
      <List>
        <ExpandableNavItem
          label="Parent"
          isOpen={true}
          children={[{ label: 'Child', onClick: childClick }]}
        />
      </List>
    );
    await waitFor(() => {
      const child = screen.getByText('Child');
      fireEvent.click(child);
      expect(childClick).toHaveBeenCalledTimes(1);
    });
  });

  // Selected state tests
  it('applies selected style to parent', () => {
    renderWithTheme(
      <List>
        <ExpandableNavItem label="Parent" selected={true} />
      </List>
    );
    const parentButton = screen.getByRole('button', { name: /Parent/i });
    expect(parentButton).toHaveClass('Mui-selected');
  });

  it('applies selected style to child', async () => {
    renderWithTheme(
      <List>
        <ExpandableNavItem
          label="Parent"
          isOpen={true}
          children={[{ label: 'Child', selected: true }]}
        />
      </List>
    );
    await waitFor(() => {
      const childButton = screen.getByRole('button', { name: /Child/i });
      expect(childButton).toHaveClass('Mui-selected');
    });
  });

  // Child icon tests
  it('renders child items with icons', async () => {
    renderWithTheme(
      <List>
        <ExpandableNavItem
          label="Parent"
          isOpen={true}
          children={[{ label: 'Child', icon: <InboxIcon data-testid="child-icon" /> }]}
        />
      </List>
    );
    await waitFor(() => {
      expect(screen.getByTestId('child-icon')).toBeInTheDocument();
    });
  });

  it('renders child items without icons', async () => {
    renderWithTheme(
      <List>
        <ExpandableNavItem label="Parent" isOpen={true} children={[{ label: 'Child' }]} />
      </List>
    );
    await waitFor(() => {
      expect(screen.getByText('Child')).toBeInTheDocument();
    });
  });

  // Multiple children tests
  it('renders multiple children', async () => {
    renderWithTheme(
      <List>
        <ExpandableNavItem
          label="Parent"
          isOpen={true}
          children={[{ label: 'Child 1' }, { label: 'Child 2' }, { label: 'Child 3' }]}
        />
      </List>
    );
    await waitFor(() => {
      expect(screen.getByText('Child 1')).toBeInTheDocument();
      expect(screen.getByText('Child 2')).toBeInTheDocument();
      expect(screen.getByText('Child 3')).toBeInTheDocument();
    });
  });

  // Ref forwarding test
  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    renderWithTheme(
      <List>
        <ExpandableNavItem ref={ref} label="Test" />
      </List>
    );
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  // Display name test
  it('has correct display name', () => {
    expect(ExpandableNavItem.displayName).toBe('ExpandableNavItem');
  });

  // Custom props tests
  it('applies custom ListItemButton props to parent', () => {
    renderWithTheme(
      <List>
        <ExpandableNavItem
          label="Parent"
          ListItemButtonProps={{ 'data-testid': 'custom-parent' } as any}
        />
      </List>
    );
    expect(screen.getByTestId('custom-parent')).toBeInTheDocument();
  });

  it('applies custom ListItemButton props to children', async () => {
    renderWithTheme(
      <List>
        <ExpandableNavItem
          label="Parent"
          isOpen={true}
          children={[{ label: 'Child' }]}
          childListItemButtonProps={{ 'data-testid': 'custom-child' } as any}
        />
      </List>
    );
    await waitFor(() => {
      expect(screen.getByTestId('custom-child')).toBeInTheDocument();
    });
  });

  // Edge cases
  it('renders without children array', () => {
    renderWithTheme(
      <List>
        <ExpandableNavItem label="Parent" />
      </List>
    );
    expect(screen.getByText('Parent')).toBeInTheDocument();
    // Should not show expand/collapse icon when no children
    expect(document.querySelector('[data-testid="ExpandMoreIcon"]')).not.toBeInTheDocument();
    expect(document.querySelector('[data-testid="ExpandLessIcon"]')).not.toBeInTheDocument();
  });

  it('renders with empty children array', () => {
    renderWithTheme(
      <List>
        <ExpandableNavItem label="Parent" children={[]} />
      </List>
    );
    expect(screen.getByText('Parent')).toBeInTheDocument();
    // Should not show expand/collapse icon when children array is empty
    expect(document.querySelector('[data-testid="ExpandMoreIcon"]')).not.toBeInTheDocument();
    expect(document.querySelector('[data-testid="ExpandLessIcon"]')).not.toBeInTheDocument();
  });
});
