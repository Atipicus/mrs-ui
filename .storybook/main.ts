import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-themes',
    '@storybook/addon-vitest'
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-notes',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    '@storybook/addon-themes',
    '@storybook/addon-vitest',
  ],
  framework: '@storybook/react-vite',
};
export default config;