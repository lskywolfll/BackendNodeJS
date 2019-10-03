// Estaran las rutas y encargada de recibir las rutas http e procesarlas por el controlador
const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.post('/', (req, res) => {
    controller.addUser(req.body.name)
        .then( data => {
            response.success(req, res, data, 201);
        })
        .catch( err => {
            response.error(req, res, 'Internal error', 500, err);
        });
});

router.get('/', (req, res) => {
    const filterUsers = req.body.name || null;

    controller.addUser(filterUsers)
        .then( (listUsers) => {
            response.success(req, res, listUsers, 201);
        })
        .catch( err => {
            response.error(req, res, 'Error interno!', 500, err)
        });
});

module.exports = router;