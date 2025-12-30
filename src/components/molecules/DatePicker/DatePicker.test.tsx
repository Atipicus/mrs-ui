/**
 * DatePicker Component Tests
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { DatePicker } from './DatePicker';
import { LocalizationProvider } from '../../providers/LocalizationProvider';
import dayjs from 'dayjs';

// Wrapper component for tests
const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <LocalizationProvider>{children}</LocalizationProvider>
);

describe('DatePicker', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      render(
        <TestWrapper>
          <DatePicker label="Test Date" />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(
        <TestWrapper>
          <DatePicker label="Birth Date" />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('displays value when provided', () => {
      const testDate = dayjs('2024-01-15');
      const { container } = render(
        <TestWrapper>
          <DatePicker label="Test Date" value={testDate} />
        </TestWrapper>
      );
      const input = container.querySelector('input[value="01/15/2024"]') as HTMLInputElement;
      expect(input).toBeInTheDocument();
      expect(input.value).toBe('01/15/2024');
    });

    it('renders without value', () => {
      const { container } = render(
        <TestWrapper>
          <DatePicker label="Test Date" />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('');
    });
  });

  describe('Display Name', () => {
    it('has correct displayName', () => {
      expect(DatePicker.displayName).toBe('DatePicker');
    });
  });

  describe('Disabled State', () => {
    it('renders as disabled when disabled prop is true', () => {
      const { container } = render(
        <TestWrapper>
          <DatePicker label="Test Date" disabled />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input).toBeDisabled();
    });

    it('is not disabled by default', () => {
      const { container } = render(
        <TestWrapper>
          <DatePicker label="Test Date" />
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
          <DatePicker label="Test Date" readOnly />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input).toHaveAttribute('readonly');
    });

    it('is not readOnly by default', () => {
      const { container } = render(
        <TestWrapper>
          <DatePicker label="Test Date" />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input).not.toHaveAttribute('readonly');
    });
  });

  describe('Format', () => {
    it('uses default format MM/DD/YYYY', () => {
      const testDate = dayjs('2024-06-15');
      const { container } = render(
        <TestWrapper>
          <DatePicker label="Test Date" value={testDate} />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('06/15/2024');
    });

    it('uses custom format when provided', () => {
      const testDate = dayjs('2024-06-15');
      const { container } = render(
        <TestWrapper>
          <DatePicker label="Test Date" value={testDate} format="YYYY-MM-DD" />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('2024-06-15');
    });

    it('supports DD/MM/YYYY format', () => {
      const testDate = dayjs('2024-06-15');
      const { container } = render(
        <TestWrapper>
          <DatePicker label="Test Date" value={testDate} format="DD/MM/YYYY" />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('15/06/2024');
    });
  });

  describe('Value Changes', () => {
    it('calls onChange when value changes', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();

      const { container } = render(
        <TestWrapper>
          <DatePicker label="Test Date" onChange={handleChange} />
        </TestWrapper>
      );

      const input = container.querySelector('input') as HTMLInputElement;
      await user.type(input, '01/15/2024');

      expect(handleChange).toHaveBeenCalled();
    });

    it('accepts null value', () => {
      const { container } = render(
        <TestWrapper>
          <DatePicker label="Test Date" value={null} />
        </TestWrapper>
      );
      const input = container.querySelector('input') as HTMLInputElement;
      expect(input.value).toBe('');
    });
  });

  describe('Min/Max Constraints', () => {
    it('accepts minDate prop', () => {
      const minDate = dayjs('2024-01-01');
      render(
        <TestWrapper>
          <DatePicker label="Test Date" minDate={minDate} />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('accepts maxDate prop', () => {
      const maxDate = dayjs('2024-12-31');
      render(
        <TestWrapper>
          <DatePicker label="Test Date" maxDate={maxDate} />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('accepts both minDate and maxDate', () => {
      const minDate = dayjs('2024-01-01');
      const maxDate = dayjs('2024-12-31');
      render(
        <TestWrapper>
          <DatePicker label="Test Date" minDate={minDate} maxDate={maxDate} />
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
          <DatePicker label="Test Date" shouldDisableDate={shouldDisableDate} />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('handles undefined shouldDisableDate', () => {
      render(
        <TestWrapper>
          <DatePicker label="Test Date" />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });
  });

  describe('Views', () => {
    it('accepts custom views prop', () => {
      render(
        <TestWrapper>
          <DatePicker label="Test Date" views={['year', 'month']} />
        </TestWrapper>
      );
      expect(screen.getByRole('group')).toBeInTheDocument();
    });

    it('accepts openTo prop', () => {
      render(
        <TestWrapper>
          <DatePicker label="Test Date" openTo="year" />
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
          <DatePicker label="Test Date" ref={ref} />
        </TestWrapper>
      );
      expect(ref.current).toBeTruthy();
    });
  });

  describe('SlotProps', () => {
    it('accepts custom slotProps for textField', () => {
      render(
        <TestWrapper>
          <DatePicker
            label="Test Date"
            slotProps={{
              textField: {
                helperText: 'Select a date',
              },
            }}
          />
        </TestWrapper>
      );
      expect(screen.getByText('Select a date')).toBeInTheDocument();
    });

    it('applies fullWidth to textField by default', () => {
      const { container } = render(
        <TestWrapper>
          <DatePicker label="Test Date" />
        </TestWrapper>
      );
      const formControl = container.querySelector('.MuiFormControl-root');
      expect(formControl).toHaveClass('MuiFormControl-fullWidth');
    });
  });
});
