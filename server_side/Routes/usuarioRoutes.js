var express = require('express');


var routes = function(Usuario){
    var usuarioRouter = express.Router();

    var usuarioController = require('../Controllers/usuarioController')(Usuario)
    usuarioRouter.route('/')
        .post(usuarioController.post)
        .get(usuarioController.get);
    
    usuarioRouter.route('/login')
        .post(usuarioController.login)

    usuarioRouter.use('/:usuarioId', function(req,res,next){
        console.log(req.params.usuarioId);
        Usuario.findById(req.params.usuarioId, function(err,usuario){
            if(err)
                res.status(500).send(err);
            else if(usuario)
            {
                req.usuario = usuario;
                next();
            }
            else
            {
                res.status(404).send('El usuario no existe');
            }
        });
    });
    
    usuarioRouter.route('/:usuarioId')
        .get(function(req,res){
            console.log("Buscando Usuario");
            var returnUsuario = req.usuario.toJSON();

            returnUsuario.links = {};
            var newLink = 'http://' + req.headers.host + '/api/usuarios/?genre=' + returnUsuario.genre;
            returnUsuario.links.FilterByThisGenre = newLink.replace(' ', '%20');
            res.json(returnUsuario);

        })
        .put(function(req,res){
            req.usuario.title = req.body.title;
            req.usuario.author = req.body.author;
            req.usuario.genre = req.body.genre;
            req.usuario.read = req.body.read;
            req.usuario.save(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.json(req.usuario);
                }
            });
        })
        .patch(function(req,res){
            if(req.body._id)
                delete req.body._id;

            for(var p in req.body)
            {
                req.usuario[p] = req.body[p];
            }

            req.usuario.save(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.json(req.usuario);
                }
            });
        })
        .delete(function(req,res){
            req.usuario.remove(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.status(204).send('Removed');
                }
            });
        });
    return usuarioRouter;
};

module.exports = routes;