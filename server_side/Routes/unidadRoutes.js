var express = require('express');


var routes = function(Unidad){
    var unidadRouter = express.Router();
    
    var unidadController = require('../Controllers/unidadController')(Unidad)
    unidadRouter.route('/')
        .get(unidadController.get);
    
    unidadRouter.route('/niveles')
        .get(unidadController.getNiveles);
    unidadRouter.route('/clasificacion')
        .get(unidadController.getUnidadesPorClasificacion);
    /*
    unidadRouter.use('/:unidadId', function(req,res,next){
        console.log(req.params.unidadId);
        Unidad.findById(req.params.unidadId, function(err,unidad){
            if(err)
                res.status(500).send(err);
            else if(unidad)
            {
                req.unidad = unidad;
                next();
            }
            else
            {
                res.status(404).send('El unidad no existe');
            }
        });
    });
    
    unidadRouter.route('/:unidadId')
        .get(function(req,res){
            console.log("Buscando Unidad");
            var returnUnidad = req.unidad.toJSON();

            returnUnidad.links = {};
            var newLink = 'http://' + req.headers.host + '/api/unidads/?genre=' + returnUnidad.genre;
            returnUnidad.links.FilterByThisGenre = newLink.replace(' ', '%20');
            res.json(returnUnidad);

        });
    */
    return unidadRouter;
};

module.exports = routes;