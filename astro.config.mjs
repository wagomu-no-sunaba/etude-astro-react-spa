// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [react()],
  vite: {
    plugins: [TanStackRouterVite()],
  },
});
