/// <reference types="vitest/config" />
/**
 * Vite configuration for MRS Design System
 * Library mode with dual exports (ESM + CJS)
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// Bundle analyzer (optional - install with: npm i -D rollup-plugin-visualizer)
// import { visualizer } from 'rollup-plugin-visualizer';

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react({
    jsxRuntime: 'automatic'
  }), dts({
    include: ['src'],
    exclude: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.tsx'],
    insertTypesEntry: true
  })],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@theme': resolve(__dirname, './src/theme'),
      '@utils': resolve(__dirname, './src/utils')
    }
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        lazy: resolve(__dirname, 'src/lazy.ts'),
      },
      name: 'MRSUI',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'mjs' : 'js'}`
    },
    copyPublicDir: false,
    rollupOptions: {
      external: [
        'react', 
        'react-dom', 
        'react/jsx-runtime',
        /^@mui\/.*/,
        /^@emotion\/.*/,
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mui/material': 'MaterialUI',
          '@emotion/react': 'EmotionReact',
          '@emotion/styled': 'EmotionStyled'
        },
        preserveModules: false,
        exports: 'named',
      },
      // Enable bundle analysis (uncomment if visualizer installed)
      // plugins: [
      //   visualizer({
      //     filename: './dist/stats.html',
      //     open: true,
      //     gzipSize: true,
      //     brotliSize: true,
      //   })
      // ]
    },
    sourcemap: true,
    minify: false
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
});