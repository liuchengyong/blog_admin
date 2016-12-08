var base = require('./default');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = Object.assign({}, base.defaultSetting, {
    entry: `${base.src}/index.js`,
    output: {
        path: base.test,
        filename: `index-${base.version.replace(/\./g,'-')}.js`
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'blogAdmin',
            template: 'index-test.ejs'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin(`index-${base.version.replace(/\./g,'-')}.css`)
    ],
    module: {
        loaders: [{
            test: /\.json$/,
            loader: "json-loader"
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
        }]
    }
});

module.exports = config;