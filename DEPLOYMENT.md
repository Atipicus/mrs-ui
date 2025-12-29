# Deployment Guide

## MRS Design System v0.2.1 - Storybook Documentation

This guide covers deploying the Storybook documentation to GitHub Pages.

---

## 🚀 GitHub Pages Deployment

### Live URL
**Production**: https://mgomez-ext.github.io/mrs-ui/

### Prerequisites
- Git repository hosted on GitHub
- `gh-pages` npm package (already installed)
- Write access to the repository

---

## Deployment Methods

### Method 1: Automated Script (Recommended)

Add this script to `package.json`:

```json
{
  "scripts": {
    "deploy-storybook": "npm run build-storybook && gh-pages -d storybook-static"
  }
}
```

Then deploy with:

```bash
npm run deploy-storybook
```

### Method 2: Manual Deployment

```bash
# 1. Build Storybook
npm run build-storybook

# 2. Deploy to GitHub Pages
npx gh-pages -d storybook-static -m "Deploy Storybook v0.2.1"
```

---

## How It Works

1. **Build Phase**:
   - Runs `npm run build-storybook`
   - Generates static files in `storybook-static/`
   - Includes all components, stories, and assets

2. **Deploy Phase**:
   - Creates/updates `gh-pages` branch
   - Pushes `storybook-static/` contents to `gh-pages` branch
   - GitHub automatically serves from `gh-pages` branch

3. **Publication**:
   - GitHub Pages detects the update
   - Deploys to CDN (~10-30 seconds)
   - Available at https://mgomez-ext.github.io/mrs-ui/

---

## GitHub Pages Settings

Verify settings at: `https://github.com/mgomez-ext/mrs-ui/settings/pages`

**Required Settings**:
- **Source**: Deploy from a branch
- **Branch**: `gh-pages`
- **Folder**: `/ (root)`

---

## Deployment Workflow

### Full Workflow

```bash
# 1. Make changes to components or stories
# 2. Commit changes
git add .
git commit -m "feat: update component documentation"

# 3. Push to main branch
git push origin main

# 4. Build and deploy Storybook
npm run build-storybook
npx gh-pages -d storybook-static -m "Deploy Storybook v0.2.1"

# 5. Wait 10-30 seconds for GitHub Pages to update
# 6. Visit https://mgomez-ext.github.io/mrs-ui/
```

---

## Features

### ✅ Included
- **HTTPS**: Automatic SSL/TLS
- **CDN**: GitHub's global CDN
- **Custom Domain**: Can be configured
- **Zero Cost**: Completely free
- **Version Control**: Full git history in `gh-pages` branch
- **Rollback**: Can revert to previous commits in `gh-pages` branch

### ⚠️ Limitations
- Manual deployment required
- No automatic PR previews
- No build dashboard
- Build happens locally (not in CI)

---

## Custom Domain (Optional)

To use a custom domain (e.g., `storybook.mrs-design.com`):

1. **Add CNAME file** to `storybook-static/`:
   ```bash
   echo "storybook.mrs-design.com" > storybook-static/CNAME
   ```

2. **Configure DNS** at your domain provider:
   ```
   Type: CNAME
   Name: storybook
   Value: mgomez-ext.github.io
   ```

3. **Update GitHub Pages settings**:
   - Go to repository Settings → Pages
   - Enter custom domain: `storybook.mrs-design.com`
   - Enable "Enforce HTTPS"

4. **Deploy**:
   ```bash
   npm run build-storybook
   npx gh-pages -d storybook-static
   ```

---

## Troubleshooting

### Issue: 404 Page Not Found

**Cause**: GitHub Pages not enabled or wrong branch selected

**Solution**:
1. Go to repository Settings → Pages
2. Ensure source is set to `gh-pages` branch
3. Wait a few minutes for GitHub to deploy

### Issue: Blank Screen

**Cause**: Incorrect base path or missing assets

**Solution**:
1. Check `storybook-static/index.html` exists
2. Verify all assets are in `storybook-static/`
3. Ensure no `public/index.html` interfering with build

### Issue: Old Version Showing

**Cause**: Browser cache or GitHub Pages cache

**Solution**:
1. Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
2. Wait 1-2 minutes for GitHub Pages cache to clear
3. Check `gh-pages` branch to verify new content

### Issue: Permission Denied

**Cause**: No write access to repository

**Solution**:
1. Verify you have write access to the repository
2. Check git authentication: `git push origin main`
3. Re-authenticate if needed: `gh auth login`

---

## Automated Deployment (Optional)

### GitHub Actions Workflow

Create `.github/workflows/deploy-storybook.yml`:

```yaml
name: Deploy Storybook

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build Storybook
        run: npm run build-storybook

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./storybook-static
          commit_message: 'Deploy Storybook [skip ci]'
```

**Benefits**:
- Automatic deployment on push to `main`
- No manual build/deploy needed
- Consistent deployment process

---

## Monitoring Deployments

### Check Deployment Status

```bash
# View gh-pages branch
git checkout gh-pages
git log --oneline -5

# Return to main
git checkout main
```

### GitHub Pages Build Logs

1. Go to repository on GitHub
2. Click "Actions" tab (if workflow enabled)
3. Or check "Environments" in repository sidebar
4. View deployment history and status

---

## Rollback to Previous Version

```bash
# 1. Checkout gh-pages branch
git checkout gh-pages

# 2. View commit history
git log --oneline

# 3. Reset to previous commit
git reset --hard <commit-hash>

# 4. Force push
git push origin gh-pages --force

# 5. Return to main
git checkout main
```

---

## Best Practices

### ✅ DO
- Build locally before deploying to verify changes
- Test Storybook locally with `npm run storybook` first
- Use meaningful commit messages for deployments
- Keep `storybook-static/` in `.gitignore` (don't commit to main)
- Deploy after each significant update

### ❌ DON'T
- Don't commit `storybook-static/` to main branch
- Don't deploy without testing locally first
- Don't force push to `gh-pages` unless rolling back
- Don't delete `gh-pages` branch (will break deployment)

---

## Package Scripts

Add to `package.json`:

```json
{
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "deploy-storybook": "npm run build-storybook && gh-pages -d storybook-static",
    "preview-storybook": "npx http-server storybook-static -p 6007"
  }
}
```

**Usage**:
- `npm run storybook` - Start dev server
- `npm run build-storybook` - Build static site
- `npm run deploy-storybook` - Build and deploy
- `npm run preview-storybook` - Preview built site locally

---

## Current Status

**Deployment**: ✅ Active
**URL**: https://mgomez-ext.github.io/mrs-ui/
**Branch**: `gh-pages`
**Version**: v0.2.1
**Components**: 39 production-ready components
**Last Deploy**: December 29, 2024

---

## Next Steps

1. ✅ Test live deployment at https://mgomez-ext.github.io/mrs-ui/
2. ✅ Share URL with team
3. ✅ Add deploy script to `package.json` (optional)
4. ✅ Set up GitHub Actions for auto-deploy (optional)
5. ✅ Configure custom domain (optional)

---

**Last Updated**: December 29, 2024
**Deployment Platform**: GitHub Pages
**Status**: Production Ready
