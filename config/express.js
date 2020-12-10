'use strict'

const bodyParser = require('body-parser');
const helmet = require('helmet');

const initExpress = (app) => {
    //helmet
    app.use(helmet.contentSecurityPolicy());
    app.use(helmet.dnsPrefetchControl());
    app.use(helmet.expectCt());
    app.use(helmet.frameguard());
    app.use(helmet.hidePoweredBy());
    app.use(helmet.hsts());
    app.use(helmet.ieNoOpen());
    app.use(helmet.noSniff());
    app.use(helmet.permittedCrossDomainPolicies());
    app.use(helmet.referrerPolicy());
    app.use(helmet.xssFilter());
    //---------------------------

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
