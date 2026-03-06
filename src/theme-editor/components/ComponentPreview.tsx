/**
 * ComponentPreview Component
 * Live preview of MUI components with current theme
 */

import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Alert,
  TextField,
  Typography,
  Paper,
  Stack,
  Grid,
  Switch,
  Checkbox,
  Radio,
  FormControlLabel,
  Tab,
  Tabs,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { useThemeParser } from '../hooks/useThemeParser';

interface ComponentPreviewProps {
  dialogOpen?: boolean;
  onDialogClose?: () => void;
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({ dialogOpen = false }) => {
  const { mode } = useThemeParser();
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [openDialog, setOpenDialog] = React.useState(dialogOpen);

  React.useEffect(() => {
    setOpenDialog(dialogOpen);
  }, [dialogOpen]);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Box>
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="subtitle2" color="textSecondary">
          Live Preview ({mode} mode) - Components with current theme
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        {/* Buttons */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                Buttons
              </Typography>

              <Stack direction="row" spacing={2} sx={{ mb: 2, flexWrap: 'wrap' }}>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="text">Text</Button>
                <Button variant="contained" disabled>
                  Disabled
                </Button>
                <Button variant="contained" size="small">
                  Small
                </Button>
                <Button variant="contained" size="large">
                  Large
                </Button>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
                <Button variant="contained" color="error">
                  Error
                </Button>
                <Button variant="contained" color="warning">
                  Warning
                </Button>
                <Button variant="contained" color="info">
                  Info
                </Button>
                <Button variant="contained" color="success">
                  Success
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Text Fields */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                Text Inputs
              </Typography>

              <Stack spacing={2}>
                <TextField label="Standard" variant="standard" />
                <TextField label="Outlined" variant="outlined" />
                <TextField label="Filled" variant="filled" />
                <TextField label="Disabled" disabled variant="outlined" />
                <TextField label="Error" error helperText="Error message" variant="outlined" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Chips */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                Chips
              </Typography>

              <Stack direction="row" spacing={2} sx={{ mb: 2, flexWrap: 'wrap' }}>
                <Chip label="Default" />
                <Chip label="Outlined" variant="outlined" />
                <Chip label="Filled" variant="filled" />
                <Chip label="Clickable" onClick={() => {}} />
                <Chip label="Deletable" onDelete={() => {}} />
              </Stack>

              <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
                <Chip label="Primary" color="primary" />
                <Chip label="Error" color="error" />
                <Chip label="Warning" color="warning" />
                <Chip label="Success" color="success" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Alerts */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                Alerts
              </Typography>

              <Stack spacing={2}>
                <Alert severity="success">Success alert message</Alert>
                <Alert severity="info">Info alert message</Alert>
                <Alert severity="warning">Warning alert message</Alert>
                <Alert severity="error">Error alert message</Alert>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Selection Controls */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                Selection Controls
              </Typography>

              <Stack spacing={1}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Checkbox" />
                <FormControlLabel control={<Radio defaultChecked />} label="Radio" />
                <FormControlLabel control={<Switch defaultChecked />} label="Switch" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Tabs */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                Tabs
              </Typography>

              <Tabs value={selectedTab} onChange={handleTabChange}>
                <Tab label="Tab 1" />
                <Tab label="Tab 2" />
                <Tab label="Tab 3" />
              </Tabs>

              <Box sx={{ p: 2, backgroundColor: 'action.hover', mt: 1, borderRadius: 1 }}>
                <Typography>Tab {selectedTab + 1} content</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Typography */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
                Typography
              </Typography>

              <Typography variant="h1">Heading 1</Typography>
              <Typography variant="h2">Heading 2</Typography>
              <Typography variant="h3">Heading 3</Typography>
              <Typography variant="body1" sx={{ my: 2 }}>
                Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Secondary body text
              </Typography>
              <Typography variant="caption" display="block" sx={{ mt: 2 }}>
                Caption text
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Dialog Example */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Theme Editor Preview</DialogTitle>
        <DialogContent>
          <Typography sx={{ mt: 2 }}>
            This dialog demonstrates how the current theme is applied to dialogs. All styling is
            inherited from your theme configuration.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={() => setOpenDialog(false)} variant="contained">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
