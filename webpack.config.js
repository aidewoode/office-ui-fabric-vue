const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(env) {
  const distEntry = {
    'index.js': './src/index.js',
    'index.css': './src/index.css'
  };

  const docsEntry = {
    'index.docs.js': './docs/index.js',
    'index.docs.css': './docs/index.css'
  }

  const entry = (env == 'development') ? docsEntry : Object.assign(distEntry, docsEntry);

  let uglifyPlugin = []

  if (env == 'production') {
    uglifyPlugin.push(new webpack.optimize.UglifyJsPlugin());
  }

  return {
    context: __dirname,
    entry: entry,
    output: {
      path: __dirname + '/dist',
      filename: '[name]',
      publicPath: 'http://localhost:8080/dist',
      library: 'OfficeUIFabricVue',
      libraryTarget: 'umd'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          exclude: path.resolve(__dirname, 'node_modules'),
          use: [
            {
              loader: 'vue-loader',
              options: {
                // when use render function in orgChart component, will get empty vnode in $slot,
                // so use this options to remove empty vnode, see: https://github.com/vuejs/vue/issues/5329
                preserveWhitespace: false
              }
            },
            { loader: 'eslint-loader' }
          ]
        },
        {
          test: /\.js$/,
          exclude: path.resolve(__dirname, 'node_modules'),
          use: [
            'babel-loader',
            'eslint-loader'
          ]
        },
        {
          test: /\.js$/,
          include: path.resolve(__dirname, 'node_modules/office-ui-fabric-js/dist'),
          use: ['script-loader']
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        },
        {
          test: /\.md$/,
          use: [
            'html-loader',
            'markdown-loader'
          ]
        }
      ]
    },
    plugins: [
      ...uglifyPlugin,
      new ExtractTextPlugin('[name]'),
      //  define the vue enviroment.
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env)
        }
      })
    ]
  }
}
