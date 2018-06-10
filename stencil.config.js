const path = require('path');
const sass = require('@stencil/sass');

exports.config = {
  baseUrl: 'stencil-bulma',
  namespace: 'stencil-bulma',
  autoprefixer: {
    browsers: ['last 2 versions']
  },
  outputTargets: [{
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
    })
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};