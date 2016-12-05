var path = require('path');
var version = require('../package.json').version;
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var srcPath = path.join(__dirname, '/../src');
var distPath = path.join(__dirname, '/../dist');
var devPath = path.join(__dirname, '/../public');
var testPath = path.join(__dirname, '/../test');

var defaultPort = 3000;


var defaultSetting = {
    devtool: "#inline-source-map",
    resolve: {
        alias: {
            'styles': `${srcPath}/Styles/`,
            'components': `${srcPath}/Components/`,
            'pages': `${srcPath}/Pages/`,
            'actions': `${srcPath}/Actions/`,
            'config': `${srcPath}/Configs/`,
            'stores': `${srcPath}/Stores`,
            'reducers': `${srcPath}/Reducers`,
            'images': `${srcPath}/Images`
        }
    }
};

module.exports = {
    dist: distPath,
    dev: devPath,
    test: testPath,
    src: srcPath,
    port: defaultPort,
    version: version,
    defaultSetting: defaultSetting
};
