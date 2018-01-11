var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var anexoModel = new Schema({
    // _id: Schema.Types.ObjectId,
    articulo: { type: Schema.Types.ObjectId, ref: 'Articulo' },
    cantidad: { type: Number },
    pedido: { type: Schema.Types.ObjectId, ref: 'Pedido' },
    ur_sigla: { type: String },
    ur_nombre: { type: String },
    categoria: { type: String },
    unidad: { type: String },
    creado: { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model('Anexo', anexoModel);