var base = require('./base');
var ImageminPlugin = require('imagemin-webpack-plugin').default;

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
	removeEmptyAttributes:true,
	removeComments:true,
	minifyJS:true,
	minifyCSS:true
};


module.exports = {
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
            loader: ExtractTextPlugin.extract("style-loader", 'css-loader?minimize!./file.css!autoprefixer-loader?{browsers:["last 2 version", "Firefox 15"]}')
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", 'css-loader?minimize!./file.css!autoprefixer-loader?{browsers:["last 2 version", "Firefox 15"]}!sass-loader')
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'blogAdmin',
            template: './index-pro.ejs',
            minify:htmlMinOptions
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin(`index-${version.replace(/\./g,'-')}.css`),
        new webpack.optimize.UglifyJsPlugin([options]),
        new ImageminPlugin(imageMinOptions),
    ]
};
