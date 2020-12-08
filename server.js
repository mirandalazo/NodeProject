'use strict'

const express = require('express');
const app = express();
const config = require('./config');
const routesConfig = require('./config/routes');
const expressConfig = require('./config/express');
const mongoConfig = require('./config/mongoose');

expressConfig.initExpress(app);
routesConfig.initRoutes(app);
mongoConfig.initMongoose();

app.listen(config.PORT, function () {
    console.log(`Listening to port ${config.PORT}`)
});

//npm init
//npm i --save express