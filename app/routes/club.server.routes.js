
"use strict";

let ClubController = require('../controllers/club.server.controller');

module.exports = function(app){
    app.route('/getclub')
        .post(function(req,res){
            ClubController.getClub(req.body.clubId,function(result){
                res.json(result);
            });
        });

    app.route('/updateclub')
        .post(function(req,res){
            let clubId = req.body.clubId;
            let obj = req.body.obj;
            ClubController.updateClubInfo(clubId,obj,function(result){
                res.json(result);
            });
        });
};