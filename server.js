'use strict';


var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var open = require('open');

var host = 'blog.liuchengyong.cn';

new WebpackDevServer(webpack(config), config.devServer)
    .listen(config.devServer.port, 'blog.liuchengyong.cn', (err) => {
        if (err) {
            console.log(err);
        }
        console.log(`Listening at ${host}:${config.devServer.port}`);
        open("http://" + host + ":" + config.devServer.port + "/webpack-dev-server/");
    });
