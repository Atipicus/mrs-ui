/**
 * DateTimePicker Component Tests
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { DateTimePicker } from './DateTimePicker';
import { LocalizationProvider } from '../../providers/LocalizationProvider';
import dayjs from 'dayjs';

// Wrapper component for tests
const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <LocalizationProvider>{children}</LocalizationProvider>
);

describe('DateTimePicker', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      render(
        <TestWrapper>
          <DateTimePicker label="Test DateTime" />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(
        <TestWrapper>
          <DateTimePicker label="Appointment" />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('displays value when provided', () => {
      const testDateTime = dayjs('2024-06-15T14:30:00');
      const { container } = render(
        <TestWrapper>
          <DateTimePicker label="Test DateTime" value={testDateTime} />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('06/15/2024 02:30 PM');
    });

    it('renders without value', () => {
      const { container } = render(
        <TestWrapper>
          <DateTimePicker label="Test DateTime" />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('');
    });
  });

  describe('Display Name', () => {
    it('has correct displayName', () => {
      expect(DateTimePicker.displayName).toBe('DateTimePicker');
    });
  });

  describe('Disabled State', () => {
    it('renders as disabled when disabled prop is true', () => {
      const { container } = render(
        <TestWrapper>
          <DateTimePicker label="Test DateTime" disabled />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input).toBeDisabled();
    });

    it('is not disabled by default', () => {
      const { container } = render(
        <TestWrapper>
          <DateTimePicker label="Test DateTime" />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input).not.toBeDisabled();
    });
  });

  describe('ReadOnly State', () => {
    it('renders as readOnly when readOnly prop is true', () => {
      const { container } = render(
        <TestWrapper>
          <DateTimePicker label="Test DateTime" readOnly />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input).toHaveAttribute('readonly');
    });

    it('is not readOnly by default', () => {
      const { container } = render(
        <TestWrapper>
          <DateTimePicker label="Test DateTime" />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input).not.toHaveAttribute('readonly');
    });
  });

  describe('Format', () => {
    it('uses default format MM/DD/YYYY hh:mm A', () => {
      const testDateTime = dayjs('2024-06-15T14:30:00');
      const { container } = render(
        <TestWrapper>
          <DateTimePicker label="Test DateTime" value={testDateTime} />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('06/15/2024 02:30 PM');
    });

    it('uses 24-hour format when ampm is false', () => {
      const testDateTime = dayjs('2024-06-15T14:30:00');
      const { container } = render(
        <TestWrapper>
          <DateTimePicker
            label="Test DateTime"
            value={testDateTime}
            format="DD/MM/YYYY HH:mm"
            ampm={false}
          />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('15/06/2024 14:30');
    });

    it('uses custom format when provided', () => {
      const testDateTime = dayjs('2024-06-15T14:30:00');
      const { container } = render(
        <TestWrapper>
          <DateTimePicker
            label="Test DateTime"
            value={testDateTime}
            format="YYYY-MM-DD HH:mm"
            ampm={false}
          />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('2024-06-15 14:30');
    });
  });

  describe('AM/PM', () => {
    it('uses 12-hour format with AM/PM by default', () => {
      const testDateTime = dayjs('2024-06-15T14:30:00');
      const { container } = render(
        <TestWrapper>
          <DateTimePicker label="Test DateTime" value={testDateTime} />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input.value).toContain('PM');
    });

    it('uses 24-hour format when ampm is false', () => {
      const testDateTime = dayjs('2024-06-15T14:30:00');
      const { container } = render(
        <TestWrapper>
          <DateTimePicker
            label="Test DateTime"
            value={testDateTime}
            ampm={false}
            format="MM/DD/YYYY HH:mm"
          />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input.value).not.toContain('PM');
      expect(input.value).toContain('14:30');
    });
  });

  describe('Value Changes', () => {
    it('calls onChange when value changes', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();

      const { container } = render(
        <TestWrapper>
          <DateTimePicker label="Test DateTime" onChange={handleChange} />
        </TestWrapper>
      );

      const input = container.querySelector('input') as HTMLInputElement;
      await user.type(input, '06/15/2024 02:30 PM');

      expect(handleChange).toHaveBeenCalled();
    });

    it('accepts null value', () => {
      const { container } = render(
        <TestWrapper>
          <DateTimePicker label="Test DateTime" value={null} />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('');
    });
  });

  describe('Min/Max Constraints', () => {
    it('accepts minDateTime prop', () => {
      const minDateTime = dayjs('2024-01-01T09:00:00');
      render(
        <TestWrapper>
          <DateTimePicker label="Test DateTime" minDateTime={minDateTime} />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('accepts maxDateTime prop', () => {
      const maxDateTime = dayjs('2024-12-31T17:00:00');
      render(
        <TestWrapper>
          <DateTimePicker label="Test DateTime" maxDateTime={maxDateTime} />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('accepts both minDateTime and maxDateTime', () => {
      const minDateTime = dayjs('2024-01-01T09:00:00');
      const maxDateTime = dayjs('2024-12-31T17:00:00');
      render(
        <TestWrapper>
          <DateTimePicker label="Test DateTime" minDateTime={minDateTime} maxDateTime={maxDateTime} />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });
  });

  describe('Disabled Dates', () => {
    it('accepts shouldDisableDate prop', () => {
      const shouldDisableDate = (date: any) => date.day() === 0 || date.day() === 6;
      render(
        <TestWrapper>
          <DateTimePicker label="Test DateTime" shouldDisableDate={shouldDisableDate} />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('handles undefined shouldDisableDate', () => {
      render(
        <TestWrapper>
          <DateTimePicker label="Test DateTime" />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });
  });

  describe('Minutes Step', () => {
    it('accepts minutesStep prop', () => {
      render(
        <TestWrapper>
          <DateTimePicker label="Test DateTime" minutesStep={30} />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('accepts 15 minute step', () => {
      render(
        <TestWrapper>
          <DateTimePicker label="Test DateTime" minutesStep={15} />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });
  });

  describe('Views', () => {
    it('accepts custom views prop', () => {
      render(
        <TestWrapper>
          <DateTimePicker label="Test DateTime" views={['year', 'month', 'day', 'hours', 'minutes']} />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('accepts openTo prop for date', () => {
      render(
        <TestWrapper>
          <DateTimePicker label="Test DateTime" openTo="year" />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('accepts openTo prop for time', () => {
      render(
        <TestWrapper>
          <DateTimePicker label="Test DateTime" openTo="hours" />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('supports all available views', () => {
      render(
        <TestWrapper>
          <DateTimePicker
            label="Test DateTime"
            views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}
          />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(
        <TestWrapper>
          <DateTimePicker label="Test DateTime" ref={ref} />
        </TestWrapper>
      );
      expect(ref.current).toBeTruthy();
    });
  });

  describe('SlotProps', () => {
    it('accepts custom slotProps for textField', () => {
      render(
        <TestWrapper>
          <DateTimePicker
            label="Test DateTime"
            slotProps={{
              textField: {
                helperText: 'Select a date and time',
              },
            }}
          />
        </TestWrapper>
      );
      expect(screen.getByText('Select a date and time')).toBeInTheDocument();
    });

    it('applies fullWidth to textField by default', () => {
      const { container } = render(
        <TestWrapper>
          <DateTimePicker label="Test DateTime" />
        </TestWrapper>
      );
      const formControl = container.querySelector('.MuiFormControl-root');
      expect(formControl).toHaveClass('MuiFormControl-fullWidth');
    });
  });
});
