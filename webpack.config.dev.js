const path = require('path');
const config = require('./webpack.config');

module.exports = {
  ...config,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './public',
    port: 3000,
    hot: true,
    proxy: {
      '/todos': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
};
