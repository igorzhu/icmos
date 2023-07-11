const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const FileIncludeWebpackPlugin = require('file-include-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
console.log('isDev: ', isDev)

module.exports = {
    mode: 'development',
    entry: './resources/js/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public'),
        //assetModuleFilename: '[name][ext]',
        clean: true
    },
    performance: {
        hints: false,
        maxAssetSize: 512000,
        maxEntrypointSize: 512000
    },
    devServer: {
        port: 9000,
        compress: true,
        hot: isDev,
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: "/public/css/",
                            },
                        }, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'My web page',
            filename: 'index.html',
            template: './resources/html/index.html',
            minify: {
                collapseWhitespace: !isDev
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new FileIncludeWebpackPlugin(
            {
                source: './resources/html/pages/',
                htmlBeautifyOptions: {
                    'indent_size': 2
                }
            },
        )
    ]
};