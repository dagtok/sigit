var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var pedidoModel = new Schema({
	creado: { type: Date, required: true, default: Date.now },
	pedido_id: { type: String },
	estado: { type: String },
	unidad: { type: Object },
	elaboro: {
		_id: { type: String },
		nombre: { type: String },
		fecha: { type: Date, default: Date.now }
	},
	autorizo: {
		_id: { type: String },
		nombre: { type: String },
		fecha: { type: Date, default: Date.now }
	},
	articulos: { type: Object },
});

module.exports = mongoose.model('Pedido', pedidoModel);