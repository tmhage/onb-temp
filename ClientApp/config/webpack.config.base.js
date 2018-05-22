const helpers = require('./helpers')
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

let config = {
  entry: {
    'main': helpers.root('/ClientApp/src/main.ts')
  },
  output: {
    path: helpers.root('/wwwroot/dist'),
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[hash].js',
    publicPath: '/dist/'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js', '.html'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'vuetify': 'vuetify/es5/components',
    }
  },
  module: {
    
    rules: [
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: 'import-glob-loader',
      enforce: 'pre'
    },
    {
      test: /\.ts$/,
      exclude: /node_modules/,
      enforce: 'pre',
      loader: 'tslint-loader'
    },
    {
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: 'awesome-typescript-loader'
    },
    {
      test: /\.html$/,
      loader: 'raw-loader',
      exclude: ['./src/index.html']
    }
    ]
  },
  plugins: [
    new NamedModulesPlugin(),
    new CopyWebpackPlugin([{
      from: 'ClientApp/src/assets',
      to: './assets'
    } ])
  ]
}

module.exports = config
