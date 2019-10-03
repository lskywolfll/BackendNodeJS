//falsear la base de datos (MOK)
const Model = require('./model');

function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(filterUser){
    let filter = {};

    if(filterUser != null){
        filter = { user: filterUser }
    }

    const messages = await Model.find(filter);
    return messages;
}

async function updateText(id, message){
    const foundMessage = await Model.findById(id);
    foundMessage.message = message;

    const newMessage = await foundMessage.save();
    return newMessage;
}

function removeMessage(id){
    return Model.deleteOne({
        _id:id
    });
}

module.exports = {
    //funciones que se usan en el controlador, palabra clave: funcion a la cual se hace referencia
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage,
    //get para recibir un mensaje especifico
    //update para actualizar un mensaje
    //delete para eliminar un mensaje especifico
    //create para añadir un mensaje espefico
    //patch sirve para modificar datos
}