const User = require('../models/users');

const isAdminVal = true;
const isAdmin = (req, res, next) => {
    if (isAdminVal) {
        return next();
    }
    return res.send('Unauth');

};

const getUsers = (req, res, next) => {
    User.find((err, result) => {
        if (err) {
            return res.json(err);
        }
        req.resources.users = result;
        return next();
        // return res.json(result);
    })
};

const getUserById = (req, res, next) => {
    User.find({_id: req.params.id}, (err, result) => {
        if (err) {
            return res.json(err);
        }
        //  return res.json(result);
        req.resources.user = result;
        return next();
    })
};

// const postUser = (req, res, next) => {
//     console.log('post users', req.body);
//     //  req.resources.users = {test:1};
//     next();
// };

const putUser = (req, res, next) => {
    User.replaceOne({_id: req.params.id}, req.body, (err, result) => {
        if (err) {
            return res.json(err);
        }
        req.resources.savedUser = result;
        return next();
    });
};

const createUser = (req, res, next) => {
    const user = new User(req.body);
    user.save((err, result) => {
        if (err) {
            return res.json(err);
        }
        //return res.json(result);
        req.resources.savedUser = result;
        return next();
    })
};

const deleteUser = (req, res, next) => {
    User.deleteOne({_id: req.params.id}, (err, result) => {
        if (err) {
            return res.json(err);
        }
        return res.json(result);
    })
};

module.exports = {
    isAdmin: isAdmin,
    getUsers: getUsers,
    //  postUser: postUser,
    putUser: putUser,
    createUser: createUser,
    getUserById: getUserById,
    deleteUser: deleteUser
};