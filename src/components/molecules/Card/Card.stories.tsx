/**
 * Card component stories
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '@mui/material';
import { Card } from './Card';
import { CardActionArea } from './CardActionArea';
import { CardActions } from './CardActions';
import { CardContent } from './CardContent';
import { CardHeader } from './CardHeader';
import { CardMedia } from './CardMedia';
import { Button } from '../../atoms/Button';
import { Typography } from '../../atoms/Typography';
import { Avatar } from '../../atoms/Avatar';
import { IconButton } from '../../atoms/IconButton';
import { MaterialSymbol } from '../../atoms/MaterialSymbol';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevation', 'outlined'],
    },
    elevation: {
      control: { type: 'range', min: 0, max: 24, step: 1 },
    },
    square: {
      control: 'boolean',
    },
    raised: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'elevation',
    elevation: 1,
    square: false,
    raised: false,
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

/**
 * Interactive playground for Card component
 */
export const Playground: Story = {
  render: (args) => (
    <Card {...args} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  ),
};

/**
 * Card with different elevation levels
 * According to Figma specs, default elevation is 1
 */
export const Elevations: Story = {
  render: () => (
    <Stack spacing={3}>
      {[0, 1, 2, 4, 8, 12, 16, 24].map((elevation) => (
        <Card key={elevation} elevation={elevation} sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="h6">Elevation {elevation}</Typography>
            <Typography variant="body2" color="text.secondary">
              Card with elevation level {elevation}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  ),
};

/**
 * Card variants: elevation vs outlined
 */
export const Variants: Story = {
  args: {
    elevation: 22,
  },

  render: () => (
    <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
      <Card variant="elevation" elevation={1} sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h6">Elevation Variant</Typography>
          <Typography variant="body2" color="text.secondary">
            Card with elevation (default variant)
          </Typography>
        </CardContent>
      </Card>

      <Card variant="outlined" sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h6">Outlined Variant</Typography>
          <Typography variant="body2" color="text.secondary">
            Card with border, no shadow
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  ),
};

/**
 * Card with header, content, and actions
 */
export const CompleteCard: Story = {
  render: () => (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'primary.main' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MaterialSymbol icon="more_vert" />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2023"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://mui.com/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <MaterialSymbol icon="favorite" />
        </IconButton>
        <IconButton aria-label="share">
          <MaterialSymbol icon="share" />
        </IconButton>
      </CardActions>
    </Card>
  ),
};

/**
 * Card with CardActionArea for clickable cards
 */
export const ActionAreaCard: Story = {
  render: () => (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  ),
};

/**
 * Simple card with just content
 */
export const SimpleCard: Story = {
  render: () => (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          be·nev·o·lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          "a benevolent smile"
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  ),
};

/**
 * Media card with image
 */
export const MediaCard: Story = {
  render: () => (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  ),
};

/**
 * Card with video media
 */
export const VideoCard: Story = {
  render: () => (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="video"
        height="200"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        title="Sample video"
        controls
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Video Content
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cards can contain video media elements using the CardMedia component.
        </Typography>
      </CardContent>
    </Card>
  ),
};

/**
 * Responsive cards based on Figma specs
 * Default width: 600px, Small screen: 444px
 */
export const ResponsiveWidths: Story = {
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Default Width (600px)
        </Typography>
        <Card sx={{ width: 600 }}>
          <CardContent>
            <Typography variant="body1">
              According to Figma specs, cards have a width of 600px on regular screens.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Small Screen Width (444px)
        </Typography>
        <Card sx={{ width: 444 }}>
          <CardContent>
            <Typography variant="body1">
              On small screens (Small Screen=True), cards have a width of 444px.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Responsive Width (breakpoint-based)
        </Typography>
        <Card sx={{ width: { xs: 444, sm: 600 } }}>
          <CardContent>
            <Typography variant="body1">
              This card uses responsive widths: 444px on xs, 600px on sm and up.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Stack>
  ),
};

/**
 * Card with square corners (square=true)
 */
export const SquareCard: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Card sx={{ maxWidth: 345 }} square={false}>
        <CardContent>
          <Typography variant="h6">Rounded (Default)</Typography>
          <Typography variant="body2" color="text.secondary">
            Uses theme.shape.borderRadius
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 345 }} square={true}>
        <CardContent>
          <Typography variant="h6">Square Corners</Typography>
          <Typography variant="body2" color="text.secondary">
            square=true removes border radius
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  ),
};

/**
 * Raised card with higher elevation
 */
export const RaisedCard: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Card sx={{ maxWidth: 345 }} raised={false}>
        <CardContent>
          <Typography variant="h6">Normal Card</Typography>
          <Typography variant="body2" color="text.secondary">
            Elevation 1 (default)
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 345 }} raised={true}>
        <CardContent>
          <Typography variant="h6">Raised Card</Typography>
          <Typography variant="body2" color="text.secondary">
            Elevation 8 (raised=true)
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  ),
};

/**
 * Card with custom content layout
 */
export const CustomLayout: Story = {
  render: () => (
    <Card sx={{ display: 'flex', maxWidth: 600 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://mui.com/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            <MaterialSymbol icon="skip_previous" />
          </IconButton>
          <IconButton aria-label="play/pause">
            <MaterialSymbol icon="play_circle" size={38} />
          </IconButton>
          <IconButton aria-label="next">
            <MaterialSymbol icon="skip_next" />
          </IconButton>
        </Box>
      </Box>
    </Card>
  ),
};
