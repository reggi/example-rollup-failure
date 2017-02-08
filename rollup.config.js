module.exports = {
  external: [],
  entry: './index.js',
  dest: './build.js',
  format: 'cjs',
  plugins: [
    require('rollup-plugin-commonjs')(),
    require('rollup-plugin-babel')({
      "babelrc": false,
      "exclude": 'packages/proxypass-app/node_modules/**',
      "include": 'packages/proxypass-app/**',
      "runtimeHelpers": true,
      "externalHelpers": false,
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
        'external-helpers',
        "es2015-rollup",
        "stage-2"
      ]
    }),
    // require('rollup-plugin-cleanup')()
  ]
}
