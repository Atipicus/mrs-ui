/**
 * Stepper Component
 * @package @mrs/ui
 */

import React from 'react';
import MuiStepper from '@mui/material/Stepper';
import MuiStep from '@mui/material/Step';
import MuiStepLabel from '@mui/material/StepLabel';
import type { StepperProps, StepProps, StepLabelProps } from './Stepper.types';

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      children,
      activeStep = 0,
      orientation = 'horizontal',
      alternativeLabel = false,
      nonLinear = false,
      ...props
    },
    ref
  ) => {
    return (
      <MuiStepper
        ref={ref}
        activeStep={activeStep}
        orientation={orientation}
        alternativeLabel={alternativeLabel}
        nonLinear={nonLinear}
        {...props}
      >
        {children}
      </MuiStepper>
    );
  }
);

Stepper.displayName = 'Stepper';

export const Step = React.forwardRef<HTMLDivElement, StepProps>(
  ({ children, active, completed, disabled, ...props }, ref) => {
    return (
      <MuiStep ref={ref} active={active} completed={completed} disabled={disabled} {...props}>
        {children}
      </MuiStep>
    );
  }
);

Step.displayName = 'Step';

export const StepLabel = React.forwardRef<HTMLLabelElement, StepLabelProps>(
  ({ children, error, optional, icon, ...props }, ref) => {
    return (
      <MuiStepLabel ref={ref} error={error} optional={optional} icon={icon} {...props}>
        {children}
      </MuiStepLabel>
    );
  }
);

StepLabel.displayName = 'StepLabel';

export default Stepper;
