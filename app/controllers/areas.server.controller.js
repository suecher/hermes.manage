/**
 * Created by Administrator on 2016/6/3.
 */

"use strict";

let request = require('request');
let config = require('../../config/config');

module.exports = {
    getCity:function(callback){
        request(config.interface+"/areas/city", function (error, response, body) {
            if (!error && response.statusCode == 200) {
                callback(body);
            }
        });
    },
    getProvince:function(callback){
        request(config.interface+"/areas/province", function (error, response, body) {
            if (!error && response.statusCode == 200) {
                callback(body);
            }
        })
    },
    getDistrict:function(callback){
        request(config.interface+"/areas/district", function (error, response, body) {
            if (!error && response.statusCode == 200) {
                callback(body);
            }
        })
    }
};
