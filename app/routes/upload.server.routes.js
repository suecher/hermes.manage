/**
 * Created by Administrator on 2016/6/16.
 */

"use strict";

let UploadController = require('../controllers/upload.server.controller');

module.exports = function(app){
    /**
     * 设置俱乐部图片
     */
    app.route('/uploadclubpic')
        .post(function(req,res){
            let clubId = req.query.clubId;
            UploadController.clubpic(clubId,req,function(){
                res.json({result:true});
            });
        });

    /**
     * 设置俱乐部Logo
     */
    app.route('/uploadclublogo')
        .post(function(req,res){
            let clubId = req.query.clubId;
            UploadController.clubpic(clubId,req,function(){
                res.json({result:true});
            });
        });

    /**
     * 设置俱乐部活动
     */
    app.route('/uploadadvert')
        .post(function(req,res){
            let clubId = req.query.cludId;
        })
};