

// export default {
//     input: 'src/main.js',
//     output: {
//       format: 'iife',
//       file: 'testing-bed/public/rollup-bundle.js',
//       globals: {
//       },
//     },
//     plugins: [
//         commonjs(), 
//         // inject({ process: 'process', global: 'window' }), 
//         nodeResolve({
//             preferBuiltins: false,
//             mainFields: ['module', 'jsnext:main', 'browser'],
//           }),
//         json(),
//         polyfill([])
//         // nodePolyfills({include: ['process']})
//     ],
//   };


export default [
  {
    input : 'staging/pdfkit.js',
    output: {
      format: 'iife',
      file: 'testing-bed/public/bundled-pdfkit.js'
    }
  },
  {
    input : 'staging/blob-stream.js',
    output: {
      format: 'iife',
      file: 'testing-bed/public/bundled-blob-stream.js'
    }
  }
]
