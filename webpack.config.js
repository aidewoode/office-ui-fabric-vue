const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const prism = require('prismjs');

module.exports = function(env) {
  const distEntry = {
    'index.js': './src/index.js',
    'index.css': './src/index.css'
  };

  const docsEntry = {
    'index.docs.js': './docs/index.js',
    'index.docs.css': './docs/index.css'
  }

  let entry = env.development ? docsEntry : Object.assign(distEntry, docsEntry);

  if (env.lib) {
    entry = { 'office-ui-fabric.js': './src/lib.js' }
  }

  let uglifyPlugin = []

  if (env.production) {
    uglifyPlugin.push(new webpack.optimize.UglifyJsPlugin());
  }

  return {
    context: __dirname,
    entry: entry,
    output: {
      path: env.lib? __dirname + '/lib' : __dirname + '/dist',
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
            'vue-loader',
            'eslint-loader'
          ]
        },
        {
          test: /\.js$/,
          exclude: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'lib')
          ],
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
            {
              loader: 'html-loader'
            },
            {
              loader: 'markdown-loader',
              options: {
                highlight: function (code, lang) {
                  if (typeof(lang) == 'undefined') { lang = 'markup'; }
                  return prism.highlight(code, prism.languages[lang]);
                }
              }
            }
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
          NODE_ENV: JSON.stringify(env.production ? 'production' : 'development')
        }
      })
    ]
  }
}
