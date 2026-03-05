import { default as React } from 'react';
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
export declare const LocalizationProvider: React.FC<LocalizationProviderProps>;
export default LocalizationProvider;
//# sourceMappingURL=LocalizationProvider.d.ts.map