var base = require('./base');
var version = require('./package.json').version;

module.exports = {
    output: {
        path: `./${base.test}`,
        filename: `index-${version.replace(/\./g,'-')}.js`
    },
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
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'blogAdmin',
            template: './index-test.ejs'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin(`index-${version.replace(/\./g,'-')}.css`)
    ],
    devServer: {
        contentBase: `./${base.test}/public`,
        colors: true,
        port: base.port,
        historyApiFallback: true,
        inline: true,
        hot: true
    },

};
    
    