// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  // PLACEHOLDER — swap for the real production domain before launch (needed for
  // absolute Open Graph / canonical URLs). See planning/decisions.md.
  site: 'https://remotekind.co',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx()],
  adapter: netlify()
});