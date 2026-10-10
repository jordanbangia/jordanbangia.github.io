// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jordanbangia.com',
  build: { inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
});
