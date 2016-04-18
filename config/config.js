/**
 * Created by Administrator on 2016/4/14.
 */

var config = null;

if(process && process.env && process.env.NODE_ENV){
    config = require('./env/development.js');
}else{
    config = require('./env/development.js');
}

module.exports = config;