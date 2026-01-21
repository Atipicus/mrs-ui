/**
 * Chip component tests
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Chip } from './Chip';
import { Avatar } from '../Avatar';

describe('Chip', () => {
  it('renders with default props', () => {
    render(<Chip label="Test Chip" />);
    expect(screen.getByText('Test Chip')).toBeInTheDocument();
  });

  it('renders with medium size', () => {
    const { container } = render(<Chip label="Medium Chip" size="medium" />);
    const chip = container.querySelector('.MuiChip-sizeMedium');
    expect(chip).toBeInTheDocument();
  });

  it('renders with small size', () => {
    const { container } = render(<Chip label="Small Chip" size="small" />);
    const chip = container.querySelector('.MuiChip-sizeSmall');
    expect(chip).toBeInTheDocument();
  });

  it('renders with default color', () => {
    const { container } = render(<Chip label="Default Chip" color="default" />);
    const chip = container.querySelector('.MuiChip-colorDefault');
    expect(chip).toBeInTheDocument();
  });

  it('renders with primary color', () => {
    const { container } = render(<Chip label="Primary Chip" color="primary" />);
    const chip = container.querySelector('.MuiChip-colorPrimary');
    expect(chip).toBeInTheDocument();
  });

  it('renders with secondary color', () => {
    const { container } = render(<Chip label="Secondary Chip" color="secondary" />);
    const chip = container.querySelector('.MuiChip-colorSecondary');
    expect(chip).toBeInTheDocument();
  });

  it('renders with error color', () => {
    const { container } = render(<Chip label="Error Chip" color="error" />);
    const chip = container.querySelector('.MuiChip-colorError');
    expect(chip).toBeInTheDocument();
  });

  it('renders with info color', () => {
    const { container } = render(<Chip label="Info Chip" color="info" />);
    const chip = container.querySelector('.MuiChip-colorInfo');
    expect(chip).toBeInTheDocument();
  });

  it('renders with success color', () => {
    const { container } = render(<Chip label="Success Chip" color="success" />);
    const chip = container.querySelector('.MuiChip-colorSuccess');
    expect(chip).toBeInTheDocument();
  });

  it('renders with warning color', () => {
    const { container } = render(<Chip label="Warning Chip" color="warning" />);
    const chip = container.querySelector('.MuiChip-colorWarning');
    expect(chip).toBeInTheDocument();
  });

  it('renders with filled variant', () => {
    const { container } = render(<Chip label="Filled Chip" variant="filled" />);
    const chip = container.querySelector('.MuiChip-filled');
    expect(chip).toBeInTheDocument();
  });

  it('renders with outlined variant', () => {
    const { container } = render(<Chip label="Outlined Chip" variant="outlined" />);
    const chip = container.querySelector('.MuiChip-outlined');
    expect(chip).toBeInTheDocument();
  });

  it('renders in disabled state', () => {
    const { container } = render(<Chip label="Disabled Chip" disabled />);
    const chip = container.querySelector('.MuiChip-root');
    expect(chip).toHaveClass('Mui-disabled');
  });

  it('renders with avatar', () => {
    const { container } = render(
      <Chip label="Avatar Chip" avatar={<Avatar alt="Test User">TU</Avatar>} />
    );
    const avatar = container.querySelector('.MuiChip-avatar');
    expect(avatar).toBeInTheDocument();
  });

  it('renders with delete icon', () => {
    const handleDelete = jest.fn();
    const { container } = render(<Chip label="Deletable Chip" onDelete={handleDelete} />);
    const deleteIcon = container.querySelector('.MuiChip-deleteIcon');
    expect(deleteIcon).toBeInTheDocument();
  });

  it('calls onDelete when delete icon is clicked', () => {
    const handleDelete = jest.fn();
    const { container } = render(<Chip label="Deletable Chip" onDelete={handleDelete} />);
    const deleteIcon = screen.getByTestId('CancelIcon'); // MUI's default delete icon has this test id
    await userEvent.click(deleteIcon);
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });

  it('calls onClick when chip is clicked', async () => {
    const handleClick = jest.fn();
    render(<Chip label="Clickable Chip" onClick={handleClick} />);
    const chip = screen.getByText('Clickable Chip');
    await userEvent.click(chip);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is clickable when clickable prop is true', () => {
    const { container } = render(<Chip label="Clickable Chip" clickable />);
    const chip = container.querySelector('.MuiChip-clickable');
    expect(chip).toBeInTheDocument();
  });

  it('is clickable when onClick is provided', () => {
    const { container } = render(<Chip label="Clickable Chip" onClick={() => {}} />);
    const chip = container.querySelector('.MuiChip-clickable');
    expect(chip).toBeInTheDocument();
  });

  it('renders with custom icon', () => {
    render(<Chip label="Icon Chip" icon={<span data-testid="custom-icon">🎨</span>} />);
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Chip label="Ref Chip" ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it('applies custom sx prop', () => {
    const { container } = render(<Chip label="Custom Chip" sx={{ margin: 2 }} />);
    const chip = container.querySelector('.MuiChip-root');
    expect(chip).toHaveStyle({ margin: '16px' });
  });

  describe('with various prop combinations', () => {
    const sizes: ChipProps['size'][] = ['small', 'medium'];
    const colors: ChipProps['color'][] = ['default', 'primary', 'success'];
    const variants: ChipProps['variant'][] = ['filled', 'outlined'];

    it.each(
      sizes.flatMap((size) =>
        colors.flatMap((color) => variants.map((variant) => ({ size, color, variant })))
      )
    )('renders correctly for size=$size, color=$color, variant=$variant', ({ size, color, variant }) => {
      const label = `${size}-${color}-${variant}`;
      render(<Chip label={label} size={size} color={color} variant={variant} />);
      const chipElement = screen.getByText(label);
      expect(chipElement).toBeInTheDocument();
    });
  });

  it('renders with avatar and delete icon together', () => {
    const handleDelete = jest.fn();
    const { container } = render(
      <Chip label="Full Chip" avatar={<Avatar>FC</Avatar>} onDelete={handleDelete} />
    );
    const avatar = container.querySelector('.MuiChip-avatar');
    const deleteIcon = container.querySelector('.MuiChip-deleteIcon');
    expect(avatar).toBeInTheDocument();
    expect(deleteIcon).toBeInTheDocument();
  });
});
