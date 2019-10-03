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
    // list.push(message);
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(){
    //return 'list';
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    //get para recibir un mensaje especifico
    //update para actualizar un mensaje
    //delete para eliminar un mensaje especifico
    //create para añadir un mensaje espefico
}