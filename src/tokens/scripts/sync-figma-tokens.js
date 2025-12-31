#!/usr/bin/env node

/**
 * MRS Design System - Figma Token Sync Script
 * 
 * This script synchronizes design tokens between Figma (via Tokens Studio)
 * and the local token source files.
 * 
 * Usage:
 *   node scripts/sync-figma-tokens.js [--dry-run] [--direction pull|push]
 * 
 * Options:
 *   --dry-run: Preview changes without writing files
 *   --direction: 'pull' (Figma → Code) or 'push' (Code → Figma)
 * 
 * Environment Variables:
 *   FIGMA_PERSONAL_ACCESS_TOKEN: Your Figma API token
 *   FIGMA_FILE_KEY: The Figma file key (from URL)
 */

const fs = require('fs');
const path = require('path');

// ============================================
// Configuration
// ============================================
const CONFIG = {
  figmaApiUrl: 'https://api.figma.com',
  tokensSourceDir: path.join(__dirname, '../source'),
  generatedDir: path.join(__dirname, '../generated'),
  figmaTokensPath: path.join(__dirname, '../generated/json/figma-tokens.json'),
};

// Parse CLI arguments
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const direction = args.find(arg => arg.startsWith('--direction='))?.split('=')[1] || 'pull';

// ============================================
// Figma API Helper
// ============================================
class FigmaAPI {
  constructor(token, fileKey) {
    this.token = token;
    this.fileKey = fileKey;
    this.baseUrl = CONFIG.figmaApiUrl;
  }

  async fetchVariables() {
    console.log('📡 Fetching variables from Figma...');
    
    const url = `${this.baseUrl}/v1/files/${this.fileKey}/variables/local`;
    const response = await fetch(url, {
      headers: {
        'X-Figma-Token': this.token,
      },
    });

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`✅ Fetched ${Object.keys(data.meta.variables).length} variables`);
    return data;
  }

  async publishVariables(tokens) {
    console.log('📤 Publishing variables to Figma...');
    
    // Note: Figma API doesn't support publishing variables yet (as of Dec 2024)
    // This would need to be done via Tokens Studio plugin
    console.log('⚠️  Publishing to Figma requires Tokens Studio plugin');
    console.log('   1. Open Figma file');
    console.log('   2. Open Tokens Studio plugin');
    console.log('   3. Import tokens from:', CONFIG.figmaTokensPath);
    
    return { success: false, message: 'Manual import required' };
  }
}

// ============================================
// Token Transformation
// ============================================
function figmaVariablesToTokens(figmaData) {
  console.log('🔄 Converting Figma variables to DTCG tokens...');
  
  const tokens = {
    primitives: {
      colors: {},
      typography: {},
      spacing: {},
      radius: {},
    },
    semantic: {
      color: {},
    },
    component: {},
  };

  // Transform Figma variables to DTCG format
  Object.values(figmaData.meta.variables).forEach(variable => {
    const { name, resolvedType, valuesByMode } = variable;
    
    // Parse variable name (e.g., "primitives/colors/brand/verones")
    const parts = name.split('/');
    const category = parts[0];
    const subcategory = parts[1];
    const tokenName = parts.slice(2).join('/');

    // Get the value from the first mode (light mode typically)
    const modeId = Object.keys(valuesByMode)[0];
    const value = valuesByMode[modeId];

    // Map Figma type to DTCG type
    const typeMap = {
      'COLOR': 'color',
      'FLOAT': 'number',
      'STRING': 'string',
    };

    const dtcgToken = {
      $value: formatValue(value, resolvedType),
      $type: typeMap[resolvedType] || 'string',
    };

    // Place token in correct category
    setNestedProperty(tokens, [category, subcategory, ...tokenName.split('/')], dtcgToken);
  });

  console.log('✅ Conversion complete');
  return tokens;
}

function formatValue(value, type) {
  if (type === 'COLOR') {
    return rgbaToHex(value);
  }
  return value;
}

function rgbaToHex(rgba) {
  const { r, g, b, a } = rgba;
  const toHex = (n) => Math.round(n * 255).toString(16).padStart(2, '0');
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  return a < 1 ? `${hex}${toHex(a)}` : hex;
}

function setNestedProperty(obj, path, value) {
  const lastKey = path.pop();
  const target = path.reduce((acc, key) => {
    if (!acc[key]) acc[key] = {};
    return acc[key];
  }, obj);
  target[lastKey] = value;
}

// ============================================
// File Operations
// ============================================
function writeTokenFiles(tokens) {
  console.log('📝 Writing token files...');

  // Write primitives
  Object.entries(tokens.primitives).forEach(([category, data]) => {
    const filePath = path.join(CONFIG.tokensSourceDir, 'primitives', `${category}.json`);
    const content = JSON.stringify({ primitives: { [category]: data } }, null, 2);
    
    if (dryRun) {
      console.log(`[DRY RUN] Would write: ${filePath}`);
    } else {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, content);
      console.log(`✅ Wrote ${filePath}`);
    }
  });

  // Write semantic tokens
  const semanticPath = path.join(CONFIG.tokensSourceDir, 'semantic', 'colors-light.json');
  const semanticContent = JSON.stringify({ semantic: tokens.semantic }, null, 2);
  
  if (dryRun) {
    console.log(`[DRY RUN] Would write: ${semanticPath}`);
  } else {
    fs.mkdirSync(path.dirname(semanticPath), { recursive: true });
    fs.writeFileSync(semanticPath, semanticContent);
    console.log(`✅ Wrote ${semanticPath}`);
  }

  console.log('✅ All token files written');
}

function readLocalTokens() {
  console.log('📖 Reading local token files...');
  
  // Read all JSON files from source directory
  const tokens = {};
  
  const readDir = (dir) => {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    files.forEach(file => {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        readDir(fullPath);
      } else if (file.name.endsWith('.json')) {
        const content = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
        Object.assign(tokens, content);
      }
    });
  };
  
  readDir(CONFIG.tokensSourceDir);
  console.log('✅ Local tokens loaded');
  return tokens;
}

// ============================================
// Main Functions
// ============================================
async function pullFromFigma() {
  console.log('\n🔽 PULL: Figma → Code\n');

  // Check environment variables
  const token = process.env.FIGMA_PERSONAL_ACCESS_TOKEN;
  const fileKey = process.env.FIGMA_FILE_KEY;

  if (!token || !fileKey) {
    console.error('❌ Missing environment variables:');
    console.error('   FIGMA_PERSONAL_ACCESS_TOKEN');
    console.error('   FIGMA_FILE_KEY');
    process.exit(1);
  }

  try {
    // Fetch from Figma
    const figmaApi = new FigmaAPI(token, fileKey);
    const figmaData = await figmaApi.fetchVariables();

    // Transform to DTCG format
    const tokens = figmaVariablesToTokens(figmaData);

    // Write to local files
    writeTokenFiles(tokens);

    console.log('\n✅ Sync complete!');
    console.log('   Next steps:');
    console.log('   1. Review changes: git diff');
    console.log('   2. Build tokens: npm run tokens:build');
    console.log('   3. Commit changes: git add . && git commit -m "chore: sync tokens from Figma"');
  } catch (error) {
    console.error('❌ Sync failed:', error.message);
    process.exit(1);
  }
}

async function pushToFigma() {
  console.log('\n🔼 PUSH: Code → Figma\n');

  console.log('⚠️  Pushing to Figma requires Tokens Studio plugin:');
  console.log('\n📋 Steps:');
  console.log('   1. Build tokens: npm run tokens:build');
  console.log('   2. Open your Figma file');
  console.log('   3. Open Tokens Studio plugin (Cmd+/)');
  console.log('   4. Go to Settings → Sync');
  console.log('   5. Choose "Import from file"');
  console.log('   6. Select:', path.relative(process.cwd(), CONFIG.figmaTokensPath));
  console.log('   7. Click "Import tokens"');
  console.log('   8. Apply changes to Figma variables');
  
  console.log('\n📖 Alternative: GitHub Sync');
  console.log('   1. Push changes to GitHub');
  console.log('   2. In Figma Tokens Studio, configure GitHub sync');
  console.log('   3. Pull changes automatically');
}

// ============================================
// Entry Point
// ============================================
async function main() {
  console.log('🎨 MRS Design System - Figma Token Sync');
  console.log('========================================\n');

  if (dryRun) {
    console.log('🔍 DRY RUN MODE - No files will be modified\n');
  }

  if (direction === 'pull') {
    await pullFromFigma();
  } else if (direction === 'push') {
    await pushToFigma();
  } else {
    console.error('❌ Invalid direction. Use --direction=pull or --direction=push');
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { FigmaAPI, figmaVariablesToTokens };

