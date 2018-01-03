var articuloController = function(Articulo){

    var post = function(req, res){
        var articulo = new Articulo(req.body);

        if( !req.body.nombre ){
            res.status(400);
            res.send('El nombre del articulo es requerido.');
        } else {
            articulo.save();
            res.status(201);
            res.send(articulo);
        }
    }

    var get = function(req,res){

        var query = {};

        // Si el usuario busca por genero 
        console.log(req.query.token);

        if (req.query.token) {
            // console.log("BUSCANDO");
            query = { token: new RegExp('^'+req.query.token, "i") };
        }
        Articulo.find(query, function(err,articulos){

            if(err)
                res.status(500).send(err);
            else {

                var returnArticulos = [];
                articulos.forEach(function(element, index, array){
                    var newArticulo = element.toJSON();
                    newArticulo.links= {};
                    newArticulo.links.self = 'http://' + req.headers.host + '/api/articulos/' + newArticulo._id
                    returnArticulos.push(newArticulo);
                });
                res.json(returnArticulos);
            }
        });
    }

    return {
        post: post,
        get:get
    }
}

module.exports = articuloController;