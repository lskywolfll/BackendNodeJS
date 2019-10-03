const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//Forma del equema de datos a guardar en mongo
const mySchema = new Schema({
    name: String,
});
//Nombre de la tabla, esquema de los datos
const model = mongoose.model('User', mySchema);
module.exports = model;