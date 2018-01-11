var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var unidadClasificacionModel = new Schema({
    clasificacion: {type: String},
    descripcion: {type: String}
});

module.exports= mongoose.model('unidad_clasificaciones', unidadClasificacionModel);