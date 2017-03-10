var path = require('path');
var version = require('../package.json').version;
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var srcPath = path.join(__dirname, '/../src');
var distPath = path.join(__dirname, '/../dist');
var devPath = path.join(__dirname, '/../public');
var testPath = path.join(__dirname, '/../test');

var defaultPort = 10001;


var defaultSetting = {
    devtool: "#inline-source-map",
    resolve: {
        alias: {
            'styles': `${srcPath}/styles/`,
            'components': `${srcPath}/components/`,
            'containers': `${srcPath}/containers/`,
            'actions': `${srcPath}/actions/`,
            'config': `${srcPath}/configs/`,
            'stores': `${srcPath}/stores`,
            'reducers': `${srcPath}/reducers`,
            'images': `${srcPath}/images`,
            'vendors': `${srcPath}/vendors`,
            'commons': `${srcPath}/commons`,
            'requests': `${srcPath}/requests`
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
