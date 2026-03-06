/**
 * TimePicker Storybook Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from './TimePicker';
import { LocalizationProvider } from '../../providers/LocalizationProvider';
import React from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';

const meta: Meta<typeof TimePicker> = {
  title: 'Components/Molecules/TimePicker',
  component: TimePicker,
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
      description: 'The current value of the time picker',
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
    ampm: {
      control: 'boolean',
      description: 'If true, uses 12-hour time format',
    },
    format: {
      control: 'text',
      description: 'Format string for the time display',
    },
  },
  args: {
    onChange: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

/**
 * Default TimePicker with no value selected
 */
export const Default: Story = {
  args: {
    label: 'Select Time',
  },
};

/**
 * TimePicker with a default value
 */
export const WithValue: Story = {
  args: {
    label: 'Appointment Time',
    value: dayjs().hour(14).minute(30),
  },
};

/**
 * Controlled TimePicker example
 */
export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs().hour(9).minute(0));
    return (
      <TimePicker
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
    label: 'Controlled Time',
  },
};

/**
 * Uncontrolled TimePicker example
 */
export const Uncontrolled: Story = {
  args: {
    label: 'Uncontrolled Time',
  },
};

/**
 * TimePicker with 12-hour format (AM/PM)
 */
export const TwelveHourFormat: Story = {
  args: {
    label: 'Time (12-hour)',
    value: dayjs().hour(14).minute(30),
    ampm: true,
    format: 'hh:mm A',
  },
};

/**
 * TimePicker with 24-hour format
 */
export const TwentyFourHourFormat: Story = {
  args: {
    label: 'Time (24-hour)',
    value: dayjs().hour(14).minute(30),
    ampm: false,
    format: 'HH:mm',
  },
};

/**
 * TimePicker with different time formats
 */
export const CustomFormats: Story = {
  render: () => (
    <>
      <TimePicker
        label="12-hour (hh:mm A)"
        format="hh:mm A"
        value={dayjs().hour(14).minute(30)}
        ampm={true}
      />
      <TimePicker
        label="24-hour (HH:mm)"
        format="HH:mm"
        value={dayjs().hour(14).minute(30)}
        ampm={false}
      />
      <TimePicker
        label="With Seconds"
        format="HH:mm:ss"
        value={dayjs().hour(14).minute(30).second(45)}
        ampm={false}
        views={['hours', 'minutes', 'seconds']}
      />
    </>
  ),
};

/**
 * TimePicker with minutes step
 */
export const MinutesStep: Story = {
  args: {
    label: 'Time (30 min intervals)',
    minutesStep: 30,
    value: dayjs().hour(10).minute(0),
  },
};

/**
 * TimePicker with min and max time
 */
export const MinMaxTime: Story = {
  args: {
    label: 'Business Hours (9 AM - 5 PM)',
    minTime: dayjs().hour(9).minute(0),
    maxTime: dayjs().hour(17).minute(0),
    value: dayjs().hour(12).minute(0),
  },
};

/**
 * Disabled TimePicker
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled Time Picker',
    value: dayjs().hour(10).minute(30),
    disabled: true,
  },
};

/**
 * ReadOnly TimePicker
 */
export const ReadOnly: Story = {
  args: {
    label: 'Read Only Time Picker',
    value: dayjs().hour(10).minute(30),
    readOnly: true,
  },
};

/**
 * TimePicker with seconds
 */
export const WithSeconds: Story = {
  args: {
    label: 'Time with Seconds',
    value: dayjs().hour(10).minute(30).second(45),
    views: ['hours', 'minutes', 'seconds'],
    format: 'HH:mm:ss',
    ampm: false,
  },
};

/**
 * TimePicker with validation
 */
export const WithValidation: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<Dayjs | null>(null);
    const [error, setError] = React.useState<string | null>(null);

    const handleChange = (newValue: Dayjs | null) => {
      setValue(newValue);
      if (!newValue) {
        setError('Time is required');
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
      <TimePicker
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
    label: 'Business Hours (Required)',
  },
};

/**
 * Mobile variant TimePicker
 */
export const MobileVariant: Story = {
  args: {
    label: 'Mobile Time Picker',
    value: dayjs().hour(14).minute(30),
  },
};

/**
 * TimePicker showing all features
 */
export const AllFeatures: Story = {
  render: () => {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs().hour(10).minute(0));

    return (
      <TimePicker
        label="Full Featured Time Picker"
        value={value}
        onChange={setValue}
        format="hh:mm A"
        ampm={true}
        minutesStep={15}
        minTime={dayjs().hour(8).minute(0)}
        maxTime={dayjs().hour(18).minute(0)}
        views={['hours', 'minutes']}
        slotProps={{
          textField: {
            helperText: 'Select a time between 8 AM and 6 PM (15 min intervals)',
          },
        }}
      />
    );
  },
};
