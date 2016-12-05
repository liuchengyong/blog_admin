var base = require('./base');

module.exports = {
    resolve: {
        alias: {
            'styles': `./${base.src}/Styles/`,
            'components':  `./${base.src}/Components/`,
            'pages':  `./${base.src}/Pages/`,
            'actions':  `./${base.src}/Actions/`,
            'config':  `./${base.src}/Configs/`,
            'stores':  `./${base.src}/Stores`,
            'reducers':  `./${base.src}/Reducers`,
            'images' : `./${base.src}/Images`
        }
    }

}
