'use strict'

const responseToJSON = (prop) => {
    return (req, res, next) => { return res.json(req.resources[prop])};
};
module.exports = {
    responseToJSON: responseToJSON
};