/**
 * Stepper Component Types
 * @package @mrs/ui
 */

import type { StepperProps as MuiStepperProps } from '@mui/material/Stepper';
import type { StepProps as MuiStepProps } from '@mui/material/Step';
import type { StepLabelProps as MuiStepLabelProps } from '@mui/material/StepLabel';

export interface StepperProps extends MuiStepperProps {
  activeStep?: number;
  children?: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  alternativeLabel?: boolean;
  nonLinear?: boolean;
}

export interface StepProps extends MuiStepProps {
  children?: React.ReactNode;
  active?: boolean;
  completed?: boolean;
  disabled?: boolean;
}

export interface StepLabelProps extends MuiStepLabelProps {
  children?: React.ReactNode;
  error?: boolean;
  optional?: React.ReactNode;
  icon?: React.ReactNode;
}
