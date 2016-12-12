var base = require('./default');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

var CompressionPlugin = require('compression-webpack-plugin');  // gzip 压缩


var imageMinOptions = {
    test: './src/Images/**',
    pngquant: {
        quality: '95-100'
    },
    optipng: {
        optimizationLevel: 9
    }
};

var htmlMinOptions = {
    "caseSensitive": false,
    "collapseBooleanAttributes": true,
    "collapseInlineTagWhitespace": false,
    "collapseWhitespace": true,
    "html5": true,
    "removeComments": true,
    "removeEmptyAttributes": true
};


var config = Object.assign({}, base.defaultSetting, {
    entry: `${base.src}/index.js`,
    output: {
        path: base.dist,
        filename: `index-${base.version.replace(/\./g,'-')}.js`
    },
    plugins: [
        new webpack.DefinePlugin({ // <-- 减少 React 大小的关键
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new webpack.optimize.DedupePlugin(), //删除类似的重复代码
        new webpack.optimize.UglifyJsPlugin({
            comments:false,
            sourceMap:false
        }), //最小化一切
        new webpack.optimize.AggressiveMergingPlugin(),//合并块
        new HtmlWebpackPlugin({
            title: 'blogAdmin',
            template: 'index-dist.ejs',
            minify: htmlMinOptions
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin(`index-${base.version.replace(/\./g,'-')}.css`),
        new ImageminPlugin(imageMinOptions),
        new CompressionPlugin({  
          asset: "[path].gz",
          algorithm: "gzip",
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0.8
        })
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
            loader: ExtractTextPlugin.extract("style-loader", 'css-loader!autoprefixer-loader?{browsers:["last 2 version", "Firefox 15"]}')
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", 'css-loader!autoprefixer-loader?{browsers:["last 2 version", "Firefox 15"]}!sass-loader')
        }]
    }
});

module.exports = config;
