# npm Publishing Setup Guide

**Package**: `@mrs-uisystem/ui-v6`
**npm User**: `mgomez-mrs`
**npm Organization**: `mrs-uisystem`
**Version**: 0.1.0

---

## Prerequisites Checklist

Before publishing, ensure you have:

### 1. npm Account Setup ✅
- [x] **Username**: `mgomez-mrs`
- [ ] **Password**: (your npm password)
- [ ] **Email**: (registered email)
- [ ] **2FA**: Optional but recommended

### 2. Organization Setup
- [ ] **Organization exists**: `mrs-uisystem` must exist on npm
- [ ] **User is member**: `mgomez-mrs` must be added to the organization
- [ ] **Publishing permissions**: User must have "publish" role

### 3. Package Configuration ✅
- [x] **Package name**: `@mrs-uisystem/ui-v6`
- [x] **Version**: 0.1.0
- [x] **Access**: public
- [x] **Build**: Successful
- [x] **Tests**: 621/621 passing

---

## Step-by-Step Publishing Process

### Step 1: Verify Organization Exists

First, check if the `@mrs-uisystem` organization exists on npm:

**Option A - Check via npm CLI:**
```bash
npm org ls mrs-uisystem
```

**Option B - Check via web:**
Visit: https://www.npmjs.com/org/mrs-uisystem

**Possible Outcomes:**

**✅ Organization exists:**
- You'll see the organization page with members
- Proceed to Step 2

**❌ Organization doesn't exist:**
You need to create it:
1. Go to: https://www.npmjs.com/org/create
2. Organization name: `mrs-uisystem`
3. Choose plan: Free (unlimited public packages) or Paid
4. Click "Create Organization"

---

### Step 2: Add User to Organization

If the organization exists but you're not a member:

**Option A - Organization owner adds you:**
1. Organization owner logs into npm
2. Goes to: https://www.npmjs.com/settings/mrs-uisystem/members
3. Clicks "Invite Members"
4. Invites: `mgomez-mrs`
5. Sets role: **Developer** (can publish packages)

**Option B - You accept invitation:**
1. Check your email for npm invitation
2. Click "Accept Invitation"
3. Or visit: https://www.npmjs.com/settings/mrs-uisystem/members

**Verify membership:**
```bash
npm org ls mrs-uisystem mgomez-mrs
```
Should show: `mgomez-mrs` with role

---

### Step 3: Login to npm

Login with your credentials:

```bash
npm login
```

**You'll be prompted for:**
- **Username**: `mgomez-mrs`
- **Password**: (your password)
- **Email**: (your registered email)
- **OTP** (if 2FA enabled): 6-digit code from authenticator

**Verify login:**
```bash
npm whoami
```
**Expected output:** `mgomez-mrs`

---

### Step 4: Verify Package Configuration

Check that everything is configured correctly:

```bash
# View package.json name and version
npm pkg get name version publishConfig

# Expected output:
# {
#   "name": "@mrs-uisystem/ui-v6",
#   "version": "0.1.0",
#   "publishConfig": {
#     "access": "public"
#   }
# }
```

---

### Step 5: Run Quality Checks

The `prepublishOnly` script will run automatically, but you can test it first:

```bash
npm run prepublishOnly
```

This runs:
1. ✅ **Lint**: `npm run lint` (0 warnings expected)
2. ✅ **Type Check**: `npm run type-check` (0 errors expected)
3. ✅ **Tests**: `npm test` (621/621 passing expected)
4. ✅ **Build**: `npm run build` (successful build expected)

**All checks should pass before publishing.**

---

### Step 6: Publish to npm

Now you're ready to publish!

```bash
npm publish
```

**If you have 2FA enabled:**
```bash
npm publish --otp=123456
```
(Replace `123456` with your 6-digit authenticator code)

**Expected output:**
```
npm notice
npm notice 📦  @mrs-uisystem/ui-v6@0.1.0
npm notice === Tarball Contents ===
npm notice 192 files
npm notice === Tarball Details ===
npm notice name:          @mrs-uisystem/ui-v6
npm notice version:       0.1.0
npm notice package size:  188.6 kB
npm notice unpacked size: 1.2 MB
npm notice total files:   192
npm notice
+ @mrs-uisystem/ui-v6@0.1.0
```

---

### Step 7: Verify Publication

**Check on npm registry:**
```bash
npm view @mrs-uisystem/ui-v6
```

**Visit package page:**
https://www.npmjs.com/package/@mrs-uisystem/ui-v6

**Test installation:**
```bash
# In a new directory
mkdir test-mrs-ui
cd test-mrs-ui
npm init -y
npm install @mrs-uisystem/ui-v6

# Verify it installed
ls node_modules/@mrs-uisystem/ui-v6
```

---

## Troubleshooting

### Issue 1: Organization doesn't exist

**Error:**
```
npm error 404 @mrs-uisystem/ui-v6@0.1.0: Scope not found
npm error 404 Scope '@mrs-uisystem' is not found or you do not have permission
```

**Solution:**
Create the organization:
1. Go to: https://www.npmjs.com/org/create
2. Name: `mrs-uisystem`
3. Select plan and create

---

### Issue 2: User not in organization

**Error:**
```
npm error 403 Forbidden - PUT https://registry.npmjs.org/@mrs-uisystem%2fui-v6
npm error 403 You do not have permission to publish "@mrs-uisystem/ui-v6"
```

**Solution:**
Ask the organization owner to add `mgomez-mrs` as a member with "Developer" role.

Or verify membership:
```bash
npm org ls mrs-uisystem
```

---

### Issue 3: Not logged in

**Error:**
```
npm error 401 Unauthorized - PUT https://registry.npmjs.org/@mrs-uisystem%2fui-v6
```

**Solution:**
```bash
npm login
# Enter credentials for mgomez-mrs
```

---

### Issue 4: Package name already taken

**Error:**
```
npm error 403 Forbidden - PUT https://registry.npmjs.org/@mrs-uisystem%2fui-v6
npm error 403 You cannot publish over the previously published versions
```

**Solution:**
Someone already published this version. Bump the version:
```bash
# Patch: 0.1.0 -> 0.1.1
npm version patch

# Minor: 0.1.0 -> 0.2.0
npm version minor

# Then publish again
npm publish
```

---

### Issue 5: 2FA required

**Error:**
```
npm error E401 This operation requires a one-time password
npm error E401 You must provide a one-time password
```

**Solution:**
Get your 6-digit OTP code from your authenticator app and:
```bash
npm publish --otp=123456
```

---

### Issue 6: prepublishOnly script fails

**Error:**
```
npm error Exit status 1
npm error Failed at the @mrs-uisystem/ui-v6@0.1.0 prepublishOnly script
```

**Solution:**
Check which step failed:
```bash
# Run each individually
npm run lint          # Check for linting errors
npm run type-check    # Check for TypeScript errors
npm test              # Check for failing tests
npm run build         # Check for build errors
```

Fix the errors and try again.

---

## Alternative: Publish Under Personal Scope (Fallback)

If you can't set up the `@mrs-uisystem` organization immediately, you can publish under your personal scope:

### Change package name:
```bash
# Edit package.json
# Change: "@mrs-uisystem/ui-v6"
# To:     "@mgomez-mrs/ui-v6"

# Then publish
npm publish
```

This will publish to: https://www.npmjs.com/package/@mgomez-mrs/ui-v6

You can later transfer or republish under the organization scope.

---

## Post-Publishing Checklist

After successful publication:

- [ ] **Verify package page**: https://www.npmjs.com/package/@mrs-uisystem/ui-v6
- [ ] **Check README displays correctly** on npm
- [ ] **Test installation** in a fresh project
- [ ] **Verify package size** (should be ~188.6 kB)
- [ ] **Check all exports work**:
  ```bash
  npm install @mrs-uisystem/ui-v6
  # Test imports in a TypeScript file
  ```
- [ ] **Update badges in README** with actual npm link
- [ ] **Announce release** to team
- [ ] **Tag GitHub release** (if not done already)

---

## npm Organization Setup (If Creating New)

If you need to create the `mrs-uisystem` organization:

### 1. Create Organization

**Via Web:**
1. Go to: https://www.npmjs.com/org/create
2. **Organization name**: `mrs-uisystem`
3. **Plan**:
   - **Free**: Unlimited public packages (recommended for open source)
   - **Paid** ($7/month): Private packages + team features

### 2. Add Members

After creation:
1. Go to: https://www.npmjs.com/settings/mrs-uisystem/members
2. Click **"Invite Members"**
3. Enter username: `mgomez-mrs`
4. Select role: **Developer** (can publish packages)
5. Click **"Invite"**

### 3. Configure Organization Settings

**Publishing Settings:**
1. Go to: https://www.npmjs.com/settings/mrs-uisystem/packages
2. Set **"Who can publish"**: Organization members
3. Set **"Default access"**: Public

---

## Quick Commands Reference

```bash
# Check if organization exists
npm org ls mrs-uisystem

# Check if you're a member
npm org ls mrs-uisystem mgomez-mrs

# Login to npm
npm login

# Verify login
npm whoami

# Check package configuration
npm pkg get name version publishConfig

# Run quality checks
npm run prepublishOnly

# Publish package
npm publish

# Publish with 2FA
npm publish --otp=123456

# View published package
npm view @mrs-uisystem/ui-v6

# Test installation
npm install @mrs-uisystem/ui-v6
```

---

## What You Need From Organization Owner

If the `@mrs-uisystem` organization already exists but you're not a member:

**Ask the owner to:**
1. Go to: https://www.npmjs.com/settings/mrs-uisystem/members
2. Click "Invite Members"
3. Invite: `mgomez-mrs`
4. Role: **Developer** (or **Owner** for full control)
5. Send invitation

**You'll receive:**
- Email notification
- Invitation link

**You need to:**
- Accept the invitation
- Then you can publish packages under `@mrs-uisystem`

---

## Summary

**To publish `@mrs-uisystem/ui-v6`, you need:**

1. ✅ **npm account**: `mgomez-mrs` (you have this)
2. ❓ **Organization exists**: `mrs-uisystem` on npm
   - Check: https://www.npmjs.com/org/mrs-uisystem
   - If not: Create it
3. ❓ **User is member**: `mgomez-mrs` added to `mrs-uisystem` org
   - Check: `npm org ls mrs-uisystem`
   - If not: Ask owner to add you OR create the org yourself
4. ✅ **Package configured**: `@mrs-uisystem/ui-v6` ready
5. ✅ **Quality checks pass**: 621/621 tests passing

**Once 2 & 3 are done, you can:**
```bash
npm login        # Login as mgomez-mrs
npm publish      # Publish @mrs-uisystem/ui-v6@0.1.0
```

**Next step:** Verify if the `mrs-uisystem` organization exists on npm. If not, create it!

---

**Questions? Check the troubleshooting section above or reach out to the team!**
