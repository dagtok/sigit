var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var modeloModel = new Schema({
    categoria: {type: String},
    token: {type: String},
    atributos: {type: Array},
    propiedades: {type: Array}
});

module.exports= mongoose.model('Modelo', modeloModel);