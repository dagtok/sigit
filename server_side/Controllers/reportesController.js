var reportesController = function () {
    var obtenerAnexoTecnico = function (req, res) {
        var Articulo = require('../models/articuloModel');
        var AnexoTecnico = require('../models/anexoTecnicoModel');

        // Cuenta el numero de piezas pedidas por unidad

        AnexoTecnico.aggregate([
            {
                $group: {
                    _id: "$articulo",
                    cantidad: {
                        $sum: "$cantidad"
                    },
                    escuelas: {
                        $push: {
                            sigla: "$ur_sigla",
                            nombre: "$ur_nombre",
                            pedido_id: "$pedido",
                            cantidad: "$cantidad"
                        }
                    }
                }
            },
            { $sort: { categoria: 1 } }
        ]).exec(function (err, result) {
            Articulo.populate(result, { path: "_id" }, function (err, reporte) {

                var reporte_categoria = [];
                var categoria_temporal = {
                    nombre: reporte[0]._id.categoria,
                    productos: []
                };

                reporte.forEach(articulo => {
                    if (articulo._id.categoria != categoria_temporal.nombre) {
                        reporte_categoria.push(categoria_temporal);

                        categoria_temporal = {
                            nombre: articulo._id.categoria,
                            productos: []
                        };
                    }
                    categoria_temporal.productos.push(articulo);
                });

                reporte_categoria.push(categoria_temporal);

                res.json(reporte_categoria);
            });
        });
    }
    var obtenerEstudioFactibilidad = function (req, res) {
        var AnexoTecnico = require('../models/anexoTecnicoModel');
        var Articulo = require('../models/articuloModel');

        AnexoTecnico.aggregate([{
            $group: {
                //_id: "$categoria",
                _id: "$articulo",
                total: {
                    $sum: "$cantidad"
                },
                unidades: {
                    $push: {
                        unidad: "$ur_sigla",
                        cantidad: "$cantidad"
                    }
                }
            }
        },
        { $sort: { categoria: 1 } }
        ], function (err, result) {
            if (err) {
                console.log(err);
            } else {
                Articulo.populate(result, { path: "_id" }, function (err, result) {
                    res.json(result);
                });
            }
        });
    }
    return {
        obtenerAnexoTecnico: obtenerAnexoTecnico,
        obtenerEstudioFactibilidad: obtenerEstudioFactibilidad
    }
}

module.exports = reportesController;