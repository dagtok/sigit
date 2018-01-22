var express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser');

var db;

mongoose.Promise = global.Promise;

if (process.env.ENV == 'Test') {
    //db= mongoose.connect('mongodb://localhost/sigit_test', { useMongoClient: true });
} else {
    db = mongoose.connect('mongodb://localhost/sigit', { useMongoClient: true });
}
var Usuario = require('./models/usuarioModel');
var Pedido = require('./models/pedidoModel');
var Articulo = require('./models/articuloModel');
var Unidad = require('./models/unidadModel');
var Categoria = require('./models/categoriaModel');
var Modelo = require('./models/modeloModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

pedidoRouter = require('./Routes/pedidoRoutes')(Pedido);
usuarioRouter = require('./Routes/usuarioRoutes')(Usuario);
articuloRouter = require('./Routes/articuloRoutes')(Articulo);
unidadRouter = require('./Routes/unidadRoutes')(Unidad);
categoriaRouter = require('./Routes/categoriaRoutes')(Categoria);
modeloRouter = require('./Routes/modeloRoutes')(Modelo);

reportesRouter = require('./Routes/reportesRoutes')();

// Obtener niveles
app.use('/api/unidades', unidadRouter);
app.use('/api/unidades/niveles', unidadRouter);

app.use('/api/pedidos', pedidoRouter);
app.use('/api/usuarios', usuarioRouter);
app.use('/api/usuarios/login', usuarioRouter);
app.use('/api/articulos', articuloRouter);
app.use('/api/categorias', categoriaRouter);
app.use('/api/modelos', modeloRouter);
app.use('/api/modelos/nombres', modeloRouter);

// Reportes
app.use('/api/reportes/estudio-factibilidad', reportesRouter);
app.use('/api/reportes/anexo-tecnico', reportesRouter);
app.use('/api/reportes', reportesRouter);

app.get('/', function (req, res) {
    res.send('SIGIT - WEB API');
});

app.listen(port, function () {
    console.log('Gulp is running my app on  PORT: ' + port);
});

module.exports = app;