module.exports = {
  external: [],
  entry: './index.js',
  dest: './build.js',
  format: 'cjs',
  plugins: [
    require('rollup-plugin-commonjs')(),
    require('rollup-plugin-babel')({
      "babelrc": false,
      "exclude": 'node_modules/**',
      "runtimeHelpers": true,
      "plugins": [
        "transform-async-to-generator",
        "syntax-async-functions",
        "transform-flow-strip-types",
        "transform-runtime",
        "transform-class-properties",
        [
          "transform-strict-mode",
          {
            "strict": false
          }
        ]
      ],
      "presets": [
        "es2015-rollup",
        "stage-2"
      ]
    }),
    // require('rollup-plugin-cleanup')()
  ]
}
