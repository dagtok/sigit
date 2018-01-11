var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var usuarioModel = new Schema({
	creado: { type: Date, required: true, default: Date.now },
	unidad: {type: Object},
    nombre: {type: String},
    email: {type: String},
    tipo: {type: String},
    usuario: {type: String},
    password: {type: String},
    status: {type: String}
});

module.exports= mongoose.model('Usuario', usuarioModel);