/**
 * Pagination Component
 * @package @mrs/ui
 *
 * Enables navigation through paged content.
 * Pagination divides content into discrete pages with navigation controls.
 *
 * @example
 * ```tsx
 * const [page, setPage] = useState(1);
 *
 * <Pagination
 *   count={10}
 *   page={page}
 *   onChange={(e, value) => setPage(value)}
 * />
 * ```
 */

import React from 'react';
import MuiPagination from '@mui/material/Pagination';
import type { PaginationProps } from './Pagination.types';

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  (
    {
      count,
      page = 1,
      onChange,
      variant = 'text',
      shape = 'circular',
      size = 'medium',
      color = 'standard',
      disabled = false,
      hideNextButton = false,
      hidePrevButton = false,
      showFirstButton = false,
      showLastButton = false,
      boundaryCount = 1,
      siblingCount = 1,
      ...props
    },
    ref
  ) => {
    return (
      <MuiPagination
        ref={ref}
        count={count}
        page={page}
        onChange={onChange}
        variant={variant}
        shape={shape}
        size={size}
        color={color}
        disabled={disabled}
        hideNextButton={hideNextButton}
        hidePrevButton={hidePrevButton}
        showFirstButton={showFirstButton}
        showLastButton={showLastButton}
        boundaryCount={boundaryCount}
        siblingCount={siblingCount}
        {...props}
      />
    );
  }
);

Pagination.displayName = 'Pagination';

export default Pagination;
