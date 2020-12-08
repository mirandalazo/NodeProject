'use strict'

const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articles');
const responseToJSON = require('../utils/routeUtils').responseToJSON;

router.get('/articles', articleController.getArticles, responseToJSON('articles'));

router.get('/articles/:id', articleController.getArticleById, responseToJSON('article'));

router.post('/articles', articleController.getArticles, articleController.createArticle, responseToJSON('savedArticle'));

router.put('/articles/:id', articleController.updateArticle, responseToJSON('savedArticle'));

router.delete('/articles/:id', articleController.deleteArticle);

module.exports = router;