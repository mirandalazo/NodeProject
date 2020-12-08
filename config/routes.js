'use strict'

const path = require('path');

const initRoutes = (app) => {
    const routes = ['users','articles'];
    const routesPath = path.join(__dirname, '../app/routes');
    //__dirName = the path to current folder to be compatible with any env
    routes.forEach((route) => {
        app.use('/api',require(`${routesPath}/${route}`))
    })
};

module.exports = {initRoutes: initRoutes};