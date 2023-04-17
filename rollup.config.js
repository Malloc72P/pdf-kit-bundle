import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-polyfill-node';

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
        // polyfill([])
        nodePolyfills({include: ['process']})
    ],
  };

//   yarn run v1.22.19
// $ rollup -c

// src/main.js → testing-bed/public/rollup-bundle.js...
// (!) Circular dependencies
// polyfill-node._stream_duplex.js -> polyfill-node._stream_readable.js -> polyfill-node._stream_duplex.js
// polyfill-node._stream_duplex.js -> polyfill-node._stream_writable.js -> polyfill-node._stream_duplex.js
// node_modules/brotli/dec/decode.js -> node_modules/brotli/dec/dictionary.js -> node_modules/brotli/dec/dictionary-browser.js -> node_modules/brotli/dec/decode.js
// [!] RollupError: "readFileSync" is not exported by "polyfill-node.fs.js", imported by "node_modules/fontkit/dist/module.mjs".
// https://rollupjs.org/troubleshooting/#error-name-is-not-exported-by-module
// node_modules/fontkit/dist/module.mjs (2:8)
// 1: import $5OpyM$restructure from "restructure";
// 2: import {readFileSync as $5OpyM$readFileSync, readFile as $5OpyM$readFile} from "fs";
//            ^
// 3: import {applyDecoratedDescriptor as $5OpyM$applyDecoratedDescriptor} from "@swc/helpers";
// 4: import {Buffer as $5OpyM$Buffer} from "buffer";

// export default [
//   {
//     input : 'staging/pdfkit.js',
//     output: {
//       format: 'iife',
//       file: 'testing-bed/public/bundled-pdfkit.js'
//     }
//   },
//   {
//     input : 'staging/blob-stream.js',
//     output: {
//       format: 'iife',
//       file: 'testing-bed/public/bundled-blob-stream.js'
//     }
//   }
// ]
