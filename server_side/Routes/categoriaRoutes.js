var express = require('express');


var routes = function(Categoria){
    var categoriaRouter = express.Router();

    var categoriaController = require('../Controllers/categoriaController')(Categoria)
    categoriaRouter.route('/')
        .post(categoriaController.post)
        .get(categoriaController.get);

    categoriaRouter.use('/:categoriaId', function(req,res,next){
        Categoria.findById(req.params.categoriaId, function(err,categoria){
            if(err)
                res.status(500).send(err);
            else if(categoria)
            {
                req.categoria = categoria;
                next();
            }
            else
            {
                res.status(404).send('no categoria found');
            }
        });
    });
    
    categoriaRouter.route('/:categoriaId')
        .get(function(req,res){

            var returnCategoria = req.categoria.toJSON();

            returnCategoria.links = {};
            var newLink = 'http://' + req.headers.host + '/api/categorias/?genre=' + returnCategoria.genre;
            returnCategoria.links.FilterByThisGenre = newLink.replace(' ', '%20');
            res.json(returnCategoria);

        })
        .put(function(req,res){
            req.categoria.title = req.body.title;
            req.categoria.author = req.body.author;
            req.categoria.genre = req.body.genre;
            req.categoria.read = req.body.read;
            req.categoria.save(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.json(req.categoria);
                }
            });
        })
        .patch(function(req,res){
            if(req.body._id)
                delete req.body._id;

            for(var p in req.body)
            {
                req.categoria[p] = req.body[p];
            }

            req.categoria.save(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.json(req.categoria);
                }
            });
        })
        .delete(function(req,res){
            req.categoria.remove(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.status(204).send('Removed');
                }
            });
        });
    return categoriaRouter;
};

module.exports = routes;