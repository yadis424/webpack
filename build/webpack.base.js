const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: path.join(__dirname, '../src/index.ts'),
    output: {
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
            '@': path.join(__dirname, '../src')
        }
    },
    module: {
        rules: [
            { test: /.ts$/, use: 'ts-loader', exclude: /node_modules/ },
            { test: /.less$/, use: ['style-loader', 'css-loader', 'less-loader'], exclude: /node_modules/ }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../index.html'),

        })
    ]
}