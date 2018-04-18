const path = require('path');
const postcss = require('@stencil/postcss');
const sass = require('@stencil/sass');

exports.config = {
  namespace: 'stencil-bulma',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: false
    },
    {
      type: 'dist'
    }
  ],
  plugins: [
    sass({
      includePaths: [path.resolve(__dirname, 'node_modules')]
    }),
    postcss({
      plugins: [
        require('autoprefixer')({
          browsers: ['last 2 versions']
        }),
        require('cssnano')(),
        require('postcss-reporter')()
      ]
    })
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
