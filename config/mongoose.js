'use strict'

const mongoose = require('mongoose');
const config = require('./index');

const initMongoose = () => {
    mongoose.connect(config.mongoUrl, {useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });

    //test DB connection
    // const db = mongoose.connection;
    // db.on('error', () => {
    //     console.log('error');
    // });
    // db.once('open', () => {
    //     console.log('DB connected');
    // });

};

module.exports = {
    initMongoose: initMongoose
};