const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//Forma del equema de datos a guardar en mongo
const mySchema = new Schema({
    users: 
    [
        {
            type: Schema.ObjectId,
            ref: 'User',
        },
    ]
});
//Nombre de la tabla, esquema de los datos
const model = mongoose.model('Chat', mySchema);
module.exports = model;