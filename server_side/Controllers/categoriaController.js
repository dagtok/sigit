var categoriaController = function(Categoria){

    var post = function(req, res){
        var categoria = new Categoria(req.body);

        if( !req.body.nombre ){
            res.status(400);
            res.send('El nombre del categoria es requerido.');
        } else {
            categoria.save();
            res.status(201);
            res.send(categoria);
        }
    }

    var get = function(req,res){

        var query = {};

        // Si esta 
        if(req.query.genre)
        {
            query.genre = req.query.genre;
        }
        Categoria.find(query, function(err,categorias){

            if(err)
                res.status(500).send(err);
            else {

                var returnCategorias = [];
                categorias.forEach(function(element, index, array){
                    var newCategoria = element.toJSON();
                    newCategoria.links= {};
                    newCategoria.links.self = 'http://' + req.headers.host + '/api/categorias/' + newCategoria._id
                    returnCategorias.push(newCategoria);
                });
                res.json(returnCategorias);
            }
        });
    }

    return {
        post: post,
        get:get
    }
}

module.exports = categoriaController;