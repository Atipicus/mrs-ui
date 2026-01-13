# Timeline Component

The Timeline component displays a list of events in chronological order. It's built on Material-UI Lab Timeline and follows the MRS Design System patterns.

## Import

```tsx
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from 'mrs-design-system';
```

## Basic Usage

```tsx
<Timeline position="left">
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Typography variant="h6">Event Title</Typography>
      <Typography>Event description</Typography>
    </TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="primary" />
    </TimelineSeparator>
    <TimelineContent>
      <Typography variant="h6">Second Event</Typography>
      <Typography>Event description</Typography>
    </TimelineContent>
  </TimelineItem>
</Timeline>
```

## Component Structure

### Timeline (Container)

The main container component that holds all timeline items.

**Props:**

- `position` - Position where content appears: `'left'` | `'right'` | `'alternate'` | `'alternate-reverse'` (default: `'left'`)

### TimelineItem

Individual timeline item that contains separator and content.

**Props:**

- `position` - Override position for specific item: `'left'` | `'right'`

### TimelineSeparator

Container for the dot and connector line.

### TimelineDot

The dot indicating an event in the timeline.

**Props:**

- `color` - Color of the dot: `'inherit'` | `'grey'` | `'primary'` | `'secondary'` | `'error'` | `'info'` | `'success'` | `'warning'` (default: `'primary'`)
- `variant` - Style variant: `'filled'` | `'outlined'` (default: `'filled'`)
- `children` - Optional icon to display inside the dot

### TimelineConnector

The line connecting timeline dots.

### TimelineContent

The main content area of a timeline item.

### TimelineOppositeContent

Optional content displayed opposite to the main timeline content (useful for timestamps).

## Examples

### Alternating Timeline

```tsx
<Timeline position="alternate">
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>First event</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="secondary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Second event</TimelineContent>
  </TimelineItem>
</Timeline>
```

### With Opposite Content (Timestamps)

```tsx
<Timeline position="alternate">
  <TimelineItem>
    <TimelineOppositeContent color="text.secondary">9:00 AM</TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Typography variant="h6">Morning Meeting</Typography>
      <Typography>Team standup</Typography>
    </TimelineContent>
  </TimelineItem>
</Timeline>
```

### With Custom Icons

```tsx
<Timeline position="left">
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="success">
        <MaterialSymbol icon="check" />
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Task completed</TimelineContent>
  </TimelineItem>
</Timeline>
```

### Outlined Dots

```tsx
<Timeline position="left">
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Outlined dot</TimelineContent>
  </TimelineItem>
</Timeline>
```

### Color Variants

```tsx
<Timeline position="left">
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Primary</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="secondary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Secondary</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="success" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Success</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="error" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Error</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="warning" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Warning</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="info" />
    </TimelineSeparator>
    <TimelineContent>Info</TimelineContent>
  </TimelineItem>
</Timeline>
```

## Design Tokens

The Timeline component uses the following design tokens from the MRS Design System:

- **Primary dot color**: `#00686f` (verones - primary.main)
- **Font**: Nunito
- **Text color**: `rgba(0,0,0,0.6)` (text.secondary)
- **Dot size**: 16px (from MUI defaults)
- **Connector width**: 2px (from MUI defaults)

## Use Cases

1. **Process Workflows** - Display multi-step processes
2. **Order Tracking** - Show order status progression
3. **Activity Feeds** - Display user activity history
4. **Project Milestones** - Track project progress
5. **Event History** - Show chronological events

## Accessibility

- Uses semantic HTML list structure (`<ul>` and `<li>`)
- Supports keyboard navigation
- Proper color contrast for dots and content
- Compatible with screen readers

## Best Practices

1. **Use connectors wisely** - Only add `TimelineConnector` between items, not on the last item
2. **Consistent spacing** - Use Typography components for consistent text styling
3. **Icon size** - Keep icons in dots small (default 20px works well)
4. **Color meaning** - Use semantic colors (success, error, warning) to convey status
5. **Opposite content** - Use for timestamps or supplementary information

## Related Components

- [Typography](/docs/components-atoms-typography--docs) - For timeline content text
- [MaterialSymbol](/docs/components-atoms-materialsymbol--docs) - For icons in dots
- [Paper](/docs/components-atoms-paper--docs) - Can be used to wrap timeline content

## References

- [Material-UI Timeline Documentation](https://mui.com/material-ui/react-timeline/)
- [MRS Design System Documentation](https://github.com/madergk/mrs-design-system)
