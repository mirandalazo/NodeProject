'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

//denumire model, schema, denumire tabel
module.exports = mongoose.model('user', userSchema, 'users');