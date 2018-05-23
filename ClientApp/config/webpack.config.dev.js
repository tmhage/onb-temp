const helpers = require('./helpers')
const webpackConfig = require('./webpack.config.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DefinePlugin = require('webpack/lib/DefinePlugin')
const env = require('../environment/dev.env')

webpackConfig.module.rules = [...webpackConfig.module.rules,
  {
    test: /\.(s*)css$/,
    use: [{
      loader: 'style-loader'
    },
    {
      loader: 'css-loader'
    },
    {
      loader: 'sass-loader'
    }
    ]
  },
  {
    test: /\.styl$/,
    loader: ['style-loader', 'css-loader', 'stylus-loader']
  }
]

webpackConfig.plugins = [...webpackConfig.plugins,
  new HtmlWebpackPlugin({
    inject: false,
    template: helpers.root('/Views/Shared/_LayoutTemplate.cshtml'),
    filename: helpers.root('/Views/Shared/_Layout.cshtml'),
  }),
  new DefinePlugin({
    'process.env': env
  })
]

module.exports = webpackConfig
