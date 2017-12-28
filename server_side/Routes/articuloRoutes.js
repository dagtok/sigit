var express = require('express');


var routes = function(Articulo){
    var articuloRouter = express.Router();

    var articuloController = require('../Controllers/articuloController')(Articulo)
    articuloRouter.route('/')
        .post(articuloController.post)
        .get(articuloController.get);

    articuloRouter.use('/:articuloId', function(req,res,next){
        Articulo.findById(req.params.articuloId, function(err,articulo){
            if(err)
                res.status(500).send(err);
            else if(articulo)
            {
                req.articulo = articulo;
                next();
            }
            else
            {
                res.status(404).send('no articulo found');
            }
        });
    });
    
    articuloRouter.route('/:articuloId')
        .get(function(req,res){

            var returnArticulo = req.articulo.toJSON();

            returnArticulo.links = {};
            var newLink = 'http://' + req.headers.host + '/api/articulos/?genre=' + returnArticulo.genre;
            returnArticulo.links.FilterByThisGenre = newLink.replace(' ', '%20');
            res.json(returnArticulo);

        })
        .put(function(req,res){
            req.articulo.title = req.body.title;
            req.articulo.author = req.body.author;
            req.articulo.genre = req.body.genre;
            req.articulo.read = req.body.read;
            req.articulo.save(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.json(req.articulo);
                }
            });
        })
        .patch(function(req,res){
            if(req.body._id)
                delete req.body._id;

            for(var p in req.body)
            {
                req.articulo[p] = req.body[p];
            }

            req.articulo.save(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.json(req.articulo);
                }
            });
        })
        .delete(function(req,res){
            req.articulo.remove(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.status(204).send('Removed');
                }
            });
        });
    return articuloRouter;
};

module.exports = routes;