var express = require('express');


var routes = function (Unidad) {
    var unidadRouter = express.Router();

    var unidadController = require('../Controllers/unidadController')(Unidad)
    unidadRouter.route('/')
        .get(unidadController.get);

    unidadRouter.route('/niveles')
        .get(unidadController.getNiveles);
    unidadRouter.route('/clasificacion')
        .get(unidadController.getUnidadesPorClasificacion);

    unidadRouter.use('/:unidadId', function (req, res, next) {
        // console.log('unidadId');
        // console.log(req.params.unidadId);
        Unidad.findById(req.params.unidadId, function (err, unidad) {
            if (err)
                res.status(500).send(err);
            else if (unidad) {
                req.unidad = unidad;
                next();
            }
            else {
                res.status(404).send('El unidad no existe');
            }
        });
    });

    unidadRouter.route('/:unidadId')
        .get(function (req, res) {
            console.log("Buscando Unidad");
            var returnUsuario = req.unidad.toJSON();

            returnUsuario.links = {};
            var newLink = 'http://' + req.headers.host + '/api/unidades/?genre=' + returnUsuario.genre;
            returnUsuario.links.FilterByThisGenre = newLink.replace(' ', '%20');
            res.json(returnUsuario);

        })
        .put(function (req, res) {
            req.unidad.title = req.body.title;
            req.unidad.author = req.body.author;
            req.unidad.genre = req.body.genre;
            req.unidad.read = req.body.read;
            req.unidad.save(function (err) {
                if (err)
                    res.status(500).send(err);
                else {
                    res.json(req.unidad);
                }
            });
        })
        .patch(function (req, res) {
            if (req.body._id)
                delete req.body._id;

            for (var p in req.body) {
                req.unidad[p] = req.body[p];
            }

            req.unidad.save(function (err) {
                if (err)
                    res.status(500).send(err);
                else {
                    res.json(req.unidad);
                }
            });
        })
        .delete(function (req, res) {
            req.unidad.remove(function (err) {
                if (err)
                    res.status(500).send(err);
                else {
                    res.status(204).send('Removed');
                }
            });
        });

    /*
unidadRouter.route('/:unidadId')
    .get(function(req,res){
        console.log("Buscando Unidad");
        var returnUnidad = req.unidad.toJSON();

        returnUnidad.links = {};
        var newLink = 'http://' + req.headers.host + '/api/unidades/?genre=' + returnUnidad.genre;
        returnUnidad.links.FilterByThisGenre = newLink.replace(' ', '%20');
        res.json(returnUnidad);

    });
*/
    return unidadRouter;
};

module.exports = routes;