#!/bin/bash

set -e  # Exit on error

echo "🚀 Starting package migration from @mrs-uisystem/ui-v6 to @atipicus/mrs-ui"

# Step 1: Backup
echo "📦 Creating backup..."
git add -A 2>/dev/null || true
git commit -m "Backup before package migration to @atipicus/mrs-ui" 2>/dev/null || echo "⚠️  No git repo or already committed"

# Step 2: Replace in all text files
echo "🔄 Replacing package name in source files..."
find . -type f \( -name "*.md" -o -name "*.ts" -o -name "*.tsx" \) \
  ! -path "*/node_modules/*" \
  ! -path "*/dist/*" \
  ! -path "*/.git/*" \
  ! -path "*/.storybook/*" \
  ! -path "*/storybook-static/*" \
  -exec sed -i '' 's/@mrs-uisystem\/ui-v6/@atipicus\/mrs-ui/g' {} +

# Step 3: Update package.json
echo "📝 Updating package.json..."
sed -i '' 's/"name": "@mrs-uisystem\/ui-v6"/"name": "@atipicus\/mrs-ui"/g' package.json

# Step 4: Remove package-lock.json
echo "🗑️  Removing package-lock.json..."
rm -f package-lock.json

# Step 5: Verify changes
echo "✅ Verifying changes..."
REMAINING=$(grep -r "@mrs-uisystem/ui-v6" . --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=.git --exclude-dir=.storybook --exclude-dir=storybook-static 2>/dev/null | wc -l | tr -d ' ')

if [ "$REMAINING" -eq "0" ]; then
  echo "✅ All instances replaced successfully!"
else
  echo "⚠️  Warning: $REMAINING instances still found. Check manually:"
  grep -r "@mrs-uisystem/ui-v6" . --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=.git --exclude-dir=.storybook --exclude-dir=storybook-static 2>/dev/null | head -5
fi

# Step 6: Regenerate package-lock.json
echo "📦 Regenerating package-lock.json..."
npm install

# Step 7: Verify new package name
echo "🔍 Verifying new package name..."
echo "Package.json name:"
grep '"name"' package.json
echo ""
echo "Package-lock.json name:"
grep '"name"' package-lock.json | head -1

echo ""
echo "✨ Migration complete!"
echo ""
echo "Next steps:"
echo "1. Review changes: git diff"
echo "2. Test build: npm run build"
echo "3. Run tests: npm test"
echo "4. Publish: npm publish --access public"
echo "5. Deprecate old: npm deprecate @mrs-uisystem/ui-v6@* 'Migrated to @atipicus/mrs-ui'"

