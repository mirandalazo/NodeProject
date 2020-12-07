'use strict'

const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/users',
    //middlewares
   usersController.getUsers,
    (req, res, next) => {
        res.json({getUsers: true})
    }
);

router.post('/users',
    usersController.isAdmin,
    usersController.postUser,
    (req, res, next) => {
        res.json({postUsers: true});
    //    console.log(req.resources);
    }
);

router.put('/users',
    usersController.isAdmin,
    usersController.putUser,
    (req, res, next) => {
        res.json({putUsers: true})
    }
    );

module.exports = router;