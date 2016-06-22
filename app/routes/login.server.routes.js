/**
 * Created by SueCher on 2016/6/4.
 */

"use strict";

let LoginController = require('../controllers/login.server.controller');

module.exports = function(app){
    app.route('/login')
        .post(function(req,res){
            LoginController.login(req.body,function(result){
                if(result.result){
                    req.session.user = result.body;
                }

                res.json(result);
            });
        });


};