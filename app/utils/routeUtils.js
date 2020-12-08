'use strict'

const responseToJSON = (prop) => {
    return (req, res, next) => res.json(req.resources[prop]);
};
module.exports = {
    responseToJSON: responseToJSON
};