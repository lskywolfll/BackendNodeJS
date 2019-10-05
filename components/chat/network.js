const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.post('/', (req,res) => {

    controller.addChat()
    .then(( chats ) => {
        response.success(req, res, 'Ingresado correctamente', 200);
    }).catch( e => {
        
        response.error('Informacion Invalida', 500, 'Error en el controlador para crear un chat');
    });
});

router.get('/:userId', (req,res) => {

    controller.getChats(req.params.userId)
    .then( chats => {
        response.success(req, res, chats, 201);
    }).catch(e => {
        response.error(req, res, 'Inexpected Error', 500, e);
    });
});

module.exports = router;