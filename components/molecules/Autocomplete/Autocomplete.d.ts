import { default as React } from 'react';
import { AutocompleteProps } from './Autocomplete.types';
/**
 * Autocomplete component
 *
 * The autocomplete is a normal text input enhanced by a panel of suggested options.
 * Supports both single and multiple selection modes.
 *
 * @param props - Autocomplete component props
 * @returns Autocomplete component
 */
export declare const Autocomplete: {
    <T, Multiple extends boolean | undefined = undefined, DisableClearable extends boolean | undefined = undefined, FreeSolo extends boolean | undefined = undefined>(props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>): React.ReactElement;
    displayName: string;
};
//# sourceMappingURL=Autocomplete.d.ts.map