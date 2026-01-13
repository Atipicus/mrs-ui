import figma from '@figma/code-connect';
import { Stepper } from './Stepper';

/**
 * Code Connect mapping for Stepper component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Stepper,
  'https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11137-156041',
  {
    props: {
      orientation: figma.enum('orientation', {
        Horizontal: 'horizontal',
        Vertical: 'vertical',
      }),
      alternativeLabel: figma.boolean('alternativeLabel'),
      nonLinear: figma.boolean('nonLinear'),
    },
    example: (props) => (
      <Stepper
        activeStep={1}
        orientation={props.orientation}
        alternativeLabel={props.alternativeLabel}
        nonLinear={props.nonLinear}
      >
        <Step>
          <StepLabel>Step 1</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 2</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 3</StepLabel>
        </Step>
      </Stepper>
    ),
  }
);
