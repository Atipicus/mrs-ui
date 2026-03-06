/**
 * SyncDialog Component
 * Shows progress of sync operation with steps
 */

import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Alert,
  Paper,
  Stack,
  LinearProgress,
  CircularProgress,
} from '@mui/material';
interface SyncDialogProps {
  open: boolean;
  onClose: () => void;
  isLoading?: boolean;
  status?: 'idle' | 'syncing' | 'success' | 'error';
  commitHash?: string | null | undefined;
  error?: string;
}

const SYNC_STEPS = ['Regenerate Tokens', 'Update Files', 'Commit to Git', 'Complete'];

export const SyncDialog: React.FC<SyncDialogProps> = ({
  open,
  onClose,
  status = 'idle',
  commitHash,
  error,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (status === 'syncing') {
      // Simulate step progression
      const interval = setInterval(() => {
        setActiveStep((prev) => Math.min(prev + 1, SYNC_STEPS.length));
      }, 400);
      return () => clearInterval(interval);
    } else if (status === 'success') {
      setActiveStep(SYNC_STEPS.length);
    }
    // If error or idle, stay on current step
    return undefined;
  }, [status]);

  const isSuccess = status === 'success';
  const isError = status === 'error';
  const isSyncing = status === 'syncing';

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {isSuccess
          ? '✅ Sync Complete'
          : isError
            ? '❌ Sync Failed'
            : isSyncing
              ? '⏳ Syncing Theme'
              : 'Sync Theme'}
      </DialogTitle>

      <DialogContent>
        <Stack spacing={3} sx={{ mt: 2 }}>
          {/* Progress stepper */}
          <Box sx={{ position: 'relative' }}>
            {isSyncing && (
              <LinearProgress sx={{ position: 'absolute', bottom: 0, width: '100%' }} />
            )}
            <Stepper
              activeStep={Math.min(activeStep, SYNC_STEPS.length - 1)}
              orientation="vertical"
            >
              {SYNC_STEPS.map((label, index) => (
                <Step key={label} completed={index < activeStep}>
                  <StepLabel
                    sx={{
                      '& .MuiStepLabel-label': {
                        fontSize: '0.95rem',
                      },
                    }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

          {/* Success message */}
          {isSuccess && commitHash && (
            <Alert severity="success" sx={{ mt: 2 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                Theme synced successfully!
              </Typography>
              <Paper
                variant="outlined"
                sx={{
                  p: 1,
                  backgroundColor: 'action.hover',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                  mt: 1,
                }}
              >
                <strong>Commit:</strong> {commitHash}
              </Paper>
              <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                Ready for PR review
              </Typography>
            </Alert>
          )}

          {/* Error message */}
          {isError && error && (
            <Alert severity="error">
              <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                Sync failed
              </Typography>
              <Typography variant="caption">{error}</Typography>
            </Alert>
          )}

          {/* Current step details */}
          {isSyncing && (
            <Box sx={{ textAlign: 'center' }}>
              <CircularProgress size={40} sx={{ mb: 2 }} />
              <Typography variant="body2" color="textSecondary">
                {SYNC_STEPS[Math.min(activeStep, SYNC_STEPS.length - 1)]}...
              </Typography>
            </Box>
          )}

          {/* Next steps info */}
          {isSuccess && (
            <Alert severity="info">
              <Typography variant="caption">
                <strong>Next:</strong> Your team can review the changes in a GitHub PR before
                merging
              </Typography>
            </Alert>
          )}
        </Stack>
      </DialogContent>

      <DialogActions>
        {!isSyncing && (
          <Button onClick={onClose} variant={isSuccess ? 'contained' : 'outlined'}>
            {isSuccess ? 'Done' : 'Close'}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
