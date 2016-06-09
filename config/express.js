/**
 * Created by Administrator on 2016/4/14.
 */

"use strict";


let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let session = require('express-session');
let cookieParser = require('cookie-parser');

module.exports = function(){
    console.log('init express...');

    let app = express();

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());


    app.use(cookieParser());
    app.use(session({
        secret:'12345',
        name:'testapp',
        cookie:{maxAge:80000},
        resave:true,
        saveUninitialized:true,
        rolling:true
    }));

    app.set('views','../views');
    app.set('view engine','ejs');
    app.use(express.static('../public'));

    require('../app/routes/main.server.routes')(app);
    require('../app/routes/club.server.routes')(app);
    require('../app/routes/areas.server.routes')(app);
    require('../app/routes/login.server.routes')(app);
    //require('../app/routes/message.server.routes')(app);
    //require('../app/routes/advert.server.routes')(app);

    app.use(function(req,res){
        res.status(404);
        try{
            return res.json('Not Found');
        }
        catch(e){
            console.error(e);
        }
    });

    app.use(function(err,req,res,next){
        if(!err) { return next()}
        res.status(500);
        try{
            return res.json(err.message || 'server error');
        } catch(e){
            console.error('500 set header after sent');
        }
    });

    return app;
};
