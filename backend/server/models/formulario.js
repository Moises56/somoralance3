const {Schema, model} = require('mongoose')

const formSchema = new Schema({
    nombre: String,
    descripcion: String,
    

},{
    timestamps: true
});

module.exports = model('Formulario', formSchema);