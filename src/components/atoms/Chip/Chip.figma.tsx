import figma from '@figma/code-connect';
import { Chip } from './Chip';

/**
 * Code Connect mapping for Chip component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Chip,
  'https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11102-137505',
  {
    props: {
      variant: figma.enum('variant', {
        Filled: 'filled',
        Outlined: 'outlined',
      }),
      color: figma.enum('color', {
        Default: 'default',
        Primary: 'primary',
        Secondary: 'secondary',
        Error: 'error',
        Warning: 'warning',
        Info: 'info',
        Success: 'success',
      }),
      size: figma.enum('size', {
        Small: 'small',
        Medium: 'medium',
      }),
      disabled: figma.boolean('disabled'),
      clickable: figma.boolean('clickable'),
      onDelete: figma.boolean('deletable'),
      label: figma.string('label'),
    },
    example: (props) => (
      <Chip
        variant={props.variant}
        color={props.color}
        size={props.size}
        disabled={props.disabled}
        clickable={props.clickable}
        onDelete={props.onDelete ? () => {} : undefined}
        label={props.label}
      />
    ),
  }
);
