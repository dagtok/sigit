var pedidoController = function(Pedido){

    var post = function(req, res){
        var pedido = new Pedido(req.body);

        if( !req.body.elaboro ){
            res.status(400);
            res.send('Estado del pedido es requerido');
        } else {
            pedido.save();
            res.status(201);
            res.send(pedido);
        }
    }

    var get = function(req,res){

        var query = {};

        // Si el usuario busca por genero 
        if(req.query.estado)
        {
            query.estado = req.query.genre;
        }
        Pedido.find(query, function(err,pedidos){

            if(err)
                res.status(500).send(err);
            else {

                var returnPedidos = [];
                pedidos.forEach(function(element, index, array){
                    var newPedido = element.toJSON();
                    newPedido.links= {};
                    newPedido.links.self = 'http://' + req.headers.host + '/api/pedidos/' + newPedido._id
                    returnPedidos.push(newPedido);
                });
                res.json(returnPedidos);
            }
        });
    }

    return {
        post: post,
        get:get
    }
}

module.exports = pedidoController;