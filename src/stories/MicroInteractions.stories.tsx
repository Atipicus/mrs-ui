import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import { RippleButton } from '../components/effects/RippleButton';
import { AnimatedBadge } from '../components/effects/AnimatedBadge';
import { LoadingDots } from '../components/effects/LoadingDots';
import {
  useShake,
  useBounce,
  useHoverScale,
  usePulse,
} from '../hooks/animations';

/**
 * Micro-Interactions Library
 *
 * A collection of reusable micro-interactions, hooks, and components
 * for creating engaging user experiences.
 *
 * ## Philosophy
 *
 * Micro-interactions provide:
 * - **Immediate Feedback**: Users know their action was registered
 * - **Visual Delight**: Small moments of joy that improve UX
 * - **State Communication**: Show system status through motion
 * - **Guidance**: Direct user attention where needed
 *
 * ## Components
 *
 * All micro-interactions use design tokens for consistent timing and easing.
 */
const meta: Meta = {
  title: 'Micro-Interactions/Overview',
  parameters: {
    docs: {
      description: {
        component:
          'Complete micro-interactions library with hooks and components for engaging user experiences.',
      },
    },
  },
};

export default meta;

/**
 * Ripple Effect Demo
 */
export const RippleEffect: StoryObj = {
  render: () => (
    <Paper elevation={1} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        💧 Ripple Effect
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Material Design ripple effect for tactile feedback
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <RippleButton variant="contained" color="primary">
          Click for Ripple
        </RippleButton>
        <RippleButton variant="contained" color="secondary">
          Secondary Ripple
        </RippleButton>
        <RippleButton variant="outlined" color="error">
          Outlined Ripple
        </RippleButton>
        <RippleButton variant="text" color="info">
          Text Ripple
        </RippleButton>
      </Stack>
    </Paper>
  ),
};

/**
 * Shake Animation Demo
 */
export const ShakeAnimation: StoryObj = {
  render: () => {
    const { ref, shake } = useShake<HTMLDivElement>();
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
      if (!email.includes('@')) {
        shake();
      }
    };

    return (
      <Paper elevation={1} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          🔔 Shake Animation
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Useful for error feedback and invalid inputs
        </Typography>
        <Box ref={ref}>
          <Stack spacing={2}>
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              helperText="Enter an invalid email and click submit"
              fullWidth
            />
            <Button variant="contained" onClick={handleSubmit}>
              Submit (Shakes on error)
            </Button>
          </Stack>
        </Box>
      </Paper>
    );
  },
};

/**
 * Bounce Animation Demo
 */
export const BounceAnimation: StoryObj = {
  render: () => {
    const { ref, bounce } = useBounce<HTMLButtonElement>();

    return (
      <Paper elevation={1} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          ⚡ Bounce Animation
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Playful bounce effect for success actions
        </Typography>
        <Button ref={ref} variant="contained" color="success" onClick={bounce}>
          Click to Bounce!
        </Button>
      </Paper>
    );
  },
};

/**
 * Hover Scale Demo
 */
export const HoverScale: StoryObj = {
  render: () => {
    const card1 = useHoverScale({ scale: 1.05 });
    const card2 = useHoverScale({ scale: 1.1 });
    const card3 = useHoverScale({ scale: 1.15 });

    return (
      <Paper elevation={1} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          🔍 Hover Scale
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Smooth scale transitions on hover
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card
              elevation={2}
              onMouseEnter={card1.onMouseEnter}
              onMouseLeave={card1.onMouseLeave}
              sx={card1.style}
            >
              <CardContent>
                <Typography variant="h6">Scale 1.05</Typography>
                <Typography variant="body2" color="text.secondary">
                  Subtle hover effect
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              elevation={2}
              onMouseEnter={card2.onMouseEnter}
              onMouseLeave={card2.onMouseLeave}
              sx={card2.style}
            >
              <CardContent>
                <Typography variant="h6">Scale 1.1</Typography>
                <Typography variant="body2" color="text.secondary">
                  Medium hover effect
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              elevation={2}
              onMouseEnter={card3.onMouseEnter}
              onMouseLeave={card3.onMouseLeave}
              sx={card3.style}
            >
              <CardContent>
                <Typography variant="h6">Scale 1.15</Typography>
                <Typography variant="body2" color="text.secondary">
                  Strong hover effect
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    );
  },
};

/**
 * Pulse Animation Demo
 */
export const PulseAnimation: StoryObj = {
  render: () => {
    const pulseRef = usePulse<HTMLDivElement>({
      duration: 1000,
      scale: 1.05,
    });

    return (
      <Paper elevation={1} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          💓 Pulse Animation
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Continuous pulsing for attention-grabbing elements
        </Typography>
        <Box display="flex" justifyContent="center" py={4}>
          <Paper
            ref={pulseRef}
            elevation={3}
            sx={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Pulse
            </Typography>
          </Paper>
        </Box>
      </Paper>
    );
  },
};

/**
 * Animated Badge Demo
 */
export const AnimatedBadgeDemo: StoryObj = {
  render: () => {
    const [bounceCount, setBounceCount] = useState(0);
    const [pulseCount, setPulseCount] = useState(5);

    return (
      <Paper elevation={1} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          🔔 Animated Badge
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Badge with entrance animations and pulse effect
        </Typography>
        <Stack spacing={3}>
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Bounce on Change
            </Typography>
            <Stack direction="row" spacing={4} alignItems="center">
              <AnimatedBadge
                badgeContent={bounceCount}
                color="error"
                animationVariant="bounce"
              >
                <IconButton>
                  <span style={{ fontSize: 24 }}>📧</span>
                </IconButton>
              </AnimatedBadge>
              <Button variant="outlined" onClick={() => setBounceCount((c) => c + 1)}>
                Increment (+)
              </Button>
            </Stack>
          </Box>

          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Continuous Pulse
            </Typography>
            <Stack direction="row" spacing={4} alignItems="center">
              <AnimatedBadge
                badgeContent={pulseCount}
                color="error"
                animationVariant="pulse"
              >
                <IconButton>
                  <span style={{ fontSize: 24 }}>🔔</span>
                </IconButton>
              </AnimatedBadge>
              <Stack direction="row" spacing={1}>
                <Button variant="outlined" onClick={() => setPulseCount((c) => c + 1)}>
                  +
                </Button>
                <Button variant="outlined" onClick={() => setPulseCount((c) => Math.max(0, c - 1))}>
                  -
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Paper>
    );
  },
};

/**
 * Loading Dots Demo
 */
export const LoadingDotsDemo: StoryObj = {
  render: () => (
    <Paper elevation={1} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        ⏳ Loading Dots
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Animated three-dot loading indicator
      </Typography>
      <Stack spacing={3}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Sizes
          </Typography>
          <Stack direction="row" spacing={4} alignItems="center">
            <Box>
              <Typography variant="caption" display="block" mb={1}>
                Small
              </Typography>
              <LoadingDots size="small" />
            </Box>
            <Box>
              <Typography variant="caption" display="block" mb={1}>
                Medium
              </Typography>
              <LoadingDots size="medium" />
            </Box>
            <Box>
              <Typography variant="caption" display="block" mb={1}>
                Large
              </Typography>
              <LoadingDots size="large" />
            </Box>
          </Stack>
        </Box>

        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Colors
          </Typography>
          <Stack direction="row" spacing={4} alignItems="center">
            <LoadingDots color="primary" />
            <LoadingDots color="secondary" />
            <LoadingDots color="error" />
            <LoadingDots color="warning" />
            <LoadingDots color="info" />
            <LoadingDots color="success" />
          </Stack>
        </Box>
      </Stack>
    </Paper>
  ),
};

/**
 * All Interactions Demo
 */
export const AllInteractions: StoryObj = {
  render: () => {
    const { ref: shakeRef, shake } = useShake<HTMLDivElement>();
    const { ref: bounceRef, bounce } = useBounce<HTMLButtonElement>();
    const pulseRef = usePulse<HTMLDivElement>();
    const hoverScale = useHoverScale();
    const [badgeCount, setBadgeCount] = useState(3);

    return (
      <Stack spacing={3}>
        <RippleEffect.render />
        <ShakeAnimation.render />
        <BounceAnimation.render />
        <HoverScale.render />
        <PulseAnimation.render />
        <AnimatedBadgeDemo.render />
        <LoadingDotsDemo.render />
      </Stack>
    );
  },
};

