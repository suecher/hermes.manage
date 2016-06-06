/**
 * Created by SueCher on 2016/6/4.
 */

"use strict";

let ClubManagerController = require('../controllers/club.manager.server.controller');

module.exports = function(app){
    app.route('/login')
        .post(function(req,res){
            ClubManagerController.login(req.body,function(result){
                res.json(result);
            });
        });
};