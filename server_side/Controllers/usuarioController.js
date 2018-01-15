var usuarioController = function (Usuario) {

    var login = function (req, res) {
        var usuario = new Usuario(req.body);

        if (!req.body.usuario) {
            res.status(400);
            res.send('El campo usuario es requerido');
        } else if (!req.body.password) {
            res.status(400);
            res.send('El campo de contraseña es requerido');
        } else {
            var query = usuario.toJSON();
            console.log('query');
            console.log(query);

            Usuario.findOne({ usuario: query.usuario, password: query.password }, function (err, usuario) {
                if (err)
                    res.status(500).send(err);
                else {
                    if (usuario) {
                        // usuario.token = '1231231231';
                        res.json(usuario);
                    } else {
                        res.status(500).send('El usuario no existe');
                    }
                }
            });
        }
    }

    var post = function (req, res) {
        var usuario = new Usuario(req.body);
        var tmp_usuario = {};

        console.log('req.body');
        console.log(req.body);

        if (!req.body.usuario) {
            res.status(400);
            res.send('El usuario es requerido');
        } else {
            var tmp_usuario = usuario.toJSON();

            Usuario.count({
                'usuario': tmp_usuario.usuario
            }, function (err, numero_usuarios) {
                if (numero_usuarios == 0) { //Si es la primera vez que la unidad intenta registrar el usuario    
                    usuario.save(function (err, _usuario) {
                        // console.log("Registrando datos del anexo");
                        // console.log(_usuario._id);
                        // console.log("END >>>");
                    });
                    res.status(201);
                    res.send(usuario);

                } else if (numero_usuarios >= 1) {
                    res.status(500);
                    res.send({
                        descripcion: 'Este usuario usuario ya esta registrado dentro del sistema'
                    });
                }
            });
        }
    }

    var get = function (req, res) {

        var query = {};

        // Si el usuario busca por genero 
        if (req.query.estado) {
            query.estado = req.query.genre;
        }
        Usuario.find(query, function (err, usuarios) {

            if (err)
                res.status(500).send(err);
            else {

                var returnUsuarios = [];
                usuarios.forEach(function (element, index, array) {
                    var newUsuario = element.toJSON();
                    newUsuario.links = {};
                    newUsuario.links.self = 'http://' + req.headers.host + '/api/usuarios/' + newUsuario._id
                    returnUsuarios.push(newUsuario);
                });
                res.json(returnUsuarios);
            }
        });
    }

    return {
        post: post,
        get: get,
        login: login
    }
}

module.exports = usuarioController;