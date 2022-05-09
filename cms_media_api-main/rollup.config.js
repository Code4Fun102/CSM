import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import run from '@rollup/plugin-run';

const isDev = process.env.ROLLUP_WATCH === 'true';

export default defineConfig({
  input: 'src/main.ts',
  output: {
    file: 'dist/server.mjs',
    format: 'es',
    sourcemap: isDev,
  },
  plugins: [
    typescript({ module: 'esnext', sourceMap: isDev }),
    isDev && run({ execArgv: ['-r', 'source-map-support/register'] }),
  ],
});
