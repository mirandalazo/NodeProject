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

// route not found
app.all('*',(req,res,next)=>{
    return res.status(404).json({statusCode:404, message: `Route not found ${req.url}`});
});

//middleware pentru error handling
app.use((err,req,res,next)=>{
    res.status(err && err.statusCode || 400).json({
        status:'error',
        message:err && err.message || 'Default error'
    });
});

app.listen(config.PORT, function () {
    console.log(`Listening to port ${config.PORT}`)
});

//npm init
//npm i --save express