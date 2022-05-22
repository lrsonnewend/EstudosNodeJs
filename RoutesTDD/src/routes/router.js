const routes = require('express').Router()
const { user } = require('../models');
const sessionController = require('../controllers/sessionController');

//definir rotas
routes.post('/sessions', sessionController.store);


module.exports = routes;







/*user.create({
    name: 'lucaneta',
    email: 'lucas@gmail.com',
    password_hash: 'pok@sbro'
});*/
