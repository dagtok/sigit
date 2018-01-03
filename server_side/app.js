var express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser');

var db;
console.log('Hello');
if( process.env.ENV == 'Test' ) {
    // db = mongoose.connect('mongodb://localhost/bookAPI_test');
    db= mongoose.connect('mongodb://localhost/sigit_test', { useMongoClient: true });
} else {
    // db= mongoose.connect('mongodb://localhost/bookAPI');
    db= mongoose.connect('mongodb://localhost/sigit', { useMongoClient: true });
}

var Pedido = require('./models/pedidoModel');
var Articulo = require('./models/articuloModel');
var Categoria = require('./models/categoriaModel');
var Modelo = require('./models/modeloModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

pedidoRouter = require('./Routes/pedidoRoutes')(Pedido);
articuloRouter = require('./Routes/articuloRoutes')(Articulo);
categoriaRouter = require('./Routes/categoriaRoutes')(Categoria);
modeloRouter = require('./Routes/modeloRoutes')(Modelo);

app.use('/api/pedidos', pedidoRouter);
app.use('/api/articulos', articuloRouter);
app.use('/api/categorias', categoriaRouter);
app.use('/api/modelos', modeloRouter);
app.use('/api/modelos/nombres', modeloRouter);

app.get('/', function(req, res){
    res.send('SIGIT - WEB API');
});

app.listen(port, function(){
    console.log('Gulp is running my app on  PORT: ' + port);
});

module.exports = app;