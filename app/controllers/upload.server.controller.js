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
let ClubController = require('./club.server.controller');

module.exports = {
    clubpic:function(clubId,req,callback,pictype){
        if(clubId){
            let folder_exists = fs.existsSync(config.clubrootdir);
            if(!folder_exists){
                fs.mkdirSync(config.clubrootdir);
            };

            folder_exists = fs.existsSync(config.clubrootdir + clubId+"\\");
            if(!folder_exists){
                fs.mkdirSync(config.clubrootdir + clubId+"\\");
            };

            

            let filepath = config.clubrootdir + clubId+"\\";

            let form = new multiparty.Form({uploadDir:filepath});
            form.maxFilesSize = 2 * 1024 * 1024;
            form.uploadDir = filepath;

            form.parse(req,function(err,filds,files) {
                if(err){
                    console.log(err);
                    callback({result:false,error:'UploadUserPictrueError.Uploading'});
                    return;
                } else {

                    if(files.inputFile){
                        var inputFile = files.inputFile[0];
                        var extname = path.extname(inputFile.originalFilename).toLowerCase();
                        if( extname != '.png' && extname != '.jpg' && extname != '.jpeg'){
                            callback({result:false,error:'UploadfileNotPictrue'});
                            return;
                        }

                        let uploadedPath = inputFile.path;
                        let filename = uuid.v4() + extname;
                        let dstPath = filepath + filename;

                        fs.rename(uploadedPath,dstPath,function(err){
                            if(err){
                                console.log('rename error:' + err);
                                callback({result:false,error:'UploadUserPictrueError.SaveFile'});
                            } else {
                                console.log('rename ok');
                                //根据id获取俱乐部信息
                                ClubController.getClub(clubId,function(result){
                                    let currentClub = result.body;
                                    currentClub.pictureList.push(filename);
                                    ClubController.updateClubInfo(clubId,currentClub,function(clubUpResult){

                                    });

                                    callback({result:true,filename:filename});
                                });
                            }
                        });
                    } else {
                        console.log(files.inputFile);
                        console.log("没有inputFile");
                        callback({result:false,error:'Content-Disposition.SetError,Content-Disposition设置错误name=inputFile'});
                    }
                };
            });
        } else {
            callback({result:false,error:'缺少俱乐部ID'});
        }
    }
};