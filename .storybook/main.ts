import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // viteFinal: async (config) => {
  //   config.optimizeDeps = {
  //     ...config.optimizeDeps,
  //     include: [
  //       ...(config.optimizeDeps?.include ?? []),
  //       'react/jsx-dev-runtime',
  //     ],
  //     exclude: [
  //       ...(config.optimizeDeps?.exclude ?? []),
  //       // see https://github.com/storybookjs/storybook/issues/28542#issuecomment-2255847203
  //       'node_modules/.cache/storybook',
  //       // and see https://github.com/storybookjs/storybook/issues/28542#issuecomment-2225296609
  //       `fake-dep-${Math.random()}`,
  //     ],
  //   };

  //   return config;
  // },
};
export default config;
