const webpack = require('webpack')
const { resolve } = require('path')

const babelOptions = {
  ignore: /node_modules/,
  presets: [['es2015', { modules: false }], 'react'],
  plugins: ['transform-es2015-modules-umd']
}

const config = {
  entry: './index.js',
  output: { filename: 'dist.js', path: resolve('./') },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loaders: [{ loader: 'babel-loader', options: babelOptions }]
      }
    ]
  }
}

module.exports = config
