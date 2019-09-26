// Establecer todos los tipos de mensajes que enviaremos al cliente por el cual nosotros podremos manipular mas facilmente

exports.success = (req, res, message, status) => {
    // res.send(message);
    res.status(status || 200).send({
        error:'',
        body:message
    })
};

exports.error = (req, res, message, status) => {
    // res.send(message);
    res.status(status || 500).send({
        error:message,
        body:''
    })
};