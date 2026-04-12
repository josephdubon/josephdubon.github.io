import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  site: 'https://josephdubon.github.io',
  output: 'static',
  outDir: './docs',
});
