/**
 * SaveDialog Component
 * Confirmation and preview dialog before saving theme changes
 */

import React, { useMemo } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  Paper,
  Stack,
  Divider,
  Checkbox,
  FormControlLabel,
  Alert,
} from '@mui/material';
import type { ThemeParsed } from '../hooks/useThemeParser';
import { useFileSystem } from '../hooks/useFileSystem';

interface SaveDialogProps {
  open: boolean;
  onConfirm: () => Promise<void>;
  onCancel: () => void;
  edits: Partial<ThemeParsed>;
  mode: 'light' | 'dark';
  isLoading?: boolean;
}

export const SaveDialog: React.FC<SaveDialogProps> = ({
  open,
  onConfirm,
  onCancel,
  edits,
  mode,
  isLoading = false,
}) => {
  const [createBackup, setCreateBackup] = React.useState(true);
  const { generateChangesSummary, generateCommitMessage } = useFileSystem();

  // Calculate summary
  const summary = useMemo(() => {
    return generateChangesSummary(edits);
  }, [edits, generateChangesSummary]);

  const commitMessage = useMemo(() => {
    return generateCommitMessage(edits, mode);
  }, [edits, mode, generateCommitMessage]);

  // Count changes
  const changeCount = useMemo(() => {
    let count = 0;
    if (edits.colors?.light) count += Object.keys(edits.colors.light).length;
    if (edits.colors?.dark) count += Object.keys(edits.colors.dark).length;
    if (edits.typography?.length) count += edits.typography.length;
    if (edits.spacing?.length) count += edits.spacing.length;
    if (edits.shape?.length) count += edits.shape.length;
    return count;
  }, [edits]);

  return (
    <Dialog open={open} onClose={onCancel} maxWidth="sm" fullWidth>
      <DialogTitle>Save Theme Changes</DialogTitle>

      <DialogContent>
        <Stack spacing={3} sx={{ mt: 2 }}>
          {/* Summary Alert */}
          <Alert severity="info">
            <strong>Summary:</strong> {summary}
            <br />
            <strong>Total changes:</strong> {changeCount}
          </Alert>

          {/* Changes breakdown */}
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
              Changes to be saved:
            </Typography>

            {edits.colors && (
              <Box>
                <Typography variant="caption" color="textSecondary">
                  Colors: {Object.keys(edits.colors.light || {}).length + Object.keys(edits.colors.dark || {}).length}
                </Typography>
              </Box>
            )}

            {edits.typography?.length && (
              <Box>
                <Typography variant="caption" color="textSecondary">
                  Typography variants: {edits.typography.length}
                </Typography>
              </Box>
            )}

            {edits.spacing?.length && (
              <Box>
                <Typography variant="caption" color="textSecondary">
                  Spacing values: {edits.spacing.length}
                </Typography>
              </Box>
            )}

            {edits.shape?.length && (
              <Box>
                <Typography variant="caption" color="textSecondary">
                  Shape values: {edits.shape.length}
                </Typography>
              </Box>
            )}
          </Box>

          <Divider />

          {/* File info */}
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
              File details:
            </Typography>
            <Paper variant="outlined" sx={{ p: 1.5, backgroundColor: 'action.hover' }}>
              <Typography variant="caption" display="block" sx={{ fontFamily: 'monospace' }}>
                <strong>Target:</strong> src/theme/theme.ts
              </Typography>
              <Typography variant="caption" display="block" sx={{ fontFamily: 'monospace', mt: 0.5 }}>
                <strong>Mode:</strong> {mode}
              </Typography>
            </Paper>
          </Box>

          {/* Commit message preview */}
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
              Future commit message:
            </Typography>
            <Paper variant="outlined" sx={{ p: 1.5, backgroundColor: 'action.hover' }}>
              <Typography variant="caption" display="block" sx={{ fontFamily: 'monospace' }}>
                {commitMessage}
              </Typography>
            </Paper>
          </Box>

          {/* Backup option */}
          <FormControlLabel
            control={<Checkbox checked={createBackup} onChange={(e) => setCreateBackup(e.target.checked)} />}
            label="Create backup before saving (recommended)"
          />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onCancel} disabled={isLoading}>
          Cancel
        </Button>
        <Button onClick={onConfirm} variant="contained" disabled={isLoading} color="primary">
          {isLoading ? 'Saving...' : 'Save Theme'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
