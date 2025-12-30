/**
 * TimePicker Component
 *
 * Implements the MRS TimePicker using MUI X Date Pickers with design tokens.
 * Supports both 12-hour and 24-hour time formats with proper theme integration.
 *
 * @see https://mui.com/x/react-date-pickers/time-picker/
 */

import React from 'react';
import { TimePicker as MuiTimePicker } from '@mui/x-date-pickers/TimePicker';
import type { TimePickerProps } from './TimePicker.types';

/**
 * TimePicker component for selecting time
 * Wraps MUI X TimePicker with MRS design tokens and theme integration
 */
export const TimePicker = React.forwardRef<HTMLDivElement, TimePickerProps>(
  (props, ref) => {
    const {
      slotProps,
      ...rest
    } = props;

    return (
      <MuiTimePicker
        ref={ref}
        slotProps={{
          textField: {
            fullWidth: true,
            ...slotProps?.textField,
          },
          ...slotProps,
        }}
        {...rest}
      />
    );
  }
);

TimePicker.displayName = 'TimePicker';

export default TimePicker;
