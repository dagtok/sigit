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

            Usuario.findOne({ usuario: query.usuario, password: query.password }, function (err, usuario) {
                if (err)
                    res.status(500).send(err);
                else {
                    if (usuario) {
                        var Pedidos = require('./../models/pedidoModel');
                        Pedidos.count({ 'unidad.clave_ur': usuario.unidad.clave_ur }, function (err, no_pedidos) {
                            if (err)
                                res.status(500).send(err);
                            else {
                                usuario.no_pedidos = no_pedidos;
                                res.json(usuario);
                            }
                        });

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
                        res.status(201);
                        res.send(usuario);
                    });
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
        var consulta;
        var pagina = 1;
        var tamanio_pagina = 50;
        
        if (req.query.pagina) {
            pagina = req.query.pagina;
        }

        if (req.query.tamanio_pagina) {
            tamanio_pagina = req.query.tamanio_pagina;
        }

        if (req.query.buscar) {
            var parametro_busqueda = req.query.buscar;
            consulta = Usuario.find({ $text: { $search: parametro_busqueda } }, { score: { $meta: "textScore" } }).sort({ score: { $meta: "textScore" } });
        } else {
            consulta = Usuario.find();
        }

        consulta.skip(tamanio_pagina*(pagina-1)).limit(tamanio_pagina);

        consulta.exec(function (err, usuarios) {
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