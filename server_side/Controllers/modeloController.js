var modeloController = function (Modelo) {

    var post = function (req, res) {
        var modelo = new Modelo(req.body);

        if (!req.body.categoria) {
            res.status(400);
            res.send('El categoria del modelo es requerido.');
        } else {
            modelo.save();
            res.status(201);
            res.send(modelo);
        }
    }

    var get = function (req, res) {
        var consulta;
        
        if (req.query.buscar) {
            var parametro_busqueda = req.query.buscar;
            consulta = Modelo.find({ $text: { $search: parametro_busqueda } }, { score: { $meta: "textScore" } }).sort({ score: { $meta: "textScore" } });
        } else {
            consulta = Modelo.find();
        }

        consulta.exec(function (err, modelos) {

            if (err)
                res.status(500).send(err);
            else {

                var returnModelos = [];
                modelos.forEach(function (element, index, array) {
                    var newModelo = element.toJSON();
                    newModelo.links = {};
                    newModelo.links.self = 'http://' + req.headers.host + '/api/modelos/' + newModelo._id
                    returnModelos.push(newModelo);
                });
                res.json(returnModelos);
            }
        });
    }

    var getNombres = function (req, res) {

        Modelo.find(null, 'categoria token', function (err, modelos) {
            if (err) {
                res.status(500).send(err);
            } else {
                var returnModelos = [];
                modelos.forEach(function (element, index, array) {
                    var newModelo = element.toJSON();
                    //newModelo.links = {};
                    //newModelo.links.self = 'http://' + req.headers.host + '/api/modelos/' + newModelo._id
                    returnModelos.push(newModelo);
                });
                res.json(returnModelos);
            }
        });
    }

    return {
        post: post,
        get: get,
        getNombres: getNombres
    }
}

module.exports = modeloController;