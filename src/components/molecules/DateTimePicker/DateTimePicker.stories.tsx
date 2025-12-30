/**
 * DateTimePicker Storybook Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { DateTimePicker } from './DateTimePicker';
import { LocalizationProvider } from '../../providers/LocalizationProvider';
import React from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';

const meta: Meta<typeof DateTimePicker> = {
  title: 'Components/Molecules/DateTimePicker',
  component: DateTimePicker,
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
      description: 'The current value of the date time picker',
    },
    onChange: {
      action: 'changed',
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
    ampm: {
      control: 'boolean',
      description: 'If true, uses 12-hour time format',
    },
    format: {
      control: 'text',
      description: 'Format string for the date time display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DateTimePicker>;

/**
 * Default DateTimePicker with no value selected
 */
export const Default: Story = {
  args: {
    label: 'Select Date & Time',
  },
};

/**
 * DateTimePicker with a default value
 */
export const WithValue: Story = {
  args: {
    label: 'Appointment',
    value: dayjs('2024-06-15T14:30:00'),
  },
};

/**
 * Controlled DateTimePicker example
 */
export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2024-06-15T10:00:00'));
    return (
      <DateTimePicker
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
    label: 'Controlled Date & Time',
  },
};

/**
 * Uncontrolled DateTimePicker example
 */
export const Uncontrolled: Story = {
  args: {
    label: 'Uncontrolled Date & Time',
  },
};

/**
 * DateTimePicker with 12-hour format
 */
export const TwelveHourFormat: Story = {
  args: {
    label: 'Date & Time (12-hour)',
    value: dayjs('2024-06-15T14:30:00'),
    ampm: true,
    format: 'MM/DD/YYYY hh:mm A',
  },
};

/**
 * DateTimePicker with 24-hour format
 */
export const TwentyFourHourFormat: Story = {
  args: {
    label: 'Date & Time (24-hour)',
    value: dayjs('2024-06-15T14:30:00'),
    ampm: false,
    format: 'DD/MM/YYYY HH:mm',
  },
};

/**
 * DateTimePicker with different formats
 */
export const CustomFormats: Story = {
  render: () => (
    <>
      <DateTimePicker
        label="MM/DD/YYYY hh:mm A"
        format="MM/DD/YYYY hh:mm A"
        value={dayjs()}
        ampm={true}
      />
      <DateTimePicker
        label="DD/MM/YYYY HH:mm"
        format="DD/MM/YYYY HH:mm"
        value={dayjs()}
        ampm={false}
      />
      <DateTimePicker
        label="MMM DD, YYYY - hh:mm A"
        format="MMM DD, YYYY - hh:mm A"
        value={dayjs()}
        ampm={true}
      />
    </>
  ),
};

/**
 * DateTimePicker with minutes step
 */
export const MinutesStep: Story = {
  args: {
    label: 'Date & Time (30 min intervals)',
    minutesStep: 30,
    value: dayjs(),
  },
};

/**
 * DateTimePicker with min and max datetime
 */
export const MinMaxDateTime: Story = {
  args: {
    label: 'Select Date & Time (Next 7 Days)',
    minDateTime: dayjs(),
    maxDateTime: dayjs().add(7, 'day'),
    value: dayjs().add(1, 'day').hour(10).minute(0),
  },
};

/**
 * DateTimePicker with disabled dates (weekends)
 */
export const DisabledDates: Story = {
  args: {
    label: 'Date & Time (Weekends Disabled)',
    value: dayjs(),
    shouldDisableDate: (date: any) => {
      const day = date.day();
      return day === 0 || day === 6; // Disable Sundays and Saturdays
    },
  },
};

/**
 * Disabled DateTimePicker
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled Date & Time Picker',
    value: dayjs(),
    disabled: true,
  },
};

/**
 * ReadOnly DateTimePicker
 */
export const ReadOnly: Story = {
  args: {
    label: 'Read Only Date & Time Picker',
    value: dayjs(),
    readOnly: true,
  },
};

/**
 * DateTimePicker with specific views
 */
export const CustomViews: Story = {
  args: {
    label: 'Date & Time (No Seconds)',
    value: dayjs(),
    views: ['year', 'month', 'day', 'hours', 'minutes'],
    format: 'MM/DD/YYYY HH:mm',
    ampm: false,
  },
};

/**
 * DateTimePicker starting with time view
 */
export const OpenToTime: Story = {
  args: {
    label: 'Date & Time (Opens to Time)',
    value: dayjs(),
    openTo: 'hours',
  },
};

/**
 * DateTimePicker with validation
 */
export const WithValidation: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<Dayjs | null>(null);
    const [error, setError] = React.useState<string | null>(null);

    const handleChange = (newValue: Dayjs | null) => {
      setValue(newValue);
      if (!newValue) {
        setError('Date and time are required');
      } else if (newValue.isBefore(dayjs(), 'minute')) {
        setError('Date and time must be in the future');
      } else {
        const hour = newValue.hour();
        if (hour < 9 || hour >= 17) {
          setError('Time must be during business hours (9 AM - 5 PM)');
        } else {
          setError(null);
        }
      }
      args.onChange?.(newValue);
    };

    return (
      <DateTimePicker
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
    label: 'Future Date & Business Hours (Required)',
  },
};

/**
 * Mobile variant DateTimePicker
 */
export const MobileVariant: Story = {
  args: {
    label: 'Mobile Date & Time Picker',
    value: dayjs(),
  },
};

/**
 * DateTimePicker showing all features
 */
export const AllFeatures: Story = {
  render: () => {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs().add(1, 'day').hour(10).minute(0));

    return (
      <DateTimePicker
        label="Full Featured DateTime Picker"
        value={value}
        onChange={setValue}
        format="MMM DD, YYYY - hh:mm A"
        ampm={true}
        minutesStep={15}
        minDateTime={dayjs()}
        maxDateTime={dayjs().add(30, 'day')}
        views={['year', 'month', 'day', 'hours', 'minutes']}
        openTo="day"
        slotProps={{
          textField: {
            helperText: 'Select a future date & time within 30 days (15 min intervals)',
          },
        }}
      />
    );
  },
};
