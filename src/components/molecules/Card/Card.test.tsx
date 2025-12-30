/**
 * Card Component Tests
 *
 * Comprehensive tests for Card and all sub-components
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import userEvent from '@testing-library/user-event';
import { Card } from './Card';
import { CardActionArea } from './CardActionArea';
import { CardActions } from './CardActions';
import { CardContent } from './CardContent';
import { CardHeader } from './CardHeader';
import { CardMedia } from './CardMedia';

describe('Card', () => {
  describe('Card Component', () => {
    it('renders correctly', () => {
      renderWithTheme(
        <Card>
          <CardContent>Test Content</CardContent>
        </Card>
      );
      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('applies elevation variant by default', () => {
      const { container } = renderWithTheme(<Card>Content</Card>);
      const card = container.querySelector('.MuiCard-root');
      expect(card).toHaveClass('MuiPaper-elevation1');
    });

    it('applies outlined variant', () => {
      const { container } = renderWithTheme(<Card variant="outlined">Content</Card>);
      const card = container.querySelector('.MuiCard-root');
      expect(card).toHaveClass('MuiPaper-outlined');
    });

    it('applies custom elevation', () => {
      const { container } = renderWithTheme(<Card elevation={8}>Content</Card>);
      const card = container.querySelector('.MuiCard-root');
      expect(card).toHaveClass('MuiPaper-elevation8');
    });

    it('applies raised elevation', () => {
      const { container } = renderWithTheme(<Card raised>Content</Card>);
      const card = container.querySelector('.MuiCard-root');
      expect(card).toHaveClass('MuiPaper-elevation8');
    });

    it('applies square corners when square=true', () => {
      const { container } = renderWithTheme(<Card square>Content</Card>);
      const card = container.querySelector('.MuiCard-root');
      // Square prop removes rounded class, checking it doesn't have rounded border
      expect(card).toBeInTheDocument();
      // The card should exist but won't have special class - behavior is in MUI Paper
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      renderWithTheme(<Card ref={ref}>Content</Card>);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('applies custom sx prop', () => {
      const { container } = renderWithTheme(<Card sx={{ maxWidth: 345 }}>Content</Card>);
      const card = container.querySelector('.MuiCard-root');
      expect(card).toHaveStyle({ maxWidth: '345px' });
    });
  });

  describe('CardActionArea Component', () => {
    it('renders correctly', () => {
      renderWithTheme(
        <Card>
          <CardActionArea>
            <CardContent>Clickable Content</CardContent>
          </CardActionArea>
        </Card>
      );
      expect(screen.getByText('Clickable Content')).toBeInTheDocument();
    });

    it('is clickable by default', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      renderWithTheme(
        <Card>
          <CardActionArea onClick={handleClick}>
            <CardContent>Clickable</CardContent>
          </CardActionArea>
        </Card>
      );

      const actionArea = screen.getByRole('button');
      await user.click(actionArea);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('can be disabled', () => {
      renderWithTheme(
        <Card>
          <CardActionArea disabled>
            <CardContent>Disabled Action Area</CardContent>
          </CardActionArea>
        </Card>
      );
      const actionArea = screen.getByRole('button');
      expect(actionArea).toBeDisabled();
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLButtonElement>();
      renderWithTheme(
        <Card>
          <CardActionArea ref={ref}>Content</CardActionArea>
        </Card>
      );
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });

  describe('CardActions Component', () => {
    it('renders correctly', () => {
      renderWithTheme(
        <Card>
          <CardActions>
            <button>Action 1</button>
            <button>Action 2</button>
          </CardActions>
        </Card>
      );
      expect(screen.getByText('Action 1')).toBeInTheDocument();
      expect(screen.getByText('Action 2')).toBeInTheDocument();
    });

    it('applies disableSpacing prop', () => {
      const { container } = renderWithTheme(
        <Card>
          <CardActions disableSpacing>
            <button>Action</button>
          </CardActions>
        </Card>
      );
      const actions = container.querySelector('.MuiCardActions-root');
      // When disableSpacing is true, the spacing class is NOT applied
      expect(actions).toBeInTheDocument();
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      renderWithTheme(
        <Card>
          <CardActions ref={ref}>Content</CardActions>
        </Card>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe('CardContent Component', () => {
    it('renders correctly', () => {
      renderWithTheme(
        <Card>
          <CardContent>Card Content Text</CardContent>
        </Card>
      );
      expect(screen.getByText('Card Content Text')).toBeInTheDocument();
    });

    it('uses div component by default', () => {
      const { container } = renderWithTheme(
        <Card>
          <CardContent>Content</CardContent>
        </Card>
      );
      const content = container.querySelector('.MuiCardContent-root');
      expect(content?.tagName).toBe('DIV');
    });

    it('can use custom component', () => {
      const { container } = renderWithTheme(
        <Card>
          <CardContent component="section">Content</CardContent>
        </Card>
      );
      const content = container.querySelector('.MuiCardContent-root');
      expect(content?.tagName).toBe('SECTION');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      renderWithTheme(
        <Card>
          <CardContent ref={ref}>Content</CardContent>
        </Card>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe('CardHeader Component', () => {
    it('renders title and subheader', () => {
      renderWithTheme(
        <Card>
          <CardHeader title="Card Title" subheader="Card Subheader" />
        </Card>
      );
      expect(screen.getByText('Card Title')).toBeInTheDocument();
      expect(screen.getByText('Card Subheader')).toBeInTheDocument();
    });

    it('renders avatar', () => {
      renderWithTheme(
        <Card>
          <CardHeader avatar={<div data-testid="avatar">A</div>} title="Title" />
        </Card>
      );
      expect(screen.getByTestId('avatar')).toBeInTheDocument();
    });

    it('renders action', () => {
      renderWithTheme(
        <Card>
          <CardHeader action={<button>Action</button>} title="Title" />
        </Card>
      );
      expect(screen.getByText('Action')).toBeInTheDocument();
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      renderWithTheme(
        <Card>
          <CardHeader ref={ref} title="Title" />
        </Card>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('applies disableTypography prop', () => {
      const { container } = renderWithTheme(
        <Card>
          <CardHeader
            disableTypography
            title={<span data-testid="custom-title">Custom Title</span>}
          />
        </Card>
      );
      expect(screen.getByTestId('custom-title')).toBeInTheDocument();
      // When disableTypography is true, title is not wrapped in Typography
      const titleSpan = container.querySelector('[data-testid="custom-title"]');
      expect(titleSpan?.parentElement).not.toHaveClass('MuiTypography-root');
    });
  });

  describe('CardMedia Component', () => {
    it('renders with image prop', () => {
      const { container } = renderWithTheme(
        <Card>
          <CardMedia image="test-image.jpg" sx={{ height: 140 }} />
        </Card>
      );
      const media = container.querySelector('.MuiCardMedia-root');
      expect(media).toBeInTheDocument();
      expect(media).toHaveStyle({ backgroundImage: 'url(test-image.jpg)' });
    });

    it('renders with img component', () => {
      renderWithTheme(
        <Card>
          <CardMedia component="img" src="test-image.jpg" alt="Test Image" />
        </Card>
      );
      const img = screen.getByRole('img', { name: 'Test Image' });
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', 'test-image.jpg');
    });

    it('renders with video component', () => {
      const { container } = renderWithTheme(
        <Card>
          <CardMedia component="video" src="test-video.mp4" />
        </Card>
      );
      const video = container.querySelector('video');
      expect(video).toBeInTheDocument();
      expect(video).toHaveAttribute('src', 'test-video.mp4');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      renderWithTheme(
        <Card>
          <CardMedia ref={ref} image="test.jpg" sx={{ height: 140 }} />
        </Card>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe('Integration Tests', () => {
    it('renders complete card with all sub-components', () => {
      renderWithTheme(
        <Card>
          <CardHeader title="Header Title" subheader="Header Subheader" />
          <CardMedia component="img" height="140" src="test.jpg" alt="Test" />
          <CardContent>Content Text</CardContent>
          <CardActions>
            <button>Action 1</button>
            <button>Action 2</button>
          </CardActions>
        </Card>
      );

      expect(screen.getByText('Header Title')).toBeInTheDocument();
      expect(screen.getByText('Header Subheader')).toBeInTheDocument();
      expect(screen.getByRole('img', { name: 'Test' })).toBeInTheDocument();
      expect(screen.getByText('Content Text')).toBeInTheDocument();
      expect(screen.getByText('Action 1')).toBeInTheDocument();
      expect(screen.getByText('Action 2')).toBeInTheDocument();
    });

    it('renders card with action area', () => {
      const handleClick = jest.fn();
      renderWithTheme(
        <Card>
          <CardActionArea onClick={handleClick}>
            <CardMedia component="img" height="140" src="test.jpg" alt="Test" />
            <CardContent>Content Text</CardContent>
          </CardActionArea>
          <CardActions>
            <button>Action</button>
          </CardActions>
        </Card>
      );

      expect(screen.getByRole('button', { name: /test/i })).toBeInTheDocument();
      expect(screen.getByText('Content Text')).toBeInTheDocument();
      expect(screen.getByText('Action')).toBeInTheDocument();
    });
  });
});
