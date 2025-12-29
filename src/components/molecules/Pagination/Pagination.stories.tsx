/**
 * Pagination Component Stories
 * @package @mrs/ui
 */

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Pagination } from './Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const meta: Meta<typeof Pagination> = {
  title: 'Molecules/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Pagination enables the user to select a specific page from a range of pages.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: 'number',
      description: 'The total number of pages',
    },
    page: {
      control: 'number',
      description: 'The current page',
    },
    variant: {
      control: 'select',
      options: ['text', 'outlined'],
      description: 'The variant to use',
    },
    shape: {
      control: 'select',
      options: ['circular', 'rounded'],
      description: 'The shape of the pagination items',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the component',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'standard'],
      description: 'The color of the component',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

/**
 * Default Pagination
 */
export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1);

    return (
      <Stack spacing={2} alignItems="center">
        <Pagination
          count={10}
          page={page}
          onChange={(e, value) => setPage(value)}
        />
        <Typography>Current Page: {page}</Typography>
      </Stack>
    );
  },
};

/**
 * Outlined variant
 */
export const Outlined: Story = {
  render: () => {
    const [page, setPage] = useState(1);

    return (
      <Pagination
        count={10}
        page={page}
        variant="outlined"
        onChange={(e, value) => setPage(value)}
      />
    );
  },
};

/**
 * Rounded shape
 */
export const Rounded: Story = {
  render: () => {
    const [page, setPage] = useState(1);

    return (
      <Pagination
        count={10}
        page={page}
        shape="rounded"
        onChange={(e, value) => setPage(value)}
      />
    );
  },
};

/**
 * Different sizes
 */
export const Sizes: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} size="small" />
      <Pagination count={10} size="medium" />
      <Pagination count={10} size="large" />
    </Stack>
  ),
};

/**
 * Different colors
 */
export const Colors: Story = {
  render: () => (
    <Stack spacing={2}>
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} color="standard" />
    </Stack>
  ),
};

/**
 * With first and last buttons
 */
export const WithFirstLast: Story = {
  render: () => {
    const [page, setPage] = useState(1);

    return (
      <Pagination
        count={10}
        page={page}
        onChange={(e, value) => setPage(value)}
        showFirstButton
        showLastButton
      />
    );
  },
};

/**
 * Without prev/next buttons
 */
export const WithoutPrevNext: Story = {
  render: () => (
    <Pagination count={10} hidePrevButton hideNextButton />
  ),
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  render: () => <Pagination count={10} disabled />,
};

/**
 * Custom boundary and sibling counts
 */
export const CustomCounts: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="subtitle2">Boundary: 2, Sibling: 1</Typography>
      <Pagination count={15} boundaryCount={2} siblingCount={1} />

      <Typography variant="subtitle2">Boundary: 1, Sibling: 2</Typography>
      <Pagination count={15} boundaryCount={1} siblingCount={2} />

      <Typography variant="subtitle2">Boundary: 0, Sibling: 0</Typography>
      <Pagination count={15} boundaryCount={0} siblingCount={0} />
    </Stack>
  ),
};

/**
 * Large dataset
 */
export const LargeDataset: Story = {
  render: () => {
    const [page, setPage] = useState(1);

    return (
      <Stack spacing={2} alignItems="center">
        <Pagination
          count={100}
          page={page}
          onChange={(e, value) => setPage(value)}
          showFirstButton
          showLastButton
        />
        <Typography>Page {page} of 100</Typography>
      </Stack>
    );
  },
};

/**
 * Combined with table data
 */
export const WithTableData: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;
    const totalItems = 47;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startItem = (page - 1) * itemsPerPage + 1;
    const endItem = Math.min(page * itemsPerPage, totalItems);

    return (
      <Stack spacing={2} alignItems="center">
        <Typography>
          Showing {startItem}-{endItem} of {totalItems} items
        </Typography>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
        />
      </Stack>
    );
  },
};
