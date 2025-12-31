import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { lightTheme, darkTheme } from '../theme/theme';

/**
 * Theme Switcher Demo
 *
 * This story demonstrates the complete dark mode implementation with all tokens properly applied.
 *
 * ## Features:
 * - 🌙 Complete dark mode theme
 * - 🎨 All component tokens (colors, spacing, typography)
 * - 🔄 Seamless theme switching
 * - ✅ Proper contrast ratios
 * - 📱 Material Design elevation system
 */
const meta: Meta = {
  title: 'Theme/Dark Mode',
  parameters: {
    docs: {
      description: {
        component:
          'Complete dark mode implementation using design tokens. All colors, components, and surfaces adapt to the selected theme.',
      },
    },
  },
};

export default meta;

const ThemeSwitcherDemo = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const currentTheme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
          p: 4,
        }}
      >
        <Stack spacing={4}>
          {/* Theme Toggle */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h4">🌙 Dark Mode Demo</Typography>
            <Button
              variant="contained"
              onClick={toggleTheme}
              startIcon={isDark ? '☀️' : '🌙'}
            >
              Switch to {isDark ? 'Light' : 'Dark'} Mode
            </Button>
          </Box>

          {/* Alerts */}
          <Paper elevation={1} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Alerts (All Variants)
            </Typography>
            <Stack spacing={2}>
              <Alert severity="error" variant="filled">
                Error Alert - Filled variant
              </Alert>
              <Alert severity="warning" variant="outlined">
                Warning Alert - Outlined variant
              </Alert>
              <Alert severity="info" variant="standard">
                Info Alert - Standard variant
              </Alert>
              <Alert severity="success" variant="filled">
                Success Alert - Filled variant
              </Alert>
            </Stack>
          </Paper>

          {/* Buttons */}
          <Paper elevation={1} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Buttons
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="primary">
                Primary
              </Button>
              <Button variant="contained" color="secondary">
                Secondary
              </Button>
              <Button variant="outlined" color="error">
                Error
              </Button>
              <Button variant="text" color="info">
                Info
              </Button>
            </Stack>
          </Paper>

          {/* Inputs */}
          <Paper elevation={1} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Text Fields
            </Typography>
            <Stack spacing={3}>
              <TextField
                label="Outlined (Default)"
                variant="outlined"
                defaultValue="Hello World"
                fullWidth
              />
              <TextField
                label="Filled Variant"
                variant="filled"
                defaultValue="Hello World"
                fullWidth
              />
              <TextField
                label="Standard Variant"
                variant="standard"
                defaultValue="Hello World"
                fullWidth
              />
            </Stack>
          </Paper>

          {/* Chips */}
          <Paper elevation={1} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Chips
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Chip label="Default" />
              <Chip label="Primary" color="primary" />
              <Chip label="Secondary" color="secondary" />
              <Chip label="Success" color="success" />
              <Chip label="Deletable" onDelete={() => {}} />
              <Chip label="Outlined" variant="outlined" />
            </Stack>
          </Paper>

          {/* Elevation Showcase */}
          <Box>
            <Typography variant="h6" gutterBottom>
              Material Design Elevation System
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap">
              {[0, 1, 2, 4, 6, 8].map((elevation) => (
                <Paper
                  key={elevation}
                  elevation={elevation}
                  sx={{
                    p: 3,
                    minWidth: 150,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="body2">Elevation {elevation}</Typography>
                </Paper>
              ))}
            </Stack>
          </Box>

          {/* Cards */}
          <Box>
            <Typography variant="h6" gutterBottom>
              Cards
            </Typography>
            <Stack direction="row" spacing={2}>
              <Card sx={{ minWidth: 200 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Card Title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is a card with proper elevation and border radius tokens.
                  </Typography>
                </CardContent>
              </Card>
              <Card elevation={4} sx={{ minWidth: 200 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Elevated Card
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Higher elevation for emphasis.
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Box>

          {/* Typography */}
          <Paper elevation={1} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Typography Scale
            </Typography>
            <Stack spacing={1}>
              <Typography variant="h1">Heading 1</Typography>
              <Typography variant="h2">Heading 2</Typography>
              <Typography variant="h3">Heading 3</Typography>
              <Typography variant="h4">Heading 4</Typography>
              <Typography variant="body1">
                Body 1 - Regular text with proper contrast
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Body 2 - Secondary text color
              </Typography>
              <Typography variant="caption" color="text.disabled">
                Caption - Disabled text color
              </Typography>
            </Stack>
          </Paper>

          {/* Background Info */}
          <Paper elevation={1} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Current Theme Info
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2">
                <strong>Mode:</strong> {isDark ? 'Dark' : 'Light'}
              </Typography>
              <Typography variant="body2">
                <strong>Background Default:</strong>{' '}
                {currentTheme.palette.background.default}
              </Typography>
              <Typography variant="body2">
                <strong>Background Paper:</strong>{' '}
                {currentTheme.palette.background.paper}
              </Typography>
              <Typography variant="body2">
                <strong>Primary Main:</strong> {currentTheme.palette.primary.main}
              </Typography>
              <Typography variant="body2">
                <strong>Text Primary:</strong> {currentTheme.palette.text.primary}
              </Typography>
            </Stack>
          </Paper>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export const Interactive: StoryObj = {
  render: () => <ThemeSwitcherDemo />,
};

export const LightMode: StoryObj = {
  render: () => (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Box sx={{ p: 4, bgcolor: 'background.default', minHeight: '100vh' }}>
        <Stack spacing={3}>
          <Typography variant="h4">☀️ Light Mode</Typography>
          <Alert severity="info">Light mode using semantic color tokens</Alert>
          <Stack direction="row" spacing={2}>
            <Button variant="contained">Primary</Button>
            <Button variant="outlined">Outlined</Button>
          </Stack>
          <TextField label="Text Field" variant="outlined" />
        </Stack>
      </Box>
    </ThemeProvider>
  ),
};

export const DarkMode: StoryObj = {
  render: () => (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ p: 4, bgcolor: 'background.default', minHeight: '100vh' }}>
        <Stack spacing={3}>
          <Typography variant="h4">🌙 Dark Mode</Typography>
          <Alert severity="info">Dark mode using semantic color tokens</Alert>
          <Stack direction="row" spacing={2}>
            <Button variant="contained">Primary</Button>
            <Button variant="outlined">Outlined</Button>
          </Stack>
          <TextField label="Text Field" variant="outlined" />
        </Stack>
      </Box>
    </ThemeProvider>
  ),
};

