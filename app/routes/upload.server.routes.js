/**
 * Created by Administrator on 2016/6/16.
 */

"use strict";

let UploadController = require('../controllers/upload.server.controller');

module.exports = function(app){
    app.route('/uploadclubpic')
        .post(function(req,res){
            //console.log(req);
            console.log(req.query);
            res.json({result:true});
        });
};