const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req,res) => {

    controller.getChats()
    .then(( chats ) => {
        response.success(req, res, chats, 200);
    }).catch( e => {
        response.error(req, res, 'Inexpected Error', 500, e);
    });
});

router.post('/:userId', (req,res) => {

    controller.listChats(req.params.userId)
    .then( () => {
        response.success(req, res, 'Creado Correctamente', 201);
    }).catch(e => {
        response.error(req, res, 'Informacion Invalida', 500, 'Error en el controlador para crear un chat');
    });
});

module.exports = router;