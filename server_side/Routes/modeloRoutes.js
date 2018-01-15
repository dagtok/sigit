var express = require('express');

var routes = function (Modelo) {
    var modeloRouter = express.Router();

    var modeloController = require('../Controllers/modeloController')(Modelo)
    modeloRouter.route('/')
        .post(modeloController.post)
        .get(modeloController.get);

    
    modeloRouter.route('/nombres')
        .get(modeloController.getNombres);

    modeloRouter.use('/:modeloId', function (req, res, next) {
        Modelo.findById(req.params.modeloId, function (err, modelo) {
            if (err)
                res.status(500).send(err);
            else if (modelo) {
                req.modelo = modelo;
                next();
            }
            else {
                res.status(404).send('no modelo found');
            }
        });
    });

    modeloRouter.route('/:modeloId')
        .get(function (req, res) {

            var returnModelo = req.modelo.toJSON();

            returnModelo.links = {};
            var newLink = 'http://' + req.headers.host + '/api/modelos/?genre=' + returnModelo.genre;
            returnModelo.links.FilterByThisGenre = newLink.replace(' ', '%20');
            res.json(returnModelo);

        })
        .put(function (req, res) {
            req.modelo.title = req.body.title;
            req.modelo.author = req.body.author;
            req.modelo.genre = req.body.genre;
            req.modelo.read = req.body.read;
            req.modelo.save(function (err) {
                if (err)
                    res.status(500).send(err);
                else {
                    res.json(req.modelo);
                }
            });
        })
        .patch(function (req, res) {
            
            console.log(req.body);

            if (req.body._id)
                delete req.body._id;
            for (var p in req.body) {
                req.modelo[p] = req.body[p];
            }

            req.modelo.save(function (err) {
                if (err)
                    res.status(500).send(err);
                else {
                    res.json(req.modelo);
                }
            });
        })
        .delete(function (req, res) {
            req.modelo.remove(function (err) {
                if (err)
                    res.status(500).send(err);
                else {
                    res.status(204).send('Removed');
                }
            });
        });
    return modeloRouter;
};

module.exports = routes;