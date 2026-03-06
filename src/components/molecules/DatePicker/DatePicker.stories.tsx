/**
 * DatePicker Storybook Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';
import { LocalizationProvider } from '../../providers/LocalizationProvider';
import React from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/Molecules/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <LocalizationProvider>
        <Stack spacing={2} sx={{ width: '100%', maxWidth: 400 }}>
          <Story />
        </Stack>
      </LocalizationProvider>
    ),
  ],
  argTypes: {
    value: {
      control: false,
      description: 'The current value of the date picker',
    },
    onChange: {
      description: 'Callback fired when the value changes',
    },
    label: {
      control: 'text',
      description: 'The label content',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the component is disabled',
    },
    readOnly: {
      control: 'boolean',
      description: 'If true, the component is read-only',
    },
    format: {
      control: 'text',
      description: 'Format string for the date display',
    },
  },
  args: {
    onChange: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

/**
 * Default DatePicker with no value selected
 */
export const Default: Story = {
  args: {
    label: 'Select Date',
  },
};

/**
 * DatePicker with a default value
 */
export const WithValue: Story = {
  args: {
    label: 'Birth Date',
    value: dayjs('2024-01-15'),
  },
};

/**
 * Controlled DatePicker example
 */
export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2024-06-15'));
    return (
      <DatePicker
        {...args}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          args.onChange?.(newValue);
        }}
      />
    );
  },
  args: {
    label: 'Controlled Date',
  },
};

/**
 * Uncontrolled DatePicker example
 */
export const Uncontrolled: Story = {
  args: {
    label: 'Uncontrolled Date',
  },
};

/**
 * DatePicker with different date formats
 */
export const CustomFormats: Story = {
  render: () => (
    <>
      <DatePicker label="MM/DD/YYYY" format="MM/DD/YYYY" value={dayjs()} />
      <DatePicker label="DD/MM/YYYY" format="DD/MM/YYYY" value={dayjs()} />
      <DatePicker label="YYYY-MM-DD" format="YYYY-MM-DD" value={dayjs()} />
      <DatePicker label="MMM DD, YYYY" format="MMM DD, YYYY" value={dayjs()} />
    </>
  ),
};

/**
 * DatePicker with min and max dates
 */
export const MinMaxDates: Story = {
  args: {
    label: 'Select Date (Next 30 Days)',
    minDate: dayjs(),
    maxDate: dayjs().add(30, 'day'),
    value: dayjs().add(5, 'day'),
  },
};

/**
 * DatePicker with disabled dates (weekends)
 */
export const DisabledDates: Story = {
  args: {
    label: 'Select Date (Weekends Disabled)',
    value: dayjs(),
    shouldDisableDate: (date: any) => {
      const day = date.day();
      return day === 0 || day === 6; // Disable Sundays and Saturdays
    },
  },
};

/**
 * Disabled DatePicker
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled Date Picker',
    value: dayjs(),
    disabled: true,
  },
};

/**
 * ReadOnly DatePicker
 */
export const ReadOnly: Story = {
  args: {
    label: 'Read Only Date Picker',
    value: dayjs(),
    readOnly: true,
  },
};

/**
 * DatePicker with different views
 */
export const YearView: Story = {
  args: {
    label: 'Select Year',
    views: ['year'],
    openTo: 'year',
    value: dayjs(),
  },
};

/**
 * DatePicker with month view
 */
export const MonthView: Story = {
  args: {
    label: 'Select Month',
    views: ['year', 'month'],
    openTo: 'month',
    value: dayjs(),
    format: 'MMMM YYYY',
  },
};

/**
 * DatePicker with validation
 */
export const WithValidation: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<Dayjs | null>(null);
    const [error, setError] = React.useState<string | null>(null);

    const handleChange = (newValue: Dayjs | null) => {
      setValue(newValue);
      if (!newValue) {
        setError('Date is required');
      } else if (newValue.isBefore(dayjs(), 'day')) {
        setError('Date must be in the future');
      } else {
        setError(null);
      }
      args.onChange?.(newValue);
    };

    return (
      <DatePicker
        {...args}
        value={value}
        onChange={handleChange}
        slotProps={{
          textField: {
            error: !!error,
            helperText: error,
          },
        }}
      />
    );
  },
  args: {
    label: 'Future Date (Required)',
  },
};

/**
 * Mobile variant DatePicker
 */
export const MobileVariant: Story = {
  args: {
    label: 'Mobile Date Picker',
    value: dayjs(),
  },
};

/**
 * Responsive DatePicker showing all features
 */
export const AllFeatures: Story = {
  render: () => {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs());

    return (
      <>
        <DatePicker
          label="Full Featured Date Picker"
          value={value}
          onChange={setValue}
          format="MMM DD, YYYY"
          minDate={dayjs().subtract(1, 'year')}
          maxDate={dayjs().add(1, 'year')}
          views={['year', 'month', 'day']}
          openTo="day"
          slotProps={{
            textField: {
              helperText: 'Select a date within the last/next year',
            },
          }}
        />
      </>
    );
  },
};
