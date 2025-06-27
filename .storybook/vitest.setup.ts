import { setProjectAnnotations } from '@storybook/react-vite';
import { vis, visAnnotations } from 'storybook-addon-vis/vitest-setup';
import { beforeAll } from 'vitest';
import * as previewAnnotations from './preview';

const annotations = setProjectAnnotations([visAnnotations, previewAnnotations]);

beforeAll(annotations.beforeAll);

vis.setup({ auto: true });
