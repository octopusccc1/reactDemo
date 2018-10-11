'use strict';

const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const getClientEnvironment = require('./env');
const paths = require('./paths');

const publicPath = '/';
const publicUrl = '';
const env = getClientEnvironment(publicUrl);

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    door: [
      //引入三个es6新特性
      require.resolve('./polyfills'),
      //热更新
      require.resolve('react-dev-utils/webpackHotDevClient'),
      //入口文件，仅需修改此行代码
      path.resolve(paths.appSource, "door/index.js")
      // paths.appIndexJs
    ],
    // test: [
    //   //引入三个es6新特性
    //   require.resolve('./polyfills'),
    //   //热更新
    //   require.resolve('react-dev-utils/webpackHotDevClient'),
    //   //入口文件，仅需修改此行代码
    //   path.resolve(paths.appSource, "test/index.js")
    //   // paths.appIndexJs
    // ],
  },
  output: {
    pathinfo: true,
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: publicPath,
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  resolve: {
    modules: ['node_modules', paths.appNodeModules].concat(
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    alias: {
      'react-native': 'react-native-web',
    },
    plugins: [
    ],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.md$/,
        use: [{
          loader: 'raw-loader'
        }]
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', "stage-1", "stage-2",],
        }
      },
      {
        test: /\.(js|jsx)$/,
        include: paths.appSrc,
        loader: 'babel',
        query: {
          plugins: [
            ['import', [{ libraryName: "antd", style: 'css' }]],
          ],
          cacheDirectory: true
        }
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader?'
        }, {
          loader: 'postcss-loader?'
        }, {
          loader: 'less-loader?',
          options: { javascriptEnabled: true }

        }]
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, './source/assets/css/lib'),
          path.join(__dirname, 'node_modules/antd')
        ],
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader?'
        }, {
          loader: 'postcss-loader?'
        }]
      },
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve('eslint'),

            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: paths.appSource,
      },

      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.(js|jsx|mjs)$/,
            include: paths.appSource,
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: true,
            },
          },
          {
            exclude: [/\.(js|jsx|mjs)$/, /\.(css|less)$/, /\.html$/, /\.md$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },

        ],
      },
    ],
  },
  plugins: [
    new InterpolateHtmlPlugin(env.raw),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    //添加以下内容
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['door'],//'door',
      template: paths.appHtml,
      filename: "index.html"
    }),
    //结束
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin(env.stringified),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  performance: {
    hints: false,
  },
};
