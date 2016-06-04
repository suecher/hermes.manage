
"use strict";

let ClubController = require('../controllers/club.server.controller');

module.exports = function(app){
    app.route('/getclub')
        .post(function(req,res){
            ClubController.getClub(req.body.clubId,function(resulte){
                res.json(resulte);
            });
        });
};