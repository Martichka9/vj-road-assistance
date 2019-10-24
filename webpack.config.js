const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

  module.exports = {
    mode: 'development',
    entry: {
      app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Development',
        filename: 'index.html',
        template: './src/index.html',
        inject: 'body',
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[hash].css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
      })
    ],
    module: {
        rules: [
            {
                test: /\.module\.s(a|c)ss$/,
                loader: [
                isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                    modules: true,
                    sourceMap: isDevelopment
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                    sourceMap: isDevelopment
                    }
                }
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                loader: [
                isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                    sourceMap: isDevelopment
                    }
                }
                ]
            }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  };