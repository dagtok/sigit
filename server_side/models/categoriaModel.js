var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var categoriaModel = new Schema({
    nombre: {type: String}
});

module.exports= mongoose.model('Categoria', categoriaModel);