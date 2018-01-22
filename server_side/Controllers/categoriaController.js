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
        var consulta;
        
        if (req.query.buscar) {
            var parametro_busqueda = req.query.buscar;
            consulta = Categoria.find({ $text: { $search: parametro_busqueda } }, { score: { $meta: "textScore" } }).sort({ score: { $meta: "textScore" } });
        } else {
            consulta = Categoria.find();
        }

        consulta.exec(query, function(err,categorias){

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