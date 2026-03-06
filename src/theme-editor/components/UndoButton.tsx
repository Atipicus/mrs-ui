/**
 * UndoButton Component
 * Temporary button that appears after sync with countdown timer
 */

import React, { useState, useEffect } from 'react';
import { Button, Tooltip, Box, Typography } from '@mui/material';
import UndoIcon from '@mui/icons-material/Undo';

interface UndoButtonProps {
  visible: boolean;
  onUndo: () => Promise<void>;
  timeRemaining: number; // in seconds
}

export const UndoButton: React.FC<UndoButtonProps> = ({ visible, onUndo, timeRemaining }) => {
  const [isUndoing, setIsUndoing] = useState(false);
  const [displayTime, setDisplayTime] = useState(timeRemaining);

  useEffect(() => {
    setDisplayTime(timeRemaining);
  }, [timeRemaining]);

  useEffect(() => {
    if (!visible || displayTime <= 0) return;

    const timer = setInterval(() => {
      setDisplayTime((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [visible, displayTime]);

  const isExpired = displayTime <= 0;

  const handleUndo = async () => {
    setIsUndoing(true);
    try {
      await onUndo();
    } finally {
      setIsUndoing(false);
    }
  };

  if (!visible) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Box sx={{ display: 'inline-flex', gap: 1, alignItems: 'center' }}>
      <Tooltip
        title={
          isExpired
            ? 'Undo window has expired (5 minutes maximum)'
            : `Revert last sync - ${formatTime(displayTime)} remaining`
        }
      >
        <Box>
          <Button
            size="small"
            variant="outlined"
            color="warning"
            startIcon={<UndoIcon />}
            onClick={handleUndo}
            disabled={isExpired || isUndoing}
          >
            {isUndoing ? 'Undoing...' : 'Undo'}
          </Button>
        </Box>
      </Tooltip>

      <Typography variant="caption" color={isExpired ? 'error' : 'textSecondary'}>
        {isExpired ? '(expired)' : `${formatTime(displayTime)} left`}
      </Typography>
    </Box>
  );
};
