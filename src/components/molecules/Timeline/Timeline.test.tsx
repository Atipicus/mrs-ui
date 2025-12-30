/**
 * Timeline Component Tests
 */

import React from 'react';
import { renderWithTheme } from '../../../../tests/test-utils';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from './Timeline';
import { MaterialSymbol } from '../../atoms/MaterialSymbol/MaterialSymbol';

describe('Timeline', () => {
  describe('Rendering', () => {
    it('should render with default props', () => {
      const { container } = renderWithTheme(
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      const timeline = container.querySelector('.MuiTimeline-root');
      expect(timeline).toBeInTheDocument();
    });

    it('should render with multiple items', () => {
      const { container } = renderWithTheme(
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Item 1</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Item 2</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Item 3</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      const items = container.querySelectorAll('.MuiTimelineItem-root');
      expect(items).toHaveLength(3);
    });

    it('should render as ul element', () => {
      const { container } = renderWithTheme(
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      const timeline = container.querySelector('.MuiTimeline-root');
      expect(timeline?.tagName).toBe('UL');
    });
  });

  describe('Position', () => {
    it('should render with left position (default)', () => {
      const { container } = renderWithTheme(
        <Timeline position="left">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      const timeline = container.querySelector('.MuiTimeline-root');
      expect(timeline).toHaveClass('MuiTimeline-positionLeft');
    });

    it('should render with right position', () => {
      const { container } = renderWithTheme(
        <Timeline position="right">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      const timeline = container.querySelector('.MuiTimeline-root');
      expect(timeline).toHaveClass('MuiTimeline-positionRight');
    });

    it('should render with alternate position', () => {
      const { container } = renderWithTheme(
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      const timeline = container.querySelector('.MuiTimeline-root');
      expect(timeline).toHaveClass('MuiTimeline-positionAlternate');
    });

    it('should render with alternate-reverse position', () => {
      const { container } = renderWithTheme(
        <Timeline position="alternate-reverse">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      const timeline = container.querySelector('.MuiTimeline-root');
      expect(timeline).toHaveClass('MuiTimeline-positionAlternateReverse');
    });
  });

  describe('TimelineItem', () => {
    it('should render TimelineItem correctly', () => {
      const { container } = renderWithTheme(
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      const item = container.querySelector('.MuiTimelineItem-root');
      expect(item).toBeInTheDocument();
    });

    it('should render as li element', () => {
      const { container } = renderWithTheme(
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      const item = container.querySelector('.MuiTimelineItem-root');
      expect(item?.tagName).toBe('LI');
    });
  });

  describe('TimelineDot', () => {
    it('should render with filled variant (default)', () => {
      const { container } = renderWithTheme(
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="filled" />
            </TimelineSeparator>
            <TimelineContent>Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      const dot = container.querySelector('.MuiTimelineDot-root');
      expect(dot).toHaveClass('MuiTimelineDot-filled');
    });

    it('should render with outlined variant', () => {
      const { container } = renderWithTheme(
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
            </TimelineSeparator>
            <TimelineContent>Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      const dot = container.querySelector('.MuiTimelineDot-root');
      expect(dot).toHaveClass('MuiTimelineDot-outlined');
    });

    it('should render with primary color (default)', () => {
      const { container } = renderWithTheme(
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
            </TimelineSeparator>
            <TimelineContent>Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      const dot = container.querySelector('.MuiTimelineDot-root');
      expect(dot).toHaveClass('MuiTimelineDot-filledPrimary');
    });

    it('should render with secondary color', () => {
      const { container } = renderWithTheme(
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
            </TimelineSeparator>
            <TimelineContent>Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      const dot = container.querySelector('.MuiTimelineDot-root');
      expect(dot).toHaveClass('MuiTimelineDot-filledSecondary');
    });

    it('should render with error color', () => {
      const { container } = renderWithTheme(
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="error" />
            </TimelineSeparator>
            <TimelineContent>Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      const dot = container.querySelector('.MuiTimelineDot-root');
      expect(dot).toHaveClass('MuiTimelineDot-filledError');
    });

    it('should render with success color', () => {
      const { container } = renderWithTheme(
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success" />
            </TimelineSeparator>
            <TimelineContent>Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      const dot = container.querySelector('.MuiTimelineDot-root');
      expect(dot).toHaveClass('MuiTimelineDot-filledSuccess');
    });

    it('should render with warning color', () => {
      const { container } = renderWithTheme(
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="warning" />
            </TimelineSeparator>
            <TimelineContent>Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      const dot = container.querySelector('.MuiTimelineDot-root');
      expect(dot).toHaveClass('MuiTimelineDot-filledWarning');
    });

    it('should render with info color', () => {
      const { container } = renderWithTheme(
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="info" />
            </TimelineSeparator>
            <TimelineContent>Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      const dot = container.querySelector('.MuiTimelineDot-root');
      expect(dot).toHaveClass('MuiTimelineDot-filledInfo');
    });

    it('should render with custom icon', () => {
      const { container } = renderWithTheme(
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot>
                <MaterialSymbol icon="check" />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      const dot = container.querySelector('.MuiTimelineDot-root');
      expect(dot).toBeInTheDocument();
      // Check that the dot has children (the icon)
      expect(dot?.children.length).toBeGreaterThan(0);
    });
  });

  describe('TimelineConnector', () => {
    it('should render TimelineConnector correctly', () => {
      const { container } = renderWithTheme(
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      const connector = container.querySelector('.MuiTimelineConnector-root');
      expect(connector).toBeInTheDocument();
    });
  });

  describe('TimelineContent', () => {
    it('should render TimelineContent correctly', () => {
      const { container } = renderWithTheme(
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Test Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      const content = container.querySelector('.MuiTimelineContent-root');
      expect(content).toBeInTheDocument();
      expect(content).toHaveTextContent('Test Content');
    });

    it('should render TimelineContent with children', () => {
      const { container } = renderWithTheme(
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <div>Custom content</div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      const content = container.querySelector('.MuiTimelineContent-root');
      expect(content).toBeInTheDocument();
      expect(content).toHaveTextContent('Custom content');
    });
  });

  describe('TimelineOppositeContent', () => {
    it('should render TimelineOppositeContent correctly', () => {
      const { container } = renderWithTheme(
        <Timeline>
          <TimelineItem>
            <TimelineOppositeContent>Opposite</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      const oppositeContent = container.querySelector('.MuiTimelineOppositeContent-root');
      expect(oppositeContent).toBeInTheDocument();
      expect(oppositeContent).toHaveTextContent('Opposite');
    });
  });

  describe('Ref Forwarding', () => {
    it('should forward ref to Timeline', () => {
      const ref = React.createRef<HTMLUListElement>();
      renderWithTheme(
        <Timeline ref={ref}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      expect(ref.current).toBeInstanceOf(HTMLUListElement);
    });

    it('should forward ref to TimelineItem', () => {
      const ref = React.createRef<HTMLLIElement>();
      renderWithTheme(
        <Timeline>
          <TimelineItem ref={ref}>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      expect(ref.current).toBeInstanceOf(HTMLLIElement);
    });

    it('should forward ref to TimelineDot', () => {
      const ref = React.createRef<HTMLSpanElement>();
      renderWithTheme(
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot ref={ref} />
            </TimelineSeparator>
            <TimelineContent>Content</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });
  });

  describe('Display Names', () => {
    it('should have correct display name for Timeline', () => {
      expect(Timeline.displayName).toBe('Timeline');
    });

    it('should have correct display name for TimelineItem', () => {
      expect(TimelineItem.displayName).toBe('TimelineItem');
    });

    it('should have correct display name for TimelineSeparator', () => {
      expect(TimelineSeparator.displayName).toBe('TimelineSeparator');
    });

    it('should have correct display name for TimelineDot', () => {
      expect(TimelineDot.displayName).toBe('TimelineDot');
    });

    it('should have correct display name for TimelineConnector', () => {
      expect(TimelineConnector.displayName).toBe('TimelineConnector');
    });

    it('should have correct display name for TimelineContent', () => {
      expect(TimelineContent.displayName).toBe('TimelineContent');
    });

    it('should have correct display name for TimelineOppositeContent', () => {
      expect(TimelineOppositeContent.displayName).toBe('TimelineOppositeContent');
    });
  });
});
