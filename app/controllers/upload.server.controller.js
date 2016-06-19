/**
 * Created by Administrator on 2016/6/16.
 */


"use strict";

let request = require('request');
let config = require('../../config/config');
let fs = require('fs');
let path = require('path');
let uuid = require('node-uuid');
let multiparty = require('multiparty');

module.exports = {
    clubpic:function(clubId,callback){
        if(clubId){

            let folder_exists = fs.existsSync(config.clubrootdir);
            if(!folder_exists){
                fs.mkdirSync(config.clubrootdir);
            };

            let form = new multiparty.Form({uploadDir:userpath});
            form.maxFilesSize = 2 * 1024 * 1024;
            form.uploadDir = userpath;
            form.parse(req,function(err,filds,files){

            //let filename == uid.v4();

            callback({result:true});



        } else {
            callback({result:false,error:'缺少俱乐部ID'});
        }
    }
};