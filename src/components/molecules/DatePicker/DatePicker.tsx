/**
 * DatePicker Component
 *
 * Implements the MRS DatePicker using MUI X Date Pickers with design tokens.
 * Supports desktop and mobile variants with proper theme integration.
 *
 * @figma https://www.figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=6569-39392
 * @see https://mui.com/x/react-date-pickers/date-picker/
 */

import React from 'react';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import type { DatePickerProps } from './DatePicker.types';

/**
 * DatePicker component for selecting dates
 * Wraps MUI X DatePicker with MRS design tokens and theme integration
 */
export const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>((props, ref) => {
  const { slotProps, ...rest } = props;

  return (
    <MuiDatePicker
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
});

DatePicker.displayName = 'DatePicker';

export default DatePicker;
