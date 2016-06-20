
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

            let clubId = req.body._id;
            let obj = req.body;

            if(req.body){
                ClubController.updateClubInfo(clubId,obj,function(result){
                    console.log(result);
                    res.json({});
                });
            } else {
                console.log('客户端更新俱乐部信息出错')
            };
        });

    app.route('/activeuser')
        .post(function(req,res){
            let club = req.body.clubId;
            ClubController.activeClubUser(club,function(result){

            });
        });
};