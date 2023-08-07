const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const PATHS = {
  src: path.resolve(process.cwd(), "resources"),
  dist: path.resolve(process.cwd(), "public")
};

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
      common: `${PATHS.src}/js/common`,
      index: `${PATHS.src}/index`,
      news: `${PATHS.src}/js/news`,
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '',
        assetModuleFilename: 'images/[name][ext]',
        clean: true
    },
    devServer: {
      historyApiFallback: true,
        port: 9000,
        compress: true,
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
              },
            },
            {
              test: /\.html$/,
              use: [
                {
                  loader: 'html-loader',
                },
              ],
            },
            {
              test: /\.(scss|css)$/,
              use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
              ],
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './resources/index.html',
            chunks: ["index", "common"],
        }),
        new htmlWebpackPlugin({
          filename: 'news.html',
          template: './resources/html/pages/news.html',
          chunks: ["news", "common"],
      }),
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
    ]
};