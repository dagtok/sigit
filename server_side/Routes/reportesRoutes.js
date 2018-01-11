var express = require('express');
var routes = function(){
    var reportesRouter = express.Router();
    
    var reportesController = require('../Controllers/reportesController')();

    reportesRouter.route('/anexo-tecnico')
        .get(reportesController.obtenerAnexoTecnico);
    
    reportesRouter.route('/estudio-factibilidad')
        .get(reportesController.obtenerEstudioFactibilidad);

    return reportesRouter;
    
};

module.exports = routes;