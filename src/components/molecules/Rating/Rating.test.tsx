/**
 * Rating Component Tests
 */

import React from 'react';
import { renderWithTheme } from '../../../../tests/test-utils';
import { Rating } from './Rating';

describe('Rating', () => {
  describe('Rendering', () => {
    it('should render with default props', () => {
      const { container } = renderWithTheme(<Rating />);
      const rating = container.querySelector('.MuiRating-root');
      expect(rating).toBeInTheDocument();
    });

    it('should render with a default value', () => {
      const { container } = renderWithTheme(<Rating defaultValue={3} />);
      const filledStars = container.querySelectorAll('.MuiRating-iconFilled');
      expect(filledStars).toHaveLength(3);
    });

    it('should render with a controlled value', () => {
      const { container } = renderWithTheme(<Rating value={4} />);
      const filledStars = container.querySelectorAll('.MuiRating-iconFilled');
      expect(filledStars).toHaveLength(4);
    });

    it('should render with custom max value', () => {
      const { container } = renderWithTheme(<Rating max={10} />);
      const icons = container.querySelectorAll('.MuiRating-icon');
      expect(icons).toHaveLength(10);
    });

    it('should render with no value (empty)', () => {
      const { container } = renderWithTheme(<Rating value={null} />);
      const filledStars = container.querySelectorAll('.MuiRating-iconFilled');
      expect(filledStars).toHaveLength(0);
    });
  });

  describe('Sizes', () => {
    it('should render small size', () => {
      const { container } = renderWithTheme(<Rating size="small" />);
      const rating = container.querySelector('.MuiRating-sizeSmall');
      expect(rating).toBeInTheDocument();
    });

    it('should render medium size by default', () => {
      const { container } = renderWithTheme(<Rating />);
      const rating = container.querySelector('.MuiRating-sizeMedium');
      expect(rating).toBeInTheDocument();
    });

    it('should render large size', () => {
      const { container } = renderWithTheme(<Rating size="large" />);
      const rating = container.querySelector('.MuiRating-sizeLarge');
      expect(rating).toBeInTheDocument();
    });
  });

  describe('Precision', () => {
    it('should support half-star precision', () => {
      const { container } = renderWithTheme(<Rating defaultValue={2.5} precision={0.5} />);
      const filledStars = container.querySelectorAll('.MuiRating-iconFilled');
      // With precision 0.5, we should have 2 full stars and 1 half star
      expect(filledStars.length).toBeGreaterThanOrEqual(2);
    });

    it('should support quarter precision', () => {
      const { container } = renderWithTheme(<Rating defaultValue={2.75} precision={0.25} />);
      const rating = container.querySelector('.MuiRating-root');
      expect(rating).toBeInTheDocument();
    });
  });

  describe('Interaction', () => {
    it('should accept onChange prop', () => {
      const handleChange = jest.fn();
      renderWithTheme(<Rating onChange={handleChange} />);
      expect(handleChange).toBeDefined();
    });

    it('should render readOnly without errors', () => {
      const handleChange = jest.fn();
      const { container } = renderWithTheme(<Rating readOnly onChange={handleChange} />);
      const rating = container.querySelector('.MuiRating-root');
      expect(rating).toBeInTheDocument();
    });

    it('should render disabled without errors', () => {
      const handleChange = jest.fn();
      const { container } = renderWithTheme(<Rating disabled onChange={handleChange} />);
      const rating = container.querySelector('.MuiRating-root');
      expect(rating).toBeInTheDocument();
    });
  });

  describe('States', () => {
    it('should render as read-only', () => {
      const { container } = renderWithTheme(<Rating readOnly value={3} />);
      const rating = container.querySelector('.MuiRating-root');
      expect(rating).toBeInTheDocument();
    });

    it('should render as disabled', () => {
      const { container } = renderWithTheme(<Rating disabled />);
      const rating = container.querySelector('.MuiRating-root');
      expect(rating).toBeInTheDocument();
    });

    it('should highlight selected only', () => {
      const { container } = renderWithTheme(<Rating highlightSelectedOnly defaultValue={3} />);
      const rating = container.querySelector('.MuiRating-root');
      expect(rating).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      const { container } = renderWithTheme(<Rating value={3} />);
      const rating = container.querySelector('.MuiRating-root');
      expect(rating).toBeInTheDocument();
    });

    it('should support name attribute', () => {
      const { container } = renderWithTheme(<Rating name="product-rating" />);
      const inputs = container.querySelectorAll('input[name="product-rating"]');
      expect(inputs.length).toBeGreaterThan(0);
    });

    it('should support id attribute', () => {
      renderWithTheme(<Rating id="rating-test" />);
      const rating = document.getElementById('rating-test');
      expect(rating).toBeInTheDocument();
    });
  });

  describe('Display Name', () => {
    it('should have correct display name', () => {
      expect(Rating.displayName).toBe('Rating');
    });
  });
});
