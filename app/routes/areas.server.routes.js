

"use strict";

let AreasController = require('../controllers/areas.server.controller');

module.exports = function(app){
    app.route('/city')
        .get(function(req,res){
            AreasController.getCity(function(result){
                res.send(result);
            });
        });

    app.route('/province')
        .get(function(req,res){
            AreasController.getProvince(function(result){
                res.send(result);
            });
        });

    app.route('/district')
        .get(function(req,res){
            AreasController.getDistrict(function(result){
                res.send(result);
            });
        });
};