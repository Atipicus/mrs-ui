# Storybook Deployment Fix - White Screen Issue

## Problem
Vercel and Netlify show a white screen instead of Storybook.

## Root Cause
The `.storybook/main.ts` file had a reference to the removed `@tpitre/story-ui` package in the `viteFinal` configuration, which was causing the build to fail silently or include broken dependencies.

## Solution Applied ✅

I've fixed the issue by removing the Story UI reference from `.storybook/main.ts` and pushed the fix to GitHub.

**What changed:**
```diff
  framework: '@storybook/react-vite',
-  viteFinal: async (config) => {
-    // Story UI: Exclude from dependency optimization
-    config.optimizeDeps = {
-      ...config.optimizeDeps,
-      exclude: [
-        ...(config.optimizeDeps?.exclude || []),
-        '@tpitre/story-ui'
-      ]
-    };
-    return config;
-  },
};
```

---

## Next Steps for Deployment

### For Vercel:

**Option A - Automatic Redeploy:**
Vercel should automatically redeploy since we pushed to main. Wait 1-2 minutes and check your deployment.

**Option B - Manual Trigger:**
1. Go to your Vercel dashboard
2. Find your `mrs-ui-v6` project
3. Click **"Redeploy"** on the latest deployment
4. Or go to **Deployments** → **⋮** (three dots) → **Redeploy**

---

### For Netlify:

**Option A - Automatic Redeploy:**
Netlify should automatically redeploy since we pushed to main.  Wait 1-2 minutes and check your deployment.

**Option B - Manual Trigger:**
1. Go to your Netlify dashboard
2. Find your site
3. Click **"Trigger deploy"** → **"Deploy site"**
4. Or go to **Deploys** tab → **"Trigger deploy"** → **"Clear cache and deploy site"**

---

## Verification Steps

After redeployment:

1. **Visit your deployed Storybook URL**
   - Vercel: `https://mrs-ui-v6.vercel.app` (or similar)
   - Netlify: `https://mrs-ui-v6.netlify.app` (or similar)

2. **You should see:**
   - Storybook sidebar on the left with component list
   - Welcome/Introduction page in the center
   - All 33 components listed in categories

3. **Test a few components:**
   - Click on **Components** → **Button**
   - Should show Button examples
   - Try other components

---

## If Still White Screen

If you still see a white screen after redeployment, try these additional steps:

### Check Browser Console

1. **Open DevTools** (F12 or Cmd+Option+I)
2. **Go to Console tab**
3. **Look for errors** (red text)
4. **Share the errors** so I can help debug further

### Common Issues and Fixes

#### Issue 1: Base Path Problem

**Symptom:** White screen, console shows 404 errors for assets

**Solution:** Add base path to Storybook config

Edit `.storybook/main.ts`:
```typescript
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    // ... your addons
  ],
  framework: '@storybook/react-vite',
  core: {
    builder: '@storybook/builder-vite',
  },
  // Add this for custom base paths
  viteFinal: async (config) => {
    config.base = process.env.NODE_ENV === 'production' ? './' : '/';
    return config;
  },
};
```

#### Issue 2: Node Version Mismatch

**Symptom:** Build fails or white screen

**Solution:** Ensure Node 20 is used

**For Vercel:**
1. Project Settings → General
2. Node.js Version: `20.x`
3. Redeploy

**For Netlify:**
Already configured in `netlify.toml`:
```toml
[build.environment]
  NODE_VERSION = "20"
```

#### Issue 3: Build Output Directory Wrong

**Symptom:** Vercel/Netlify shows "Site not found" or white screen

**Solution:** Verify output directory

**For Vercel (vercel.json):**
```json
{
  "buildCommand": "npm run build-storybook",
  "outputDirectory": "storybook-static"
}
```

**For Netlify (netlify.toml):**
```toml
[build]
  publish = "storybook-static"
  command = "npm run build-storybook"
```

---

## Manual Testing Locally

To test Storybook locally before deploying:

### Method 1: Preview Built Storybook

```bash
# Build Storybook
npm run build-storybook

# Serve it locally
npx http-server storybook-static -p 8080

# Open browser to: http://localhost:8080
```

### Method 2: Development Mode

```bash
# Run Storybook in development mode
npm run storybook

# Opens at: http://localhost:6006
```

---

## Deployment Configuration Files

### vercel.json
```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "buildCommand": "npm run build-storybook",
  "outputDirectory": "storybook-static",
  "installCommand": "npm ci",
  "framework": null,
  "public": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### netlify.toml
```toml
[build]
  publish = "storybook-static"
  command = "npm run build-storybook"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

---

## Alternative: GitHub Pages

If Vercel/Netlify continue to have issues, you can deploy to GitHub Pages:

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add script to package.json
# "deploy-storybook": "npm run build-storybook && gh-pages -d storybook-static"

# Deploy
npm run deploy-storybook
```

Then enable GitHub Pages:
1. Go to repository Settings → Pages
2. Source: `gh-pages` branch
3. Your Storybook will be at: `https://mgomez-ext.github.io/mrs-ui/`

---

## Summary

**What I did:**
1. ✅ Removed Story UI reference from `.storybook/main.ts`
2. ✅ Rebuilt Storybook successfully
3. ✅ Committed and pushed fix to GitHub

**What should happen now:**
- Vercel/Netlify will auto-redeploy with the fix
- Storybook should load correctly
- No more white screen

**If still having issues:**
- Open browser DevTools console
- Share any error messages
- Try the troubleshooting steps above

---

**The fix has been pushed! Wait 1-2 minutes for auto-redeployment on Vercel/Netlify, then check your URLs.** 🚀
