/**
 * Accordion component stories
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mui/material';
import { Accordion } from './Accordion';
import { AccordionSummary } from './AccordionSummary';
import { AccordionDetails } from './AccordionDetails';
import { AccordionActions } from './AccordionActions';
import { Typography } from '../../atoms/Typography';
import { Button } from '../../atoms/Button';
import { MaterialSymbol } from '../../atoms/MaterialSymbol';

const meta: Meta<typeof Accordion> = {
  title: 'Molecules/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    defaultExpanded: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    disableGutters: {
      control: 'boolean',
    },
    expanded: {
      control: 'boolean',
    },
    square: {
      control: 'boolean',
    },
  },
  args: {
    defaultExpanded: false,
    disabled: false,
    disableGutters: false,
    square: false,
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

/**
 * Interactive playground for Accordion component
 */
export const Playground: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
        <Typography>Accordion Title</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  ),
};

/**
 * Basic accordion group
 */
export const BasicAccordion: Story = {
  render: () => (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
            ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
            ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
            ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  ),
};

/**
 * Controlled accordion with state management
 */
export const ControlledAccordion: Story = {
  render: () => {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
      <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
            <Typography sx={{ width: '33%', flexShrink: 0 }}>General settings</Typography>
            <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              You are currently not an owner
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
              diam eros in elit. Pellentesque convallis laoreet laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Advanced settings</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Filtering has been entirely disabled for whole web server
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
              eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  },
};

/**
 * Accordion with default expanded state
 */
export const DefaultExpanded: Story = {
  render: () => (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>Expanded by Default</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This accordion is expanded by default using the defaultExpanded prop.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>Collapsed by Default</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This accordion is collapsed by default.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  ),
};

/**
 * Disabled accordion
 */
export const DisabledAccordion: Story = {
  render: () => (
    <div>
      <Accordion disabled>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This content cannot be accessed because the accordion is disabled.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>Enabled Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This accordion is enabled and can be interacted with.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  ),
};

/**
 * Accordion with actions
 */
export const WithActions: Story = {
  render: () => (
    <Accordion>
      <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
        <Typography>Accordion with Actions</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          This accordion includes action buttons at the bottom using AccordionActions component.
        </Typography>
      </AccordionDetails>
      <AccordionActions>
        <Button size="small">Cancel</Button>
        <Button size="small" variant="contained">
          Save
        </Button>
      </AccordionActions>
    </Accordion>
  ),
};

/**
 * Accordion without gutters
 */
export const NoGutters: Story = {
  render: () => (
    <Stack spacing={0}>
      <Accordion disableGutters>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>No Gutters - Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The disableGutters prop removes the margin between accordions, creating a seamless list.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>No Gutters - Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Notice there's no gap between this and the previous accordion.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>No Gutters - Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This creates a more compact, list-like appearance.</Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  ),
};

/**
 * Square corners (no border radius)
 */
export const SquareCorners: Story = {
  render: () => (
    <div>
      <Accordion square>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>Square Corners</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The square prop removes the border radius for sharp corners instead of rounded.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
          <Typography>Rounded Corners (Default)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This accordion has the default rounded corners.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  ),
};

/**
 * Custom expand icons
 */
export const CustomExpandIcons: Story = {
  render: () => (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<MaterialSymbol icon="arrow_drop_down" />}>
          <Typography>Arrow Drop Down Icon</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Using arrow_drop_down icon for expand indicator.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<MaterialSymbol icon="add" />}>
          <Typography>Plus/Minus Icon</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Using add icon (becomes remove when expanded).</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<MaterialSymbol icon="keyboard_arrow_down" />}>
          <Typography>Keyboard Arrow Down</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Using keyboard_arrow_down icon for a different style.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  ),
};

/**
 * Accordion without expand icon
 */
export const NoExpandIcon: Story = {
  render: () => (
    <Accordion>
      <AccordionSummary>
        <Typography>No Expand Icon</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          This accordion has no expand icon. It can still be expanded by clicking the summary area.
        </Typography>
      </AccordionDetails>
    </Accordion>
  ),
};

/**
 * Complex accordion with rich content
 */
export const ComplexContent: Story = {
  render: () => (
    <Accordion>
      <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
        <Typography variant="h6">FAQ: Getting Started</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={2}>
          <Typography variant="subtitle1" fontWeight="medium">
            How do I create an account?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            To create an account, click the "Sign Up" button in the top right corner and follow the
            registration process.
          </Typography>

          <Typography variant="subtitle1" fontWeight="medium">
            What payment methods do you accept?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We accept all major credit cards, PayPal, and bank transfers for enterprise customers.
          </Typography>

          <Typography variant="subtitle1" fontWeight="medium">
            Can I cancel my subscription?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Yes, you can cancel your subscription at any time from your account settings. You'll
            retain access until the end of your billing period.
          </Typography>
        </Stack>
      </AccordionDetails>
      <AccordionActions>
        <Button size="small">More FAQs</Button>
        <Button size="small" variant="contained">
          Contact Support
        </Button>
      </AccordionActions>
    </Accordion>
  ),
};

/**
 * Nested accordions
 */
export const NestedAccordions: Story = {
  render: () => (
    <Accordion>
      <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
        <Typography>Parent Accordion</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={1}>
          <Typography>This accordion contains nested accordions:</Typography>

          <Accordion>
            <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
              <Typography>Child Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Content of the first child accordion.</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<MaterialSymbol icon="expand_more" />}>
              <Typography>Child Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Content of the second child accordion.</Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </AccordionDetails>
    </Accordion>
  ),
};
