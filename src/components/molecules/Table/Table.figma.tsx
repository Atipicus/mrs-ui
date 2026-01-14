import figma from '@figma/code-connect';
import { Table } from './Table';

/**
 * Code Connect mapping for Table component
 * Figma File: MRS - Material UI
 * Repository: https://github.com/mgomez-ext/mrs-ui/
 */
figma.connect(
  Table,
  'https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=11102-138329',
  {
    props: {
      size: figma.enum('size', {
        Small: 'small',
        Medium: 'medium',
      }),
      padding: figma.enum('padding', {
        Normal: 'normal',
        Checkbox: 'checkbox',
        None: 'none',
      }),
      stickyHeader: figma.boolean('stickyHeader'),
    },
    example: (props) => (
      <Table size={props.size} padding={props.padding} stickyHeader={props.stickyHeader}>
        <TableHead>
          <TableRow>
            <TableCell>Column 1</TableCell>
            <TableCell>Column 2</TableCell>
            <TableCell>Column 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Data 1</TableCell>
            <TableCell>Data 2</TableCell>
            <TableCell>Data 3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
  }
);
