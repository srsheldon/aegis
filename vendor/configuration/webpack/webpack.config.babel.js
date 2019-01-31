const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const fs = require('fs');
const webpack = require('webpack');


module.exports = {
    mode: 'development',
    entry: {
        app: './client/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        https: {
            key: fs.readFileSync('server/conf/ryans-key.pem'),
            cert: fs.readFileSync('server/conf/ryans-cert.pem')
        },
        open: true,
        hotOnly: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: 'client/views/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};