import figma from '@figma/code-connect';
import { CircularProgress } from './CircularProgress';

/**
 * Code Connect mapping for CircularProgress component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  CircularProgress,
  'https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11112-140887',
  {
    props: {
      color: figma.enum('color', {
        Primary: 'primary',
        Secondary: 'secondary',
        Error: 'error',
        Warning: 'warning',
        Info: 'info',
        Success: 'success',
        Inherit: 'inherit',
      }),
      variant: figma.enum('variant', {
        Indeterminate: 'indeterminate',
        Determinate: 'determinate',
      }),
      size: figma.enum('size', {
        Small: 24,
        Medium: 40,
        Large: 56,
      }),
      thickness: figma.enum('thickness', {
        Thin: 2,
        Normal: 3.6,
        Thick: 5,
      }),
    },
    example: (props) => (
      <CircularProgress
        color={props.color}
        variant={props.variant}
        size={props.size}
        thickness={props.thickness}
      />
    ),
  }
);
