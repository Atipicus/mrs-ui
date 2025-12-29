# Publishing Checklist for @mrs-uisystem/ui-v6

## ✅ Already Done

- [x] Package configured: `@mrs-uisystem/ui-v6`
- [x] Version: 0.1.0
- [x] publishConfig.access: "public"
- [x] All tests passing: 621/621
- [x] TypeScript: 0 errors
- [x] ESLint: 0 warnings
- [x] Build successful
- [x] Git committed and tagged: v0.1.0
- [x] Pushed to GitHub

## 🎯 What You Need to Do Now

### Step 1: Create npm Organization (5 minutes)

Since the `@mrs-uisystem` organization doesn't exist yet, you need to create it:

1. **Go to**: https://www.npmjs.com/org/create
2. **Login** with username: `mgomez-mrs`
3. **Organization name**: `mrs-uisystem`
4. **Plan**: Choose **Free** (unlimited public packages)
5. **Click**: "Create Organization"

**Result**: Organization `@mrs-uisystem` will be created and you'll be the owner.

---

### Step 2: Login to npm (1 minute)

Open your terminal and run:

```bash
npm login
```

**Enter when prompted:**
- Username: `mgomez-mrs`
- Password: (your npm password)
- Email: (your registered npm email)
- OTP: (if 2FA enabled, your 6-digit code)

**Verify:**
```bash
npm whoami
```
Should display: `mgomez-mrs`

---

### Step 3: Publish Package (2 minutes)

```bash
# Run from: /Users/mader/work/madersystem/mrs-ui-v6

npm publish
```

**If you have 2FA:**
```bash
npm publish --otp=123456
```
(Replace with your actual OTP code)

**Expected output:**
```
+ @mrs-uisystem/ui-v6@0.1.0
```

---

### Step 4: Verify (1 minute)

**Visit:**
https://www.npmjs.com/package/@mrs-uisystem/ui-v6

**Test installation:**
```bash
mkdir /tmp/test-install
cd /tmp/test-install
npm init -y
npm install @mrs-uisystem/ui-v6
```

---

## 📋 Full Command Sequence

Copy and paste these commands one by one:

```bash
# 1. Ensure you're in the project directory
cd /Users/mader/work/madersystem/mrs-ui-v6

# 2. Login to npm
npm login
# (Enter: mgomez-mrs credentials)

# 3. Verify login
npm whoami
# Should show: mgomez-mrs

# 4. Publish
npm publish
# (or with OTP: npm publish --otp=123456)
```

---

## ⚠️ If You Get Errors

### Error: "Scope not found" or "You do not have permission"

**This means the organization doesn't exist yet.**

**Solution:**
1. Create it at: https://www.npmjs.com/org/create
2. Name: `mrs-uisystem`
3. Then try publishing again

---

### Error: "401 Unauthorized"

**This means you're not logged in.**

**Solution:**
```bash
npm login
```

---

### Error: "One-time password required"

**This means you have 2FA enabled.**

**Solution:**
```bash
npm publish --otp=YOUR_6_DIGIT_CODE
```

---

## 🎉 After Publishing

Once published successfully:

1. ✅ **Package live at**: https://www.npmjs.com/package/@mrs-uisystem/ui-v6
2. ✅ **Anyone can install**: `npm install @mrs-uisystem/ui-v6`
3. ✅ **Next**: Deploy Storybook to Vercel/Netlify
4. ✅ **Next**: Create GitHub Release

---

## 📞 Need Help?

- **Detailed guide**: See `NPM_PUBLISHING_SETUP.md`
- **npm docs**: https://docs.npmjs.com/creating-and-publishing-scoped-public-packages
- **Create org**: https://www.npmjs.com/org/create

---

**Ready? Start with Step 1 above! 🚀**
