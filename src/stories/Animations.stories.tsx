import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import Chip from '@mui/material/Chip';
import Skeleton from '@mui/material/Skeleton';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import * as tokens from '../tokens/generated/ts/tokens';

/**
 * Animation & Transition Tokens Demo
 *
 * This story showcases the animation and transition tokens from the design system.
 *
 * ## Motion System
 *
 * The MRS Design System follows Material Design Motion guidelines with:
 * - **Duration tokens**: instant, fast (100ms), base (200ms), moderate (300ms), slow (400ms), slower (500ms)
 * - **Easing tokens**: standard, emphasized, decelerate, accelerate, sharp, easeIn, easeOut, easeInOut
 * - **Component transitions**: Pre-configured transitions for each component
 *
 * ## Token Usage
 *
 * All animation tokens are available in multiple formats:
 * - TypeScript: `PrimitivesMotionDurationBase` → `"200ms"`
 * - CSS Variables: `var(--mrs-primitives-motion-duration-base)` → `200ms`
 * - SCSS: `$mrs-primitives-motion-duration-base` → `200ms`
 */
const meta: Meta = {
  title: 'Theme/Animations & Transitions',
  parameters: {
    docs: {
      description: {
        component:
          'Complete animation and transition token system following Material Design Motion guidelines.',
      },
    },
  },
};

export default meta;

const TokenDisplay = ({ label, value }: { label: string; value: string }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      p: 1,
      borderBottom: '1px solid',
      borderColor: 'divider',
    }}
  >
    <Typography variant="body2" fontFamily="monospace">
      {label}
    </Typography>
    <Typography variant="body2" color="text.secondary" fontFamily="monospace">
      {value}
    </Typography>
  </Box>
);

const TransitionDemo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Stack spacing={4}>
      {/* Duration Tokens */}
      <Paper elevation={1} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          ⏱️ Duration Tokens
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Standard timing values for animations and transitions
        </Typography>
        <Stack spacing={0}>
          <TokenDisplay label="instant" value={tokens.PrimitivesMotionDurationInstant} />
          <TokenDisplay label="fast" value={tokens.PrimitivesMotionDurationFast} />
          <TokenDisplay label="base" value={tokens.PrimitivesMotionDurationBase} />
          <TokenDisplay label="moderate" value={tokens.PrimitivesMotionDurationModerate} />
          <TokenDisplay label="slow" value={tokens.PrimitivesMotionDurationSlow} />
          <TokenDisplay label="slower" value={tokens.PrimitivesMotionDurationSlower} />
        </Stack>
      </Paper>

      {/* Easing Tokens */}
      <Paper elevation={1} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          📈 Easing Functions
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Cubic Bezier curves for smooth motion
        </Typography>
        <Stack spacing={0}>
          <TokenDisplay label="standard" value={tokens.PrimitivesMotionEasingStandard} />
          <TokenDisplay label="emphasized" value={tokens.PrimitivesMotionEasingEmphasized} />
          <TokenDisplay label="decelerate" value={tokens.PrimitivesMotionEasingDecelerate} />
          <TokenDisplay label="accelerate" value={tokens.PrimitivesMotionEasingAccelerate} />
          <TokenDisplay label="sharp" value={tokens.PrimitivesMotionEasingSharp} />
        </Stack>
      </Paper>

      {/* MUI Transitions Demo */}
      <Paper elevation={1} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          🎭 Material-UI Transitions
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Common transition components with our motion tokens
        </Typography>

        <Button variant="contained" onClick={() => setChecked((prev) => !prev)} sx={{ mb: 2 }}>
          Toggle Animations
        </Button>

        <Stack spacing={3}>
          {/* Fade */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Fade
            </Typography>
            <Fade in={checked} timeout={200}>
              <Paper elevation={2} sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
                <Typography>Fade Animation ({tokens.PrimitivesMotionDurationBase})</Typography>
              </Paper>
            </Fade>
          </Box>

          {/* Grow */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Grow
            </Typography>
            <Grow in={checked} timeout={300}>
              <Paper elevation={2} sx={{ p: 2, bgcolor: 'secondary.main', color: 'black' }}>
                <Typography>Grow Animation ({tokens.PrimitivesMotionDurationModerate})</Typography>
              </Paper>
            </Grow>
          </Box>

          {/* Slide */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Slide
            </Typography>
            <Slide in={checked} direction="up" timeout={300}>
              <Paper elevation={2} sx={{ p: 2, bgcolor: 'info.main', color: 'white' }}>
                <Typography>Slide Animation ({tokens.PrimitivesMotionDurationModerate})</Typography>
              </Paper>
            </Slide>
          </Box>

          {/* Zoom */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Zoom
            </Typography>
            <Zoom in={checked} timeout={200}>
              <Paper elevation={2} sx={{ p: 2, bgcolor: 'success.main', color: 'white' }}>
                <Typography>Zoom Animation ({tokens.PrimitivesMotionDurationBase})</Typography>
              </Paper>
            </Zoom>
          </Box>

          {/* Collapse */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Collapse
            </Typography>
            <Collapse in={checked} timeout={300}>
              <Paper elevation={2} sx={{ p: 2, bgcolor: 'warning.main', color: 'black' }}>
                <Typography>
                  Collapse Animation ({tokens.PrimitivesMotionDurationModerate})
                </Typography>
              </Paper>
            </Collapse>
          </Box>
        </Stack>
      </Paper>

      {/* Component Transitions */}
      <Paper elevation={1} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          🎨 Component Transition Tokens
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Pre-configured transitions for common components
        </Typography>
        <Stack spacing={0}>
          <TokenDisplay label="Button default" value={tokens.ComponentButtonTransitionDefault} />
          <TokenDisplay label="Dialog enter" value={tokens.ComponentDialogTransitionEnter} />
          <TokenDisplay label="Drawer enter" value={tokens.ComponentDrawerTransitionEnter} />
          <TokenDisplay label="Snackbar enter" value={tokens.ComponentSnackbarTransitionEnter} />
          <TokenDisplay label="Tooltip enter" value={tokens.ComponentTooltipTransitionEnter} />
        </Stack>
      </Paper>

      {/* Interactive Components */}
      <Paper elevation={1} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          🎯 Interactive Component Animations
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Components with smooth transitions
        </Typography>

        <Stack spacing={3}>
          {/* Switch */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Switch ({tokens.PrimitivesMotionDurationFast})
            </Typography>
            <Stack direction="row" spacing={2}>
              <Switch defaultChecked />
              <Switch />
              <Switch disabled />
            </Stack>
          </Box>

          {/* Checkbox */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Checkbox ({tokens.PrimitivesMotionDurationFast})
            </Typography>
            <Stack direction="row" spacing={2}>
              <Checkbox defaultChecked />
              <Checkbox />
              <Checkbox indeterminate />
              <Checkbox disabled />
            </Stack>
          </Box>

          {/* Radio */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Radio ({tokens.PrimitivesMotionDurationFast})
            </Typography>
            <Stack direction="row" spacing={2}>
              <Radio checked />
              <Radio />
              <Radio disabled />
            </Stack>
          </Box>

          {/* Chips */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Chips ({tokens.PrimitivesMotionDurationFast})
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Chip label="Clickable" onClick={() => {}} />
              <Chip label="Deletable" onDelete={() => {}} />
              <Chip label="Primary" color="primary" />
              <Chip label="Secondary" color="secondary" />
            </Stack>
          </Box>
        </Stack>
      </Paper>

      {/* Loading Animations */}
      <Paper elevation={1} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          ⏳ Loading Animations
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Continuous animations for loading states
        </Typography>

        <Stack spacing={3}>
          {/* Skeleton */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Skeleton (Pulse: {tokens.ComponentSkeletonAnimationPulseDuration})
            </Typography>
            <Stack spacing={1}>
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="rectangular" height={60} />
              <Skeleton variant="circular" width={40} height={40} />
            </Stack>
          </Box>

          {/* Progress */}
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Progress ({tokens.ComponentProgressAnimationIndeterminateDuration})
            </Typography>
            <Stack spacing={2}>
              <LinearProgress />
              <Box display="flex" gap={2}>
                <CircularProgress size={24} />
                <CircularProgress size={32} />
                <CircularProgress size={40} />
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Paper>

      {/* Accordion */}
      <Paper elevation={1} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          📁 Accordion Transitions
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Expand: {tokens.ComponentAccordionTransitionExpand} / Collapse:{' '}
          {tokens.ComponentAccordionTransitionCollapse}
        </Typography>

        <Stack spacing={1}>
          <Accordion>
            <AccordionSummary>
              <Typography>Accordion Panel 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This accordion uses smooth expand/collapse transitions based on our motion tokens.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography>Accordion Panel 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The transition combines height animation with Material Design easing functions.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Paper>

      {/* Button Hover Demo */}
      <Paper elevation={1} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          🎯 Hover & Focus Transitions
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Button transition: {tokens.ComponentButtonTransitionDefault}
        </Typography>

        <Stack direction="row" spacing={2} flexWrap="wrap">
          <Button variant="contained">Hover Me</Button>
          <Button variant="outlined">Hover Me</Button>
          <Button variant="text">Hover Me</Button>
          <Button variant="contained" color="secondary">
            Hover Me
          </Button>
          <Button variant="contained" color="error">
            Hover Me
          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
};

export const Overview: StoryObj = {
  render: () => <TransitionDemo />,
};

export const DurationComparison: StoryObj = {
  render: () => {
    const [activeSpeed, setActiveSpeed] = useState<string | null>(null);

    const speeds = [
      { label: 'Instant', value: 0, token: tokens.PrimitivesMotionDurationInstant },
      { label: 'Fast', value: 100, token: tokens.PrimitivesMotionDurationFast },
      { label: 'Base', value: 200, token: tokens.PrimitivesMotionDurationBase },
      { label: 'Moderate', value: 300, token: tokens.PrimitivesMotionDurationModerate },
      { label: 'Slow', value: 400, token: tokens.PrimitivesMotionDurationSlow },
      { label: 'Slower', value: 500, token: tokens.PrimitivesMotionDurationSlower },
    ];

    return (
      <Stack spacing={3}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            ⏱️ Duration Comparison
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Click a button to see the difference in animation speed
          </Typography>

          <Stack spacing={2}>
            {speeds.map(({ label, value, token }) => (
              <Box key={label}>
                <Button
                  variant="contained"
                  onClick={() => {
                    setActiveSpeed(label);
                    setTimeout(() => setActiveSpeed(null), value + 100);
                  }}
                  sx={{ mb: 1, minWidth: 140 }}
                >
                  {label} ({token})
                </Button>
                <Fade in={activeSpeed === label} timeout={value}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 2,
                      bgcolor: 'primary.main',
                      color: 'white',
                      height: 60,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography>Animated with {label} duration</Typography>
                  </Paper>
                </Fade>
              </Box>
            ))}
          </Stack>
        </Paper>
      </Stack>
    );
  },
};

export const EasingComparison: StoryObj = {
  render: () => {
    const [activeEasing, setActiveEasing] = useState<string | null>(null);

    const easings = [
      { label: 'Standard', token: tokens.PrimitivesMotionEasingStandard },
      { label: 'Emphasized', token: tokens.PrimitivesMotionEasingEmphasized },
      { label: 'Decelerate', token: tokens.PrimitivesMotionEasingDecelerate },
      { label: 'Accelerate', token: tokens.PrimitivesMotionEasingAccelerate },
      { label: 'Sharp', token: tokens.PrimitivesMotionEasingSharp },
    ];

    return (
      <Stack spacing={3}>
        <Paper elevation={1} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            📈 Easing Function Comparison
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Click a button to see different easing curves in action
          </Typography>

          <Stack spacing={2}>
            {easings.map(({ label, token }) => (
              <Box key={label}>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setActiveEasing(label);
                    setTimeout(() => setActiveEasing(null), 500);
                  }}
                  sx={{ mb: 1, minWidth: 180 }}
                >
                  {label} ({token})
                </Button>
                <Box
                  sx={{
                    height: 60,
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      position: 'absolute',
                      left: activeEasing === label ? 'calc(100% - 60px)' : 0,
                      top: 0,
                      width: 60,
                      height: 60,
                      bgcolor: 'secondary.main',
                      transition: `left 500ms ${token}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="caption">→</Typography>
                  </Paper>
                </Box>
              </Box>
            ))}
          </Stack>
        </Paper>
      </Stack>
    );
  },
};
