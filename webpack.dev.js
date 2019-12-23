const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3020,
    hot: true,
    hotOnly: true,
    clientLogLevel: 'debug',
    stats: 'minimal',
    historyApiFallback: true,
    open: false
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
