import figma from '@figma/code-connect';
import { LinearProgress } from './LinearProgress';

/**
 * Code Connect mapping for LinearProgress component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  LinearProgress,
  'https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11112-140875',
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
        Buffer: 'buffer',
        Query: 'query',
      }),
    },
    example: (props) => <LinearProgress color={props.color} variant={props.variant} />,
  }
);
