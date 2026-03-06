/**
 * Icon component tests
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import { Icon } from './Icon';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';

describe('Icon - SVG', () => {
  it('renders SVG icon', () => {
    const { container } = renderWithTheme(<Icon icon={AddIcon} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders with medium size by default', () => {
    const { container } = renderWithTheme(<Icon icon={AddIcon} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('MuiSvgIcon-fontSizeMedium');
  });

  it('renders with small size', () => {
    const { container } = renderWithTheme(<Icon icon={AddIcon} size="small" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('MuiSvgIcon-fontSizeSmall');
  });

  it('renders with large size', () => {
    const { container } = renderWithTheme(<Icon icon={AddIcon} size="large" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('MuiSvgIcon-fontSizeLarge');
  });

  it('renders with inherit size', () => {
    const { container } = renderWithTheme(<Icon icon={AddIcon} size="inherit" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('MuiSvgIcon-fontSizeInherit');
  });

  it('accepts different icon components', () => {
    const { container } = renderWithTheme(<Icon icon={HomeIcon} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('accepts custom color', () => {
    const { container } = renderWithTheme(<Icon icon={AddIcon} sx={{ color: 'primary.main' }} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('accepts custom className', () => {
    const { container } = renderWithTheme(<Icon icon={AddIcon} className="custom-icon" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('custom-icon');
  });
});

describe('Icon - Font', () => {
  it('renders font icon', () => {
    renderWithTheme(<Icon type="font" iconName="add" />);
    expect(screen.getByText('add')).toBeInTheDocument();
  });

  it('renders with medium size by default', () => {
    const { container } = renderWithTheme(<Icon type="font" iconName="add" />);
    const icon = container.querySelector('.MuiIcon-root');
    expect(icon).toHaveClass('MuiIcon-fontSizeMedium');
  });

  it('renders with small size', () => {
    const { container } = renderWithTheme(<Icon type="font" iconName="add" size="small" />);
    const icon = container.querySelector('.MuiIcon-root');
    expect(icon).toHaveClass('MuiIcon-fontSizeSmall');
  });

  it('renders with large size', () => {
    const { container } = renderWithTheme(<Icon type="font" iconName="add" size="large" />);
    const icon = container.querySelector('.MuiIcon-root');
    expect(icon).toHaveClass('MuiIcon-fontSizeLarge');
  });

  it('renders with inherit size', () => {
    const { container } = renderWithTheme(<Icon type="font" iconName="add" size="inherit" />);
    const icon = container.querySelector('.MuiIcon-root');
    expect(icon).toHaveClass('MuiIcon-fontSizeInherit');
  });

  it('renders different icon names', () => {
    renderWithTheme(<Icon type="font" iconName="home" />);
    expect(screen.getByText('home')).toBeInTheDocument();
  });

  it('accepts custom sx prop', () => {
    const { container } = renderWithTheme(
      <Icon type="font" iconName="add" sx={{ color: 'error.main' }} />
    );
    const icon = container.querySelector('.MuiIcon-root');
    expect(icon).toBeInTheDocument();
  });

  describe('SVG icon branches', () => {
    it('renders SVG icon when type is svg', () => {
      const AddIcon = require('@mui/icons-material/Add').default;
      renderWithTheme(<Icon type="svg" icon={AddIcon} />);
      // SVG icons render as svg elements
      expect(document.querySelector('svg')).toBeInTheDocument();
    });

    it('renders SVG icon when type is omitted (defaults to svg)', () => {
      const HomeIcon = require('@mui/icons-material/Home').default;
      renderWithTheme(<Icon icon={HomeIcon} />);
      expect(document.querySelector('svg')).toBeInTheDocument();
    });

    it('SVG icon with small size', () => {
      const AddIcon = require('@mui/icons-material/Add').default;
      renderWithTheme(<Icon type="svg" icon={AddIcon} size="small" />);
      expect(document.querySelector('svg')).toBeInTheDocument();
    });

    it('SVG icon with large size', () => {
      const AddIcon = require('@mui/icons-material/Add').default;
      renderWithTheme(<Icon type="svg" icon={AddIcon} size="large" />);
      expect(document.querySelector('svg')).toBeInTheDocument();
    });

    it('SVG icon with inherit size', () => {
      const AddIcon = require('@mui/icons-material/Add').default;
      renderWithTheme(<Icon type="svg" icon={AddIcon} size="inherit" />);
      expect(document.querySelector('svg')).toBeInTheDocument();
    });

    it('SVG icon accepts sx prop', () => {
      const AddIcon = require('@mui/icons-material/Add').default;
      renderWithTheme(<Icon type="svg" icon={AddIcon} sx={{ color: 'primary.main' }} />);
      expect(document.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('returns null for unknown type', () => {
    it('renders null when type is not svg or font', () => {
      const { container } = renderWithTheme(<Icon type={'unknown' as any} iconName="add" />);
      // No icon element should be rendered
      expect(container.querySelector('.MuiIcon-root')).not.toBeInTheDocument();
      expect(container.querySelector('svg')).not.toBeInTheDocument();
    });
  });
});
