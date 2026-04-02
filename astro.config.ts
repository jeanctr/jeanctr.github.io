import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jeanctr.github.io',
  base: '/website',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
