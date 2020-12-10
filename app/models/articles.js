'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

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
        },
        userArticle: {
            type: ObjectId,
            ref: 'user',
            required: true
        }
    }, {
        timestamps: () => new Date().getTime()
    }
);

module.exports = mongoose.model('article', articleSchema, 'articles');