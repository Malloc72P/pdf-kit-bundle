import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import polyfill from 'rollup-plugin-polyfill';


export default {
    input: 'src/main.js',
    output: {
      format: 'iife',
      file: 'testing-bed/public/rollup-bundle.js',
      globals: {
      },
    },
    plugins: [
        commonjs(), 
        // inject({ process: 'process', global: 'window' }), 
        nodeResolve({
            preferBuiltins: false,
            mainFields: ['module', 'jsnext:main', 'browser'],
          }),
        json(),
        polyfill([])
        // nodePolyfills({include: ['process']})
    ],
  };
