// Estaran las rutas y encargada de recibir las rutas http e procesarlas por el controlador
const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/get', (req,res) => {
    controller.getMessages()
    .then( (messageList) => {
        response.success(req,res, messageList, 200);
    })
    .catch( e => {
        response.error(req, res, 'Unexpected Error', 500, e);
    })
});

router.post('/post', (req,res) => {
    // res.send('Hola desde Post');
    
    controller.addMessage(req.body.user, req.body.Message)
    .then( () => {
        response.success(req,res, 'Creado Correctamente', 201);
    })
    .catch( () => {
        response.error(req,res, 'Informacion invalida', 500, 'Error en el controlador para logearse');
    });

});

router.delete('/delete', (req,res) => {
    console.log(req.query);
    console.log(req.body);
    // res.send(`Mensaje ${req.body.text} añadido correctamente`);
    // res.status(201).send({error:'None',message:"I'M alive in your body :^) "})
    response.success(req,res, 'Creado Correctamente', 201);
});

module.exports = router;