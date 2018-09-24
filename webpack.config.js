const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:'app.css'
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015','react'],
                    plugins: ['transform-object-rest-spread']
                }
            }

        },{
            test: /\.(ts|tsx)?$/,
            use: [
                {
                    loader: 'ts-loader'
                }
            ]
        },{
            test: /\.css$/,
           use: [
             MiniCssExtractPlugin.loader,
            'css-loader',
            'style-loader',
            'sass-loader',
          ]
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.jpg|.svg*.*$/,
            use: [{"loader":"file"}]
        }]
    }
}