'use strict'

const ENV = process.env.NODE_ENV || 'dev';
const config = require(`./env/${ENV}`);

module.exports = config;