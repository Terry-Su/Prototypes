var webpack = require('webpack');
var path = require('path');

/**
 * 0 - TargetsManagement
 */
var mode = 0;

var isProduction = false;

var plugins = [];

try {
  mode = /\d+/.exec(process.argv.filter(arg => /devmode/.test(arg))[0])[0];
  isProduction = process.argv.filter(arg => /devProd/.test(arg)).length > 0;
} catch (e) {

}

if (isProduction) {
  plugins.push(new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'));
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }));
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}


var entryMap = {
  '0': './TargetsManagement/src/entry.js'
}

var outputMap = {
  '0': {
    path: path.resolve(__dirname, 'TargetsManagement/prototype/js'),
    filename: 'bundle.js'
  }
}

var entry = entryMap[mode]
var output = outputMap[mode]


module.exports = {
  entry: entry,
  output: output,
  module: {
    loaders: [
      {
        test: /\.js.*/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-2', 'react']
        }
      },
      {
        test: /\.css?/,
        loader: "style!css"
      },
      {
        test: /\.scss?/,
        exclude: /node_modules/,
        loader: "style!css!sass"
      }
    ]
  },
  plugins: plugins
}
