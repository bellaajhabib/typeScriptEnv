const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.join(__dirname, 'src/index.ts'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                exclude: /(node_modules)/,
                use: ['ts-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
        }),
    ],
    stats: 'minimal',
    devtool: 'source-map',
    mode: 'development',
    devServer: {
        open: false,
        static: path.resolve(__dirname, './dist'),
        port: 4000,
    },
};