var unidadController = function (Unidad) {
    var get = function (req, res) {

        var query = {};

        // Si esta 
        /**
         * if (req.query.genre) {
            query.genre = req.query.genre;
        }
         */
        Unidad.find(query, function (err, unidades) {

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