var express = require('express'),
    mongoose = require('mongoose'),
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

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

pedidoRouter = require('./Routes/pedidoRoutes')(Pedido);
articuloRouter = require('./Routes/articuloRoutes')(Articulo);
categoriaRouter = require('./Routes/categoriaRoutes')(Categoria);

app.use('/api/pedidos', pedidoRouter);
app.use('/api/articulos', articuloRouter);
app.use('/api/categorias', categoriaRouter);

app.get('/', function(req, res){
    res.send('SIGIT - WEB API');
});

app.listen(port, function(){
    console.log('Gulp is running my app on  PORT: ' + port);
});

module.exports = app;