const express = require('express');
const message = require('../components/message/network');

const routes = (server) => {
    // Se crea una url predefinida con el /text y la ruta especifica para el componente en concreto
    server.use('/message', message);
};

module.exports = routes;