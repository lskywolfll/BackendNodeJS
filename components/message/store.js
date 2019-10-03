//falsear la base de datos (MOK)
const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;
//Conexion con base de datos mongoose
//mongodb+srv://DB_USER:DB_PASSWORD@DB_HOST/DB_NAME
db.connect('mongodb+srv://db_user_sky:1llD1UgBueud8bAj@cluster0-b0vhf.mongodb.net/telegrom_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

console.log('[db] Conectada con exito');

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