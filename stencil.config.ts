const path = require('path');
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'stencil-bulma',
  outputTargets: [
    {
      type: 'www',
      baseUrl: '/stencil-bulma'
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
