/**
 * Created by SueCh on 2016/4/17.
 */

"use strict";

let request = require('request');
let config = require('../../config/config');

module.exports = {
    getClub:function(clubId,callback){

        let options = {
            url:config.interface + "/clubbyid",
            headers:{
                'Content-Type':'application/json',
                'User-Agent':'request'
            },
            json:{
                "clubId":clubId
            }
        };

        request.post(options,function(error,res,body){
            if (!error && res.statusCode == 200) {
                callback(body);
            }
        });
    },
    updateClubInfo:function(clubId,updateObj,callback){
        let options = {
            url:config.interface + "/clubupdate",
            headers:{
                'Content-Type':'application/json',
                'User-Agent':'request'
            },
            json:{
                "clubId":clubId,
                "obj":updateObj
            }
        };

        request.post(options,function(error,res,body){
            if (!error && res.statusCode == 200) {
                callback(body);
            }
        });
    }
};