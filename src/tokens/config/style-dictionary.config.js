/**
 * MRS Design System - Style Dictionary Configuration v4
 * 
 * This configuration transforms design tokens from JSON (DTCG format)
 * into multiple output formats:
 * - CSS Variables (for web apps and documentation)
 * - SCSS Variables (for Sass-based projects)
 * - TypeScript/JavaScript (for React apps)
 * - JSON (for Figma Tokens Studio sync)
 * - Documentation (HTML preview)
 * 
 * @see https://styledictionary.com/
 */

export default {
  log: {
    verbosity: 'verbose',
  },
  
  source: [
    'src/tokens/source/**/*.json',
  ],
  
  platforms: {
    // ============================================
    // CSS CUSTOM PROPERTIES
    // ============================================
    // Output: CSS variables with --mrs- prefix
    // Usage: Import in your app's root CSS file
    css: {
      transformGroup: 'css',
      buildPath: 'src/tokens/generated/css/',
      prefix: 'mrs',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
            showFileHeader: true,
          },
        },
      ],
    },
    
    // ============================================
    // SCSS VARIABLES
    // ============================================
    // Output: SCSS variables with $mrs- prefix
    // Usage: @import in your .scss files
    scss: {
      transformGroup: 'scss',
      buildPath: 'src/tokens/generated/scss/',
      prefix: 'mrs',
      files: [
        {
          destination: 'tokens.scss',
          format: 'scss/variables',
          options: {
            outputReferences: true,
            showFileHeader: true,
          },
        },
        {
          destination: 'tokens-map.scss',
          format: 'scss/map-flat',
          options: {
            showFileHeader: true,
          },
        },
      ],
    },
    
    // ============================================
    // TYPESCRIPT/JAVASCRIPT
    // ============================================
    // Output: ES6 modules with TypeScript types
    // Usage: import { ColorPrimaryMain } from '@/tokens'
    js: {
      transformGroup: 'js',
      buildPath: 'src/tokens/generated/ts/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
          options: {
            showFileHeader: true,
          },
        },
        {
          destination: 'tokens.d.ts',
          format: 'typescript/es6-declarations',
          options: {
            showFileHeader: true,
          },
        },
      ],
    },
    
    // ============================================
    // JSON EXPORTS
    // ============================================
    // Multiple JSON formats for different use cases
    json: {
      transformGroup: 'js',
      buildPath: 'src/tokens/generated/json/',
      files: [
        // Flat JSON: All tokens in single object
        {
          destination: 'tokens-flat.json',
          format: 'json/flat',
        },
        // Nested JSON: Hierarchical structure
        {
          destination: 'tokens-nested.json',
          format: 'json/nested',
        },
        // Figma Tokens Studio format
        {
          destination: 'figma-tokens.json',
          format: 'json/nested',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    
  },
};
