/**
 * LocalizationProvider Component
 *
 * Provides localization context for MUI X Date Pickers
 * Uses dayjs as the date library adapter
 */

import React from 'react';
import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export interface LocalizationProviderProps {
  /**
   * The content to wrap with localization context
   */
  children: React.ReactNode;

  /**
   * The locale string to use for date formatting
   * @default 'en'
   */
  locale?: string;
}

/**
 * LocalizationProvider wraps MUI X LocalizationProvider with dayjs adapter
 * Use this to wrap your app or component tree that uses date pickers
 */
export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({
  children,
  locale = 'en',
}) => {
  return (
    <MuiLocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
      {children}
    </MuiLocalizationProvider>
  );
};

LocalizationProvider.displayName = 'LocalizationProvider';

export default LocalizationProvider;
