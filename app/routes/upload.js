'use strict'

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const uploadController = require('../controllers/upload');

let upload = multer({storage: uploadController.storage});

router.post('/upload', upload.single('avatar'), (req, res, next) => {
        return res.json({upload: true})
    }
);
router.get('/downloadFile', (req, res, next) => {
    let filename = req.query.filename;
    let pathPrefix = path.resolve(__dirname, `../files/${filename}`);

    res.download(pathPrefix)
    }
);

module.exports = router;