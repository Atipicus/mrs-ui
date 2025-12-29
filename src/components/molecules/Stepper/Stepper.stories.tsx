/**
 * Stepper Component Stories
 * @package @mrs/ui
 */

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Stepper, Step, StepLabel } from './Stepper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const meta: Meta<typeof Stepper> = {
  title: 'Molecules/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Steppers display progress through a sequence of logical and numbered steps.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export const Default: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mt: 2 }}>
          <Button disabled={activeStep === 0} onClick={() => setActiveStep((prev) => prev - 1)}>
            Back
          </Button>
          <Button disabled={activeStep === 2} onClick={() => setActiveStep((prev) => prev + 1)}>
            Next
          </Button>
        </Box>
      </Box>
    );
  },
};

export const AlternativeLabel: Story = {
  render: () => (
    <Stepper activeStep={1} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Stepper activeStep={1} orientation="vertical">
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  ),
};

export const WithOptionalLabel: Story = {
  render: () => (
    <Stepper activeStep={1}>
      <Step>
        <StepLabel>Step 1</StepLabel>
      </Step>
      <Step>
        <StepLabel optional={<Typography variant="caption">Optional</Typography>}>
          Step 2
        </StepLabel>
      </Step>
      <Step>
        <StepLabel>Step 3</StepLabel>
      </Step>
    </Stepper>
  ),
};
