var unidadController = function (Unidad) {
    var get = function (req, res) {
        var consulta;
        var pagina = 1;
        var tamanio_pagina = 50;

        if (req.query.pagina) {
            pagina = req.query.pagina;
        }

        if (req.query.tamanio_pagina) {
            tamanio_pagina = req.query.tamanio_pagina;
        }

        if (req.query.buscar) {
            var parametro_busqueda = req.query.buscar;
            consulta = Unidad.find({ $text: { $search: parametro_busqueda } }, { score: { $meta: "textScore" } }).sort({ score: { $meta: "textScore" } });
        } else {
            consulta = Unidad.find();
        }

        consulta.skip(tamanio_pagina*(pagina-1)).limit(tamanio_pagina);

        consulta.exec(function (err, unidades) {

            if (err)
                res.status(500).send(err);
            else {
                var returnUnidades = [];
                unidades.forEach(function (element, index, array) {
                    var newUnidad = element.toJSON();
                    newUnidad.links = {};
                    newUnidad.links.self = 'http://' + req.headers.host + '/api/unidades/' + newUnidad._id
                    returnUnidades.push(newUnidad);
                });
                res.json(returnUnidades);
            }
        });
    }

    var getNiveles = function (req, res) {

        var Clasificacion = require('../models/unidadClasificacionModel');
        Clasificacion.find(null, function (err, unidades) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(unidades);
            }
        });
    }

    var getUnidadesPorClasificacion = function (req, res) {

        var query = {};
        if (req.query.clasificacion) {
            query.clase = req.query.clasificacion;
        }
        Unidad.find(query, function (err, unidades) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(unidades);
            }
        });
    }

    return {
        get: get,
        getNiveles: getNiveles,
        getUnidadesPorClasificacion: getUnidadesPorClasificacion
    }
}

module.exports = unidadController;