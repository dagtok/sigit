var pedidoController = function (Pedido) {

    var post = function (req, res) {
        delete req.body._id; // Quitamos el _id por default desde angular para que mongoose pueda generar uno

        var pedido = new Pedido(req.body);

        var AnexoModel = require('../models/anexoTecnicoModel');
        var tmp_pedido = {};
        var mongoose = require('mongoose');

        if (!req.body.elaboro) {
            res.status(400);
            res.send('Estado del pedido es requerido');
        } else {
            var tmp_pedido = pedido.toJSON();

            Pedido.count({
                'unidad.clave_ur': tmp_pedido.unidad.clave_ur
            }, function (err, numero_pedidos) {
                if (numero_pedidos == 0) { //Si es la primera vez que la unidad intenta registrar el pedido    
                    pedido.save(function (err, _pedido) {
                        tmp_pedido.articulos.forEach(articulo => {
                            var anexo = new AnexoModel();
                            // anexo._id = new mongoose.Types.ObjectId();
                            anexo.articulo = articulo._id;
                            anexo.cantidad = articulo.cantidad;
                            anexo.pedido = _pedido._id;
                            anexo.unidad = tmp_pedido.unidad._id;
                            anexo.ur_sigla = tmp_pedido.unidad.sigla;
                            anexo.ur_nombre = tmp_pedido.unidad.nombre;
                            anexo.categoria = articulo.categoria;
                            anexo.save();
                        });
                    });

                    res.status(201);
                    res.send(pedido);

                } else if (numero_pedidos >= 1) {
                    res.status(500);
                    res.send({
                        descripcion: 'Su Centro o Unidad ya tiene una solicitud en proceso'
                    });
                }
            });
        }
    }

    var get = function (req, res) {
        var consulta;
        
        if (req.query.clave_ur) {
            consulta = Pedido.find( { 'unidad.clave_ur': req.query.clave_ur } );
        } else if (req.query.buscar) {
            var parametro_busqueda = req.query.buscar;
            consulta = Pedido.find({ $text: { $search: parametro_busqueda } }, { score: { $meta: "textScore" } }).sort({ score: { $meta: "textScore" } });
        } else {
            consulta = Pedido.find();
        }

        consulta.exec(function (err, pedidos) {

            if (err)
                res.status(500).send(err);
            else {

                var returnPedidos = [];
                pedidos.forEach(function (element, index, array) {
                    var newPedido = element.toJSON();
                    newPedido.links = {};
                    newPedido.links.self = 'http://' + req.headers.host + '/api/pedidos/' + newPedido._id
                    returnPedidos.push(newPedido);
                });
                res.json(returnPedidos);
            }
        });
    }

    return {
        post: post,
        get: get
    }
}

module.exports = pedidoController;