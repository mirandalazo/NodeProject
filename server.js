'use strict'

const express = require('express');
const app = express();
const config = require('./config');
const routesConfig = require('./config/routes');
const expressConfig = require('./config/express');

expressConfig.initExpress(app);
routesConfig.initRoutes(app);

app.listen(config.PORT, function () {
    console.log(`Listening to port ${config.PORT}`)
});

//npm init
//npm i --save express