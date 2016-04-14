const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const merge = require('webpack-merge');
const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

process.env.BABEL_ENV = TARGET;

const common = {
  // Entry accepts a path or an object of entries. We'll be using the
  // latter form given it's convenient with more complex configurations.
  entry: {
    src: PATHS.src,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: PATHS.src,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: PATHS.src,
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass'),
        include: PATHS.src,
      },
      {
        test: /\.css/,
        loaders: ExtractTextPlugin.extract('style', 'css'),
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)$/,
        loader: 'url-loader?limit=8192',
      },
    ],
  },
};


// Default configuration
if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {

    devtool: 'eval-source-map',

    devServer: {
      contentBase: PATHS.build,

      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // 0.0.0.0 is available to all network devices unlike default
      // localhost
      host: process.env.HOST || '0.0.0.0',
      port: process.env.PORT,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {});
}
