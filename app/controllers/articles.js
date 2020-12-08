'use strict'

const Article = require('../models/articles');

const getArticles = (req, res, next) => {
    Article.find((err, result) => {
        if (err) {
            return res.json(err);
        }
        req.resources.articles = result;
        return next();
    })
};

const getArticleById = (req, res, next) => {
    Article.find({_id: req.params.id}, (err, result) => {
        if (err) {
            return res.json(err);
        }
        req.resources.article = result;
        return next();
    })
};

const createArticle = (req, res, next) => {
    const article = new Article(req.body);
    article.save((err, result) => {
        if (err) {
            return res.json(err);
        }
        req.resources.savedArticle = result;
        return next();
    })
};

const updateArticle = (req, res, next) => {
    Article.replaceOne({_id: req.params.id}, req.body, (err, result) => {
        if (err) {
            return res.json(err);
        }
        req.resources.savedArticle = result;
        return next();
    })
};

const deleteArticle = (req, res, next) => {
    Article.deleteOne({_id: req.params.id}, req.body, (err, result) => {
        if (err) {
            return res.json(err);
        }
        return res.json(result);
    })
};


module.exports = {
    getArticles: getArticles,
    createArticle: createArticle,
    getArticleById: getArticleById,
    updateArticle: updateArticle,
    deleteArticle: deleteArticle
};