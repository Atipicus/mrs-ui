# Visual Testing Plan — MRS UI Design System

> **Audience:** Design System owner
> **Goal:** Add visual regression testing to catch unintended UI changes before they reach production
> **Time to implement:** ~1 hour for initial setup, ~30 min for CI integration

---

## 🎯 What are visual tests, and why do you need them?

Think of visual tests as **automated design QA**. Every time you change code, a screenshot is taken of each component story and compared pixel-by-pixel against a previously approved "baseline" image. If a Button's padding shifts 2px, or a color token changes unexpectedly, the test catches it.

**The analogy from design:** It's like having Figma's version history, but for rendered components. Every approved state is saved, and any deviation is flagged for review before merging.

The tool recommended by Storybook for this is **Chromatic** — a cloud service built by the same team that maintains Storybook. It integrates directly into your existing Storybook setup.

---

## 📊 Current State of the Repository

Before planning the implementation, here's what already exists and what's missing:

### ✅ Already set up (no action needed)
| What | Why it matters |
|------|----------------|
| Storybook v10 with React+Vite | The foundation for visual tests |
| `@storybook/addon-vitest` | Runs interaction/unit tests inside Storybook |
| Playwright + `@vitest/browser-playwright` | Browser engine for rendering components |
| Stories for atoms and molecules | Visual tests run against these existing stories |
| Light/Dark theme switcher in preview | Enables testing both themes automatically |

### ❌ Not yet set up (this plan covers it)
| What | Why it's needed |
|------|-----------------|
| `@chromatic-com/storybook` | The visual testing addon |
| Chromatic account + project | The cloud service that stores baselines and diffs |
| CI integration (GitHub Actions) | Automated tests on every PR |
| Visual test tags on stories | Marks which stories to include/exclude |

---

## 💭 How the workflow will look once set up

```
You edit a component
       ↓
Push to a branch / open a PR
       ↓
GitHub Actions runs Chromatic in the cloud
       ↓
Chromatic captures screenshots of all stories
       ↓
Compares against approved baselines
       ↓
  ┌────────────────┐      ┌───────────────────────┐
  │  No changes    │      │  Visual changes found  │
  │  ✅ PR passes  │      │  🔍 You review diffs   │
  └────────────────┘      │  Accept = new baseline │
                          │  Reject = fix the bug  │
                          └───────────────────────┘
```

You can also run tests locally inside Storybook UI to review changes during development, before pushing.

---

## 📋 Implementation Steps

### Step 1 — Install the Chromatic addon

Run this single command in your project folder:

```bash
npx storybook@latest add @chromatic-com/storybook
```

**What this does:** Installs `@chromatic-com/storybook` and automatically adds it to your `.storybook/main.ts` addon list. It's the equivalent of importing a plugin into Figma.

After running, your `.storybook/main.ts` will look like this:

```ts
// .storybook/main.ts
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-themes',
    '@storybook/addon-vitest',
    '@chromatic-com/storybook',   // ← this gets added automatically
  ],
  framework: '@storybook/react-vite',
};
```

**Validation:** Run `npm run dev` (Storybook). You should see a new "Visual Tests" panel in the Storybook sidebar.

---

### Step 2 — Create a Chromatic account and connect the project

1. Go to [chromatic.com](https://www.chromatic.com) and sign in with your GitHub account
2. Click "Add project" and select the `mrs-ui` repository
3. Chromatic will generate a **project token** — save it, you'll use it in Step 4

**What this does:** Creates the "baseline" storage in the cloud. Think of it as a version-controlled folder where Chromatic stores approved screenshots of every component.

---

### Step 3 — Run visual tests for the first time (locally)

Once connected, open Storybook and click the **"Visual Tests" panel**. Click the run button.

On the first run, every story is automatically **accepted as a baseline** because there's nothing to compare against yet. This is your "source of truth" from which all future comparisons are made.

**Think of it as:** The first time you run it, you're saying "this is what everything should look like." From now on, any deviation is a potential bug.

---

### Step 4 — Add the project token to GitHub Secrets

So Chromatic can run automatically on every PR, add the token as a GitHub repository secret:

1. Go to your GitHub repository → **Settings → Secrets and variables → Actions**
2. Click **"New repository secret"**
3. Name: `CHROMATIC_PROJECT_TOKEN`
4. Value: the token from Step 2

---

### Step 5 — Create the GitHub Actions workflow file

Create this file at `.github/workflows/chromatic.yml`:

```yaml
# .github/workflows/chromatic.yml
# Runs visual tests on every push and pull request

name: Chromatic Visual Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  chromatic:
    name: Run Visual Tests
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0  # Required: Chromatic needs full git history

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build design tokens
        run: npm run tokens:build  # Required before Storybook can build

      - name: Run Chromatic
        uses: chromaui/action@latest
        with:
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
          buildScriptName: build-storybook
          exitZeroOnChanges: true  # Don't fail CI, just flag for review
```

**What each part does:**
- `fetch-depth: 0` — Chromatic needs the full git history to detect which components changed
- `tokens:build` — Your project requires tokens to be built before Storybook compiles
- `exitZeroOnChanges: true` — Visual changes don't break CI automatically; instead, they appear as a "UI Review required" badge on the PR for you to review in the Chromatic UI

---

### Step 6 — Mark stories for visual testing (optional, recommended)

By default, Chromatic captures **every story**. For a library with 53+ components, this can be slow. You can control which stories are included using the `chromatic` parameter.

#### Exclude stories that are not meaningful to visually test

```tsx
// Stories that show many variations on a loop (Elevations, Tokens, etc.)
// may be redundant to visually test at scale

export const Elevations: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },  // Skip this story
  },
  render: () => (/* ... */)
};
```

#### Include both light and dark theme in a single story

```tsx
// This tells Chromatic to capture the story in both themes
export const Playground: Story = {
  parameters: {
    chromatic: {
      modes: {
        light: { globals: { theme: 'light' } },
        dark: { globals: { theme: 'dark' } },
      },
    },
  },
};
```

#### Set a viewport for responsive components

```tsx
export const ResponsiveWidths: Story = {
  parameters: {
    chromatic: {
      viewports: [375, 768, 1280],  // Mobile, tablet, desktop
    },
  },
};
```

---

### Step 7 — Prioritize which components to enable first

Rather than enabling visual tests on all 53 components at once, roll out in phases:

**Phase 1 — Atoms (highest ROI, simplest to snapshot):**
- Button — most used, many variants
- Typography — font/token changes should always be caught
- Badge, Chip, Avatar — small, fast, visually distinctive
- TextField — complex states (error, disabled, filled)
- Checkbox, Radio, Switch — boolean states

**Phase 2 — Molecules (higher complexity):**
- Card — high visual surface area
- Alert, Snackbar — color-coded by severity
- Dialog — modal overlay with multiple slots
- AppBar, Sidenav — layout components

**Phase 3 — All remaining components + token stories**

---

## 💻 Complete `.storybook/main.ts` after setup

```ts
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-themes',
    '@storybook/addon-vitest',
    '@chromatic-com/storybook',  // Visual testing
  ],
  framework: '@storybook/react-vite',
};

export default config;
```

---

## ✅ Validation Checklist

After completing all steps, verify each of these:

- [ ] `npm run dev` starts Storybook with a "Visual Tests" panel visible
- [ ] Clicking "Run" in the Visual Tests panel sends stories to Chromatic
- [ ] First run completes with all baselines accepted
- [ ] `.github/workflows/chromatic.yml` exists and commits successfully
- [ ] A test PR shows "UI Review" badge linked to the Chromatic build
- [ ] Modifying a component's color or spacing triggers a visual diff on the next run

---

## ⚠️ Important Considerations

### Visual tests vs. the existing interaction tests you have

Your project already has `@storybook/addon-vitest` running interaction tests. These are **complementary**, not competing:

| Test type | What it catches | Already set up? |
|-----------|-----------------|-----------------|
| Interaction tests (Vitest) | Logic errors, accessibility, broken behavior | ✅ Yes |
| Visual tests (Chromatic) | Unintended pixel changes, layout drift, theme regressions | ❌ This plan |

### Images from external URLs in stories

Several of your stories (Card, Avatar) load images from `https://mui.com/static/images/...`. Chromatic captures these as-is. If those external images change or fail to load, visual diffs will be triggered. Consider hosting test images locally in `src/stories/assets/` for stability.

### Free tier limits

Chromatic's free tier includes 5,000 snapshots/month. With 53+ components and multiple stories per component, a full run might use 200–400 snapshots. For a team, the free tier is usually enough for development. The paid tier is only needed for high-frequency CI.

---

## ➡️ After This Plan

Once visual testing is running, the next evolution is:

1. **Branch-based baselines** — Accept different baselines per feature branch
2. **TurboSnap** — Chromatic's feature that only re-tests components whose source files actually changed (reduces snapshot usage by ~70%)
3. **Design token change detection** — Connect token changes to visual diffs to verify Figma → Code sync is accurate
