/**
 * Created by SueCher on 2016/6/4.
 */
"use strict";

let request = require('request');
let config = require('../../config/config');

module.exports = {
    login:function(clientUser,callback){
        let options = {
            url:config.interface + "/managerlogin",
            headers:{
                'Content-Type':'application/json',
                'User-Agent':'request',
            },
            json:{
                "username":clientUser.username,
                "password":clientUser.password
            }
        };

        request.post(options,function(error,res,body){
            if (!error && res.statusCode == 200) {
                callback(body);
            }
        });
    }
};