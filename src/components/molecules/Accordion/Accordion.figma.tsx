import figma from '@figma/code-connect';
import { Accordion } from './Accordion';

/**
 * Code Connect mapping for Accordion component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Accordion,
  'https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11125-153804',
  {
    props: {
      expanded: figma.boolean('expanded'),
      disabled: figma.boolean('disabled'),
      disableGutters: figma.boolean('disableGutters'),
      square: figma.boolean('square'),
    },
    example: (props) => (
      <Accordion
        expanded={props.expanded}
        disabled={props.disabled}
        disableGutters={props.disableGutters}
        square={props.square}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion Title</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Accordion content goes here.</Typography>
        </AccordionDetails>
      </Accordion>
    ),
  }
);
