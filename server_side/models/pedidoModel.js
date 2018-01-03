var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var pedidoModel = new Schema({
    _id: {type: String},
	estado: {type: String},
	unidad: {type: Object},
	elaboro: {type: Object},
	autorizo: {type: Object},
	articulos: {type: Object},
});

module.exports= mongoose.model('Pedido', pedidoModel);