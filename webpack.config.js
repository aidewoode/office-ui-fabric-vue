const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function(env) {
  const entryPathName = env == 'production' ? 'src' : 'docs';
  let uglifyPlugin = []

  if (env == 'production') {
    uglifyPlugin.push(new webpack.optimize.UglifyJsPlugin());
  }


  return {
    context: __dirname,
    entry: {
      'index.js': './' + entryPathName + '/index.js',
      'index.css': './' + entryPathName + '/index.css'
    },
    output: {
      path: __dirname + '/dist',
      filename: '[name]',
      library: 'OfficeUIFabricVue',
      libraryTarget: 'umd'
    },
    devServer: {
      contentBase: __dirname + '/docs',
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          use: [
            'vue-loader',
            'eslint-loader'
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            'eslint-loader'
          ]
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        }
      ]
    },
    plugins: [
      ...uglifyPlugin,
      new ExtractTextPlugin('index.css'),
      //  define the vue enviroment.
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env)
        }
      })
    ]
  }
}
