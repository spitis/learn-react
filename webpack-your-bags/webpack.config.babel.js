var webpack = require('webpack');
var production = process.env.NODE_ENV === 'production';
var CleanPlugin = require('clean-webpack-plugin');

var plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name:      'main', // Move dependencies to our main file
        children:  true, // Look for common dependencies in all children,
        minChunks: 2, // How many times a dependency must come up before being extracted
    }),
];

if (production) {
    plugins = plugins.concat([

        // Cleanup the builds/ folder before
        // compiling our final assets
        new CleanPlugin(['builds']),

        // This plugin looks for similar chunks and files
        // and merges them for better caching by the user
        new webpack.optimize.DedupePlugin(),

        // This plugins optimizes chunks and modules by
        // how much they are used in your app
        new webpack.optimize.OccurenceOrderPlugin(),

        // This plugin prevents Webpack from creating chunks
        // that would be too small to be worth loading separately
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 51200, // ~50kb
        }),

        // This plugin minifies all the Javascript code of the final bundle
        new webpack.optimize.UglifyJsPlugin({
            mangle:   true,
            compress: {
                warnings: false, // Suppress uglification warnings
            },
        }),

        // This plugins defines various variables that we can set to false
        // in production to avoid code related to them from being compiled
        // in our final bundle
        new webpack.DefinePlugin({
            __SERVER__:      !production,
            __DEVELOPMENT__: !production,
            __DEVTOOLS__:    !production,
            'process.env':   {
                BABEL_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),

    ]);
}



module.exports = {
    entry:  './src',
    output: {
        path: './builds',
        filename: production ? '[name]-[hash].js' : 'bundle.js',
        chunkFilename: production ? '[name]-[chunkhash].js' : '[name]-bundle.js',
        publicPath: './builds/'
    },
    plugins: plugins,
    debug: !production,
    devtool: production ? false : 'eval',
    devServer: {
      hot: true
    },
    module: {
      loaders: [
        {
          test: /\.js/,
          loader: 'babel',
          include: __dirname + '/src'
        },
        {
          test:   /\.scss/,
          loader: 'style!css!sass'
        },
        {
          test:   /\.html/,
          loader: 'html'
        }
      ]
    }
};
