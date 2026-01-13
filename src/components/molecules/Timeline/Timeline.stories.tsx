/**
 * Timeline Component Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from './Timeline';
import { MaterialSymbol } from '../../atoms/MaterialSymbol/MaterialSymbol';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const meta: Meta<typeof Timeline> = {
  title: 'Components/Molecules/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right', 'alternate', 'alternate-reverse'],
      description: 'Position of the timeline content',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The Timeline component displays a list of events in chronological order. It can be positioned left, right, or alternating, and supports custom icons and content.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

/**
 * Default Timeline (left position)
 */
export const Default: Story = {
  args: {
    position: 'left',
  },

  render: () => (
    <Timeline position="left">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Eat
          </Typography>
          <Typography>Because you need strength</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Code
          </Typography>
          <Typography>Because it's awesome!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Sleep
          </Typography>
          <Typography>Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
};

/**
 * Right-aligned timeline
 */
export const RightAligned: Story = {
  render: () => (
    <Timeline position="right">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Morning Meeting
          </Typography>
          <Typography>Team standup and planning</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Development
          </Typography>
          <Typography>Feature implementation</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Code Review
          </Typography>
          <Typography>Review pull requests</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
};

/**
 * Alternating timeline
 */
export const Alternating: Story = {
  render: () => (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Project Started
          </Typography>
          <Typography>Initial planning and setup</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Design Phase
          </Typography>
          <Typography>UI/UX design and prototyping</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Development
          </Typography>
          <Typography>Feature implementation</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="warning" />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Launch
          </Typography>
          <Typography>Product deployment</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
};

/**
 * Timeline with opposite content (times)
 */
export const WithOppositeContent: Story = {
  render: () => (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">9:00 AM</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Breakfast
          </Typography>
          <Typography>Start the day right</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">10:00 AM</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Morning Meeting
          </Typography>
          <Typography>Team standup</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">12:00 PM</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Lunch
          </Typography>
          <Typography>Break time</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">5:00 PM</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            End of Day
          </Typography>
          <Typography>Wrap up and plan tomorrow</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
};

/**
 * Filled dots (default)
 */
export const FilledDots: Story = {
  render: () => (
    <Timeline position="left">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="filled" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Primary filled dot</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="filled" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Secondary filled dot</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="filled" color="success" />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Success filled dot</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
};

/**
 * Outlined dots
 */
export const OutlinedDots: Story = {
  render: () => (
    <Timeline position="left">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Primary outlined dot</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Secondary outlined dot</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="success" />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Success outlined dot</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
};

/**
 * Colored dots (all color variants)
 */
export const ColoredDots: Story = {
  render: () => (
    <Timeline position="left">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Primary color</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Secondary color</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="error" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Error color</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="warning" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Warning color</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="info" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Info color</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>Success color</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
};

/**
 * Custom icons in dots
 */
export const CustomIcons: Story = {
  render: () => (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <MaterialSymbol icon="rocket_launch" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Launch
          </Typography>
          <Typography>Project kickoff</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <MaterialSymbol icon="design_services" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Design
          </Typography>
          <Typography>UI/UX creation</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success">
            <MaterialSymbol icon="code" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Development
          </Typography>
          <Typography>Build features</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="warning">
            <MaterialSymbol icon="verified" />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Release
          </Typography>
          <Typography>Go live</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
};

/**
 * Process timeline workflow
 */
export const ProcessTimeline: Story = {
  render: () => (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">Step 1</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <MaterialSymbol icon="person_add" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Sign Up
          </Typography>
          <Typography>Create your account</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">Step 2</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <MaterialSymbol icon="mail" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Email Verification
          </Typography>
          <Typography>Verify your email address</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">Step 3</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <MaterialSymbol icon="settings" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Setup Profile
          </Typography>
          <Typography>Customize your profile</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">Step 4</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="success">
            <MaterialSymbol icon="check_circle" />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Complete
          </Typography>
          <Typography>You're all set!</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
};

/**
 * Order tracking timeline
 */
export const OrderTracking: Story = {
  args: {
    position: 'left',
  },

  render: () => (
    <Box sx={{ maxWidth: 600 }}>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Jan 15, 2024 10:30 AM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success">
              <MaterialSymbol icon="shopping_cart" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              Order Placed
            </Typography>
            <Typography>Your order has been confirmed</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Jan 15, 2024 2:00 PM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success">
              <MaterialSymbol icon="inventory_2" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              Processing
            </Typography>
            <Typography>Order is being prepared</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Jan 16, 2024 9:00 AM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <MaterialSymbol icon="local_shipping" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              Shipped
            </Typography>
            <Typography>Order is on the way</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            Expected: Jan 18, 2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="grey" variant="outlined">
              <MaterialSymbol icon="home" />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span" color="text.secondary">
              Delivery
            </Typography>
            <Typography color="text.secondary">Pending delivery</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  ),
};

/**
 * Interactive timeline with status
 */
export const InteractiveTimeline: Story = {
  render: () => (
    <Box sx={{ maxWidth: 600 }}>
      <Timeline position="left">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success">
              <MaterialSymbol icon="check" />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'success.main' }} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span" color="success.main">
              Completed
            </Typography>
            <Typography>Task 1 finished successfully</Typography>
            <Typography variant="caption" color="text.secondary">
              2 hours ago
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <MaterialSymbol icon="pending" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span" color="primary.main">
              In Progress
            </Typography>
            <Typography>Task 2 currently running</Typography>
            <Typography variant="caption" color="text.secondary">
              Started 30 minutes ago
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="grey" variant="outlined">
              <MaterialSymbol icon="schedule" />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span" color="text.secondary">
              Pending
            </Typography>
            <Typography color="text.secondary">Task 3 waiting to start</Typography>
            <Typography variant="caption" color="text.secondary">
              Not started
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  ),
};

/**
 * Minimal timeline
 */
export const Minimal: Story = {
  render: () => (
    <Timeline position="left">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>First item</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Second item</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Third item</TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
};
