const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FileIncludeWebpackPlugin = require('file-include-webpack-plugin')

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
      article: `${PATHS.src}/js/article`,
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '',
        //assetModuleFilename: 'images/[name][ext]',
        assetModuleFilename: (pathData) => {
            const filepath = path
                .dirname(pathData.filename)
                .split("/")
                .slice(1)
                .join("/");
            return `${filepath}/[name][ext]`;
        },
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
            title: 'Главная',
            filename: 'index.html',
            template: './resources/index.html',
            chunks: ["index", "common"],
            inject: true,
            hash: true,
            meta: {
                'description': { name: 'description', contnet: 'Описание главной страницы' },
                'keyword': { name: 'keywords', content: 'icmos' },
                'og:title': { property: 'og:title', content: 'Главная' },
                'og:description': { property: 'og:description', content: 'icmos' },
                'og:type': { property: 'og:type', content: 'website' },
                'og:url': { property: 'og:url', content: 'https://icmos.ru/' },
                'viewport': 'width=device-width,initial-scale=1,maximum-scale=3',
                /*'og:image': { property: 'og:image', content: '...' },
                'twitter:card': { name: 'twitter:card', content: 'summary_large_image' },
                'twitter:title': { name: 'twitter:title', content: '...' },
                'twitter:description': { name: 'twitter:description', content: '...' },
                'twitter:image': { name: 'twitter:image', content: '...' }*/
            }
        }),
        new htmlWebpackPlugin({
          filename: 'news.html',
          template: './resources/html/pages/news.html',
          chunks: ["news", "common"],
          title: "Новости"
      }),
        new htmlWebpackPlugin({
            filename: 'article.html',
            template: './resources/html/pages/article.html',
            chunks: ["article", "common"],
            title: "Статья"
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
        //
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        /*new FileIncludeWebpackPlugin( // это говнище не работает
            {
                source: './resources/html/pages', // relative path to your templates
                replace: [{
                    regex: /\[\[FILE_VERSION]]/, // additional things to replace
                    to: 'v=1.0.0',
                }],
            },
        ),*/
    ]
};