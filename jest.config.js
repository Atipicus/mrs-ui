/**
 * Jest configuration for MRS Design System
 */

module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@theme/(.*)$': '<rootDir>/src/theme/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '\\.(css|less|scss|sass)$': '<rootDir>/tests/styleMock.js',
  },
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
        module: {
          type: 'commonjs',
        },
      },
    ],
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.stories.tsx',
    '!src/**/*.test.{ts,tsx}',
    '!src/**/index.ts',
    '!src/**/*.figma.tsx', // Exclude Figma Code Connect files
    '!src/tokens/generated/**', // Exclude generated token files
    '!src/tokens/examples/**', // Exclude token examples
    '!src/tokens/scripts/**', // Exclude token build scripts
    '!src/types/**', // Exclude type definition files
    '!src/lazy.ts', // Exclude lazy loading exports (just re-exports)
  ],
  coverageThreshold: {
    global: {
      branches: 80, // Current: 82.44% - maintain high branch coverage
      functions: 60, // Current: 64.28% - allow room for improvement
      lines: 70, // Current: 72.25% - maintain current level
      statements: 70, // Current: 70.67% - maintain current level
    },
  },
  coverageReporters: ['text', 'text-summary', 'html', 'lcov'],
};

