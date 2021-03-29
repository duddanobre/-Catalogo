const express = require('express');

const userconntroller = require('../controllers/UserController');
//const seriescontroller = require('./controllers/SeriesController');
const logincontroller = require('../controllers/LoginController');


const routes = express.Router();

routes.post('/login', logincontroller.create);

routes.get('/user', userconntroller.index);
routes.post('/users', userconntroller.create);


//routes.get('/series', seriescontroller.index);

module.exports = routes;


