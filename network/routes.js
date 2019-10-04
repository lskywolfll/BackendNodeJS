const express = require('express');
const message = require('../components/message/network');
const user = require('../components/user/network');
const chat = require('../components/chat/network');

const routes = (server) => {
    // Se crea una url predefinida con el /text y la ruta especifica para el componente en concreto
    server.use('/message', message);
    server.use('/user', user);
    server.use('/chat', chat);
};

module.exports = routes;