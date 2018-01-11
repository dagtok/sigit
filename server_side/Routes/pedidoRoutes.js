var express = require('express');


var routes = function(Pedido){
    var pedidoRouter = express.Router();

    var pedidoController = require('../Controllers/pedidoController')(Pedido)
    pedidoRouter.route('/')
        .post(pedidoController.post)
        .get(pedidoController.get);

    pedidoRouter.use('/:pedidoId', function(req,res,next){
        console.log(req.params.pedidoId);
        Pedido.findById(req.params.pedidoId, function(err,pedido){
            if(err)
                res.status(500).send(err);
            else if(pedido)
            {
                req.pedido = pedido;
                next();
            }
            else
            {
                res.status(404).send('El pedido no existe');
            }
        });
    });
    
    pedidoRouter.route('/:pedidoId')
        .get(function(req,res){
            // console.log("Buscando Pedido");
            var returnPedido = req.pedido.toJSON();

            returnPedido.links = {};
            var newLink = 'http://' + req.headers.host + '/api/pedidos/?genre=' + returnPedido.genre;
            returnPedido.links.FilterByThisGenre = newLink.replace(' ', '%20');
            res.json(returnPedido);

        })
        .put(function(req,res){
            req.pedido.title = req.body.title;
            req.pedido.author = req.body.author;
            req.pedido.genre = req.body.genre;
            req.pedido.read = req.body.read;
            req.pedido.save(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.json(req.pedido);
                }
            });
        })
        .patch(function(req,res){
            // console.log(req.headers);
            // Date.now
            if(req.body._id)
                delete req.body._id;
            
            // req.pedido.autorizo.fecha = Date.now;
            for(var p in req.body)
            {
                req.pedido[p] = req.body[p];
            }
            
            //console.log(req.pedido.autorizo.fecha);
            req.pedido.save(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.json(req.pedido);
                }
            });
        })
        .delete(function(req,res){
            req.pedido.remove(function(err){
                if(err)
                    res.status(500).send(err);
                else{
                    res.status(204).send('Removed');
                }
            });
        });
    return pedidoRouter;
};

module.exports = routes;