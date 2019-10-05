const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//Forma del equema de datos a guardar en mongo
const mySchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat',
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    message: {
        type: String,
        required: true,
    },
    date: Date,
    file: String,
});
//Nombre de la tabla, esquema de los datos
const model = mongoose.model('Messages', mySchema);
module.exports = model;