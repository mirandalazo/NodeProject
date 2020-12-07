const isAdminVal = true;
const isAdmin = (req, res, next) => {
    if (isAdminVal) {
        return next();
    }
    return res.send('Unauth');

};

const getUsers = (req, res, next) => {
    console.log('get users');
    next();
};

const postUser = (req, res, next) => {
    console.log('post users',req.body);
  //  req.resources.users = {test:1};
    next();
};

const putUser = (req, res, next) => {
    console.log('put users');
    next();
};

module.exports = {
    isAdmin: isAdmin,
    getUsers: getUsers,
    postUser: postUser,
    putUser: putUser
};