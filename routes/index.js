const routes = require('express').Router();
const controllerName = require('../controllers/showName')

routes.get('/', controllerName)

module.exports = routes;

