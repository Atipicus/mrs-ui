/**
 * MRS Design System - Style Dictionary Configuration v4
 * 
 * This configuration transforms design tokens from JSON (DTCG format)
 * into multiple output formats: CSS Variables, TypeScript, and Documentation.
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
    // CSS Custom Properties
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
          },
        },
      ],
    },
    
    // TypeScript/JavaScript tokens
    js: {
      transformGroup: 'js',
      buildPath: 'src/tokens/generated/ts/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        },
        {
          destination: 'tokens.json',
          format: 'json/nested',
        },
      ],
    },
  },
};
