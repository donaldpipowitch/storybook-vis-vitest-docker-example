import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import type { UserConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { storybookVis } from 'storybook-addon-vis/vitest-plugin';

// https://vitejs.dev/config/
export default {
  test: {
    projects: [
      {
        plugins: [tsconfigPaths(), storybookTest(), storybookVis()],
        test: {
          name: 'storybook',
          browser: {
            api: {
              // allowedHosts: ['host.docker.internal'],
            },
            enabled: true,
            provider: 'playwright',
            instances: [
              {
                // @ts-expect-error
                connect: {
                  wsEndpoint: 'ws://127.0.0.1:3000',
                },
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
} satisfies UserConfig;
