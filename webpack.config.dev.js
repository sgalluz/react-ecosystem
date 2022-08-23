const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.[jt]s(x?)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env']
            }
          },
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                noEmit: false
              }
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /(node_modules)/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
    clean: true
  },
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