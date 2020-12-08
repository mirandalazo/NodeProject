'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
        title: {
            type: String,
            required: true,
            unique: false,
        },
        publishingDate: {
            type: Date,
            required: true,
            unique: false
        }
    }, {
        timestamps: () => new Date().getTime()
    }
);

module.exports = mongoose.model('article', articleSchema, 'articles');