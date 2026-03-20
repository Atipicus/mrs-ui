/**
 * PillTabsControl tests
 * @package @mrs/ui
 */

import '@testing-library/jest-dom';
import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import userEvent from '@testing-library/user-event';
import PhoneIcon from '@mui/icons-material/Phone';
import { PillTabsControl } from './PillTabsControl';

const basicTabs = [{ label: 'Tab 1' }, { label: 'Tab 2' }, { label: 'Tab 3' }];

describe('PillTabsControl', () => {
  it('renders tab labels', () => {
    renderWithTheme(<PillTabsControl value={0} onChange={() => {}} tabs={basicTabs} />);

    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Tab 3')).toBeInTheDocument();
  });

  it('marks the selected tab', () => {
    renderWithTheme(<PillTabsControl value={1} onChange={() => {}} tabs={basicTabs} />);

    const second = screen.getByText('Tab 2').closest('button');
    expect(second).toHaveClass('Mui-selected');
  });

  it('calls onChange with the new index when a tab is clicked', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    renderWithTheme(<PillTabsControl value={0} onChange={handleChange} tabs={basicTabs} />);

    await user.click(screen.getByText('Tab 2'));

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object), 1);
  });

  it('renders disabled tabs as non-interactive', () => {
    const handleChange = jest.fn();
    const tabs = [{ label: 'A' }, { label: 'B', disabled: true }];

    renderWithTheme(<PillTabsControl value={0} onChange={handleChange} tabs={tabs} />);

    const disabledTab = screen.getByText('B').closest('button');
    expect(disabledTab).toBeDisabled();
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('renders an icon when provided', () => {
    const tabs = [{ label: 'Calls', icon: PhoneIcon }];

    renderWithTheme(<PillTabsControl value={0} onChange={() => {}} tabs={tabs} />);

    const tab = screen.getByRole('tab', { name: 'Calls' });
    expect(tab.querySelector('svg')).toBeInTheDocument();
  });

  it('has tablist and tab roles', () => {
    renderWithTheme(<PillTabsControl value={0} onChange={() => {}} tabs={basicTabs} />);

    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.getAllByRole('tab')).toHaveLength(3);
  });
});
