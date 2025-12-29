/**
 * ExpandableNavItem Component Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { ExpandableNavItem } from './ExpandableNavItem';
import List from '@mui/material/List';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import React from 'react';

const meta: Meta<typeof ExpandableNavItem> = {
  title: 'Molecules/ExpandableNavItem',
  component: ExpandableNavItem,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <Story />
      </List>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ExpandableNavItem>;

/**
 * Default expandable navigation item with icon
 */
export const Default: Story = {
  render: () => (
    <ExpandableNavItem
      label="Inbox"
      icon={<InboxIcon />}
      isOpen={false}
      children={[
        { label: 'All Mail', icon: <DraftsIcon /> },
        { label: 'Sent', icon: <SendIcon /> },
        { label: 'Drafts', icon: <DraftsIcon /> },
      ]}
    />
  ),
};

/**
 * Expanded state
 */
export const Expanded: Story = {
  render: () => (
    <ExpandableNavItem
      label="Inbox"
      icon={<InboxIcon />}
      isOpen={true}
      children={[
        { label: 'All Mail', icon: <DraftsIcon /> },
        { label: 'Sent', icon: <SendIcon /> },
        { label: 'Drafts', icon: <DraftsIcon /> },
      ]}
    />
  ),
};

/**
 * Without icon
 */
export const WithoutIcon: Story = {
  render: () => (
    <ExpandableNavItem
      label="Categories"
      isOpen={false}
      children={[{ label: 'Technology' }, { label: 'Design' }, { label: 'Business' }]}
    />
  ),
};

/**
 * Selected parent item
 */
export const SelectedParent: Story = {
  render: () => (
    <ExpandableNavItem
      label="Inbox"
      icon={<InboxIcon />}
      isOpen={true}
      selected={true}
      children={[
        { label: 'All Mail', icon: <DraftsIcon /> },
        { label: 'Sent', icon: <SendIcon /> },
      ]}
    />
  ),
};

/**
 * Selected child item
 */
export const SelectedChild: Story = {
  render: () => (
    <ExpandableNavItem
      label="Inbox"
      icon={<InboxIcon />}
      isOpen={true}
      children={[
        { label: 'All Mail', icon: <DraftsIcon /> },
        { label: 'Sent', icon: <SendIcon />, selected: true },
        { label: 'Drafts', icon: <DraftsIcon /> },
      ]}
    />
  ),
};

/**
 * With click handlers
 */
export const WithClickHandlers: Story = {
  render: () => (
    <ExpandableNavItem
      label="Inbox"
      icon={<InboxIcon />}
      isOpen={false}
      onClick={() => alert('Parent clicked')}
      children={[
        { label: 'All Mail', icon: <DraftsIcon />, onClick: () => alert('All Mail clicked') },
        { label: 'Sent', icon: <SendIcon />, onClick: () => alert('Sent clicked') },
        { label: 'Drafts', icon: <DraftsIcon />, onClick: () => alert('Drafts clicked') },
      ]}
    />
  ),
};

/**
 * Interactive example with state management
 */
export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [selectedChild, setSelectedChild] = React.useState<number | null>(null);

    return (
      <ExpandableNavItem
        label="Products"
        icon={<InboxIcon />}
        isOpen={open}
        onToggle={() => setOpen(!open)}
        children={[
          {
            label: 'All Products',
            icon: <StarBorderIcon />,
            selected: selectedChild === 0,
            onClick: () => setSelectedChild(0),
          },
          {
            label: 'Categories',
            selected: selectedChild === 1,
            onClick: () => setSelectedChild(1),
          },
          {
            label: 'Tags',
            selected: selectedChild === 2,
            onClick: () => setSelectedChild(2),
          },
        ]}
      />
    );
  },
};

/**
 * Multiple expandable items
 */
export const MultipleItems: Story = {
  render: () => {
    const [openItems, setOpenItems] = React.useState<Record<string, boolean>>({
      inbox: false,
      starred: false,
    });

    const toggleItem = (key: string) => {
      setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
      <>
        <ExpandableNavItem
          label="Inbox"
          icon={<InboxIcon />}
          isOpen={openItems.inbox}
          onToggle={() => toggleItem('inbox')}
          children={[
            { label: 'All Mail', icon: <DraftsIcon /> },
            { label: 'Sent', icon: <SendIcon /> },
          ]}
        />
        <ExpandableNavItem
          label="Starred"
          icon={<StarBorderIcon />}
          isOpen={openItems.starred}
          onToggle={() => toggleItem('starred')}
          children={[{ label: 'Important' }, { label: 'Favorites' }]}
        />
      </>
    );
  },
  decorators: [
    (Story) => (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <Story />
      </List>
    ),
  ],
};

/**
 * Deep nesting (parent with many children)
 */
export const DeepNesting: Story = {
  render: () => (
    <ExpandableNavItem
      label="Documentation"
      icon={<InboxIcon />}
      isOpen={true}
      children={[
        { label: 'Getting Started' },
        { label: 'Components' },
        { label: 'API Reference' },
        { label: 'Guides' },
        { label: 'Examples' },
        { label: 'FAQ' },
        { label: 'Changelog' },
        { label: 'Contributing' },
      ]}
    />
  ),
};

/**
 * Long label text
 */
export const LongLabels: Story = {
  render: () => (
    <ExpandableNavItem
      label="Very Long Parent Label That Might Wrap"
      icon={<InboxIcon />}
      isOpen={true}
      children={[
        { label: 'This is a very long child item label that might wrap to multiple lines' },
        { label: 'Another long label for testing purposes' },
        { label: 'Short label' },
      ]}
    />
  ),
};
