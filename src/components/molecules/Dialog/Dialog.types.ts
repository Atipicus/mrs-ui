/**
 * Dialog component prop types
 * Extends Material-UI Dialog component
 */

import type { DialogProps as MuiDialogProps } from '@mui/material/Dialog';

/**
 * Props for the Dialog component
 *
 * @example
 * ```tsx
 * <Dialog open={open} onClose={handleClose}>
 *   <DialogTitle>Delete Item?</DialogTitle>
 *   <DialogContent>
 *     <DialogContentText>
 *       This action cannot be undone.
 *     </DialogContentText>
 *   </DialogContent>
 *   <DialogActions>
 *     <Button onClick={handleClose}>Cancel</Button>
 *     <Button onClick={handleDelete} color="error">Delete</Button>
 *   </DialogActions>
 * </Dialog>
 * ```
 */
export interface DialogProps extends MuiDialogProps {
  /**
   * If true, the dialog is open
   */
  open: boolean;

  /**
   * Callback fired when the dialog requests to be closed
   */
  onClose?: (event: object, reason: 'backdropClick' | 'escapeKeyDown') => void;

  /**
   * The maximum width of the dialog
   * @default 'sm'
   */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;

  /**
   * If true, the dialog stretches to maxWidth
   * @default false
   */
  fullWidth?: boolean;

  /**
   * If true, the dialog is full-screen
   * @default false
   */
  fullScreen?: boolean;

  /**
   * Determine the container for scrolling the dialog
   * @default 'paper'
   */
  scroll?: 'body' | 'paper';

  /**
   * If true, clicking the backdrop will not close the dialog
   * @default false
   */
  disableEscapeKeyDown?: boolean;

  /**
   * Dialog content
   */
  children?: React.ReactNode;

  /**
   * The id(s) of the element(s) that describe the dialog
   */
  'aria-describedby'?: string;

  /**
   * The id(s) of the element(s) that label the dialog
   */
  'aria-labelledby'?: string;
}
