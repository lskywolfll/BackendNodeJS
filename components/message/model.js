const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//Forma del equema de datos a guardar en mongo
const mySchema = new Schema({
    user: String,
    message: {
        type: String,
        required: true,
    },
    date: Date,
});
//Nombre de la tabla, esquema de los datos
const model = mongoose.model('Messages', mySchema);
module.exports = model;