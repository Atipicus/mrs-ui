/**
 * Stepper Component Tests
 * @package @mrs/ui
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import { Stepper, Step, StepLabel } from './Stepper';

describe('Stepper', () => {
  const steps = ['Step 1', 'Step 2', 'Step 3'];

  it('renders stepper with steps', () => {
    renderWithTheme(
      <Stepper activeStep={0}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    );

    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
  });

  it('renders horizontal orientation', () => {
    const { container } = renderWithTheme(
      <Stepper activeStep={0} orientation="horizontal">
        <Step>
          <StepLabel>Step 1</StepLabel>
        </Step>
      </Stepper>
    );

    expect(container.querySelector('.MuiStepper-horizontal')).toBeInTheDocument();
  });

  it('renders vertical orientation', () => {
    const { container } = renderWithTheme(
      <Stepper activeStep={0} orientation="vertical">
        <Step>
          <StepLabel>Step 1</StepLabel>
        </Step>
      </Stepper>
    );

    expect(container.querySelector('.MuiStepper-vertical')).toBeInTheDocument();
  });

  it('renders alternative label', () => {
    const { container } = renderWithTheme(
      <Stepper activeStep={0} alternativeLabel>
        <Step>
          <StepLabel>Step 1</StepLabel>
        </Step>
      </Stepper>
    );

    expect(container.querySelector('.MuiStepper-alternativeLabel')).toBeInTheDocument();
  });

  it('forwards ref to Stepper', () => {
    const ref = jest.fn();

    renderWithTheme(
      <Stepper ref={ref} activeStep={0}>
        <Step>
          <StepLabel>Step 1</StepLabel>
        </Step>
      </Stepper>
    );

    expect(ref).toHaveBeenCalled();
  });
});
