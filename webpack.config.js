var webpack = require('webpack');
var path = require('path');
var NODE_DEV = process.env.NODE_DEV
var NODE_ENV = process.env.NODE_ENV


/**
 * 0 - TargetsManagement
 */
var isProduction = false;

var plugins = [];

if (NODE_ENV === 'prod') {
  plugins.push(new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'));
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }));
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}


var map = {
  '0': {
    entry: './TargetsManagement/src/entry.js',
    output: {
      path: path.resolve(__dirname, 'TargetsManagement/prototype/js'),
      filename: 'bundle.js'
    }
  },
  '1': {
    entry: './Blog/src/entry.js',
    output: {
      path: path.resolve(__dirname, 'Blog/prototype/js'),
      filename: 'bundle.js'
    }
  }
}

var entry = map[NODE_DEV].entry
var output = map[NODE_DEV].output


module.exports = {
  entry: entry,
  output: output,
  module: {
    rules: [
      {
        test: /\.js.*/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-2', 'react']
            }
          }
        ]
      }, {
        test: /\.css?/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }, {
        test: /\.scss?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: plugins
}
