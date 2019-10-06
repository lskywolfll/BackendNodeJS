// Establecer todos los tipos de mensajes que enviaremos al cliente por el cual nosotros podremos manipular mas facilmente

// npm i chalk => para agregar colores a nuestras respuestas por consola donde solamente nosotros sabreros el error especifico de lo ocurrido, sin brindar tanta informacion confidencial al usuario

// import chalk from 'chalk';
const chalk = require('chalk');

const statusMessages = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error'
}

exports.success = (req, res, message, status) => {
    // res.send(message);
    let statusContainer = status;
    let statusMessage = message;

    if(!status){
        status = 200;
    }

    if(!message){
        statusMessage = statusMessages[status];
    }

    res.status(statusContainer).send({
        error:'',
        body:statusMessage
    })
};

exports.error = (req, res, message, status, details) => {
    // res.send(message);
    console.log(chalk.red('[response error]:' + details));

    let statusContainer = status;
    let statusMessage = message;

    if(!status){
        status = 500;
    }

    if(!message){
        statusMessage = statusMessages['500'];
    }
    
    res.status(statusContainer).send({
        error:statusMessage,
        body:''
    })
};