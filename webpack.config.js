var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var version = require('./package.json').version;




var env = process.argv[2].slice(6);

var configs = {
    dev: require('./config/dev'),
    dist: require('./config/dist'),
    test: require('./config/test')
};
module.exports = configs[env];