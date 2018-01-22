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
        var consulta;
        
        if (req.query.buscar) {
            var parametro_busqueda = req.query.buscar;
            consulta = Articulo.find({ $text: { $search: parametro_busqueda } }, { score: { $meta: "textScore" } }).sort({ score: { $meta: "textScore" } });
        } else {
            consulta = Articulo.find();
        }

        consulta.exec(function(err,articulos){

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