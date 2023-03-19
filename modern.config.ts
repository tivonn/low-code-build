import appTools, { defineConfig } from '@modern-js/app-tools';
import bffPlugin from '@modern-js/plugin-bff';
import expressPlugin from '@modern-js/plugin-express';
import tailwindCSSPlugin from '@modern-js/plugin-tailwindcss';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  plugins: [appTools(), bffPlugin(), expressPlugin(), tailwindCSSPlugin()],
});
