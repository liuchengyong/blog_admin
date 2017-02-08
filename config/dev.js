var base = require('./default');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


var config = Object.assign({}, base.defaultSetting, {
    devtool: 'eval-source-map',
    entry: [
        `${base.src}/index.js`,
        `webpack-dev-server/client?http://localhost:${base.port}`,
        'webpack/hot/dev-server'
    ],
    output: {
        path: base.dev,
        filename: `index-${base.version.replace(/\./g,'-')}.js`,
        publicPath: './'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'blogAdmin',
            template: 'index-dev.ejs'
        }),
        new ExtractTextPlugin(`index-${base.version.replace(/\./g,'-')}.css`),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: base.dev,
        colors: true,
        port: base.port,
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: "json-loader"
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },  {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", 'css-loader!autoprefixer-loader?{browsers:["last 3 version", "Firefox 15",">1%"]}!sass-loader?sourceMap')
        }, , {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader'
        }]
    }
});

module.exports = config;
