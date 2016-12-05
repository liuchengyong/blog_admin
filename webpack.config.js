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







// module.exports = {
//     devtool: 'eval-source-map',
//     entry: __dirname + "/src/index.js",
//     output: {
//         path: __dirname + "/public",
//         filename: `index-${version.replace(/\./g,'-')}.js`
//     },
//     module: {
//         loaders: [{
//             test: /\.json$/,
//             loader: "json-loader"
//         }, {
//             test: /\.js$/,
//             exclude: /node_modules/,
//             loader: 'babel-loader'
//         }, {
//             test: /\.css$/,
//             loader: ExtractTextPlugin.extract("style-loader", "css-loader")
//         }, {
//             test: /\.scss$/,
//             loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
//         }]
//     },
//     plugins: [
//         new webpack.BannerPlugin("Copyright liuchengyong"),
//         new HtmlWebpackPlugin({
//             title: 'blogAdmin',
//             template: __dirname + '/index.ejs'
//         }),
//         new webpack.HotModuleReplacementPlugin(),
//         new ExtractTextPlugin(`index-${version.replace(/\./g,'-')}.css`)
//     ],
//     devServer: {
//         contentBase: "./public",
//         colors: true,
//         port: 3000,
//         historyApiFallback: true,
//         inline: true,
//         hot: true
//     },
//     resolve: {
//         alias: {
//             'styles': __dirname + '/src/Styles/',
//             'components': __dirname + '/src/Components/',
//             'pages': __dirname + '/src/Pages/',
//             'actions': __dirname + '/src/Actions/',
//             'config': __dirname + '/src/Configs/',
//             'stores': __dirname + '/src/Stores',
//             'reducers': __dirname + '/src/Reducers'
//         }
//     }
// }
