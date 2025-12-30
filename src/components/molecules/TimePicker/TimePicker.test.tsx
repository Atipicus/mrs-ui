/**
 * TimePicker Component Tests
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { TimePicker } from './TimePicker';
import { LocalizationProvider } from '../../providers/LocalizationProvider';
import dayjs from 'dayjs';

// Wrapper component for tests
const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <LocalizationProvider>{children}</LocalizationProvider>
);

describe('TimePicker', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      render(
        <TestWrapper>
          <TimePicker label="Test Time" />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(
        <TestWrapper>
          <TimePicker label="Appointment Time" />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('displays value when provided', () => {
      const testTime = dayjs().hour(14).minute(30);
      const { container } = render(
        <TestWrapper>
          <TimePicker label="Test Time" value={testTime} />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('02:30 PM');
    });

    it('renders without value', () => {
      const { container } = render(
        <TestWrapper>
          <TimePicker label="Test Time" />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('');
    });
  });

  describe('Display Name', () => {
    it('has correct displayName', () => {
      expect(TimePicker.displayName).toBe('TimePicker');
    });
  });

  describe('Disabled State', () => {
    it('renders as disabled when disabled prop is true', () => {
      const { container } = render(
        <TestWrapper>
          <TimePicker label="Test Time" disabled />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input).toBeDisabled();
    });

    it('is not disabled by default', () => {
      const { container } = render(
        <TestWrapper>
          <TimePicker label="Test Time" />
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
          <TimePicker label="Test Time" readOnly />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input).toHaveAttribute('readonly');
    });

    it('is not readOnly by default', () => {
      const { container } = render(
        <TestWrapper>
          <TimePicker label="Test Time" />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input).not.toHaveAttribute('readonly');
    });
  });

  describe('Format', () => {
    it('uses default format hh:mm A (12-hour)', () => {
      const testTime = dayjs().hour(14).minute(30);
      const { container } = render(
        <TestWrapper>
          <TimePicker label="Test Time" value={testTime} />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('02:30 PM');
    });

    it('uses 24-hour format when ampm is false', () => {
      const testTime = dayjs().hour(14).minute(30);
      const { container } = render(
        <TestWrapper>
          <TimePicker label="Test Time" value={testTime} format="HH:mm" ampm={false} />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('14:30');
    });

    it('uses custom format when provided', () => {
      const testTime = dayjs().hour(14).minute(30).second(45);
      const { container } = render(
        <TestWrapper>
          <TimePicker label="Test Time" value={testTime} format="HH:mm:ss" ampm={false} />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('14:30:45');
    });
  });

  describe('AM/PM', () => {
    it('uses 12-hour format with AM/PM by default', () => {
      const testTime = dayjs().hour(14).minute(30);
      const { container } = render(
        <TestWrapper>
          <TimePicker label="Test Time" value={testTime} />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input.value).toContain('PM');
    });

    it('uses 24-hour format when ampm is false', () => {
      const testTime = dayjs().hour(14).minute(30);
      const { container } = render(
        <TestWrapper>
          <TimePicker label="Test Time" value={testTime} ampm={false} format="HH:mm" />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input.value).not.toContain('PM');
      expect(input.value).toBe('14:30');
    });
  });

  describe('Value Changes', () => {
    it('calls onChange when value changes', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();

      const { container } = render(
        <TestWrapper>
          <TimePicker label="Test Time" onChange={handleChange} />
        </TestWrapper>
      );

      const input = container.querySelector('input') as HTMLInputElement;
      await user.type(input, '02:30 PM');

      expect(handleChange).toHaveBeenCalled();
    });

    it('accepts null value', () => {
      const { container } = render(
        <TestWrapper>
          <TimePicker label="Test Time" value={null} />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('');
    });
  });

  describe('Min/Max Constraints', () => {
    it('accepts minTime prop', () => {
      const minTime = dayjs().hour(9).minute(0);
      render(
        <TestWrapper>
          <TimePicker label="Test Time" minTime={minTime} />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('accepts maxTime prop', () => {
      const maxTime = dayjs().hour(17).minute(0);
      render(
        <TestWrapper>
          <TimePicker label="Test Time" maxTime={maxTime} />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('accepts both minTime and maxTime', () => {
      const minTime = dayjs().hour(9).minute(0);
      const maxTime = dayjs().hour(17).minute(0);
      render(
        <TestWrapper>
          <TimePicker label="Test Time" minTime={minTime} maxTime={maxTime} />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });
  });

  describe('Minutes Step', () => {
    it('accepts minutesStep prop', () => {
      render(
        <TestWrapper>
          <TimePicker label="Test Time" minutesStep={30} />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('accepts 15 minute step', () => {
      render(
        <TestWrapper>
          <TimePicker label="Test Time" minutesStep={15} />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });
  });

  describe('Views', () => {
    it('accepts custom views prop', () => {
      render(
        <TestWrapper>
          <TimePicker label="Test Time" views={['hours', 'minutes', 'seconds']} />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('accepts openTo prop', () => {
      render(
        <TestWrapper>
          <TimePicker label="Test Time" openTo="minutes" />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('supports seconds view', () => {
      render(
        <TestWrapper>
          <TimePicker label="Test Time" views={['hours', 'minutes', 'seconds']} />
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
          <TimePicker label="Test Time" ref={ref} />
        </TestWrapper>
      );
      expect(ref.current).toBeTruthy();
    });
  });

  describe('SlotProps', () => {
    it('accepts custom slotProps for textField', () => {
      render(
        <TestWrapper>
          <TimePicker
            label="Test Time"
            slotProps={{
              textField: {
                helperText: 'Select a time',
              },
            }}
          />
        </TestWrapper>
      );
      expect(screen.getByText('Select a time')).toBeInTheDocument();
    });

    it('applies fullWidth to textField by default', () => {
      const { container } = render(
        <TestWrapper>
          <TimePicker label="Test Time" />
        </TestWrapper>
      );
      const formControl = container.querySelector('.MuiFormControl-root');
      expect(formControl).toHaveClass('MuiFormControl-fullWidth');
    });
  });
});
