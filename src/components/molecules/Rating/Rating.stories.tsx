/**
 * Rating Component Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';

const meta: Meta<typeof Rating> = {
  title: 'Components/Molecules/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the rating component',
    },
    max: {
      control: 'number',
      description: 'The maximum rating value',
    },
    precision: {
      control: 'number',
      description: 'The precision of the rating (e.g., 0.5 for half stars)',
    },
    readOnly: {
      control: 'boolean',
      description: 'If true, the rating is read-only',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the rating is disabled',
    },
    highlightSelectedOnly: {
      control: 'boolean',
      description: 'If true, only the selected icon is highlighted',
    },
    value: {
      control: 'number',
      description: 'The rating value',
    },
    defaultValue: {
      control: 'number',
      description: 'The default rating value',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Ratings provide insight regarding others\' opinions and experiences with a product. Users can also rate products they\'ve purchased.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Rating>;

/**
 * Default Rating with 5 stars
 */
export const Default: Story = {
  args: {
    defaultValue: 2.5,
    precision: 0.5,
  },
};

/**
 * Rating Sizes
 */
export const Sizes: Story = {
  render: () => (
    <Stack spacing={2}>
      <Box>
        <Typography variant="caption" component="div" gutterBottom>
          Small
        </Typography>
        <Rating size="small" defaultValue={4} />
      </Box>
      <Box>
        <Typography variant="caption" component="div" gutterBottom>
          Medium (default)
        </Typography>
        <Rating size="medium" defaultValue={4} />
      </Box>
      <Box>
        <Typography variant="caption" component="div" gutterBottom>
          Large
        </Typography>
        <Rating size="large" defaultValue={4} />
      </Box>
    </Stack>
  ),
};

/**
 * Half Star Precision
 */
export const HalfStar: Story = {
  render: () => (
    <Stack spacing={2}>
      <Rating defaultValue={2.5} precision={0.5} />
      <Typography variant="caption">
        Precision: 0.5 (allows half-star ratings)
      </Typography>
    </Stack>
  ),
};

/**
 * Controlled Rating
 */
export const Controlled: Story = {
  render: function ControlledRating() {
    const [value, setValue] = useState<number | null>(3);

    return (
      <Stack spacing={2}>
        <Rating
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography variant="body2">
          Current value: {value !== null ? value : 'None'}
        </Typography>
      </Stack>
    );
  },
};

/**
 * Read-only Rating
 */
export const ReadOnly: Story = {
  args: {
    value: 3.5,
    readOnly: true,
    precision: 0.5,
  },
};

/**
 * Disabled Rating
 */
export const Disabled: Story = {
  args: {
    defaultValue: 2,
    disabled: true,
  },
};

/**
 * No Rating (Empty)
 */
export const NoRating: Story = {
  args: {
    value: null,
  },
};

/**
 * Custom Max Value
 */
export const CustomMax: Story = {
  render: () => (
    <Stack spacing={2}>
      <Box>
        <Typography variant="caption" component="div" gutterBottom>
          3 Stars Max
        </Typography>
        <Rating defaultValue={2} max={3} />
      </Box>
      <Box>
        <Typography variant="caption" component="div" gutterBottom>
          10 Stars Max
        </Typography>
        <Rating defaultValue={7} max={10} />
      </Box>
    </Stack>
  ),
};

/**
 * Highlight Selected Only
 */
export const HighlightSelectedOnly: Story = {
  args: {
    defaultValue: 3,
    highlightSelectedOnly: true,
  },
};

/**
 * Custom Icon (Hearts)
 */
export const CustomIconHearts: Story = {
  args: {
    defaultValue: 2,
    icon: <FavoriteIcon fontSize="inherit" />,
    emptyIcon: <FavoriteBorderIcon fontSize="inherit" />,
  },
};

/**
 * With Hover Feedback
 */
export const WithHoverFeedback: Story = {
  render: function HoverRating() {
    const [value, setValue] = useState<number | null>(2);
    const [hover, setHover] = useState(-1);

    const labels: { [index: string]: string } = {
      0.5: 'Useless',
      1: 'Useless+',
      1.5: 'Poor',
      2: 'Poor+',
      2.5: 'Ok',
      3: 'Ok+',
      3.5: 'Good',
      4: 'Good+',
      4.5: 'Excellent',
      5: 'Excellent+',
    };

    function getLabelText(value: number) {
      return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    return (
      <Stack spacing={2}>
        <Rating
          value={value}
          precision={0.5}
          onChange={(_event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(_event, newHover) => {
            setHover(newHover);
          }}
          getLabelText={getLabelText}
        />
        {value !== null && (
          <Typography variant="body2">
            {labels[hover !== -1 ? hover : value]}
          </Typography>
        )}
      </Stack>
    );
  },
};

/**
 * Radio Group Behavior
 */
export const RadioGroup: Story = {
  render: () => (
    <Stack spacing={2}>
      <Typography variant="body2">
        Rating with radio group behavior (can deselect by clicking the same
        value)
      </Typography>
      <Rating name="radio-group-rating" defaultValue={3} />
    </Stack>
  ),
};

/**
 * Display Only (Reviews)
 */
export const DisplayOnly: Story = {
  render: () => (
    <Stack spacing={2} direction="row" alignItems="center">
      <Rating value={4.5} precision={0.5} readOnly />
      <Typography variant="body2" color="text.secondary">
        4.5 out of 5 (234 reviews)
      </Typography>
    </Stack>
  ),
};
