# Figma Token Sync - Setup Guide

This guide explains how to configure and use the automated Figma token synchronization workflows.

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Setup Instructions](#setup-instructions)
4. [Usage](#usage)
5. [Workflows](#workflows)
6. [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

The Figma Token Sync automation provides:

- **Automated Sync**: Scheduled pulls from Figma (every Monday at 9 AM UTC)
- **Manual Sync**: On-demand synchronization via GitHub Actions UI
- **Validation**: Automatic token validation on every PR
- **Pull Requests**: Automated PR creation with token changes
- **Change Detection**: Only creates PRs when tokens actually change

### Workflows

1. **`sync-figma-tokens.yml`**: Syncs tokens from Figma
2. **`validate-tokens.yml`**: Validates token changes in PRs

---

## ✅ Prerequisites

Before setting up the automation, you need:

### 1. Figma Personal Access Token

**How to get it**:
1. Go to [Figma Account Settings](https://www.figma.com/settings)
2. Scroll to **Personal Access Tokens**
3. Click **Generate new token**
4. Name it: `MRS Design System - Token Sync`
5. Copy the token (you won't see it again!)

**Permissions needed**:
- ✅ File content (read)
- ✅ Variables (read)

### 2. Figma File Key

**How to find it**:
1. Open your Figma file
2. Look at the URL: `https://figma.com/design/{FILE_KEY}/...`
3. Copy the `FILE_KEY` part

Example:
```
URL: https://figma.com/design/ESNP5KunFotGObfcuXZ9Op/MRS-Material-UI
FILE_KEY: ESNP5KunFotGObfcuXZ9Op
```

---

## 🔧 Setup Instructions

### Step 1: Configure GitHub Secrets

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets:

#### Secret 1: `FIGMA_PERSONAL_ACCESS_TOKEN`
```
Name: FIGMA_PERSONAL_ACCESS_TOKEN
Value: <your-figma-token>
```

#### Secret 2: `FIGMA_FILE_KEY`
```
Name: FIGMA_FILE_KEY
Value: <your-file-key>
```

**Important**: Keep these secrets private! Never commit them to the repository.

---

### Step 2: Enable Workflow Permissions

1. Go to **Settings** → **Actions** → **General**
2. Scroll to **Workflow permissions**
3. Select **Read and write permissions**
4. Check **Allow GitHub Actions to create and approve pull requests**
5. Click **Save**

---

### Step 3: Test the Workflow

1. Go to **Actions** tab
2. Select **Sync Design Tokens from Figma**
3. Click **Run workflow**
4. Check **Dry run** (to preview without creating a PR)
5. Click **Run workflow** button

If successful, you'll see:
- ✅ Job completed
- ℹ️ Summary showing detected changes (if any)

---

## 🚀 Usage

### Manual Sync (Recommended First Time)

1. Go to **Actions** → **Sync Design Tokens from Figma**
2. Click **Run workflow**
3. Choose options:
   - **Dry run**: ☐ No (uncheck to create PR)
   - Or: ☑ Yes (check to preview only)
4. Click **Run workflow**

**What happens**:
1. Workflow fetches tokens from Figma API
2. Updates `src/tokens/source/**/*.json` files
3. Builds all token formats (CSS, SCSS, TS, JSON)
4. Creates a Pull Request with changes
5. Assigns PR to the person who triggered the workflow

---

### Scheduled Sync (Automatic)

The workflow runs automatically **every Monday at 9 AM UTC**.

**Schedule**: `0 9 * * 1` (cron format)

To change the schedule:
1. Edit `.github/workflows/sync-figma-tokens.yml`
2. Modify the `cron` value under `schedule:`
3. Commit and push

**Cron examples**:
```yaml
'0 9 * * 1'    # Every Monday at 9 AM
'0 9 * * *'    # Every day at 9 AM
'0 */6 * * *'  # Every 6 hours
'0 9 * * 1,3,5' # Monday, Wednesday, Friday at 9 AM
```

---

### Token Validation (Automatic)

Runs automatically on every Pull Request that modifies token files.

**Triggered by changes to**:
- `src/tokens/source/**/*.json`
- `src/tokens/config/**`
- `.github/workflows/validate-tokens.yml`

**What it validates**:
1. ✅ JSON syntax is valid
2. ✅ DTCG format compliance (`$value`, `$type`)
3. ✅ Token build succeeds
4. ✅ All export formats generated
5. ⚠️ Breaking changes (removed tokens)

**Output**:
- Comment on PR with validation results
- Job summary with token statistics
- Diff preview of changed tokens

---

## 📊 Workflows Explained

### 1. Sync Figma Tokens (`sync-figma-tokens.yml`)

**Purpose**: Pull design tokens from Figma and create a PR with changes.

**Triggers**:
- Manual (`workflow_dispatch`)
- Scheduled (cron: Monday 9 AM UTC)

**Steps**:
1. Checkout repository
2. Setup Node.js and install dependencies
3. Run `npm run tokens:sync:pull` (calls Figma API)
4. Build tokens with Style Dictionary
5. Check for changes
6. Validate token structure
7. Create Pull Request (if changes detected)
8. Generate job summary

**Secrets used**:
- `FIGMA_PERSONAL_ACCESS_TOKEN`
- `FIGMA_FILE_KEY`

**Outputs**:
- Pull Request with token changes
- Job summary showing diff
- PR labels: `design-tokens`, `figma-sync`, `automated`

---

### 2. Validate Tokens (`validate-tokens.yml`)

**Purpose**: Validate token changes in Pull Requests.

**Triggers**:
- Pull Request (when token files change)

**Steps**:
1. Checkout repository
2. Setup Node.js and install dependencies
3. Validate JSON syntax
4. Validate DTCG format
5. Build tokens
6. Check build output
7. Analyze breaking changes
8. Generate diff report
9. Comment on PR with results

**Outputs**:
- PR comment with validation results
- Job summary with statistics
- Fail if validation errors found

---

## 🔍 Pull Request Review Checklist

When you receive a token sync PR, review:

### 1. Check the Changes
```bash
# Checkout the PR branch
git fetch origin
git checkout figma-tokens-sync/<number>

# View changes
git diff main -- src/tokens/source/
```

### 2. Test Locally
```bash
# Build tokens
npm run tokens:build

# Run Storybook
npm run storybook
```

### 3. Visual Inspection
- Open Storybook at `http://localhost:6007`
- Check key components (Button, Alert, Typography)
- Verify colors, spacing, and typography look correct
- Test light/dark mode if applicable

### 4. Breaking Changes
- Review the "Breaking Changes" section in the PR
- Check if any tokens were removed
- Verify impact on existing components

### 5. Approve and Merge
If everything looks good:
1. Approve the PR
2. Merge to `main`
3. CI/CD will deploy updated tokens

---

## 🛠️ Troubleshooting

### Error: "Missing environment variables"

**Problem**: Secrets not configured or named incorrectly.

**Solution**:
1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Verify secrets exist:
   - `FIGMA_PERSONAL_ACCESS_TOKEN`
   - `FIGMA_FILE_KEY`
3. Check secret names match exactly (case-sensitive)

---

### Error: "Figma API error: 403 Forbidden"

**Problem**: Invalid or expired Figma token.

**Solution**:
1. Generate a new token in Figma settings
2. Update the `FIGMA_PERSONAL_ACCESS_TOKEN` secret
3. Re-run the workflow

---

### Error: "No changes detected" (but you made changes in Figma)

**Problem**: Figma variables not published or wrong file key.

**Solution**:
1. In Figma, ensure variables are published
2. Verify `FIGMA_FILE_KEY` is correct
3. Check if you're using the right Figma file
4. Try running with `--dry-run` to see API response

---

### Error: "Can't find format: html/documentation"

**Problem**: Style Dictionary config issue (already fixed in current version).

**Solution**:
- This error should not occur in the current setup
- If it does, check `src/tokens/config/style-dictionary.config.js`
- Ensure only supported formats are used

---

### Error: "Workflow needs write permissions"

**Problem**: GitHub Actions doesn't have permission to create PRs.

**Solution**:
1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select:
   - ☑ Read and write permissions
   - ☑ Allow GitHub Actions to create and approve pull requests
3. Save and re-run workflow

---

### No PR Created (but changes exist)

**Problem**: `create-pull-request` action failed silently.

**Solution**:
1. Check workflow logs for errors
2. Verify branch naming doesn't conflict
3. Ensure `GITHUB_TOKEN` has correct permissions
4. Try re-running the workflow

---

## 🔄 Workflow Customization

### Change Sync Schedule

Edit `.github/workflows/sync-figma-tokens.yml`:

```yaml
schedule:
  - cron: '0 14 * * *'  # Daily at 2 PM UTC
```

### Disable Scheduled Sync

Remove or comment out the `schedule:` section:

```yaml
on:
  workflow_dispatch:
    # ... (keep manual trigger)
  
  # schedule:
  #   - cron: '0 9 * * 1'  # Disabled
```

### Add Slack Notifications

Add a step at the end of the workflow:

```yaml
- name: 📬 Notify Slack
  if: steps.check_changes.outputs.has_changes == 'true'
  uses: slackapi/slack-github-action@v1
  with:
    payload: |
      {
        "text": "🎨 New Figma token sync PR created",
        "blocks": [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "New token sync PR: ${{ steps.create-pr.outputs.pull-request-url }}"
            }
          }
        ]
      }
  env:
    SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
```

---

## 📚 Additional Resources

- [Figma API Documentation](https://www.figma.com/developers/api)
- [Figma Variables API](https://www.figma.com/developers/api#variables)
- [Style Dictionary](https://styledictionary.com/)
- [DTCG Format Spec](https://tr.designtokens.org/format/)
- [GitHub Actions Documentation](https://docs.github.com/actions)

---

## 🎯 Best Practices

### 1. Token Management
- ✅ Make token changes in Figma, not in code
- ✅ Use descriptive variable names in Figma
- ✅ Group related tokens (primitives, semantic, component)
- ✅ Publish variables before syncing

### 2. Review Process
- ✅ Always review token sync PRs before merging
- ✅ Test changes in Storybook
- ✅ Run visual regression tests (Chromatic)
- ✅ Check for breaking changes

### 3. Sync Frequency
- ✅ Sync after major design updates
- ✅ Don't sync too frequently (avoid noise)
- ✅ Schedule syncs during low-traffic times
- ✅ Use manual sync for urgent changes

### 4. Security
- ✅ Keep Figma tokens in GitHub Secrets
- ✅ Rotate tokens periodically
- ✅ Limit token permissions to read-only
- ✅ Monitor workflow logs for anomalies

---

## 🤝 Support

If you encounter issues:

1. Check the [Troubleshooting](#troubleshooting) section
2. Review workflow logs in GitHub Actions
3. Open an issue in the repository
4. Contact the design system team

---

**Maintained by**: MRS Design System Team  
**Last Updated**: December 2025  
**Version**: 1.0.0

