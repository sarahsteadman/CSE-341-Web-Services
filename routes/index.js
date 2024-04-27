const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.eleanorRoute);
routes.get('/bridget', lesson1Controller.bridgetRoute);

module.exports = routes;