import figma from '@figma/code-connect';
import { Avatar } from './Avatar';

/**
 * Code Connect mapping for Avatar component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Avatar,
  'https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11102-137411',
  {
    props: {
      variant: figma.enum('variant', {
        Circular: 'circular',
        Rounded: 'rounded',
        Square: 'square',
      }),
      size: figma.enum('size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large',
      }),
      src: figma.string('src'),
      alt: figma.string('alt'),
      children: figma.string('children'),
    },
    example: (props) => (
      <Avatar variant={props.variant} src={props.src} alt={props.alt}>
        {props.children}
      </Avatar>
    ),
  }
);
