/**
 * ThemeEditorApp Component
 * Main container for the theme editor application
 *
 * Features:
 * - Tabbed interface for different editors
 * - Live component preview
 * - Sync to theme.ts functionality
 * - Light/Dark mode toggle
 */

import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  Alert,
  CircularProgress,
} from '@mui/material';
import { ColorEditor } from './components/ColorEditor';
import { TypographyEditor } from './components/TypographyEditor';
import { SpacingEditor } from './components/SpacingEditor';
import { ComponentPreview } from './components/ComponentPreview';
import { SaveDialog } from './components/SaveDialog';
import { SyncDialog } from './components/SyncDialog';
import { UndoButton } from './components/UndoButton';
import { useThemeParser } from './hooks/useThemeParser';
import { useThemeSync } from './hooks/useThemeSync';
import { useThemeSave } from './hooks/useThemeSave';
import { useGitIntegration } from './hooks/useGitIntegration';
import { useFileSystem } from './hooks/useFileSystem';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

/**
 * Tab panel component
 */
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`editor-tabpanel-${index}`}
      aria-labelledby={`editor-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

interface ThemeEditorAppProps {
  /**
   * Show sync button
   */
  showSync?: boolean;

  /**
   * Initial tab index
   */
  defaultTab?: number;
}

export const ThemeEditorApp: React.FC<ThemeEditorAppProps> = ({
  showSync = true,
  defaultTab = 0,
}) => {
  // UI State
  const [tabValue, setTabValue] = useState(defaultTab);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [syncDialogOpen, setSyncDialogOpen] = useState(false);
  const [undoVisible, setUndoVisible] = useState(false);

  // Save & Sync State
  const [isSaved, setIsSaved] = useState(false);
  const [lastCommitHash, setLastCommitHash] = useState<string | null>(null);
  const [undoTimeRemaining, setUndoTimeRemaining] = useState(0);

  // Hooks
  const { parsedTheme, edits, resetEdits } = useThemeParser();
  const { status, lastSync, getSerializedEdits } = useThemeSync();
  const { save: saveTheme, status: saveStatus } = useThemeSave();
  const { commit, undo, getUndoTimeRemaining } = useGitIntegration();
  const { generateCommitMessage } = useFileSystem();

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Save theme changes
  const handleSaveTheme = async () => {
    const result = await saveTheme(edits, parsedTheme.mode);
    if (result.success) {
      setIsSaved(true);
      setSaveDialogOpen(false);
    }
  };

  // Sync theme changes
  const handleSyncTheme = async () => {
    setSyncDialogOpen(true);
    const message = generateCommitMessage(edits, parsedTheme.mode);
    const commitResult = await commit({ message });

    if (commitResult.success) {
      setLastCommitHash(commitResult.commitHash);
      setUndoVisible(true);
      // Update undo time every second
      const timer = setInterval(() => {
        const remaining = getUndoTimeRemaining();
        setUndoTimeRemaining(remaining);
        if (remaining <= 0) {
          setUndoVisible(false);
          clearInterval(timer);
        }
      }, 1000);
    }
  };

  // Undo last sync
  const handleUndoSync = async () => {
    if (!lastCommitHash) return;
    await undo(lastCommitHash);
    setLastCommitHash(null);
    setUndoVisible(false);
    setIsSaved(false);
  };

  const hasEdits = Object.keys(edits).length > 0;
  const isSaving = saveStatus === 'saving';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MRS Design System - Theme Editor
          </Typography>

          <Stack direction="row" spacing={1} alignItems="center">
            <Button
              color="inherit"
              variant={previewOpen ? 'contained' : 'outlined'}
              onClick={() => setPreviewOpen(!previewOpen)}
              size="small"
            >
              {previewOpen ? 'Hide' : 'Show'} Preview
            </Button>

            {showSync && hasEdits && (
              <>
                <Button
                  color="inherit"
                  variant="contained"
                  onClick={() => setSaveDialogOpen(true)}
                  disabled={isSaving}
                  size="small"
                  startIcon={isSaving ? <CircularProgress size={20} /> : undefined}
                >
                  {isSaving ? 'Saving...' : 'Save Theme'}
                </Button>

                <Button
                  color="inherit"
                  variant="contained"
                  onClick={() => handleSyncTheme()}
                  disabled={!isSaved}
                  size="small"
                >
                  Sync Theme
                </Button>
              </>
            )}

            {undoVisible && (
              <UndoButton
                visible={undoVisible}
                onUndo={handleUndoSync}
                timeRemaining={undoTimeRemaining}
              />
            )}
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ flex: 1, display: 'flex' }}>
        {/* Editor Panel */}
        <Box sx={{ flex: previewOpen ? '1 1 50%' : '1 1 100%', overflowY: 'auto' }}>
          <Container maxWidth="md" sx={{ py: 4 }}>
            {/* Status Alerts */}
            {status === 'success' && lastSync && (
              <Alert severity="success" sx={{ mb: 3 }} onClose={() => {}}>
                {lastSync.message}
              </Alert>
            )}

            {status === 'error' && lastSync && (
              <Alert severity="error" sx={{ mb: 3 }} onClose={() => {}}>
                {lastSync.message}
              </Alert>
            )}

            {/* Info Panel */}
            <Paper sx={{ p: 2, mb: 3, backgroundColor: 'info.lighter' }}>
              <Stack spacing={1}>
                <Typography variant="subtitle2">
                  <strong>Total Changes:</strong> {Object.keys(edits).length} groups modified
                </Typography>

                {hasEdits && (
                  <Stack direction="row" spacing={1}>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={resetEdits}
                    >
                      Reset Changes
                    </Button>

                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => {
                        const serialized = getSerializedEdits(edits, parsedTheme.mode);
                        console.log('Serialized edits:\n', serialized);
                      }}
                    >
                      View Code
                    </Button>
                  </Stack>
                )}
              </Stack>
            </Paper>

            {/* Editor Tabs */}
            <Paper>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                aria-label="theme editor tabs"
              >
                <Tab label="Colors" id="editor-tab-0" />
                <Tab label="Typography" id="editor-tab-1" />
                <Tab label="Spacing & Shape" id="editor-tab-2" />
              </Tabs>

              <Divider />

              {/* Color Editor */}
              <TabPanel value={tabValue} index={0}>
                <Box sx={{ p: 3 }}>
                  <ColorEditor />
                </Box>
              </TabPanel>

              {/* Typography Editor */}
              <TabPanel value={tabValue} index={1}>
                <Box sx={{ p: 3 }}>
                  <TypographyEditor />
                </Box>
              </TabPanel>

              {/* Spacing Editor */}
              <TabPanel value={tabValue} index={2}>
                <Box sx={{ p: 3 }}>
                  <SpacingEditor />
                </Box>
              </TabPanel>
            </Paper>

            {/* Footer */}
            <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography variant="caption" color="textSecondary">
                Theme Editor v1.0 - Edits are live in preview but require manual sync to
                theme.ts
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Preview Panel */}
        {previewOpen && (
          <Box
            sx={{
              flex: '1 1 50%',
              borderLeft: '1px solid',
              borderColor: 'divider',
              overflowY: 'auto',
              backgroundColor: 'background.paper',
            }}
          >
            <Container maxWidth="md" sx={{ py: 4 }}>
              <ComponentPreview
                dialogOpen={false}
                onDialogClose={() => {}}
              />
            </Container>
          </Box>
        )}
      </Box>

      {/* Save Dialog */}
      <SaveDialog
        open={saveDialogOpen}
        onConfirm={handleSaveTheme}
        onCancel={() => setSaveDialogOpen(false)}
        edits={edits}
        mode={parsedTheme.mode}
        isLoading={isSaving}
      />

      {/* Sync Dialog */}
      <SyncDialog
        open={syncDialogOpen}
        onClose={() => setSyncDialogOpen(false)}
        isLoading={status === 'syncing' || false}
        status={status}
        commitHash={lastCommitHash ?? undefined}
        error={lastSync?.message}
      />
    </Box>
  );
};
