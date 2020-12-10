'use strict'

const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const responseToJSON = require('../utils/routeUtils').responseToJSON;

router.get('/users',
    //middlewares
    usersController.getUsers,
    responseToJSON('users')
);

router.get('/users/:id',
    usersController.getUserById,
   responseToJSON('user')
    );

router.post('/users',
     usersController.isAdmin,
    // usersController.postUser,
    usersController.getUsers,
    usersController.createUser,
   responseToJSON('savedUser')
);

router.put('/users/:id',
    usersController.isAdmin,
    usersController.putUser,
    responseToJSON('savedUser')
);

router.delete('/users/:id', usersController.deleteUser);

module.exports = router;