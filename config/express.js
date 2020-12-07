'use strict'

const bodyParser = require('body-parser');

const initExpress = (app) => {
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use((req, res, next) => {
        req.resources = req.resources || {};
        next();
    })
};

module.exports = {
    initExpress: initExpress
};
