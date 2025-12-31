# Deployment Guide

## MRS Design System v0.7.0 - CI/CD & Deployment

This guide covers the complete CI/CD pipeline and deployment workflows for the MRS Design System.

---

## 🚀 CI/CD Architecture Overview

The project uses **4 GitHub Actions workflows** for automated testing, building, and deployment:

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| `ci.yml` | Push/PR to main/develop | Validation, tests, builds |
| `deploy-storybook.yml` | After CI success on main | Deploy Storybook to GitHub Pages |
| `publish-npm.yml` | Release or manual | Publish to npm registry |
| `chromatic-baseline.yml` | Manual | Update visual test baselines |

---

## 📊 CI Workflow (`ci.yml`)

### Pipeline Stages

```
┌─────────────────────────────────────────────────────────────┐
│                        SETUP                                 │
│  Install dependencies & cache node_modules                   │
└─────────────────────┬───────────────────────────────────────┘
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│  VALIDATE   │ │    TEST     │ │  CHROMATIC  │
│ Lint+Types  │ │  Jest+Cov   │ │ Visual Tests│
└──────┬──────┘ └──────┬──────┘ └─────────────┘
       │               │
       └───────┬───────┘
               ▼
┌─────────────────────────────────────────────────────────────┐
│                   BUILD (parallel)                          │
│  ┌─────────────────────┐  ┌─────────────────────┐          │
│  │   Build Package     │  │   Build Storybook   │          │
│  │   (dist/)           │  │   (storybook-static)│          │
│  └─────────────────────┘  └─────────────────────┘          │
└─────────────────────────────────────────────────────────────┘
```

### Performance Optimizations

1. **Shared Dependency Cache**: `node_modules` cached and shared across all jobs
2. **Parallel Validations**: Lint, format check, and type-check run simultaneously
3. **Path Filters**: CI only runs when relevant files change
4. **Concurrency Control**: Cancels previous runs on new push

### Triggers

```yaml
on:
  push:
    branches: [main, develop]
    paths:
      - 'src/**'
      - 'package.json'
      - 'package-lock.json'
      - 'tsconfig.json'
      - 'vite.config.ts'
      - '.github/workflows/**'
  pull_request:
    branches: [main, develop]
```

---

## 📚 Storybook Deployment (`deploy-storybook.yml`)

### Automatic Deployment

When CI passes on `main`, Storybook is automatically deployed to GitHub Pages:

```
CI (main) ───success───► Deploy Storybook ───► GitHub Pages
```

**Live URL**: https://madersystem.github.io/mrs-ui-v6/

### Manual Deployment

You can also trigger manually via GitHub Actions:
1. Go to Actions → "Deploy Storybook"
2. Click "Run workflow"
3. Select branch and run

### Artifact Reuse

The deploy workflow **reuses build artifacts** from CI:
- No rebuild required when deploying from CI
- Saves ~2-3 minutes per deployment
- Ensures exact same build is deployed

---

## 📦 npm Publishing (`publish-npm.yml`)

### Automatic Publishing (on Release)

1. Create a GitHub Release
2. Workflow automatically publishes to npm
3. Package available at: `npm install @atipicus/mrs-ui`

### Manual Publishing

1. Go to Actions → "Publish to npm"
2. Click "Run workflow"
3. Select version type (patch/minor/major)
4. Optional: Enable "Dry run" to test without publishing

### Dry Run Mode

Test the publish process without actually publishing:
- Runs all validations
- Creates package tarball
- Shows what would be published
- Does not modify npm registry

---

## 🎨 Visual Testing with Chromatic

### Automatic Visual Tests

On every PR and push to `main`, Chromatic:
- Captures screenshots of all Storybook stories
- Compares against baseline
- Reports visual changes

### Manual Baseline Update

When you want to accept visual changes as the new baseline:
1. Go to Actions → "Chromatic Baseline"
2. Run with "Auto-accept all changes" enabled
3. New baseline is set

---

## 🔐 Required Secrets

Configure these secrets in GitHub repository settings:

| Secret | Purpose | How to Get |
|--------|---------|------------|
| `NPM_TOKEN` | Publish to npm | [npm Access Tokens](https://docs.npmjs.com/creating-and-viewing-access-tokens) |
| `CHROMATIC_PROJECT_TOKEN` | Visual tests | [Chromatic Setup](https://www.chromatic.com/docs/setup) |

### Setting Up Secrets

1. Go to repository **Settings** → **Secrets and variables** → **Actions**
2. Click "New repository secret"
3. Add each secret with its value

---

## 📈 Estimated Performance

| Metric | Before | After |
|--------|--------|-------|
| `npm ci` executions per CI run | 5-6 | 1 (cached) |
| Total CI time | ~8-12 min | ~4-6 min |
| Storybook builds on deploy | 2 | 1 (artifact reuse) |
| Unnecessary CI runs | All pushes | Only relevant changes |

---

## 🛠️ Local Development Commands

```bash
# Development
npm run dev              # Start Storybook dev server

# Quality checks
npm run lint             # Run ESLint
npm run format:check     # Check Prettier formatting
npm run type-check       # TypeScript validation
npm test                 # Run tests

# Builds
npm run build            # Build package (dist/)
npm run build-storybook  # Build Storybook (storybook-static/)

# Publishing (local)
npm run publish:patch    # Bump patch version and publish
npm run publish:minor    # Bump minor version and publish
npm run publish:major    # Bump major version and publish
```

---

## 📋 Workflow Files

All workflow files are in `.github/workflows/`:

```
.github/workflows/
├── ci.yml                  # Main CI pipeline
├── deploy-storybook.yml    # Storybook deployment
├── publish-npm.yml         # npm publishing
└── chromatic-baseline.yml  # Visual test baseline
```

---

## 🔄 Deployment Checklist

### Before Releasing

- [ ] All tests passing locally (`npm test`)
- [ ] No linting errors (`npm run lint`)
- [ ] TypeScript compiles (`npm run type-check`)
- [ ] Build succeeds (`npm run build`)
- [ ] Storybook builds (`npm run build-storybook`)
- [ ] CHANGELOG.md updated

### Publishing a New Version

1. **Update CHANGELOG.md** with changes
2. **Push to main** or create PR
3. **Wait for CI** to pass
4. **Create GitHub Release** (triggers auto-publish)
   - Or use manual workflow for more control

### Verifying Deployment

- [ ] CI workflow completed successfully
- [ ] Storybook deployed to GitHub Pages
- [ ] npm package published (if releasing)
- [ ] Chromatic visual tests reviewed

---

## 🐛 Troubleshooting

### CI Failing

**Check in order:**
1. Read the error message in Actions logs
2. Run locally: `npm run lint && npm run type-check && npm test`
3. Check if dependencies are up to date: `npm ci`

### Storybook Not Deploying

1. Verify CI passed on `main` branch
2. Check deploy-storybook workflow logs
3. Verify GitHub Pages is enabled in repository settings

### npm Publish Failing

1. Verify `NPM_TOKEN` secret is set correctly
2. Check npm package scope and permissions
3. Ensure version is not already published

### Chromatic Not Running

1. Verify `CHROMATIC_PROJECT_TOKEN` is set
2. Check if running on correct branch/event
3. Review Chromatic dashboard for errors

---

## 📊 Monitoring

### GitHub Actions

- View all workflows: `https://github.com/madersystem/mrs-ui-v6/actions`
- Check deployment history: Repository → Environments

### Chromatic

- Dashboard: `https://www.chromatic.com/builds?appId=6920db1d6ee90f1f65ee3de2`

### npm

- Package: `https://www.npmjs.com/package/@atipicus/mrs-ui`

---

## 🏷️ Current Status

**CI/CD**: ✅ Active & Optimized
**Storybook**: https://madersystem.github.io/mrs-ui-v6/
**npm Package**: @atipicus/mrs-ui
**Version**: 0.7.0
**Components**: 54 production-ready components
**Last Updated**: December 2024

---

**Last Updated**: December 30, 2024
**Pipeline Version**: 2.0 (Optimized)
**Status**: Production Ready
