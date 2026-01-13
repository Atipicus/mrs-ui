/**
 * DateTimePicker Component
 *
 * Implements the MRS DateTimePicker using MUI X Date Pickers with design tokens.
 * Combines date and time selection in a single component.
 *
 * @see https://mui.com/x/react-date-pickers/date-time-picker/
 */

import React from 'react';
import { DateTimePicker as MuiDateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import type { DateTimePickerProps } from './DateTimePicker.types';

/**
 * DateTimePicker component for selecting both date and time
 * Wraps MUI X DateTimePicker with MRS design tokens and theme integration
 */
export const DateTimePicker = React.forwardRef<HTMLDivElement, DateTimePickerProps>(
  (props, ref) => {
    const { slotProps, ...rest } = props;

    return (
      <MuiDateTimePicker
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

DateTimePicker.displayName = 'DateTimePicker';

export default DateTimePicker;
