var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var unidadModel = new Schema({
    clave_ur: {type: String},
    unidad: {type: String},
    sigla: {type: String},
    clase_global: {type: String},
    clase: {type: String},
    clasificacion: {type: String}
});

module.exports= mongoose.model('Unidades', unidadModel);