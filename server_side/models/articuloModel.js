var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var articuloModel = new Schema({
    //read: {type: Boolean, default:false}
    nombre: {type: String},
    token: {type: String},
    categoria: {type: String},
    cantidad: {type: Number},
    propiedades: {type: Array}
});

module.exports= mongoose.model('Articulo', articuloModel);