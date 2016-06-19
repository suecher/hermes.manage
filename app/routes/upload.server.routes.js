/**
 * Created by Administrator on 2016/6/16.
 */

"use strict";

let UploadController = require('../controllers/upload.server.controller');

module.exports = function(app){
    app.route('/uploadclubpic')
        .post(function(req,res){
            let clubId = req.query.clubId;
            res.json({result:true});
        });
};