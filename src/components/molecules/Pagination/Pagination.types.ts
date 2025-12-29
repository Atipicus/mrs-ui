/**
 * Pagination Component Types
 * @package @mrs/ui
 */

import type { PaginationProps as MuiPaginationProps } from '@mui/material/Pagination';

/**
 * Pagination component props
 * Enables navigation through paged content
 */
export interface PaginationProps extends MuiPaginationProps {
  /**
   * The total number of pages
   */
  count: number;

  /**
   * The current page number (1-indexed)
   * @default 1
   */
  page?: number;

  /**
   * Callback fired when the page is changed
   */
  onChange?: (event: React.ChangeEvent<unknown>, page: number) => void;

  /**
   * The variant to use
   * @default 'text'
   */
  variant?: 'text' | 'outlined';

  /**
   * The shape of the pagination items
   * @default 'circular'
   */
  shape?: 'circular' | 'rounded';

  /**
   * The size of the pagination component
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * The color of the pagination component
   * @default 'standard'
   */
  color?: 'primary' | 'secondary' | 'standard';

  /**
   * If true, the pagination component is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * If true, hide the next-page button
   * @default false
   */
  hideNextButton?: boolean;

  /**
   * If true, hide the previous-page button
   * @default false
   */
  hidePrevButton?: boolean;

  /**
   * If true, show the first-page button
   * @default false
   */
  showFirstButton?: boolean;

  /**
   * If true, show the last-page button
   * @default false
   */
  showLastButton?: boolean;

  /**
   * Number of always visible pages at the beginning and end
   * @default 1
   */
  boundaryCount?: number;

  /**
   * Number of always visible pages before and after the current page
   * @default 1
   */
  siblingCount?: number;
}
